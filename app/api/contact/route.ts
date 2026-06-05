import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

// Form validation schema (same as client)
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name is required"),
  phone: z.string().optional(),
  service: z.enum(["Website", "Automation", "Consulting", "Other"], {
    message: "Please select a service",
  }),
  message: z.string().min(20, "Please provide more details (min 20 characters)"),
});

// Recipient email - change via env or hardcode your business email
const TO_EMAIL = process.env.CONTACT_EMAIL || "hello@runvelocityai.com";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = contactSchema.safeParse(body);

    if (!validated.success) {
      return NextResponse.json(
        { 
          success: false, 
          error: "Validation failed", 
          issues: validated.error.issues 
        },
        { status: 400 }
      );
    }

    const { name, email, company, phone, service, message } = validated.data;

    // If no Resend key configured, log and return success (dev-friendly)
    if (!process.env.RESEND_API_KEY) {
      console.log("=== CONTACT FORM SUBMISSION (DEV MODE - No RESEND_API_KEY) ===");
      console.log({ name, email, company, phone, service, message });
      console.log("=== END SUBMISSION ===");
      
      return NextResponse.json({ 
        success: true, 
        message: "Form received (dev mode). Configure RESEND_API_KEY to send real emails." 
      });
    }

    // Lazily create Resend only when we actually have a key (prevents build-time errors)
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send professional email via Resend
    const { error } = await resend.emails.send({
      from: "VelocityAI <hello@runvelocityai.com>", // Update this to a verified sender in Resend once you add runvelocityai.com to your Resend account
      to: TO_EMAIL,
      replyTo: email,
      subject: `New Inquiry: ${service} — ${company} (${name})`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f8fafc; color: #0f172a;">
          <h2 style="margin: 0 0 24px; color: #4f46e5; font-size: 24px;">New Website Inquiry</h2>
          
          <div style="background: white; border-radius: 12px; padding: 24px; border: 1px solid #e2e8f0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #475569; width: 120px;">Name</td>
                <td style="padding: 8px 0; color: #0f172a;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #475569;">Email</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #4f46e5;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #475569;">Company</td>
                <td style="padding: 8px 0; color: #0f172a;">${company}</td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #475569;">Phone</td>
                <td style="padding: 8px 0; color: #0f172a;">${phone}</td>
              </tr>` : ""}
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #475569;">Service</td>
                <td style="padding: 8px 0;">
                  <span style="background: #e0e7ff; color: #4338ca; padding: 2px 10px; border-radius: 999px; font-size: 13px; font-weight: 500;">${service}</span>
                </td>
              </tr>
            </table>

            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
              <div style="font-weight: 600; color: #475569; margin-bottom: 8px;">Project Details</div>
              <div style="white-space: pre-wrap; line-height: 1.6; color: #334155;">${message}</div>
            </div>
          </div>

          <p style="margin-top: 24px; font-size: 13px; color: #64748b;">
            This inquiry came from the VelocityAI website contact form.<br>
            Reply directly to this email to respond to ${name}.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { success: false, error: "Failed to send email. Please try again or call us." },
        { status: 500 }
      );
    }

    return NextResponse.json({ 
      success: true, 
      message: "Thank you! Your message has been sent. We'll reply within 24 hours." 
    });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again or email us directly." },
      { status: 500 }
    );
  }
}

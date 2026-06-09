import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, phone, service, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: "Velocity AI <onboarding@resend.dev>", // Change this later to your verified domain
      to: "Gabe@RunVelocityAi.com",
      subject: `New Contact Form Submission from ${name} - ${company}`,
      html: `
        <h2>New Website / AI Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Interested in:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p><small>Submitted via Velocity AI Contact Form</small></p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }

    return NextResponse.json({ 
      success: true, 
      message: "Thank you! We'll be in touch within 24 hours." 
    });

  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ 
      success: false, 
      error: "Failed to send message" 
    }, { status: 500 });
  }
}
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, phone, service, message } = await request.json();

    // Log to console for now (we can connect Resend later)
    console.log("New Contact Form Submission:");
    console.log({ name, email, company, phone, service, message });

    return NextResponse.json({ 
      success: true, 
      message: "Thank you! We'll be in touch within 24 hours." 
    });

  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ 
      success: false, 
      error: "Failed to send message. Please try again or call us directly." 
    }, { status: 500 });
  }
}
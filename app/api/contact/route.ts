import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/data/site";

const RESEND_API_KEY = process.env.RESEND_API_KEY;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate parameters
    if (!name || typeof name !== "string") {
      return NextResponse.json(
        { error: "Name is required and must be a string." },
        { status: 400 }
      );
    }
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email is required." },
        { status: 400 }
      );
    }
    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required and must be a string." },
        { status: 400 }
      );
    }

    if (!RESEND_API_KEY) {
      console.error("Resend API key is not configured");
      return NextResponse.json(
        { error: "Email service is not configured on the server." },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Use configured sender domain or fallback to onboarding@resend.dev
    const fromEmail = process.env.CONTACT_SENDER_EMAIL || process.env.NEXT_PUBLIC_CONTACT_SENDER_EMAIL || "Portfolio Contact <onboarding@resend.dev>";
    // Use configured receiver or fallback to the site's email address
    const toEmail = process.env.CONTACT_RECEIVER_EMAIL || process.env.NEXT_PUBLIC_CONTACT_RECEIVER_EMAIL || site.email;

    // Send the email and handle data and error returned by the SDK directly (no try/catch for SDK response error status)
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: `Portfolio Inquiry: ${subject || "No Subject"}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #1f2937; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 8px; margin-bottom: 16px;">New Contact Form Submission</h2>
          <p style="margin: 8px 0;"><strong>From:</strong> ${name} (&lt;${email}&gt;)</p>
          <p style="margin: 8px 0;"><strong>Subject:</strong> ${subject || "No Subject"}</p>
          <div style="margin-top: 20px; padding: 16px; background-color: #f3f4f6; border-left: 4px solid #3b82f6; border-radius: 4px;">
            <p style="margin: 0 0 8px 0; font-weight: 600; color: #4b5563;">Message:</p>
            <p style="margin: 0; white-space: pre-wrap; line-height: 1.5; color: #1f2937;">${message}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend send error:", error);
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error("Contact API route exception:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to send email due to an internal server error",
      },
      { status: 500 }
    );
  }
}

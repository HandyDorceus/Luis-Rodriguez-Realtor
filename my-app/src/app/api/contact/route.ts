import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { firstName, lastName, email, phone, howCanIHelp, message } =
    await request.json();

  const { error } = await resend.emails.send({
    from: "Luis Rodriguez Website <onboarding@resend.dev>",
    to: "lrodriguez@sellinboston.com",
    replyTo: email,
    subject: `New contact form submission — ${howCanIHelp || "General Inquiry"}`,
    html: `
      <h2>New message from your website</h2>
      <table cellpadding="6" style="font-family:sans-serif;font-size:14px;">
        <tr><td><strong>Name</strong></td><td>${firstName} ${lastName}</td></tr>
        <tr><td><strong>Email</strong></td><td>${email}</td></tr>
        <tr><td><strong>Phone</strong></td><td>${phone || "—"}</td></tr>
        <tr><td><strong>Topic</strong></td><td>${howCanIHelp || "—"}</td></tr>
        <tr><td><strong>Message</strong></td><td style="white-space:pre-wrap;">${message || "—"}</td></tr>
      </table>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

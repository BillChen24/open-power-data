import { Resend } from "resend";
import type { StoredContactMessage } from "@shared/schema";

export async function sendContactNotification(record: StoredContactMessage): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_NOTIFICATION_EMAIL;

  if (!apiKey || !toEmail) {
    console.warn("[Email] Missing RESEND_API_KEY or CONTACT_NOTIFICATION_EMAIL — skipping email");
    return;
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "Open Power Data Contact Form <onboarding@resend.dev>",
    to: [toEmail],
    subject: `New Contact Message: ${record.subject}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1a1a1a; border-bottom: 2px solid #e5e7eb; padding-bottom: 12px;">
          New Contact Form Submission
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
          <tr>
            <td style="padding: 8px 0; color: #6b7280; font-weight: 600; width: 120px;">Name</td>
            <td style="padding: 8px 0; color: #1a1a1a;">${record.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Email</td>
            <td style="padding: 8px 0; color: #1a1a1a;">
              <a href="mailto:${record.email}" style="color: #2563eb;">${record.email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Subject</td>
            <td style="padding: 8px 0; color: #1a1a1a;">${record.subject}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Submitted</td>
            <td style="padding: 8px 0; color: #1a1a1a;">${record.submittedAt?.toISOString() ?? new Date().toISOString()}</td>
          </tr>
        </table>
        <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; margin-top: 8px;">
          <p style="color: #6b7280; font-weight: 600; margin: 0 0 8px 0;">Message</p>
          <p style="color: #1a1a1a; margin: 0; white-space: pre-wrap;">${record.message}</p>
        </div>
        <p style="color: #9ca3af; font-size: 12px; margin-top: 24px;">
          Sent via Open Power Data Contact Form
        </p>
      </div>
    `,
  });

  if (error) {
    console.error("[Email] Resend error:", error);
    throw new Error(`Failed to send email: ${error.message}`);
  }

  console.log("[Email] Contact notification sent successfully to", toEmail);
}

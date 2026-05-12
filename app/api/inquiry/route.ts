import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL =
  process.env.CONNECT_STERLING_TO_EMAIL || "hello@connectsterling.com";

const FROM_EMAIL =
  process.env.CONNECT_STERLING_FROM_EMAIL ||
  "Connect Sterling <hello@connectsterling.com>";

type InquiryPayload = {
  title?: string;
  fields?: {
    name: string;
    label: string;
    value: string;
  }[];
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isValidEmail(value?: string) {
  if (!value) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY");
      return Response.json(
        {
          ok: false,
          message:
            "Email service is missing its API key. Please check Vercel environment variables.",
        },
        { status: 500 }
      );
    }

    const payload = (await request.json()) as InquiryPayload;

    const title = payload.title?.trim() || "Connect Sterling Inquiry";
    const fields = payload.fields || [];

    if (!fields.length) {
      return Response.json(
        { ok: false, message: "No inquiry details were submitted." },
        { status: 400 }
      );
    }

    const nameField = fields.find((field) =>
      field.name.toLowerCase().includes("name")
    );
    const emailField = fields.find((field) =>
      field.name.toLowerCase().includes("email")
    );

    const senderName = nameField?.value?.trim() || "Website visitor";
    const senderEmail = emailField?.value?.trim();

    const textBody = fields
      .map((field) => `${field.label}: ${field.value || ""}`)
      .join("\n\n");

    const htmlRows = fields
      .map(
        (field) => `
          <tr>
            <td style="padding: 10px 12px; border-bottom: 1px solid #e7e5e4; font-weight: 700; vertical-align: top; width: 220px;">
              ${escapeHtml(field.label)}
            </td>
            <td style="padding: 10px 12px; border-bottom: 1px solid #e7e5e4; vertical-align: top;">
              ${escapeHtml(field.value || "")}
            </td>
          </tr>
        `
      )
      .join("");

    const emailPayload = {
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      subject: `Connect Sterling Inquiry: ${title}`,
      replyTo: isValidEmail(senderEmail) ? senderEmail : undefined,
      text: textBody,
      html: `
        <div style="font-family: Arial, sans-serif; color: #0f172a;">
          <h1 style="margin-bottom: 8px;">${escapeHtml(title)}</h1>
          <p style="margin-top: 0; color: #475569;">
            New inquiry from ${escapeHtml(senderName)} through Connect Sterling.
          </p>
          <table style="border-collapse: collapse; width: 100%; margin-top: 24px; border: 1px solid #e7e5e4;">
            ${htmlRows}
          </table>
        </div>
      `,
    };

    const { error } = await resend.emails.send(emailPayload);

    if (error) {
      console.error("Resend inquiry error:", error);
      return Response.json(
        {
          ok: false,
          message:
            "The inquiry reached the site, but the email service rejected it. Check the Vercel logs for the Resend error.",
        },
        { status: 500 }
      );
    }

    return Response.json({
      ok: true,
      message: "Inquiry sent successfully.",
    });
  } catch (error) {
    console.error("Inquiry route error:", error);
    return Response.json(
      {
        ok: false,
        message:
          "Something went wrong sending the inquiry. Check the Vercel function logs.",
      },
      { status: 500 }
    );
  }
}
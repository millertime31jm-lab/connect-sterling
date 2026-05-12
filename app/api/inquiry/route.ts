import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = process.env.CONNECT_STERLING_TO_EMAIL || "hello@connectsterling.com";
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

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        { ok: false, message: "Email service is not configured." },
        { status: 500 }
      );
    }

    const payload = (await request.json()) as InquiryPayload;

    const title = payload.title?.trim() || "Connect Sterling Inquiry";
    const fields = payload.fields || [];

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

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      subject: `Connect Sterling Inquiry: ${title}`,
      replyTo: senderEmail || undefined,
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
    });

    if (error) {
      return Response.json(
        { ok: false, message: "Inquiry could not be sent." },
        { status: 500 }
      );
    }

    return Response.json({
      ok: true,
      message: "Inquiry sent successfully.",
    });
  } catch {
    return Response.json(
      { ok: false, message: "Something went wrong sending the inquiry." },
      { status: 500 }
    );
  }
}
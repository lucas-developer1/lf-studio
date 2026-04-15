/**
 * API-Route für das Kontaktformular – sendet E-Mails über Resend
 */

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, betrieb, email, nachricht } = await req.json();

    // Pflichtfelder prüfen
    if (!name || !email || !nachricht) {
      return Response.json(
        { error: "Pflichtfelder fehlen" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "LF Studio Kontakt <onboarding@resend.dev>",
      to: "lf.studios.webdesign@gmail.com",
      subject: `Neue Anfrage von ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #f5f5f7; padding: 32px; border-radius: 12px;">
          <h2 style="color: #1a6fd4; margin-bottom: 24px;">Neue Anfrage über LF Studio</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #6e6e73; font-size: 13px; width: 100px;">Name</td>
              <td style="padding: 10px 0; color: #f5f5f7; font-size: 15px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #6e6e73; font-size: 13px;">Betrieb</td>
              <td style="padding: 10px 0; color: #f5f5f7; font-size: 15px;">${betrieb || "–"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #6e6e73; font-size: 13px;">E-Mail</td>
              <td style="padding: 10px 0; color: #f5f5f7; font-size: 15px;"><a href="mailto:${email}" style="color: #1a6fd4;">${email}</a></td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; border-left: 3px solid #1a6fd4;">
            <p style="color: #6e6e73; font-size: 13px; margin-bottom: 8px;">Nachricht</p>
            <p style="color: #f5f5f7; font-size: 15px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${nachricht}</p>
          </div>
          <p style="margin-top: 24px; color: #6e6e73; font-size: 12px;">Diese E-Mail wurde über das Kontaktformular auf lf-studios.de gesendet.</p>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("E-Mail-Fehler:", error);
    return Response.json(
      { error: "E-Mail konnte nicht gesendet werden" },
      { status: 500 }
    );
  }
}

/**
 * API-Route für das Onboarding-Formular – sendet alle Kunden-Infos per E-Mail
 */

import { Resend } from "resend";

function row(label: string, value: string) {
  if (!value) return "";
  return `
    <tr>
      <td style="padding:10px 0;color:#6e6e73;font-size:13px;width:180px;vertical-align:top;">${label}</td>
      <td style="padding:10px 0;color:#f5f5f7;font-size:15px;line-height:1.6;white-space:pre-wrap;">${value}</td>
    </tr>`;
}

function section(title: string, rows: string) {
  return `
    <div style="margin-bottom:32px;">
      <h3 style="color:#1a6fd4;font-size:14px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;margin-bottom:12px;padding-bottom:10px;border-bottom:1px solid rgba(255,255,255,0.08);">${title}</h3>
      <table style="width:100%;border-collapse:collapse;">${rows}</table>
    </div>`;
}

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const data = await req.json();
    const {
      firmenname, branche, inhaber, telefon, email, website, adresse,
      beschreibung, leistungen, oeffnungszeiten, team, usps,
      farben, beispielwebsites,
      funktionen, domain, domainName, googleBewertung, instagram, facebook, anmerkungen,
    } = data;

    if (!firmenname || !inhaber || !email) {
      return Response.json({ error: "Pflichtfelder fehlen" }, { status: 400 });
    }

    const html = `
      <div style="font-family:sans-serif;max-width:680px;margin:0 auto;background:#0a0a0a;color:#f5f5f7;padding:40px;border-radius:16px;">
        <h2 style="color:#1a6fd4;font-size:22px;margin-bottom:8px;">📋 Neues Onboarding</h2>
        <p style="color:#6e6e73;font-size:14px;margin-bottom:36px;">Eingegangen über lf-studio.de/onboarding</p>

        ${section("1 – Unternehmen", [
          row("Firmenname", firmenname),
          row("Branche", branche),
          row("Inhaber", inhaber),
          row("Telefon", telefon),
          row("E-Mail", email),
          row("Website", website),
          row("Adresse", adresse),
        ].join(""))}

        ${section("2 – Inhalte", [
          row("Kurzbeschreibung", beschreibung),
          row("Leistungen", leistungen),
          row("Öffnungszeiten", oeffnungszeiten),
          row("Team", team),
          row("Stärken / USPs", usps),
        ].join(""))}

        ${section("3 – Design", [
          row("Farbwünsche", farben),
          row("Beispiel-Websites", beispielwebsites),
        ].join(""))}

        ${section("4 – Extras", [
          row("Gewünschte Funktionen", Array.isArray(funktionen) ? funktionen.join("\n") : ""),
          row("Domain", domain),
          row("Domain-Name", domainName),
          row("Google Bewertung", googleBewertung),
          row("Instagram", instagram),
          row("Facebook", facebook),
          row("Anmerkungen", anmerkungen),
        ].join(""))}

        <p style="margin-top:32px;color:#6e6e73;font-size:12px;border-top:1px solid rgba(255,255,255,0.07);padding-top:20px;">
          Logo und Fotos werden separat per WhatsApp / E-Mail zugeschickt.
        </p>
      </div>`;

    await resend.emails.send({
      from: "LF Studio Onboarding <onboarding@resend.dev>",
      to: "lf.studios.webdesign@gmail.com",
      subject: `📋 Onboarding: ${firmenname} (${inhaber})`,
      html,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Onboarding-E-Mail-Fehler:", error);
    return Response.json({ error: "E-Mail konnte nicht gesendet werden" }, { status: 500 });
  }
}

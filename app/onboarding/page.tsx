"use client";

/**
 * Onboarding-Formular – Neue Kunden tragen hier ihre Website-Infos ein.
 * Nur via direktem Link erreichbar (/onboarding), nicht in der Navigation.
 */

import { useState } from "react";
import { ArrowRight } from "lucide-react";

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map(k => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");

const funktionenOptions = [
  "Kontaktformular",
  "Google Maps Einbindung",
  "Bildergalerie",
  "Speisekarte / Preisliste",
  "Online-Terminbuchung",
  "Social Media Verlinkung",
  "PDF zum Download (z.B. Speisekarte)",
];

export default function OnboardingPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [funktionen, setFunktionen] = useState<string[]>([]);
  const [form, setForm] = useState({
    firmenname: "", branche: "", inhaber: "", telefon: "", email: "",
    website: "", adresse: "",
    beschreibung: "", leistungen: "", oeffnungszeiten: "", team: "", usps: "",
    farben: "", beispielwebsites: "",
    domain: "", domainName: "", googleBewertung: "", instagram: "", facebook: "", anmerkungen: "",
  });

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const toggleFunktion = (f: string) => {
    setFunktionen(prev => prev.includes(f) ? prev.filter(x => x !== f) : [...prev, f]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await fetch("/netlify-forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "onboarding",
          ...form,
          funktionen: funktionen.join(", "),
        }),
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <section className="section" style={{ minHeight: "60vh", display: "flex", alignItems: "center", textAlign: "center" }}>
        <div className="container">
          <div className="glass" style={{ maxWidth: "560px", margin: "0 auto", padding: "64px 48px" }}>
            <div style={{ fontSize: "52px", marginBottom: "24px" }}>✅</div>
            <h1 style={{ fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 700, letterSpacing: "-0.035em", color: "var(--text-1)", marginBottom: "16px" }}>
              Perfekt, danke!
            </h1>
            <p style={{ fontSize: "16px", color: "var(--text-2)", lineHeight: "1.7" }}>
              Ich habe alle deine Angaben erhalten und melde mich innerhalb von 24 Stunden.
              Logo und Fotos kannst du mir einfach per WhatsApp oder E-Mail schicken.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="section" style={{ textAlign: "center", paddingBottom: "48px" }}>
        <div className="bg-glow-top" aria-hidden="true" />
        <div className="container">
          <div className="hero-animate"><span className="tag">Onboarding</span></div>
          <h1
            className="hero-animate"
            style={{ fontSize: "clamp(36px, 5vw, 72px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: "1.06", color: "var(--text-1)", margin: "20px auto 20px", maxWidth: "820px" }}
          >
            Willkommen – lass uns loslegen.
          </h1>
          <p
            className="hero-animate"
            style={{ fontSize: "clamp(15px, 1.8vw, 18px)", lineHeight: "1.7", color: "var(--text-2)", maxWidth: "500px", margin: "0 auto" }}
          >
            Füll das Formular in etwa 10 Minuten aus – danach kann ich direkt mit deiner Website anfangen.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="section" style={{ paddingTop: "0" }}>
        <div className="bg-glow-center" aria-hidden="true" />
        <div className="container" style={{ maxWidth: "780px" }}>
          <form onSubmit={handleSubmit}>

            {/* 1 – Unternehmen */}
            <SectionCard number="1" title="Dein Unternehmen" desc="Grundlegende Infos über deinen Betrieb">
              <Field label="Firmenname" required>
                <input className="onboarding-input" name="firmenname" required placeholder="z.B. Bäckerei Müller" value={form.firmenname} onChange={update} />
              </Field>
              <Field label="Branche" required>
                <input className="onboarding-input" name="branche" required placeholder="z.B. Physiotherapie, Restaurant, Elektro" value={form.branche} onChange={update} />
              </Field>
              <div className="onboarding-row">
                <Field label="Inhaber / Ansprechpartner" required>
                  <input className="onboarding-input" name="inhaber" required placeholder="Vor- und Nachname" value={form.inhaber} onChange={update} />
                </Field>
                <Field label="Telefon" required>
                  <input className="onboarding-input" name="telefon" type="tel" required placeholder="Deine Telefonnummer" value={form.telefon} onChange={update} />
                </Field>
              </div>
              <div className="onboarding-row">
                <Field label="E-Mail" required>
                  <input className="onboarding-input" name="email" type="email" required placeholder="Deine E-Mail-Adresse" value={form.email} onChange={update} />
                </Field>
                <Field label="Website (falls vorhanden)">
                  <input className="onboarding-input" name="website" type="url" placeholder="https://..." value={form.website} onChange={update} />
                </Field>
              </div>
              <Field label="Adresse" required>
                <input className="onboarding-input" name="adresse" required placeholder="Straße, PLZ, Stadt" value={form.adresse} onChange={update} />
              </Field>
            </SectionCard>

            {/* 2 – Inhalte */}
            <SectionCard number="2" title="Inhalte für deine Website" desc="Texte, Leistungen und Infos die auf die Seite sollen">
              <Field label="Kurzbeschreibung deines Unternehmens" required hint="Keine Sorge – ich formuliere das professionell für dich um. Stichpunkte reichen auch.">
                <textarea className="onboarding-input onboarding-textarea" name="beschreibung" required placeholder="Beschreib in 2–3 Sätzen was du machst, was dich auszeichnet, und warum Kunden zu dir kommen." value={form.beschreibung} onChange={update} />
              </Field>
              <Field label="Deine Leistungen / Angebote" required>
                <textarea className="onboarding-input onboarding-textarea" name="leistungen" required placeholder={"Listen Sie alle Leistungen auf:\n– Krankengymnastik\n– Manuelle Therapie\n– Massage"} value={form.leistungen} onChange={update} />
              </Field>
              <Field label="Öffnungszeiten / Erreichbarkeit" required>
                <textarea className="onboarding-input onboarding-textarea" name="oeffnungszeiten" required placeholder="z.B. Mo–Fr 08:00–18:00, Sa nach Vereinbarung" value={form.oeffnungszeiten} onChange={update} style={{ minHeight: "80px" }} />
              </Field>
              <Field label="Team-Mitglieder" hint="Optional. Lass das Feld leer wenn du kein Team zeigen möchtest.">
                <textarea className="onboarding-input onboarding-textarea" name="team" placeholder={"Name, Rolle, Qualifikation – pro Person eine Zeile.\nz.B.: Anna Müller, Inhaberin, Manuelle Therapie"} value={form.team} onChange={update} />
              </Field>
              <Field label="Besondere Stärken / Was dich unterscheidet">
                <textarea className="onboarding-input onboarding-textarea" name="usps" placeholder="z.B. 20 Jahre Erfahrung, alle Kassen zugelassen, kostenlose Beratung..." value={form.usps} onChange={update} style={{ minHeight: "80px" }} />
              </Field>
            </SectionCard>

            {/* 3 – Design */}
            <SectionCard number="3" title="Design & Erscheinungsbild" desc="Farben, Logo und visuelles Material">
              <Field label="Logo & Fotos" hint="Schick mir Logo und Fotos nach dem Absenden einfach per WhatsApp oder E-Mail – das geht schneller als ein Upload.">
                <div className="onboarding-file-note">
                  <span style={{ fontSize: "28px", lineHeight: 1 }}>📎</span>
                  <div>
                    <p style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-1)", marginBottom: "4px" }}>Dateien per WhatsApp oder E-Mail senden</p>
                    <p style={{ fontSize: "13px", color: "var(--text-2)", lineHeight: "1.6" }}>
                      Logo (PNG, SVG oder PDF) und Fotos von deinem Betrieb, Team oder Produkten.
                      Je mehr du schickst, desto besser wird die Website.
                    </p>
                  </div>
                </div>
              </Field>
              <Field label="Farbwünsche" hint="Keine Sorge – ich mache Vorschläge wenn du dir unsicher bist.">
                <input className="onboarding-input" name="farben" placeholder="z.B. Blau und Weiß, modern und clean – oder: keine Ahnung, du entscheidest" value={form.farben} onChange={update} />
              </Field>
              <Field label="Websites die dir gefallen">
                <textarea className="onboarding-input onboarding-textarea" name="beispielwebsites" placeholder="Links zu Websites die dir optisch gefallen – muss nicht aus deiner Branche sein." value={form.beispielwebsites} onChange={update} style={{ minHeight: "80px" }} />
              </Field>
            </SectionCard>

            {/* 4 – Extras */}
            <SectionCard number="4" title="Extras & Sonstiges" desc="Zusätzliche Wünsche und Infos">
              <Field label="Welche Funktionen brauchst du?">
                <div className="onboarding-checkboxes">
                  {funktionenOptions.map((f) => (
                    <label key={f} className="onboarding-checkbox">
                      <input type="checkbox" checked={funktionen.includes(f)} onChange={() => toggleFunktion(f)} />
                      <span>{f}</span>
                    </label>
                  ))}
                </div>
              </Field>
              <div className="onboarding-row" style={{ marginTop: "24px" }}>
                <Field label="Hast du schon eine Domain?">
                  <select className="onboarding-input" name="domain" value={form.domain} onChange={update}>
                    <option value="">Bitte wählen</option>
                    <option>Ja, ich habe eine Domain</option>
                    <option>Nein, ich brauche eine</option>
                    <option>Bin mir nicht sicher</option>
                  </select>
                </Field>
                <Field label="Wenn ja: welche?">
                  <input className="onboarding-input" name="domainName" placeholder="www.deine-domain.de" value={form.domainName} onChange={update} />
                </Field>
              </div>
              <Field label="Google Bewertungslink" hint="Ich binde deine Google-Bewertungen prominent auf der Website ein.">
                <input className="onboarding-input" name="googleBewertung" type="url" placeholder="Link zu deinem Google Business Profil" value={form.googleBewertung} onChange={update} />
              </Field>
              <div className="onboarding-row">
                <Field label="Instagram">
                  <input className="onboarding-input" name="instagram" type="url" placeholder="Instagram URL" value={form.instagram} onChange={update} />
                </Field>
                <Field label="Facebook">
                  <input className="onboarding-input" name="facebook" type="url" placeholder="Facebook URL" value={form.facebook} onChange={update} />
                </Field>
              </div>
              <Field label="Sonstige Anmerkungen">
                <textarea className="onboarding-input onboarding-textarea" name="anmerkungen" placeholder="Gibt es noch etwas das ich wissen sollte? Besondere Wünsche, Deadlines, wichtige Infos?" value={form.anmerkungen} onChange={update} />
              </Field>
            </SectionCard>

            {/* Submit */}
            <div style={{ textAlign: "center", padding: "16px 0 56px" }}>
              <button
                type="submit"
                className="btn btn--primary btn--lg"
                disabled={status === "sending"}
                style={{ minWidth: "280px", justifyContent: "center" }}
              >
                {status === "sending" ? "Wird gesendet…" : "Informationen absenden"}
                {status !== "sending" && <ArrowRight size={18} />}
              </button>
              {status === "error" && (
                <p style={{ fontSize: "14px", color: "#ff6b6b", marginTop: "16px" }}>
                  Etwas ist schiefgelaufen. Schreib mir direkt auf WhatsApp.
                </p>
              )}
              <p style={{ fontSize: "13px", color: "var(--text-3)", marginTop: "16px" }}>
                Deine Daten werden vertraulich behandelt und nur zur Erstellung deiner Website verwendet.
              </p>
            </div>

          </form>
        </div>
      </section>
    </>
  );
}

/* ── Hilfs-Komponenten ──────────────────────────────────────── */

function SectionCard({ number, title, desc, children }: {
  number: string; title: string; desc: string; children: React.ReactNode;
}) {
  return (
    <div className="glass onboarding-section reveal">
      <div className="onboarding-section-header">
        <span className="onboarding-section-number text-gradient">{number}</span>
        <div>
          <div className="onboarding-section-title">{title}</div>
          <div className="onboarding-section-desc">{desc}</div>
        </div>
      </div>
      {children}
    </div>
  );
}

function Field({ label, required, hint, children }: {
  label: string; required?: boolean; hint?: string; children: React.ReactNode;
}) {
  return (
    <div className="onboarding-field">
      <label className="onboarding-label">
        {label}{required && <span style={{ color: "var(--accent-light)", marginLeft: "3px" }}>*</span>}
      </label>
      {children}
      {hint && <p className="onboarding-hint">{hint}</p>}
    </div>
  );
}

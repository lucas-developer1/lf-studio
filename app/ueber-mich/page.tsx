"use client";

/**
 * Über-mich-Seite – Story, Werte, persönliche Note und CTA
 */

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "5 Tage", label: "Lieferzeit im Basis-Paket" },
  { value: "Ab 499 €", label: "Festpreis ohne Überraschungen" },
  { value: "St. Wendel", label: "Hier bin ich, deutschlandweit tätig" },
];

const values = [
  {
    icon: "🎯",
    title: "Ehrlichkeit",
    text: "Ich sage dir was ich kann und was nicht. Kein leeres Versprechen.",
  },
  {
    icon: "⚡",
    title: "Verlässlichkeit",
    text: "Was ich zusage, halte ich. Auch beim Termin.",
  },
  {
    icon: "🤝",
    title: "Auf Augenhöhe",
    text: "Du musst kein Experte sein. Ich erkläre alles verständlich.",
  },
];

export default function UeberMichPage() {
  return (
    <>
      {/* Hero */}
      <section className="section" style={{ textAlign: "center" }}>
        <div className="bg-glow-top" aria-hidden="true" />
        <div className="container">
          <div className="hero-animate">
            <span className="tag">Über mich</span>
          </div>
          <h1
            className="hero-animate"
            style={{ fontSize: "clamp(40px, 6vw, 80px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: "1.06", color: "var(--text-1)", margin: "20px auto 20px", maxWidth: "900px" }}
          >
            Hallo, ich bin Lucas.
          </h1>
          <p
            className="hero-animate"
            style={{ fontSize: "clamp(16px, 2vw, 19px)", lineHeight: "1.7", color: "var(--text-2)", maxWidth: "540px", margin: "0 auto" }}
          >
            Ich baue Websites – für Menschen, nicht für Konzerne.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section section--alt">
        <div className="container" style={{ maxWidth: "760px" }}>
          <div className="reveal" style={{ marginBottom: "16px" }}>
            <span className="tag">Meine Geschichte</span>
          </div>
          <h2 className="reveal" style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 700, letterSpacing: "-0.035em", color: "var(--text-1)", marginBottom: "32px", lineHeight: "1.1" }}>
            Warum ich das mache.
          </h2>
          <div className="glass reveal" style={{ padding: "40px 48px", fontSize: "17px", lineHeight: "1.72", color: "var(--text-2)" }}>
            <p style={{ marginBottom: "20px" }}>
              Ich habe jahrelang Websites für große Agenturen gebaut. Gute Arbeit,
              gute Projekte – aber die Kunden waren immer die Großen. Kleine Betriebe,
              Handwerker, Familienbetriebe konnten sich das schlicht nicht leisten.
            </p>
            <p>
              Das hat mich gestört. Denn eine gute Website macht wirklich einen
              Unterschied – egal ob du eine Bäckerei betreibst oder eine
              Steuerberatung. Mit LF Studio möchte ich genau das möglich machen:
              eine Website die wirklich gut ist, zu einem Preis der fair ist.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section">
        <div className="bg-glow-center" aria-hidden="true" />
        <div className="container">
          <div className="grid-3 reveal-stagger">
            {stats.map((stat, i) => (
              <div key={i} className="glass glass-glow-top reveal" style={{ padding: "40px 32px", textAlign: "center" }}>
                <span
                  style={{ display: "block", fontSize: "36px", fontWeight: 700, letterSpacing: "-0.04em", color: "var(--text-1)", marginBottom: "8px" }}
                >
                  {stat.value}
                </span>
                <span style={{ fontSize: "13px", color: "var(--text-3)" }}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Meine Werte</span>
            <h2>Darauf kannst du dich verlassen.</h2>
          </div>
          <div className="grid-3 reveal-stagger">
            {values.map((v, i) => (
              <div key={i} className="glass glass-glow-top usp-card reveal">
                <div className="usp-card__icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Note */}
      <section className="section">
        <div className="container" style={{ maxWidth: "760px" }}>
          <div className="glass reveal" style={{ padding: "48px", textAlign: "center" }}>
            <p style={{ fontSize: "17px", lineHeight: "1.72", color: "var(--text-2)", fontStyle: "italic" }}>
              „Ich bin aus St. Wendel im Saarland und arbeite von hier aus für Kunden
              in ganz Deutschland. Wenn du in der Nähe bist, können wir uns auch gerne
              persönlich treffen."
            </p>
            <p style={{ fontSize: "13px", color: "var(--text-3)", marginTop: "16px" }}>– Lucas Bernhardt, Gründer LF Studio</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--alt" style={{ textAlign: "center" }}>
        <div className="bg-glow-bottom" aria-hidden="true" />
        <div className="container">
          <h2 className="reveal" style={{ fontSize: "clamp(32px, 4.5vw, 58px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: "1.06", color: "var(--text-1)", marginBottom: "20px" }}>
            Lern mich kennen.
          </h2>
          <p className="reveal" style={{ fontSize: "17px", lineHeight: "1.7", color: "var(--text-2)", maxWidth: "400px", margin: "0 auto 32px" }}>
            Schreib mir oder ruf mich über WhatsApp an – das kostet dich nichts.
          </p>
          <div className="reveal">
            <Link href="/kontakt" className="btn btn--primary btn--lg" aria-label="Gespräch starten">
              Gespräch starten
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

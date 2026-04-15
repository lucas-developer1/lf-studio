"use client";

/**
 * Leistungen-Seite – Alle Leistungen, Prozess, Pakete und FAQ
 */

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    icon: "🎨",
    title: "Webdesign & Entwicklung",
    tag: "Kern-Leistung",
    text: "Ich baue dir eine Website die wirklich zu dir passt. Kein vorgefertigtes Template das tausend andere auch nutzen. Dein Design, deine Farben, dein Stil.",
    coming: false,
  },
  {
    icon: "✍️",
    title: "Texte schreiben",
    tag: "Im Premium inklusive",
    text: "Du weißt was du machst – aber die richtigen Worte zu finden ist manchmal schwer. Ich schreibe die Texte für deine Website so, dass deine Kunden sie verstehen und Vertrauen fassen.",
    coming: false,
  },
  {
    icon: "🎯",
    title: "Logo & Branding",
    tag: "Im Premium inklusive",
    text: "Du bekommst ein Logo das zu dir passt und auf allem gut aussieht – auf der Website, auf Visitenkarten, auf dem Auto.",
    coming: false,
  },
  {
    icon: "🔧",
    title: "Wartung & Updates",
    tag: "Auf Anfrage",
    text: "Deine Website läuft – und soll es auch bleiben. Ich kümmere mich um Änderungen, neue Inhalte und technische Updates, damit du dich auf dein Geschäft konzentrieren kannst.",
    coming: false,
  },
];

const steps = [
  { num: "01", title: "Erstgespräch", text: "Wir reden kurz. Was machst du, was brauchst du, was ist dein Ziel?" },
  { num: "02", title: "Angebot", text: "Du bekommst innerhalb von 24 Stunden ein klares Angebot mit Festpreis." },
  { num: "03", title: "Design-Entwurf", text: "Ich zeige dir wie deine Website aussehen wird – bevor ich sie fertig baue." },
  { num: "04", title: "Dein Feedback", text: "Gefällt dir was du siehst? Dann geht's weiter. Was nicht passt, wird geändert." },
  { num: "05", title: "Fertigstellung", text: "Ich baue die Website fertig und zeige sie dir nochmal komplett." },
  { num: "06", title: "Launch", text: "Deine Website geht online. Ich kümmere mich um alles Technische." },
];

const plans = [
  {
    name: "Basis",
    price: "499 €",
    popular: false,
    features: [
      "1 Seite (Landing Page)",
      "Sieht auf jedem Gerät gut aus",
      "Kontaktformular",
      "Fertig in 5 Werktagen",
      "Änderungen bis du zufrieden bist",
    ],
  },
  {
    name: "Premium",
    price: "999 €",
    popular: true,
    features: [
      "Bis zu 5 Seiten",
      "Logo & Branding",
      "Texte schreibe ich für dich",
      "Sieht auf jedem Gerät gut aus",
      "Kontaktformular",
      "Fertig in 14 Werktagen",
      "Änderungen bis du zufrieden bist",
    ],
  },
];

const faqs = [
  {
    q: "Brauche ich eine Domain und Hosting?",
    a: "Nein, darum kümmere ich mich komplett für dich. Du bekommst alles aus einer Hand – Domain, Hosting, technische Einrichtung. Du musst nirgendwo anrufen, nichts einrichten und nichts verstehen. Ich mache das.",
  },
  {
    q: "Was ist der Unterschied zu einer großen Agentur?",
    a: "Ich habe selbst in einer Agentur gearbeitet – ich weiß wie es dort läuft. Dort bezahlst du mit für Projektmanager, Büromieten und Overhead. Bei mir arbeitest du direkt mit der Person, die deine Website baut. Kein Weitergeben, kein Umweg. Und das zu einem Preis, den sich auch kleine Betriebe leisten können.",
  },
  {
    q: "Kann ich meine Website später selbst bearbeiten?",
    a: "Im Premium-Paket richte ich dir das so ein, dass du Texte und Bilder selbst ändern kannst – ohne technisches Wissen.",
  },
  {
    q: "Was wenn ich nur ein Logo brauche?",
    a: "Kein Problem. Schreib mir einfach und wir besprechen was du brauchst.",
  },
  {
    q: "Macht ihr auch Online-Shops?",
    a: "Ja, das ist möglich. Das geht über die Standard-Pakete hinaus – meld dich für ein Gespräch.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`glass faq-item${open ? " faq-item--open" : ""}`}
      onClick={() => setOpen(!open)}
      role="button"
      tabIndex={0}
      aria-expanded={open}
      onKeyDown={(e) => e.key === "Enter" && setOpen(!open)}
    >
      <div className="faq-item__question">
        {q}
        <span className="faq-item__icon">+</span>
      </div>
      <div className="faq-item__answer">{a}</div>
    </div>
  );
}

export default function LeistungenPage() {
  return (
    <>
      {/* Hero */}
      <section className="section" style={{ textAlign: "center" }}>
        <div className="bg-glow-top" aria-hidden="true" />
        <div className="container">
          <div className="hero-animate">
            <span className="tag">Leistungen</span>
          </div>
          <h1
            className="hero-animate"
            style={{ fontSize: "clamp(40px, 6vw, 80px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: "1.06", color: "var(--text-1)", margin: "20px auto 20px", maxWidth: "900px" }}
          >
            Alles aus einer Hand.
          </h1>
          <p
            className="hero-animate"
            style={{ fontSize: "clamp(16px, 2vw, 19px)", lineHeight: "1.7", color: "var(--text-2)", maxWidth: "540px", margin: "0 auto" }}
          >
            Von der ersten Idee bis deine Website online ist – ich kümmere mich um den Rest.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section section--alt">
        <div className="container">
          <div className="grid-2 reveal-stagger">
            {services.map((s, i) => (
              <div key={i} className={`glass glass-glow-top service-card reveal${s.coming ? " service-card__coming" : ""}`}>
                <div className="service-card__icon">{s.icon}</div>
                <span className="card-tag" style={{ opacity: s.coming ? 0.65 : 1 }}>{s.tag}</span>
                <h2>{s.title}</h2>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="bg-glow-center" aria-hidden="true" />
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Ablauf</span>
            <h2>So arbeiten wir zusammen.</h2>
          </div>
          <div className="grid-3 reveal-stagger">
            {steps.map((step, i) => (
              <div key={i} className="glass glass-glow-top reveal" style={{ padding: "32px 28px" }}>
                <span
                  className="text-gradient"
                  style={{ display: "block", fontSize: "40px", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: "1", marginBottom: "12px" }}
                >
                  {step.num}
                </span>
                <h3 style={{ fontSize: "17px", fontWeight: 600, color: "var(--text-1)", marginBottom: "8px" }}>{step.title}</h3>
                <p style={{ fontSize: "14px", color: "var(--text-2)", lineHeight: "1.7" }}>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section section--alt">
        <div className="bg-glow-center" aria-hidden="true" />
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Preise</span>
            <h2>Klare Preise. Kein Kleingedrucktes.</h2>
          </div>
          <div className="grid-pricing reveal-stagger">
            {plans.map((plan, i) => (
              <div key={i} className={`glass glass-glow-top pricing-card reveal${plan.popular ? " glass--highlight" : ""}`}>
                {plan.popular && <div className="pricing-card__badge">Beliebt</div>}
                <p className="pricing-card__name">{plan.name}</p>
                <div style={{ marginBottom: "8px" }}>
                  <span className="pricing-card__price">{plan.price}</span>
                  <span className="pricing-card__price-suffix">einmalig</span>
                </div>
                <div className="pricing-card__divider" />
                <ul className="pricing-card__features">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="pricing-card__feature">
                      <span className="pricing-card__check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/kontakt"
                  className={`btn btn--lg${plan.popular ? " btn--primary" : " btn--glass"}`}
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  {plan.popular ? "Jetzt anfragen" : "Anfragen"}
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
          <div className="reveal" style={{ textAlign: "center", marginTop: "40px" }}>
            <p style={{ fontSize: "14px", color: "var(--text-3)" }}>
              Größeres Projekt geplant?{" "}
              <Link href="/kontakt" style={{ color: "var(--accent-light)", textDecoration: "none" }}>Meld dich einfach</Link>
              {" "}– wir finden eine Lösung.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="bg-glow-center" aria-hidden="true" />
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">FAQ</span>
            <h2>Häufige Fragen.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>
    </>
  );
}

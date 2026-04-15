"use client";

/**
 * Kontakt-Seite – Formular, WhatsApp-Button, Trust-Signale, FAQ
 */

import { useState } from "react";
import ContactForm from "@/components/ContactForm";
import { MessageCircle } from "lucide-react";

const trustSignals = [
  { icon: "⚡", text: "Ich melde mich innerhalb von 24 Stunden" },
  { icon: "🔒", text: "Deine Daten bleiben bei mir" },
  { icon: "☕", text: "Entspanntes Gespräch – kein Verkaufsgespräch" },
];

const faqs = [
  {
    q: "Wann meldest du dich?",
    a: "Innerhalb von 24 Stunden – meistens schneller.",
  },
  {
    q: "Kostet das Gespräch etwas?",
    a: "Nein. Das Erstgespräch ist komplett kostenlos und unverbindlich.",
  },
  {
    q: "Was soll ich vorbereiten?",
    a: "Nichts Besonderes. Vielleicht eine grobe Idee was du dir vorstellst. Den Rest klären wir zusammen.",
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

export default function KontaktPage() {
  return (
    <>
      {/* Hero */}
      <section className="section" style={{ textAlign: "center", paddingBottom: "64px" }}>
        <div className="bg-glow-top" aria-hidden="true" />
        <div className="container">
          <div className="hero-animate">
            <span className="tag">Kontakt</span>
          </div>
          <h1
            className="hero-animate"
            style={{ fontSize: "clamp(40px, 6vw, 80px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: "1.06", color: "var(--text-1)", margin: "20px auto 20px", maxWidth: "900px" }}
          >
            Lass uns reden.
          </h1>
          <p
            className="hero-animate"
            style={{ fontSize: "clamp(16px, 2vw, 19px)", lineHeight: "1.7", color: "var(--text-2)", maxWidth: "520px", margin: "0 auto" }}
          >
            Kein Stress, kein Druck. Einfach kurz schreiben und wir schauen gemeinsam
            was ich für dich tun kann.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section" style={{ paddingTop: "48px" }}>
        <div className="container">
          <div className="contact-grid">
            {/* Left: Trust + WhatsApp */}
            <div className="reveal">
              <h2 style={{ fontSize: "20px", fontWeight: 600, letterSpacing: "-0.025em", color: "var(--text-1)", marginBottom: "24px" }}>
                Das kannst du von mir erwarten.
              </h2>
              <div className="trust-signals">
                {trustSignals.map((signal, i) => (
                  <div key={i} className="trust-signal">
                    <span className="trust-signal__icon">{signal.icon}</span>
                    <span>{signal.text}</span>
                  </div>
                ))}
              </div>

              <div style={{ height: "1px", background: "linear-gradient(to right, rgba(255,255,255,0.10), transparent)", margin: "28px 0" }} />

              {/* WhatsApp */}
              <div className="glass" style={{ padding: "28px" }}>
                <p style={{ fontSize: "14px", color: "var(--text-2)", marginBottom: "16px" }}>
                  Lieber schnell schreiben? Kein Problem.
                </p>
                <a
                  href="https://wa.me/4915737225277"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--whatsapp btn--md"
                  style={{ width: "100%", justifyContent: "center" }}
                  aria-label="Auf WhatsApp schreiben"
                >
                  <MessageCircle size={18} />
                  Auf WhatsApp schreiben
                </a>
              </div>

            </div>

            {/* Right: Form */}
            <div className="reveal">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--alt">
        <div className="bg-glow-center" aria-hidden="true" />
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Was passiert als Nächstes?</span>
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

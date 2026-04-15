"use client";

/**
 * FinalCTA – Abschließender Call-to-Action in Glass-Elevated Container
 */

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="cta-section">
      <div className="cta-section__bg-glow" aria-hidden="true" />

      <div className="container">
        <div className="glass--elevated cta-container reveal">
          <div className="cta-container__glow" aria-hidden="true" />

          <span className="card-tag" style={{ marginBottom: "24px", display: "inline-block" }}>
            Kostenlos & unverbindlich
          </span>

          <h2>Bereit für deine neue Website?</h2>

          <p>
            Ruf mich an oder schreib mir – ich antworte innerhalb von 24 Stunden.
            Kostenlos und unverbindlich.
          </p>

          <div className="btn-group btn-group--center" style={{ position: "relative" }}>
            <Link
              href="/kontakt"
              className="btn btn--primary btn--lg"
              aria-label="Jetzt kostenlos anfragen"
            >
              Jetzt kostenlos anfragen
              <ArrowRight size={18} />
            </Link>
            <a
              href="https://wa.me/4915737225277"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--whatsapp btn--lg"
              aria-label="Auf WhatsApp schreiben"
            >
              <MessageCircle size={18} />
              Auf WhatsApp schreiben
            </a>
          </div>

          <div className="trust-badges" style={{ position: "relative" }}>
            {["⚡ Antwort in 24h", "🔒 Kostenlos & unverbindlich", "🤝 Kein Verkaufsgespräch"].map((item, i) => (
              <span key={i} className="trust-badge">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

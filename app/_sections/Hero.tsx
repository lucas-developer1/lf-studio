"use client";

/**
 * Hero – Startseite Header mit Headline, Subtext, CTAs und Kennzahlen
 */

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "5 Tage", label: "Lieferzeit" },
  { value: "Ab 499 €", label: "Festpreis" },
  { value: "100%", label: "Zufrieden" },
];

export default function Hero() {
  return (
    <section className="hero">
      {/* Glows */}
      <div className="hero__glow-main" aria-hidden="true" />
      <div className="hero__glow-left" aria-hidden="true" />
      <div className="hero__glow-right" aria-hidden="true" />

      {/* Badge */}
      <div className="hero-animate">
        <span className="hero-badge">
          <span className="hero-badge__dot" />
          Webdesign für kleine Betriebe
        </span>
      </div>

      {/* Headline */}
      <h1 className="hero-animate">
        Deine Website.{" "}
        <span className="text-gradient">Fertig in 5 Tagen.</span>
      </h1>

      {/* Subtext */}
      <p className="hero__sub hero-animate">
        Ich baue dir eine professionelle Website – ohne Agentur-Preise, ohne lange
        Wartezeiten, ohne Stress. Ab 499 €.
      </p>

      {/* CTA Buttons */}
      <div className="btn-group btn-group--center hero-animate">
        <Link
          href="/kontakt"
          className="btn btn--primary btn--lg"
          aria-label="Kostenlose Beratung anfragen"
        >
          Kostenlos beraten lassen
          <ArrowRight size={18} />
        </Link>
        <Link
          href="/leistungen"
          className="btn btn--glass btn--lg"
          aria-label="Leistungen ansehen"
        >
          Leistungen ansehen
        </Link>
      </div>

      {/* Stats Bar */}
      <div className="glass hero-stats hero-animate">
        {stats.map((stat, i) => (
          <div key={i} style={{ display: "contents" }}>
            <div className="hero-stats__item">
              <span className="hero-stats__number">{stat.value}</span>
              <span className="hero-stats__label">{stat.label}</span>
            </div>
            {i < stats.length - 1 && <div className="hero-stats__divider" />}
          </div>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator" aria-hidden="true">
        <div className="scroll-indicator__line" />
      </div>
    </section>
  );
}

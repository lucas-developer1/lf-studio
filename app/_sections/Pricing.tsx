"use client";

/**
 * Pricing – Klare Pakete: Basis 499€ und Premium 999€
 */

import Link from "next/link";
import { ArrowRight } from "lucide-react";

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

export default function Pricing() {
  return (
    <section className="section section--alt">
      <div className="bg-glow-center" aria-hidden="true" />
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Preise</span>
          <h2>Klare Preise. Kein Kleingedrucktes.</h2>
        </div>

        <div className="grid-pricing reveal-stagger">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`glass glass-glow-top pricing-card reveal${plan.popular ? " glass--highlight" : ""}`}
            >
              {plan.popular && (
                <div className="pricing-card__badge">Beliebt</div>
              )}

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
            <Link href="/kontakt" style={{ color: "var(--accent-light)", textDecoration: "none" }}>
              Meld dich einfach
            </Link>{" "}
            – wir finden eine Lösung.
          </p>
        </div>
      </div>
    </section>
  );
}

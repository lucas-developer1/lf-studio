"use client";

/**
 * Services – „Was ich für dich baue" – 4 Service-Kacheln
 */

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    icon: "🎨",
    title: "Individuelles Design",
    text: "Kein Template von der Stange. Jede Website sieht so aus wie dein Betrieb.",
  },
  {
    icon: "💻",
    title: "Sauber gebaut",
    text: "Schnell, zuverlässig und auf jedem Gerät einwandfrei.",
  },
  {
    icon: "📱",
    title: "Auch auf dem Handy perfekt",
    text: "Die meisten Besucher kommen vom Smartphone. Das sieht man bei uns nie.",
  },
  {
    icon: "🔍",
    title: "Google findet dich",
    text: "Wir bauen die technische Grundlage damit dich Suchmaschinen überhaupt finden können.",
  },
];

export default function Services() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Leistungen</span>
          <h2>Eine Website, die für dich arbeitet.</h2>
          <p>
            Egal ob du Handwerker, Gastronom oder Dienstleister bist – deine Website
            soll Vertrauen wecken und neue Kunden bringen.
          </p>
        </div>

        <div className="grid-2 reveal-stagger">
          {services.map((service, i) => (
            <div key={i} className="glass glass-glow-top feature-card reveal">
              <div className="feature-card__icon">{service.icon}</div>
              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ textAlign: "center", marginTop: "40px" }}>
          <Link
            href="/leistungen"
            style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--accent-light)", fontSize: "14px", fontWeight: 500, textDecoration: "none" }}
          >
            Alle Leistungen ansehen
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

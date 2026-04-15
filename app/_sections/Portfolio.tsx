"use client";

/**
 * Portfolio – Echte Kundenprojekte mit Screenshots
 */

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    label: "Physiotherapie",
    title: "Physiotherapie Thome",
    desc: "Neue Website nach Praxisübernahme – klares Design, das Vertrauen schafft und Patienten direkt zur Terminbuchung führt.",
    image: "/portfolio/physiotherapiethome.jpg",
    alt: "Website Physiotherapie Thome",
  },
  {
    label: "Gesundheitscoaching",
    title: "Fitter Leben",
    desc: "Erste Website nach der Gründung – frisches, modernes Auftreten für ein Gesundheitscoaching aus dem Saarland.",
    image: "/portfolio/fitter_leben_1.jpg",
    alt: "Website Fitter Leben Gesundheitscoaching",
  },
  {
    label: "Handwerk",
    title: "Holzbearbeitung Gräßer",
    desc: "Konzeptprojekt für einen traditionellen Holzverarbeitungsbetrieb – warmes Design, das 30 Jahre Erfahrung widerspiegelt.",
    image: "/portfolio/grasser_1.jpg",
    alt: "Website Holzbearbeitung Gräßer",
  },
];

export default function Portfolio() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Portfolio</span>
          <h2>Das habe ich schon gebaut.</h2>
        </div>

        <div className="grid-2 reveal-stagger">
          {projects.map((project, i) => (
            <div key={i} className="glass glass-glow-top portfolio-card reveal">
              <div className="portfolio-card__image">
                <img
                  src={project.image}
                  alt={project.alt}
                  width={800}
                  height={500}
                />
              </div>
              <div className="portfolio-card__body">
                <span className="card-tag">{project.label}</span>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ textAlign: "center", marginTop: "40px" }}>
          <Link
            href="/kontakt"
            style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--accent-light)", fontSize: "14px", fontWeight: 500, textDecoration: "none" }}
          >
            Dein Projekt anfragen
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";

/**
 * Testimonials – Platzhalter-Kundenstimmen aus realistischen Branchen
 */

const testimonials = [
  {
    name: "Sandra K.",
    role: "Inhaberin · Friseursalon Haarzeit",
    text: "Ich hatte keine Ahnung wie ich eine Website bekomme – Lucas hat sich um alles gekümmert. In einer Woche war sie online. Meine Kundinnen fragen mich jetzt ständig, wer das gemacht hat.",
    initials: "SK",
  },
  {
    name: "Thomas M.",
    role: "Inhaber · Heizung & Sanitär Maier",
    text: "Früher haben mich Kunden über Empfehlungen gefunden. Seit ich die neue Website habe, melden sich auch Leute über Google. Das hat sich wirklich bezahlt gemacht.",
    initials: "TM",
  },
  {
    name: "Anna R.",
    role: "Geschäftsführerin · Bäckerei Ritter",
    text: "Fair, schnell und das Ergebnis sieht wirklich gut aus. Lucas hat genau verstanden was ich wollte – ohne dass ich viel erklären musste.",
    initials: "AR",
  },
];

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Kundenstimmen</span>
          <h2>Was andere sagen.</h2>
        </div>

        <div className="grid-3 reveal-stagger">
          {testimonials.map((t, i) => (
            <div key={i} className="glass glass-glow-top testimonial-card reveal">
              <div className="testimonial-card__stars">
                {[...Array(5)].map((_, s) => (
                  <span key={s} className="testimonial-card__star">★</span>
                ))}
              </div>

              <p className="testimonial-card__text">„{t.text}"</p>

              <div className="testimonial-card__divider" />

              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">{t.initials}</div>
                <div>
                  <p className="testimonial-card__name">{t.name}</p>
                  <p className="testimonial-card__role">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

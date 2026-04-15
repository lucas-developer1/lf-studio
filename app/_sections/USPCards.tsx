"use client";

/**
 * USPCards – „Warum LF Studio?" – 3 Kernvorteile als Glass-Karten
 */

const usps = [
  {
    icon: "⚡",
    title: "In 5 Tagen online",
    text: "Keine langen Wartezeiten. Deine neue Website ist fertig, bevor andere Agenturen auch nur angefangen haben.",
  },
  {
    icon: "💎",
    title: "Qualität wie bei den Großen",
    text: "Ich habe jahrelang Websites für große Agenturen gebaut. Du bekommst das gleiche Ergebnis – zu einem fairen Preis.",
  },
  {
    icon: "💰",
    title: "Faire Preise, klare Ansage",
    text: "Kein Kleingedrucktes, keine Überraschungen. Du weißt von Anfang an, was du bezahlst.",
  },
];

export default function USPCards() {
  return (
    <section className="section section--alt">
      <div className="bg-glow-center" aria-hidden="true" />
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Warum LF Studio?</span>
          <h2>Was dich erwartet.</h2>
        </div>

        <div className="grid-3 reveal-stagger">
          {usps.map((usp, i) => (
            <div key={i} className="glass glass-glow-top usp-card reveal">
              <div className="usp-card__icon">{usp.icon}</div>
              <h3>{usp.title}</h3>
              <p>{usp.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

/**
 * TrustBrands – Branchen-Pillen als Vertrauenssignal
 */

const industries = [
  "Gastronomie",
  "Handwerk",
  "Handel",
  "Beratung",
  "Dienstleistung",
  "Gesundheit",
];

export default function TrustBrands() {
  return (
    <section className="section" style={{ padding: "64px 0", overflow: "hidden" }}>
      <div className="section-divider" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />
      <div className="container" style={{ textAlign: "center" }}>
        <p className="reveal" style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.09em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: "16px" }}>
          Für Betriebe aus allen Branchen
        </p>
        <div className="industry-pills reveal">
          {industries.map((industry, i) => (
            <span key={i} className="industry-pill">{industry}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

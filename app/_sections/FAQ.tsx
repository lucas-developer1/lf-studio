"use client";

/**
 * FAQ – Häufige Fragen mit CSS-Accordion (kein Framer Motion)
 */

import { useState } from "react";

const faqs = [
  {
    q: "Muss ich mich mit Technik auskennen?",
    a: "Gar nicht. Ich kümmere mich um alles – von der Domain bis zum Start. Du musst nichts wissen, ich erkläre dir was du brauchst.",
  },
  {
    q: "Was brauche ich damit wir anfangen können?",
    a: "Im besten Fall eine Idee und ein paar Bilder von deinem Betrieb. Den Rest klären wir zusammen im Gespräch.",
  },
  {
    q: "Was wenn mir etwas nicht gefällt?",
    a: "Dann ändern wir es – so oft wie nötig. Das ist mein Versprechen an dich.",
  },
  {
    q: "Wie lange dauert es?",
    a: "Das Basis-Paket ist in 5 Werktagen fertig. Das Premium-Paket in 14 Werktagen.",
  },
  {
    q: "Bekomme ich meine Website wirklich so günstig?",
    a: "Ja. Ich arbeite ohne großes Büro und ohne aufgeblähtes Team. Das spart Kosten – und die gebe ich direkt an dich weiter.",
  },
  {
    q: "Was passiert wenn meine Website mal nicht funktioniert?",
    a: "Schreib mir einfach. Ich bin persönlich erreichbar und kümmere mich darum – kein Callcenter, kein Ticketsystem.",
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

export default function FAQ() {
  return (
    <section className="section section--alt">
      <div className="bg-glow-center" aria-hidden="true" />
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">FAQ</span>
          <h2>Häufige Fragen.</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

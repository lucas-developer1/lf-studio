"use client";

/**
 * Process – „So läuft's ab" – 4 Schritte mit Kreis-Nummerierung und Verbindungslinie
 */

const steps = [
  {
    num: "1",
    title: "Wir reden kurz",
    text: "Du rufst mich an oder schreibst mir. Wir reden 20–30 Minuten über dein Unternehmen und was du dir vorstellst. Kostenlos, ohne Druck.",
  },
  {
    num: "2",
    title: "Du bekommst ein Angebot",
    text: "Innerhalb von 24 Stunden schicke ich dir ein klares Angebot – mit genauem Preis und Zeitplan.",
  },
  {
    num: "3",
    title: "Ich baue deine Website",
    text: "Du lehnst dich zurück. Ich arbeite. Du siehst das Ergebnis bevor es online geht und kannst Änderungen wünschen.",
  },
  {
    num: "4",
    title: "Deine Website geht online",
    text: "Ich kümmere mich um alles – Domain, Technik, Launch. Du musst dich um nichts kümmern.",
  },
];

export default function Process() {
  return (
    <section className="section section--alt">
      <div className="bg-glow-center" aria-hidden="true" />
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Ablauf</span>
          <h2>In 4 Schritten zu deiner neuen Website.</h2>
        </div>

        <div className="process-steps">
          {steps.map((step, i) => (
            <div key={i} className="process-step reveal">
              <div className="process-step__number">{step.num}</div>
              <div className="glass process-step__content">
                <h4>{step.title}</h4>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

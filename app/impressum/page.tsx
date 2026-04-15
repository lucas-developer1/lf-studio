/**
 * Impressum – gesetzliche Pflichtangaben
 */

export const metadata = {
  title: "Impressum",
  description: "Impressum von LF Studio – Lucas Bernhardt, Webdesign aus St. Wendel.",
};

export default function ImpressumPage() {
  return (
    <section className="prose-section">
      <div className="prose-wrap">
        <span className="tag">Rechtliches</span>
        <h1>Impressum</h1>

        <div className="glass prose-content">
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            Lucas Bernhardt<br />
            LF Studio<br />
            In der Lach 2<br />
            66640 Namborn
          </p>

          <div className="prose-divider" />

          <h2>Kontakt</h2>
          <p>
            E-Mail:{" "}
            <a href="mailto:lf.studios.webdesign@gmail.com">
              lf.studios.webdesign@gmail.com
            </a>
          </p>

          <div className="prose-divider" />

          <h2>Umsatzsteuer</h2>
          <p>
            Als Kleinunternehmer im Sinne von § 19 UStG wird keine Umsatzsteuer berechnet und ausgewiesen.
          </p>

          <div className="prose-divider" />

          <h2>Verantwortlich für den Inhalt (§ 18 Abs. 2 MStV)</h2>
          <p>
            Lucas Bernhardt<br />
            In der Lach 2<br />
            66640 Namborn
          </p>

          <div className="prose-divider" />

          <h2>Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
          <p>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>

          <div className="prose-divider" />

          <h2>Haftung für Links</h2>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>

          <div className="prose-divider" />

          <h2>Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>

          <p className="prose-meta">Stand: April 2026</p>
        </div>
      </div>
    </section>
  );
}

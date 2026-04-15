/**
 * Datenschutzerklärung – DSGVO-konforme Datenschutzseite
 */

export const metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung von LF Studio – Informationen zur Verarbeitung deiner Daten.",
};

export default function DatenschutzPage() {
  return (
    <section className="prose-section">
      <div className="prose-wrap">
        <span className="tag">Rechtliches</span>
        <h1>Datenschutz&shy;erklärung</h1>

        <div className="glass prose-content">
          <h2>1. Datenschutz auf einen Blick</h2>
          <p style={{ fontWeight: 500, color: "var(--text-1)", marginBottom: "8px" }}>Allgemeine Hinweise</p>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit deinen personenbezogenen Daten passiert, wenn du diese Website besuchst. Personenbezogene Daten sind alle Daten, mit denen du persönlich identifiziert werden kannst.
          </p>

          <div className="prose-divider" />

          <h2>2. Verantwortlicher</h2>
          <p>
            Verantwortlicher für die Datenverarbeitung auf dieser Website ist:<br /><br />
            Lucas Bernhardt<br />
            LF Studio<br />
            In der Lach 2<br />
            66640 Namborn<br /><br />
            E-Mail:{" "}
            <a href="mailto:lf.studios.webdesign@gmail.com">
              lf.studios.webdesign@gmail.com
            </a>
          </p>

          <div className="prose-divider" />

          <h2>3. Datenerfassung auf dieser Website</h2>

          <p style={{ fontWeight: 500, color: "var(--text-1)", marginBottom: "8px", marginTop: "16px" }}>Kontaktformular</p>
          <p>
            Wenn du das Kontaktformular auf dieser Website nutzt, werden die von dir eingegebenen Daten (Name, Betrieb, E-Mail-Adresse und Nachricht) zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei mir gespeichert. Diese Daten gebe ich nicht ohne deine Einwilligung weiter.
          </p>
          <p>
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern deine Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
          </p>

          <p style={{ fontWeight: 500, color: "var(--text-1)", marginBottom: "8px", marginTop: "16px" }}>E-Mail-Versand über Resend</p>
          <p>
            Für den Versand von E-Mails über das Kontaktformular nutze ich den Dienst Resend (Resend Inc., 2261 Market St, San Francisco, CA 94114, USA). Deine Kontaktdaten werden dabei zur Übermittlung der E-Mail an Resend weitergegeben. Resend verarbeitet diese Daten gemäß seiner Datenschutzrichtlinie. Die Übermittlung erfolgt verschlüsselt.
          </p>

          <p style={{ fontWeight: 500, color: "var(--text-1)", marginBottom: "8px", marginTop: "16px" }}>Server-Log-Dateien</p>
          <p>
            Der Hoster dieser Website erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die dein Browser automatisch übermittelt. Dies sind: Browsertyp und -version, verwendetes Betriebssystem, Referrer-URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse.
          </p>
          <p>
            Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
          </p>

          <div className="prose-divider" />

          <h2>4. Deine Rechte</h2>
          <p>
            Du hast jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck deiner gespeicherten personenbezogenen Daten zu erhalten. Du hast außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn du eine Einwilligung zur Datenverarbeitung erteilt hast, kannst du diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem hast du das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung deiner personenbezogenen Daten zu verlangen.
          </p>
          <p>
            Hierzu sowie zu weiteren Fragen zum Thema Datenschutz kannst du dich jederzeit an mich wenden. Des Weiteren steht dir ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
          </p>
          <p>
            Zuständige Aufsichtsbehörde für das Saarland:<br />
            Unabhängiges Datenschutzzentrum Saarland (UDZ)<br />
            Fritz-Dobisch-Straße 12, 66111 Saarbrücken
          </p>

          <div className="prose-divider" />

          <h2>5. Hosting</h2>
          <p>
            Diese Website wird bei Vercel Inc. (340 Pine Street, Suite 701, San Francisco, CA 94104, USA) gehostet. Vercel ist Empfänger deiner personenbezogenen Daten. Dies entspricht unserem berechtigten Interesse im Sinne des Art. 6 Abs. 1 S. 1 lit. f DSGVO, selbst keinen Server vorhalten zu müssen. Serverstandort ist die Europäische Union.
          </p>
          <p>
            Weitere Informationen zu Widerspruchs- und Beseitigungsmöglichkeiten gegenüber Vercel findest du unter: vercel.com/legal/privacy-policy
          </p>

          <div className="prose-divider" />

          <h2>6. Cookies</h2>
          <p>
            Diese Website verwendet keine Tracking-Cookies oder Analyse-Dienste. Es werden ausschließlich technisch notwendige Cookies verwendet, die für den Betrieb der Website erforderlich sind.
          </p>

          <p className="prose-meta">Stand: April 2026</p>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import Seo from "@/components/Seo";
import { PAGE_META, localBusinessSchema } from "@/data/seoConfig";

export default function Datenschutz() {
  return (
    <>
      <Seo {...PAGE_META["/datenschutz"]} schema={[localBusinessSchema()]} />
      <PageHeader
        eyebrow="Datenschutz"
        title="Haftungsausschluss & Datenschutzerklärung"
        subtitle="Gestützt auf Artikel 13 der Schweizerischen Bundesverfassung und die datenschutzrechtlichen Bestimmungen des Bundes (Datenschutzgesetz, DSG)."
        breadcrumbs={[{ label: "Start", to: "/" }, { label: "Datenschutz" }]}
      />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <ScrollReveal>
            <div className="space-y-8 text-foreground/70 leading-relaxed">
              <div>
                <h2 className="font-heading text-xl font-bold text-primary mb-3">1. Allgemeines / Einleitung</h2>
                <p>
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
                  Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der
                  gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung. Durch die
                  Nutzung dieser Website erklären Sie sich mit der Erhebung, Verarbeitung und Nutzung
                  von Daten gemäss der nachfolgenden Beschreibung einverstanden.
                </p>
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-primary mb-3">2. Verarbeitung personenbezogener Daten</h2>
                <p>
                  Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder
                  identifizierbare Person beziehen. Wir verarbeiten personenbezogene Daten in
                  Übereinstimmung mit dem Schweizer Datenschutzrecht und, sofern anwendbar, der EU-DSGVO
                  auf den Rechtsgrundlagen Art. 6 (1) GDPR lit. a (Einwilligung), lit. b (Vertragserfüllung),
                  lit. c (rechtliche Verpflichtung), lit. d (lebenswichtige Interessen) und lit. f
                  (berechtigte Interessen).
                </p>
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-primary mb-3">3. Cookies</h2>
                <p>
                  Diese Website verwendet Cookies – kleine Textdateien, die spezifische, auf den Nutzer
                  bezogene Informationen auf dem Endgerät speichern. Cookies ermöglichen es, die
                  Nutzungshäufigkeit zu ermitteln und unser Angebot kundenfreundlicher zu gestalten.
                  Sie können die Speicherung von Cookies durch Deaktivierung in den Browsereinstellungen
                  erreichen.
                </p>
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-primary mb-3">4. SSL/TLS-Verschlüsselung</h2>
                <p>
                  Diese Website verwendet aus Sicherheitsgründen eine SSL/TLS-Verschlüsselung zum Schutz
                  der Übertragung vertraulicher Inhalte. Eine verschlüsselte Verbindung erkennen Sie an
                  der Adresszeile des Browsers (https://) und dem Schloss-Symbol. Wenn die Verschlüsselung
                  aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten gelesen
                  werden.
                </p>
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-primary mb-3">5. Server-Log-Dateien</h2>
                <p>
                  Der Provider erhebt und speichert automatisch Informationen in sogenannten
                  Server-Log-Dateien, die Ihr Browser übermittelt: Browsertyp und -version, verwendetes
                  Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Zeitpunkt der
                  Serveranfrage. Diese Daten sind nicht bestimmten Personen zuordenbar.
                </p>
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-primary mb-3">6. Dienste von Drittanbietern</h2>
                <p>
                  Diese Website kann Google Maps zur Einbettung von Karten und YouTube zur Einbettung von
                  Videos nutzen. Diese Dienste der amerikanischen Google LLC verwenden u.a. Cookies,
                  wodurch Daten an Google in die USA übertragen werden.
                </p>
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-primary mb-3">7. Kontaktformular</h2>
                <p>
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben
                  inklusive der Kontaktdaten zwecks Bearbeitung der Anfrage und für Anschlussfragen bei
                  uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-primary mb-3">8. Rechte der betroffenen Person</h2>
                <p>
                  Jede betroffene Person hat das Recht auf Bestätigung, Auskunft, Berichtigung, Löschung
                  (Recht auf Vergessenwerden), Einschränkung der Verarbeitung, Widerspruch sowie das
                  Recht auf Datenübertragbarkeit. Zudem besteht ein Beschwerderecht bei einer
                  Aufsichtsbehörde.
                </p>
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-primary mb-3">Verantwortliche Stelle</h2>
                <p>
                  Leo Hackl Coaching<br />
                  Zehntenstrasse 17<br />
                  8800 Thalwil, Schweiz<br />
                  Telefon: 044 772 89 79 / 079 433 50 72
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
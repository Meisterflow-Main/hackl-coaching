import React from "react";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import Seo from "@/components/Seo";
import { PAGE_META, localBusinessSchema, organizationSchema } from "@/data/seoConfig";

export default function Datenschutz() {
  return (
    <>
      <Seo {...PAGE_META["/datenschutz"]} schema={[localBusinessSchema(), organizationSchema()]} />
      <PageHeader
        eyebrow="Datenschutz"
        title="Datenschutzerklärung"
        subtitle="Gestützt auf Artikel 13 der Schweizerischen Bundesverfassung und die datenschutzrechtlichen Bestimmungen des Bundes (Datenschutzgesetz, DSG) sowie die EU-DSGVO."
        breadcrumbs={[{ label: "Start", to: "/" }, { label: "Datenschutz" }]}
      />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <ScrollReveal>
            <div className="space-y-8 text-foreground/70 leading-relaxed">

              <p className="text-sm text-muted-foreground italic">
                Stand: Oktober 2026 · Version 2.0
              </p>

              <div>
                <h2 className="font-heading text-xl font-bold text-primary mb-3">1. Verantwortliche Stelle</h2>
                <p className="mb-2">
                  Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne des DSG und der DSGVO ist:
                </p>
                <p>
                  Leo Hackl Coaching<br />
                  Leo Hackl<br />
                  Zehntenstrasse 17<br />
                  8800 Thalwil, Schweiz<br />
                  Telefon: 044 772 89 79 / 079 433 50 72<br />
                  E-Mail: info@hacklcoaching.ch
                </p>
                <p className="mt-3">
                  Für Fragen zum Datenschutz erreichen Sie uns unter der oben genannten E-Mail-Adresse
                  mit dem Betreff „Datenschutz".
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl font-bold text-primary mb-3">2. Allgemeines / Einleitung</h2>
                <p>
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
                  Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der
                  gesetzlichen Datenschutzvorschriften (Schweizer Datenschutzgesetz DSG und, sofern
                  anwendbar, EU-DSGVO) sowie dieser Datenschutzerklärung.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl font-bold text-primary mb-3">3. Verarbeitung personenbezogener Daten</h2>
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
                <h2 className="font-heading text-xl font-bold text-primary mb-3">4. Cookies und Consent Management</h2>
                <p className="mb-3">
                  Diese Website verwendet Cookies und lokale Speicher – kleine Textdateien, die spezifische,
                  auf den Nutzer bezogene Informationen auf dem Endgerät speichern. Wir unterscheiden
                  folgende Kategorien:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Technisch notwendige Cookies:</strong> Werden für den grundlegenden Betrieb der
                    Website benötigt (z. B. Speicherung der Cookie-Einwilligung). Diese werden ohne
                    Zustimmung gesetzt und können nicht deaktiviert werden.
                  </li>
                  <li>
                    <strong>Externe Schriftarten (Google Fonts):</strong> Werden nur nach Ihrer ausdrücklichen
                    Einwilligung geladen. Siehe Abschnitt 5.
                  </li>
                  <li>
                    <strong>Statistik- und Marketing-Cookies:</strong> Werden aktuell nicht verwendet. Bei
                    künftiger Implementierung würden diese nur nach ausdrücklicher Einwilligung aktiviert.
                  </li>
                </ul>
                <p className="mt-3">
                  Sie können Ihre Einwilligung jederzeit über den Link „Cookie-Einstellungen" im Footer
                  widerrufen oder anpassen. Die Speicherung von Cookies können Sie zudem durch
                  Deaktivierung in den Browsereinstellungen verhindern.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl font-bold text-primary mb-3">5. Google Fonts (Schriftarten)</h2>
                <p>
                  Diese Website verwendet externe Schriftarten des Anbieters Google LLC („Google Fonts").
                  Die Schriftarten (Poppins, Inter) werden von Google-Servern geladen. Sofern Sie in das
                  Laden dieser Schriftarten eingewilligt haben, wird Ihre IP-Adresse an Google LLC (USA)
                  übertragen. Google LLC ist ein Unternehmen mit Sitz in den USA und unterliegt dem
                  Schweizer Datenschutzrecht nur eingeschränkt.
                </p>
                <p className="mt-2">
                  <strong>Drittland-Übermittlung:</strong> Die USA gelten als Drittland im Sinne des
                  Schweizer Datenschutzrechts und der DSGVO. Die Übermittlung erfolgt auf Grundlage
                  der von der Europäischen Kommission erlassenen Angemessenheitsbeschlüsse (EU-US Data
                  Privacy Framework) bzw. ergänzender Garantien (Standardvertragsklauseln). Ohne Ihre
                  Einwilligung werden keine Google Fonts geladen; die Website verwendet stattdessen
                  Systemschriften.
                </p>
                <p className="mt-2">
                  Sie können das Laden von Google Fonts jederzeit über die Cookie-Einstellungen im Footer
                  widerrufen. Weitere Informationen finden Sie in der Datenschutzerklärung von Google unter
                  https://policies.google.com/privacy und https://fonts.google.com/about.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl font-bold text-primary mb-3">6. WhatsApp (Meta Platforms)</h2>
                <p>
                  Auf dieser Website finden Sie einen WhatsApp-Button, über den Sie direkt mit Leo Hackl
                  in Kontakt treten können. Beim Klick auf den Button werden Sie zur WhatsApp-Plattform
                  von Meta Platforms Inc. (USA) weitergeleitet. Dabei können Ihre IP-Adresse und
                  weitere technische Daten an Meta übermittelt werden.
                </p>
                <p className="mt-2">
                  WhatsApp gehört zum Meta-Konzern (Meta Platforms Inc., 1601 Willow Road, Menlo Park, CA
                  94025, USA). Die Datenschutzerklärung von WhatsApp finden Sie unter
                  https://www.whatsapp.com/legal/privacy-policy. Bitte beachten Sie, dass Meta
                  gegebenenfalls eigene Daten verarbeitet, wenn Sie den Dienst nutzen.
                </p>
                <p className="mt-2">
                  Als Alternative zur Kontaktaufnahme über WhatsApp können Sie uns selbstverständlich
                  telefonisch (044 772 89 79) oder per E-Mail (info@hacklcoaching.ch) erreichen, ohne dass
                  Daten an Meta übermittelt werden.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl font-bold text-primary mb-3">7. OpenStreetMap (Kartenanzeige)</h2>
                <p>
                  Auf der Kontaktseite wird eine Kartenanzeige von OpenStreetMap (OpenStreetMap Foundation,
                  St John's Innovation Centre, Cowley Road, Cambridge, CB4 0WS, United Kingdom) eingebettet.
                  Beim Aufruf der Karte werden technische Daten (insbesondere Ihre IP-Adresse) an die
                  OpenStreetMap Foundation übertragen. Die Karte wird mit der „loading=lazy"-Option
                  eingebunden, sodass sie erst geladen wird, wenn sie in den sichtbaren Bereich scrollt.
                </p>
                <p className="mt-2">
                  Weitere Informationen zur Datenschutzerklärung von OpenStreetMap finden Sie unter
                  https://wiki.osmfoundation.org/wiki/Privacy_Policy.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl font-bold text-primary mb-3">8. MeisterFlow (CRM / Anfrageverarbeitung)</h2>
                <p>
                  Wenn Sie uns über das Kontaktformular oder das Bewertungsformular Anfragen zukommen
                  lassen, werden Ihre Angaben (Name, E-Mail, Telefon, Beschreibung) über eine
                  verschlüsselte API-Verbindung an MeisterFlow (MeisterFlow AG, Schweiz) übermittelt und
                  dort zur Bearbeitung Ihrer Anfrage gespeichert.
                </p>
                <p className="mt-2">
                  MeisterFlow fungiert dabei als Auftragsverarbeiter im Sinne von Art. 28 DSGVO bzw.
                  Art. 9 DSG. Es besteht ein Auftragsverarbeitungsvertrag (AVV) mit MeisterFlow, der
                  sicherstellt, dass Ihre Daten nur gemäss unseren Weisungen und unter Einhaltung der
                  geltenden Datenschutzbestimmungen verarbeitet werden.
                </p>
                <p className="mt-2">
                  Weitere Informationen finden Sie in der Datenschutzerklärung von MeisterFlow unter
                  https://meisterflow.ch/datenschutz.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl font-bold text-primary mb-3">9. Hosting und Content Delivery (Base44)</h2>
                <p>
                  Diese Website wird auf der Plattform von Base44 (Base44 Inc.) gehostet. Beim Aufruf der
                  Website werden technische Daten (IP-Adresse, Browsertyp, Betriebssystem, Zugriffszeit)
                  von Base44 als Hosting-Provider verarbeitet. Medieninhalte (Videos, Bilder) werden über
                  das Content Delivery Network media.base44.com ausgeliefert.
                </p>
                <p className="mt-2">
                  Die Verarbeitung erfolgt auf Grundlage unseres berechtigten Interesses an einer
                  sicheren, schnellen und zuverlässigen Bereitstellung dieser Website (Art. 6 Abs. 1
                  lit. f DSGVO). Base44 verarbeitet Daten im Rahmen der technischen Bereitstellung als
                  Auftragsverarbeiter.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl font-bold text-primary mb-3">10. Kontaktformular</h2>
                <p>
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben
                  (Name, E-Mail-Adresse, Telefonnummer, Beschreibung Ihres Anliegens) inklusive der
                  Kontaktdaten zwecks Bearbeitung der Anfrage und für Anschlussfragen bei uns
                  gespeichert und an MeisterFlow (siehe Abschnitt 8) übermittelt. Die Verarbeitung
                  erfolgt auf Grundlage Ihrer ausdrücklichen Einwilligung, die Sie durch Setzen des
                  Häkchens am Formular erteilen. Diese Daten geben wir nicht ohne Ihre Einwilligung
                  an weitere Dritte weiter.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl font-bold text-primary mb-3">11. Bewertungsformular</h2>
                <p>
                  Über die Bewertungsseite (/auftrag-bewerten) können Sie Ihre Erfahrung bewerten. Die
                  erhobenen Daten (Bewertung, Antworten auf Fragen, Freitext-Feedback) werden an
                  MeisterFlow übermittelt und intern ausgewertet. Bei einer positiven Bewertung
                  (4–5 Sterne) werden Sie auf eine externe Google-Reviews-Seite weitergeleitet. Beim
                  Klick auf den Weiterleitungs-Link werden Daten (mindestens Ihre IP-Adresse) an Google
                  LLC übertragen.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl font-bold text-primary mb-3">12. Externe Medien und Inhalte</h2>
                <p>
                  Einzelne Bilder und Videos werden von der externen Domain hacklcoaching.ch geladen.
                  Beim Aufruf dieser Inhalte wird Ihre IP-Adresse an den jeweiligen Server übertragen.
                  Die Inhalte werden über HTTPS verschlüsselt übertragen.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl font-bold text-primary mb-3">13. SSL/TLS-Verschlüsselung</h2>
                <p>
                  Diese Website verwendet aus Sicherheitsgründen eine SSL/TLS-Verschlüsselung zum Schutz
                  der Übertragung vertraulicher Inhalte. Eine verschlüsselte Verbindung erkennen Sie an
                  der Adresszeile des Browsers (https://) und dem Schloss-Symbol. Wenn die Verschlüsselung
                  aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten gelesen
                  werden.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl font-bold text-primary mb-3">14. Server-Log-Dateien</h2>
                <p>
                  Der Provider (Base44) erhebt und speichert automatisch Informationen in sogenannten
                  Server-Log-Dateien, die Ihr Browser übermittelt: Browsertyp und -version, verwendetes
                  Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Zeitpunkt der
                  Serveranfrage. Diese Daten sind nicht bestimmten Personen zuordenbar und werden
                  ausschliesslich für technische Zwecke (Sicherheit, Stabilität, Fehlerbehebung)
                  verarbeitet.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl font-bold text-primary mb-3">15. Aufbewahrungsfristen</h2>
                <p className="mb-2">
                  Wir verarbeiten und speichern Ihre personenbezogenen Daten nur für den Zeitraum, der
                  zur Erreichung des Speicherungszwecks erforderlich ist, oder solange dies gesetzlich
                  vorgeschrieben ist. Die folgenden Aufbewahrungsfristen gelten:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Kontaktformular-Daten:</strong> Bis zur abschliessenden Bearbeitung Ihrer
                    Anfrage, spätestens jedoch 24 Monate nach letztem Kontakt, sofern keine längere
                    gesetzliche Aufbewahrungspflicht besteht.
                  </li>
                  <li>
                    <strong>Bewertungsdaten:</strong> 12 Monate nach Abgabe der Bewertung.
                  </li>
                  <li>
                    <strong>Server-Log-Dateien:</strong> Maximal 14 Tage, soweit nicht zur
                    Fehlerbehebung längere Speicherung erforderlich ist.
                  </li>
                  <li>
                    <strong>Cookie-Einwilligung:</strong> Bis zum Widerruf oder bis zur Löschung der
                    Browserdaten.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-xl font-bold text-primary mb-3">16. Drittland-Übermittlung</h2>
                <p>
                  Bei der Nutzung von Google Fonts (Abschnitt 5), WhatsApp (Abschnitt 6) und der
                  Weiterleitung zu Google Reviews (Abschnitt 11) werden Daten an Empfänger in den USA
                  übermittelt. Die USA gelten als Drittland im Sinne des Schweizer Datenschutzrechts
                  und der DSGVO.
                </p>
                <p className="mt-2">
                  Die Übermittlung erfolgt auf Grundlage der von der Europäischen Kommission erlassenen
                  Angemessenheitsbeschlüsse für das EU-US Data Privacy Framework (für zertifizierte
                  Unternehmen) bzw. ergänzender Garantien (Standardvertragsklauseln der EU-Kommission).
                  Google LLC und Meta Platforms Inc. sind unter dem EU-US Data Privacy Framework
                  zertifiziert.
                </p>
                <p className="mt-2">
                  Bei OpenStreetMap (Abschnitt 7) erfolgt eine Übermittlung an das Vereinigte Königreich.
                  Die Europäische Kommission hat einen Angemessenheitsbeschluss für das Vereinigte
                  Königreich erlassen, sodass ein angemessenes Schutzniveau gewährleistet ist.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl font-bold text-primary mb-3">17. Ihre Rechte als betroffene Person</h2>
                <p className="mb-2">
                  Jede betroffene Person hat folgende Rechte:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Recht auf Bestätigung (Auskunft), ob personenbezogene Daten verarbeitet werden</li>
                  <li>Recht auf Berichtigung unrichtiger Daten</li>
                  <li>Recht auf Löschung (Recht auf Vergessenwerden)</li>
                  <li>Recht auf Einschränkung der Verarbeitung</li>
                  <li>Recht auf Datenübertragbarkeit</li>
                  <li>Recht auf Widerspruch gegen die Verarbeitung</li>
                  <li>Recht auf Widerruf einer erteilten Einwilligung</li>
                  <li>Beschwerderecht bei einer Aufsichtsbehörde</li>
                </ul>
                <p className="mt-3">
                  Zur Ausübung Ihrer Rechte wenden Sie sich an die oben genannte verantwortliche Stelle.
                  Die zuständige Schweizer Aufsichtsbehörde ist der Eidgenössische Datenschutz- und
                  Öffentlichkeitsbeauftragte (EDÖB, https://www.edoeb.admin.ch).
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl font-bold text-primary mb-3">18. Aktualität dieser Datenschutzerklärung</h2>
                <p>
                  Diese Datenschutzerklärung hat den Stand Oktober 2026 (Version 2.0). Durch die
                  Weiterentwicklung unserer Website oder die Implementierung neuer Technologien kann es
                  notwendig werden, diese Datenschutzerklärung anzupassen. Die jeweils aktuelle Version
                  ist auf dieser Seite abrufbar.
                </p>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
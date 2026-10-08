import React from "react";
import { Link } from "react-router-dom";
import {
  Shield, Building, Database, Target, Mail, Cookie, Type,
  MessageCircle, MapPin, Server, FileText, Clock, Lock,
  UserCheck, ArrowRight, Phone, Globe, Star, Image, ExternalLink
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import Seo from "@/components/Seo";
import { PAGE_META, localBusinessSchema, organizationSchema, BASE_URL } from "@/data/seoConfig";

const TOC = [
  { id: "verantwortliche-stelle", label: "Verantwortliche Stelle" },
  { id: "allgemeine-hinweise", label: "Allgemeine Hinweise" },
  { id: "erhobene-daten", label: "Erhobene Daten" },
  { id: "zweck", label: "Zweck der Datenverarbeitung" },
  { id: "kontaktformular", label: "Kontaktformular" },
  { id: "bewertungsformular", label: "Bewertungsformular" },
  { id: "cookies", label: "Cookies" },
  { id: "google-fonts", label: "Google Fonts" },
  { id: "whatsapp", label: "WhatsApp" },
  { id: "openstreetmap", label: "OpenStreetMap" },
  { id: "meisterflow", label: "MeisterFlow (CRM)" },
  { id: "hosting", label: "Hosting (Base44)" },
  { id: "externe-medien", label: "Externe Medien" },
  { id: "google-reviews", label: "Google Reviews Weiterleitung" },
  { id: "speicherdauer", label: "Speicherdauer" },
  { id: "datensicherheit", label: "Datensicherheit" },
  { id: "drittland", label: "Drittland-Übermittlung" },
  { id: "rechte", label: "Rechte der betroffenen Person" },
  { id: "aenderungen", label: "Änderungen" },
  { id: "kontakt", label: "Kontakt" },
];

function Section({ id, icon: Icon, title, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="flex items-center gap-3 mb-4">
        {Icon && (
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Icon className="h-4.5 w-4.5" />
          </div>
        )}
        <h2 className="font-heading text-lg md:text-xl font-bold text-primary">{title}</h2>
      </div>
      <div className="text-foreground/70 leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

export default function Datenschutz() {
  return (
    <>
      <Seo {...PAGE_META["/datenschutz"]} schema={[localBusinessSchema(), organizationSchema()]} />
      <PageHeader
        eyebrow="Datenschutz"
        title="Datenschutzerklärung"
        subtitle="Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den Bestimmungen des Schweizer Datenschutzgesetzes (DSG) sowie, sofern anwendbar, der Datenschutz-Grundverordnung (DSGVO). In dieser Datenschutzerklärung erläutern wir transparent, welche Daten auf unserer Website erhoben werden, zu welchem Zweck diese verarbeitet werden und welche Rechte Ihnen als betroffene Person zustehen. Wir beschränken die Datenerhebung auf das für die Bereitstellung und den Betrieb dieser Website sowie die Bearbeitung Ihrer Anfragen notwendige Mass. Ihre Einwilligung zu optionalen Diensten können Sie jederzeit über die Cookie-Einstellungen anpassen oder widerrufen."
        breadcrumbs={[{ label: "Start", to: "/" }, { label: "Datenschutz" }]}
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">

          {/* Inhaltsverzeichnis */}
          <ScrollReveal>
            <div className="rounded-2xl border border-border bg-secondary/30 p-6 md:p-8 mb-12">
              <h2 className="font-heading text-base font-bold text-primary mb-4">Inhaltsverzeichnis</h2>
              <nav className="grid gap-1.5 sm:grid-cols-2">
                {TOC.map((item, i) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="text-sm text-primary hover:text-accent hover:underline transition-colors flex items-center gap-2"
                  >
                    <span className="text-xs text-muted-foreground font-mono">{String(i + 1).padStart(2, "0")}</span>
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <p className="text-sm text-muted-foreground italic mb-10">
              Stand: Oktober 2026 · Version 3.0
            </p>
          </ScrollReveal>

          <div className="space-y-10">

            {/* 1. VERANTWORTLICHE STELLE */}
            <ScrollReveal>
              <Section id="verantwortliche-stelle" icon={Building} title="1. Verantwortliche Stelle">
                <div className="rounded-xl border border-border bg-white p-5">
                  <p className="font-semibold text-foreground">Leo Hackl Coaching</p>
                  <p className="mt-1">
                    Inhaber: Leo Hackl<br />
                    Zehntenstrasse 17<br />
                    8800 Thalwil, Schweiz
                  </p>
                  <p className="mt-3 space-y-1">
                    <a href="tel:0447728979" className="flex items-center gap-2 text-primary hover:underline">
                      <Phone className="h-4 w-4" /> 044 772 89 79
                    </a>
                    <a href="mailto:info@hacklcoaching.ch" className="flex items-center gap-2 text-primary hover:underline">
                      <Mail className="h-4 w-4" /> info@hacklcoaching.ch
                    </a>
                    <span className="flex items-center gap-2">
                      <Globe className="h-4 w-4" /> {BASE_URL.replace("https://", "")}
                    </span>
                  </p>
                </div>
                <p>
                  Für Fragen zum Datenschutz erreichen Sie uns unter der oben genannten E-Mail-Adresse
                  mit dem Betreff „Datenschutz".
                </p>
              </Section>
            </ScrollReveal>

            {/* 2. ALLGEMEINE HINWEISE */}
            <ScrollReveal>
              <Section id="allgemeine-hinweise" icon={Shield} title="2. Allgemeine Hinweise">
                <p>
                  Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder
                  identifizierbare Person beziehen. Wir verarbeiten personenbezogene Daten in
                  Übereinstimmung mit dem Schweizer Datenschutzgesetz (DSG) und, sofern anwendbar,
                  der EU-DSGVO.
                </p>
                <p>
                  Daten werden erhoben, wenn Sie uns über das Kontaktformular oder das Bewertungsformular
                  kontaktieren, wenn Sie optionale Dienste wie Google Fonts nutzen, oder wenn Sie die
                  Website aufrufen und technische Daten automatisch durch den Hosting-Provider
                  verarbeitet werden.
                </p>
                <p>
                  Die Verarbeitung erfolgt auf folgenden Rechtsgrundlagen: Ihrer ausdrücklichen
                  Einwilligung (Art. 6 Abs. 1 lit. a DSGVO / Art. 13 DSG), der Erfüllung vertraglicher
                  oder vorvertraglicher Pflichten (lit. b), rechtlichen Verpflichtungen (lit. c) und
                  berechtigten Interessen (lit. f).
                </p>
              </Section>
            </ScrollReveal>

            {/* 3. ERHOBENE DATEN */}
            <ScrollReveal>
              <Section id="erhobene-daten" icon={Database} title="3. Erhobene Daten">
                <p>Folgende personenbezogene Daten können auf dieser Website erhoben werden:</p>
                <ul className="list-disc pl-6 space-y-1.5">
                  <li><strong>Kontaktformular:</strong> Name, E-Mail-Adresse, Telefonnummer, Beschreibung Ihres Anliegens</li>
                  <li><strong>Bewertungsformular:</strong> Sternebewertung, Antworten auf Fragen, Freitext-Feedback</li>
                  <li><strong>Automatisch (Hosting):</strong> IP-Adresse, Browsertyp, Betriebssystem, Zugriffszeit, Referrer URL</li>
                  <li><strong>Cookie-Einwilligung:</strong> Speicherung Ihrer Cookie-Präferenzen (localStorage)</li>
                  <li><strong>Google Fonts (optional):</strong> IP-Adresse wird an Google übertragen, sofern eingewilligt</li>
                </ul>
              </Section>
            </ScrollReveal>

            {/* 4. ZWECK */}
            <ScrollReveal>
              <Section id="zweck" icon={Target} title="4. Zweck der Datenverarbeitung">
                <p>Die Verarbeitung personenbezogener Daten erfolgt für folgende Zwecke:</p>
                <ul className="list-disc pl-6 space-y-1.5">
                  <li><strong>Kontaktaufnahme & Anfragebearbeitung:</strong> Bearbeitung Ihrer Anfragen über das Kontaktformular</li>
                  <li><strong>Bewertungsabgabe:</strong> Erfassung und Auswertung Ihres Feedbacks</li>
                  <li><strong>Websitebetrieb:</strong> Technische Bereitstellung, Sicherheit und Stabilität durch den Hosting-Provider</li>
                  <li><strong>Schriftarten:</strong> Darstellung der Website in den Schriftarten Poppins und Inter (nur nach Einwilligung)</li>
                  <li><strong>Kartenanzeige:</strong> Anzeige der Praxis-Adresse auf einer Karte</li>
                </ul>
              </Section>
            </ScrollReveal>

            {/* 5. KONTAKTFORMULAR */}
            <ScrollReveal>
              <Section id="kontaktformular" icon={Mail} title="5. Kontaktformular">
                <p>
                  Wenn Sie uns über das Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben
                  (Name, E-Mail-Adresse, Telefonnummer, Beschreibung Ihres Anliegens) gespeichert und
                  über eine verschlüsselte API-Verbindung an MeisterFlow (siehe Abschnitt 11)
                  übermittelt.
                </p>
                <p>
                  Die Verarbeitung erfolgt auf Grundlage Ihrer ausdrücklichen Einwilligung, die Sie
                  durch Setzen des Häkchens im Formular erteilen. Diese Daten geben wir nicht ohne Ihre
                  Einwilligung an weitere Dritte weiter. Die Einwilligung kann jederzeit widerrufen
                  werden.
                </p>
                <p>
                  Das Formular enthält einen Honeypot-Mechanismus (verstecktes Feld) zum Schutz vor
                  Spam-Bots. Dieser wird ohne Ihre Kenntnis ausgefüllt und dient ausschliesslich der
                  Sicherheit.
                </p>
              </Section>
            </ScrollReveal>

            {/* 6. BEWERTUNGSFORMULAR */}
            <ScrollReveal>
              <Section id="bewertungsformular" icon={Star} title="6. Bewertungsformular">
                <p>
                  Über die Bewertungsseite (/auftrag-bewerten) können Sie Ihre Erfahrung bewerten. Die
                  erhobenen Daten (Bewertung, Antworten auf Fragen, Freitext-Feedback) werden an
                  MeisterFlow übermittelt und intern ausgewertet.
                </p>
                <p>
                  Bei einer positiven Bewertung (4 bis 5 Sterne) werden Sie auf eine externe
                  Google-Reviews-Seite weitergeleitet. Beim Klick auf den Weiterleitungs-Link werden
                  Daten (mindestens Ihre IP-Adresse) an Google LLC übertragen (siehe Abschnitt 14).
                </p>
              </Section>
            </ScrollReveal>

            {/* 7. COOKIES */}
            <ScrollReveal>
              <Section id="cookies" icon={Cookie} title="7. Cookies">
                <p>
                  Diese Website verwendet Cookies und lokale Speicherung – kleine Textdateien, die
                  spezifische Informationen auf Ihrem Endgerät speichern. Wir unterscheiden folgende
                  Kategorien:
                </p>
                <ul className="list-disc pl-6 space-y-1.5">
                  <li>
                    <strong>Technisch notwendige Cookies:</strong> Werden für den grundlegenden Betrieb
                    der Website benötigt (z. B. Speicherung der Cookie-Einwilligung). Diese werden ohne
                    Zustimmung gesetzt und können nicht deaktiviert werden.
                  </li>
                  <li>
                    <strong>Externe Schriftarten (Google Fonts):</strong> Werden nur nach Ihrer
                    ausdrücklichen Einwilligung geladen. Siehe Abschnitt 8.
                  </li>
                  <li>
                    <strong>Statistik- und Marketing-Cookies:</strong> Werden aktuell nicht verwendet.
                    Bei künftiger Implementierung würden diese nur nach ausdrücklicher Einwilligung
                    aktiviert.
                  </li>
                </ul>
                <p>
                  Sie können Ihre Einwilligung jederzeit über den Link „Cookie-Einstellungen" im Footer
                  widerrufen oder anpassen. Die Speicherung von Cookies können Sie zudem durch
                  Deaktivierung in den Browsereinstellungen verhindern.
                </p>
              </Section>
            </ScrollReveal>

            {/* 8. GOOGLE FONTS */}
            <ScrollReveal>
              <Section id="google-fonts" icon={Type} title="8. Google Fonts (Schriftarten)">
                <p>
                  Diese Website verwendet externe Schriftarten des Anbieters Google LLC („Google Fonts").
                  Die Schriftarten (Poppins, Inter) werden von Google-Servern geladen. Sofern Sie in das
                  Laden dieser Schriftarten eingewilligt haben, wird Ihre IP-Adresse an Google LLC (USA)
                  übertragen. Google LLC ist ein Unternehmen mit Sitz in den USA und unterliegt dem
                  Schweizer Datenschutzrecht nur eingeschränkt.
                </p>
                <p>
                  <strong>Drittland-Übermittlung:</strong> Die USA gelten als Drittland im Sinne des
                  Schweizer Datenschutzrechts und der DSGVO. Die Übermittlung erfolgt auf Grundlage
                  der von der Europäischen Kommission erlassenen Angemessenheitsbeschlüsse (EU-US Data
                  Privacy Framework) bzw. ergänzender Garantien (Standardvertragsklauseln). Ohne Ihre
                  Einwilligung werden keine Google Fonts geladen; die Website verwendet stattdessen
                  Systemschriften.
                </p>
                <p>
                  Sie können das Laden von Google Fonts jederzeit über die Cookie-Einstellungen im Footer
                  widerrufen. Weitere Informationen finden Sie in der Datenschutzerklärung von Google
                  unter{" "}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-0.5">
                    policies.google.com/privacy <ExternalLink className="h-3 w-3" />
                  </a>.
                </p>
              </Section>
            </ScrollReveal>

            {/* 9. WHATSAPP */}
            <ScrollReveal>
              <Section id="whatsapp" icon={MessageCircle} title="9. WhatsApp (Meta Platforms)">
                <p>
                  Auf dieser Website finden Sie einen WhatsApp-Button, über den Sie direkt mit Leo Hackl
                  in Kontakt treten können. Beim Klick auf den Button werden Sie zur WhatsApp-Plattform
                  von Meta Platforms Inc. (USA) weitergeleitet. Dabei können Ihre IP-Adresse und
                  weitere technische Daten an Meta übermittelt werden.
                </p>
                <p>
                  WhatsApp gehört zum Meta-Konzern (Meta Platforms Inc., 1601 Willow Road, Menlo Park, CA
                  94025, USA). Die Datenschutzerklärung von WhatsApp finden Sie unter{" "}
                  <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-0.5">
                    whatsapp.com/legal/privacy-policy <ExternalLink className="h-3 w-3" />
                  </a>.
                </p>
                <p>
                  Als Alternative zur Kontaktaufnahme über WhatsApp können Sie uns selbstverständlich
                  telefonisch (044 772 89 79) oder per E-Mail (info@hacklcoaching.ch) erreichen, ohne
                  dass Daten an Meta übermittelt werden.
                </p>
              </Section>
            </ScrollReveal>

            {/* 10. OPENSTREETMAP */}
            <ScrollReveal>
              <Section id="openstreetmap" icon={MapPin} title="10. OpenStreetMap (Kartenanzeige)">
                <p>
                  Auf der Kontaktseite wird eine Kartenanzeige von OpenStreetMap (OpenStreetMap
                  Foundation, St John's Innovation Centre, Cowley Road, Cambridge, CB4 0WS, United
                  Kingdom) eingebettet. Beim Aufruf der Karte werden technische Daten (insbesondere
                  Ihre IP-Adresse) an die OpenStreetMap Foundation übertragen. Die Karte wird mit der
                  „loading=lazy"-Option eingebunden, sodass sie erst geladen wird, wenn sie in den
                  sichtbaren Bereich scrollt.
                </p>
                <p>
                  Weitere Informationen zur Datenschutzerklärung von OpenStreetMap finden Sie unter{" "}
                  <a href="https://wiki.osmfoundation.org/wiki/Privacy_Policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-0.5">
                    wiki.osmfoundation.org/wiki/Privacy_Policy <ExternalLink className="h-3 w-3" />
                  </a>.
                </p>
              </Section>
            </ScrollReveal>

            {/* 11. MEISTERFLOW */}
            <ScrollReveal>
              <Section id="meisterflow" icon={Server} title="11. MeisterFlow (CRM / Anfrageverarbeitung)">
                <p>
                  Wenn Sie uns über das Kontaktformular oder das Bewertungsformular Anfragen zukommen
                  lassen, werden Ihre Angaben über eine verschlüsselte API-Verbindung an MeisterFlow
                  (MeisterFlow AG, Schweiz) übermittelt und dort zur Bearbeitung Ihrer Anfrage
                  gespeichert.
                </p>
                <p>
                  MeisterFlow fungiert dabei als Auftragsverarbeiter im Sinne von Art. 28 DSGVO bzw.
                  Art. 9 DSG. Es besteht ein Auftragsverarbeitungsvertrag (AVV) mit MeisterFlow, der
                  sicherstellt, dass Ihre Daten nur gemäss unseren Weisungen und unter Einhaltung der
                  geltenden Datenschutzbestimmungen verarbeitet werden.
                </p>
              </Section>
            </ScrollReveal>

            {/* 12. HOSTING */}
            <ScrollReveal>
              <Section id="hosting" icon={Server} title="12. Hosting und Content Delivery (Base44)">
                <p>
                  Diese Website wird auf der Plattform von Base44 (Base44 Inc.) gehostet. Beim Aufruf
                  der Website werden technische Daten (IP-Adresse, Browsertyp, Betriebssystem,
                  Zugriffszeit) von Base44 als Hosting-Provider verarbeitet. Medieninhalte (Videos,
                  Bilder) werden über das Content Delivery Network media.base44.com ausgeliefert.
                </p>
                <p>
                  Die Verarbeitung erfolgt auf Grundlage unseres berechtigten Interesses an einer
                  sicheren, schnellen und zuverlässigen Bereitstellung dieser Website (Art. 6 Abs. 1
                  lit. f DSGVO). Base44 verarbeitet Daten im Rahmen der technischen Bereitstellung als
                  Auftragsverarbeiter.
                </p>
              </Section>
            </ScrollReveal>

            {/* 13. EXTERNE MEDIEN */}
            <ScrollReveal>
              <Section id="externe-medien" icon={Image} title="13. Externe Medien und Inhalte">
                <p>
                  Einzelne Bilder und Videos werden von der externen Domain hacklcoaching.ch sowie von
                  media.base44.com geladen. Beim Aufruf dieser Inhalte wird Ihre IP-Adresse an den
                  jeweiligen Server übertragen. Die Inhalte werden über HTTPS verschlüsselt übertragen.
                </p>
              </Section>
            </ScrollReveal>

            {/* 14. GOOGLE REVIEWS WEITERLEITUNG */}
            <ScrollReveal>
              <Section id="google-reviews" icon={Star} title="14. Google Reviews Weiterleitung">
                <p>
                  Auf der Bewertungsseite (/auftrag-bewerten) werden Sie bei einer positiven Bewertung
                  (4 bis 5 Sterne) auf eine externe Google-Reviews-Seite weitergeleitet. Beim Klick auf
                  den Weiterleitungs-Link werden Daten (mindestens Ihre IP-Adresse) an Google LLC
                  übertragen. Google LLC ist unter dem EU-US Data Privacy Framework zertifiziert.
                </p>
                <p>
                  Die GoogleReviewWidget-Komponente auf dieser Website zeigt ausschliesslich
                  statische aggregierte Daten (Durchschnittsbewertung 5,0 und Anzahl 17 Bewertungen),
                  die manuell aus dem Google Business Profile extrahiert wurden. Es werden keine
                  einzelnen Bewertungstexte von Google geladen oder angezeigt.
                </p>
              </Section>
            </ScrollReveal>

            {/* 15. SPEICHERDAUER */}
            <ScrollReveal>
              <Section id="speicherdauer" icon={Clock} title="15. Speicherdauer">
                <p>
                  Wir verarbeiten und speichern Ihre personenbezogenen Daten nur so lange, wie dies
                  für den jeweiligen Zweck erforderlich ist oder gesetzliche Aufbewahrungspflichten
                  bestehen. Nach Wegfall des Zwecks werden die Daten gelöscht oder anonymisiert.
                </p>
                <ul className="list-disc pl-6 space-y-1.5">
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
              </Section>
            </ScrollReveal>

            {/* 16. DATENSICHERHEIT */}
            <ScrollReveal>
              <Section id="datensicherheit" icon={Lock} title="16. Datensicherheit">
                <p>
                  Diese Website verwendet aus Sicherheitsgründen eine SSL/TLS-Verschlüsselung zum
                  Schutz der Übertragung vertraulicher Inhalte. Eine verschlüsselte Verbindung erkennen
                  Sie an der Adresszeile des Browsers (https://) und dem Schloss-Symbol.
                </p>
                <p>
                  Wir treffen weitere technische und organisatorische Massnahmen zum Schutz Ihrer
                  Daten:
                </p>
                <ul className="list-disc pl-6 space-y-1.5">
                  <li><strong>SSL/TLS-Verschlüsselung:</strong> Alle Datenübertragungen erfolgen verschlüsselt</li>
                  <li><strong>Zugriffsschutz:</strong> Zugriff auf Daten nur für autorisierte Personen</li>
                  <li><strong>Honeypot:</strong> Schutz der Formulare vor Spam-Bots</li>
                  <li><strong>Consent Management:</strong> Optionale Dienste nur nach ausdrücklicher Einwilligung</li>
                  <li><strong>Auftragsverarbeitungsvertrag:</strong> Mit externen Dienstleistern (MeisterFlow)</li>
                </ul>
              </Section>
            </ScrollReveal>

            {/* 17. DRITTLAND */}
            <ScrollReveal>
              <Section id="drittland" icon={Globe} title="17. Drittland-Übermittlung">
                <p>
                  Bei der Nutzung von Google Fonts (Abschnitt 8), WhatsApp (Abschnitt 9) und der
                  Weiterleitung zu Google Reviews (Abschnitt 14) werden Daten an Empfänger in den USA
                  übermittelt. Die USA gelten als Drittland im Sinne des Schweizer Datenschutzrechts
                  und der DSGVO.
                </p>
                <p>
                  Die Übermittlung erfolgt auf Grundlage der von der Europäischen Kommission erlassenen
                  Angemessenheitsbeschlüsse für das EU-US Data Privacy Framework (für zertifizierte
                  Unternehmen) bzw. ergänzender Garantien (Standardvertragsklauseln der EU-Kommission).
                  Google LLC und Meta Platforms Inc. sind unter dem EU-US Data Privacy Framework
                  zertifiziert.
                </p>
                <p>
                  Bei OpenStreetMap (Abschnitt 10) erfolgt eine Übermittlung an das Vereinigte
                  Königreich. Die Europäische Kommission hat einen Angemessenheitsbeschluss für das
                  Vereinigte Königreich erlassen, sodass ein angemessenes Schutzniveau gewährleistet
                  ist.
                </p>
              </Section>
            </ScrollReveal>

            {/* 18. RECHTE */}
            <ScrollReveal>
              <Section id="rechte" icon={UserCheck} title="18. Rechte der betroffenen Person">
                <p>Jede betroffene Person hat folgende Rechte:</p>
                <ul className="list-disc pl-6 space-y-1.5">
                  <li><strong>Auskunft:</strong> Bestätigung, ob personenbezogene Daten verarbeitet werden, und Auskunft über diese Daten</li>
                  <li><strong>Berichtigung:</strong> Berichtigung unrichtiger oder unvollständiger Daten</li>
                  <li><strong>Löschung:</strong> Löschung Ihrer personenbezogenen Daten (Recht auf Vergessenwerden)</li>
                  <li><strong>Einschränkung:</strong> Einschränkung der Verarbeitung Ihrer Daten</li>
                  <li><strong>Widerspruch:</strong> Widerspruch gegen die Verarbeitung, die auf berechtigten Interessen beruht</li>
                  <li><strong>Datenherausgabe:</strong> Herausgabe Ihrer Daten in einem strukturierten, gängigen Format (soweit anwendbar)</li>
                  <li><strong>Widerruf:</strong> Widerruf einer erteilten Einwilligung jederzeit</li>
                  <li><strong>Beschwerde:</strong> Beschwerderecht bei einer Aufsichtsbehörde</li>
                </ul>
                <p>
                  Zur Ausübung Ihrer Rechte wenden Sie sich an die in Abschnitt 1 genannte verantwortliche
                  Stelle. Die zuständige Schweizer Aufsichtsbehörde ist der Eidgenössische Datenschutz-
                  und Öffentlichkeitsbeauftragte (EDÖB,{" "}
                  <a href="https://www.edoeb.admin.ch" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-0.5">
                    edoeb.admin.ch <ExternalLink className="h-3 w-3" />
                  </a>).
                </p>
              </Section>
            </ScrollReveal>

            {/* 19. ÄNDERUNGEN */}
            <ScrollReveal>
              <Section id="aenderungen" icon={FileText} title="19. Änderungen">
                <p>
                  Diese Datenschutzerklärung kann angepasst werden, um rechtliche oder technische
                  Entwicklungen zu berücksichtigen oder neue Dienste zu dokumentieren. Es gilt jeweils
                  die aktuelle Version auf dieser Website. Bei wesentlichen Änderungen werden wir die
                  Versionnummer und das Datum aktualisieren.
                </p>
              </Section>
            </ScrollReveal>

            {/* 20. KONTAKT */}
            <ScrollReveal>
              <div id="kontakt" className="scroll-mt-24">
                <div className="rounded-2xl border border-border bg-navy p-8 md:p-10 text-white">
                  <h2 className="font-heading text-xl font-bold mb-3">Kontakt bei Fragen zum Datenschutz</h2>
                  <p className="text-white/70 leading-relaxed mb-6">
                    Bei Fragen zur Verarbeitung Ihrer personenbezogenen Daten erreichen Sie uns
                    jederzeit. Wir beraten Sie gerne zu Ihren Rechten und unserer Datenschutzpraxis.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="tel:0447728979"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
                    >
                      <Phone className="h-4 w-4" /> 044 772 89 79
                    </a>
                    <a
                      href="mailto:info@hacklcoaching.ch"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold hover:bg-white/10 transition-colors"
                    >
                      <Mail className="h-4 w-4" /> E-Mail senden
                    </a>
                    <Link
                      to="/kontakt"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold hover:bg-white/10 transition-colors"
                    >
                      Kontaktformular <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>
    </>
  );
}
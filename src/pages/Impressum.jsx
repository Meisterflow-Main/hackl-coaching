import React from "react";
import { Link } from "react-router-dom";
import {
  Building, Phone, Mail, User, Briefcase,
  Shield, Copyright, FileText, ArrowRight
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import Seo from "@/components/Seo";
import CTASection from "@/components/CTASection";
import { PAGE_META, localBusinessSchema, organizationSchema, BASE_URL } from "@/data/seoConfig";

export default function Impressum() {
  return (
    <>
      <Seo {...PAGE_META["/impressum"]} schema={[localBusinessSchema(), organizationSchema()]} />
      <PageHeader
        eyebrow="Impressum"
        title="Impressum"
        subtitle="Dieses Impressum enthält die gesetzlich vorgeschriebenen Angaben zur Anbieterkennzeichnung gemäss Schweizer Obligationenrecht. Hier finden Sie alle wesentlichen Informationen über den Betreiber dieser Website, unsere Kontaktdaten sowie rechtliche Hinweise zu Haftung, Urheberrecht und Datenschutz. Wir legen grossen Wert auf Transparenz und stehen Ihnen bei Fragen jederzeit telefonisch, per E-Mail oder über unser Kontaktformular zur Verfügung."
        breadcrumbs={[{ label: "Start", to: "/" }, { label: "Impressum" }]}
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">

          {/* UNTERNEHMEN */}
          <ScrollReveal>
            <div className="rounded-2xl border border-border bg-white p-8 md:p-10 shadow-sm mb-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Building className="h-5 w-5" />
                </div>
                <h2 className="font-heading text-xl font-bold text-primary">Unternehmen</h2>
              </div>
              <dl className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <dt className="sm:w-44 shrink-0 text-sm font-semibold text-muted-foreground">Firmenname</dt>
                  <dd className="text-foreground">Leo Hackl Coaching</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <dt className="sm:w-44 shrink-0 text-sm font-semibold text-muted-foreground">Rechtsform</dt>
                  <dd className="text-foreground">Einzelunternehmen</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <dt className="sm:w-44 shrink-0 text-sm font-semibold text-muted-foreground">Inhaber</dt>
                  <dd className="text-foreground">Leo Hackl</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <dt className="sm:w-44 shrink-0 text-sm font-semibold text-muted-foreground">Adresse</dt>
                  <dd className="text-foreground">
                    Zehntenstrasse 17<br />
                    8800 Thalwil<br />
                    Schweiz
                  </dd>
                </div>
              </dl>
            </div>
          </ScrollReveal>

          {/* KONTAKT */}
          <ScrollReveal delay={0.05}>
            <div className="rounded-2xl border border-border bg-white p-8 md:p-10 shadow-sm mb-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <h2 className="font-heading text-xl font-bold text-primary">Kontakt</h2>
              </div>
              <dl className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <dt className="sm:w-44 shrink-0 text-sm font-semibold text-muted-foreground">Telefon</dt>
                  <dd>
                    <a href="tel:0794335072" className="text-primary hover:underline">079 433 50 72</a>
                  </dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <dt className="sm:w-44 shrink-0 text-sm font-semibold text-muted-foreground">Mobil</dt>
                  <dd>
                    <a href="tel:0794335072" className="text-primary hover:underline">079 433 50 72</a>
                  </dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <dt className="sm:w-44 shrink-0 text-sm font-semibold text-muted-foreground">E-Mail</dt>
                  <dd>
                    <a href="mailto:info@hacklcoaching.ch" className="text-primary hover:underline inline-flex items-center gap-1.5">
                      <Mail className="h-4 w-4" /> info@hacklcoaching.ch
                    </a>
                  </dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <dt className="sm:w-44 shrink-0 text-sm font-semibold text-muted-foreground">Webseite</dt>
                  <dd className="text-foreground">{BASE_URL.replace("https://", "")}</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <dt className="sm:w-44 shrink-0 text-sm font-semibold text-muted-foreground">Kontaktformular</dt>
                  <dd>
                    <Link to="/kontakt" className="text-primary hover:underline inline-flex items-center gap-1">
                      Zum Kontaktformular <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </dd>
                </div>
              </dl>
            </div>
          </ScrollReveal>

          {/* VERTRETUNGSBERECHTIGTE PERSON */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-2xl border border-border bg-white p-8 md:p-10 shadow-sm mb-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <User className="h-5 w-5" />
                </div>
                <h2 className="font-heading text-xl font-bold text-primary">Vertretungsberechtigte Person</h2>
              </div>
              <p className="text-foreground/70 leading-relaxed">
                Geschäftsführer und Inhaber: Leo Hackl
                <br />
                Zehntenstrasse 17, 8800 Thalwil, Schweiz
              </p>
            </div>
          </ScrollReveal>

          {/* BERUFSBEZEICHNUNG */}
          <ScrollReveal delay={0.15}>
            <div className="rounded-2xl border border-border bg-white p-8 md:p-10 shadow-sm mb-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Briefcase className="h-5 w-5" />
                </div>
                <h2 className="font-heading text-xl font-bold text-primary">Berufsbezeichnung</h2>
              </div>
              <p className="text-foreground/70 leading-relaxed mb-3">
                Berufsbezeichnung: Psychologischer Berater & Systemischer Hypnotherapeut
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Die Berufsbezeichnung wurde in der Schweiz verliehen. Für die Ausübung
                psychologischer Beratung und systemischer Hypnotherapie gelten die beruflichen
                und ethischen Richtlinien der Schweiz.
              </p>
            </div>
          </ScrollReveal>

          {/* HAFTUNGSAUSSCHLUSS */}
          <ScrollReveal delay={0.2}>
            <div className="rounded-2xl border border-border bg-white p-8 md:p-10 shadow-sm mb-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Shield className="h-5 w-5" />
                </div>
                <h2 className="font-heading text-xl font-bold text-primary">Haftungsausschluss</h2>
              </div>
              <div className="space-y-5 text-foreground/70 leading-relaxed">
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1.5">Haftung für Inhalte</h3>
                  <p>
                    Die Inhalte dieser Website werden mit grösstmöglicher Sorgfalt erstellt. Für die
                    Aktualität, Korrektheit und Vollständigkeit der bereitgestellten Informationen kann
                    jedoch keine Gewähr übernommen werden. Haftungsansprüche gegen den Anbieter,
                    welche sich auf Schäden materieller oder ideeller Art beziehen, sind ausgeschlossen,
                    sofern kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden vorliegt.
                  </p>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1.5">Haftung für Links</h3>
                  <p>
                    Bei direkten oder indirekten Verweisen auf fremde Webseiten (Hyperlinks), die
                    ausserhalb des Verantwortungsbereiches des Anbieters liegen, würde eine
                    Haftungsverpflichtung ausschliesslich in dem Fall in Kraft treten, in dem der
                    Anbieter von den Inhalten Kenntnis hat und es ihm technisch möglich und zumutbar
                    wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern. Der Anbieter
                    distanziert sich hiermit ausdrücklich von allen Inhalten aller verlinkten Seiten,
                    die nach der Linksetzung verändert wurden.
                  </p>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1.5">Verfügbarkeit</h3>
                  <p>
                    Der Anbieter bemüht sich, die Website ohne Unterbrechung verfügbar zu halten. Bei
                    technischen Problemen, die ausserhalb des Einflussbereichs des Anbieters liegen,
                    kann jedoch keine Haftung für die ständige Verfügbarkeit übernommen werden.
                  </p>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1.5">Änderungen</h3>
                  <p>
                    Der Anbieter behält sich vor, die bereitgestellten Inhalte jederzeit zu ändern oder
                    zu ergänzen. Rechtsansprüche Dritter werden dadurch nicht berührt.
                  </p>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1.5">Schweizer Recht</h3>
                  <p>
                    Dieser Haftungsausschluss ist als Teil des Internetangebotes zu betrachten. Sofern
                    Teile oder einzelne Formulierungen dieses Textes der geltenden Rechtslage nicht,
                    nicht mehr oder nicht vollständig entsprechen sollten, bleiben die übrigen Teile
                    des Dokumentes in ihrem Inhalt und ihrer Gültigkeit davon unberührt. Es gilt
                    Schweizer Recht.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* URHEBERRECHT */}
          <ScrollReveal delay={0.25}>
            <div className="rounded-2xl border border-border bg-white p-8 md:p-10 shadow-sm mb-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Copyright className="h-5 w-5" />
                </div>
                <h2 className="font-heading text-xl font-bold text-primary">Urheberrecht</h2>
              </div>
              <p className="text-foreground/70 leading-relaxed">
                Alle Inhalte dieser Website, einschliesslich Texte, Bilder, Logos und Grafiken,
                unterliegen dem Urheberrecht. Eine Vervielfältigung, Verbreitung oder Verwendung
                in anderen elektronischen oder gedruckten Publikationen ist ohne ausdrückliche
                Zustimmung des Anbieters nicht gestattet.
              </p>
            </div>
          </ScrollReveal>

          {/* DATENSCHUTZ */}
          <ScrollReveal delay={0.3}>
            <div className="rounded-2xl border border-border bg-white p-8 md:p-10 shadow-sm mb-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <FileText className="h-5 w-5" />
                </div>
                <h2 className="font-heading text-xl font-bold text-primary">Datenschutz</h2>
              </div>
              <p className="text-foreground/70 leading-relaxed mb-5">
                Informationen zur Verarbeitung personenbezogener Daten finden Sie in unserer
                Datenschutzerklärung.
              </p>
              <Link
                to="/datenschutz"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-accent transition-colors"
              >
                Zur Datenschutzerklärung <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </section>

      <CTASection />
    </>
  );
}
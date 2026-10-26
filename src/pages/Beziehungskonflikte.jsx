import React from "react";
import { HeartHandshake, Users, MessageSquare, ListChecks } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import ServiceMoneyPages from "@/components/ServiceMoneyPages";
import LinkHub from "@/components/LinkHub";
import Seo from "@/components/Seo";
import { Star, BookOpen, HelpCircle } from "lucide-react";
import { PAGE_META, localBusinessSchema, serviceSchema, faqPageSchema } from "@/data/seoConfig";
import { getServiceBySlug } from "@/data/services";

const GRUENDE = [
  "Mangelnde Gesprächsbereitschaft",
  "Verhärtete Strukturen",
  "Autoritäres Gefälle",
  "Eigene Glaubenssätze",
  "Gefangen in einer zirkulären Transaktion",
];

export default function Beziehungskonflikte() {
  return (
    <>
      <Seo {...PAGE_META["/beziehungskonflikte"]} schema={[localBusinessSchema(), serviceSchema(getServiceBySlug("beziehungskonflikte")), faqPageSchema(getServiceBySlug("beziehungskonflikte").faq)]} />
      <PageHeader
        eyebrow="Beziehungskonflikte"
        title="Vielfältige Konflikte, gemeinsame Schwierigkeit."
        subtitle="Eine gewisse Blindheit und ein Festgefahren sein hindert uns oft, unsere Beziehungskonflikte sofort, direkt und unkompliziert zu lösen. Hilfe von aussen kann schnell Besserung bewirken."
        breadcrumbs={[{ label: "Start", to: "/" }, { label: "Dienstleistungen", to: "/dienstleistungen" }, { label: "Beziehungskonflikte" }]}
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <ScrollReveal>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Konfliktarten</span>
              <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold text-primary leading-tight">
                Wo Konflikte entstehen
              </h2>
              <p className="mt-5 text-foreground/70 leading-relaxed">
                Beziehungskonflikte sind am häufigsten zwischen Eltern und Kindern, Lehrern und
                Schülern, Vorgesetzten und Untergebenen, unter Paaren oder unter Freunden. Oft ist
                man völlig blind für Lösungsmöglichkeiten. Ein Coach mit Distanz und Lebenserfahrung
                ist dann die Wahl der Stunde.
              </p>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-white p-5 text-center shadow-sm">
                  <Users className="h-7 w-7 text-accent mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground/80">Eltern & Kinder</p>
                </div>
                <div className="rounded-xl border border-border bg-white p-5 text-center shadow-sm">
                  <HeartHandshake className="h-7 w-7 text-accent mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground/80">Paare & Freunde</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="rounded-2xl border border-border bg-white p-7 shadow-sm">
                <h3 className="font-heading text-xl font-bold text-primary mb-5 flex items-center gap-2">
                  <ListChecks className="h-5 w-5 text-accent" /> Die Gründe
                </h3>
                <p className="text-sm text-foreground/70 mb-5">können vielfältig sein:</p>
                <ul className="space-y-3">
                  {GRUENDE.map((g) => (
                    <li key={g} className="flex items-start gap-3 text-foreground/80">
                      <MessageSquare className="h-4 w-4 text-accent shrink-0 mt-1" />
                      <span>
                        {g}
                        {g === "Gefangen in einer zirkulären Transaktion" && (
                          <span className="block mt-1 text-xs text-foreground/55 italic leading-relaxed">
                            Eine zirkuläre Transaktion in Beziehungskonflikten beschreibt einen
                            Kreislauf, in dem sich beide Partner durch ihre Reaktionen gegenseitig
                            beeinflussen und dadurch immer wieder denselben Konflikt verstärken.
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="mt-16 rounded-2xl border border-border bg-white p-8 shadow-sm">
              <h3 className="font-heading text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-accent" /> Was ist eine zirkuläre Transaktion?
              </h3>
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                <p>
                  Eine <strong>zirkuläre Transaktion</strong> entsteht, wenn beide Seiten einer
                  Beziehung mit ihrer jeweiligen Reaktion genau das Verhalten des anderen
                  hervorrufen, das sie selbst kritisieren. Es entsteht ein geschlossener Kreislauf,
                  in dem Ursache und Wirkung nicht mehr voneinander zu trennen sind.
                </p>
                <p>
                  Ein typisches Beispiel: Ein Partner zieht sich zurück, weil er sich kritisiert
                  fühlt. Der andere empfindet das Zurückziehen als Desinteresse und kritisiert
                  deshalb mehr. Die vermehrte Kritik bewirkt noch mehr Rückzug, der Rückzug bewirkt
                  noch mehr Kritik, und so weiter. Beide sind überzeugt, nur zu reagieren, beide
                  halten den anderen für den Auslöser.
                </p>
                <p>
                  Weil sich dieser Kreislauf selbst verstärkt, ist er von innen kaum zu durchbrechen.
                  Jeder Schritt, der als Lösung gemeint ist, wird vom anderen als neuer Angriff
                  wahrgenommen. Erst eine aussen stehende Person kann den Kreis sichtbar machen und
                  gemeinsam mit beiden Beteiligten auflösen.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-16 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border-l-4 border-accent bg-secondary/40 p-8">
                <h3 className="font-heading text-xl font-bold text-primary mb-3">Lösung</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Eine Analyse muss zuerst Klarheit über Absichten, Stärken und Schwächen sowie die
                  defekten Strukturen der Beziehung bringen. Zirkuläre Transaktionen müssen
                  aufgelöst werden – ein kreativer Prozess, der oft auch humorvoll sein kann. Hilfreich
                  ist zudem die Reflexion der eigenen Kommunikation, z.B. Gewaltfreie Kommunikation.
                </p>
              </div>
              <div className="rounded-2xl border-l-4 border-primary bg-primary/5 p-8">
                <h3 className="font-heading text-xl font-bold text-primary mb-3">Ausweglose Situationen</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Dann kann die Lösung darin bestehen, sich vom Problem bzw. der Person selbst zu
                  lösen. Selbst in diesem Fall ist es sinnvoll, einen konstruktiven Weg der Trennung
                  zu finden – zum Vorteil aller Beteiligten, vor allem wenn noch Kinder im Spiel sind.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p className="mt-12 text-center text-lg font-semibold text-primary max-w-2xl mx-auto">
              Zögern Sie nicht, nehmen Sie Kontakt auf. Die Zeit ist in solchen Fällen ein schlechter Verbündeter!
            </p>
          </ScrollReveal>
        </div>
      </section>

      <ServiceMoneyPages serviceSlug="beziehungskonflikte" />

      <LinkHub
        groups={[
          {
            title: "Verwandte Dienstleistungen",
            icon: HeartHandshake,
            links: [
              { to: "/aengste", label: "Ängste & Phobien auflösen" },
              { to: "/burnout", label: "Burnout & Belastungsdepression behandeln" },
              { to: "/verhaltensmuster", label: "Verhaltensmuster & Selbstsabotage auflösen" },
              { to: "/prinzip-der-aufloesung", label: "Das Prinzip der hypnosystemischen Methode" },
            ],
          },
          {
            title: "Regionen & Bewertungen",
            icon: Star,
            links: [
              { to: "/regionen", label: "Psychologische Beratung in Ihrer Region" },
              { to: "/regionen/psychologische-beratung-thalwil", label: "Beziehungskonflikte lösen in Thalwil" },
              { to: "/regionen/psychologische-beratung-zuerich", label: "Beziehungskonflikte lösen in Zürich" },
              { to: "/regionen/psychologische-beratung-horgen", label: "Beziehungskonflikte lösen in Horgen" },
              { to: "/regionen/psychologische-beratung-adliswil", label: "Beziehungskonflikte lösen in Adliswil" },
              { to: "/regionen/psychologische-beratung-rueschlikon", label: "Beziehungskonflikte lösen in Rüschlikon" },
              { to: "/regionen/psychologische-beratung-waedenswil", label: "Beziehungskonflikte lösen in Wädenswil" },
              { to: "/bewertungen", label: "Google Bewertungen (5,0 Sterne)" },
            ],
          },
          {
            title: "Informationen",
            icon: BookOpen,
            links: [
              { to: "/ueber-mich", label: "Über Leo Hackl – 30 Jahre Erfahrung" },
              { to: "/blog", label: "Blog – Ratgeber & Artikel" },
              { to: "/faq", label: "Häufige Fragen zur psychologischen Beratung" },
              { to: "/kontakt", label: "Kontakt & Terminvereinbarung" },
            ],
          },
        ]}
      />

      <CTASection />
    </>
  );
}
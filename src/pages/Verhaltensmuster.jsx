import React from "react";
import { Brain, Repeat, Lightbulb, Sparkles } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import ServiceMoneyPages from "@/components/ServiceMoneyPages";
import LinkHub from "@/components/LinkHub";
import Seo from "@/components/Seo";
import { ShieldCheck, Flame, HeartHandshake, Star, BookOpen, HelpCircle } from "lucide-react";
import { PAGE_META, localBusinessSchema, serviceSchema, faqPageSchema } from "@/data/seoConfig";
import { getServiceBySlug } from "@/data/services";

const MUSTER = [
  "Es allen recht machen, aber nie Wertschätzung bekommen",
  "Immer wieder dieselben toxischen Partner anziehen",
  "Nicht aufhören können zu essen – trotz Diätversuchen",
  "Geldprobleme, die sich monatlich wiederholen",
  "Unglücklich im Job, aber ohne Ausweg",
];

export default function Verhaltensmuster() {
  return (
    <>
      <Seo {...PAGE_META["/verhaltensmuster"]} schema={[localBusinessSchema(), serviceSchema(getServiceBySlug("verhaltensmuster")), faqPageSchema(getServiceBySlug("verhaltensmuster").faq)]} />
      <PageHeader
        eyebrow="Verhaltensmuster · Selbstsabotage"
        title="Selbstsabotage erkennen und auflösen – nachhaltig und wirksam."
        subtitle="Immer wieder in dieselben Fallen tappen? Das sind unbewusste Verhaltensmuster – auch bekannt als Glaubenssätze oder Selbstsabotageprogramme. Sie steuern uns automatisch und lösen Handlungen oder Gefühle aus, die oft schädlich sind."
        breadcrumbs={[{ label: "Start", to: "/" }, { label: "Dienstleistungen", to: "/dienstleistungen" }, { label: "Verhaltensmuster" }]}
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <ScrollReveal>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Typische Muster</span>
              <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold text-primary leading-tight">
                Erkennen Sie Ihr Muster?
              </h2>
              <p className="mt-5 text-foreground/70 leading-relaxed">
                Diese Muster entstehen meist in der frühen Kindheit. Ein einziges Erlebnis kann sich
                als „Wahrheit" im Unterbewusstsein verankern – und wirkt fortan wie ein Autopilot.
              </p>
              <ul className="mt-7 space-y-3">
                {MUSTER.map((m) => (
                  <li key={m} className="flex items-start gap-3 text-foreground/80">
                    <Repeat className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    {m}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="space-y-6">
                <div className="rounded-2xl border border-border bg-white p-7 shadow-sm">
                  <Lightbulb className="h-9 w-9 text-accent mb-4" />
                  <h3 className="font-heading text-xl font-bold text-primary mb-2">Warum viele Methoden scheitern</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Wissen hilft oft nicht. Bücher, Kurse oder Seminare geben kurzfristig Hoffnung –
                    aber lösen das Muster nicht. Veränderung geschieht nur durch <strong>Erleben</strong>,
                    nicht durch Verstehen.
                  </p>
                </div>
                <div className="rounded-2xl border border-primary/20 bg-primary/5 p-7">
                  <Sparkles className="h-9 w-9 text-primary mb-4" />
                  <h3 className="font-heading text-xl font-bold text-primary mb-2">Die Lösung: Hypnosystemischer Ansatz</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Mit Hypnose und systemischem Verständnis lassen sich tiefsitzende
                    Verhaltensmuster <strong>in einer intensiven Sitzung</strong> dauerhaft auflösen.
                    Nach der Veränderung handeln Sie situationsgerecht – ohne inneren Kampf.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="mt-16 rounded-2xl border-l-4 border-accent bg-secondary/40 p-8 md:p-10">
              <Brain className="h-10 w-10 text-accent mb-4" />
              <h3 className="font-heading text-2xl font-bold text-primary">Entstehung</h3>
              <p className="mt-4 text-foreground/70 leading-relaxed max-w-3xl">
                Wir erlernen unser Verhalten in unseren ersten Lebensjahren. Da entsteht unser
                Weltbild, wir „wissen" bald, was „gut" und „schlecht", „richtig" oder „falsch" ist,
                wie die Welt „funktioniert". Dies erlernt Mensch ab dem Moment seiner Zeugung und es
                ist im Alter von vier bis sieben Jahren mehr oder weniger abgeschlossen. Es gibt
                Zustände und Ereignisse, die uns prägen – man spricht von Prägung, englisch „Imprint".
                Diese begründen das Verhaltensmuster.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <figure className="mt-12 rounded-2xl border border-border bg-white p-8 md:p-10 shadow-sm">
              <blockquote className="text-lg text-foreground/80 italic leading-relaxed">
                „Widrige Umstände zwangen mich dazu, mein Leben privat wie auch beruflich von Grund
                auf zu verändern. Dank der Unterstützung von Leo Hackl stehe ich heute wieder mit
                beiden Beinen sicher auf dem Boden, habe meine Firma erfolgreich aufgebaut und auch
                im Privaten habe ich das grosse Glück wiedergefunden. Ich kann Leo Hackl jedem nur
                empfehlen."
              </blockquote>
              <figcaption className="mt-5 font-semibold text-primary">R.B. (51), Thalwil</figcaption>
            </figure>
          </ScrollReveal>
        </div>
      </section>

      <ServiceMoneyPages serviceSlug="verhaltensmuster" />

      <LinkHub
        groups={[
          {
            title: "Verwandte Dienstleistungen",
            icon: ShieldCheck,
            links: [
              { to: "/aengste", label: "Ängste & Phobien auflösen" },
              { to: "/burnout", label: "Burnout & Belastungsdepression behandeln" },
              { to: "/beziehungskonflikte", label: "Beziehungskonflikte lösen" },
              { to: "/prinzip-der-aufloesung", label: "Das Prinzip der hypnosystemischen Methode" },
            ],
          },
          {
            title: "Regionen & Bewertungen",
            icon: Star,
            links: [
              { to: "/regionen", label: "Psychologische Beratung in Ihrer Region" },
              { to: "/regionen/psychologische-beratung-zuerich", label: "Verhaltensmuster auflösen in Zürich" },
              { to: "/regionen/psychologische-beratung-thalwil", label: "Verhaltensmuster auflösen in Thalwil" },
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
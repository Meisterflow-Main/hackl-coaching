import React from "react";
import { Link } from "react-router-dom";
import {
  Brain,
  Sparkles,
  ShieldCheck,
  Eye,
  Clock,
  HeartHandshake,
  ArrowRight,
  BookOpen,
  MapPin,
  HelpCircle,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import LinkHub from "@/components/LinkHub";
import Seo from "@/components/Seo";
import {
  localBusinessSchema,
  faqPageSchema,
  serviceSchema,
} from "@/data/seoConfig";

const HYPNOSE_FAQ = [
  {
    question: "Ist Hypnose gefährlich?",
    answer:
      "Nein. Hypnose ist ein natürlicher Bewusstseinszustand, den jeder Mensch mehrmals täglich erlebt – etwa beim Lesen eines spannenden Buches oder kurz vor dem Einschlafen. Sie verlieren nie die Kontrolle und können jederzeit selbst entscheiden, was Sie tun oder sagen. Niemand kann Sie zu etwas bringen, das Sie nicht wollen.",
  },
  {
    question: "Kann man gegen seinen Willen hypnotisiert werden?",
    answer:
      "Nein. Hypnose setzt immer Ihre Mitwirkung voraus. Sie lassen sich hypnotisieren, weil Sie es wollen – nicht weil der Hypnotherapeut es will. Wenn Sie sich innerlich wehren, funktioniert es nicht. Die Hypnose ist ein gemeinsamer Prozess zwischen Ihnen und dem Therapeuten.",
  },
  {
    question: "Schlafe ich während der Hypnose ein?",
    answer:
      "Nein. Hypnose ist kein Schlaf. Sie sind in einem entspannten, fokussierten Wachzustand – ähnlich wie bei tiefer Meditation. Sie hören alles, nehmen Ihre Umgebung wahr und erinnern sich nach der Sitzung an alles Wichtige. Manche Menschen fühlen sich danach erfrischt, als hätten sie geruht.",
  },
  {
    question: "Wie viele Sitzungen brauche ich?",
    answer:
      "Das hängt vom Anliegen ab. Bei spezifischen Ängsten oder einzelnen Verhaltensmustern genügen oft 1 bis 3 intensive Sitzungen. Bei tiefer sitzenden Themen oder mehreren Mustern können mehr Sitzungen nötig sein. Im kostenlosen Erstgespräch schätzt Leo Hackl den voraussichtlichen Aufwand realistisch ein.",
  },
  {
    question: "Was passiert in einer Hypnosesitzung?",
    answer:
      "Nach einem Vorgespräch, in dem Ihr Anliegen besprochen wird, leitet Leo Hackl Sie in einen tiefen Entspannungszustand. In diesem Zustand ist Ihr Unterbewusstsein besonders zugänglich. Mit systemischen Interventionen und gezielten Suggestionen wird das zugrundeliegende Muster umstrukturiert. Sie sind dabei jederzeit ansprechbar und in Kontrolle.",
  },
  {
    question: "Worin unterscheidet sich die hypnosystemische Methode von klassischer Hypnose?",
    answer:
      "Klassische Hypnose arbeitet oft mit Suggestionen gegen ein Symptom. Die hypnosystemische Methode von Leo Hackl geht tiefer: Sie löst das Ursprungsmuster an der Wurzel auf – nicht das Symptom, sondern die neuronale Struktur, die es erzeugt. Dadurch wird die Veränderung dauerhaft, weil das Muster nicht mehr neu aktiviert wird.",
  },
];

export default function Hypnose() {
  const faqSchema = faqPageSchema(HYPNOSE_FAQ);
  const hypnoseService = {
    title: "Hypnose in Thalwil",
    description:
      "Hypnosystemische Hypnose bei Leo Hackl in Thalwil. Natürliche, sanfte und dauerhafte Auflösung von Ängsten, Verhaltensmustern und Blockaden. Über 4'000 gelöste Fälle in 30 Jahren Praxis.",
    link: "/hypnose-thalwil",
  };

  return (
    <>
      <Seo
        title="Hypnose in Thalwil | Leo Hackl Coaching – Hypnosystemische Methode"
        description="Hypnose in Thalwil bei Leo Hackl: sanfte, natürliche und dauerhafte Auflösung von Ängsten, Phobien, Verhaltensmustern und Blockaden. Über 4'000 gelöste Fälle in 30 Jahren. Jetzt Erstgespräch anfragen."
        canonicalPath="/hypnose-thalwil"
        schema={[localBusinessSchema(), serviceSchema(hypnoseService), faqSchema]}
      />
      <PageHeader
        eyebrow="Hypnose · Hypnosystemische Methode"
        title="Hypnose in Thalwil – natürlich, sanft, dauerhaft"
        subtitle="Hypnose ist kein Zauber, sondern eine natürliche Fähigkeit Ihres Gehirns. Leo Hackl verbindet sie mit systemischer Therapie und Erkenntnissen der Hirnforschung – für Veränderungen, die von innen kommen und bleiben."
        breadcrumbs={[
          { label: "Start", to: "/" },
          { label: "Hypnose & Methode", to: "/hypnose-thalwil" },
        ]}
      />

      {/* Was ist Hypnose */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <ScrollReveal>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Was Hypnose wirklich ist
              </span>
              <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold text-primary leading-tight">
                Ein natürlicher Zustand, den Sie schon kennen
              </h2>
              <p className="mt-5 text-foreground/70 leading-relaxed">
                Hypnose ist kein mysteriöser Zustand und keine Fremdsteuerung. Sie ist ein
                natürlich verändertes Bewusstsein, in dem Ihre Aufmerksamkeit nach innen
                gerichtet ist und Ihr Unterbewusstsein besonders zugänglich wird. Jeder
                Mensch erlebt diesen Zustand mehrmals täglich – beim Tagträumen, beim
                vertieften Lesen oder kurz vor dem Einschlafen.
              </p>
              <p className="mt-4 text-foreground/70 leading-relaxed">
                In der therapeutischen Hypnose wird dieser Zustand gezielt genutzt: In tiefer
                Entspannung können neuronale Muster, die Ängste, Verhaltensmuster oder
                Blockaden erzeugen, umstrukturiert werden. Das Gehirn nutzt seine natürliche
                Plastizität – die Fähigkeit, sich neu zu verdrahten.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="space-y-6">
                <div className="rounded-2xl border border-border bg-white p-7 shadow-sm">
                  <Eye className="h-9 w-9 text-accent mb-4" />
                  <h3 className="font-heading text-xl font-bold text-primary mb-2">
                    Sie behalten die Kontrolle
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    In der Hypnose schlafen Sie nicht ein und verlieren sich nicht. Sie hören
                    alles, nehmen Ihre Umgebung wahr und können jederzeit selbst entscheiden.
                    Niemand kann Sie zu etwas bringen, das Sie nicht wollen.
                  </p>
                </div>
                <div className="rounded-2xl border border-primary/20 bg-primary/5 p-7">
                  <Brain className="h-9 w-9 text-primary mb-4" />
                  <h3 className="font-heading text-xl font-bold text-primary mb-2">
                    Hirnplastizität nutzen
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    In der hypnotischen Entspannung ist das Gehirn besonders empfänglich für
                    neuronale Umstrukturierung. Fehlverdrahtete Netzwerke – die Grundlage von
                    Ängsten und Mustern – können korrigiert werden.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Wie Leo Hypnose einsetzt */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Die hypnosystemische Methode
              </span>
              <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold text-primary leading-tight">
                Wie Leo Hackl Hypnose einsetzt
              </h2>
              <p className="mt-5 text-foreground/70 leading-relaxed">
                Leo Hackl verbindet Hypnose nicht mit Suggestionen gegen ein Symptom, sondern
                mit systemischem Verständnis und Hirnforschung. Die Hypnose öffnet die Tür zum
                Unterbewusstsein – die systemische Intervention löst das Muster an seiner
                Wurzel auf.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <ScrollReveal>
              <div className="h-full rounded-2xl border border-border bg-white p-7 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent font-heading font-bold text-lg mb-4">
                  1
                </div>
                <h3 className="font-heading text-lg font-bold text-primary mb-2">
                  Verstehen
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Im Erstgespräch wird Ihr Anliegen verstanden: Welches Muster, welche Angst
                  oder Blockade belastet Sie? Leo Hackl analysiert die Ursache, nicht nur das
                  Symptom.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="h-full rounded-2xl border border-border bg-white p-7 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent font-heading font-bold text-lg mb-4">
                  2
                </div>
                <h3 className="font-heading text-lg font-bold text-primary mb-2">
                  Lösen
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  In der hypnotischen Entspannung wird das Ursprungsmuster zugänglich und kann
                  systemisch umstrukturiert werden. Das neuronale Netzwerk, das das Problem
                  erzeugt, wird korrigiert.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="h-full rounded-2xl border border-border bg-white p-7 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent font-heading font-bold text-lg mb-4">
                  3
                </div>
                <h3 className="font-heading text-lg font-bold text-primary mb-2">
                  Integrieren
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Nach der Auflösung handeln Sie situationsgerecht – ohne inneren Kampf. Die
                  Veränderung ist dauerhaft, weil das Muster nicht mehr neu aktiviert wird.
                  Oft genügen 1 bis 3 intensive Sitzungen.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="mt-12 rounded-2xl border-l-4 border-accent bg-white p-8 md:p-10 shadow-sm">
              <Sparkles className="h-10 w-10 text-accent mb-4" />
              <h3 className="font-heading text-2xl font-bold text-primary">
                Mehr als Suggestion – Auflösung an der Wurzel
              </h3>
              <p className="mt-4 text-foreground/70 leading-relaxed max-w-3xl">
                Klassische Hypnose arbeitet oft mit Suggestionen, die ein Symptom unterdrücken.
                Die hypnosystemische Methode geht tiefer: Sie löst das Ursprungsmuster auf, das
                das Symptom erzeugt. Das ist der Unterschied zwischen einer vorübergehenden
                Linderung und einer dauerhaften Lösung. In über 4'000 gelösten Fällen hat sich
                dieser Ansatz über 30 Jahre bewährt.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Wann Hypnose hilft */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center max-w-2xl mx-auto">
              Bei welchen Anliegen Hypnose hilft
            </h2>
            <p className="mt-4 text-foreground/70 leading-relaxed text-center max-w-2xl mx-auto">
              Die hypnosystemische Methode ist wirksam bei einer breiten Palette von Anliegen –
              immer mit dem Ziel einer dauerhaften Auflösung, nicht nur einer Symptomlinderung.
            </p>
          </ScrollReveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Ängste & Phobien",
                desc: "Flugangst, Prüfungsangst, Panikattacken, Platzangst und viele mehr – in 1 bis 3 Sitzungen dauerhaft auflösen.",
                to: "/aengste",
              },
              {
                icon: Brain,
                title: "Verhaltensmuster",
                desc: "Selbstsabotage, emotionales Essen, Prokrastination – Muster an der Wurzel auflösen statt mit Willenskraft kämpfen.",
                to: "/verhaltensmuster",
              },
              {
                icon: HeartHandshake,
                title: "Beziehungskonflikte",
                desc: "Sich wiederholende Konfliktmuster in Partnerschaft, Familie und Beruf – einzeln oder als Paar auflösen.",
                to: "/beziehungskonflikte",
              },
              {
                icon: Clock,
                title: "Burnout & Belastungsdepression",
                desc: "Ursachen finden, belastende Muster lösen und neue innere Stabilität aufbauen. Authentische Lösungen statt blosser Auszeit.",
                to: "/burnout",
              },
              {
                icon: Sparkles,
                title: "Rauchen aufhören",
                desc: "Das Muster hinter dem Rauchen auflösen – nicht mit Ersatzbefriedigung, sondern an der Wurzel der Gewohnheit.",
                to: "/verhaltensmuster",
              },
              {
                icon: Eye,
                title: "Selbstwert & Blockaden",
                desc: "Innere Blockaden, die Sie davon abhalten, das zu leben, was Sie wirklich wollen – auflösen und frei werden.",
                to: "/verhaltensmuster",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.05}>
                <Link
                  to={item.to}
                  className="group block h-full rounded-2xl border border-border bg-white p-7 shadow-sm hover:shadow-md hover:border-primary/20 transition-all"
                >
                  <item.icon className="h-9 w-9 text-accent mb-4" />
                  <h3 className="font-heading text-lg font-bold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">{item.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent group-hover:gap-2 transition-all">
                    Mehr erfahren <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <HelpCircle className="h-10 w-10 text-accent mx-auto mb-4" />
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">
                Häufige Fragen zur Hypnose
              </h2>
              <p className="mt-4 text-foreground/70 leading-relaxed">
                Hypnose ist von vielen Mythen umgeben. Hier finden Sie ehrliche, klare
                Antworten auf die Fragen, die am häufigsten gestellt werden.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 space-y-4">
            {HYPNOSE_FAQ.map((item, i) => (
              <ScrollReveal key={item.question} delay={i * 0.05}>
                <details className="group rounded-2xl border border-border bg-white p-6 shadow-sm">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <h3 className="font-heading text-lg font-bold text-primary pr-4">
                      {item.question}
                    </h3>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent transition-transform group-open:rotate-45">
                      <span className="text-xl leading-none">+</span>
                    </span>
                  </summary>
                  <p className="mt-4 text-foreground/70 leading-relaxed">{item.answer}</p>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <LinkHub
        groups={[
          {
            title: "Dienstleistungen",
            icon: ShieldCheck,
            links: [
              { to: "/aengste", label: "Ängste & Phobien auflösen" },
              { to: "/verhaltensmuster", label: "Verhaltensmuster & Selbstsabotage" },
              { to: "/burnout", label: "Burnout & Belastungsdepression" },
              { to: "/beziehungskonflikte", label: "Beziehungskonflikte lösen" },
            ],
          },
          {
            title: "Methode & Regionen",
            icon: MapPin,
            links: [
              { to: "/prinzip-der-aufloesung", label: "Das Prinzip der Auflösung" },
              { to: "/regionen", label: "Psychologische Beratung in Ihrer Region" },
              { to: "/regionen/psychologische-beratung-thalwil", label: "Psychologische Beratung Thalwil" },
              { to: "/regionen/psychologische-beratung-zuerich", label: "Psychologische Beratung Zürich" },
            ],
          },
          {
            title: "Informationen",
            icon: BookOpen,
            links: [
              { to: "/ueber-mich", label: "Über Leo Hackl – 30 Jahre Erfahrung" },
              { to: "/erfahrungsberichte", label: "Erfahrungsberichte von Klienten" },
              { to: "/bewertungen", label: "Google Bewertungen (5,0 Sterne)" },
              { to: "/kontakt", label: "Kontakt & Terminvereinbarung" },
            ],
          },
        ]}
      />

      <CTASection />
    </>
  );
}
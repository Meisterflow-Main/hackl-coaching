import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import LinkHub from "@/components/LinkHub";
import Seo from "@/components/Seo";
import { MapPin, Star, LayoutGrid } from "lucide-react";
import { PAGE_META, faqPageSchema, localBusinessSchema } from "@/data/seoConfig";

const FAQ_ITEMS = [
  {
    category: "Allgemein",
    questions: [
      {
        question: "Was ist psychologische Beratung bei Leo Hackl?",
        answer:
          "Psychologische Beratung bei Leo Hackl ist eine hypnosystemische Methode, die Ängste, Phobien, destruktive Verhaltensmuster und Burnout an der Wurzel auflöst. Sie kombiniert jüngste Hirnforschung mit 30 Jahren praktischer Erfahrung. Das Ziel ist dauerhafte Veränderung, nicht Symptombehandlung.",
      },
      {
        question: "Wie unterscheidet sich die Methode von klassischer Therapie?",
        answer:
          "Die Methode arbeitet mit der natürlichen Neuroplastizität Ihres Gehirns. Statt über Jahre hinweg Symptome zu besprechen, lösen wir das zugrundeliegende Muster oft in ein bis drei Sitzungen auf. Ohne Medikamente, ohne Konfrontationstherapie, ohne Schmerz.",
      },
      {
        question: "Welche Anliegen kann ich ansprechen?",
        answer:
          "Ängste und Phobien (Flugangst, Prüfungsangst, Panikattacken, Platzangst), destruktive Verhaltensmuster (Prokrastination, emotionales Essen, Selbstsabotage), Burnout und Belastungsdepression, Beziehungskonflikte, Schlafstörungen und Standortbestimmung.",
      },
    ],
  },
  {
    category: "Ablauf & Kosten",
    questions: [
      {
        question: "Was kostet eine Sitzung?",
        answer:
          "Die Kosten richten sich nach Aufwand und Anzahl Sitzungen. In einem kostenlosen Erstgespräch klären wir Ihren Bedarf und erstellen eine transparente Offerte. Die meisten Klienten benötigen zwischen einer und fünf Sitzungen.",
      },
      {
        question: "Wie lange dauert eine Sitzung?",
        answer:
          "Eine Sitzung dauert in der Regel zwischen 60 und 90 Minuten. Die genaue Länge hängt vom Thema und Ihrem Bedarf ab. Wir nehmen uns die Zeit, die notwendig ist.",
      },
      {
        question: "Wie viele Sitzungen brauche ich?",
        answer:
          "Viele Ängste und Phobien lassen sich in ein bis drei Sitzungen auflösen. Burnout oder tiefere Verhaltensmuster können mehrere Sitzungen erfordern. Wir besprechen den voraussichtlichen Aufwand offen im Erstgespräch.",
      },
      {
        question: "Tut die Behandlung weh?",
        answer:
          "Nein. Die Methode arbeitet sanft und respektvoll mit Ihren inneren Bildern und Mustern. Sie bleiben jederzeit Herr des Geschehens. Die meisten Klienten empfinden die Sitzungen als befreiend und angenehm.",
      },
    ],
  },
  {
    category: "Praktisches",
    questions: [
      {
        question: "Wo befindet sich die Praxis?",
        answer:
          "Die Praxis befindet sich an der Zehntenstrasse 17 in 8800 Thalwil, wenige Gehminuten vom Bahnhof Thalwil entfernt. Von Zürich erreichen Sie uns in 15 Minuten mit der S-Bahn.",
      },
      {
        question: "Bieten Sie Online-Beratung an?",
        answer:
          "Ja, auf Wunsch führen wir Sitzungen per Video durch. Das ist praktisch, wenn Sie ausserhalb von Thalwil wohnen oder beruflich viel unterwegs sind. Die Wirksamkeit ist vergleichbar mit Präsenzsitzungen.",
      },
      {
        question: "Ist die Beratung vertraulich?",
        answer:
          "Absolut. Alle Inhalte bleiben strikt vertraulich. Die Praxis in Thalwil liegt ausserhalb der Zürcher Innenstadt, was maximale Diskretion bietet.",
      },
      {
        question: "Wie vereinbare ich einen Termin?",
        answer:
          "Rufen Sie uns an unter 079 433 50 72 oder nutzen Sie das Kontaktformular auf unserer Website. Wir vereinbaren ein kostenloses Erstgespräch und besprechen Ihr Anliegen unverbindlich.",
      },
    ],
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState("0-0");
  const allFaqItems = FAQ_ITEMS.flatMap((cat) => cat.questions);

  return (
    <>
      <Seo {...PAGE_META["/faq"]} schema={[localBusinessSchema(), faqPageSchema(allFaqItems)]} />
      <PageHeader
        eyebrow="Häufige Fragen"
        title="FAQ – Antworten auf Ihre Fragen"
        subtitle="Alles Wichtige zur psychologischen Beratung bei Leo Hackl: Ablauf, Kosten, Dauer, Vertraulichkeit und praktische Fragen."
        breadcrumbs={[
          { label: "Start", to: "/" },
          { label: "FAQ", to: "/faq" },
        ]}
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          {FAQ_ITEMS.map((cat, catIdx) => (
            <div key={cat.category} className="mb-12">
              <ScrollReveal>
                <h2 className="font-heading text-2xl font-bold text-primary mb-5">
                  {cat.category}
                </h2>
              </ScrollReveal>
              <div className="space-y-3">
                {cat.questions.map((item, qIdx) => {
                  const key = `${catIdx}-${qIdx}`;
                  const isOpen = openIndex === key;
                  return (
                    <ScrollReveal key={key} delay={qIdx * 0.03}>
                      <div className="rounded-2xl border border-border bg-white overflow-hidden">
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : key)}
                          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                        >
                          <span className="font-heading font-semibold text-primary">{item.question}</span>
                          <ChevronDown
                            className={`h-5 w-5 shrink-0 text-accent transition-transform ${isOpen ? "rotate-180" : ""}`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-5 text-foreground/70 leading-relaxed">
                            {item.answer}
                          </div>
                        )}
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <LinkHub
        groups={[
          {
            title: "Dienstleistungen",
            icon: LayoutGrid,
            links: [
              { to: "/dienstleistungen", label: "Alle Dienstleistungen im Überblick" },
              { to: "/aengste", label: "Ängste & Phobien auflösen" },
              { to: "/verhaltensmuster", label: "Verhaltensmuster & Selbstsabotage" },
              { to: "/burnout", label: "Burnout & Belastungsdepression" },
              { to: "/beziehungskonflikte", label: "Beziehungskonflikte lösen" },
            ],
          },
          {
            title: "Regionen",
            icon: MapPin,
            links: [
              { to: "/regionen", label: "Psychologische Beratung in Ihrer Region" },
              { to: "/regionen/psychologische-beratung-thalwil", label: "Psychologische Beratung Thalwil" },
              { to: "/regionen/psychologische-beratung-zuerich", label: "Psychologische Beratung Zürich" },
              { to: "/regionen/psychologische-beratung-horgen", label: "Psychologische Beratung Horgen" },
            ],
          },
          {
            title: "Weiteres",
            icon: Star,
            links: [
              { to: "/bewertungen", label: "Google Bewertungen (5,0 Sterne)" },
              { to: "/ueber-mich", label: "Über Leo Hackl" },
              { to: "/blog", label: "Blog – Ratgeber & Artikel" },
              { to: "/kontakt", label: "Kontakt & Terminvereinbarung" },
            ],
          },
        ]}
      />

      <CTASection />
    </>
  );
}
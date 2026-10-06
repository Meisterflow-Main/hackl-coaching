import React from "react";
import { Quote, Star } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";

const REPORTS = [
  {
    tag: "Flugangst",
    text: `Dank der paradoxen Intervention, welche mir Herr Hackl erklärte, konnte ich nach Jahren Flugangst endlich wieder den Flug geniessen. Freue mich bereits auf zukünftige Flüge.`,
    author: "Anonym",
  },
  {
    tag: "Verhaltensmuster",
    text: `Meine Sucht, mich permanent voll zu stopfen und nicht zu wissen, wann ich das nächste Mal essen kann, trieb mich zeitweise fast in den Wahnsinn! Nach der Hypnose mit Leo war ich ganz aufmerksam und beobachtete mein Verhalten. Ich bemerkte, dass dieser Impuls in mir ausblieb. Ich fühlte mich endlich wieder unter Kontrolle. Das gedankenlose in mich Reinstopfen hatte endlich ein Ende.`,
    author: "S.B. (w, 38), Zug",
  },
  {
    tag: "Panikattacken",
    text: `Das Beste, was mir passieren konnte, war, Herr Hackl aufzusuchen. Nach langer Zeit mit starken Panik- und Angstattacken konnten wir nach wenigen Sitzungen alles verändern. Einfach Lebensqualität pur. Ich würde es nicht glauben, wenn ich nicht selber dabei gewesen wäre.`,
    author: "N.B. (w, 44), Wohlen",
  },
  {
    tag: "Hypnose / Verhaltensmuster",
    text: `Das Coaching von Leo Hackl war erstaunlich, wie es mein Leben verändert hat. Die Arbeit mit Leo Hackl's spezieller Art der hypnotischen Regressionstherapie hat mich sehr verändert und auch meine Beziehungen zu Freunden und meiner Mutter. Ich fühle mich ganzheitlich und viel zufriedener mit mir selbst. Ich bin nicht mehr unbewusst/bewusst im Stress.`,
    author: "A.M. (w, 53), Aarau",
  },
  {
    tag: "Autofahrangst",
    text: `Ich hatte seit mehreren Monaten Panikattacken und konnte nicht mal mehr einkaufen, autofahren, Restaurants besuchen. Nach dem zweiten Mal konnte ich wieder einkaufen, autofahren und in Restaurants essen. Nur die Autobahn ging nicht – diese Tunnel waren meine Angst. Beim dritten Mal fuhr ich durch. Ich kann Leo absolut weiterempfehlen.`,
    author: "S.D. (w, 44), Obfelden",
  },
  {
    tag: "Flugangst",
    text: `Es ist erstaunlich, wie sich meine Flugangst in Luft aufgelöst hat. Bemerkenswert vor allem, wie simpel und effizient dies geschah! Sehr eindrücklich.`,
    author: "A.B. (m, 34), Zürich",
  },
  {
    tag: "Flugangst",
    text: `Für mich war's vorher undenkbar ins Flugzeug zu steigen. Herr Hackl leitete mich an, was ich tun soll. Und tatsächlich hab ich's geschafft, ich spazierte seelenruhig ins Flugzeug. Wenn ich jetzt daran denke, bald 4 Stunden im Flugzeug zu sitzen, ist das für mich kein Problem mehr.`,
    author: "S.R. (w, 54), Uster",
  },
  {
    tag: "Ängste",
    text: `Tunnel, lange Waldwege, Zug, Bus, neue Orte, Lift, Flugzeug – es war sehr schlimm. Nach 2 Sitzungen gehe ich in Lift, Zug, Bus, Tunnel ohne Probleme. Sie haben mein Leben & Familie gerettet.`,
    author: "C.S. (w, 40), Fehraltorf",
  },
  {
    tag: "Hypnose / Verhaltensmuster",
    text: `Ich war eine tief verletzte Frau mit Ängsten. Dank deiner Arbeit bin ich zu einer blühenden, strahlenden Frau gewachsen. Komplimente wie «Aus dir ist was geworden» oder «Du hast so eine liebevolle Ausstrahlung» bestätigen mir das immer wieder. Vielen Dank Leo für deine Geduld und deine wundervolle, transformative und heilende Arbeit.`,
    author: "M.W. (w, 40), Thalwil",
  },
  {
    tag: "Verhaltensmuster, Hypnose",
    text: `Nach zahlreichen Therapiestunden an anderen Orten hatte ich noch immer das Gefühl, nicht verstanden zu werden. Dank deiner Hypnose veränderte sich mein Leben. Verhaltensmuster wurden bei mir zwar erkannt, doch nie aufgelöst. Du hast mir geholfen, genau das zu heilen, was mir mein Leben schwer machte. Heute lebe ich freier als je zuvor.`,
    author: "M.A. (w, 25), Zug",
  },
  {
    tag: "Panikattacken",
    text: `Vielen Dank für die wiedergewonnene Lebensqualität. Mit nur wenigen Sitzungen konntest du meine Ängste erfolgreich verschwinden lassen. Die Kombination deines fachlichen Wissens und deiner einfühlsamen Art hat mir das Vertrauen gegeben, loszulassen.`,
    author: "Z.Z. (w, 39), Gais",
  },
  {
    tag: "Ängste",
    text: `Dank den Instruktionen von Leo Hackl konnte ich meine Ängste besser verstehen und Schritt für Schritt überwinden. Seine Ansätze sind klar, verständlich und alltagstauglich. Ich habe seine Unterstützung als sehr hilfreich erlebt und kann ihn weiterempfehlen.`,
    author: "A.H. (m, 27), Regensdorf",
  },
];

export default function Erfahrungsberichte() {
  return (
    <>
      <PageHeader
        eyebrow="Erfahrungsberichte"
        title="Wie Klienten mich erlebt haben"
        subtitle="Lesen Sie hier einige Berichte darüber, wie Klienten die Arbeit von Leo Hackl erlebt haben."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {REPORTS.map((r, i) => (
              <ScrollReveal key={i} delay={(i % 3) * 0.05}>
                <figure className="flex h-full flex-col rounded-2xl border border-border bg-white p-7 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex items-center justify-between mb-4">
                    <Quote className="h-7 w-7 text-accent" />
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {r.tag}
                    </span>
                  </div>
                  <blockquote className="text-foreground/75 leading-relaxed text-sm flex-1">
                    {r.text}
                  </blockquote>
                  <figcaption className="mt-5 pt-5 border-t border-border">
                    <div className="flex items-center gap-1 text-accent mb-1">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="h-3.5 w-3.5 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm font-semibold text-primary">{r.author}</p>
                  </figcaption>
                </figure>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
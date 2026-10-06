import React from "react";
import { Flame, AlertTriangle, Activity, ListChecks } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";

const URSACHEN = [
  {
    t: "Fehlende Selbstbestimmung",
    d: "Man geht einem Beruf nach, der nicht dem innersten Bedürfnis entspricht. Die Tätigkeit gibt keine Befriedigung, sondern kostet über Gebühr Energie und führt ins Burnout.",
  },
  {
    t: "Notwendigkeiten bestimmen über das Tun",
    d: "Arbeit wird als Fronarbeit erlebt. Eine Veränderung scheint unmöglich oder macht Angst. Burnout ist die Reaktion.",
  },
  {
    t: "Private Beziehungen",
    d: "Oft unerkannt eine Quelle sehr hoher Belastung. Diese Energie fehlt dann in der Berufstätigkeit, die fälschlich für die Belastungsfolgen verantwortlich gemacht wird.",
  },
];

export default function Burnout() {
  return (
    <>
      <PageHeader
        eyebrow="Burnout · Belastungsdepression"
        title="Burnout ist die populäre Bezeichnung für Belastungsdepression."
        subtitle="Sie beginnt schleichend, ist aber im Endzustand der schweren Depression gleichzusetzen. Oft wird geraten, eine längere Auszeit zu nehmen – ohne an den Umständen etwas zu ändern. Das kann es nicht sein."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <ScrollReveal>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Symptome</span>
              <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold text-primary leading-tight">
                Ernst zu nehmende Warnsignale
              </h2>
              <div className="mt-6 space-y-6">
                <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                  <h3 className="font-heading font-bold text-primary flex items-center gap-2 mb-2">
                    <AlertTriangle className="h-5 w-5 text-accent" /> Erste Phase
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Chronische Müdigkeit, allgemeine Lustlosigkeit, Schlafstörungen, Ängste,
                    zunehmende Abneigung gegen die Arbeit. Diese alarmierenden Anzeichen müssen
                    unbedingt ernst genommen werden.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                  <h3 className="font-heading font-bold text-primary flex items-center gap-2 mb-2">
                    <Activity className="h-5 w-5 text-accent" /> Zweite Phase
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Körpersymptome wie Stechen, Hitze, Atem- oder Verdauungsbeschwerden. Stress,
                    Konzentrationsstörungen, Entscheidungsunfähigkeit, sozialer Rückzug,
                    Gleichgültigkeit – die finale Phase der Depression.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Drei Hauptursachen</span>
              <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold text-primary leading-tight">
                Dem Syndrom zugrunde liegend
              </h2>
              <div className="mt-6 space-y-4">
                {URSACHEN.map((u, i) => (
                  <div key={u.t} className="flex gap-4 rounded-2xl border border-border bg-secondary/30 p-6">
                    <span className="font-heading text-2xl font-bold text-accent/50">{i + 1}</span>
                    <div>
                      <h3 className="font-heading font-bold text-primary">{u.t}</h3>
                      <p className="text-sm text-foreground/70 mt-1.5 leading-relaxed">{u.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="mt-16 rounded-2xl border-l-4 border-accent bg-secondary/40 p-8 md:p-10">
              <ListChecks className="h-10 w-10 text-accent mb-4" />
              <h3 className="font-heading text-2xl font-bold text-primary">Lösungen</h3>
              <p className="mt-4 text-foreground/70 leading-relaxed max-w-3xl">
                Wege finden, authentisch sich selber zu sein – jene Tätigkeit herausfinden und tun,
                die man liebt. Entspricht die Tätigkeit nicht dem innersten Wesen, dient der Passion
                Test der Klärung. Oft wird die Umsetzung unbewusst sabotiert – durch destruktive
                Verhaltensmuster und Glaubenssätze. Diese werden hypnosystemisch aufgelöst, vorhandene
                Ressourcen gestärkt und Hindernisse bewältigt. So wird ein Rückfall ins nächste
                Burnout wirkungsvoll vermieden.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <figure className="mt-12 rounded-2xl border border-border bg-white p-8 md:p-10 shadow-sm">
              <blockquote className="text-lg text-foreground/80 italic leading-relaxed">
                „Nachdem ich vom Arzt mit der Diagnose Burnout an Sie überwiesen wurde, lernte ich
                eine ganze Palette von Verfahren kennen, die zu einer raschen Besserung meines
                Zustandes führten. Ihr Burnout-Programm eröffnete neue Handlungsspielräume. Heute
                fühle ich mich wieder voller Tatendrang und Zuversicht."
              </blockquote>
              <figcaption className="mt-5 font-semibold text-primary">M.S. (m, 40), Thalwil</figcaption>
            </figure>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
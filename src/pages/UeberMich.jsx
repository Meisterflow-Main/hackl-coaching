import React from "react";
import { Mountain, Music, BookOpen, Microscope } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import LinkHub from "@/components/LinkHub";
import Seo from "@/components/Seo";
import { ShieldCheck, Star, MapPin } from "lucide-react";
import { PAGE_META, localBusinessSchema, personSchema, organizationSchema } from "@/data/seoConfig";
import { Image } from "@/components/ui/image";

const PRIVAT = [
  { icon: Mountain, t: "Natur & Berge", d: "Geht gerne in die Berge, ist viel in der Natur." },
  { icon: Music, t: "Musik & Gesang", d: "Mitwirkung in verschiedenen Chören, Vorliebe Bach." },
  { icon: BookOpen, t: "Kultur", d: "Breites Interesse für Kultur, v.a. Musik und bildende Kunst." },
  { icon: Microscope, t: "Wissenschaft & Technik", d: "Sehr interessiert an wissenschaftlicher Forschung, technisch auf dem neuesten Stand." },
];

export default function UeberMich() {
  return (
    <>
      <Seo {...PAGE_META["/ueber-mich"]} schema={[localBusinessSchema(), personSchema(), organizationSchema()]} />
      <PageHeader
        eyebrow="Über mich"
        title="Leo Hackl"
        subtitle="Psychologische Beratung · 30 Jahre praktische Erfahrung · Über 4'000 Klienten begleitet."
        breadcrumbs={[{ label: "Start", to: "/" }, { label: "Über mich" }]}
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            <ScrollReveal className="lg:col-span-2">
              <div className="relative">
                <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl" />
                <div className="relative overflow-hidden rounded-[2rem] bg-white p-3 shadow-xl">
                  <Image
                    src="https://media.base44.com/images/public/6ac4ae046d53c41e9b937a32/c389d2b08_FriendlySeniorExecutiveHeadshot.png"
                    alt="Leo Hackl"
                    fittingType="fit"
                    className="w-full aspect-[3/2] rounded-[1.4rem]"
                  />
                </div>
              </div>
            </ScrollReveal>

            <div className="lg:col-span-3">
              <ScrollReveal>
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Meine Geschichte</span>
                <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold text-primary leading-tight">
                  Erfahrung ist wichtiger als jede Ausbildung
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div className="mt-6 space-y-4 text-foreground/70 leading-relaxed">
                  <p>
                    Die Dinge funktionieren oft nicht so, wie man es sich wünscht. Man leidet unter
                    Einschränkungen, kommt immer wieder in ähnliche schmerzliche Situationen, ist
                    unglücklich und kann es meistens nicht ändern. Ich kenne das. Ich habe das meiste
                    selbst erlebt. Ich bin Vater von fünf Kindern und hatte acht Berufe.
                  </p>
                  <p>
                    Etwas von meiner Erfahrung weiterzugeben ist meine Passion. Ich durfte bis heute
                    schon über 4'000 Betroffenen beistehen. Dabei helfen mir mein Psychologiestudium,
                    die Ausbildung in systemischer Hypnotherapie sowie 30 Jahre praktischer Erfahrung
                    in psychologischer Beratung.
                  </p>
                  <p>
                    Meine eigene Therapie vor und während des Psychologiestudiums war so lang andauernd
                    und schmerzhaft, dass ich dies meinen zukünftigen Klienten nicht antun wollte und
                    mich folglich auf Kurztherapie fokussierte.
                  </p>
                  <p>
                    Meine besondere Aufmerksamkeit galt zuerst Ängsten, die ich mit meiner Methode
                    rasch und mit Leichtigkeit auflöse. Sie besteht in einer Kombination aus jüngster
                    Hirnforschung und einer bewährten psychologischen Methode. Meine zweite Leidenschaft
                    gehört der Auflösung von destruktiven Verhaltensmustern und Selbstsabotage.
                  </p>
                  <p className="font-semibold text-primary">
                    Es gibt für mich nichts Schöneres, als jemanden glücklich meine Praxis verlassen
                    zu sehen. Dies ist meine Belohnung und meine Berufung.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <ScrollReveal>
            <div className="mt-16">
              <h3 className="font-heading text-2xl font-bold text-primary mb-6">Privat</h3>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {PRIVAT.map((p) => (
                  <div key={p.t} className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                    <p.icon className="h-8 w-8 text-accent mb-3" />
                    <h4 className="font-heading font-bold text-primary">{p.t}</h4>
                    <p className="text-sm text-foreground/70 mt-1.5">{p.d}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-foreground/60">
                Vater 5 erwachsener Kinder, davon eines leider verstorben.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <LinkHub
        groups={[
          {
            title: "Dienstleistungen",
            icon: ShieldCheck,
            links: [
              { to: "/dienstleistungen", label: "Alle Dienstleistungen im Überblick" },
              { to: "/aengste", label: "Ängste & Phobien auflösen" },
              { to: "/verhaltensmuster", label: "Verhaltensmuster & Selbstsabotage" },
              { to: "/burnout", label: "Burnout & Belastungsdepression behandeln" },
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
            title: "Bewertungen & Kontakt",
            icon: Star,
            links: [
              { to: "/bewertungen", label: "Google Bewertungen (5,0 Sterne)" },
              { to: "/erfahrungsberichte", label: "Erfahrungsberichte von Klienten" },
              { to: "/kontakt", label: "Kontakt & Terminvereinbarung" },
              { to: "/prinzip-der-aufloesung", label: "Das Prinzip der hypnosystemischen Methode" },
            ],
          },
        ]}
      />

      <CTASection />
    </>
  );
}
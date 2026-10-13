import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Brain, Clock, CheckCircle2 } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import ServiceMoneyPages from "@/components/ServiceMoneyPages";
import LinkHub from "@/components/LinkHub";
import Seo from "@/components/Seo";
import { Flame, HeartHandshake, Star, BookOpen } from "lucide-react";
import { PAGE_META, localBusinessSchema, serviceSchema, faqPageSchema } from "@/data/seoConfig";
import { getServiceBySlug } from "@/data/services";

const PHOBIAS = [
  "Flugangst", "Prüfungsangst", "Redeangst / Vortragsangst", "Auto fahren",
  "Panikattacken", "Agoraphobie", "Klaustrophobie", "Tunnelangst",
  "Hundeangst", "Angst vor Insekten", "Platzangst", "Schlafstörungen",
];

export default function Aengste() {
  return (
    <>
      <Seo {...PAGE_META["/aengste"]} schema={[localBusinessSchema(), serviceSchema(getServiceBySlug("aengste")), faqPageSchema(getServiceBySlug("aengste").faq)]} />
      <PageHeader
        eyebrow="Ängste & Phobien"
        title="Ängste loszuwerden ist erstaunlich schnell möglich."
        subtitle="Für spezifische Ängste, also Phobien, braucht es erfahrungsgemäss zwei bis drei Sitzungen innert vier bis zehn Wochen. Diese Angaben beruhen auf Erfahrung mit über 4'000 gelösten Fällen."
        breadcrumbs={[{ label: "Start", to: "/" }, { label: "Dienstleistungen", to: "/dienstleistungen" }, { label: "Ängste & Phobien" }]}
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">
            <ScrollReveal>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Zwei Kategorien</span>
              <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold text-primary leading-tight">
                Irreale Angst vs. reale Gefahr
              </h2>
              <div className="mt-6 space-y-5 text-foreground/70 leading-relaxed">
                <p>
                  Man muss zwei Kategorien von Ängsten unterscheiden. Die <strong>irreale oder
                  imaginäre Angst</strong> (die man loshaben will) und die <strong>reale Gefahr</strong>
                  – bitte nicht loswerden, sondern sich in Sicherheit bringen.
                </p>
                <p>
                  Bei äusseren Ursachen wie angstauslösende Orte, Ereignisse oder Umstände (meist
                  Phobien) dient eine Intervention aus der systemischen Therapie, kombiniert mit
                  Hirnplastizität aus der jüngeren Hirnforschung. Das Gehirn hat die Fähigkeit, sich
                  sehr schnell umzuorganisieren, neu zu verdrahten.
                </p>
                <p>
                  Bei inneren Ursachen wie Gedanken, scheinbar unbegründeten Ängsten oder
                  wiederkehrenden unangenehmen Situationen (oft generalisierte Angststörung) ist die
                  Ursache meist eine frühkindliche Prägung. Die Methode ist etwas aufwändiger, dafür
                  sehr erfolgreich.
                </p>
              </div>
              <Link
                to="/prinzip-der-aufloesung"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all"
              >
                Das Prinzip der Methode <ArrowRight className="h-4 w-4" />
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="rounded-2xl border border-border bg-white p-7 shadow-sm">
                <h3 className="font-heading text-xl font-bold text-primary mb-5">Behandelte Ängste & Phobien</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {PHOBIAS.map((p) => (
                    <div key={p} className="flex items-center gap-2.5 text-sm text-foreground/80">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                      {p}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              { icon: Clock, t: "2–3 Sitzungen", d: "Bei spezifischen Phobien innert 4–10 Wochen." },
              { icon: Brain, t: "Neuronale Plastizität", d: "Angst-Netzwerke werden neu verdrahtet – restlos und dauerhaft." },
              { icon: ShieldCheck, t: "Über 90% Erfolg", d: "Das Ziel ist in über 90% der Fälle erreicht." },
            ].map((c, i) => (
              <ScrollReveal key={c.t} delay={i * 0.1}>
                <div className="rounded-2xl border border-border bg-secondary/30 p-7">
                  <c.icon className="h-9 w-9 text-accent mb-4" />
                  <h3 className="font-heading font-bold text-primary text-lg">{c.t}</h3>
                  <p className="text-sm text-foreground/70 mt-1.5">{c.d}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ServiceMoneyPages serviceSlug="aengste" />

      <LinkHub
        groups={[
          {
            title: "Verwandte Dienstleistungen",
            icon: ShieldCheck,
            links: [
              { to: "/verhaltensmuster", label: "Verhaltensmuster & Selbstsabotage auflösen" },
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
              { to: "/regionen/psychologische-beratung-zuerich", label: "Ängste auflösen in Zürich" },
              { to: "/regionen/psychologische-beratung-thalwil", label: "Ängste auflösen in Thalwil" },
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
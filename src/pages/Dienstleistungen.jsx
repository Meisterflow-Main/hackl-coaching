import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Brain, Flame, HeartHandshake, ArrowRight, Circle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import LinkHub from "@/components/LinkHub";
import { MapPin, Star, BookOpen, User } from "lucide-react";
import { services } from "@/data/services";
import { getMoneyPagesForService, moneyPageRegions } from "@/data/moneyPages";
import Seo from "@/components/Seo";
import { PAGE_META, localBusinessSchema, itemListSchema, BASE_URL } from "@/data/seoConfig";

const iconMap = {
  ShieldCheck,
  Brain,
  Flame,
  HeartHandshake,
};

export default function Dienstleistungen() {
  const serviceItems = services.map((s) => ({ name: s.title, url: `${BASE_URL}${s.link}` }));
  return (
    <>
      <Seo {...PAGE_META["/dienstleistungen"]} schema={[localBusinessSchema(), itemListSchema(serviceItems, "Dienstleistungen von Leo Hackl Coaching")]} />
      <PageHeader
        eyebrow="Leistungen"
        title="Psychologische Beratung – meine Dienstleistungen"
        subtitle="Ängste, Verhaltensmuster, Burnout und Beziehungskonflikte nachhaltig auflösen. Mit über 30 Jahren Erfahrung und mehr als 4'000 gelösten Fällen."
        breadcrumbs={[
          { label: "Start", to: "/" },
          { label: "Dienstleistungen", to: "/dienstleistungen" },
        ]}
      />

      {/* SERVICES GRID */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <ScrollReveal>
            <div className="max-w-2xl mb-12">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Übersicht
              </span>
              <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold text-primary leading-tight">
                Alle Leistungen auf einen Blick
              </h2>
              <p className="mt-4 text-lg text-foreground/70">
                Jede Dienstleistung ist eine eigenständige Seite mit ausführlichen Informationen,
                Ablauf, FAQ und lokalem Bezug. Wählen Sie das Thema, das Sie beschäftigt.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((s, i) => {
              const Icon = iconMap[s.icon] || Circle;
              const moneyPagesForService = getMoneyPagesForService(s.slug);
              return (
                <ScrollReveal key={s.slug} delay={i * 0.05}>
                  <div className="group flex h-full flex-col rounded-2xl border border-border bg-white p-7 shadow-sm transition-all hover:shadow-lg hover:-translate-y-0.5">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading text-xl font-bold text-primary">{s.title}</h3>
                        <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{s.description}</p>
                      </div>
                    </div>

                    {/* Money Pages für diesen Service */}
                    {moneyPagesForService.length > 0 && (
                      <div className="mt-5 pt-5 border-t border-border">
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                          Auch in Ihrer Region:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {moneyPagesForService.map((mp) => {
                            const rName = moneyPageRegions[mp.regionSlug]?.name || mp.regionSlug;
                            return (
                              <Link
                                key={mp.slug}
                                to={`/${mp.slug}`}
                                className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent hover:bg-accent hover:text-white transition-colors"
                              >
                                {s.shortTitle} {rName}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    <Link
                      to={s.link}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all"
                    >
                      Zur Dienstleistungsseite <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <LinkHub
        groups={[
          {
            title: "Regionen",
            icon: MapPin,
            links: [
              { to: "/regionen", label: "Psychologische Beratung in Ihrer Region" },
              { to: "/regionen/psychologische-beratung-thalwil", label: "Psychologische Beratung Thalwil" },
              { to: "/regionen/psychologische-beratung-zuerich", label: "Psychologische Beratung Zürich" },
              { to: "/regionen/psychologische-beratung-horgen", label: "Psychologische Beratung Horgen" },
              { to: "/regionen/psychologische-beratung-waedenswil", label: "Psychologische Beratung Wädenswil" },
            ],
          },
          {
            title: "Bewertungen & Über mich",
            icon: Star,
            links: [
              { to: "/bewertungen", label: "Google Bewertungen (5,0 Sterne)" },
              { to: "/erfahrungsberichte", label: "Erfahrungsberichte von Klienten" },
              { to: "/ueber-mich", label: "Über Leo Hackl – 30 Jahre Erfahrung" },
              { to: "/prinzip-der-aufloesung", label: "Das Prinzip der hypnosystemischen Methode" },
            ],
          },
          {
            title: "Informationen",
            icon: BookOpen,
            links: [
              { to: "/blog", label: "Blog – Ratgeber & Artikel" },
              { to: "/faq", label: "Häufige Fragen (FAQ)" },
              { to: "/kontakt", label: "Kontakt & Terminvereinbarung" },
              { to: "/auftrag-bewerten", label: "Bewertung abgeben" },
            ],
          },
        ]}
      />

      <CTASection />
    </>
  );
}
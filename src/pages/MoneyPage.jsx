import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck, Brain, Flame, HeartHandshake, ArrowRight, Phone,
  CheckCircle2, MapPin, FileText, Layers, Circle
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { getServiceBySlug } from "@/data/services";
import { getMoneyPageBySlug, getFullRegion, getMoneyPagesForService, moneyPageRegions } from "@/data/moneyPages";

const iconMap = {
  ShieldCheck,
  Brain,
  Flame,
  HeartHandshake,
};

export default function MoneyPage({ slug }) {
  const mp = getMoneyPageBySlug(slug);
  if (!mp) return null;

  const service = getServiceBySlug(mp.serviceSlug);
  const region = getFullRegion(mp.regionSlug);
  const regionName = moneyPageRegions[mp.regionSlug]?.name || mp.regionSlug;
  if (!service || !region) return null;

  const Icon = iconMap[service.icon] || Circle;
  const relatedMoneyPages = getMoneyPagesForService(mp.serviceSlug).filter((r) => r.slug !== slug);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy text-white pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-6">
            <Breadcrumbs
              dark
              items={[
                { label: "Start", to: "/" },
                { label: "Dienstleistungen", to: "/dienstleistungen" },
                { label: service.title, to: service.link },
                { label: regionName, to: `/${slug}` },
              ]}
            />
          </div>
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 mb-5">
              <Icon className="h-3.5 w-3.5" /> {region.hero.eyebrow}
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] max-w-3xl text-balance">
              {service.title} in {regionName} auflösen
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
              Sie leben oder arbeiten in {regionName} und möchten {service.title} auflösen?
              Bei Leo Hackl Coaching in Thalwil – {region.whyUs[0]?.description} –
              finden wir gemeinsam die dauerhafte Lösung. Mit über 30 Jahren Erfahrung
              und mehr als 2'000 gelösten Fällen.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Termin anfragen <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:0447728979"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                <Phone className="h-4 w-4" /> 044 772 89 79
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* INTRO + VORTEILE */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">
            <ScrollReveal>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                {service.title}
              </span>
              <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold text-primary leading-tight">
                {service.shortTitle} in {regionName} – dauerhaft und sanft
              </h2>
              <div className="mt-6 space-y-4 text-foreground/70 leading-relaxed">
                <p>{service.description}</p>
                <p>
                  {regionName} ist Teil unseres Einzugsgebiets. Die Praxis in Thalwil ist von
                  {" "}{regionName} aus schnell und bequem erreichbar. {region.whyUs[0]?.description}
                </p>
                <p>
                  Die Methode von Leo Hackl hat in 30 Jahren über 2'000 Menschen geholfen, ihre
                  Blockaden nachhaltig aufzulösen. Ohne Medikamente, ohne Schmerz, oft in nur
                  wenigen Sitzungen.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="grid gap-4 sm:grid-cols-2">
                {service.vorteile.map((v) => (
                  <div key={v.title} className="rounded-2xl border border-border bg-white p-5 shadow-sm">
                    <CheckCircle2 className="h-5 w-5 text-accent mb-2" />
                    <h3 className="font-heading font-semibold text-primary text-sm">{v.title}</h3>
                    <p className="mt-1 text-xs text-foreground/60 leading-relaxed">{v.description}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ABLAUF */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <ScrollReveal>
            <div className="max-w-2xl mb-12">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Ablauf</span>
              <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold text-primary leading-tight">
                So läuft Ihre Beratung bei {service.shortTitle} ab
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-3">
            {service.ablauf.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.1}>
                <div className="flex gap-5 rounded-2xl border border-border bg-white p-6 shadow-sm">
                  <span className="font-heading text-3xl font-bold text-accent/40">{step.step}</span>
                  <div>
                    <h3 className="font-heading font-bold text-primary">{step.title}</h3>
                    <p className="text-sm text-foreground/70 mt-1">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <ScrollReveal>
            <div className="mb-10">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">FAQ</span>
              <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold text-primary leading-tight">
                Häufige Fragen zu {service.shortTitle} in {regionName}
              </h2>
            </div>
          </ScrollReveal>
          <div className="space-y-3">
            {service.faq.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.03}>
                <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                  <h3 className="font-heading font-semibold text-primary mb-2">{item.question}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">{item.answer}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNE VERLINKUNG – Service ↔ Region ↔ Money Pages */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <ScrollReveal>
              <div className="rounded-2xl border border-border bg-white p-6 shadow-sm h-full">
                <FileText className="h-6 w-6 text-accent mb-3" />
                <h3 className="font-heading font-bold text-primary mb-2">Zur Dienstleistungsseite</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  Alle Details zu {service.title.toLowerCase()} – ausführlich beschrieben.
                </p>
                <Link to={service.link} className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all">
                  {service.title} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="rounded-2xl border border-border bg-white p-6 shadow-sm h-full">
                <MapPin className="h-6 w-6 text-accent mb-3" />
                <h3 className="font-heading font-bold text-primary mb-2">Zur Region {regionName}</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  Alle Leistungen in {regionName} und Umgebung.
                </p>
                <Link to={`/regionen/${region.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all">
                  Psychologische Beratung {regionName} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </ScrollReveal>

            {relatedMoneyPages.length > 0 && (
              <ScrollReveal delay={0.2}>
                <div className="rounded-2xl border border-border bg-white p-6 shadow-sm h-full">
                  <Layers className="h-6 w-6 text-accent mb-3" />
                  <h3 className="font-heading font-bold text-primary mb-2">{service.shortTitle} in weiteren Regionen</h3>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {relatedMoneyPages.map((r) => {
                      const rName = moneyPageRegions[r.regionSlug]?.name || r.regionSlug;
                      return (
                        <Link
                          key={r.slug}
                          to={`/${r.slug}`}
                          className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent hover:bg-accent hover:text-white transition-colors"
                        >
                          {rName}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </ScrollReveal>
            )}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
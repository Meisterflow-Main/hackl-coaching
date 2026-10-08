import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { getMoneyPagesForRegion, moneyPageRegions } from "@/data/moneyPages";
import { getServiceBySlug } from "@/data/services";

/**
 * Zeigt Money Pages (Dienstleistung + Ort) für eine bestimmte Region.
 * Wird auf Regionseiten eingebunden, um Service↔Region-Interlinking zu stärken.
 * regionSlug = voller Slug aus regions.js (z.B. "psychologische-beratung-thalwil")
 */
export default function RegionMoneyPages({ regionSlug }) {
  // Mappe vollen Region-Slug auf kurzen Money-Page-Slug
  const shortSlug = Object.keys(moneyPageRegions).find(
    (key) => moneyPageRegions[key].regionSlug === regionSlug
  );

  if (!shortSlug) return null;

  const moneyPagesList = getMoneyPagesForRegion(shortSlug);
  if (moneyPagesList.length === 0) return null;

  const regionName = moneyPageRegions[shortSlug]?.name || shortSlug;

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <ScrollReveal>
          <div className="max-w-2xl mb-10">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              {regionName}
            </span>
            <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold text-primary leading-tight">
              Spezielle Dienstleistungen in {regionName}
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Ausführliche Informationen zu einzelnen Dienstleistungen mit lokalem Bezug
              zu {regionName} – inklusive Ablauf, FAQ und regionaler Erreichbarkeit.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {moneyPagesList.map((mp, i) => {
            const service = getServiceBySlug(mp.serviceSlug);
            if (!service) return null;
            return (
              <ScrollReveal key={mp.slug} delay={i * 0.05}>
                <Link
                  to={`/${mp.slug}`}
                  className="group flex items-center gap-3 rounded-2xl border border-border bg-white p-5 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-primary">
                      {service.shortTitle} {regionName}
                    </h3>
                    <p className="text-xs text-foreground/60 mt-0.5">
                      {service.title} in {regionName}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-accent group-hover:translate-x-1 transition-transform" />
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
import React from "react";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { getMoneyPagesForService, moneyPageRegions } from "@/data/moneyPages";
import { getServiceBySlug } from "@/data/services";

export default function ServiceMoneyPages({ serviceSlug }) {
  const service = getServiceBySlug(serviceSlug);
  const moneyPagesList = getMoneyPagesForService(serviceSlug);
  if (!service || moneyPagesList.length === 0) return null;

  return (
    <section className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <ScrollReveal>
          <div className="max-w-2xl mb-10">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              {service.shortTitle} in Ihrer Region
            </span>
            <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold text-primary leading-tight">
              {service.title} in der Nähe von Thalwil
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Wir betreuen Klientinnen und Kunden aus dem gesamten Zürichsee-Gebiet. Wählen Sie
              Ihren Ort für lokale Informationen zu {service.title.toLowerCase()}.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {moneyPagesList.map((mp, i) => {
            const rName = moneyPageRegions[mp.regionSlug]?.name || mp.regionSlug;
            return (
              <ScrollReveal key={mp.slug} delay={i * 0.05}>
                <Link
                  to={`/${mp.slug}`}
                  className="group flex items-center gap-3 rounded-2xl border border-border bg-white p-5 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-primary">
                      {service.shortTitle} {rName}
                    </h3>
                    <p className="text-xs text-foreground/60 mt-0.5">
                      {service.title} in {rName}
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
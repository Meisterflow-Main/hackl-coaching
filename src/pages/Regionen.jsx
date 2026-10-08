import React from "react";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import Seo from "@/components/Seo";
import { PAGE_META, localBusinessSchema, itemListSchema, BASE_URL } from "@/data/seoConfig";
import { regions } from "@/data/regions";

export default function Regionen() {
  const regionItems = regions.map((r) => ({ name: r.ort, url: `${BASE_URL}/regionen/${r.slug}` }));
  return (
    <div className="bg-background">
      <Seo {...PAGE_META["/regionen"]} schema={[localBusinessSchema(), itemListSchema(regionItems, "Regionen von Leo Hackl Coaching")]} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy via-navy to-primary text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_20%,white,transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-20 lg:py-28">
          <div className="mb-6">
            <Breadcrumbs dark items={[{ label: "Start", to: "/" }, { label: "Regionen", to: "/regionen" }]} />
          </div>
          <ScrollReveal y={32}>
            <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.18em] text-white/90">
              Regionen
            </span>
            <h1 className="mt-6 font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight max-w-4xl">
              Psychologische Beratung in Ihrer Region
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl">
              Leo Hackl Coaching betreut Klienten aus dem gesamten Zürichseegebiet. Wählen Sie Ihre Region und erfahren Sie, wie wir Ihnen vor Ort helfen können.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Region Grid */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {regions.map((region, i) => (
              <ScrollReveal key={region.slug} delay={i * 0.05}>
                <Link
                  to={`/regionen/${region.slug}`}
                  className="group block h-full rounded-2xl border border-border bg-card p-7 shadow-sm hover:shadow-lg hover:border-primary transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="font-heading text-xl font-bold group-hover:text-primary transition-colors">
                        {region.ort}
                      </h2>
                      <p className="text-sm text-muted-foreground">{region.region}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-foreground/70 leading-relaxed line-clamp-3">
                    {region.hero.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                    Zur Regionseite <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
import React from "react";
import ScrollReveal from "./ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";

export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <section className="relative overflow-hidden bg-navy text-white pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <ScrollReveal>
          {eyebrow && (
            <span className="inline-block rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 mb-5">
              {eyebrow}
            </span>
          )}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] max-w-3xl text-balance">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
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
  );
}
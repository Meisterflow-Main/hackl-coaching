import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function CTASection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl bg-navy px-8 py-14 md:px-16 md:py-20 text-white">
            <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
            <div className="absolute left-1/2 -top-24 h-64 w-64 rounded-full bg-primary/40 blur-3xl" />
            <div className="relative max-w-3xl">
              <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight">
                Sie möchten eine dauerhafte Lösung. Wir werden sie finden.
              </h2>
              <p className="mt-5 text-lg text-white/70 leading-relaxed">
                Melden Sie sich für ein unverbindliches Gespräch. Ich freue mich auf Ihre Anfrage.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/kontakt"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  Jetzt Termin anfragen <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="tel:0794335072"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold hover:bg-white/10 transition-colors"
                >
                  <Phone className="h-4 w-4" /> 079 433 50 72
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
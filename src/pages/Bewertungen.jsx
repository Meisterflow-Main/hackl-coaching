import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import LinkHub from "@/components/LinkHub";
import Seo from "@/components/Seo";
import { ShieldCheck, MapPin, LayoutGrid } from "lucide-react";
import GoogleReviewWidget from "@/components/GoogleReviewWidget";
import { PAGE_META, localBusinessSchema } from "@/data/seoConfig";

const GOOGLE_PROFILE_URL =
  "https://www.google.com/maps/place/Leo+Hackl+Coaching/@47.2889657,8.5706351,17z/data=!3m1!4b1!4m6!3m5!1s0x479aa881fc3855a5:0x4b08a8aa8cc1de1e!8m2!3d47.2889657!4d8.5706351!16s%2Fg%2F1tcv0ddk";

export default function Bewertungen() {
  return (
    <>
      <Seo
        {...PAGE_META["/bewertungen"]}
        schema={[localBusinessSchema()]}
      />
      <PageHeader
        eyebrow="Bewertungen"
        title="Was Klienten auf Google berichten"
        subtitle="Leo Hackl Coaching hat 17 verifizierte Google-Bewertungen mit 5,0 Sternen. Lesen Sie, was echte Klienten über die psychologische Beratung in Thalwil berichten."
        breadcrumbs={[
          { label: "Start", to: "/" },
          { label: "Bewertungen", to: "/bewertungen" },
        ]}
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <GoogleReviewWidget />

          <ScrollReveal delay={0.1}>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-secondary/30 p-7">
                <h2 className="font-heading text-xl font-bold text-primary mb-3">
                  Auf Google ansehen
                </h2>
                <p className="text-sm text-foreground/70 leading-relaxed mb-5">
                  Alle 17 Bewertungen können direkt auf Google eingesehen werden.
                  Google überprüft Bewertungen nicht im Voraus, entfernt jedoch
                  gefälschte Inhalte, wenn diese erkannt werden.
                </p>
                <a
                  href={GOOGLE_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all"
                >
                  Zum Google-Profil <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              <div className="rounded-2xl border border-border bg-secondary/30 p-7">
                <h2 className="font-heading text-xl font-bold text-primary mb-3">
                  Weitere Erfahrungsberichte
                </h2>
                <p className="text-sm text-foreground/70 leading-relaxed mb-5">
                  Auf unserer Website finden Sie zusätzliche Erfahrungsberichte
                  von Klienten, die Ängste, Phobien, Burnout und Verhaltensmuster
                  aufgelöst haben.
                </p>
                <Link
                  to="/erfahrungsberichte"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all"
                >
                  Alle Erfahrungsberichte <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <LinkHub
        groups={[
          {
            title: "Dienstleistungen",
            icon: LayoutGrid,
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
            title: "Weiteres",
            icon: ShieldCheck,
            links: [
              { to: "/", label: "Startseite – Leo Hackl Coaching" },
              { to: "/erfahrungsberichte", label: "Erfahrungsberichte von Klienten" },
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
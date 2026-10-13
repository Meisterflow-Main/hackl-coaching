import React from "react";
import { Phone, MapPin, Clock, Mail, ShieldCheck, Star, BookOpen } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";
import LinkHub from "@/components/LinkHub";
import Seo from "@/components/Seo";
import { GoogleReviewCard } from "@/components/GoogleReviewWidget";
import { PAGE_META, localBusinessSchema, organizationSchema } from "@/data/seoConfig";

export default function Kontakt() {
  return (
    <>
      <Seo {...PAGE_META["/kontakt"]} schema={[localBusinessSchema(), organizationSchema()]} />
      <PageHeader
        eyebrow="Kontakt"
        title="Jetzt Termin anfragen"
        subtitle="Melden Sie sich gleich hier an – oder rufen Sie an. Ich freue mich auf Ihre Anfrage und melde mich so bald wie möglich bei Ihnen."
        breadcrumbs={[{ label: "Start", to: "/" }, { label: "Kontakt" }]}
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            <ScrollReveal className="lg:col-span-2">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">Kontaktdaten</h2>
              <p className="mt-4 text-foreground/70 leading-relaxed">
                Leo Hackl Coaching – Psychologische Beratung in Thalwil. Vereinbaren Sie Ihren
                Termin telefonisch oder über das Kontaktformular.
              </p>
              <div className="mt-8 space-y-5">
                <a href="tel:0794335072" className="flex items-start gap-4 group">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm text-foreground/60">Telefon</span>
                    <span className="font-semibold text-primary">079 433 50 72</span>
                  </span>
                </a>
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm text-foreground/60">Adresse</span>
                    <span className="font-semibold text-primary">Zehntenstrasse 17, 8800 Thalwil</span>
                  </span>
                </div>
                <a href="mailto:info@hacklcoaching.ch" className="flex items-start gap-4 group">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm text-foreground/60">E-Mail</span>
                    <span className="font-semibold text-primary">info@hacklcoaching.ch</span>
                  </span>
                </a>
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Clock className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm text-foreground/60">Termine nach Vereinbarung</span>
                    <span className="font-semibold text-primary">Individuelle Terminplanung</span>
                  </span>
                </div>
              </div>

              <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-sm">
                <iframe
                  title="Standort Leo Hackl Coaching"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=8.5686%2C47.2879%2C8.5726%2C47.2899&layer=mapnik&marker=47.2889%2C8.5706"
                  className="w-full h-56"
                  loading="lazy"
                />
              </div>
              <div className="mt-6">
                <GoogleReviewCard />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="lg:col-span-3">
              <div className="rounded-2xl border border-border bg-white p-7 md:p-10 shadow-sm">
                <h2 className="font-heading text-2xl font-bold text-primary">Anfrage senden</h2>
                <p className="mt-2 text-sm text-foreground/60">
                  Felder mit * sind Pflichtfelder. Ihre Daten werden vertraulich behandelt.
                </p>
                <div className="mt-7">
                  <ContactForm />
                </div>
              </div>
            </ScrollReveal>
          </div>
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
            title: "Informationen",
            icon: BookOpen,
            links: [
              { to: "/ueber-mich", label: "Über Leo Hackl – 30 Jahre Erfahrung" },
              { to: "/blog", label: "Blog – Ratgeber & Artikel" },
              { to: "/faq", label: "Häufige Fragen (FAQ)" },
              { to: "/bewertungen", label: "Google Bewertungen (5,0 Sterne)" },
            ],
          },
        ]}
      />
    </>
  );
}
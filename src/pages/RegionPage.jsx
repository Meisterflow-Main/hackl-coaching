import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  ShieldCheck, HeartHandshake, Zap, Pill, Phone, Mail, MapPin, Clock,
  Star, ArrowRight, CheckCircle2, MessageCircle, Calendar
} from "lucide-react";
import { motion } from "framer-motion";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import ScrollReveal from "@/components/ScrollReveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import Seo from "@/components/Seo";
import { localBusinessSchema, faqPageSchema } from "@/data/seoConfig";
import { regions, sharedRegionData } from "@/data/regions";

const iconMap = { ShieldCheck, HeartHandshake, Zap, Pill };

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

export default function RegionPage() {
  const { slug } = useParams();
  const region = regions.find(r => r.slug === slug);

  if (!region) return <Navigate to="/regionen" replace />;

  const sd = sharedRegionData;

  return (
    <div className="bg-background">
      <Seo
        title={region.metaTitle}
        description={region.metaDescription}
        canonicalPath={`/regionen/${region.slug}`}
        schema={[localBusinessSchema(), faqPageSchema(region.faq)]}
      />

      {/* 1. HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy via-navy to-primary text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_20%,white,transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-20 lg:py-28">
          <div className="mb-6">
            <Breadcrumbs dark items={[{ label: "Start", to: "/" }, { label: "Regionen", to: "/regionen" }, { label: region.ort }]} />
          </div>
          <ScrollReveal y={32}>
            <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.18em] text-white/90">
              {region.hero.eyebrow}
            </span>
            <h1 className="mt-6 font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-balance max-w-4xl">
              {region.h1}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl">
              {region.hero.description}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-accent/30 hover:opacity-90 transition-opacity"
              >
                <Calendar className="h-5 w-5" /> Termin vereinbaren
              </Link>
              <a
                href={`tel:${sd.telefon.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 hover:bg-white/20 px-7 py-3.5 text-base font-semibold text-white transition-colors"
              >
                <Phone className="h-5 w-5" /> {sd.telefon}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. VERTRAUENSELEMENTE */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
          >
            {sd.trust.map((item, i) => {
              const Icon = iconMap[item.icon] || ShieldCheck;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="rounded-2xl border border-border bg-card p-5 lg:p-6 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-heading font-semibold text-base lg:text-lg">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 3. EINFÜHRUNG / INTRO */}
      <section className="py-16 lg:py-24 bg-secondary/40">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight">
              {region.intro.title}
            </h2>
            <div className="mt-6 space-y-4 text-lg text-foreground/80 leading-relaxed">
              {region.intro.text.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. KONTAKTBLOCK */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <ScrollReveal>
            <div className="rounded-3xl bg-navy text-white p-8 lg:p-12 shadow-xl">
              <h2 className="font-heading text-2xl md:text-3xl font-bold">Kontakt & Anfahrt</h2>
              <p className="mt-3 text-white/70 max-w-2xl">
                Vereinbaren Sie Ihr persönliches Erstgespräch in {region.ort} und Umgebung. Wir freuen uns auf Ihre Kontaktaufnahme.
              </p>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 shrink-0 text-accent mt-0.5" />
                    <div>
                      <div className="font-semibold">Adresse</div>
                      <div className="text-white/70">{sd.adresse}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 shrink-0 text-accent mt-0.5" />
                    <div>
                      <div className="font-semibold">Telefon</div>
                      <a href={`tel:${sd.telefon.replace(/\s/g, "")}`} className="text-white/70 hover:text-white">{sd.telefon}</a>
                      <br />
                      <a href={`tel:${sd.telefonMobil.replace(/\s/g, "")}`} className="text-white/70 hover:text-white">{sd.telefonMobil}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 shrink-0 text-accent mt-0.5" />
                    <div>
                      <div className="font-semibold">E-Mail</div>
                      <a href={`mailto:${sd.email}`} className="text-white/70 hover:text-white">{sd.email}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 shrink-0 text-accent mt-0.5" />
                    <div>
                      <div className="font-semibold">Öffnungszeiten</div>
                      <div className="text-white/70">{sd.oeffnungszeiten}</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 justify-center">
                  <a
                    href={sd.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 hover:bg-white/20 px-6 py-3 text-sm font-semibold transition-colors"
                  >
                    <MapPin className="h-4 w-4" /> Google Maps öffnen
                  </a>
                  <Link
                    to="/kontakt"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-accent hover:opacity-90 px-6 py-3 text-sm font-semibold transition-opacity"
                  >
                    <Calendar className="h-4 w-4" /> Termin vereinbaren
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. LEISTUNGEN */}
      <section className="py-16 lg:py-24 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center">Unsere Leistungen</h2>
            <p className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto">
              Psychologische Beratung in {region.ort} und Umgebung – drei Schwerpunkte, die das Leben nachhaltig verändern.
            </p>
          </ScrollReveal>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-12 grid gap-6 md:grid-cols-3"
          >
            {sd.services.map((service, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm hover:shadow-lg transition-shadow"
              >
                <h3 className="font-heading text-xl font-bold">{service.title}</h3>
                <p className="mt-3 text-foreground/70 leading-relaxed flex-1">{service.description}</p>
                <Link
                  to={service.link}
                  className="mt-6 inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  Mehr erfahren <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. WARUM UNS */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center">
              Warum Klienten aus {region.ort} uns wählen
            </h2>
            <p className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto">
              Über 30 Jahre Erfahrung, über 2'000 gelöste Fälle – und eine Methode, die wirklich wirkt.
            </p>
          </ScrollReveal>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-12 space-y-4"
          >
            {region.whyUs.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg">{item.headline}</h3>
                  <p className="mt-1 text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-10 text-center">
            <Link
              to="/kontakt"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-accent px-8 py-3.5 text-base font-semibold text-white transition-colors"
            >
              Jetzt Erstgespräch vereinbaren <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. KOSTENLOSES ERSTGESPRÄCH (adaptiert von Preisrechner) */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-secondary/40 to-background">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <ScrollReveal>
            <div className="rounded-3xl border border-border bg-card p-8 lg:p-12 shadow-lg text-center">
              <h2 className="font-heading text-2xl md:text-3xl font-bold">Kostenloses Erstgespräch</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Sie sind sich noch unsicher? Vereinbaren Sie ein unverbindliches, kostenloses Erstgespräch. Wir klären Ihren Bedarf, beantworten Ihre Fragen und erstellen Ihnen eine transparente Offerte.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/kontakt"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent hover:opacity-90 px-7 py-3.5 text-base font-semibold text-white transition-opacity"
                >
                  <Calendar className="h-5 w-5" /> Jetzt Erstgespräch buchen
                </Link>
                <a
                  href={`tel:${sd.telefon.replace(/\s/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border hover:bg-muted px-7 py-3.5 text-base font-semibold transition-colors"
                >
                  <Phone className="h-5 w-5" /> Anrufen
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 8. GOOGLE BEWERTUNGEN */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold">Google Bewertungen</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Über 2'000 Klienten haben ihr Vertrauen gesetzt. Lesen Sie, was sie über ihre Erfahrung bei Leo Hackl Coaching berichten.
              </p>
              <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-secondary px-6 py-3">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-semibold">5.0 Sterne</span>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/erfahrungsberichte"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-accent px-7 py-3.5 text-base font-semibold text-white transition-colors"
                >
                  Alle Erfahrungsberichte ansehen
                </Link>
                <Link
                  to="/auftrag-bewerten"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border hover:bg-muted px-7 py-3.5 text-base font-semibold transition-colors"
                >
                  <Star className="h-5 w-5" /> Bewertung schreiben
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="py-16 lg:py-24 bg-secondary/40">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center">
              Häufige Fragen aus {region.ort}
            </h2>
            <p className="mt-4 text-center text-lg text-muted-foreground">
              Antworten auf die wichtigsten Fragen zur psychologischen Beratung in {region.ort}.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="mt-10">
            <Accordion type="single" collapsible className="space-y-3">
              {region.faq.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="rounded-2xl border border-border bg-card px-6 shadow-sm"
                >
                  <AccordionTrigger className="text-left font-heading font-semibold text-base lg:text-lg hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </section>

      {/* 10. WEITERE LEISTUNGEN */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-center">Weitere Leistungen</h2>
            <p className="mt-3 text-center text-muted-foreground">
              Entdecken Sie das gesamte Angebot von Leo Hackl Coaching.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {sd.otherServices.map((service, i) => (
                <Link
                  key={i}
                  to={service.link}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium hover:bg-primary hover:text-white hover:border-primary transition-colors"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 11. EINZUGSGEBIET */}
      <section className="py-16 lg:py-20 bg-secondary/40">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-center">Einzugsgebiet</h2>
            <p className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto">
              Leo Hackl Coaching betreut Klienten aus {region.ort} und der gesamten {region.region}. Diese Orte gehören zu unserem Einzugsgebiet.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-2.5">
              {region.serviceArea.map((ort, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 rounded-full bg-card border border-border px-4 py-2 text-sm font-medium text-foreground/80"
                >
                  <MapPin className="h-3.5 w-3.5 text-primary" /> {ort}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 12. ABSCHLUSS CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-navy to-primary text-white">
        <div className="mx-auto max-w-3xl px-5 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {region.finalCta.title}
            </h2>
            <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed">
              {region.finalCta.text}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent hover:opacity-90 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-accent/30 transition-opacity"
              >
                <Calendar className="h-5 w-5" /> Termin buchen
              </Link>
              <a
                href={`https://wa.me/41${sd.telefonMobil.replace(/\s/g, "").replace(/^0/, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 hover:bg-white/20 px-8 py-4 text-base font-semibold text-white transition-colors"
              >
                <MessageCircle className="h-5 w-5" /> WhatsApp schreiben
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
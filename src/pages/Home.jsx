import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Brain, ShieldCheck, Flame, HeartHandshake, Star } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import ReelsSection from "@/components/ReelsSection";
import LinkHub from "@/components/LinkHub";
import Seo from "@/components/Seo";
import { MapPin, BookOpen, LayoutGrid } from "lucide-react";
import { GoogleReviewBadge, GoogleReviewCard } from "@/components/GoogleReviewWidget";
import { PAGE_META, localBusinessSchema, organizationSchema, websiteSchema } from "@/data/seoConfig";
import { Image } from "@/components/ui/image";

const SERVICES = [
  {
    icon: Brain,
    title: "Verhaltensmuster & Selbstsabotage",
    to: "/verhaltensmuster",
    description:
      "Unerwünschte Verhaltensweisen, die sich hartnäckig wiederholen – hypnosystemisch in einer intensiven Sitzung dauerhaft aufgelöst.",
  },
  {
    icon: ShieldCheck,
    title: "Ängste & Phobien",
    to: "/aengste",
    description:
      "Flugangst, Prüfungsangst, Panikattacken, Platzangst – erstaunlich schnell und nachhaltig auflösbar.",
  },
  {
    icon: Flame,
    title: "Burnout & Belastungsdepression",
    to: "/burnout",
    description:
      "Wenn Energie und Freude verschwinden. Authentische Lösungen statt blosser Auszeit.",
  },
  {
    icon: HeartHandshake,
    title: "Beziehungskonflikte",
    to: "/beziehungskonflikte",
    description:
      "Verständnisvolle Begleitung – für dauerhafte Lösungen in Partnerschaft, Familie und Beruf.",
  },
];

const STATS = [
  { value: "4'000+", label: "Gelöste Fälle" },
  { value: "30", label: "Jahre Erfahrung" },
  { value: "90%", label: "Erfolgsquote bei Phobien" },
  { value: "2–3 Sitzungen", label: "oder je nach Bedarf" },
];

// Testimonials removed per Google Reviews Compliance — only real Google reviews displayed

export default function Home() {
  return (
    <>
      <Seo {...PAGE_META["/"]} schema={[localBusinessSchema(), organizationSchema(), websiteSchema()]} />
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy text-white pt-32 pb-20 md:pt-44 md:pb-32">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle at 80% 10%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-primary/40 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <ScrollReveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 mb-6">
                  <span className="h-2 w-2 rounded-full bg-accent" /> Psychologische Beratung · Thalwil
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.04] text-balance">
                  Werde frei davon.
                </h1>
                <p className="mt-3 font-heading text-2xl md:text-3xl font-semibold text-blue-200">
                  Ängste & Verhaltensmuster auflösen.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="mt-6 text-lg text-white/70 max-w-xl leading-relaxed">
                  Psychologische Beratung in Thalwil – mit über 4'000 gelösten Fällen. Eine
                  Kombination aus jüngster Hirnforschung und bewährter psychologischer Methode.
                  Nachhaltig. Wirksam. Menschlich.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <div className="mt-9 flex flex-wrap gap-4">
                  <Link
                    to="/kontakt"
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold shadow-lg shadow-accent/30 hover:-translate-y-0.5 transition-all"
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
                <div className="mt-6">
                  <GoogleReviewBadge dark />
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.2} className="relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-accent/30 to-primary/30 blur-2xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
                  <video
                    src="https://media.base44.com/videos/public/6ac4ae046d53c41e9b937a32/f9c040118_Hero_Video.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-[420px] md:h-[520px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-6 -left-6 hidden md:block rounded-2xl glass border border-white/20 px-6 py-4 shadow-xl">
                  <div className="flex items-center gap-1 text-accent mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm font-semibold text-navy">Über 4'000 Klienten geholfen</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Stats */}
          <ScrollReveal delay={0.2}>
            <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              {STATS.map((s) => (
                <div key={s.label} className="bg-white/5 px-6 py-7 text-center">
                  <div className="font-heading text-3xl md:text-4xl font-bold text-white">{s.value}</div>
                  <div className="mt-1 text-xs md:text-sm text-white/60 uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* REELS */}
      <ReelsSection />

      {/* SERVICES */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <ScrollReveal>
            <div className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Wo ich helfen kann</span>
              <h2 className="mt-3 font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
                Mein Leistungsangebot
              </h2>
              <p className="mt-4 text-lg text-foreground/70">
                Das Leben funktioniert in gewissen Bereichen nicht? Unerwünschte Verhaltensweisen
                wiederholen sich hartnäckig? Hier finden Sie den Weg zur dauerhaften Lösung.
              </p>
            </div>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <ServiceCard key={s.title} {...s} delay={i * 0.05} />
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ScrollReveal className="relative order-2 lg:order-1">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] shadow-xl">
                <Image
                  src="https://media.base44.com/images/public/6ac4ae046d53c41e9b937a32/c389d2b08_FriendlySeniorExecutiveHeadshot.png"
                  alt="Leo Hackl"
                  className="w-full h-[460px]"
                />
              </div>
            </ScrollReveal>
            <div className="order-1 lg:order-2">
              <ScrollReveal>
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Über mich</span>
                <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold text-primary leading-tight">
                  Leo Hackl
                </h2>
                <p className="mt-2 font-heading text-xl text-foreground/80">
                  Psychologische Beratung · 30 Jahre Erfahrung
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div className="mt-6 space-y-4 text-foreground/70 leading-relaxed">
                  <p>
                    Ich kenne das, wenn die Dinge nicht funktionieren, wie man es sich wünscht. Ich
                    habe das meiste selbst erlebt. Ich bin Vater von fünf Kindern und hatte acht
                    Berufe.
                  </p>
                  <p>
                    Etwas von meiner Erfahrung weiterzugeben ist meine Passion. Ich durfte bis heute
                    schon über 4'000 Betroffenen beistehen. Dabei helfen mir mein Psychologiestudium,
                    die Ausbildung in systemischer Hypnotherapie sowie 30 Jahre praktischer Erfahrung.
                  </p>
                  <p className="font-semibold text-primary">
                    Es gibt für mich nichts Schöneres, als jemanden glücklich meine Praxis verlassen zu sehen.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <Link
                  to="/ueber-mich"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-accent transition-colors"
                >
                  Mehr über Leo Hackl <ArrowRight className="h-4 w-4" />
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* METHOD TEASER */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <ScrollReveal>
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-20 items-center">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Die Methode</span>
                <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold text-primary leading-tight">
                  Hirnforschung trifft bewährte Psychologie
                </h2>
                <p className="mt-5 text-lg text-foreground/70 leading-relaxed">
                  Das Gehirn hat die Fähigkeit, sich sehr schnell umzuorganisieren, neu zu verdrahten.
                  Durch diese neuronale Plastizität lassen sich irreale Ängste – vor allem Phobien –
                  restlos und dauerhaft auflösen. Ohne Leiden, ohne Konfrontationstherapie.
                </p>
                <Link
                  to="/prinzip-der-aufloesung"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all"
                >
                  Das Prinzip der Auflösung <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="grid gap-4">
                {[
                  { n: "01", t: "Analyse", d: "Klarheit über Ursache, Auslöser und das zugrundeliegende Muster." },
                  { n: "02", t: "Auflösung", d: "Hypnosystemische Intervention verdrahtet neuronale Netzwerke neu." },
                  { n: "03", t: "Integration", d: "Sie handeln situationsgerecht – ohne inneren Kampf, dauerhaft." },
                ].map((step, i) => (
                  <ScrollReveal key={step.n} delay={i * 0.1}>
                    <div className="flex gap-5 rounded-2xl border border-border bg-white p-6 shadow-sm">
                      <span className="font-heading text-3xl font-bold text-accent/40">{step.n}</span>
                      <div>
                        <h3 className="font-heading font-bold text-primary">{step.t}</h3>
                        <p className="text-sm text-foreground/70 mt-1">{step.d}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* GOOGLE REVIEWS */}
      <section className="bg-navy py-20 md:py-28 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <ScrollReveal>
            <div className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Google Bewertungen</span>
              <h2 className="mt-3 font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
                Was Klienten auf Google berichten
              </h2>
              <p className="mt-4 text-lg text-white/70">
                Leo Hackl Coaching hat 17 verifizierte Google-Bewertungen mit 5,0 Sternen.
                Lesen Sie, was echte Klienten auf Google berichten.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="mt-10 max-w-2xl">
              <GoogleReviewCard />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/bewertungen"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Alle Bewertungen <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/erfahrungsberichte"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                Erfahrungsberichte <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* INTERNE VERLINKUNG – Übersicht & Thematische Hub-Funktion */}
      <LinkHub
        groups={[
          {
            title: "Dienstleistungen",
            icon: LayoutGrid,
            links: [
              { to: "/dienstleistungen", label: "Alle Dienstleistungen im Überblick" },
              { to: "/aengste", label: "Ängste & Phobien auflösen" },
              { to: "/verhaltensmuster", label: "Verhaltensmuster & Selbstsabotage" },
              { to: "/burnout", label: "Burnout & Belastungsdepression" },
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
              { to: "/regionen/psychologische-beratung-waedenswil", label: "Psychologische Beratung Wädenswil" },
            ],
          },
          {
            title: "Informationen & Kontakt",
            icon: BookOpen,
            links: [
              { to: "/ueber-mich", label: "Über Leo Hackl – 30 Jahre Erfahrung" },
              { to: "/blog", label: "Blog – Ratgeber & Artikel" },
              { to: "/faq", label: "Häufige Fragen (FAQ)" },
              { to: "/bewertungen", label: "Google Bewertungen (5,0 Sterne)" },
              { to: "/kontakt", label: "Kontakt & Terminvereinbarung" },
            ],
          },
        ]}
      />

      <CTASection />
    </>
  );
}
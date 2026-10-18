import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, ShieldAlert, ShieldCheck, Video, MapPin, Star, BookOpen } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import LinkHub from "@/components/LinkHub";
import Seo from "@/components/Seo";
import { PAGE_META, localBusinessSchema } from "@/data/seoConfig";

export default function Prinzip() {
  return (
    <>
      <Seo {...PAGE_META["/prinzip-der-aufloesung"]} schema={[localBusinessSchema()]} />
      <PageHeader
        eyebrow="Die Methode"
        title="Das Prinzip der Auflösung"
        subtitle="Das Prinzip ist einfach zu verstehen: Das Gehirn hat die Fähigkeit, sich sehr schnell umzuorganisieren, neu zu verdrahten. Angst-Netzwerke werden durch Neuverdrahtung zum kompletten Verschwinden gebracht."
        breadcrumbs={[{ label: "Start", to: "/" }, { label: "Methode" }]}
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <ScrollReveal>
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <a
                href="https://www.youtube.com/watch?v=ztWEA_0g1JA"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-[2rem] border border-border bg-navy shadow-xl"
              >
                <img
                  src="https://img.youtube.com/vi/ztWEA_0g1JA/hqdefault.jpg"
                  alt="Hirnplastizität & Ängste – Video auf YouTube"
                  className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-accent/90 shadow-lg shadow-accent/40 transition-transform duration-300 group-hover:scale-110">
                    <svg viewBox="0 0 24 24" className="h-7 w-7 md:h-9 md:w-9 fill-white" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </div>
              </a>
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Erklärt im Video</span>
                <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold text-primary leading-tight">
                  Hirnplastizität & Ängste
                </h2>
                <p className="mt-5 text-foreground/70 leading-relaxed">
                  Es sind neuronale Netzwerke (eine Art Hirnkarte), welche alles in sich tragen. Auch
                  irreale Ängste haben so ein Netzwerk. Dieses wird durch Neuverdrahten zum kompletten
                  Verschwinden gebracht. Das braucht nur selten Hypnose und psychologische
                  Analysen, und man muss nicht leiden wie bei der Konfrontationstherapie.
                </p>
                <Link
                  to="/kontakt"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
                >
                  Termin anfragen <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <ScrollReveal>
              <div className="h-full rounded-2xl border border-border bg-white p-7 shadow-sm">
                <ShieldAlert className="h-9 w-9 text-accent mb-4" />
                <h3 className="font-heading text-lg font-bold text-primary mb-2">1. Irreale Angst</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Die man loshaben will. Bei äusseren Ursachen (meist Phobien) dient eine Intervention
                  aus der systemischen Therapie, kombiniert mit Hirnplastizität. Bei inneren Ursachen
                  (Gedanken, generalisierte Angststörung) ist die Ursache meist eine frühkindliche
                  Prägung.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="h-full rounded-2xl border border-border bg-white p-7 shadow-sm">
                <ShieldCheck className="h-9 w-9 text-accent mb-4" />
                <h3 className="font-heading text-lg font-bold text-primary mb-2">2. Reale Gefahr</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Bitte nicht loswerden, sondern sich in Sicherheit bringen. Sie ist unsere beste
                  Freundin, da sie uns veranlasst, Gefahren zu erkennen und abzuwenden. Sie lässt sich
                  auch nicht wegtherapieren.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="h-full rounded-2xl border border-border bg-white p-7 shadow-sm">
                <Brain className="h-9 w-9 text-accent mb-4" />
                <h3 className="font-heading text-lg font-bold text-primary mb-2">Beispiele</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Flugangst, Redeangst, Platzangst (Klaustrophobie & Agoraphobie), Panikattacken,
                  Tunnelangst, Hundeangst, Angst vor Insekten, Angst vor Autofahren. Der Aufwand
                  beträgt wenige Stunden, das Ziel in über 90% der Fälle erreicht.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="mt-12 rounded-2xl border-l-4 border-accent bg-secondary/40 p-8 md:p-10">
              <Video className="h-10 w-10 text-accent mb-4" />
              <h3 className="font-heading text-2xl font-bold text-primary">Mein Weg</h3>
              <p className="mt-4 text-foreground/70 leading-relaxed max-w-3xl">
                Wie ich zur Auflösung von Ängsten und weiterem kam – das folgende Video erzählt es.
                Wenn Sie mögen, schauen Sie hinein und lernen Sie meine Methode und meine Person
                kennen.
              </p>
              <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-navy shadow-xl">
                <video
                  controls
                  controlsList="nodownload"
                  preload="metadata"
                  className="w-full aspect-video object-cover"
                >
                  <source src="https://media.base44.com/videos/public/6ac4ae046d53c41e9b937a32/b9757668e_VideoAuge-FernsehkameraKopie11.mp4" type="video/mp4" />
                  Ihr Browser unterstützt das Video-Tag nicht.
                </video>
              </div>
            </div>
          </ScrollReveal>
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

      <CTASection />
    </>
  );
}
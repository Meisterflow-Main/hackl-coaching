import React, { useState, useMemo } from "react";
import { ShieldCheck, MapPin, BookOpen } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import LinkHub from "@/components/LinkHub";
import VideoCard from "@/components/VideoCard";
import Seo from "@/components/Seo";
import { videos, videoCategories } from "@/data/videos";
import { PAGE_META, localBusinessSchema } from "@/data/seoConfig";

export default function Videos() {
  const [activeCategory, setActiveCategory] = useState("alle");

  const filteredVideos = useMemo(() => {
    if (activeCategory === "alle") return videos;
    return videos.filter((v) => v.category === activeCategory);
  }, [activeCategory]);

  const breadcrumbs = [
    { label: "Start", to: "/" },
    { label: "Videos" },
  ];

  return (
    <>
      <Seo
        title={PAGE_META.videos?.title || "Videos – Leo Hackl Coaching Thalwil"}
        description={
          PAGE_META.videos?.description ||
          "14 Videos von Leo Hackl: Verhaltensmuster verstehen und auflösen, Ängste überwinden, Leidenschaft im Beruf finden. Hypnosystemische Methode in Thalwil."
        }
        canonicalPath="/videos"
        schema={[
          localBusinessSchema(),
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Videos – Leo Hackl Coaching",
            description:
              "Sämtliche Videos von Leo Hackl: Verhaltensmuster, Ängste, Berufung und Sucht – verständlich erklärt und mit der hypnosystemischen Methode in Thalwil auflösbar.",
            url: "https://www.hacklcoaching.ch/videos",
            isPartOf: {
              "@type": "WebSite",
              name: "Leo Hackl Coaching",
              url: "https://www.hacklcoaching.ch",
            },
            about: ["Verhaltensmuster", "Ängste", "Berufung", "Sucht"],
          },
        ]}
      />
      <PageHeader
        eyebrow="Videothek"
        title="Videos von Leo Hackl"
        subtitle="14 Videos, in denen Leo Hackl die Entstehung, Definition und Auflösung von Verhaltensmustern, Ängsten und Sucht verständlich erklärt – sowie die Suche nach Berufung und Leidenschaft."
        breadcrumbs={breadcrumbs}
      />

      {/* Intro */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Verstehen, was sich verändert
              </span>
              <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold text-primary leading-tight">
                Wie Muster entstehen – und wie sie sich auflösen lassen
              </h2>
              <p className="mt-5 text-lg text-foreground/70 leading-relaxed">
                In diesen Videos erklärt Leo Hackl die Grundlagen seiner Arbeit: was Verhaltensmuster
                sind, wie sie im Gehirn entstehen, warum sie sich so hartnäckig halten – und wie die
                Neuroplastizität des Gehirns es ermöglicht, sie an der Wurzel aufzulösen. Die Videos
                wurden über die Jahre für Klienten und Interessierte aufgenommen und stammen aus der
                Praxis in Thalwil.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          {/* Category Filter */}
          <ScrollReveal>
            <div className="flex flex-wrap gap-2 mb-10">
              {videoCategories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => setActiveCategory(cat.slug)}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                    activeCategory === cat.slug
                      ? "bg-primary text-white shadow-md"
                      : "bg-secondary text-foreground/70 hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredVideos.map((video, i) => (
              <VideoCard key={video.id} video={video} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* LinkHub */}
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
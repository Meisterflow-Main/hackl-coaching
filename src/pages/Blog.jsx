import React, { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, X, Filter } from "lucide-react";
import Seo from "@/components/Seo";
import ScrollReveal from "@/components/ScrollReveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogCard from "@/components/blog/BlogCard";
import BlogSidebar from "@/components/blog/BlogSidebar";
import LinkHub from "@/components/LinkHub";
import { ShieldCheck, MapPin, Star, HelpCircle } from "lucide-react";
import { blogPosts, getUsedCategories } from "@/data/blogPosts";
import { PAGE_META, localBusinessSchema, blogSchema } from "@/data/seoConfig";

const SORT_OPTIONS = [
  { value: "newest", label: "Neueste Beiträge" },
  { value: "oldest", label: "Älteste Beiträge" },
];

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(searchParams.get("kategorie") || "alle");
  const [sort, setSort] = useState("newest");

  const categories = getUsedCategories();

  useEffect(() => {
    const cat = searchParams.get("kategorie");
    if (cat && cat !== category) {
      setCategory(cat);
    }
  }, [searchParams]);

  const filteredPosts = useMemo(() => {
    let posts = [...blogPosts];

    if (category !== "alle") {
      posts = posts.filter((p) => p.category === category);
    }

    if (search.trim()) {
      const q = search.toLowerCase().trim();
      posts = posts.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.categoryName.toLowerCase().includes(q)
      );
    }

    posts.sort((a, b) => {
      const da = new Date(a.date);
      const db = new Date(b.date);
      return sort === "newest" ? db - da : da - db;
    });

    return posts;
  }, [category, search, sort]);

  const handleCategoryChange = (cat) => {
    setCategory(cat);
    if (cat === "alle") {
      searchParams.delete("kategorie");
    } else {
      searchParams.set("kategorie", cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <>
      <Seo
        {...PAGE_META["/blog"]}
        schema={[localBusinessSchema(), blogSchema(blogPosts)]}
      />
      <Breadcrumbs
        items={[{ label: "Start", to: "/" }, { label: "Blog" }]}
      />

      {/* HERO */}
      <section className="bg-navy text-white pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 mb-5">
              <span className="h-2 w-2 rounded-full bg-accent" /> Wissensplattform
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Blog
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-3xl">
              Willkommen im Blog von Leo Hackl Coaching. Hier finden Sie fundierte Ratgeber
              und praktische Tipps rund um die Themen Ängste, Phobien, Burnout,
              Verhaltensmuster und psychologische Beratung. Die Artikel richten sich an
              Menschen, die verstehen möchten, wie psychische Belastungen entstehen und
              wie sie sich dauerhaft auflösen lassen. Regelmässiges Lesen lohnt sich,
              weil Sie Einblicke in eine Methode erhalten, die auf über 30 Jahren Praxis
              und mehr als 2'000 gelösten Fällen basiert. Sie lernen, Warnsignale früh zu
              erkennen, Zusammenhänge zu verstehen und informierte Entscheidungen für
              Ihre psychische Gesundheit zu treffen. Jeder Artikel verbindet
              wissenschaftliche Erkenntnisse mit praktischer Erfahrung aus meiner Praxis
              in Thalwil.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* SUCHE + FILTER */}
      <section className="border-b border-border bg-secondary/30 py-6 sticky top-16 md:top-20 z-30 glass">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Suche */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Artikel durchsuchen..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-full border border-border bg-white pl-10 pr-10 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  aria-label="Suche löschen"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Filter */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                <Filter className="h-3.5 w-3.5" /> Kategorie:
              </span>
              <button
                onClick={() => handleCategoryChange("alle")}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  category === "alle"
                    ? "bg-primary text-white"
                    : "bg-white border border-border text-foreground/70 hover:text-primary hover:border-primary/30"
                }`}
              >
                Alle
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => handleCategoryChange(cat.slug)}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    category === cat.slug
                      ? "bg-primary text-white"
                      : "bg-white border border-border text-foreground/70 hover:text-primary hover:border-primary/30"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
              <div className="ml-2 flex items-center gap-1.5">
                {SORT_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setSort(opt.value)}
                    className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                      sort === opt.value
                        ? "bg-accent text-white"
                        : "bg-white border border-border text-foreground/60 hover:text-accent"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG GRID + SIDEBAR */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
            {/* Blog Cards */}
            <div>
              {filteredPosts.length === 0 ? (
                <div className="rounded-2xl border border-border bg-white p-12 text-center">
                  <p className="text-foreground/60">
                    Keine Artikel gefunden. Versuchen Sie eine andere Suche oder Kategorie.
                  </p>
                </div>
              ) : (
                <>
                  <p className="mb-6 text-sm text-muted-foreground">
                    {filteredPosts.length} {filteredPosts.length === 1 ? "Artikel" : "Artikel"} gefunden
                  </p>
                  <div className="grid gap-6 sm:grid-cols-2">
                    {filteredPosts.map((post, i) => (
                      <ScrollReveal key={post.slug} delay={i * 0.05}>
                        <BlogCard post={post} delay={i * 0.05} />
                      </ScrollReveal>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <BlogSidebar />
            </div>
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
            title: "Bewertungen & FAQ",
            icon: Star,
            links: [
              { to: "/bewertungen", label: "Google Bewertungen (5,0 Sterne)" },
              { to: "/faq", label: "Häufige Fragen (FAQ)" },
              { to: "/ueber-mich", label: "Über Leo Hackl" },
              { to: "/kontakt", label: "Kontakt & Terminvereinbarung" },
            ],
          },
        ]}
      />
    </>
  );
}
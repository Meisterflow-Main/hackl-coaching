import React, { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Calendar, Clock, User, ArrowRight, ChevronRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import Seo from "@/components/Seo";
import ScrollReveal from "@/components/ScrollReveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/blog/TableOfContents";
import ArticleCTA from "@/components/blog/ArticleCTA";
import BlogSidebar from "@/components/blog/BlogSidebar";
import BlogCard from "@/components/blog/BlogCard";
import LinkHub from "@/components/LinkHub";
import { ShieldCheck, MapPin, Star, HelpCircle } from "lucide-react";
import { getPostBySlug, getRelatedPosts } from "@/data/blogPosts";
import { localBusinessSchema, faqPageSchema, blogPostingSchema, BASE_URL } from "@/data/seoConfig";

// ── Inline-Link-Parser: [[Text|/pfad]] → <Link> ────────────────────
function renderInlineText(text) {
  const parts = [];
  const regex = /\[\[(.+?)\|(.+?)\]\]/g;
  let lastIndex = 0;
  let match;
  let i = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <Link
        key={`link-${i}`}
        to={match[2]}
        className="font-semibold text-accent hover:underline"
      >
        {match[1]}
      </Link>
    );
    lastIndex = match.index + match[0].length;
    i++;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

// ── Content-Block-Renderer ────────────────────────────────────────
function ContentBlock({ block }) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          id={block.id}
          className="scroll-mt-28 mt-10 mb-4 font-heading text-2xl md:text-3xl font-bold text-primary leading-tight"
        >
          {block.text}
        </h2>
      );

    case "h3":
      return (
        <h3
          id={block.id}
          className="scroll-mt-28 mt-8 mb-3 font-heading text-xl md:text-2xl font-bold text-primary"
        >
          {block.text}
        </h3>
      );

    case "p":
      return (
        <p className="mb-4 text-foreground/80 leading-relaxed">
          {renderInlineText(block.text)}
        </p>
      );

    case "ul":
      return (
        <ul className="mb-5 space-y-2">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-foreground/80 leading-relaxed">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{renderInlineText(item)}</span>
            </li>
          ))}
        </ul>
      );

    case "ol":
      return (
        <ol className="mb-5 space-y-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-foreground/80 leading-relaxed">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                {i + 1}
              </span>
              <span className="pt-0.5">{renderInlineText(item)}</span>
            </li>
          ))}
        </ol>
      );

    case "table":
      return (
        <div className="mb-6 overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary/5">
                {block.headers.map((h, i) => (
                  <th
                    key={i}
                    className="px-4 py-3 text-left font-heading font-semibold text-primary"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr
                  key={ri}
                  className={ri % 2 === 0 ? "bg-white" : "bg-secondary/30"}
                >
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-4 py-3 text-foreground/70">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "quote":
      return (
        <blockquote className="my-6 rounded-2xl border-l-4 border-accent bg-secondary/40 p-6">
          <p className="text-lg font-heading font-medium text-primary italic leading-relaxed">
            {block.text}
          </p>
          {block.author && (
            <footer className="mt-3 text-sm text-muted-foreground">
              — {block.author}
            </footer>
          )}
        </blockquote>
      );

    case "infobox":
      return (
        <div className="my-6 overflow-hidden rounded-2xl border border-accent/20 bg-gradient-to-br from-primary/5 to-accent/5 p-6">
          <h3 className="font-heading text-lg font-bold text-primary">
            {block.title}
          </h3>
          <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
            {renderInlineText(block.text)}
          </p>
          {block.to && (
            <Link
              to={block.to}
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:gap-2.5 transition-all"
            >
              {block.linkText || "Mehr erfahren"} <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      );

    default:
      return null;
  }
}

// ── FAQ-Sektion ────────────────────────────────────────────────────
function FAQSection({ faq }) {
  const [open, setOpen] = React.useState(0);

  return (
    <section className="mt-12">
      <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-6">
        Häufige Fragen
      </h2>
      <div className="space-y-3">
        {faq.map((item, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-2xl border border-border bg-white"
          >
            <button
              onClick={() => setOpen(open === i ? -1 : i)}
              className="flex w-full items-center justify-between gap-4 p-5 text-left"
            >
              <span className="font-heading font-semibold text-primary">
                {item.question}
              </span>
              <ChevronRight
                className={`h-5 w-5 shrink-0 text-accent transition-transform ${
                  open === i ? "rotate-90" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                open === i ? "max-h-96" : "max-h-0"
              }`}
            >
              <p className="px-5 pb-5 text-foreground/70 leading-relaxed">
                {renderInlineText(item.answer)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Verwandte Artikel ──────────────────────────────────────────────
function RelatedArticles({ posts }) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-12">
      <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-6">
        Verwandte Artikel
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {posts.map((post, i) => (
          <ScrollReveal key={post.slug} delay={i * 0.1}>
            <BlogCard post={post} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

// ── Hauptkomponente ────────────────────────────────────────────────
export default function BlogArticle() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const related = getRelatedPosts(slug, 2);

  return (
    <>
      <Seo
        title={post.seoTitle}
        description={post.metaDescription}
        canonicalPath={`/blog/${post.slug}`}
        ogImage={post.heroImage}
        ogType="article"
        schema={[
          localBusinessSchema(),
          blogPostingSchema(post),
          faqPageSchema(post.faq),
        ]}
      />
      <Breadcrumbs
        items={[
          { label: "Start", to: "/" },
          { label: "Blog", to: "/blog" },
          { label: post.title },
        ]}
      />

      {/* HERO */}
      <section className="bg-navy text-white pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <ScrollReveal>
            <Link
              to={`/blog?kategorie=${post.category}`}
              className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white mb-4"
            >
              {post.categoryName}
            </Link>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {post.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-white/60">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" /> {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" /> {post.dateDisplay}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" /> {post.readingTime} Min Lesezeit
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* HERO IMAGE */}
      <div className="mx-auto max-w-4xl px-5 lg:px-8 -mt-8">
        <ScrollReveal delay={0.1}>
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <Image
              src={post.heroImage}
              alt={post.title}
              fittingType="fill"
              className="aspect-[16/9] w-full"
            />
          </div>
        </ScrollReveal>
      </div>

      {/* CONTENT + SIDEBAR */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
            {/* Article Content */}
            <article className="max-w-3xl">
              <div className="prose prose-lg max-w-none">
                {post.sections.map((block, i) => (
                  <ContentBlock key={i} block={block} />
                ))}
              </div>

              {/* FAQ */}
              <FAQSection faq={post.faq} />

              {/* Final CTA */}
              <ArticleCTA variant="final" />

              {/* Related Articles */}
              <RelatedArticles posts={related} />

              {/* Interne Verlinkung zu Money Pages & Services */}
              <LinkHub
                bg="bg-white"
                groups={[
                  {
                    title: "Dienstleistungen",
                    icon: ShieldCheck,
                    links: [
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
            </article>

            {/* Sidebar (TOC + BlogSidebar) */}
            <div className="space-y-8 lg:sticky lg:top-24 lg:self-start">
              <TableOfContents sections={post.sections} />
              <BlogSidebar currentSlug={slug} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
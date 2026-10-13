import React from "react";
import { Link } from "react-router-dom";
import { Clock, ArrowRight, Phone, MessageCircle } from "lucide-react";
import { getNewestPosts, getPopularPosts, getUsedCategories } from "@/data/blogPosts";

export default function BlogSidebar({ currentSlug }) {
  const newest = getNewestPosts(4).filter((p) => p.slug !== currentSlug).slice(0, 3);
  const popular = getPopularPosts(4).filter((p) => p.slug !== currentSlug).slice(0, 3);
  const categories = getUsedCategories();

  return (
    <aside className="space-y-6">
      {/* Kontakt CTA */}
      <div className="rounded-2xl bg-navy p-6 text-white">
        <h3 className="font-heading text-lg font-bold">Jetzt Termin anfragen</h3>
        <p className="mt-2 text-sm text-white/70 leading-relaxed">
          Sie haben Fragen oder möchten ein unverbindliches Erstgespräch? Ich freue mich auf Ihre Anfrage.
        </p>
        <div className="mt-4 space-y-2">
          <Link
            to="/kontakt"
            className="flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Kontakt aufnehmen <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="https://wa.me/41794335072"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold hover:bg-white/10 transition-colors"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <a
            href="tel:0794335072"
            className="flex items-center justify-center gap-2 px-5 py-2 text-sm font-semibold text-white/80 hover:text-white transition-colors"
          >
            <Phone className="h-4 w-4" /> 079 433 50 72
          </a>
        </div>
      </div>

      {/* Kategorien */}
      <div className="rounded-2xl border border-border bg-white p-6">
        <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">
          Kategorien
        </h3>
        <ul className="space-y-1.5">
          {categories.map((cat) => (
            <li key={cat.slug}>
              <Link
                to={`/blog?kategorie=${cat.slug}`}
                className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-foreground/80 hover:bg-primary/10 hover:text-primary transition-colors"
              >
                {cat.name}
                <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100" />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Neueste Beiträge */}
      <div className="rounded-2xl border border-border bg-white p-6">
        <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">
          Neueste Beiträge
        </h3>
        <ul className="space-y-3">
          {newest.map((post) => (
            <li key={post.slug}>
              <Link
                to={`/blog/${post.slug}`}
                className="group flex gap-3"
              >
                <div className="flex-1">
                  <p className="text-sm font-semibold text-primary group-hover:text-accent transition-colors leading-snug">
                    {post.title}
                  </p>
                  <span className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" /> {post.readingTime} Min
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Beliebte Beiträge */}
      {popular.length > 0 && (
        <div className="rounded-2xl border border-border bg-white p-6">
          <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">
            Beliebte Beiträge
          </h3>
          <ul className="space-y-3">
            {popular.map((post) => (
              <li key={post.slug}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group flex gap-3"
                >
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-primary group-hover:text-accent transition-colors leading-snug">
                      {post.title}
                    </p>
                    <span className="mt-1 inline-block text-xs font-medium text-accent">
                      {post.categoryName}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  );
}
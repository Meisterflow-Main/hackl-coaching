import { useEffect } from "react";
import { BASE_URL, DEFAULT_OG_IMAGE } from "@/data/seoConfig";

/**
 * Zentrale SEO-Komponente – setzt pro Seite:
 * - <title>
 * - meta description
 * - canonical link
 * - robots meta (index/noindex)
 * - Open Graph Tags (title, description, url, type, image, locale)
 * - Twitter Card Tags
 * - JSON-LD Schema-Markup ( beliebig viele Schema-Objekte)
 *
 * Verwendung:
 * <Seo
 *   title="..."
 *   description="..."
 *   canonicalPath="/aengste"
 *   schema={[localBusinessSchema(), serviceSchema(svc)]}
 * />
 */
export default function Seo({
  title,
  description,
  canonicalPath = "",
  noindex = false,
  schema = [],
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
}) {
  useEffect(() => {
    const canonicalUrl = `${BASE_URL}${canonicalPath}`;

    // ── Title ──
    if (title) document.title = title;

    // ── Description ──
    setMeta("name", "description", description);

    // ── Robots ──
    setMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");

    // ── Canonical (nicht bei noindex-Seiten) ──
    if (!noindex) {
      setLink("canonical", canonicalUrl);
    } else {
      removeLink("canonical");
    }

    // ── Open Graph ──
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:type", ogType);
    setMeta("property", "og:image", ogImage);
    setMeta("property", "og:locale", "de_CH");
    setMeta("property", "og:site_name", "Leo Hackl Coaching");

    // ── Twitter ──
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", ogImage);

    // ── JSON-LD Schema ──
    const scriptIds = [];
    if (schema.length > 0) {
      schema.forEach((obj, i) => {
        const id = `seo-schema-${i}`;
        let script = /** @type {HTMLScriptElement | null} */ (document.getElementById(id));
        if (!script) {
          script = document.createElement("script");
          script.type = "application/ld+json";
          script.id = id;
          document.head.appendChild(script);
        }
        script.textContent = JSON.stringify(obj);
        scriptIds.push(id);
      });
    }

    // Cleanup: entferne nur unsere eigenen Schema-Scripts
    return () => {
      scriptIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.remove();
      });
      // Entferne Schema-Scripts von Index-Vorläufern (falls vorhanden)
      document.querySelectorAll('script[id^="seo-schema-"]').forEach((el) => {
        if (!scriptIds.includes(el.id)) el.remove();
      });
    };
  }, [title, description, canonicalPath, noindex, ogImage, ogType, schema]);

  return null;
}

// ── Helpers ──────────────────────────────────────────────────────

function setMeta(attr, key, content) {
  if (!content) return;
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel, href) {
  if (!href) return;
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function removeLink(rel) {
  const el = document.querySelector(`link[rel="${rel}"]`);
  if (el) el.remove();
}
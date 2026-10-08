import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { breadcrumbSchema } from "@/data/seoConfig";

export default function Breadcrumbs({ items, dark = false }) {
  useEffect(() => {
    if (!items || items.length === 0) return;
    const id = "seo-schema-breadcrumb";
    let script = document.getElementById(id);
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = id;
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(breadcrumbSchema(items));
    return () => {
      const el = document.getElementById(id);
      if (el) el.remove();
    };
  }, [items]);

  if (!items || items.length === 0) return null;
  return (
    <nav aria-label="Breadcrumb" className="relative z-10">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-1.5">
              {i > 0 && (
                <ChevronRight
                  className={`h-3.5 w-3.5 shrink-0 ${dark ? "text-white/40" : "text-muted-foreground"}`}
                />
              )}
              {isLast ? (
                <span
                  className={`font-medium ${dark ? "text-white" : "text-primary"}`}
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.to}
                  className={`${dark ? "text-white/70 hover:text-white" : "text-muted-foreground hover:text-primary"} transition-colors`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
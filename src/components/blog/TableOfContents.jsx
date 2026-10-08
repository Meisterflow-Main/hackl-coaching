import React, { useState, useEffect } from "react";

export default function TableOfContents({ sections }) {
  const [activeId, setActiveId] = useState("");

  const headings = sections.filter((s) => s.type === "h2" || s.type === "h3");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -70% 0px" }
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  if (headings.length === 0) return null;

  return (
    <nav className="sticky top-24">
      <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">
        Inhaltsverzeichnis
      </h3>
      <ul className="space-y-1 border-l border-border">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className={`block border-l-2 -ml-px pl-3 py-1.5 text-sm transition-colors ${
                activeId === h.id
                  ? "border-accent text-accent font-semibold"
                  : "border-transparent text-foreground/60 hover:text-primary"
              } ${h.type === "h3" ? "pl-6" : ""}`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

/**
 * Wiederverwendbare Komponente für thematische interne Verlinkungen.
 * Zeigt Gruppen von Links als Karten mit Keyword-relevanten Anchor-Texten.
 *
 * Props:
 * - groups: Array von { title, icon?, links: [{ to, label, description? }] }
 * - bg: Hintergrund-Klasse (default: "bg-secondary/40")
 */
export default function LinkHub({ groups, bg = "bg-secondary/40" }) {
  if (!groups || groups.length === 0) return null;

  return (
    <section className={`py-16 md:py-20 ${bg}`}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group, gi) => (
            <ScrollReveal key={group.title} delay={gi * 0.05}>
              <div className="h-full rounded-2xl border border-border bg-white p-6 shadow-sm">
                {group.icon && <group.icon className="h-6 w-6 text-accent mb-3" />}
                <h3 className="font-heading font-bold text-primary mb-4">{group.title}</h3>
                <ul className="space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="group inline-flex items-start gap-1.5 text-sm text-foreground/70 hover:text-accent transition-colors"
                      >
                        <ArrowRight className="h-3.5 w-3.5 mt-0.5 shrink-0 text-accent/60 group-hover:translate-x-0.5 transition-transform" />
                        <span>
                          <span className="font-medium text-foreground hover:text-accent transition-colors">
                            {link.label}
                          </span>
                          {link.description && (
                            <span className="block text-xs text-muted-foreground mt-0.5">
                              {link.description}
                            </span>
                          )}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
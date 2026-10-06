import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function ServiceCard({ icon: Icon, title, to, description, delay = 0 }) {
  return (
    <ScrollReveal delay={delay}>
      <Link
        to={to}
        className="group relative flex h-full flex-col rounded-2xl border border-border bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(17,75,143,0.12)] hover:border-primary/30"
      >
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
          {Icon && <Icon className="h-6 w-6" />}
        </div>
        <h3 className="font-heading text-lg font-bold text-primary mb-2">{title}</h3>
        <p className="text-sm text-foreground/70 leading-relaxed flex-1">{description}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
          Mehr erfahren
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </Link>
    </ScrollReveal>
  );
}
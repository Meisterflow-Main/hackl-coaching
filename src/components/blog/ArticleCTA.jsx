import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";

export default function ArticleCTA({ variant = "soft" }) {
  if (variant === "featured") {
    return (
      <div className="my-8 overflow-hidden rounded-2xl border border-accent/20 bg-gradient-to-br from-primary/5 to-accent/5 p-6 md:p-8">
        <h3 className="font-heading text-lg font-bold text-primary">
          Brauchen Sie professionelle Unterstützung?
        </h3>
        <p className="mt-2 text-sm text-foreground/70 leading-relaxed max-w-2xl">
          In meiner Praxis in Thalwil löse ich Ängste, Phobien, Verhaltensmuster und Burnout
          nachhaltig auf. Mit über 2'000 gelösten Fällen und 30 Jahren Erfahrung.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
          >
            Termin anfragen <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="https://wa.me/41794335072"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-2.5 text-sm font-semibold text-primary hover:bg-muted transition-colors"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>
      </div>
    );
  }

  if (variant === "final") {
    return (
      <div className="mt-12 rounded-3xl bg-navy p-8 md:p-12 text-white">
        <h2 className="font-heading text-2xl md:text-3xl font-bold leading-tight">
          Bereit für eine dauerhafte Lösung?
        </h2>
        <p className="mt-4 text-white/70 leading-relaxed max-w-2xl">
          Wenn Sie sich in diesem Artikel wiedererkannt haben, zögern Sie nicht.
          Ein unverbindliches Erstgespräch zeigt Ihnen, ob die hypnosystemische Methode
          auch für Sie der richtige Weg ist. Melden Sie sich – ich freue mich auf Ihre Anfrage.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold shadow-lg shadow-accent/30 hover:-translate-y-0.5 transition-all"
          >
            Jetzt Termin anfragen <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="https://wa.me/41794335072"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold hover:bg-white/10 transition-colors"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp schreiben
          </a>
          <a
            href="tel:0447728979"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold hover:bg-white/10 transition-colors"
          >
            <Phone className="h-4 w-4" /> 044 772 89 79
          </a>
        </div>
      </div>
    );
  }

  // soft (inline infobox)
  return (
    <div className="my-6 rounded-2xl border border-border bg-secondary/40 p-5">
      <p className="text-sm text-foreground/80 leading-relaxed">
        <span className="font-semibold text-primary">Tipp: </span>
        Brauchen Sie professionelle Unterstützung? Auf der Seite{" "}
        <Link to="/kontakt" className="font-semibold text-accent hover:underline">
          Kontakt
        </Link>{" "}
        können Sie ein unverbindliches Erstgespräch vereinbaren.
      </p>
    </div>
  );
}
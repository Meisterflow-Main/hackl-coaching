import React from "react";
import { Link } from "react-router-dom";
import { Star, ExternalLink, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const GOOGLE_RATING = "5,0";
const GOOGLE_REVIEW_COUNT = 17;
const GOOGLE_PROFILE_URL =
  "https://www.google.com/maps/place/Leo+Hackl+Coaching/@47.2889657,8.5706351,17z/data=!3m1!4b1!4m6!3m5!1s0x479aa881fc3855a5:0x4b08a8aa8cc1de1e!8m2!3d47.2889657!4d8.5706351!16s%2Fg%2F1tcv0ddk";

function GoogleG({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

function Stars({ className = "h-5 w-5" }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`${className} fill-yellow-400 text-yellow-400`} />
      ))}
    </div>
  );
}

/** Badge – kompakt, inline (z.B. im Hero auf dunklem Hintergrund) */
export function GoogleReviewBadge({ dark = false, className = "" }) {
  return (
    <Link
      to="/bewertungen"
      className={`inline-flex items-center gap-3 rounded-full border px-5 py-2.5 transition-colors ${
        dark
          ? "border-white/20 bg-white/5 hover:bg-white/10"
          : "border-border bg-white hover:bg-secondary/50"
      } ${className}`}
    >
      <GoogleG className="h-5 w-5 shrink-0" />
      <span className={`font-heading font-bold text-lg ${dark ? "text-white" : "text-primary"}`}>
        {GOOGLE_RATING}
      </span>
      <Stars className="h-4 w-4" />
      <span className={`text-sm ${dark ? "text-white/70" : "text-foreground/60"}`}>
        {GOOGLE_REVIEW_COUNT} Google-Bewertungen
      </span>
    </Link>
  );
}

/** Card – mittel, für Sektionen auf Kontakt-/Service-Seiten */
export function GoogleReviewCard({ className = "" }) {
  return (
    <ScrollReveal className={className}>
      <div className="rounded-2xl border border-border bg-white p-7 shadow-sm">
        <div className="flex items-center gap-3 mb-5">
          <GoogleG className="h-8 w-8" />
          <div>
            <p className="font-heading font-bold text-primary">Google Bewertungen</p>
            <p className="text-xs text-muted-foreground">Verifizierte Bewertungen auf Google</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-center">
            <div className="font-heading text-4xl font-bold text-primary">{GOOGLE_RATING}</div>
            <Stars className="h-5 w-5 mt-1" />
          </div>
          <div className="h-12 w-px bg-border" />
          <div>
            <div className="font-heading text-2xl font-bold text-primary">{GOOGLE_REVIEW_COUNT}</div>
            <p className="text-sm text-muted-foreground">Bewertungen auf Google</p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={GOOGLE_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent transition-colors"
          >
            Auf Google ansehen <ExternalLink className="h-4 w-4" />
          </a>
          <Link
            to="/auftrag-bewerten"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-primary hover:bg-secondary/50 transition-colors"
          >
            Bewertung abgeben <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </ScrollReveal>
  );
}

/** Full – gross, für /bewertungen-Seite */
export default function GoogleReviewWidget({ className = "" }) {
  return (
    <ScrollReveal className={className}>
      <div className="relative overflow-hidden rounded-3xl border border-border bg-white p-8 md:p-12 shadow-sm">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="relative">
          <div className="flex items-center gap-4 mb-8">
            <GoogleG className="h-12 w-12" />
            <div>
              <p className="font-heading font-bold text-2xl text-primary">Google Bewertungen</p>
              <p className="text-sm text-muted-foreground">Verifizierte Bewertungen von Google-Nutzern</p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 items-center">
            <div>
              <div className="font-heading text-6xl font-bold text-primary">{GOOGLE_RATING}</div>
              <Stars className="h-7 w-7 mt-2" />
              <p className="mt-2 text-sm text-muted-foreground">Durchschnittliche Bewertung</p>
            </div>
            <div>
              <div className="font-heading text-6xl font-bold text-primary">{GOOGLE_REVIEW_COUNT}</div>
              <p className="mt-2 text-sm text-muted-foreground">Google-Bewertungen</p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={GOOGLE_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white hover:bg-accent transition-colors"
              >
                Alle Bewertungen auf Google <ExternalLink className="h-4 w-4" />
              </a>
              <Link
                to="/auftrag-bewerten"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-primary hover:bg-secondary/50 transition-colors"
              >
                Bewertung abgeben <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <p className="mt-8 pt-6 border-t border-border text-sm text-muted-foreground">
            Alle Bewertungen sind verifizierte Google-Bewertungen und können direkt auf Google
            eingesehen werden. Google überprüft Bewertungen nicht im Voraus, entfernt jedoch
            gefälschte Inhalte, wenn diese erkannt werden.
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}
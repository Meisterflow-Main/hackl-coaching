import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Star } from "lucide-react";
import { regions } from "@/data/regions";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-primary font-heading font-bold text-lg">
                LH
              </span>
              <div className="leading-tight">
                <div className="font-heading font-bold text-xl">Leo Hackl Coaching</div>
                <div className="text-xs uppercase tracking-[0.22em] text-white/60">
                  Psychologische Beratung
                </div>
              </div>
            </div>
            <p className="text-white/70 max-w-md leading-relaxed">
              Psychologische Beratung in Thalwil. Spezialisiert auf die Auflösung von Ängsten,
              Phobien, destruktiven Verhaltensmustern und Burnout – nachhaltig, wirksam und
              menschlich.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.google.com/maps/place/Leo+Hackl+Coaching/@47.2889657,8.5706351,17z/data=!3m1!4b1!4m6!3m5!1s0x479aa881fc3855a5:0x4b08a8aa8cc1de1e!8m2!3d47.2889657!4d8.5706351!16s%2Fg%2F1tcv0ddk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 px-4 py-2 text-sm font-medium transition-colors"
              >
                <Star className="h-4 w-4 fill-current" /> Auf Google bewerten
              </a>
              <Link
                to="/auftrag-bewerten"
                className="inline-flex items-center gap-2 rounded-full bg-accent hover:opacity-90 px-4 py-2 text-sm font-semibold transition-opacity"
              >
                Bewertung abgeben
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-white/60 mb-4">
              Kontakt
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                <span>Zehntenstrasse 17<br />8800 Thalwil, Schweiz</span>
              </li>
              <li>
                <a href="tel:0447728979" className="flex items-center gap-3 hover:text-white">
                  <Phone className="h-4 w-4 shrink-0 text-accent" /> 044 772 89 79
                </a>
              </li>
              <li>
                <a href="tel:0794335072" className="flex items-center gap-3 hover:text-white">
                  <Phone className="h-4 w-4 shrink-0 text-accent" /> 079 433 50 72
                </a>
              </li>
              <li>
                <a href="mailto:info@hacklcoaching.ch" className="flex items-center gap-3 hover:text-white">
                  <Mail className="h-4 w-4 shrink-0 text-accent" /> info@hacklcoaching.ch
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-white/60 mb-4">
              Dienstleistungen
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link to="/dienstleistungen" className="hover:text-white font-semibold">Alle Dienstleistungen</Link></li>
              <li><Link to="/aengste" className="hover:text-white">Ängste & Phobien</Link></li>
              <li><Link to="/verhaltensmuster" className="hover:text-white">Verhaltensmuster</Link></li>
              <li><Link to="/burnout" className="hover:text-white">Burnout</Link></li>
              <li><Link to="/beziehungskonflikte" className="hover:text-white">Beziehungskonflikte</Link></li>
              <li><Link to="/ueber-mich" className="hover:text-white">Über mich</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link to="/kontakt" className="hover:text-white">Kontakt</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-white/60 mb-4">
              Regionen
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link to="/regionen" className="hover:text-white font-semibold">Alle Regionen</Link></li>
              {regions.map((r) => (
                <li key={r.slug}>
                  <Link to={`/regionen/${r.slug}`} className="hover:text-white">
                    {r.ort}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-4 justify-between text-xs text-white/50">
          <p>© {new Date().getFullYear()} Leo Hackl Coaching. Alle Rechte vorbehalten.</p>
          <div className="flex gap-5">
            <Link to="/impressum" className="hover:text-white">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-white">Datenschutzerklärung</Link>
            <Link to="/faq" className="hover:text-white">FAQ</Link>
            <Link to="/auftrag-bewerten" className="hover:text-white">Bewertung abgeben</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
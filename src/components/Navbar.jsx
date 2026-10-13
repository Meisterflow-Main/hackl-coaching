import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, MapPin } from "lucide-react";
import { regions } from "@/data/regions";
import { services } from "@/data/services";

const NAV_LINKS = [
  { label: "Über mich", to: "/ueber-mich" },
  { label: "Erfahrungsberichte", to: "/erfahrungsberichte" },
  { label: "Hypnose & Methode", to: "/hypnose-thalwil" },
  { label: "Videos", to: "/videos" },
  { label: "Kontakt", to: "/kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [regionenOpen, setRegionenOpen] = useState(false);
  const [dienstleistungenOpen, setDienstleistungenOpen] = useState(false);
  const [mobileRegionen, setMobileRegionen] = useState(false);
  const [mobileDienstleistungen, setMobileDienstleistungen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-[0_8px_30px_rgba(17,75,143,0.08)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-3 group">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-heading font-bold text-lg shadow-md">
              LH
            </span>
            <span className="flex flex-col leading-tight">
              <span className={`font-heading font-bold text-lg tracking-tight ${scrolled ? "text-primary" : "text-white"}`}>
                Leo Hackl
              </span>
              <span className={`text-[11px] uppercase tracking-[0.22em] font-medium ${scrolled ? "text-muted-foreground" : "text-white/70"}`}>
                Coaching · Thalwil
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5">
            {/* Dienstleistungen Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDienstleistungenOpen(true)}
              onMouseLeave={() => setDienstleistungenOpen(false)}
            >
              <Link
                to="/dienstleistungen"
                className={`relative flex items-center gap-1 whitespace-nowrap px-2 py-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === "/dienstleistungen" || ["/aengste", "/verhaltensmuster", "/burnout", "/beziehungskonflikte"].some((p) => location.pathname.startsWith(p))
                    ? (scrolled ? "text-primary" : "text-white")
                    : (scrolled ? "text-foreground/80 hover:text-primary" : "text-white/80 hover:text-white")
                }`}
              >
                Dienstleistungen
                <ChevronDown className={`h-3.5 w-3.5 transition-transform ${dienstleistungenOpen ? "rotate-180" : ""}`} />
              </Link>
              {dienstleistungenOpen && (
                <div className="absolute left-0 top-full pt-2 w-64 z-50">
                  <div className="rounded-2xl glass border border-border shadow-xl p-2">
                    <Link
                      to="/dienstleistungen"
                      className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-semibold text-primary hover:bg-primary/10 transition-colors"
                    >
                      Alle Dienstleistungen
                    </Link>
                    <div className="my-1 h-px bg-border" />
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        to={s.link}
                        className="block px-3 py-2.5 rounded-lg text-sm text-foreground/80 hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {NAV_LINKS.map((l) => {
              const active = location.pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`relative whitespace-nowrap px-2 py-2 text-sm font-medium rounded-md transition-colors ${
                    active ? (scrolled ? "text-primary" : "text-white") : (scrolled ? "text-foreground/80 hover:text-primary" : "text-white/80 hover:text-white")
                  }`}
                >
                  {l.label}
                  {active && (
                    <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 bg-accent rounded-full" />
                  )}
                </Link>
              );
            })}
            {/* Regionen Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setRegionenOpen(true)}
              onMouseLeave={() => setRegionenOpen(false)}
            >
              <Link
                to="/regionen"
                className={`relative flex items-center gap-1 whitespace-nowrap px-2 py-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname.startsWith("/regionen") ? (scrolled ? "text-primary" : "text-white") : (scrolled ? "text-foreground/80 hover:text-primary" : "text-white/80 hover:text-white")
                }`}
              >
                Regionen
                <ChevronDown className={`h-3.5 w-3.5 transition-transform ${regionenOpen ? "rotate-180" : ""}`} />
                {location.pathname.startsWith("/regionen") && (
                  <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 bg-accent rounded-full" />
                )}
              </Link>
              {regionenOpen && (
                <div className="absolute right-0 top-full pt-2 w-64 z-50">
                  <div className="rounded-2xl glass border border-border shadow-xl p-2 max-h-[70vh] overflow-y-auto">
                    <Link
                      to="/regionen"
                      className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-semibold text-primary hover:bg-primary/10 transition-colors"
                    >
                      <MapPin className="h-4 w-4" /> Alle Regionen
                    </Link>
                    <div className="my-1 h-px bg-border" />
                    {regions.map((r) => (
                      <Link
                        key={r.slug}
                        to={`/regionen/${r.slug}`}
                        className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-foreground/80 hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        <MapPin className="h-3.5 w-3.5 text-muted-foreground" /> {r.ort}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:0794335072"
              className={`flex items-center gap-2 whitespace-nowrap text-sm font-semibold transition-colors ${
                scrolled ? "text-primary hover:text-accent" : "text-white hover:text-accent"
              }`}
            >
              <Phone className="h-4 w-4" />
              079 433 50 72
            </a>
            <Link
              to="/kontakt"
              className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              Termin anfragen
            </Link>
          </div>

          <button
            className={`lg:hidden inline-flex items-center justify-center h-11 w-11 rounded-full ${scrolled ? "text-primary" : "text-white"}`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Menü"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-y-auto overscroll-contain transition-all duration-300 ${
          open ? "max-h-[calc(100vh-4rem)] opacity-100" : "max-h-0 opacity-0"
        } glass border-t border-border`}
      >
        <nav className="mx-auto max-w-7xl px-5 py-4 flex flex-col gap-1">
          {/* Dienstleistungen mobile */}
          <button
            onClick={() => setMobileDienstleistungen((v) => !v)}
            className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors ${
              location.pathname === "/dienstleistungen" || ["/aengste", "/verhaltensmuster", "/burnout", "/beziehungskonflikte"].some((p) => location.pathname.startsWith(p))
                ? "bg-primary/10 text-primary"
                : "text-foreground/80 hover:bg-muted"
            }`}
          >
            Dienstleistungen
            <ChevronDown className={`h-4 w-4 transition-transform ${mobileDienstleistungen ? "rotate-180" : ""}`} />
          </button>
          {mobileDienstleistungen && (
            <div className="ml-3 pl-3 border-l-2 border-border flex flex-col gap-0.5">
              <Link
                to="/dienstleistungen"
                className="px-4 py-2.5 rounded-lg text-sm font-semibold text-primary hover:bg-primary/10 transition-colors"
              >
                Alle Dienstleistungen
              </Link>
              {services.map((s) => (
                <Link
                  key={s.slug}
                  to={s.link}
                  className="px-4 py-2.5 rounded-lg text-sm text-foreground/70 hover:bg-muted hover:text-primary transition-colors"
                >
                  {s.title}
                </Link>
              ))}
            </div>
          )}
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                location.pathname === l.to
                  ? "bg-primary/10 text-primary"
                  : "text-foreground/80 hover:bg-muted"
              }`}
            >
              {l.label}
            </Link>
          ))}
          {/* Regionen mobile */}
          <button
            onClick={() => setMobileRegionen((v) => !v)}
            className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors ${
              location.pathname.startsWith("/regionen") ? "bg-primary/10 text-primary" : "text-foreground/80 hover:bg-muted"
            }`}
          >
            Regionen
            <ChevronDown className={`h-4 w-4 transition-transform ${mobileRegionen ? "rotate-180" : ""}`} />
          </button>
          {mobileRegionen && (
            <div className="ml-3 pl-3 border-l-2 border-border flex flex-col gap-0.5">
              <Link
                to="/regionen"
                className="px-4 py-2.5 rounded-lg text-sm font-semibold text-primary hover:bg-primary/10 transition-colors"
              >
                Alle Regionen
              </Link>
              {regions.map((r) => (
                <Link
                  key={r.slug}
                  to={`/regionen/${r.slug}`}
                  className="px-4 py-2.5 rounded-lg text-sm text-foreground/70 hover:bg-muted hover:text-primary transition-colors"
                >
                  {r.ort}
                </Link>
              ))}
            </div>
          )}
          <Link
            to="/kontakt"
            className="mt-2 inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-base font-semibold text-white"
          >
            Termin anfragen
          </Link>
          <a
            href="tel:0794335072"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-primary"
          >
            <Phone className="h-4 w-4" /> 079 433 50 72
          </a>
        </nav>
      </div>
    </header>
  );
}
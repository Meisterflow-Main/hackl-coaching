import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const NAV_LINKS = [
  { label: "Start", to: "/" },
  { label: "Ängste & Phobien", to: "/aengste" },
  { label: "Verhaltensmuster", to: "/verhaltensmuster" },
  { label: "Burnout", to: "/burnout" },
  { label: "Beziehung", to: "/beziehungskonflikte" },
  { label: "Über mich", to: "/ueber-mich" },
  { label: "Erfahrungsberichte", to: "/erfahrungsberichte" },
  { label: "Methode", to: "/prinzip-der-aufloesung" },
  { label: "Kontakt", to: "/kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
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
        <div className="flex h-18 md:h-20 items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-3 group">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-heading font-bold text-lg shadow-md">
              LH
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-heading font-bold text-primary text-lg tracking-tight">
                Leo Hackl
              </span>
              <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground font-medium">
                Coaching · Thalwil
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((l) => {
              const active = location.pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`relative px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    active ? "text-primary" : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {l.label}
                  {active && (
                    <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 bg-accent rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:0447728979"
              className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
            >
              <Phone className="h-4 w-4" />
              044 772 89 79
            </a>
            <Link
              to="/kontakt"
              className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              Termin anfragen
            </Link>
          </div>

          <button
            className="lg:hidden inline-flex items-center justify-center h-11 w-11 rounded-full text-primary"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menü"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        } glass border-t border-border`}
      >
        <nav className="mx-auto max-w-7xl px-5 py-4 flex flex-col gap-1">
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
          <Link
            to="/kontakt"
            className="mt-2 inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-base font-semibold text-white"
          >
            Termin anfragen
          </Link>
          <a
            href="tel:0447728979"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-primary"
          >
            <Phone className="h-4 w-4" /> 044 772 89 79
          </a>
        </nav>
      </div>
    </header>
  );
}
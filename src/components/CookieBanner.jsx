import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const KEY = "hackl_cookie_consent";

const DEFAULT_CONSENT = {
  necessary: true,
  fonts: false,
  statistics: false,
};

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [consent, setConsent] = useState(DEFAULT_CONSENT);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(KEY);
      if (!stored) {
        setVisible(true);
      } else {
        const parsed = JSON.parse(stored);
        if (parsed && typeof parsed === "object") {
          setConsent({ ...DEFAULT_CONSENT, ...parsed });
        }
      }
    } catch {
      setVisible(true);
    }

    const handleReopen = () => setVisible(true);
    window.addEventListener("reopen-cookie-banner", handleReopen);
    return () => window.removeEventListener("reopen-cookie-banner", handleReopen);
  }, []);

  const save = (newConsent) => {
    try {
      localStorage.setItem(KEY, JSON.stringify(newConsent));
    } catch {}
    setConsent(newConsent);
    setVisible(false);
    setShowSettings(false);
    window.dispatchEvent(new Event("cookie-consent-changed"));
  };

  const acceptAll = () => save({ necessary: true, fonts: true, statistics: true });
  const declineAll = () => save({ necessary: true, fonts: false, statistics: false });
  const saveSelection = () => save(consent);

  const toggleCategory = (cat) => {
    if (cat === "necessary") return; // cannot disable
    setConsent((c) => ({ ...c, [cat]: !c[cat] }));
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[60] p-3 sm:p-4">
      <div className="mx-auto max-w-5xl rounded-2xl glass border border-border shadow-2xl p-4 sm:p-5 md:p-6">
        {!showSettings ? (
          <div className="flex flex-col md:flex-row md:items-center gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-foreground/80 flex-1 leading-relaxed">
              Wir verwenden Cookies, um Ihre Erfahrung zu verbessern. Mit Klick auf „Alle akzeptieren"
              stimmen Sie der Nutzung zu. Details in unserer{" "}
              <Link to="/datenschutz" className="text-primary font-semibold underline">
                Datenschutzerklärung
              </Link>
              .
            </p>
            <div className="flex flex-col sm:flex-row gap-2 shrink-0">
              <button
                onClick={declineAll}
                className="rounded-full px-4 py-2.5 text-xs sm:text-sm font-medium text-foreground/70 border border-border hover:bg-muted transition-colors text-center"
              >
                Weiter ohne Einwilligung
              </button>
              <button
                onClick={() => setShowSettings(true)}
                className="rounded-full px-4 py-2.5 text-xs sm:text-sm font-medium text-foreground/70 border border-border hover:bg-muted transition-colors text-center"
              >
                Einstellungen
              </button>
              <button
                onClick={acceptAll}
                className="rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-primary hover:bg-accent transition-colors text-center"
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <h3 className="font-heading text-sm font-bold text-primary">Cookie-Einstellungen</h3>
            <p className="text-xs text-foreground/70">
              Wählen Sie, welche Kategorien Sie zulassen möchten. Technisch notwendige Cookies sind
              für den Betrieb der Website erforderlich.
            </p>

            {/* Necessary */}
            <div className="flex items-center justify-between gap-4 py-2 border-t border-border">
              <div>
                <p className="text-sm font-semibold text-foreground">Technisch notwendig</p>
                <p className="text-xs text-muted-foreground">Speicherung der Einwilligung, grundlegende Website-Funktionen.</p>
              </div>
              <span className="text-xs font-semibold text-muted-foreground px-3 py-1.5 rounded-full bg-muted">Immer aktiv</span>
            </div>

            {/* Fonts */}
            <div className="flex items-center justify-between gap-4 py-2 border-t border-border">
              <div>
                <p className="text-sm font-semibold text-foreground">Externe Schriftarten (Google Fonts)</p>
                <p className="text-xs text-muted-foreground">Lädt Poppins und Inter von Google. Überträgt IP-Adresse an Google (USA).</p>
              </div>
              <button
                onClick={() => toggleCategory("fonts")}
                className={`relative h-6 w-11 rounded-full transition-colors shrink-0 ${
                  consent.fonts ? "bg-primary" : "bg-border"
                }`}
                aria-label="Google Fonts umschalten"
              >
                <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
                  consent.fonts ? "translate-x-5" : "translate-x-0.5"
                }`} />
              </button>
            </div>

            {/* Statistics */}
            <div className="flex items-center justify-between gap-4 py-2 border-t border-border">
              <div>
                <p className="text-sm font-semibold text-foreground">Statistik & Analyse</p>
                <p className="text-xs text-muted-foreground">Aktuell nicht in Verwendung. Für künftige Nutzungsanalyse.</p>
              </div>
              <button
                onClick={() => toggleCategory("statistics")}
                className={`relative h-6 w-11 rounded-full transition-colors shrink-0 ${
                  consent.statistics ? "bg-primary" : "bg-border"
                }`}
                aria-label="Statistik umschalten"
              >
                <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
                  consent.statistics ? "translate-x-5" : "translate-x-0.5"
                }`} />
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 pt-3 border-t border-border">
              <button
                onClick={saveSelection}
                className="rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-primary hover:bg-accent transition-colors text-center flex-1"
              >
                Auswahl speichern
              </button>
              <button
                onClick={acceptAll}
                className="rounded-full px-5 py-2.5 text-xs sm:text-sm font-medium text-foreground/70 border border-border hover:bg-muted transition-colors text-center"
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
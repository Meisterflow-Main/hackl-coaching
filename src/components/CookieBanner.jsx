import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const KEY = "hackl_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try { localStorage.setItem(KEY, "all"); } catch {}
    setVisible(false);
  };
  const decline = () => {
    try { localStorage.setItem(KEY, "none"); } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[60] p-4">
      <div className="mx-auto max-w-5xl rounded-2xl glass border border-border shadow-2xl p-5 md:p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <p className="text-sm text-foreground/80 flex-1 leading-relaxed">
            Wir verwenden Cookies, um Ihre Erfahrung zu verbessern. Mit Klick auf „Alle akzeptieren"
            stimmen Sie der Nutzung zu. Details in unserer{" "}
            <Link to="/datenschutz" className="text-primary font-semibold underline">
              Datenschutzerklärung
            </Link>
            .
          </p>
          <div className="flex gap-2 shrink-0">
            <button
              onClick={decline}
              className="rounded-full px-4 py-2.5 text-sm font-medium text-foreground/70 border border-border hover:bg-muted transition-colors"
            >
              Weiter ohne Einwilligung
            </button>
            <button
              onClick={accept}
              className="rounded-full px-5 py-2.5 text-sm font-semibold text-white bg-primary hover:bg-accent transition-colors"
            >
              Alle akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
import { useEffect } from "react";

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap";
const CONSENT_KEY = "hackl_cookie_consent";

export default function FontLoader() {
  useEffect(() => {
    const loadFonts = () => {
      if (document.getElementById("google-fonts-stylesheet")) return;
      const link = document.createElement("link");
      link.id = "google-fonts-stylesheet";
      link.rel = "stylesheet";
      link.href = FONT_HREF;
      document.head.appendChild(link);
    };

    const checkConsent = () => {
      try {
        const raw = localStorage.getItem(CONSENT_KEY);
        if (!raw) return;
        const consent = JSON.parse(raw);
        if (consent && consent.fonts === true) loadFonts();
      } catch {
        // ignore parse errors
      }
    };

    checkConsent();
    window.addEventListener("cookie-consent-changed", checkConsent);
    return () => window.removeEventListener("cookie-consent-changed", checkConsent);
  }, []);

  return null;
}
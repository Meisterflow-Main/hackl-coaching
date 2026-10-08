import React from "react";
import { MessageCircle } from "lucide-react";

const PHONE = "41794335072";
const MESSAGE =
  "Hallo, ich interessiere mich für Ihre Dienstleistung und möchte gerne mehr Informationen erhalten.";
const WHATSAPP_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

const ARIA_LABEL =
  "WhatsApp schreiben – beim Klick werden Daten an Meta/WhatsApp übertragen";
const TITLE =
  "Beim Klick werden Daten an Meta/WhatsApp übertragen. Datenschutzerklärung beachten.";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2 animate-fade-up">
      {/* Desktop: Pill button with text + trust hint */}
      <div className="hidden md:flex flex-col items-end gap-1.5">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ARIA_LABEL}
          title={TITLE}
          className="flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-white shadow-xl shadow-[#25D366]/30 hover:scale-105 hover:shadow-[#25D366]/50 transition-all"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-sm font-semibold">WhatsApp Anfrage</span>
        </a>
        <p className="text-xs text-muted-foreground/80 max-w-[180px] text-right leading-tight">
          Antwort meist innerhalb kurzer Zeit
        </p>
      </div>

      {/* Mobile: Round icon-only button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ARIA_LABEL}
        title={TITLE}
        className="md:hidden flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 hover:scale-110 transition-transform"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
import React from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/41794335072"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp schreiben – beim Klick werden Daten an Meta/WhatsApp übertragen"
      title="Beim Klick werden Daten an Meta/WhatsApp übertragen. Datenschutzerklärung beachten."
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 hover:scale-110 transition-transform"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
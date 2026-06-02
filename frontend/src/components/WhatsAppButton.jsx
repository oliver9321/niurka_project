import React from "react";
import { MessageCircle } from "lucide-react";
import { COMPANY } from "@/data/site";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
        "Hola, me interesa una cotización para un proyecto."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      data-testid="whatsapp-floating-btn"
      className="wa-pulse fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebd5b] text-white grid place-items-center shadow-lg transition-colors"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}

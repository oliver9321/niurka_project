import React, { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_LINKS, COMPANY } from "@/data/site";
import Logo from "@/components/Logo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-white/80 border-b border-zinc-200/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 h-16 sm:h-20 flex items-center justify-between">
        <a href="#inicio" className="flex items-center shrink-0" data-testid="logo-link">
          <Logo className="w-9 h-9 sm:w-10 sm:h-10" />
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-${l.label.toLowerCase()}`}
              className="px-3 py-2 text-sm font-medium text-zinc-700 hover:text-brand-600 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          data-testid="header-whatsapp-cta"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-brand-500 hover:bg-brand-400 text-zinc-950 text-sm font-bold px-5 py-2.5 transition-colors"
        >
          Solicitar Consultoría <ArrowRight className="w-4 h-4" />
        </a>

        <button
          aria-label="Abrir menú"
          data-testid="mobile-menu-toggle"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 rounded-md text-zinc-700"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div
          data-testid="mobile-menu"
          className="lg:hidden border-t border-zinc-200 bg-white/95 backdrop-blur-xl"
        >
          <div className="px-6 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-zinc-800 font-medium border-b border-zinc-100 last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 text-zinc-950 font-bold py-3"
            >
              Solicitar Consultoría
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

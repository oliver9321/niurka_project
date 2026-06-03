import React from "react";
import { Linkedin, Facebook, Instagram, Youtube } from "lucide-react";
import { COMPANY, NAV_LINKS } from "@/data/site";
import Logo from "@/components/Logo";

const services = [
  "BMS",
  "PCI",
  "Seguridad",
  "GRMS",
  "Infraestructura",
  "Audio y video",
  "Servicios",
];

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="relative bg-zinc-950 text-zinc-300 pt-20 pb-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-dark opacity-40" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-y-10 gap-x-8 pb-12 md:pb-14 border-b border-zinc-800">
          <div className="col-span-2 lg:col-span-5">
            <div className="flex items-center gap-3">
              <Logo className="w-11 h-11" showWordmark />
            </div>
            <p className="text-zinc-400 mt-6 max-w-md leading-relaxed">
              Ingeniería especializada en integración de sistemas inteligentes
              para edificios. Más de 12 años protegiendo vidas e inversiones en
              República Dominicana y la región.
            </p>

            <div className="flex items-center gap-3 mt-7" data-testid="footer-social">
              {[
                { icon: Linkedin, href: COMPANY.social.linkedin, name: "linkedin" },
                { icon: Facebook, href: COMPANY.social.facebook, name: "facebook" },
                { icon: Instagram, href: COMPANY.social.instagram, name: "instagram" },
                { icon: Youtube, href: COMPANY.social.youtube, name: "youtube" },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  data-testid={`footer-social-${s.name}`}
                  className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 grid place-items-center text-zinc-400 hover:text-white hover:border-brand-500 hover:bg-brand-500/10 transition-colors"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-zinc-500 font-semibold mb-4 md:mb-5">
              Enlaces rápidos
            </div>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-zinc-300 hover:text-brand-400 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-zinc-500 font-semibold mb-4 md:mb-5">
              Soluciones
            </div>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#soluciones"
                    className="text-zinc-300 hover:text-brand-400 transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-2">
            <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-zinc-500 font-semibold mb-4 md:mb-5">
              Oficinas
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {COMPANY.address}
            </p>
            <a
              href={`tel:${COMPANY.phoneIntl}`}
              className="block mt-4 text-zinc-200 hover:text-brand-400 font-semibold"
            >
              {COMPANY.phone}
            </a>
            <a
              href={`mailto:${COMPANY.email}`}
              className="block text-zinc-400 hover:text-brand-400 text-sm break-all"
            >
              {COMPANY.email}
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pt-8 md:pt-10 text-xs sm:text-sm text-zinc-500">
          <div>© {new Date().getFullYear()} Greentech SRL. Todos los derechos reservados.</div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-brand-400">Términos</a>
            <a href="#" className="hover:text-brand-400">Privacidad</a>
            <a href="#contacto" className="hover:text-brand-400">Contacto</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

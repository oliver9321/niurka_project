import React from "react";
import Marquee from "react-fast-marquee";
import { TECH_PARTNER_BRANDS, CLIENT_BRANDS } from "@/data/brands";
import BrandLogo from "@/components/BrandLogo";

export default function Partners() {
  return (
    <section id="clientes" data-testid="partners-section" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 mb-10 md:mb-14">
        <div className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-brand-600">
          Confianza
        </div>
        <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-zinc-950 mt-4 max-w-3xl leading-[1.1]">
          Trabajamos con las marcas y clientes <span className="text-brand-500">más exigentes</span> de la región.
        </h2>
        <p className="text-zinc-600 mt-4 max-w-2xl text-sm md:text-base leading-relaxed">
          Distribuidores autorizados de líneas internacionales y socio de ingeniería de los grupos hoteleros, retail e industriales más relevantes.
        </p>
      </div>

      <div className="space-y-5 marquee-fade" data-testid="partners-marquee">
        <Marquee gradient={false} speed={42} pauseOnHover>
          {TECH_PARTNER_BRANDS.map((b) => (
            <BrandLogo key={b.name} name={b.name} domain={b.domain} />
          ))}
        </Marquee>

        <div data-testid="clients-marquee">
          <Marquee gradient={false} speed={36} direction="right" pauseOnHover>
            {CLIENT_BRANDS.map((b) => (
              <BrandLogo key={b.name} name={b.name} domain={b.domain} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

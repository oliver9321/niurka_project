import React from "react";
import Marquee from "react-fast-marquee";
import { TECH_PARTNERS, CLIENTS } from "@/data/site";

export default function Partners() {
  return (
    <section id="clientes" data-testid="partners-section" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-12">
        <div className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600">
          Confianza
        </div>
        <h2 className="font-display font-black text-4xl md:text-5xl tracking-tight text-zinc-950 mt-4 max-w-3xl leading-tight">
          Trabajamos con las marcas y clientes <span className="text-brand-500">más exigentes</span> de la región.
        </h2>
      </div>

      <div className="space-y-6 marquee-fade">
        <div data-testid="partners-marquee">
          <Marquee gradient={false} speed={45} pauseOnHover>
            {TECH_PARTNERS.map((p) => (
              <span
                key={p}
                className="mx-8 md:mx-12 font-display font-bold text-2xl md:text-3xl text-zinc-400 hover:text-zinc-900 transition-colors whitespace-nowrap"
              >
                {p}
              </span>
            ))}
          </Marquee>
        </div>

        <div data-testid="clients-marquee">
          <Marquee gradient={false} speed={40} direction="right" pauseOnHover>
            {CLIENTS.map((c) => (
              <span
                key={c}
                className="mx-8 md:mx-12 font-display font-semibold text-xl md:text-2xl text-zinc-500 hover:text-brand-500 transition-colors whitespace-nowrap tracking-tight"
              >
                {c}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

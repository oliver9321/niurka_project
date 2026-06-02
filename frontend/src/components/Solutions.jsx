import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Flame,
  Camera,
  BedDouble,
  Network,
  Speaker,
  Wrench,
  ArrowUpRight,
} from "lucide-react";
import { SOLUTIONS } from "@/data/site";

const ICONS = {
  bms: Building2,
  pci: Flame,
  seguridad: Camera,
  grms: BedDouble,
  infra: Network,
  av: Speaker,
  servicios: Wrench,
};

const IMG = {
  bms: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=70",
  pci: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=70",
  seguridad: "https://images.unsplash.com/photo-1589935447067-5531094415d1?auto=format&fit=crop&w=1200&q=70",
  grms: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=70",
  infra: "https://images.unsplash.com/photo-1551703599-6b3e8379aa8d?auto=format&fit=crop&w=1200&q=70",
  av: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=70",
  servicios: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=1200&q=70",
};

export default function Solutions() {
  return (
    <section id="soluciones" data-testid="solutions-section" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 md:gap-6 mb-10 md:mb-14">
          <div>
            <div className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-brand-600">
              Soluciones
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-zinc-950 mt-3 sm:mt-4 max-w-2xl leading-[1.1]">
              Una sola empresa para <span className="text-brand-500">todos</span> los sistemas de tu edificio.
            </h2>
          </div>
          <p className="text-zinc-600 max-w-md text-sm md:text-[15px] leading-relaxed">
            Siete disciplinas que se integran de forma transparente: automatización, seguridad, vida y conectividad — bajo una sola dirección de ingeniería.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5">
          {SOLUTIONS.map((s, i) => {
            const Icon = ICONS[s.key];
            const big = s.key === "bms" || s.key === "servicios";
            return (
              <motion.a
                href={`#${s.key}`}
                key={s.key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.06 }}
                data-testid={`solution-card-${s.key}`}
                className={`group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white hover:border-brand-500 transition-all ${
                  s.span || ""
                } ${big ? "min-h-[280px] sm:min-h-[340px] md:min-h-[360px]" : "min-h-[240px] sm:min-h-[280px]"}`}
              >
                <div className="absolute inset-0">
                  <img
                    src={IMG[s.key]}
                    alt={s.title}
                    className="w-full h-full object-cover opacity-0 group-hover:opacity-30 transition-opacity duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-zinc-50 group-hover:from-zinc-950/40 group-hover:via-zinc-950/20 group-hover:to-transparent transition-all duration-700" />
                </div>

                <div className="relative h-full p-5 sm:p-7 md:p-8 flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-zinc-950 text-brand-400 grid place-items-center group-hover:bg-brand-500 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
                  </div>

                  <div>
                    <div className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 group-hover:text-brand-300 transition-colors">
                      {s.subtitle}
                    </div>
                    <h3
                      className={`font-display font-black tracking-tight text-zinc-950 group-hover:text-white transition-colors mt-2 ${
                        big ? "text-3xl sm:text-4xl md:text-5xl" : "text-2xl sm:text-3xl"
                      }`}
                    >
                      {s.title}
                    </h3>
                    <p className="text-sm sm:text-base text-zinc-600 group-hover:text-zinc-200 transition-colors mt-2 sm:mt-3 max-w-md leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

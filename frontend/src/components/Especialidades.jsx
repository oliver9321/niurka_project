import React from "react";
import { motion } from "framer-motion";
import {
  Flame,
  Camera,
  KeyRound,
  Building2,
  Network,
  Wrench,
} from "lucide-react";
import { ESPECIALIDADES } from "@/data/site";

const ICONS = { Flame, Camera, KeyRound, Building2, Network, Wrench };

export default function Especialidades() {
  return (
    <section
      data-testid="especialidades-section"
      className="py-20 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 md:gap-6 mb-10 md:mb-14">
          <div>
            <div className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-brand-600">
              Especialidades
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-zinc-950 mt-3 sm:mt-4 max-w-2xl leading-[1.1]">
              Áreas en las que somos <span className="text-brand-500">especialistas</span>.
            </h2>
          </div>
          <p className="text-zinc-600 max-w-md text-sm md:text-[15px] leading-relaxed">
            Diseñamos, instalamos y mantenemos cada disciplina con ingeniería propia y marcas certificadas internacionalmente.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {ESPECIALIDADES.map((e, i) => {
            const Icon = ICONS[e.icon];
            return (
              <motion.article
                key={e.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                data-testid={`especialidad-${e.key}`}
                className="group relative bg-white border border-zinc-200 rounded-3xl p-6 sm:p-7 md:p-8 hover:border-brand-500 hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-zinc-950 text-brand-400 grid place-items-center group-hover:bg-brand-500 group-hover:text-zinc-950 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-zinc-950 mt-6 leading-tight">
                  {e.title}
                </h3>
                <p className="text-zinc-600 mt-3 leading-relaxed text-[15px]">
                  {e.description}
                </p>
                <div className="absolute top-7 right-7 font-mono text-xs text-zinc-300 group-hover:text-brand-500 transition-colors">
                  0{i + 1}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

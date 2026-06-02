import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, ShieldCheck, Activity, Wrench } from "lucide-react";

const features = [
  { icon: Leaf, label: "Eficiencia energética" },
  { icon: ShieldCheck, label: "Seguridad integral" },
  { icon: Activity, label: "Monitoreo 24/7" },
  { icon: Wrench, label: "Soporte post-venta" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      data-testid="hero-section"
      className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-[600px] h-[600px] rounded-full bg-brand-500/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 backdrop-blur px-4 py-1.5 text-xs font-semibold text-zinc-600 tracking-wider uppercase"
              data-testid="hero-eyebrow"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
              Ingeniería en sistemas inteligentes
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="font-display font-black text-[2.75rem] sm:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.04em] text-zinc-950 mt-6"
              data-testid="hero-heading"
            >
              Soluciones inteligentes <br className="hidden sm:block" />
              para edificios{" "}
              <span className="relative inline-block text-brand-500">
                seguros
                <svg viewBox="0 0 200 12" className="absolute -bottom-2 left-0 w-full" preserveAspectRatio="none">
                  <path d="M2 8 Q60 2 120 6 T 198 4" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
              ,<br className="hidden sm:block" /> eficientes y conectados.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 max-w-xl text-lg text-zinc-600 leading-relaxed"
              data-testid="hero-description"
            >
              Integramos tecnología de vanguardia en automatización, protección
              contra incendios, seguridad y conectividad — para maximizar la
              eficiencia, el confort y la operación de tu edificio.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#soluciones"
                data-testid="hero-cta-primary"
                className="inline-flex items-center gap-2 rounded-full bg-zinc-950 text-white font-semibold px-7 py-4 hover:bg-graphite-700 transition-colors"
              >
                Nuestras soluciones <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#nosotros"
                data-testid="hero-cta-secondary"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 text-zinc-900 font-semibold px-7 py-4 hover:border-zinc-900 transition-colors"
              >
                Conoce más
              </a>
            </motion.div>

            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-5">
              {features.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                  className="flex items-center gap-3"
                  data-testid={`hero-feature-${i}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-50 grid place-items-center text-brand-600">
                    <f.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold text-zinc-800 leading-tight">
                    {f.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/37320179/pexels-photo-37320179.jpeg"
                alt="Edificio inteligente"
                className="absolute inset-0 w-full h-full object-cover"
                data-testid="hero-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 backdrop-blur-xl bg-white/90 rounded-2xl p-4 flex items-center gap-3 border border-white/40">
                <div className="w-10 h-10 rounded-xl bg-brand-500 grid place-items-center text-white">
                  <Activity className="w-5 h-5" />
                </div>
                <div className="leading-tight">
                  <div className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">
                    Edificio monitoreado
                  </div>
                  <div className="text-sm font-bold text-zinc-900">
                    98% equipos activos · 23.5°C
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -left-6 top-12 hidden md:block bg-white border border-zinc-200 rounded-2xl shadow-lg px-5 py-4">
              <div className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">
                Consumo energético
              </div>
              <div className="font-display font-black text-2xl text-zinc-950 mt-1">
                –18.4%
              </div>
              <div className="text-xs text-brand-600 font-semibold">
                vs. mes anterior
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

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
      className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden"
    >
      {/* Subtle grid pattern base */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />

      {/* Lime glow blob on the right */}
      <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full bg-brand-500/10 blur-3xl pointer-events-none" />

      {/* Abstract wave pattern behind the headline (left side) */}
      <svg
        className="absolute left-0 top-20 w-[60%] h-[520px] text-zinc-200/70 pointer-events-none -z-0"
        viewBox="0 0 800 600"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="hero-wave" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#A4D233" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#A4D233" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M -100 280 C 120 180, 260 360, 480 280 S 760 200, 900 300"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          opacity="0.7"
        />
        <path
          d="M -100 340 C 140 240, 280 420, 500 340 S 780 260, 920 360"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M -100 400 C 160 300, 300 480, 520 400 S 800 320, 940 420"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          opacity="0.35"
        />
        <ellipse cx="240" cy="320" rx="380" ry="220" fill="url(#hero-wave)" />
      </svg>

      {/* Lime connector curves flowing from top-right toward the image */}
      <svg
        className="absolute top-16 right-0 w-[55%] h-[420px] pointer-events-none -z-0 hidden md:block"
        viewBox="0 0 700 500"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M 700 20 Q 480 80, 520 220 T 360 460"
          stroke="#A4D233"
          strokeOpacity="0.55"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M 700 80 Q 500 160, 560 280 T 420 480"
          stroke="#A4D233"
          strokeOpacity="0.35"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M 700 140 Q 540 220, 600 340 T 480 500"
          stroke="#A4D233"
          strokeOpacity="0.2"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 z-10">
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
              className="font-display font-black text-[2.25rem] sm:text-5xl lg:text-[3.5rem] leading-[1.02] tracking-[-0.035em] text-zinc-950 mt-6"
              data-testid="hero-heading"
            >
              Soluciones inteligentes para edificios{" "}
              <span className="relative inline-block text-brand-500">
                seguros
                <svg
                  viewBox="0 0 200 12"
                  className="absolute -bottom-1.5 left-0 w-full"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 8 Q60 2 120 6 T 198 4"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              , eficientes y{" "}
              <span className="text-brand-500">conectados</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-7 max-w-xl text-[17px] text-zinc-600 leading-relaxed"
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
              className="mt-9 flex flex-wrap items-center gap-4"
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

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-5">
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
                <div className="w-10 h-10 rounded-xl bg-brand-500 grid place-items-center text-zinc-950">
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

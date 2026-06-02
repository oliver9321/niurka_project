import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Award, ShieldCheck } from "lucide-react";
import { VALUES } from "@/data/site";

const VALUE_ICONS = [Heart, Award, ShieldCheck];

export default function About() {
  return (
    <section
      id="nosotros"
      data-testid="about-section"
      className="relative py-24 md:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-brand-600">
                Quiénes somos
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-zinc-950 mt-3 sm:mt-4 leading-[1.1]">
                Más de 12 años <span className="text-brand-500">protegiendo vidas</span> y tu inversión.
              </h2>
              <p className="text-zinc-700 mt-6 leading-relaxed text-lg">
                Somos una compañía integradora de sistemas de seguridad y
                automatización a nivel institucional y residencial. Nuestro
                concepto es <strong>maximizar la eficiencia</strong> de tus
                sistemas, garantizar el confort y la seguridad de tus usuarios,
                con aplicaciones sencillas y productos de alta gama.
              </p>
              <p className="text-zinc-600 mt-5 leading-relaxed">
                Nuestro equipo de profesionales está altamente capacitado,
                entrenado y certificado para gestionar tus proyectos con
                cumplimiento normativo de rigor.
              </p>

              <div className="mt-10 flex items-center gap-6">
                <div className="font-display font-black text-7xl text-zinc-950 leading-none">
                  12<span className="text-brand-500">+</span>
                </div>
                <div className="text-zinc-600 text-sm leading-tight">
                  Años protegiendo vidas <br />
                  e inversiones en toda la región.
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {[
              {
                icon: Target,
                title: "Misión",
                text:
                  "Ser la empresa de ingeniería especializada en integración de sistemas más vanguardista del mercado, brindando soluciones a los proyectos más exigentes que requieran el mejor servicio post-venta.",
              },
              {
                icon: Eye,
                title: "Visión",
                text:
                  "Ser la primera opción como compañía de ingeniería para la resolución de tus proyectos, servicios post-venta e integración de soluciones en todos los mercados verticales.",
              },
            ].map((c, i) => (
              <motion.article
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                data-testid={`about-card-${c.title.toLowerCase()}`}
                className="relative bg-white rounded-2xl border border-zinc-200 p-7 hover:border-brand-500 hover:-translate-y-1 transition-all sm:col-span-1"
              >
                <div className="w-11 h-11 rounded-xl bg-zinc-950 text-brand-400 grid place-items-center">
                  <c.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-xl text-zinc-950 mt-5">
                  {c.title}
                </h3>
                <p className="text-zinc-600 mt-3 leading-relaxed text-[15px]">
                  {c.text}
                </p>
              </motion.article>
            ))}

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="sm:col-span-2 relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 text-white p-7 md:p-9"
            >
              <div className="absolute inset-0 bg-grid-dark opacity-30" />
              <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-brand-500/20 blur-3xl" />

              <div className="relative">
                <div className="text-xs font-bold uppercase tracking-[0.25em] text-brand-400 mb-4">
                  Nuestros valores
                </div>
                <div className="grid md:grid-cols-3 gap-5">
                  {VALUES.map((v, i) => {
                    const Icon = VALUE_ICONS[i];
                    return (
                      <div
                        key={v.title}
                        data-testid={`value-${v.title.toLowerCase()}`}
                      >
                        <div className="w-10 h-10 rounded-xl bg-brand-500/15 text-brand-400 grid place-items-center">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h4 className="font-display font-bold text-lg mt-4">
                          {v.title}
                        </h4>
                        <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                          {v.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.article>
          </div>
        </div>

        {/* 5 Pillars from the corporate deck: Controles · Incendio · Seguridad · Energía · Data */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 pt-10 border-t border-zinc-200"
        >
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-500 mb-5 text-center">
            Cinco pilares
          </div>
          <div className="flex flex-wrap justify-center items-center gap-y-4 gap-x-2 md:gap-x-6">
            {["Controles", "Incendio", "Seguridad", "Energía", "Data"].map((p, i) => (
              <React.Fragment key={p}>
                <span className="font-display font-bold text-xl md:text-2xl tracking-tight text-zinc-900">
                  {p}
                </span>
                {i < 4 && (
                  <span className="text-brand-500 font-display font-black text-2xl md:text-3xl">
                    ·
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Award } from "lucide-react";

export default function About() {
  return (
    <section
      id="nosotros"
      data-testid="about-section"
      className="relative py-24 md:py-32 bg-zinc-50/60"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600">
                Nosotros
              </div>
              <h2 className="font-display font-black text-4xl md:text-5xl tracking-tight text-zinc-950 mt-4 leading-tight">
                Ingeniería que <span className="text-brand-500">protege e impulsa</span> tus inversiones.
              </h2>
              <p className="text-zinc-600 mt-6 leading-relaxed text-lg">
                Greentech SRL es una empresa dominicana especializada en
                integración de sistemas inteligentes para edificios. Desde
                hace más de 12 años protegemos vidas, optimizamos operaciones
                y diseñamos espacios verdaderamente conectados.
              </p>
              <div className="mt-8 flex items-center gap-6">
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
                  "Ser la empresa de ingeniería especializada en integración de sistemas más vanguardista del mercado, brindando soluciones para los proyectos más exigentes con el mejor servicio post-venta.",
              },
              {
                icon: Eye,
                title: "Visión",
                text:
                  "Ser la primera opción como empresa de ingeniería en resolución de proyectos, servicios post-venta e integración de soluciones en todos los mercados verticales.",
              },
              {
                icon: Award,
                title: "Calidad & Cumplimiento",
                text:
                  "Equipo certificado, estándares NFPA y productos UL Listed. Gestión de proyectos con rigor regulatorio y altos estándares de calidad.",
              },
              {
                icon: Award,
                title: "Tecnología & Marcas",
                text:
                  "Distribuidor autorizado de marcas líderes: Johnson Controls, Honeywell, Notifier, Hikvision, Axis, Cisco, Crestron y más.",
              },
            ].map((c, i) => (
              <motion.article
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                data-testid={`about-card-${c.title.toLowerCase()}`}
                className="relative bg-white rounded-2xl border border-zinc-200 p-7 hover:border-brand-500 hover:-translate-y-1 transition-all"
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
          </div>
        </div>
      </div>
    </section>
  );
}

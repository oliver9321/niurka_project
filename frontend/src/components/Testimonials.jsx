import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIOS } from "@/data/site";

export default function Testimonials() {
  return (
    <section data-testid="testimonials-section" className="py-24 md:py-32 bg-zinc-50/60">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="mb-14">
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600">
            Testimonios
          </div>
          <h2 className="font-display font-black text-4xl md:text-5xl tracking-tight text-zinc-950 mt-4 max-w-3xl leading-tight">
            Lo que dicen quienes ya operan con <span className="text-brand-500">Greentech</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {TESTIMONIOS.map((t, i) => (
            <motion.figure
              key={t.name + i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              data-testid={`testimonial-${i}`}
              className="bg-white rounded-3xl border border-zinc-200 p-8 hover:border-brand-500 transition-colors"
            >
              <Quote className="w-6 h-6 text-brand-500" />
              <blockquote className="mt-5 text-zinc-800 leading-relaxed text-[17px]">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-7 pt-5 border-t border-zinc-100">
                <div className="font-display font-bold text-zinc-950">
                  {t.name}
                </div>
                <div className="text-sm text-zinc-500">{t.company}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { motion } from "framer-motion";
import { STATS } from "@/data/site";

export default function Stats() {
  return (
    <section data-testid="stats-section" className="py-20 md:py-24 border-y border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.08 }}
            data-testid={`stat-${i}`}
            className="text-center md:border-r md:last:border-r-0 md:border-zinc-200 px-2"
          >
            <div className="font-display font-black text-5xl md:text-6xl tracking-tighter text-zinc-950">
              {s.value.includes("·") || s.value.length > 6 ? (
                <span className="text-3xl md:text-4xl text-brand-500">
                  {s.value}
                </span>
              ) : (
                <>
                  {s.value.replace(/[^0-9.]/g, "")}
                  <span className="text-brand-500">
                    {s.value.replace(/[0-9.]/g, "")}
                  </span>
                </>
              )}
            </div>
            <div className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-semibold mt-3">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

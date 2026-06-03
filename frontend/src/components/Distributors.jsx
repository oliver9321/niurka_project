import React from "react";
import { motion } from "framer-motion";

const DISTRIBUTORS = [
  // Row 1
  { name: "Johnson Controls", domain: "johnsoncontrols.com" },
  { name: "Metasys", domain: "metasys.com" },
  { name: "Honeywell", domain: "honeywell.com" },
  { name: "Notifier", domain: "notifier-fire.com" },
  { name: "Xtralis", domain: "xtralis.com" },
  { name: "Edwards", domain: "edwardsfiresafety.com" },
  // Row 2
  { name: "Silent Knight", domain: "silentknight.com" },
  { name: "FX", domain: "fxsupervisory.com" },
  { name: "Fire-Lite Alarms", domain: "firelite.com" },
  { name: "Gamewell-FCI", domain: "gamewell-fci.com" },
  { name: "Simplex", domain: "simplex-fire.com" },
  { name: "FireWarden", domain: "firewarden.com" },
  { name: "Kele", domain: "kele.com" },
  { name: "Dwyer", domain: "dwyer-inst.com" },
  // Row 3
  { name: "AJAX", domain: "ajax.systems" },
  { name: "Honeywell Pro-Watch", domain: "honeywell.com" },
  { name: "Bolide", domain: "bolidetechnology.com" },
  { name: "InVid", domain: "invidtech.com" },
  { name: "Axis", domain: "axis.com" },
  { name: "Hikvision", domain: "hikvision.com" },
  { name: "Lenel", domain: "lenels2.com" },
  { name: "ASSA ABLOY", domain: "assaabloy.com" },
  { name: "Kantech", domain: "kantech.com" },
  // Row 4
  { name: "Genesis", domain: "genesiscable.com" },
  { name: "Panduit", domain: "panduit.com" },
  { name: "Cisco", domain: "cisco.com" },
  { name: "Onicon", domain: "onicon.com" },
  { name: "Boon Edam", domain: "boonedam.com" },
  { name: "Wolpac", domain: "wolpac.com" },
  { name: "Savant", domain: "savant.com" },
  { name: "Crestron", domain: "crestron.com" },
  // Row 5
  { name: "Sonos", domain: "sonos.com" },
  { name: "Belimo", domain: "belimo.com" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Distributors() {
  return (
    <section
      id="distribuidores"
      data-testid="distributors-section"
      className="py-20 md:py-32 bg-zinc-50"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-brand-600">
            Distribuidores Autorizados
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-zinc-950 mt-4 leading-[1.1]">
            Líneas de <span className="text-brand-500">prestigio internacional</span>
          </h2>
          <p className="text-zinc-600 mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Nuestra compañía cuenta con líneas de productos de prestigio
            internacional, que garantizan la respuesta, respaldo de garantía y
            soluciones de alto nivel.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {DISTRIBUTORS.map((brand) => (
            <motion.div
              key={brand.name}
              variants={itemVariants}
              className="group relative bg-white border border-zinc-200 rounded-2xl p-4 md:p-5 flex flex-col items-center justify-center gap-2.5 min-h-[100px] hover:border-brand-500 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              data-testid={`distributor-${brand.name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <img
                src={`https://www.google.com/s2/favicons?domain=${brand.domain}&sz=128`}
                alt={brand.name}
                loading="lazy"
                className="h-8 w-8 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <span className="font-display font-semibold text-zinc-700 text-[11px] sm:text-xs text-center leading-tight whitespace-nowrap">
                {brand.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

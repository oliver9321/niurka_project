import React from "react";
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import {
  Bolt,
  Thermometer,
  Activity,
  AlertTriangle,
  Check,
  ArrowRight,
} from "lucide-react";

const energyData = [
  { d: "L", v: 142 },
  { d: "M", v: 128 },
  { d: "X", v: 156 },
  { d: "J", v: 134 },
  { d: "V", v: 118 },
  { d: "S", v: 96 },
  { d: "D", v: 88 },
];

const features = [
  "Monitoreo y control de HVAC, iluminación, energía y más",
  "Ahorro de energía y reducción de costos operativos",
  "Mantenimiento predictivo y detección de fallas",
  "Monitoreo multisitio desde cualquier dispositivo",
  "Reportes y análisis para decisiones inteligentes",
];

const alarms = [
  { t: "AHU-03 · Falla de sensor", time: "Hace 5 min", level: "danger" },
  { t: "Bomba B-12 · Alta temperatura", time: "Hace 15 min", level: "warn" },
  { t: "Generador · Prueba requerida", time: "Hace 1 h", level: "info" },
];

export default function BMSDashboard() {
  return (
    <section
      id="sistemas"
      data-testid="bms-section"
      className="relative py-24 md:py-32 bg-zinc-950 text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-dark opacity-60" />
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-brand-500/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 md:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-brand-400">
                Edificios inteligentes
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight mt-3 sm:mt-4 leading-[1.1]">
                Tu edificio en <span className="text-brand-400">una sola pantalla</span>.
              </h2>
              <p className="text-zinc-400 mt-5 md:mt-6 leading-relaxed text-base md:text-lg">
                Integramos todos tus sistemas en una interfaz única para que
                tengas control total en tiempo real, ahorres energía y tomes
                decisiones con data, no con suposiciones.
              </p>

              <ul className="mt-8 space-y-3" data-testid="bms-features">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-brand-500/20 grid place-items-center text-brand-400 shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-zinc-300 leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                data-testid="bms-cta"
                className="inline-flex items-center gap-2 rounded-full bg-brand-500 hover:bg-brand-400 text-zinc-950 font-bold px-7 py-4 mt-10 transition-colors"
              >
                Conoce más sobre BMS <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl bg-zinc-900/80 backdrop-blur border border-zinc-800 shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-500" />
                </div>
                <div className="font-mono text-[10px] sm:text-xs text-zinc-400 hidden sm:block">
                  greentech.bms · Dashboard general
                </div>
                <div className="text-[10px] sm:text-xs text-zinc-500">en vivo</div>
              </div>

              <div className="p-4 sm:p-5 md:p-6 grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                <KPI
                  icon={Bolt}
                  label="Consumo de energía"
                  value="125,430"
                  unit="kWh"
                  delta="−12.5%"
                  positive
                />
                <KPI
                  icon={Thermometer}
                  label="Temperatura promedio"
                  value="23.5"
                  unit="°C"
                  delta="+1.2°"
                />
                <KPI
                  icon={Activity}
                  label="Equipos activos"
                  value="98"
                  unit="%"
                  delta="+2%"
                  positive
                />

                <div className="col-span-2 md:col-span-2 rounded-2xl bg-zinc-950/60 border border-zinc-800 p-4 sm:p-5">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-[10px] sm:text-xs uppercase tracking-wider text-zinc-500 font-semibold">
                      Consumo semanal · kWh
                    </div>
                    <div className="text-[10px] sm:text-xs text-brand-400 font-mono">−18%</div>
                  </div>
                  <div className="h-36 sm:h-44">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={energyData} margin={{ left: -20, right: 8, top: 8, bottom: 0 }}>
                        <defs>
                          <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#A4D233" stopOpacity={0.55} />
                            <stop offset="100%" stopColor="#A4D233" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid stroke="#27272a" vertical={false} strokeDasharray="3 3" />
                        <XAxis dataKey="d" stroke="#71717a" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                        <YAxis stroke="#71717a" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                        <Tooltip
                          contentStyle={{
                            background: "#0a0a0a",
                            border: "1px solid #27272a",
                            borderRadius: 12,
                            color: "#fafafa",
                          }}
                        />
                        <Area type="monotone" dataKey="v" stroke="#A4D233" strokeWidth={2.5} fill="url(#g1)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="col-span-2 md:col-span-1 rounded-2xl bg-zinc-950/60 border border-zinc-800 p-4 sm:p-5">
                  <div className="text-[10px] sm:text-xs uppercase tracking-wider text-zinc-500 font-semibold mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-3.5 h-3.5" /> Alarmas activas
                  </div>
                  <ul className="space-y-3">
                    {alarms.map((a) => (
                      <li key={a.t} className="flex items-start gap-3">
                        <div
                          className={`mt-1 w-2 h-2 rounded-full ${
                            a.level === "danger"
                              ? "bg-red-500"
                              : a.level === "warn"
                              ? "bg-yellow-500"
                              : "bg-brand-500"
                          }`}
                        />
                        <div>
                          <div className="text-sm text-zinc-200 font-medium leading-tight">
                            {a.t}
                          </div>
                          <div className="text-xs text-zinc-500">{a.time}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function KPI({ icon: Icon, label, value, unit, delta, positive }) {
  return (
    <div className="rounded-2xl bg-zinc-950/60 border border-zinc-800 p-4 sm:p-5">
      <div className="flex items-center justify-between">
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-brand-500/15 text-brand-400 grid place-items-center">
          <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
        </div>
        <span
          className={`text-[10px] sm:text-xs font-mono ${
            positive ? "text-brand-400" : "text-zinc-400"
          }`}
        >
          {delta}
        </span>
      </div>
      <div className="text-[10px] sm:text-xs uppercase tracking-wider text-zinc-500 font-semibold mt-3 sm:mt-4">
        {label}
      </div>
      <div className="font-display font-black text-2xl sm:text-3xl text-white mt-1">
        {value}
        <span className="text-zinc-500 text-sm sm:text-base font-bold ml-1">{unit}</span>
      </div>
    </div>
  );
}

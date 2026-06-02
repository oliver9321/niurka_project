import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { MapPin, Phone, Mail, Send, MessageCircle, CheckCircle2, AlertCircle, UserRound } from "lucide-react";
import { COMPANY, SALES_CONTACTS } from "@/data/site";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const interestOptions = [
  "Building Management System (BMS)",
  "Protección contra incendios (PCI)",
  "Seguridad y videovigilancia",
  "Guest Room Management (GRMS)",
  "Infraestructura y redes",
  "Audio y video",
  "Mantenimiento y servicios",
  "Otro",
];

export default function Contact() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    interes: "",
    mensaje: "",
  });
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const onChange = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "loading", message: "" });
    try {
      const payload = { ...form };
      if (!payload.empresa) delete payload.empresa;
      if (!payload.interes) delete payload.interes;
      await axios.post(`${API}/contact`, payload);
      setStatus({
        state: "ok",
        message: "Gracias, hemos recibido tu mensaje. Te contactaremos pronto.",
      });
      setForm({ nombre: "", email: "", telefono: "", empresa: "", interes: "", mensaje: "" });
    } catch (err) {
      const detail = err?.response?.data?.detail;
      setStatus({
        state: "error",
        message:
          typeof detail === "string"
            ? detail
            : "Ocurrió un problema al enviar el formulario. Inténtalo de nuevo.",
      });
    }
  };

  return (
    <section id="contacto" data-testid="contact-section" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600">
              Contacto
            </div>
            <h2 className="font-display font-black text-4xl md:text-5xl tracking-tight text-zinc-950 mt-4 leading-tight">
              ¿Tienes un <span className="text-brand-500">proyecto</span>?
            </h2>
            <p className="text-zinc-600 mt-5 leading-relaxed text-lg max-w-md">
              Estamos listos para ayudarte. Cuéntanos sobre tu edificio y
              recibirás una consultoría con nuestro equipo de ingeniería.
            </p>

            <div className="mt-10 space-y-4">
              <InfoRow icon={MapPin} title="Oficinas">
                {COMPANY.address}
              </InfoRow>
              <InfoRow icon={Phone} title="Teléfono">
                <a href={`tel:${COMPANY.phoneIntl}`} className="hover:text-brand-600">
                  {COMPANY.phone}
                </a>
              </InfoRow>
              <InfoRow icon={Mail} title="Correo">
                <a href={`mailto:${COMPANY.email}`} className="hover:text-brand-600">
                  {COMPANY.email}
                </a>
              </InfoRow>
            </div>

            <a
              href={`https://wa.me/${COMPANY.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="contact-whatsapp-cta"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1ebd5b] text-white font-semibold px-7 py-4 transition-colors"
            >
              <MessageCircle className="w-5 h-5" /> Escríbenos por WhatsApp
            </a>

            {/* Sales contacts from the corporate deck */}
            <div className="mt-10" data-testid="sales-contacts">
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-500 mb-4">
                Contactos directos
              </div>
              <div className="grid sm:grid-cols-1 gap-3">
                {SALES_CONTACTS.map((c) => (
                  <div
                    key={c.email}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white border border-zinc-200 hover:border-brand-500 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-brand-50 text-brand-600 grid place-items-center shrink-0">
                      <UserRound className="w-4 h-4" />
                    </div>
                    <div className="leading-tight min-w-0 flex-1">
                      <div className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">
                        {c.area}
                      </div>
                      <div className="font-display font-bold text-zinc-950 text-sm mt-0.5">
                        {c.name}
                      </div>
                      <div className="text-xs text-zinc-600 mt-1 flex flex-wrap gap-x-3 gap-y-0.5">
                        <a href={`tel:${c.mobile}`} className="hover:text-brand-600">
                          {c.mobile}
                        </a>
                        <a href={`mailto:${c.email}`} className="hover:text-brand-600 break-all">
                          {c.email}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 rounded-2xl overflow-hidden border border-zinc-200 aspect-[16/9]">
              <iframe
                title="Greentech SRL ubicación"
                src="https://www.google.com/maps?q=Diamond+Mall+Av+Los+Proceres+Santo+Domingo&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            data-testid="contact-form"
            className="lg:col-span-7 bg-white border border-zinc-200 rounded-3xl p-7 md:p-10"
          >
            <div
              data-testid="contact-form-intro"
              className="mb-7 pb-6 border-b border-zinc-200"
            >
              <p className="text-zinc-700 leading-relaxed text-[15px]">
                ¿Necesita una solución de <span className="font-bold text-zinc-950">seguridad</span>,{" "}
                <span className="font-bold text-zinc-950">incendio</span> o{" "}
                <span className="font-bold text-zinc-950">automatización</span>? Nuestro equipo de especialistas está listo para asesorarle.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Nombre completo" required>
                <input
                  data-testid="contact-input-nombre"
                  required
                  type="text"
                  value={form.nombre}
                  onChange={onChange("nombre")}
                  className="input-base"
                  placeholder="Juan Pérez"
                />
              </Field>
              <Field label="Email" required>
                <input
                  data-testid="contact-input-email"
                  required
                  type="email"
                  value={form.email}
                  onChange={onChange("email")}
                  className="input-base"
                  placeholder="tu@empresa.com"
                />
              </Field>
              <Field label="Teléfono" required>
                <input
                  data-testid="contact-input-telefono"
                  required
                  type="tel"
                  value={form.telefono}
                  onChange={onChange("telefono")}
                  className="input-base"
                  placeholder="809-000-0000"
                />
              </Field>
              <Field label="Empresa">
                <input
                  data-testid="contact-input-empresa"
                  type="text"
                  value={form.empresa}
                  onChange={onChange("empresa")}
                  className="input-base"
                  placeholder="Tu empresa"
                />
              </Field>
              <div className="sm:col-span-2">
                <Field label="¿En qué estás interesado?">
                  <select
                    data-testid="contact-input-interes"
                    value={form.interes}
                    onChange={onChange("interes")}
                    className="input-base appearance-none cursor-pointer"
                  >
                    <option value="">Selecciona una opción</option>
                    {interestOptions.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </Field>
              </div>
              <div className="sm:col-span-2">
                <Field label="Mensaje" required>
                  <textarea
                    data-testid="contact-input-mensaje"
                    required
                    rows={5}
                    value={form.mensaje}
                    onChange={onChange("mensaje")}
                    className="input-base resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                </Field>
              </div>
            </div>

            <div className="mt-7 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
              <button
                type="submit"
                disabled={status.state === "loading"}
                data-testid="contact-submit-btn"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 hover:bg-graphite-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold px-8 py-4 transition-colors"
              >
                {status.state === "loading" ? "Enviando..." : (
                  <>Enviar mensaje <Send className="w-4 h-4" /></>
                )}
              </button>

              {status.state === "ok" && (
                <div
                  data-testid="contact-status-ok"
                  className="flex items-center gap-2 text-brand-600 text-sm font-medium"
                >
                  <CheckCircle2 className="w-5 h-5" /> {status.message}
                </div>
              )}
              {status.state === "error" && (
                <div
                  data-testid="contact-status-error"
                  className="flex items-center gap-2 text-red-600 text-sm font-medium"
                >
                  <AlertCircle className="w-5 h-5" /> {status.message}
                </div>
              )}
            </div>
          </motion.form>
        </div>
      </div>

      <style>{`
        .input-base {
          width: 100%;
          background: white;
          border: 1px solid #e4e4e7;
          border-radius: 12px;
          padding: 12px 14px;
          font-size: 15px;
          color: #18181b;
          outline: none;
          transition: border-color .15s, box-shadow .15s;
        }
        .input-base::placeholder { color: #a1a1aa; }
        .input-base:focus {
          border-color: #A4D233;
          box-shadow: 0 0 0 4px rgba(164,210,51,0.18);
        }
      `}</style>
    </section>
  );
}

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 mb-2">
        {label} {required && <span className="text-brand-500">*</span>}
      </span>
      {children}
    </label>
  );
}

function InfoRow({ icon: Icon, title, children }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-xl bg-brand-50 grid place-items-center text-brand-600 shrink-0">
        <Icon className="w-5 h-5" />
      </div>
      <div className="leading-snug">
        <div className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">
          {title}
        </div>
        <div className="text-zinc-800 mt-1 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

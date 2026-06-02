# PRD — Greentech SRL · Sitio Corporativo

## Problema original
> "vamos a crear una pagina web te pasare lo documento necesario para que la trabaje"
> Aclaración del usuario: "quiero un toque moderno que no se vea muy cargada que tenga su visión su misión y todo lo que lleva una página" y "trabaja el color del mismo tono del logo".

## Visión del producto
Sitio corporativo moderno, minimalista y profesional para **Greentech SRL** (Rep. Dominicana, 12+ años) — empresa de ingeniería especializada en integración de sistemas inteligentes para edificios (BMS, PCI, Seguridad, GRMS, Infraestructura, Audio/Video, Servicios).

## Identidad / Marca
- Colores: verde lima **#A4D233** (brand-500) + grafito/gris (graphite-* y zinc).
- Tipografías: **Outfit** (display, headings) + **Satoshi** (body) — distintivas, no genéricas.
- Logo: SVG inspirado en el original (G gris + R verde lima con franja en degradado).
- Tono: moderno, técnico, confiable, no recargado (mucho whitespace, jerarquía clara).

## Personas
1. **Director de Operaciones / Facility Manager** — busca optimizar consumo y operación de un edificio existente.
2. **Gerente de Proyectos / Arquitecto** — necesita un partner único para todos los sistemas low-voltage de un nuevo desarrollo.
3. **Dueño / Inversionista hotelero / retail** — busca cumplimiento NFPA, seguridad y experiencia de usuario.

## Arquitectura
- **Frontend**: React 19 + Tailwind + Framer Motion + Recharts + react-fast-marquee + lucide-react. Una sola SPA (`/`) con secciones ancladas.
- **Backend**: FastAPI + MongoDB (Motor). Endpoints `/api/health`, `/api/contact` (POST/GET), `/api/newsletter` (POST), `/api/stats`.
- **Despliegue**: supervisord (frontend :3000, backend :8001), MongoDB local. URL pública vía REACT_APP_BACKEND_URL.

## Lo implementado (Iteración 1 — Jun 2026)
- [x] Header sticky con glassmorphism, navegación 7 secciones, CTA WhatsApp, menú móvil.
- [x] Logo SVG corporativo (`Logo.jsx`).
- [x] Hero impactante: headline animado con resaltado "seguros" en lima, dos CTAs, 4 pills de beneficios, imagen edificio + cards flotantes.
- [x] Sección Nosotros (id `#nosotros`) — Misión, Visión, Calidad/Cumplimiento NFPA-UL, Tecnología/Marcas. Número "12+" grande.
- [x] Soluciones (id `#soluciones`) — Bento grid asimétrico con 7 cards (BMS 6cols, PCI/Seguridad 3cols, GRMS/Infra/AV 4cols, Servicios 12cols). Hover con imagen y overlay oscuro.
- [x] BMS Dashboard mock (id `#sistemas`) en dark theme: 3 KPIs, chart de área (Recharts), lista de alarmas.
- [x] Stats — 4 métricas grandes (12+ años, 350+ proyectos, 120+ clientes, NFPA·UL).
- [x] Partners & Clientes (id `#clientes`) — dos marquees opuestos con marcas tecnológicas y clientes (JW Marriott, Hilton, Barceló, ZARA, IKEA, etc.).
- [x] Testimonios — 3 quotes en cards limpias.
- [x] Contacto (id `#contacto`) — formulario funcional (POST a `/api/contact`), info de contacto, botón WhatsApp grande y mapa de Google embebido (Diamond Mall).
- [x] Footer dark con logo, links, redes sociales, dirección + tipografía gigante "GREENTECH".
- [x] Botón flotante WhatsApp con pulse animation.
- [x] Animaciones de entrada con framer-motion (stagger, viewport).
- [x] data-testid en todos los elementos interactivos.
- [x] Backend con validación Pydantic (EmailStr), persistencia en Mongo, endpoint de stats y newsletter.
- [x] Testing agent: 100% backend (8/8) + 100% frontend (todas las flows pasaron).

## Backlog
**P1**
- [ ] Páginas internas dedicadas por solución (BMS, PCI, Seguridad, etc.) con casos de uso detallados.
- [ ] Sección de proyectos / casos de éxito con galería de fotos reales.
- [ ] Reemplazar logos placeholder de partners/clientes por SVG/PNG oficiales.
- [ ] Integración real de email (Resend/SendGrid) para notificar al equipo cuando llega un mensaje de contacto.
- [ ] Panel admin protegido para revisar mensajes recibidos.

**P2**
- [ ] Versión bilingüe ES/EN.
- [ ] Blog / centro de recursos (whitepapers de eficiencia energética, NFPA, etc.).
- [ ] Carga de PDF (presentación corporativa) descargable desde "Conoce más".
- [ ] SEO: sitemap.xml, robots.txt, Open Graph images.
- [ ] Rate limiting en endpoints públicos.

## Métricas de éxito sugeridas
- Tasa de conversión hero → formulario contacto.
- Clics en WhatsApp.
- Tiempo en BMS Dashboard section.
- Mensajes calificados / mes.

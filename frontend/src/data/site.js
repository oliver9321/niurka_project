// Centralized constants for the Greentech corporate site
export const COMPANY = {
  name: "Greentech",
  legal: "Greentech SRL",
  tagline: "Building Solutions",
  pillars: ["Controles", "Incendio", "Seguridad", "Energía", "Data"],
  phone: "809-594-7986",
  phoneIntl: "+18095947986",
  email: "info@greentech.com.do",
  address:
    "Av. Los Próceres, Diamond Mall, Local 93-A, Arroyo Hondo, Sto. Dgo., Rep. Dom. 10510",
  whatsapp: "18095947986",
  slogan:
    "Recuerda que una inversión ahora, puede librarte de muchos dolores de cabeza mañana.",
  social: {
    linkedin: "#",
    facebook: "#",
    instagram: "#",
    youtube: "#",
  },
};

export const SALES_CONTACTS = [
  {
    area: "Ventas Santo Domingo",
    name: "Niurka Peña",
    mobile: "829-452-7583",
    email: "ventas@greentech.com.do",
  },
  {
    area: "Ventas Zona Este",
    name: "Francis Cedano",
    mobile: "829-452-7583",
    email: "francis.cedano@greentech.com.do",
  },
  {
    area: "Servicio al Cliente",
    name: "Rosmery Grullón",
    mobile: "809-594-7986",
    email: "servicioalcliente@greentech.com.do",
  },
];

export const VALUES = [
  {
    title: "Compromiso",
    description:
      "Dedicación hacia nuestros clientes y las metas de la empresa, atendiendo cada proyecto como propio.",
  },
  {
    title: "Calidad",
    description:
      "Ofrecemos productos y servicios que superan las expectativas, con tecnología de punta y respaldo total.",
  },
  {
    title: "Integridad",
    description:
      "Actuamos con honestidad y ética en todo momento, con garantía y servicio post-venta sin letras pequeñas.",
  },
];

export const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Sistemas", href: "#sistemas" },
  { label: "Clientes", href: "#clientes" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

export const SOLUTIONS = [
  {
    key: "bms",
    title: "BMS",
    subtitle: "Building Management System",
    description:
      "Integramos HVAC, iluminación y energía en una sola interfaz inteligente.",
    span: "lg:col-span-6",
    accent: true,
  },
  {
    key: "pci",
    title: "PCI",
    subtitle: "Protección Contra Incendios",
    description:
      "Detección temprana, supresión con agentes limpios y rutas de evacuación.",
    span: "lg:col-span-3",
  },
  {
    key: "seguridad",
    title: "Seguridad",
    subtitle: "Videovigilancia & Accesos",
    description:
      "CCTV, control de acceso, torniquetes y monitoreo 24/7.",
    span: "lg:col-span-3",
  },
  {
    key: "grms",
    title: "GRMS",
    subtitle: "Guest Room Management",
    description:
      "Confort, eficiencia y experiencia para hoteles y residencias.",
    span: "lg:col-span-4",
  },
  {
    key: "infra",
    title: "Infraestructura",
    subtitle: "Redes & Fibra Óptica",
    description:
      "Cableado estructurado, datos y conectividad de misión crítica.",
    span: "lg:col-span-4",
  },
  {
    key: "av",
    title: "Audio & Video",
    subtitle: "Multimedia & Conferencia",
    description:
      "Salas inmersivas, sonido distribuido y videoconferencia profesional.",
    span: "lg:col-span-4",
  },
  {
    key: "servicios",
    title: "Servicios",
    subtitle: "Mantenimiento & Integración",
    description:
      "Diseño, comisionamiento, programación y soporte post-venta.",
    span: "lg:col-span-12",
  },
];

export const TECH_PARTNERS = [
  "Johnson Controls",
  "Metasys",
  "Honeywell",
  "Notifier",
  "Xtralis",
  "Edwards",
  "Fire-Lite Alarms",
  "Simplex",
  "AJAX",
  "Hikvision",
  "Axis",
  "Lenel",
  "Assa Abloy",
  "Kantech",
  "Cisco",
  "Panduit",
  "Crestron",
  "Savant",
  "Belimo",
  "Sonos",
];

export const CLIENTS = [
  // Hoteles & Resorts
  "JW Marriott",
  "The Westin Puntacana Resort & Club",
  "Renaissance Santo Domingo Jaragua",
  "Embassy Suites by Hilton",
  "Holiday Inn",
  "Intercontinental",
  "Catalonia Hotels",
  "Barceló Hotel Group",
  "Bahia Principe",
  "Be Live Hotels",
  "Dreams Cap Cana",
  "Sunscape Resorts & Spas",
  "Casa de Campo Resort & Villas",
  "Hotel Paracas Resort",
  // Retail & Corporativos
  "IKEA",
  "ZARA",
  "Stradivarius",
  "Bossini",
  "Body Shop",
  "Plaza Lama",
  "Grupo Ramos",
  "Grupo Roble",
  "Grupo SID",
  "MegaCentro",
  "BlueMall",
  "Brickell",
  "West Palm Beach",
  // Salud & Laboratorios
  "Hospiten",
  "Novartis",
  "Cardinal Health",
  "Mallén Laboratorios",
  "Ciudad Sanitaria Dr. Luis E. Aybar",
  "Ecolab",
  "Ethical",
  // Industria & Servicios
  "Eaton",
  "Rockwell Automation",
  "Smurfit Westrock",
  "Schad",
  "LG H&H",
  "Central Romana",
  "Tabacalera La Aurora",
  // Aeropuertos & Instituciones
  "Punta Cana Airport",
  "La Romana Airport",
  "BID",
  "Embajada de Alemania",
  "Hencorp",
];

export const ESPECIALIDADES = [
  {
    key: "incendio",
    icon: "Flame",
    title: "Sistemas Contra Incendio",
    description:
      "Detección temprana, supresión con agentes limpios y cumplimiento NFPA.",
  },
  {
    key: "cctv",
    icon: "Camera",
    title: "Videovigilancia CCTV",
    description:
      "Cámaras IP, analítica de video y centros de monitoreo 24/7.",
  },
  {
    key: "acceso",
    icon: "KeyRound",
    title: "Control de Acceso",
    description:
      "Torniquetes, tarjetas, biométricos y gestión de visitantes.",
  },
  {
    key: "bms",
    icon: "Building2",
    title: "Building Management System (BMS)",
    description:
      "Automatización integral: HVAC, iluminación, energía y más.",
  },
  {
    key: "redes",
    icon: "Network",
    title: "Redes y Cableado Estructurado",
    description:
      "Fibra óptica, datos y conectividad de misión crítica.",
  },
  {
    key: "mantenimiento",
    icon: "Wrench",
    title: "Mantenimiento Preventivo y Correctivo",
    description:
      "Soporte técnico, contratos y disponibilidad continua.",
  },
];

export const STATS = [
  { value: "+12", label: "Años de experiencia" },
  { value: "+200", label: "Proyectos ejecutados" },
  { value: "+50", label: "Clientes corporativos" },
  { value: "24/7", label: "Soporte técnico" },
];

export const TESTIMONIOS = [
  {
    quote:
      "Greentech transformó la operación de nuestro edificio. Hoy controlamos energía, clima y seguridad desde una sola pantalla.",
    name: "Director de Operaciones",
    company: "Grupo Hotelero · Punta Cana",
  },
  {
    quote:
      "Su equipo de ingeniería entregó el proyecto contra incendio sin retrasos y con cumplimiento NFPA total.",
    name: "Gerente de Proyectos",
    company: "Centro Comercial · Santo Domingo",
  },
  {
    quote:
      "El soporte post-venta es lo que marca la diferencia. Responden y resuelven.",
    name: "Facility Manager",
    company: "Laboratorio Farmacéutico",
  },
];

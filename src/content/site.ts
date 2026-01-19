export type ProjectLink =
  | { label: "Live"; href: string }
  | { label: "Repo"; href: string }
  | { label: "LinkedIn"; href: string }
  | { label: "Private / NDA"; href?: undefined }
  | { label: "In progress"; href?: undefined };

export type ProjectImage = {
  src: string; // path under /public OR importable path (we’ll use /src/img for Astro assets via import in components where needed)
  alt: string;
  caption: string;
};

export type Project = {
  id: string;
  featured?: boolean;
  title: string;
  subtitle: string; // 1 line: what it is
  context?: string; // e.g., KPMG Internship
  bullets: string[]; // 2–4 bullets: what you owned/did
  stack: string[];
  links: ProjectLink[];
  images?: ProjectImage[]; // 3–6 max
};

export const site = {
  meta: {
    title: "Luis Gustavo Perdomo Márquez — Data-focused builder",
    description:
      "Aspirante a Científico de Datos (Ing. Informática UCAB). Construyo productos orientados a datos, dashboards y sistemas robustos.",
    canonical: "https://luisguslg.github.io/",
  },
  person: {
    name: "Luis Gustavo Perdomo Márquez",
    role: "Aspirante a Científico de Datos | Ingeniería Informática (UCAB)",
    location: "Caracas, Venezuela",
    // Placeholder intencional: cambia esto en este mismo archivo.
    email: "",
    links: {
      portfolio: "https://luisguslg.github.io/",
      linkedin: "https://www.linkedin.com/in/luisguslg/",
    },
  },
  nav: [
    { label: "Proyectos", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Sobre mí", href: "#about" },
    { label: "Certificaciones", href: "#certs" },
    { label: "Contacto", href: "#contact" },
  ],
  cta: {
    primary: { label: "Ver proyectos", href: "#projects" },
    secondary: { label: "Contactar", href: "#contact" },
    tertiary: { label: "LinkedIn", href: "https://www.linkedin.com/in/luisguslg/" },
    cv: { label: "Descargar CV", available: false, note: "Próximamente" },
  },
  hero: {
    headline: "Luis Gustavo Perdomo Márquez",
    title: "Aspirante a Científico de Datos | Ingeniería Informática (UCAB)",
    tagline:
      "Construyo productos orientados a datos, dashboards y sistemas robustos. Enfocado en calidad de ingeniería y claridad.",
    chips: ["Caracas", "UCAB (último año)", "KPMG Internship", "Data focus"],
  },
  highlights: [
    {
      title: "Ownership end-to-end",
      body: "Refactor completo de “Sumando Valor”: arquitectura, UI y calidad del producto de punta a punta.",
    },
    {
      title: "Dashboards (Power BI)",
      body: "Diseño y construcción de dashboards para reporting interno, con foco en claridad y decisiones.",
    },
    {
      title: "Base fuerte (UCAB)",
      body: "Top 10. Probabilidad & Estadística, Bases de Datos, Algoritmos, Métodos Numéricos.",
    },
  ],
  projects: [
    {
      id: "sumando-valor",
      featured: true,
      title: "Sumando Valor",
      context: "KPMG (Internship) — Oct 2025 – Presente",
      subtitle: "Aplicación interna (NDA) refactorizada end-to-end para mejorar mantenibilidad y experiencia.",
      bullets: [
        "Tomé ownership del refactor completo: estructura, componentes, limpieza técnica y consistencia UI.",
        "Mejoré legibilidad y escalabilidad del código con patrones y modularidad.",
        "Aseguré una experiencia más sólida: estados vacíos, validaciones y detalles de UX.",
      ],
      stack: ["Web", "JavaScript/TypeScript", "CSS", "Buenas prácticas", "UX"],
      links: [{ label: "Private / NDA" }],
      images: [
        {
          src: "/src/img/unnamed.png",
          alt: "Sumando Valor — screenshot 1",
          caption: "Vista principal (producto interno).",
        },
        {
          src: "/src/img/unnamed (1).png",
          alt: "Sumando Valor — screenshot 2",
          caption: "Flujo / módulo destacado.",
        },
        {
          src: "/src/img/unnamed (2).png",
          alt: "Sumando Valor — screenshot 3",
          caption: "Detalle de UI y datos.",
        },
      ],
    },
    {
      id: "powerbi",
      featured: true,
      title: "Power BI Dashboards",
      context: "KPMG (Internship)",
      subtitle: "Dashboards para reporting interno con foco en claridad, métricas y storytelling.",
      bullets: [
        "Construí dashboards con navegación clara, jerarquía visual y consistencia.",
        "Modelé datasets y medidas (según necesidad) para responder preguntas de negocio.",
        "Priorización de performance: páginas, filtros y visuales sin sobrecarga.",
      ],
      stack: ["Power BI", "Modelado de datos", "DAX (básico/intermedio)", "SQL (cuando aplica)"],
      links: [{ label: "Private / NDA" }],
    },
    {
      id: "real-state",
      title: "Real State Page",
      subtitle: "Web app con CRUD y autenticación (demo pública).",
      bullets: [
        "Implementación de flujo CRUD y autenticación.",
        "Estructura MVC y separación de responsabilidades.",
      ],
      stack: ["PHP", "MySQL", "MVC", "HTML", "CSS", "JS"],
      links: [{ label: "Live", href: "https://peppy-bublanina-02817d.netlify.app/" }],
      images: [{ src: "/src/img/11.png", alt: "Real State — screenshot", caption: "Vista principal (demo)." }],
    },
    {
      id: "conferences",
      title: "Conferences Webpage",
      subtitle: "CRUD completo con panel admin (demo / proyecto académico).",
      bullets: [
        "CRUD + autenticación + panel admin.",
        "Arquitectura MVC y frontend modular.",
      ],
      stack: ["PHP", "MySQL", "MVC", "SASS", "Gulp", "JS"],
      links: [{ label: "In progress" }],
      images: [
        { src: "/src/img/prueba2.png", alt: "Conferences — screenshot", caption: "Vista / galería." },
        { src: "/src/img/3.png", alt: "Conferences — screenshot 2", caption: "UI de módulo." },
        { src: "/src/img/4.png", alt: "Conferences — screenshot 3", caption: "Detalle." },
      ],
    },
  ] satisfies Project[],
  skills: {
    data: ["Python", "SQL", "Power BI", "Estadística (bases)", "Modelado de datos (bases)"],
    engineering: ["Git/GitHub", "APIs", "Web fundamentals", "Calidad de código", "Documentación"],
  },
  about: [
    "Estudiante de Ingeniería Informática (UCAB) en último año, Top 10.",
    "Estoy pivotando hacia Data Science / Analytics con base fuerte en ingeniería y fundamentos cuantitativos.",
    "Me enfoco en construir cosas útiles: productos internos, dashboards y sistemas mantenibles.",
  ],
  certifications: [
    { title: "Meta Database Engineering", status: "En progreso" },
    { title: "Git & GitHub Certification", status: "Completado" },
    { title: "Web Development Bootcamp", status: "Completado" },
  ],
  certificationsLink: {
    label: "Ver certificados",
    href: "https://drive.google.com/drive/folders/1n6rTpEmHFRkcnp_uWT_kKkW8eU_CaHZu?usp=sharing",
  },
  contact: {
    headline: "¿Hablamos?",
    body: "Si tienes un rol de Data / Analytics junior o prácticas, me interesa conversar.",
    emailCta: { label: "Enviar email", href: "mailto:TU_EMAIL_AQUI" },
    linkedinCta: { label: "LinkedIn", href: "https://www.linkedin.com/in/luisguslg/" },
  },
} as const;


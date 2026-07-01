/* ==========================================================================
   Claudio Carmusciano — Portfolio · interactions & i18n
   ========================================================================== */

// ---------- Translations ----------
const I18N = {
    es: {
        nav_home: "Inicio", nav_skills: "Habilidades", nav_projects: "Proyectos",
        nav_about: "Sobre mí", nav_education: "Educación", nav_contact: "Contacto", nav_cv: "CV",

        hero_pill: "Disponible para proyectos",
        hero_hi: "Hola, soy",
        hero_role: "Desarrollador Full Stack",
        hero_sub: "Construyo aplicaciones web a medida tipo SaaS —de la idea a producción— combinando ingeniería sólida con features potenciados por IA.",
        hero_cta1: "Ver proyectos", hero_cta2: "Contactame",

        strip1: "De punta a punta",
        strip2: "Multi-tenant y por roles",
        strip3: "En producción, mantenido",
        strip4: "Aplicada con criterio",

        skills_eyebrow: "Lo que manejo", skills_title: "Habilidades",
        tab_frontend: "Front-End", tab_backend: "Back-End", tab_develop: "Desarrollo",
        tab_tools: "Herramientas", tab_methods: "Metodologías",
        soft_title: "Habilidades blandas",
        soft_comm_t: "Comunicación",
        soft_comm_d: "Comunicación efectiva, verbal y no verbal. Saber escuchar, hablar, escribir y leer.",
        soft_team_t: "Trabajo en equipo",
        soft_team_d: "Colaborar con otros hacia un objetivo común, comunicando y resolviendo conflictos.",
        soft_prob_t: "Resolución de problemas",
        soft_prob_d: "Identificar y resolver problemas: pensar críticamente, hallar la causa raíz y desarrollar soluciones.",
        soft_resp_t: "Seriedad y responsabilidad",
        soft_resp_d: "Actitud profesional y compromiso con las tareas y los plazos. Proactivo para resolver y aprender.",
        soft_adap_t: "Adaptabilidad",
        soft_adap_d: "Adaptación a los cambios del entorno: ser flexible y aprender de lo nuevo.",
        soft_emo_t: "Inteligencia emocional",
        soft_emo_d: "Comprender y gestionar las propias emociones y las de los demás. Empatía y manejo de conflictos.",

        projects_eyebrow: "Trabajo real, en producción", projects_title: "Proyectos",
        p1_t: "Ale Martín — Repostería y Eventos",
        p1_d: "Sitio web para una repostera profesional, con sección de decoración integral de eventos, galería y catálogo de productos.",
        p2_t: "Coordinemos",
        p2_d: "App para coordinar turnos de pádel entre jugadores: gestión de horarios, organización de partidos y comunicación entre compañeros de forma ágil y colaborativa.",
        p3_t: "PadelAdmin",
        p3_d: "Plataforma para clubes de pádel: arma el fixture de torneos contemplando restricciones y preferencias horarias de los jugadores, y gestiona zonas, tablas de posiciones y llaves eliminatorias.",
        p4_t: "CODE Solutions.ar",
        p4_d: "Startup propia de soluciones tecnológicas empresariales: productos y servicios digitales para optimizar procesos, mejorar la experiencia de usuario y escalar negocios.",

        about_eyebrow: "Sobre mí",
        about_title: "Ingeniería con foco en el negocio",
        about_p1: "Me considero una persona con ganas de aprender y emprender: responsable, confiable y con excelente trato. Me apasionan la informática y la tecnología, y disfruto explorar nuevos desafíos.",
        about_p2: "Entiendo el dominio del negocio antes de programar —reglas, roles y flujos reales— y modelo el software alrededor de eso. Construyo en una rama, pruebo en local, valido con el cliente y recién entonces despliego a producción.",
        about_v1: "Full-stack de punta a punta",
        about_v2: "A medida, no genérico",
        about_v3: "IA aplicada con criterio",

        edu_eyebrow: "Formación", edu_title: "Educación y conocimientos",
        edu1_t: "Analista de Sistemas",
        edu2_t: "Técnico Universitario en Desarrollo de Aplicaciones Informáticas",
        edu_cert: "Ver certificado",

        contact_eyebrow: "Hablemos", contact_title: "Contame tu proyecto",
        contact_sub: "¿Tenés una idea o un proceso que hoy funciona a planilla y WhatsApp? Escribime y lo convertimos en software.",
        form_name: "Nombre", form_email: "Email", form_msg: "Mensaje", form_send: "Enviar mensaje"
    },
    en: {
        nav_home: "Home", nav_skills: "Skills", nav_projects: "Projects",
        nav_about: "About", nav_education: "Education", nav_contact: "Contact", nav_cv: "CV",

        hero_pill: "Available for projects",
        hero_hi: "Hi, I'm",
        hero_role: "Full Stack Developer",
        hero_sub: "I build custom SaaS-style web applications —from idea to production— pairing solid engineering with AI-powered features.",
        hero_cta1: "View projects", hero_cta2: "Get in touch",

        strip1: "End to end",
        strip2: "Multi-tenant & role-based",
        strip3: "In production, maintained",
        strip4: "Applied with judgment",

        skills_eyebrow: "What I work with", skills_title: "Skills",
        tab_frontend: "Front-End", tab_backend: "Back-End", tab_develop: "Development",
        tab_tools: "Tools", tab_methods: "Methodologies",
        soft_title: "Soft skills",
        soft_comm_t: "Communication",
        soft_comm_d: "Effective communication, both verbal and non-verbal. Able to listen, speak, write and read.",
        soft_team_t: "Teamwork",
        soft_team_d: "Working with others toward a common goal, communicating and resolving conflicts.",
        soft_prob_t: "Problem solving",
        soft_prob_d: "Identify and solve problems: think critically, find root causes and develop solutions.",
        soft_resp_t: "Seriousness & responsibility",
        soft_resp_d: "Professional attitude and commitment to tasks and deadlines. Proactive to solve and learn.",
        soft_adap_t: "Adaptability",
        soft_adap_d: "Adapting to changes in the environment: being flexible and learning new things.",
        soft_emo_t: "Emotional intelligence",
        soft_emo_d: "Understand and manage one's own emotions and those of others. Empathy and conflict management.",

        projects_eyebrow: "Real work, in production", projects_title: "Projects",
        p1_t: "Ale Martín — Pastry & Events",
        p1_d: "Website for a professional pastry chef, including a full event-decoration section, gallery and product catalog.",
        p2_t: "Coordinemos",
        p2_d: "App to coordinate padel bookings among players: schedule management, match organization and communication between teammates in an agile, collaborative way.",
        p3_t: "PadelAdmin",
        p3_d: "Platform for padel clubs: builds tournament fixtures accounting for players' scheduling constraints and preferences, and manages groups, standings and elimination brackets.",
        p4_t: "CODE Solutions.ar",
        p4_d: "My own startup for business technology solutions: digital products and services to optimize processes, improve UX and scale businesses.",

        about_eyebrow: "About me",
        about_title: "Engineering with a business focus",
        about_p1: "I see myself as someone eager to learn and build: responsible, reliable and great to work with. I'm passionate about computing and technology, and I enjoy exploring new challenges.",
        about_p2: "I understand the business domain before coding —real rules, roles and flows— and model the software around it. I build on a branch, test locally, validate with the client and only then deploy to production.",
        about_v1: "Full-stack, end to end",
        about_v2: "Custom, not generic",
        about_v3: "AI applied with judgment",

        edu_eyebrow: "Education", edu_title: "Education & knowledge",
        edu1_t: "Systems Analyst",
        edu2_t: "University Technician in Computer Application Development",
        edu_cert: "View certificate",

        contact_eyebrow: "Let's talk", contact_title: "Tell me about your project",
        contact_sub: "Got an idea, or a process that runs on spreadsheets and WhatsApp today? Write to me and we'll turn it into software.",
        form_name: "Name", form_email: "Email", form_msg: "Message", form_send: "Send message"
    }
};

// ---------- Skill tab data ----------
const SKILLS = {
    frontend: {
        title: { es: "Front-End", en: "Front-End" },
        text: {
            es: "Me atrae por su relación directa con el cliente. Base sólida en HTML y CSS nativos, y experiencia con frameworks como Bootstrap y Vue, además de React en el ecosistema JS.",
            en: "I enjoy it for its direct relationship with the user. Strong foundation in native HTML and CSS, plus experience with frameworks like Bootstrap and Vue, and React in the JS ecosystem."
        },
        logos: ["images/html.png", "images/css.png", "images/bootstrap-4-logo-svgrepo-com.svg", "images/vue.svg"]
    },
    backend: {
        title: { es: "Back-End", en: "Back-End" },
        text: {
            es: "Conocimiento fuerte de lenguajes de back-end: Java para desarrollo versátil, JavaScript para interactividad dinámica y PHP para funcionalidad del lado del servidor.",
            en: "Strong knowledge of back-end languages: Java for versatile development, JavaScript for dynamic interactivity and PHP for server-side functionality."
        },
        logos: ["images/java.png", "images/js.svg", "images/php-1-logo-svgrepo-com.svg", "images/postgresql-logo-svgrepo-com.svg"]
    },
    develop: {
        title: { es: "Desarrollo", en: "Development" },
        text: {
            es: "Lenguajes como Java, JavaScript y Python para desarrollo ágil y soluciones eficientes, junto a distintas técnicas, métodos y algoritmos.",
            en: "Languages like Java, JavaScript and Python for agile development and efficient solutions, along with different techniques, methods and algorithms."
        },
        logos: ["images/java.png", "images/js.svg", "images/python.png", "images/mysql-logo-svgrepo-com.svg"]
    },
    tools: {
        title: { es: "Herramientas", en: "Tools" },
        text: {
            es: "Git para control de versiones, GitHub para colaboración de repositorios, Trello para gestión de proyectos y Draw.io para diagramas y visualización de ideas.",
            en: "Git for version control, GitHub for repository collaboration, Trello for project management and Draw.io for diagrams and visualizing ideas."
        },
        logos: ["images/git.png", "images/github-color-svgrepo-com.svg", "images/trello-logo-svgrepo-com.svg", "images/Diagrams.net_Logo.svg.png"]
    },
    methods: {
        title: { es: "Metodologías", en: "Methodologies" },
        text: {
            es: "Metodologías de desarrollo, destacando Scrum: equipos ágiles, sprints, planificación y seguimiento para entregar de forma colaborativa y eficiente.",
            en: "Development methodologies, especially Scrum: agile teams, sprints, planning and tracking to deliver in a collaborative and efficient way."
        },
        logos: ["images/scrum.svg"]
    }
};

// ---------- State ----------
let currentLang = localStorage.getItem("lang") || "es";
let currentSkill = "frontend";

// ---------- i18n apply ----------
function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;

    const dict = I18N[lang];
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    document.querySelectorAll(".lang-btn").forEach(b =>
        b.classList.toggle("is-active", b.dataset.lang === lang));

    renderSkill(currentSkill);
}

// ---------- Skills ----------
function renderSkill(key) {
    currentSkill = key;
    const data = SKILLS[key];
    if (!data) return;

    document.getElementById("skillTitle").textContent = data.title[currentLang];
    document.getElementById("skillText").textContent = data.text[currentLang];

    const box = document.getElementById("skillLogos");
    box.innerHTML = "";
    data.logos.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = "";
        img.loading = "lazy";
        box.appendChild(img);
    });

    document.querySelectorAll("#skillTabs .tab").forEach(t =>
        t.classList.toggle("is-active", t.dataset.skill === key));
}

// ---------- Init ----------
document.addEventListener("DOMContentLoaded", () => {
    // Year
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Language buttons
    document.querySelectorAll(".lang-btn").forEach(btn =>
        btn.addEventListener("click", () => applyLang(btn.dataset.lang)));

    // Skill tabs
    document.querySelectorAll("#skillTabs .tab").forEach(tab =>
        tab.addEventListener("click", () => renderSkill(tab.dataset.skill)));

    // Initial render
    applyLang(currentLang);

    // Mobile menu
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    menuToggle.addEventListener("click", () => {
        const open = navLinks.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", String(open));
    });
    navLinks.querySelectorAll("a").forEach(a =>
        a.addEventListener("click", () => {
            navLinks.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
        }));

    // Sticky nav shadow
    const topnav = document.getElementById("topnav");
    const onScroll = () => topnav.classList.toggle("scrolled", window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Scroll reveal
    const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add("in");
                io.unobserve(e.target);
            }
        });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll(".reveal").forEach(el => io.observe(el));

    // Active nav link on scroll
    const sections = ["home", "skills", "projects", "about", "education", "contact"];
    const linkFor = id => document.querySelector(`#navLinks a[href="#${id}"]`);
    const spy = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                document.querySelectorAll("#navLinks a").forEach(a => a.classList.remove("active"));
                const link = linkFor(e.target.id);
                if (link) link.classList.add("active");
            }
        });
    }, { threshold: 0.5 });
    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) spy.observe(el);
    });

    // Image modal / lightbox
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeModal = () => {
        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    };
    document.querySelectorAll(".gallery-img").forEach(img =>
        img.addEventListener("click", () => {
            modalImg.src = img.src;
            modalImg.alt = img.alt;
            modal.classList.add("open");
            modal.setAttribute("aria-hidden", "false");
            document.body.style.overflow = "hidden";
        }));
    modal.querySelector(".modal-close").addEventListener("click", closeModal);
    modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
    document.addEventListener("keydown", e => {
        if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
    });
});

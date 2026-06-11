export type Language = "es" | "en";
export type TranslationKey = keyof typeof translations.es;

export const translations = {
  es: {
    // Header
    nav_home: "Inicio",
    nav_about: "Nosotros",
    nav_gallery: "Galería",
    nav_tours: "Tours",
    nav_team: "Equipo",
    nav_contact: "Contacto",
    cta_reserve: "Preventa Boletas",

    // Hero
    hero_location: "Carrera 84 - Barranquilla, Colombia",
    hero_title_1: "Descubre la",
    hero_title_2: "Magia del Caribe",
    hero_subtitle: "Sumérgete en la cultura, tradiciones y alegría de Barranquilla. Vive experiencias inmersivas y únicas en el corazón del Caribe colombiano.",
    hero_btn_primary: "Preventa de Boletas (WhatsApp)",
    hero_btn_secondary: "Conocer Más",
    hero_stat_1_val: "15+",
    hero_stat_1_lbl: "Años de Experiencia",
    hero_stat_2_val: "50k+",
    hero_stat_2_lbl: "Visitantes Felices",
    hero_stat_3_val: "100+",
    hero_stat_3_lbl: "Rutas Inmersivas",
    hero_stat_4_val: "4.9",
    hero_stat_4_lbl: "Calificación",

    // FAQ
    faq_title: "Preguntas Frecuentes",
    faq_subtitle: "Todo lo que necesitas saber para planear tu visita",
    faq_q1: "¿Dónde están ubicados?",
    faq_a1: "Nos encontramos en la Carrera 84 en la ciudad de Barranquilla, Colombia. Un espacio dedicado a preservar y compartir la magia del Caribe.",
    faq_q2: "¿Cuáles son los precios de los paquetes culturales?",
    faq_a2: "Nuestros paquetes base para rutas inmersivas inician desde los $50,000 COP por persona. También ofrecemos planes grupales y paquetes VIP (contacta a nuestro equipo por WhatsApp para más información).",
    faq_q3: "¿Qué incluye la ruta inmersiva?",
    faq_a3: "Las rutas inmersivas incluyen proyecciones visuales 360°, guías especializados en cultura caribeña, y una experiencia interactiva que te hará vivir nuestras tradiciones de primera mano.",
    faq_q4: "¿Cómo puedo comprar boletas en preventa?",
    faq_a4: "Actualmente la preventa se maneja directamente a través de nuestra línea de WhatsApp Business. Solo haz clic en cualquier botón de 'Preventa' y nuestro equipo tomará tus datos.",
    
    // Generales
    scroll_down: "Desliza"
  },
  en: {
    // Header
    nav_home: "Home",
    nav_about: "About Us",
    nav_gallery: "Gallery",
    nav_tours: "Tours",
    nav_team: "Team",
    nav_contact: "Contact",
    cta_reserve: "Presale Tickets",

    // Hero
    hero_location: "Carrera 84 - Barranquilla, Colombia",
    hero_title_1: "Discover the",
    hero_title_2: "Magic of the Caribbean",
    hero_subtitle: "Immerse yourself in the culture, traditions, and joy of Barranquilla. Live unique immersive experiences in the heart of the Colombian Caribbean.",
    hero_btn_primary: "Presale Tickets (WhatsApp)",
    hero_btn_secondary: "Learn More",
    hero_stat_1_val: "15+",
    hero_stat_1_lbl: "Years of Experience",
    hero_stat_2_val: "50k+",
    hero_stat_2_lbl: "Happy Visitors",
    hero_stat_3_val: "100+",
    hero_stat_3_lbl: "Immersive Routes",
    hero_stat_4_val: "4.9",
    hero_stat_4_lbl: "Rating",

    // FAQ
    faq_title: "Frequently Asked Questions",
    faq_subtitle: "Everything you need to know to plan your visit",
    faq_q1: "Where are you located?",
    faq_a1: "We are located at Carrera 84 in the city of Barranquilla, Colombia. A space dedicated to preserving and sharing the magic of the Caribbean.",
    faq_q2: "What are the prices for the cultural packages?",
    faq_a2: "Our basic immersive route packages start at $50,000 COP per person. We also offer group plans and VIP packages (contact our team via WhatsApp for more info).",
    faq_q3: "What does the immersive route include?",
    faq_a3: "The immersive routes include 360° visual projections, specialized Caribbean culture guides, and an interactive experience that lets you live our traditions firsthand.",
    faq_q4: "How can I buy presale tickets?",
    faq_a4: "Currently, presales are handled directly through our WhatsApp Business line. Just click any 'Presale' button and our team will take your details.",
    
    // Generales
    scroll_down: "Scroll"
  }
} as const;

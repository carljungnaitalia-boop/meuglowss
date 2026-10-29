/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'pt' | 'en' | 'es';

export interface ProjectItem {
  id: string;
  name: string;
  country: string;
  countryKey: 'uk' | 'pt' | 'us' | 'br' | 'de';
  flag: string;
  city: string;
  segment: {
    pt: string;
    en: string;
    es: string;
  };
  segmentKey: string;
  url: string;
  professionalPhoto: string;
  image?: string;
  colorGradient: string;
  accentTitle: string;
}

export interface TestimonialItem {
  id: string;
  role: {
    pt: string;
    en: string;
    es: string;
  };
  country: string;
  flag: string;
  quote: {
    pt: string;
    en: string;
    es: string;
  };
  stars: number;
}

export interface IncludedItem {
  id: string;
  title: {
    pt: string;
    en: string;
    es: string;
  };
  description: {
    pt: string;
    en: string;
    es: string;
  };
  icon: string;
}

export interface StepItem {
  number: string;
  title: {
    pt: string;
    en: string;
    es: string;
  };
  description: {
    pt: string;
    en: string;
    es: string;
  };
}

export interface FAQItem {
  id: string;
  question: {
    pt: string;
    en: string;
    es: string;
  };
  answer: {
    pt: string;
    en: string;
    es: string;
  };
}

export const siteData = {
  brandName: "GLOWSITES",
  designerName: "Lana",
  whatsappPhone: "557192102766",
  whatsappDisplay: "+55 71 9210-2766",
  instagramHandle: "@glowsites.us",
  instagramUrl: "https://www.instagram.com/glowsites.us/",
  heroImage: "https://i.ibb.co/67gdyvzB/Save-Clip-App-682078653-18090147668590610-3987365300427329293-n-convertido-de-jpg.webp",
  
  projects: [
    {
      id: "thalyta-pires",
      name: "Thalyta Pires Beauty",
      country: "Reino Unido",
      countryKey: "uk",
      flag: "🇬🇧",
      city: "Londres",
      segment: {
        pt: "Maquiagem e cabelo",
        en: "Makeup & Hair",
        es: "Maquillaje y peinado",
      },
      segmentKey: "makeup",
      url: "https://thalytapiresbeauty.vercel.app/",
      professionalPhoto: "https://i.ibb.co/Q7G63H84/Save-Clip-App-545256630-17957248406990211-7080799597854200890-n.webp",
      colorGradient: "from-[#8B6B52] to-[#4A3727]",
      accentTitle: "Thalyta Pires Beauty · London, UK",
    },
    {
      id: "karine-moura",
      name: "Karine Moura Aesthetics",
      country: "Reino Unido",
      countryKey: "uk",
      flag: "🇬🇧",
      city: "Londres",
      segment: {
        pt: "Laser e estética",
        en: "Laser & Aesthetics",
        es: "Láser y estética",
      },
      segmentKey: "laser",
      url: "https://karinelaser.vercel.app/",
      professionalPhoto: "https://i.ibb.co/RpvNcjvY/Save-Clip-App-587280935-18034084277752644-6389619230485571291-n-1.webp",
      colorGradient: "from-[#C29F5B] to-[#8F7030]",
      accentTitle: "Karine Moura Aesthetics · London, UK",
    },
    {
      id: "dra-luiza-alves",
      name: "Dra. Luiza Alves",
      country: "Brasil",
      countryKey: "br",
      flag: "🇧🇷",
      city: "São Paulo",
      segment: {
        pt: "Harmonização e estética facial",
        en: "Facial Aesthetics & Injectables",
        es: "Armonización y estética facial",
      },
      segmentKey: "aesthetics",
      url: "https://draluizaalves.vercel.app/",
      professionalPhoto: "https://i.ibb.co/W40Hws66/Captura-de-tela-2026-10-29-101628-convertido-de-png.webp",
      colorGradient: "from-[#8B6B52] to-[#C29F5B]",
      accentTitle: "Dra. Luiza Alves · Brasil",
    },
    {
      id: "isadora-lash",
      name: "Isadora Lash & Brows",
      country: "Reino Unido",
      countryKey: "uk",
      flag: "🇬🇧",
      city: "Londres",
      segment: {
        pt: "Cílios e sobrancelhas",
        en: "Lash & Brows Studio",
        es: "Pestañas y cejas",
      },
      segmentKey: "lashes",
      url: "https://isadoralash.vercel.app/",
      professionalPhoto: "https://i.ibb.co/tMPy6fG7/838645612-17904498174598704-3108184795695297259-n-jpg.webp",
      colorGradient: "from-[#4A3727] to-[#8B6B52]",
      accentTitle: "Isadora Lash & Brows · London, UK",
    },
    {
      id: "amarii-beauty-spa",
      name: "AMARII Beauty Spa",
      country: "Estados Unidos",
      countryKey: "us",
      flag: "🇺🇸",
      city: "Wilmington, MA",
      segment: {
        pt: "Spa e depilação a laser",
        en: "Spa & Laser Hair Removal",
        es: "Spa y depilación láser",
      },
      segmentKey: "spa",
      url: "https://amariibeautyspa.vercel.app/",
      professionalPhoto: "https://i.ibb.co/3yDHnQD3/Edit-photo-removing-text-shadows-2-K-20261023061254.webp",
      colorGradient: "from-[#C29F5B] to-[#4A3727]",
      accentTitle: "AMARII Beauty Spa · Wilmington, MA",
    },
    {
      id: "marysia-aesthetics",
      name: "Marysia Aesthetics",
      country: "Alemanha",
      countryKey: "de",
      flag: "🇩🇪",
      city: "Herne, NRW – Deutschland",
      segment: {
        pt: "Micropigmentadora",
        en: "Permanent Makeup Artist",
        es: "Micropigmentadora",
      },
      segmentKey: "micropigmentation",
      url: "https://marysia-aesthetics.vercel.app/",
      professionalPhoto: "https://i.ibb.co/35w0q7zd/Captura-de-tela-2026-10-29-101855.png",
      colorGradient: "from-[#8B6B52] to-[#F2DFA7]",
      accentTitle: "Marysia Micropigmentation · Herne, Deutschland",
    },
    {
      id: "dra-luane-avila",
      name: "Dra. Luane Ávila (Rare)",
      country: "Brasil",
      countryKey: "br",
      flag: "🇧🇷",
      city: "Salvador",
      segment: {
        pt: "Medicina estética e dermatologia",
        en: "Aesthetic Medicine & Dermatology",
        es: "Medicina estética y dermatología",
      },
      segmentKey: "aesthetics",
      url: "https://rare-draluaneavila.vercel.app/",
      professionalPhoto: "https://i.ibb.co/xKf2ScJK/Captura-de-tela-2026-10-29-101938.png",
      colorGradient: "from-[#C9A24D] to-[#8B6B52]",
      accentTitle: "Rare by Dra. Luane Ávila · Brasil",
    },
    {
      id: "eduarda-dias",
      name: "Eduarda Dias",
      country: "Brasil",
      countryKey: "br",
      flag: "🇧🇷",
      city: "Belo Horizonte",
      segment: {
        pt: "Nail designer",
        en: "Nail Designer",
        es: "Nail designer",
      },
      segmentKey: "nails",
      url: "https://eduardadias.vercel.app/",
      professionalPhoto: "https://i.ibb.co/Zp50xp1w/Captura-de-tela-2026-10-29-102009.png",
      colorGradient: "from-[#8F7030] to-[#4A3727]",
      accentTitle: "Eduarda Dias Nails · Brasil",
    },
    {
      id: "tatiane-santos",
      name: "Tatiane Santos Nails",
      country: "Portugal",
      countryKey: "pt",
      flag: "🇵🇹",
      city: "Amora, Seixal",
      segment: {
        pt: "Unhas e formação",
        en: "Nails & Professional Training",
        es: "Uñas y formación profesional",
      },
      segmentKey: "nails",
      url: "https://tatianesantosnails.vercel.app/",
      professionalPhoto: "https://i.ibb.co/Kp7N9ZjW/Captura-de-tela-2026-10-29-102102.png",
      colorGradient: "from-[#8B6B52] to-[#C29F5B]",
      accentTitle: "Tatiane Santos Nails · Portugal",
    },
    {
      id: "anne-beatriz",
      name: "Anne Beatriz Unhas e Cursos",
      country: "Portugal",
      countryKey: "pt",
      flag: "🇵🇹",
      city: "Caxias, Oeiras",
      segment: {
        pt: "Unhas e cursos",
        en: "Nails & Masterclasses",
        es: "Uñas y cursos",
      },
      segmentKey: "nails",
      url: "https://annebeatrizunhas.vercel.app/",
      professionalPhoto: "https://i.ibb.co/yFB0c8Gh/Captura-de-tela-2026-10-29-102142.png",
      colorGradient: "from-[#C29F5B] to-[#4A3727]",
      accentTitle: "Anne Beatriz Nails & Academy · Portugal",
    },
  ] as ProjectItem[],

  testimonials: [
    {
      id: "1",
      role: {
        pt: "Esteticista",
        en: "Aesthetician",
        es: "Esteticista",
      },
      country: "Reino Unido (Londres)",
      flag: "🇬🇧",
      quote: {
        pt: "Meu site ficou com a cara do meu trabalho. As clientes elogiam desde o primeiro acesso e o agendamento no WhatsApp facilitou muito a minha rotina.",
        en: "My website truly reflects the quality of my work. Clients compliment it from their very first visit, and WhatsApp bookings streamlined my daily schedule.",
        es: "Mi sitio web quedó a la altura de mi trabajo. Las clientas lo elogian desde el primer momento y el agendamiento por WhatsApp facilitó mi rutina.",
      },
      stars: 5,
    },
    {
      id: "2",
      role: {
        pt: "Nail designer",
        en: "Nail Designer",
        es: "Nail designer",
      },
      country: "Portugal (Setúbal)",
      flag: "🇵🇹",
      quote: {
        pt: "Ela entendeu o meu estilo e organizou todos os meus serviços e valores. Ficou muito mais fácil agendar e as clientes chegam decididas.",
        en: "She understood my style completely and structured all my services. Booking appointments is now seamless and clients arrive knowing exactly what they want.",
        es: "Ella entendió mi estilo y organizó todos mis servicios y tarifas. Es mucho más fácil agendar y las clientas llegan con la decisión tomada.",
      },
      stars: 5,
    },
    {
      id: "3",
      role: {
        pt: "Lash artist",
        en: "Lash Artist",
        es: "Lash artist",
      },
      country: "Reino Unido (Londres)",
      flag: "🇬🇧",
      quote: {
        pt: "Atendimento atencioso e um resultado elegante. O esboço sem compromisso já me conquistou de cara. Valeu cada centavo investido!",
        en: "Attentive care and an exquisitely elegant outcome. The no-obligation preview won me over immediately. Worth every single penny!",
        es: "Atención impecable y un resultado muy elegante. El boceto previo sin compromiso me enamoró al instante. ¡Valió cada centavo!",
      },
      stars: 5,
    },
    {
      id: "4",
      role: {
        pt: "Dona de spa",
        en: "Spa Owner",
        es: "Dueña de spa",
      },
      country: "Estados Unidos (Massachusetts)",
      flag: "🇺🇸",
      quote: {
        pt: "Ficou sofisticado, bilíngue e muito claro. Agora as clientes americanas e brasileiras encontram meus pacotes e chegam já sabendo o que querem.",
        en: "Sophisticated, bilingual, and crystal clear. Both my American and international clients easily find my packages and book directly with confidence.",
        es: "Quedó sofisticado, bilingüe y muy claro. Ahora mis clientas encuentran los paquetes y ya saben exactamente lo que desean reservar.",
      },
      stars: 5,
    },
    {
      id: "5",
      role: {
        pt: "Profissional de laser",
        en: "Laser Specialist",
        es: "Especialista en láser",
      },
      country: "Reino Unido (Londres)",
      flag: "🇬🇧",
      quote: {
        pt: "Da copy ao Google Maps, tudo pensado nos mínimos detalhes. Passa muita credibilidade e o retorno com novas clientes foi imediato.",
        en: "From copywriting to Google Maps integration, every single detail was meticulously thought out. It inspires immense trust and client conversions.",
        es: "Desde el copy hasta Google Maps, todo pensado con dedicación. Transmite gran credibilidad y atrajo clientas nuevas de inmediato.",
      },
      stars: 5,
    },
    {
      id: "6",
      role: {
        pt: "Formadora de estética",
        en: "Beauty Educator & Trainer",
        es: "Formadora en estética",
      },
      country: "Portugal (Lisboa)",
      flag: "🇵🇹",
      quote: {
        pt: "O site mostra meu trabalho de atendimento e os meus cursos com a elegância que eu sempre quis. Minhas alunas amaram a apresentação.",
        en: "The website showcases both my client treatments and my training courses with the sheer elegance I always wanted. My students loved it.",
        es: "El sitio web muestra tanto mis servicios como mis cursos con la elegância que siempre quise. Mis alumnas quedaron fascinadas.",
      },
      stars: 5,
    },
  ] as TestimonialItem[],

  steps: [
    {
      number: "01",
      title: {
        pt: "Conversa Inicial",
        en: "Initial Consultation",
        es: "Charla Inicial",
      },
      description: {
        pt: "Você me conta sobre o seu trabalho, os seus serviços principais, sua paleta preferida e o perfil de clientes que deseja atrair.",
        en: "You share your services, your ideal aesthetic, and the exact clientele you want to attract to your beauty business.",
        es: "Me cuentas sobre tu trabajo, tus servicios principales, tu estilo preferido y el público al que deseas llegar.",
      },
    },
    {
      number: "02",
      title: {
        pt: "Esboço sem Compromisso",
        en: "No-Strings Visual Sketch",
        es: "Boceto sin Compromiso",
      },
      description: {
        pt: "Eu monto um esboço visual completo para você ver, na prática, como o seu site ficaria antes de tomar qualquer decisão financeira.",
        en: "I design a full visual prototype so you can see your website in action before making any financial commitment.",
        es: "Creo un boceto visual completo para que compruebes en la práctica cómo lucirá tu sitio antes de cualquier pago.",
      },
    },
    {
      number: "03",
      title: {
        pt: "Ajustes e Personalização",
        en: "Refinement & Details",
        es: "Ajustes y Personalización",
      },
      description: {
        pt: "Você envia em uma única mensagem tudo o que deseja lapidar (fotos, textos, paleta) e eu deixo cada detalhe com a sua essência.",
        en: "You send your feedback in one clear message (photos, copy, colors) and I tailor every detail to match your personality.",
        es: "Nos envías tus cambios en un solo mensaje (fotos, textos, paleta) y pulo cada detalle con tu verdadera esencia.",
      },
    },
    {
      number: "04",
      title: {
        pt: "Aprovação e Pagamento",
        en: "Approval & Payment",
        es: "Aprobación y Pago",
      },
      description: {
        pt: "O pagamento só acontece após a sua total aprovação e encantamento com o resultado final do seu site.",
        en: "Payment only happens after your 100% approval and complete delight with the final project.",
        es: "El pago se realiza únicamente después de que hayas aprobado y te hayas enamorado del resultado.",
      },
    },
    {
      number: "05",
      title: {
        pt: "Site no Ar",
        en: "Official Launch",
        es: "Sitio Online",
      },
      description: {
        pt: "Domínio e hospedagem inclusos, conexões de WhatsApp ativas e seu espaço digital pronto para encantar e converter clientes.",
        en: "Domain and hosting fully included, WhatsApp booking connected, and your digital presence live to convert high-value clients.",
        es: "Dominio y alojamiento incluidos, botón de WhatsApp activo y tu espacio listo para recibir y cautivar clientas.",
      },
    },
  ] as StepItem[],

  included: [
    {
      id: "1",
      title: {
        pt: "Design One Page Sob Medida",
        en: "Bespoke One-Page Architecture",
        es: "Diseño One Page a Medida",
      },
      description: {
        pt: "Layout 100% responsivo, desenhado do zero para brilhar em celulares, tablets e computadores.",
        en: "100% responsive layout, custom crafted from scratch to shine on mobile phones and desktops.",
        es: "Diseño 100% adaptado a móviles y ordenadores, creado desde cero con acabados prémium.",
      },
      icon: "layout",
    },
    {
      id: "2",
      title: {
        pt: "Copywriting de Alta Conversão",
        en: "High-Converting Beauty Copy",
        es: "Copywriting de Alta Conversión",
      },
      description: {
        pt: "Textos pensados para valorizar a sua autoridade, organizar procedimentos e despertar o desejo imediato de agendar.",
        en: "Strategic copy designed to showcase your authority and inspire clients to book appointments instantly.",
        es: "Textos persuasivos creados para resaltar tu prestigio y motivar reservas inmediatas.",
      },
      icon: "feather",
    },
    {
      id: "3",
      title: {
        pt: "Estrutura Bilíngue (PT / EN / ES)",
        en: "Multilingual Engine (PT / EN / ES)",
        es: "Estructura Bilingüe (PT / EN / ES)",
      },
      description: {
        pt: "Perfeito para profissionais no exterior ou que atendem estrangeiras: alternância fluida de idiomas.",
        en: "Tailored for international beauty specialists catering to expat and local clientele seamlessly.",
        es: "Ideal para profesionales en el extranjero: cambio instantáneo entre español, portugués e inglés.",
      },
      icon: "globe",
    },
    {
      id: "4",
      title: {
        pt: "SEO para Google e IAs (GEO)",
        en: "SEO for Google & AI Engines",
        es: "SEO para Google e Inteligencias Artificiales",
      },
      description: {
        pt: "Metadados, Schema JSON-LD e palavras-chave para ser encontrada no Google e recomendada por IAs.",
        en: "Metadata, JSON-LD Schema, and semantic phrasing so clients and AI search assistants find your studio.",
        es: "Estructura optimizada con JSON-LD y palabras clave para posicionar en Google y respuestas de IA.",
      },
      icon: "sparkles",
    },
    {
      id: "5",
      title: {
        pt: "Agendamento Direto no WhatsApp",
        en: "Direct WhatsApp Booking Flow",
        es: "Reserva Directa por WhatsApp",
      },
      description: {
        pt: "Botões estratégicos e mini formulário com mensagem pré-formatada com o serviço desejado pela cliente.",
        en: "Strategic CTAs and quick contact flow generating a pre-filled WhatsApp message with client details.",
        es: "Botones clave y mini formulario con mensaje preparado con los datos del servicio solicitado.",
      },
      icon: "message-circle",
    },
    {
      id: "6",
      title: {
        pt: "Galeria, Avaliações e Instagram",
        en: "Gallery, Reviews & Instagram",
        es: "Galería, Reseñas e Instagram",
      },
      description: {
        pt: "Mostre seus melhores resultados antes/depois, feedbacks 5 estrelas e feed de publicações recentes.",
        en: "Showcase transformations, 5-star testimonials, and live links to your Instagram portfolio.",
        es: "Muestra tus mejores transformaciones, testimonios de 5 estrellas y enlace a tu Instagram.",
      },
      icon: "camera",
    },
    {
      id: "7",
      title: {
        pt: "Google Maps e Localização",
        en: "Google Maps & Studio Location",
        es: "Google Maps y Ubicación",
      },
      description: {
        pt: "Endereço interativo para suas clientes traçarem rota com facilidade até o seu espaço de atendimento.",
        en: "Interactive map integration so clients can navigate directly to your studio with ease.",
        es: "Mapa interactivo para que tus clientas tracen la ruta hacia tu clínica o estudio.",
      },
      icon: "map-pin",
    },
    {
      id: "8",
      title: {
        pt: "Rodapé Legal e Privacidade",
        en: "Legal & Privacy Compliance",
        es: "Aviso Legal y Privacidad",
      },
      description: {
        pt: "Termos, política de dados (LGPD / GDPR) e links institucionais que transmitem profissionalismo.",
        en: "Privacy policy, GDPR compliance, and legal safeguards that elevate your business credibility.",
        es: "Políticas de privacidad (RGPD) y pie de página que transmiten máxima formalidad.",
      },
      icon: "shield-check",
    },
    {
      id: "9",
      title: {
        pt: "Domínio e Hospedagem Inclusos",
        en: "Domain & Hosting Included",
        es: "Dominio y Hospedaje Incluidos",
      },
      description: {
        pt: "Configuração técnica completa sem dores de cabeça: seu site já nasce seguro, rápido e estável no ar.",
        en: "Full technical configuration with zero headache: fast, secure SSL, and rock-solid uptime.",
        es: "Configuración técnica completa: tu sitio web seguro con SSL, ultra veloz y sin complicaciones.",
      },
      icon: "server",
    },
  ] as IncludedItem[],

  faq: [
    {
      id: "1",
      question: {
        pt: "Como funciona o esboço sem compromisso?",
        en: "How does the no-obligation sketch work?",
        es: "¿Cómo funciona el boceto sin compromiso?",
      },
      answer: {
        pt: "Eu monto um esboço visual do seu site, sem nenhum custo ou compromisso antecipado, para você ver como ele ficaria na prática antes de decidir. Se você gostar, seguimos em frente!",
        en: "I craft a full visual preview of your website with no upfront cost or commitment, allowing you to see how it looks and feels before deciding. If you love it, we proceed!",
        es: "Elaboro un boceto visual de tu sitio web sin coste previo ni compromiso, para que veas cómo lucirá en la práctica. Si te gusta, seguimos adelante.",
      },
    },
    {
      id: "2",
      question: {
        pt: "Quando eu pago pelo projeto?",
        en: "When do I pay for the project?",
        es: "¿Cuándo realizo el pago del proyecto?",
      },
      answer: {
        pt: "O pagamento só acontece após a sua total aprovação do site. Você só investe quando estiver 100% apaixonada pelo visual e funcionamento.",
        en: "Payment takes place only after your complete approval of the website. You only invest when you are 100% in love with the result.",
        es: "El pago se realiza únicamente después de tu aprobación total. Solo inviertes cuando estés completamente enamorada del diseño.",
      },
    },
    {
      id: "3",
      question: {
        pt: "Domínio e hospedagem estão inclusos?",
        en: "Are domain and hosting included?",
        es: "¿Están incluidos el dominio y el alojamiento?",
      },
      answer: {
        pt: "Sim! Cuidamos de toda a configuração técnica, domínio e hospedagem de alta velocidade com certificado SSL de segurança já inclusos no pacote.",
        en: "Yes! We handle all technical configuration, including domain registration and high-speed cloud hosting with SSL security certificate.",
        es: "¡Sí! Nos encargamos de toda la configuración técnica, incluyendo dominio y hosting de alta velocidad con certificado SSL seguro.",
      },
    },
    {
      id: "4",
      question: {
        pt: "O site pode ser bilíngue ou em vários idiomas?",
        en: "Can the website be bilingual or multilingual?",
        es: "¿El sitio web puede ser bilingüe o multilingüe?",
      },
      answer: {
        pt: "Sim! Crio sites em português com opção de inglês e espanhol, permitindo que suas clientes estrangeiras naveguem na língua nativa delas.",
        en: "Yes! Websites are created in Portuguese with seamless English and Spanish versions, allowing international clients to browse in their preferred language.",
        es: "¡Sí! Diseñamos sitios en portugués con opción en inglés y español para que tus clientas extranjeras naveguen con total comodidad.",
      },
    },
    {
      id: "5",
      question: {
        pt: "Posso pedir alterações e revisões?",
        en: "Can I request changes and revisions?",
        es: "¿Puedo solicitar cambios y ajustes?",
      },
      answer: {
        pt: "Com certeza! Você envia tudo o que deseja mudar em uma mensagem e nós refinamos as fotos, textos, tons e detalhes até ficar perfeito.",
        en: "Absolutely! You compile your notes in one message, and we fine-tune photos, text, color accents, and details until it is flawless.",
        es: "¡Por supuesto! Envías todo lo que deseas ajustar en un mensaje y afinamos fotos, textos y tonos hasta que quede impecable.",
      },
    },
    {
      id: "6",
      question: {
        pt: "Em quanto tempo o site fica pronto?",
        en: "How long does it take to go live?",
        es: "¿En cuánto tiempo está listo el sitio?",
      },
      answer: {
        pt: "O primeiro esboço visual fica pronto em média em 3 a 5 dias úteis. Após seus ajustes e aprovação, o site vai ao ar imediatamente.",
        en: "The initial visual sketch is usually ready within 3 to 5 business days. Once approved, your site goes live immediately.",
        es: "El primer boceto visual suele estar listo en 3 a 5 días laborables. Tras tus ajustes y visto bueno, el sitio se publica al instante.",
      },
    },
    {
      id: "7",
      question: {
        pt: "O site aparece nas pesquisas do Google?",
        en: "Will my website appear on Google searches?",
        es: "¿Aparecerá mi sitio web en las búsquedas de Google?",
      },
      answer: {
        pt: "Sim! Implementamos SEO técnico completo, dados estruturados (Schema JSON-LD) e boas práticas para que seu negócio seja indexado pelo Google e encontrado por IAs.",
        en: "Yes! We implement complete technical SEO, Schema JSON-LD structured data, and keyword indexing so Google and AI search tools can recommend your brand.",
        es: "¡Sí! Implementamos SEO técnico riguroso, datos estructurados (Schema JSON-LD) y optimización para posicionar en Google e inteligencias artificiales.",
      },
    },
    {
      id: "8",
      question: {
        pt: "Como as clientes agendam pelo site?",
        en: "How do clients book appointments through the site?",
        es: "¿Cómo agendan las clientas a través del sitio?",
      },
      answer: {
        pt: "O site conta com botões estratégicos e um mini formulário inteligente que gera uma mensagem pronta no WhatsApp com o nome, serviço e data desejada.",
        en: "The site features strategic CTAs and a smart mini-form that pre-fills a formatted WhatsApp message with the client's name and requested service.",
        es: "El sitio cuenta con botones estratégicos y un mini formulario que genera un mensaje predeterminado directo a tu WhatsApp.",
      },
    },
    {
      id: "9",
      question: {
        pt: "Você atende profissionais que moram fora do Brasil?",
        en: "Do you work with beauty professionals outside Brazil?",
        es: "¿Atiendes a profesionales que viven fuera de Brasil?",
      },
      answer: {
        pt: "Sim, é uma das nossas maiores especialidades! Já atendemos profissionais no Reino Unido (Londres), Portugal, Estados Unidos e em diversos outros países.",
        en: "Yes, this is one of our primary specialties! We regularly partner with studios in the UK (London), Portugal, the United States, and worldwide.",
        es: "¡Sí, es una de nuestras principales especialidades! Ya tenemos clientes en Reino Unido, Portugal, Estados Unidos y otros países.",
      },
    },
    {
      id: "10",
      question: {
        pt: "Posso ter um catálogo online dos meus serviços?",
        en: "Can I have an online service catalog to send to clients?",
        es: "¿Puedo tener un catálogo online para enviar a mis clientas?",
      },
      answer: {
        pt: "Sim! Além do site one page, podemos criar um catálogo digital elegante dos seus procedimentos e valores para você enviar em PDF ou link no WhatsApp.",
        en: "Yes! In addition to your one-page website, we can build a sleek digital service catalog of your treatments and prices to share directly via WhatsApp.",
        es: "¡Sí! Además del sitio one page, podemos crear un catálogo digital elegante con tus tratamientos y tarifas para compartir por WhatsApp.",
      },
    },
  ] as FAQItem[],

  translations: {
    pt: {
      nav: {
        projects: "Projetos",
        howItWorks: "Como funciona",
        reviews: "Avaliações",
        instagram: "Instagram",
        contact: "Contato",
        faq: "FAQ",
        cta: "Quero meu site",
        skipToContent: "Pular para o conteúdo principal",
      },
      hero: {
        eyebrow: "WEB DESIGNER PARA PROFISSIONAIS DA BELEZA • GLOWSITES",
        titlePre: "Sites que fazem a sua",
        titleHighlight: "beleza ser vista,",
        titlePost: "escolhida e lembrada",
        subtitle: "Crio sites elegantes e bilíngues para profissionais da beleza: mais autoridade, serviços organizados, agendamentos direto no seu WhatsApp e clientes encontrando você no Google.",
        ctaWhatsapp: "Quero o meu site",
        ctaProjects: "Ver projetos",
        kpiProjects: "+105 projetos entregues para profissionais da beleza",
        kpiCountries: "+10 países com profissionais atendidas",
        kpiSeo: "Expert em SEO, GEO e AIO (Google e IAs)",
      },
      marquee: [
        "ESTÉTICA",
        "UNHAS",
        "CÍLIOS",
        "LASER",
        "MAQUIAGEM",
        "SPA",
        "CLÍNICAS",
        "SITES COM ALMA",
      ],
      projects: {
        eyebrow: "PROJETOS RECENTES",
        title: "Projetos que já estão no ar",
        subtitle: "Cada site nasce do zero, com a identidade, a copy e o público de cada profissional. Veja de perto.",
        viewOnline: "Ver projeto online",
        quickPreview: "Pré-visualizar",
        ctaSection: "Quero um projeto assim",
        previewModalTitle: "Pré-visualização do Projeto",
        deviceDesktop: "Desktop",
        deviceMobile: "Celular",
        openNewTab: "Abrir em nova aba",
        iframeNotice: "Nota: se o site não carregar dentro da prévia devido a políticas de segurança da hospedagem, clique em 'Abrir em nova aba'.",
      },
      howItWorks: {
        title: "Do primeiro papo ao site no ar, sem complicação",
        subtitle: "Você vê o resultado antes de decidir. Só paga quando estiver apaixonada pelo seu site.",
        meetLanaTitle: "Oi, eu sou a Lana",
        meetLanaBio: "Web designer especializada em profissionais da beleza. Eu entendo o seu negócio e transformo a sua autoridade em um site elegante, que organiza os serviços e leva a cliente certa até o seu WhatsApp.",
        meetLanaSub: "Atendimento humano, acolhedor e focado no crescimento da sua marca.",
        includedTitle: "O que está incluído no seu site",
        extrasTitle: "Extras sob consulta",
        extrasText: "Catálogo online de serviços para enviar às clientes · Reformulação de sites existentes · Ajustes periódicos e atualizações.",
        ctaSection: "Quero um esboço do meu site",
      },
      feedbacks: {
        title: "Quem confiou, recomenda",
        subtitle: "Palavras de profissionais que ganharam um site à altura do seu trabalho.",
        verified: "Cliente verificada",
        ctaSection: "Quero o mesmo para o meu negócio",
      },
      instagram: {
        title: "Acompanhe os bastidores da GlowSites",
        subtitle: "Novos projetos, ideias de design e dicas para a sua marca de beleza aparecer mais.",
        handle: "@glowsites.us",
        bioSnippet: "Web design elegante & bilíngue para profissionais da beleza.",
        followBtn: "Seguir no Instagram",
        whatsappBtn: "Falar no WhatsApp",
        feedLabel: "Projetos recentes no feed",
      },
      contact: {
        title: "Vamos criar o site que o seu trabalho merece?",
        subtitle: "Conte um pouco sobre você e eu monto o seu esboço, sem compromisso.",
        directTitle: "Contato direto",
        respondFast: "Respondo o mais rápido que puder, com carinho e atenção.",
        formNameLabel: "Como quer ser chamada?",
        formNamePlaceholder: "Ex: Vanessa Lima",
        formSegmentLabel: "Seu segmento",
        formLocationLabel: "País e cidade",
        formLocationPlaceholder: "Ex: Londres, Reino Unido ou Lisboa, Portugal",
        formInstagramLabel: "Seu Instagram (@)",
        formInstagramPlaceholder: "@seunome.beauty",
        formNeedLabel: "O que você precisa?",
        formLangsLabel: "Idiomas do site (múltipla escolha)",
        formNotesLabel: "Algo a mais? (opcional)",
        formNotesPlaceholder: "Conte detalhes dos seus serviços, prazo desejado ou referências...",
        previewLabel: "Pré-visualização da mensagem no WhatsApp:",
        copyBtn: "Copiar mensagem",
        copiedText: "Mensagem copiada!",
        sendBtn: "Enviar pelo WhatsApp",
        segmentOptions: [
          "Unhas (Nail Designer)",
          "Cílios e sobrancelhas (Lash & Brows)",
          "Estética facial e corporal",
          "Depilação a laser",
          "Maquiagem e cabelo",
          "Spa ou clínica de estética",
          "Cursos e formação na beleza",
          "Outro",
        ],
        needOptions: [
          "Site novo do zero",
          "Reformular o meu site atual",
          "Catálogo digital de serviços",
          "Ainda estou decidindo",
        ],
      },
      faq: {
        title: "Perguntas frequentes",
        subtitle: "Tudo o que você precisa saber antes de começar.",
        ctaSection: "Quero o meu site",
      },
      footer: {
        copyright: "© 2026 GlowSites. Todos os direitos reservados.",
        privacyPolicyBtn: "Política de Privacidade",
        madeWith: "Sites com alma para profissionais da beleza.",
      },
      privacyModal: {
        title: "Política de Privacidade e Proteção de Dados",
        close: "Fechar",
        content: `A GlowSites respeita a sua privacidade e a proteção dos seus dados pessoais, em total conformidade com a LGPD (Lei Geral de Proteção de Dados do Brasil) e com o GDPR (Regulamento Geral de Proteção de Dados da União Europeia / Reino Unido).

1. Coleta de Informações: Coletamos estritamente os dados que você informa voluntariamente através do nosso formulário de contato e nas conversas (nome, segmento de atuação, cidade/país, perfil do Instagram e observações sobre o projeto) para fins exclusivos de formular o seu esboço e responder ao seu contato.

2. Uso dos Dados: Os dados informados são utilizados única e exclusivamente para elaboração do esboço de web design, orçamentos e comunicação direta com você. Jamais vendemos, alugamos ou compartilhamos seus dados com terceiros para fins publicitários.

3. Comunicação via WhatsApp: Ao clicar no botão de envio, a mensagem pré-formatada é transmitida através da plataforma do WhatsApp (Meta Platforms). O uso do WhatsApp está sujeito aos termos de privacidade da própria plataforma.

4. Seus Direitos: Você tem o direito de solicitar a qualquer momento a confirmação, correção, atualização ou exclusão definitiva dos seus dados dos nossos registros de contato.

5. Contato do Encarregado: Para qualquer solicitação relacionada à privacidade de dados, entre em contato diretamente pelo WhatsApp (+55 71 9210-2766) ou pelo Instagram oficial (@glowsites.us).`,
      },
      floatingCta: "Quero meu site",
    },
    en: {
      nav: {
        projects: "Projects",
        howItWorks: "How it works",
        reviews: "Reviews",
        instagram: "Instagram",
        contact: "Contact",
        faq: "FAQ",
        cta: "Get my website",
        skipToContent: "Skip to main content",
      },
      hero: {
        eyebrow: "WEB DESIGNER FOR BEAUTY PROFESSIONALS • GLOWSITES",
        titlePre: "Websites that make your",
        titleHighlight: "beauty business seen,",
        titlePost: "chosen and remembered",
        subtitle: "I create elegant, multilingual websites for beauty professionals: more authority, organised services, bookings straight to your WhatsApp and clients finding you on Google.",
        ctaWhatsapp: "Get my website",
        ctaProjects: "Explore projects",
        kpiProjects: "+105 websites launched for beauty professionals",
        kpiCountries: "+10 countries served worldwide",
        kpiSeo: "Expert in SEO, GEO & AIO (Google & AI Search)",
      },
      marquee: [
        "AESTHETICS",
        "NAILS",
        "LASHES",
        "LASER",
        "MAKEUP",
        "SPA",
        "CLINICS",
        "WEBSITES WITH SOUL",
      ],
      projects: {
        eyebrow: "RECENT PROJECTS",
        title: "Projects already live",
        subtitle: "Every website is built from scratch around each professional’s identity, copy and audience. See them up close.",
        viewOnline: "View live project",
        quickPreview: "Preview",
        ctaSection: "I want a website like this",
        previewModalTitle: "Live Project Preview",
        deviceDesktop: "Desktop",
        deviceMobile: "Mobile",
        openNewTab: "Open in new tab",
        iframeNotice: "Note: if the site doesn't load inside the preview frame due to hosting security headers, click 'Open in new tab'.",
      },
      howItWorks: {
        title: "From the first chat to a live website, with no hassle",
        subtitle: "You see the result before deciding. You only pay when you love your website.",
        meetLanaTitle: "Hi, I'm Lana",
        meetLanaBio: "Web designer specialized in beauty businesses. I understand your industry and transform your expertise into an elegant website that organizes your treatments and brings high-value clients to your WhatsApp.",
        meetLanaSub: "Warm, personalized attention dedicated to elevating your brand presence.",
        includedTitle: "What's included in every project",
        extrasTitle: "Add-ons upon request",
        extrasText: "Digital service menu & price catalog to send via WhatsApp · Website redesigns · Routine updates.",
        ctaSection: "Get a free sketch of my website",
      },
      feedbacks: {
        title: "Those who trusted, recommend",
        subtitle: "Words from professionals who got a website worthy of their work.",
        verified: "Verified Client",
        ctaSection: "I want the same for my business",
      },
      instagram: {
        title: "Follow the GlowSites behind the scenes",
        subtitle: "New projects, design ideas and tips to help your beauty brand stand out.",
        handle: "@glowsites.us",
        bioSnippet: "Bespoke & multilingual web design for beauty entrepreneurs.",
        followBtn: "Follow on Instagram",
        whatsappBtn: "Chat on WhatsApp",
        feedLabel: "Recent portfolio posts",
      },
      contact: {
        title: "Shall we create the website your work deserves?",
        subtitle: "Tell me a little about you and I’ll prepare your sketch, no strings attached.",
        directTitle: "Direct contact",
        respondFast: "I respond as quickly as possible with care and attention.",
        formNameLabel: "What is your name?",
        formNamePlaceholder: "E.g.: Vanessa Smith",
        formSegmentLabel: "Your beauty specialty",
        formLocationLabel: "Country and city",
        formLocationPlaceholder: "E.g.: London, UK or Boston, USA",
        formInstagramLabel: "Your Instagram handle (@)",
        formInstagramPlaceholder: "@yourname.beauty",
        formNeedLabel: "What do you need?",
        formLangsLabel: "Website languages (multi-select)",
        formNotesLabel: "Anything else? (optional)",
        formNotesPlaceholder: "Share details on your services, target date, or aesthetic inspiration...",
        previewLabel: "Live WhatsApp message preview:",
        copyBtn: "Copy message",
        copiedText: "Message copied!",
        sendBtn: "Send via WhatsApp",
        segmentOptions: [
          "Nails (Nail Artist / Studio)",
          "Lashes & Brows",
          "Facial & Body Aesthetics",
          "Laser Hair Removal",
          "Makeup & Hair Styling",
          "Spa or Aesthetic Clinic",
          "Beauty Masterclasses & Training",
          "Other specialty",
        ],
        needOptions: [
          "New bespoke website from scratch",
          "Redesign my existing website",
          "Digital service price catalog",
          "Still exploring options",
        ],
      },
      faq: {
        title: "Frequently asked questions",
        subtitle: "Everything you need to know before getting started.",
        ctaSection: "Get my website",
      },
      footer: {
        copyright: "© 2026 GlowSites. All rights reserved.",
        privacyPolicyBtn: "Privacy Policy",
        madeWith: "Websites with soul for beauty professionals worldwide.",
      },
      privacyModal: {
        title: "Privacy Policy & Data Protection",
        close: "Close",
        content: `GlowSites strictly respects your privacy and personal data, complying fully with GDPR and international data protection standards.

1. Information Collection: We solely collect data voluntarily submitted via our contact form (name, specialty, location, Instagram handle, and project preferences) strictly to formulate your design draft.

2. Data Usage: Your submitted details are never sold, rented, or shared with third parties for commercial advertising. They are used purely to communicate regarding your web design project.

3. WhatsApp Communication: Submitting the form opens a pre-formatted message in WhatsApp (Meta Platforms). Use of WhatsApp is subject to Meta's own privacy terms.

4. Your Rights: You have the right to request access, correction, or immediate deletion of your contact data from our records at any time.

5. Inquiries: Reach out via WhatsApp (+55 71 9210-2766) or Instagram (@glowsites.us).`,
      },
      floatingCta: "Get my website",
    },
    es: {
      nav: {
        projects: "Proyectos",
        howItWorks: "Cómo funciona",
        reviews: "Reseñas",
        instagram: "Instagram",
        contact: "Contacto",
        faq: "FAQ",
        cta: "Quiero mi web",
        skipToContent: "Saltar al contenido principal",
      },
      hero: {
        eyebrow: "DISEÑADORA WEB PARA PROFESIONALES DE LA BELLEZA • GLOWSITES",
        titlePre: "Sitios web que hacen tu",
        titleHighlight: "belleza visible,",
        titlePost: "elegida y recordada",
        subtitle: "Creo sitios web elegantes y bilingües para profesionales de la belleza: mayor prestigio, servicios organizados, reservas directas a tu WhatsApp y clientas encontrándote en Google.",
        ctaWhatsapp: "Quiero mi web",
        ctaProjects: "Ver proyectos",
        kpiProjects: "+105 proyectos entregados a profesionales de la belleza",
        kpiCountries: "+10 países con profesionales atendidas",
        kpiSeo: "Experta en SEO, GEO y AIO (Google e IAs)",
      },
      marquee: [
        "ESTÉTICA",
        "UÑAS",
        "PESTAÑAS",
        "LÁSER",
        "MAQUILLAJE",
        "SPA",
        "CLÍNICAS",
        "SITIOS CON ALMA",
      ],
      projects: {
        eyebrow: "PROYECTOS RECIENTES",
        title: "Proyectos que ya están online",
        subtitle: "Cada sitio web nace desde cero, con la identidad, el copy y el público de cada profesional. Míralos de cerca.",
        viewOnline: "Ver proyecto online",
        quickPreview: "Vista previa",
        ctaSection: "Quiero un proyecto así",
        previewModalTitle: "Vista Previa del Proyecto",
        deviceDesktop: "Ordenador",
        deviceMobile: "Móvil",
        openNewTab: "Abrir en nueva pestaña",
        iframeNotice: "Nota: si el sitio no carga en la vista previa debido a políticas de seguridad del servidor, haz clic en 'Abrir en nueva pestaña'.",
      },
      howItWorks: {
        title: "Desde la primera charla hasta tu web online, sin complicaciones",
        subtitle: "Ves el resultado antes de decidir. Solo pagas cuando estés completamente enamorada de tu sitio web.",
        meetLanaTitle: "Hola, soy Lana",
        meetLanaBio: "Diseñadora web especializada en el sector de la belleza. Entiendo tu negocio y transformo tu autoridad en una web elegante que organiza tus servicios y lleva a las clientas ideales a tu WhatsApp.",
        meetLanaSub: "Atención cercana y personalizada, enfocada en potenciar tu marca.",
        includedTitle: "Qué incluye tu sitio web",
        extrasTitle: "Servicios adicionales bajo consulta",
        extrasText: "Catálogo digital de servicios y precios para enviar por WhatsApp · Rediseño de webs existentes · Actualizaciones periódicas.",
        ctaSection: "Quiero un boceto de mi web",
      },
      feedbacks: {
        title: "Quienes confiaron, recomiendan",
        subtitle: "Palabras de profesionales que tienen una web a la altura de su dedicación.",
        verified: "Clienta verificada",
        ctaSection: "Quiero lo mismo para mi negocio",
      },
      instagram: {
        title: "Descubre el detrás de escena de GlowSites",
        subtitle: "Nuevos proyectos, ideas de diseño y consejos para que tu marca de belleza destaque.",
        handle: "@glowsites.us",
        bioSnippet: "Diseño web prémium y bilingüe para profesionales de la belleza.",
        followBtn: "Seguir en Instagram",
        whatsappBtn: "Hablar por WhatsApp",
        feedLabel: "Proyectos recientes en el feed",
      },
      contact: {
        title: "¿Creamos la web que tu trabajo merece?",
        subtitle: "Cuéntame un poco sobre ti y preparo tu boceto, sin ningún compromiso.",
        directTitle: "Contacto directo",
        respondFast: "Respondo lo antes posible, con cercanía y dedicación.",
        formNameLabel: "¿Cómo te gustaría que te llame?",
        formNamePlaceholder: "Ej: Vanessa Gómez",
        formSegmentLabel: "Tu especialidad",
        formLocationLabel: "País y ciudad",
        formLocationPlaceholder: "Ej: Londres, Reino Unido o Madrid, España",
        formInstagramLabel: "Tu Instagram (@)",
        formInstagramPlaceholder: "@tunombre.beauty",
        formNeedLabel: "¿Qué necesitas?",
        formLangsLabel: "Idiomas del sitio (selección múltiple)",
        formNotesLabel: "¿Algo más que quieras contarme? (opcional)",
        formNotesPlaceholder: "Cuéntame sobre tus servicios, plazos deseados o referencias de diseño...",
        previewLabel: "Vista previa del mensaje para WhatsApp:",
        copyBtn: "Copiar mensaje",
        copiedText: "¡Mensaje copiado!",
        sendBtn: "Enviar por WhatsApp",
        segmentOptions: [
          "Uñas (Nail Designer)",
          "Pestañas y cejas (Lashes & Brows)",
          "Estética facial y corporal",
          "Depilación láser",
          "Maquillaje y peluquería",
          "Spa o clínica estética",
          "Cursos y formación en belleza",
          "Otra especialidad",
        ],
        needOptions: [
          "Sitio web nuevo desde cero",
          "Rediseñar mi sitio actual",
          "Catálogo digital de servicios",
          "Todavía lo estoy evaluando",
        ],
      },
      faq: {
        title: "Preguntas frecuentes",
        subtitle: "Todo lo que necesitas saber antes de comenzar.",
        ctaSection: "Quiero mi web",
      },
      footer: {
        copyright: "© 2026 GlowSites. Todos los derechos reservados.",
        privacyPolicyBtn: "Política de Privacidad",
        madeWith: "Sitios con alma para profesionales de la belleza.",
      },
      privacyModal: {
        title: "Política de Privacidad y Protección de Datos",
        close: "Cerrar",
        content: `GlowSites respeta plenamente tu privacidad y protege tus datos personales en estricta conformidad con el RGPD (Reglamento General de Protección de Datos de la UE/Reino Unido) y normativas internacionales.

1. Recopilación de Información: Recopilamos únicamente los datos que proporcionas de forma voluntaria en nuestro formulario de contacto (nombre, especialidad, ubicación, usuario de Instagram y detalles del proyecto) para generar tu boceto visual y responderte.

2. Uso de la Información: Tus datos nunca son vendidos ni cedidos a terceros. Se utilizan exclusivamente para la preparación del diseño y la comunicación directa sobre tu proyecto.

3. Comunicación por WhatsApp: Al enviar el mensaje, este se transmite a través de la aplicación WhatsApp (Meta Platforms), quedando sujeto a sus términos de privacidad.

4. Tus Derechos: Puedes solicitar la rectificación o eliminación total de tus datos en cualquier momento.

5. Contacto: Puedes comunicarte con nosotros vía WhatsApp (+55 71 9210-2766) o por Instagram (@glowsites.us).`,
      },
      floatingCta: "Quero mi web",
    },
  },
};

/**
 * Builds formatted WhatsApp link with message encoding
 */
export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${siteData.whatsappPhone}?text=${encodeURIComponent(message)}`;
}

/**
 * Standard default messages per language
 */
export function getDefaultWhatsAppMessage(lang: Language): string {
  switch (lang) {
    case 'en':
      return "Hi, Lana! 💛 I saw your portfolio and would like to learn more about creating a website for my beauty business.";
    case 'es':
      return "¡Hola, Lana! 💛 Vi tu portafolio y me gustaría saber más sobre la creación de un sitio web para mi negocio de belleza.";
    case 'pt':
    default:
      return "Oi, Lana! 💛 Vi o seu portfólio e gostaria de saber mais sobre a criação de um site para o meu negócio.";
  }
}

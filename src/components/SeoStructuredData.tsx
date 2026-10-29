/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { siteData, Language } from '../data/siteData';

interface SeoProps {
  currentLang: Language;
}

export const SeoStructuredData: React.FC<SeoProps> = ({ currentLang }) => {
  useEffect(() => {
    // 1. Dynamic document title and language tag
    const langTitles: Record<Language, string> = {
      pt: 'GlowSites | Criação de Sites para Profissionais da Beleza (Portfólio)',
      en: 'GlowSites | Website Design for Beauty Professionals (Portfolio)',
      es: 'GlowSites | Diseño de Sitios Web para Profesionales de la Belleza',
    };

    const langDescriptions: Record<Language, string> = {
      pt: 'Portfólio de sites elegantes e bilíngues para esteticistas, nail designers, lash artists e clínicas. Veja os projetos e peça o seu esboço.',
      en: 'Portfolio of elegant and multilingual websites for aestheticians, nail designers, lash artists, and clinics. Explore live projects.',
      es: 'Portafolio de sitios web elegantes y bilingües para esteticistas, manicuristas, lashistas y clínicas de belleza. Conoce los proyectos.',
    };

    const langHtmlAttr: Record<Language, string> = {
      pt: 'pt-BR',
      en: 'en',
      es: 'es',
    };

    document.title = langTitles[currentLang];
    document.documentElement.lang = langHtmlAttr[currentLang];

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', langDescriptions[currentLang]);
    }
  }, [currentLang]);

  // 2. Structured JSON-LD Schemas: ProfessionalService, ItemList, FAQPage
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': 'https://glowsites.us/#organization',
        name: 'GlowSites',
        url: 'https://glowsites.us/',
        logo: 'https://glowsites.us/favicon.svg',
        image: siteData.heroImage,
        description:
          'Estúdio de criação de sites elegantes e bilíngues para profissionais da beleza (estética, unhas, cílios, laser, maquiagem, spas e clínicas).',
        telephone: '+55 71 9210-2766',
        sameAs: [siteData.instagramUrl],
        areaServed: [
          { '@type': 'Country', name: 'Brasil' },
          { '@type': 'Country', name: 'Portugal' },
          { '@type': 'Country', name: 'United Kingdom' },
          { '@type': 'Country', name: 'United States' },
          { '@type': 'Country', name: 'Germany' },
        ],
        knowsLanguage: ['pt', 'en', 'es'],
        founder: {
          '@type': 'Person',
          name: 'Lana',
          jobTitle: 'Web Designer para Profissionais da Beleza',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Serviços de Web Design GlowSites',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Criação de Sites One Page para Beleza',
                description: 'Sites elegantes, responsivos, bilíngues com integração ao WhatsApp e SEO.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Catálogo Digital de Procedimentos e Valores',
                description: 'Menu online para envio e conversão direta no WhatsApp.',
              },
            },
          ],
        },
      },
      {
        '@type': 'ItemList',
        '@id': 'https://glowsites.us/#projects',
        name: 'Projetos Realizados - GlowSites',
        description: 'Lista de sites ao vivo criados para especialistas da beleza no Reino Unido, Portugal, EUA e Brasil.',
        itemListElement: siteData.projects.map((proj, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          item: {
            '@type': 'CreativeWork',
            name: proj.name,
            url: proj.url,
            genre: proj.segment.pt,
            locationCreated: `${proj.city}, ${proj.country}`,
          },
        })),
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://glowsites.us/#faq',
        mainEntity: siteData.faq.map((item) => ({
          '@type': 'Question',
          name: item.question[currentLang],
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer[currentLang],
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

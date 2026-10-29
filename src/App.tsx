/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language } from './data/siteData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { ProjectsSection } from './components/ProjectsSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { FeedbacksSection } from './components/FeedbacksSection';
import { InstagramSection } from './components/InstagramSection';
import { ContactSection } from './components/ContactSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { FloatingLanguageSwitcher } from './components/FloatingLanguageSwitcher';
import { SeoStructuredData } from './components/SeoStructuredData';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('glowsites_lang');
      if (saved === 'pt' || saved === 'en' || saved === 'es') {
        return saved;
      }
    } catch {
      // Fallback
    }
    return 'pt';
  });

  const handleSelectLang = (lang: Language) => {
    setCurrentLang(lang);
    try {
      localStorage.setItem('glowsites_lang', lang);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="min-h-screen bg-[#F6EFE4] text-[#3F2E22] flex flex-col font-sans-montserrat selection:bg-[#F2DFA7] selection:text-[#4A3727]">
      {/* Dynamic SEO JSON-LD & Meta Tags */}
      <SeoStructuredData currentLang={currentLang} />

      {/* Fixed Sticky Header Navbar */}
      <Navbar currentLang={currentLang} onSelectLang={handleSelectLang} />

      {/* Main One Page Flow */}
      <main id="main-content" className="flex-1">
        {/* Section 1: Hero (Bege Claro com Glow Dourado) */}
        <Hero currentLang={currentLang} />

        {/* Section Ribbon: Marquee (Dourado Espelhado) */}
        <Marquee currentLang={currentLang} />

        {/* Section 2: Projetos Recentes (Marrom Claro / Mocha) */}
        <ProjectsSection currentLang={currentLang} />

        {/* Section 3: Como Funciona e O Que Inclui (Bege Claro) */}
        <HowItWorksSection currentLang={currentLang} />

        {/* Section 4: Feedbacks 5 Estrelas (Marrom Claro / Mocha) */}
        <FeedbacksSection currentLang={currentLang} />

        {/* Section 5: Instagram Bastidores (Bege Claro) */}
        <InstagramSection currentLang={currentLang} />

        {/* Section 6: Contato com Pré-visualização WhatsApp (Marrom Claro / Mocha) */}
        <ContactSection currentLang={currentLang} />

        {/* Section 7: FAQ Accordion (Bege Claro) */}
        <FAQSection currentLang={currentLang} />
      </main>

      {/* Section 8: Rodapé (Marrom Profundo com Política de Privacidade) */}
      <Footer currentLang={currentLang} />

      {/* Floating Action Button: WhatsApp */}
      <FloatingWhatsApp currentLang={currentLang} />

      {/* Floating Language Switcher: Accompanies navigation on the side */}
      <FloatingLanguageSwitcher currentLang={currentLang} onSelectLang={handleSelectLang} />
    </div>
  );
}

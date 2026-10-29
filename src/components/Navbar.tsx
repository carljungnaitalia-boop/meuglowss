/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { siteData, Language, buildWhatsAppLink, getDefaultWhatsAppMessage } from '../data/siteData';
import { Menu, X, Sparkles, MessageCircle } from 'lucide-react';

interface NavbarProps {
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentLang, onSelectLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = siteData.translations[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#projetos', label: t.nav.projects },
    { href: '#como-funciona', label: t.nav.howItWorks },
    { href: '#avaliacoes', label: t.nav.reviews },
    { href: '#instagram', label: t.nav.instagram },
    { href: '#contato', label: t.nav.contact },
    { href: '#faq', label: t.nav.faq },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const whatsappUrl = buildWhatsAppLink(getDefaultWhatsAppMessage(currentLang));

  return (
    <>
      {/* Accessible skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#4A3727] text-[#F6EFE4] rounded shadow-lg font-medium"
      >
        {t.nav.skipToContent}
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F6EFE4]/95 backdrop-blur-md shadow-sm border-b border-[#C29F5B]/30 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            className="flex items-center gap-1.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C29F5B] rounded-sm py-1"
            aria-label="GlowSites Home"
          >
            <div className="relative inline-flex items-center">
              <span className="font-serif-cormorant text-2xl sm:text-3xl font-bold tracking-[0.22em] text-[#4A3727] uppercase">
                GLOWSITES
              </span>
              <span
                className="absolute left-[3.15rem] -top-1 text-[#C29F5B] transform group-hover:scale-125 transition-transform duration-300 pointer-events-none"
                aria-hidden="true"
              >
                ✦
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#4A3727]"
            aria-label="Primary Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-1 hover:text-[#8F7030] transition-colors whitespace-nowrap group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C29F5B] rounded"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C29F5B] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: Language Selector & Primary CTA */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Trilingual Selector Pill with Clear Flags */}
            <div
              className="flex items-center p-0.5 rounded-full bg-[#EADFCC]/80 border border-[#C29F5B]/50 text-xs font-semibold shadow-xs"
              role="group"
              aria-label="Seletor de idioma / Language selector"
            >
              <button
                type="button"
                onClick={() => onSelectLang('pt')}
                title="Ler em português"
                aria-label="Ler em português (Brasil)"
                aria-pressed={currentLang === 'pt'}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-full transition-all duration-200 cursor-pointer ${
                  currentLang === 'pt'
                    ? 'bg-[#4A3727] text-[#FFF3C9] shadow-xs font-bold'
                    : 'text-[#4A3727] hover:text-[#8F7030]'
                }`}
              >
                <span className="text-[11px]">🇧🇷</span>
                <span>PT</span>
              </button>
              <button
                type="button"
                onClick={() => onSelectLang('en')}
                title="Read in English"
                aria-label="Read in English"
                aria-pressed={currentLang === 'en'}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-full transition-all duration-200 cursor-pointer ${
                  currentLang === 'en'
                    ? 'bg-[#4A3727] text-[#FFF3C9] shadow-xs font-bold'
                    : 'text-[#4A3727] hover:text-[#8F7030]'
                }`}
              >
                <span className="text-[11px]">🇬🇧</span>
                <span>EN</span>
              </button>
              <button
                type="button"
                onClick={() => onSelectLang('es')}
                title="Leer en español"
                aria-label="Leer en español"
                aria-pressed={currentLang === 'es'}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-full transition-all duration-200 cursor-pointer ${
                  currentLang === 'es'
                    ? 'bg-[#4A3727] text-[#FFF3C9] shadow-xs font-bold'
                    : 'text-[#4A3727] hover:text-[#8F7030]'
                }`}
              >
                <span className="text-[11px]">🇪🇸</span>
                <span>ES</span>
              </button>
            </div>

            {/* Desktop WhatsApp CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#3F2E22] bg-gold-mirror rounded-full shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 shimmer-button focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C29F5B] cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-[#3F2E22]" />
              <span className="whitespace-nowrap">{t.nav.cta}</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#4A3727] hover:bg-[#EADFCC] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C29F5B] cursor-pointer"
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF5EE] border-b border-[#C29F5B]/30 px-6 pt-4 pb-6 shadow-2xl animate-fadeIn">
            {/* Clear Language Choice on Mobile */}
            <div className="mb-4 p-3 bg-[#EADFCC]/60 rounded-xl border border-[#C29F5B]/30">
              <p className="text-xs font-bold uppercase tracking-wider text-[#8F7030] mb-2 flex items-center gap-1.5">
                <span>🌐</span>
                <span>Ler em / Read in / Leer en:</span>
              </p>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => {
                    onSelectLang('pt');
                    setIsMobileMenuOpen(false);
                  }}
                  className={`py-2 px-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                    currentLang === 'pt'
                      ? 'bg-[#4A3727] text-[#FFF3C9] shadow-sm'
                      : 'bg-[#FAF5EE] text-[#4A3727] border border-[#C29F5B]/40'
                  }`}
                >
                  <span>🇧🇷</span>
                  <span>Português</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onSelectLang('en');
                    setIsMobileMenuOpen(false);
                  }}
                  className={`py-2 px-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                    currentLang === 'en'
                      ? 'bg-[#4A3727] text-[#FFF3C9] shadow-sm'
                      : 'bg-[#FAF5EE] text-[#4A3727] border border-[#C29F5B]/40'
                  }`}
                >
                  <span>🇬🇧</span>
                  <span>English</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onSelectLang('es');
                    setIsMobileMenuOpen(false);
                  }}
                  className={`py-2 px-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                    currentLang === 'es'
                      ? 'bg-[#4A3727] text-[#FFF3C9] shadow-sm'
                      : 'bg-[#FAF5EE] text-[#4A3727] border border-[#C29F5B]/40'
                  }`}
                >
                  <span>🇪🇸</span>
                  <span>Español</span>
                </button>
              </div>
            </div>

            <div className="flex flex-col space-y-3 mb-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="py-2 text-base font-medium text-[#4A3727] hover:text-[#8F7030] border-b border-[#EADFCC] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="w-full flex items-center justify-center gap-2 py-3.5 text-xs font-bold uppercase tracking-wider text-[#3F2E22] bg-gold-mirror rounded-full shadow-gold-glow shimmer-button"
              >
                <MessageCircle className="w-4 h-4 fill-[#3F2E22]" />
                <span>{t.nav.cta}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

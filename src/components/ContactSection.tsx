/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { siteData, Language, buildWhatsAppLink } from '../data/siteData';
import {
  MessageCircle,
  Instagram,
  Copy,
  Check,
  Send,
  Sparkles,
  Clock,
  ShieldCheck,
} from 'lucide-react';

interface ContactSectionProps {
  currentLang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
  const t = siteData.translations[currentLang].contact;

  // Form states
  const [name, setName] = useState('');
  const [segment, setSegment] = useState(t.segmentOptions[0]);
  const [location, setLocation] = useState('');
  const [instagram, setInstagram] = useState('');
  const [need, setNeed] = useState(t.needOptions[0]);
  const [selectedLangs, setSelectedLangs] = useState<string[]>(['Português (PT)']);
  const [notes, setNotes] = useState('');
  const [copied, setCopied] = useState(false);

  // Available language choices for the project
  const langOptions = [
    { id: 'pt', label: 'Português (PT)' },
    { id: 'en', label: 'Inglês (EN)' },
    { id: 'es', label: 'Espanhol (ES)' },
  ];

  const handleLangToggle = (label: string) => {
    if (selectedLangs.includes(label)) {
      if (selectedLangs.length > 1) {
        setSelectedLangs(selectedLangs.filter((l) => l !== label));
      }
    } else {
      setSelectedLangs([...selectedLangs, label]);
    }
  };

  // Build the live formatted WhatsApp message according to the PRD template
  const formattedMessage = useMemo(() => {
    const safeName = name.trim() || (currentLang === 'en' ? '[Your Name]' : currentLang === 'es' ? '[Tu Nombre]' : '[Seu Nome]');
    const safeSegment = segment;
    const safeLocation = location.trim() || (currentLang === 'en' ? '[City / Country]' : currentLang === 'es' ? '[Ciudad / País]' : '[Cidade / País]');
    const safeInstagram = instagram.trim() || '@seu.perfil';
    const safeNeed = need;
    const safeLangs = selectedLangs.join(', ');
    const safeNotes = notes.trim() || (currentLang === 'en' ? 'None' : currentLang === 'es' ? 'Ninguna' : 'Nenhuma');

    if (currentLang === 'en') {
      return `Hi, Lana! 💛 I saw your portfolio and I would love a website for my business.\n\nName: ${safeName}\nSpecialty: ${safeSegment}\nCountry/City: ${safeLocation}\nInstagram: ${safeInstagram}\nI need: ${safeNeed}\nLanguages: ${safeLangs}\nNotes: ${safeNotes}`;
    }

    if (currentLang === 'es') {
      return `¡Hola, Lana! 💛 Vi tu portafolio y quiero un sitio web para mi negocio.\n\nNombre: ${safeName}\nEspecialidad: ${safeSegment}\nPaís/Ciudad: ${safeLocation}\nInstagram: ${safeInstagram}\nNecesito: ${safeNeed}\nIdiomas: ${safeLangs}\nObservaciones: ${safeNotes}`;
    }

    return `Oi, Lana! 💛 Vi o seu portfólio e quero um site para o meu negócio.\n\nNome: ${safeName}\nSegmento: ${safeSegment}\nPaís/cidade: ${safeLocation}\nInstagram: ${safeInstagram}\nPreciso de: ${safeNeed}\nIdiomas: ${safeLangs}\nObservações: ${safeNotes}`;
  }, [name, segment, location, instagram, need, selectedLangs, notes, currentLang]);

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(formattedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSendWhatsApp = () => {
    const url = buildWhatsAppLink(formattedMessage);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-[#8B6B52] text-[#F6EFE4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EE]/10 border border-[#C29F5B]/30 text-xs font-semibold tracking-widest text-[#F2DFA7] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#F2DFA7]" />
            <span>SOLICITE SEU ESBOÇO</span>
          </div>

          <h2 className="font-serif-cormorant text-3xl sm:text-4xl md:text-5xl font-bold text-[#F6EFE4] tracking-tight mb-4 text-balance">
            {t.title}
          </h2>

          <p className="text-base sm:text-lg text-[#F6EFE4]/80 leading-relaxed font-light">
            {t.subtitle}
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Contact Info & Trust Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Cards */}
            <div className="bg-[#FAF5EE] text-[#3F2E22] rounded-2xl p-6 sm:p-8 border border-[#C29F5B]/40 shadow-lg">
              <h3 className="font-serif-cormorant text-2xl font-bold text-[#4A3727] mb-2">
                {t.directTitle}
              </h3>
              <p className="text-xs sm:text-sm text-[#8F7030] mb-6 flex items-center gap-2 font-medium">
                <Clock className="w-4 h-4 text-[#C29F5B]" />
                <span>{t.respondFast}</span>
              </p>

              <div className="space-y-4">
                {/* WhatsApp Item */}
                <a
                  href={`https://wa.me/${siteData.whatsappPhone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-[#EADFCC]/50 hover:bg-[#EADFCC] border border-[#C29F5B]/30 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold-mirror flex items-center justify-center text-[#3F2E22] shadow-xs">
                      <MessageCircle className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[#8F7030] font-bold">
                        WhatsApp Direto
                      </span>
                      <p className="text-sm font-bold text-[#4A3727]">
                        {siteData.whatsappDisplay}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#8F7030] group-hover:translate-x-1 transition-transform">
                    Abrir ↗
                  </span>
                </a>

                {/* Instagram Item */}
                <a
                  href={siteData.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-[#EADFCC]/50 hover:bg-[#EADFCC] border border-[#C29F5B]/30 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold-mirror flex items-center justify-center text-[#3F2E22] shadow-xs">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[#8F7030] font-bold">
                        Instagram Oficial
                      </span>
                      <p className="text-sm font-bold text-[#4A3727]">
                        {siteData.instagramHandle}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#8F7030] group-hover:translate-x-1 transition-transform">
                    Seguir ↗
                  </span>
                </a>
              </div>
            </div>

            {/* Trust Pill Guarantee */}
            <div className="bg-[#4A3727]/60 rounded-xl p-5 border border-[#C29F5B]/30 text-xs text-[#F6EFE4]/90 space-y-2">
              <div className="flex items-center gap-2 text-[#F2DFA7] font-semibold text-sm">
                <ShieldCheck className="w-4 h-4 text-[#F2DFA7]" />
                <span>Garantia de Satisfação GlowSites</span>
              </div>
              <p className="leading-relaxed">
                Você recebe um esboço visual navegável sem qualquer custo antecipado. O pagamento do projeto só é efetuado após a sua total aprovação.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Mini Form */}
          <div className="lg:col-span-7 bg-[#FAF5EE] text-[#3F2E22] rounded-2xl p-6 sm:p-8 border border-[#C29F5B]/40 shadow-xl">
            <div className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#4A3727] mb-1.5">
                  {t.formNameLabel}
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.formNamePlaceholder}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#C29F5B]/40 text-sm text-[#3F2E22] placeholder:text-[#3F2E22]/40 focus:outline-none focus:ring-2 focus:ring-[#C29F5B] transition-all"
                />
              </div>

              {/* Segment & Location Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#4A3727] mb-1.5">
                    {t.formSegmentLabel}
                  </label>
                  <select
                    value={segment}
                    onChange={(e) => setSegment(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#C29F5B]/40 text-sm text-[#3F2E22] focus:outline-none focus:ring-2 focus:ring-[#C29F5B] transition-all"
                  >
                    {t.segmentOptions.map((opt, i) => (
                      <option key={i} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#4A3727] mb-1.5">
                    {t.formLocationLabel}
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder={t.formLocationPlaceholder}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#C29F5B]/40 text-sm text-[#3F2E22] placeholder:text-[#3F2E22]/40 focus:outline-none focus:ring-2 focus:ring-[#C29F5B] transition-all"
                  />
                </div>
              </div>

              {/* Instagram & Need Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#4A3727] mb-1.5">
                    {t.formInstagramLabel}
                  </label>
                  <input
                    type="text"
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                    placeholder={t.formInstagramPlaceholder}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#C29F5B]/40 text-sm text-[#3F2E22] placeholder:text-[#3F2E22]/40 focus:outline-none focus:ring-2 focus:ring-[#C29F5B] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#4A3727] mb-1.5">
                    {t.formNeedLabel}
                  </label>
                  <select
                    value={need}
                    onChange={(e) => setNeed(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#C29F5B]/40 text-sm text-[#3F2E22] focus:outline-none focus:ring-2 focus:ring-[#C29F5B] transition-all"
                  >
                    {t.needOptions.map((opt, i) => (
                      <option key={i} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Languages Multi-Select Checkboxes */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#4A3727] mb-2">
                  {t.formLangsLabel}
                </label>
                <div className="flex flex-wrap gap-2">
                  {langOptions.map((l) => {
                    const isSelected = selectedLangs.includes(l.label);
                    return (
                      <button
                        key={l.id}
                        type="button"
                        onClick={() => handleLangToggle(l.label)}
                        className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                          isSelected
                            ? 'bg-[#4A3727] text-[#FFF3C9] border border-[#C29F5B]'
                            : 'bg-[#EADFCC]/60 text-[#4A3727] border border-[#C29F5B]/30 hover:bg-[#EADFCC]'
                        }`}
                        aria-pressed={isSelected}
                      >
                        {isSelected ? <Check className="w-3.5 h-3.5 text-[#C29F5B]" /> : null}
                        <span>{l.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#4A3727] mb-1.5">
                  {t.formNotesLabel}
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={t.formNotesPlaceholder}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#C29F5B]/40 text-sm text-[#3F2E22] placeholder:text-[#3F2E22]/40 focus:outline-none focus:ring-2 focus:ring-[#C29F5B] transition-all resize-none"
                />
              </div>

              {/* Real-time Message Preview Box */}
              <div className="bg-[#EADFCC]/50 rounded-xl p-4 border border-[#C29F5B]/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#8F7030]">
                    {t.previewLabel}
                  </span>
                  <span className="text-[10px] text-[#4A3727]/70 font-mono">
                    wa.me/557192102766
                  </span>
                </div>
                <div className="text-xs text-[#3F2E22] font-mono whitespace-pre-line bg-white/70 rounded-lg p-3 border border-[#C29F5B]/20">
                  {formattedMessage}
                </div>
              </div>

              {/* Form Actions: Copy & Send via WhatsApp */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleCopyMessage}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider text-[#4A3727] bg-[#EADFCC] hover:bg-[#FAF5EE] border border-[#C29F5B]/50 rounded-full transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">{t.copiedText}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#8F7030]" />
                      <span>{t.copyBtn}</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#3F2E22] bg-gold-mirror rounded-full shadow-gold-glow hover:shadow-gold-glow-lg transition-all shimmer-button cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.sendBtn}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

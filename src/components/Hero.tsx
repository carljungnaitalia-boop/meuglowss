/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { siteData, Language, buildWhatsAppLink, getDefaultWhatsAppMessage } from '../data/siteData';
import { ArrowDown, MessageCircle, Sparkles, Globe2, CheckCircle2, Smartphone } from 'lucide-react';

interface HeroProps {
  currentLang: Language;
}

export const Hero: React.FC<HeroProps> = ({ currentLang }) => {
  const [imgError, setImgError] = useState(false);
  const t = siteData.translations[currentLang];
  const whatsappUrl = buildWhatsAppLink(getDefaultWhatsAppMessage(currentLang));

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-[#F6EFE4]">
      {/* Decorative Gold Glow Halos */}
      <div
        className="absolute top-1/4 right-10 w-96 h-96 rounded-full bg-[#F2DFA7]/30 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-[#C29F5B]/15 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 2-column Hero Layout (Photo first on mobile, then text) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Typography, Value Proposition & Actions */}
          <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-[1.5px] bg-[#8F7030]" aria-hidden="true" />
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-[#8F7030]">
                {t.hero.eyebrow}
              </p>
              <span className="w-6 h-[1.5px] bg-[#8F7030] lg:hidden" aria-hidden="true" />
            </div>

            {/* H1 Headline */}
            <h1 className="font-serif-cormorant text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.12] text-[#4A3727] tracking-tight mb-6 text-balance">
              {t.hero.titlePre}{' '}
              <span className="italic font-normal text-gold-mirror inline-block underline decoration-[#C29F5B]/40 decoration-1 underline-offset-8">
                {t.hero.titleHighlight}
              </span>{' '}
              {t.hero.titlePost}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#3F2E22]/90 leading-relaxed max-w-2xl mb-8 font-normal">
              {t.hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10 w-full sm:w-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#3F2E22] bg-gold-mirror rounded-full shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 shimmer-button cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-[#3F2E22]" />
                <span>{t.hero.ctaWhatsapp}</span>
              </a>

              <a
                href="#projetos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#4A3727] bg-[#EADFCC]/80 border border-[#C29F5B]/50 rounded-full hover:bg-[#EADFCC] hover:border-[#8F7030] transition-colors cursor-pointer"
              >
                <span>{t.hero.ctaProjects}</span>
                <ArrowDown className="w-4 h-4 text-[#8F7030]" />
              </a>
            </div>

            {/* Designer Micro-Badge Quote */}
            <div className="flex items-center gap-3 pt-4 border-t border-[#C29F5B]/20">
              <span className="font-allura text-3xl text-[#8F7030] leading-none select-none">
                Lana
              </span>
              <span className="text-xs text-[#8F7030] font-medium tracking-wide">
                • GlowSites Studio Founder & Lead Designer
              </span>
            </div>
          </div>

          {/* Right Column: Lana's Photo in Arched Polished Metal Frame (Appears FIRST on mobile) */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end mb-2 lg:mb-0">
            <div className="relative group max-w-xs sm:max-w-sm md:max-w-md w-full">
              {/* Outer Golden Halo Glow */}
              <div
                className="absolute -inset-2 rounded-t-[140px] rounded-b-[24px] bg-gradient-to-b from-[#F2DFA7]/60 via-[#C29F5B]/40 to-transparent blur-xl opacity-75 group-hover:opacity-100 transition duration-700 pointer-events-none"
                aria-hidden="true"
              />

              {/* Offset Golden Accent Frame */}
              <div
                className="absolute -inset-1.5 rounded-t-[136px] rounded-b-[20px] bg-gold-mirror p-[2px] opacity-90 shadow-gold-glow"
                aria-hidden="true"
              >
                <div className="w-full h-full rounded-t-[134px] rounded-b-[18px] bg-[#F6EFE4]" />
              </div>

              {/* Main Arched Photo Container */}
              <div className="relative z-10 overflow-hidden rounded-t-[132px] rounded-b-[16px] bg-[#EADFCC] aspect-[4/5] shadow-2xl border border-[#C29F5B]/40">
                {!imgError ? (
                  <img
                    src={siteData.heroImage}
                    alt="Lana - Web Designer da GlowSites especializada em profissionais da beleza"
                    className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.02] transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="eager"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#EADFCC] via-[#F6EFE4] to-[#C29F5B]/20 text-center">
                    <div className="w-20 h-20 rounded-full bg-gold-mirror flex items-center justify-center shadow-gold-glow mb-4">
                      <Sparkles className="w-10 h-10 text-[#4A3727]" />
                    </div>
                    <span className="font-serif-cormorant text-2xl font-bold text-[#4A3727]">
                      Lana • GlowSites
                    </span>
                    <span className="text-xs text-[#8F7030] mt-1 uppercase tracking-widest font-semibold">
                      Web Designer para Profissionais da Beleza
                    </span>
                  </div>
                )}

                {/* Subtle Inner Diagonal Light Shimmer Overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-[#4A3727]/30 via-transparent to-white/10 pointer-events-none"
                  aria-hidden="true"
                />

                {/* Floating Glass Pill on bottom */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#F6EFE4]/90 backdrop-blur-md rounded-xl p-3 border border-[#C29F5B]/50 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#C29F5B] animate-pulse" />
                    <span className="text-xs font-semibold text-[#4A3727]">
                      Disponível para novos projetos
                    </span>
                  </div>
                  <span className="text-xs text-[#8F7030] font-bold">2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Credibility Cards Strip (3 Clean High-Impact Cards: +105 projetos, +10 países, Expert em SEO, GEO e AIO) */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          <div className="bg-[#FAF5EE] rounded-[16px] p-5 sm:p-6 border border-[#C29F5B]/30 shadow-xs hover:shadow-gold-glow transition-all duration-300 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gold-mirror text-[#3F2E22] flex items-center justify-center shrink-0 shadow-xs">
              <Sparkles className="w-6 h-6 fill-current" />
            </div>
            <div>
              <p className="text-sm sm:text-base font-bold text-[#4A3727] leading-snug">
                {t.hero.kpiProjects}
              </p>
            </div>
          </div>

          <div className="bg-[#FAF5EE] rounded-[16px] p-5 sm:p-6 border border-[#C29F5B]/30 shadow-xs hover:shadow-gold-glow transition-all duration-300 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gold-mirror text-[#3F2E22] flex items-center justify-center shrink-0 shadow-xs">
              <Globe2 className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm sm:text-base font-bold text-[#4A3727] leading-snug">
                {t.hero.kpiCountries}
              </p>
            </div>
          </div>

          <div className="bg-[#FAF5EE] rounded-[16px] p-5 sm:p-6 border border-[#C29F5B]/30 shadow-xs hover:shadow-gold-glow transition-all duration-300 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gold-mirror text-[#3F2E22] flex items-center justify-center shrink-0 shadow-xs">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm sm:text-base font-bold text-[#4A3727] leading-snug">
                {t.hero.kpiSeo}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

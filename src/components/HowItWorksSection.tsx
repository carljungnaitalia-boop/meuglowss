/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { siteData, Language, buildWhatsAppLink } from '../data/siteData';
import {
  Layout,
  Feather,
  Globe,
  Sparkles,
  MessageCircle,
  Camera,
  MapPin,
  ShieldCheck,
  Server,
  ArrowRight,
  Check,
} from 'lucide-react';

interface HowItWorksProps {
  currentLang: Language;
}

export const HowItWorksSection: React.FC<HowItWorksProps> = ({ currentLang }) => {
  const t = siteData.translations[currentLang].howItWorks;
  const whatsappUrl = buildWhatsAppLink(
    currentLang === 'en'
      ? "Hi Lana! 💛 I'd love to see a free sketch of what my beauty website could look like."
      : currentLang === 'es'
      ? "¡Hola Lana! 💛 Me gustaría ver un boceto gratuito de cómo luciría mi sitio web de belleza."
      : "Oi, Lana! 💛 Quero ver um esboço do meu site, como combinamos no portfólio."
  );

  const iconMap: Record<string, React.ReactNode> = {
    layout: <Layout className="w-5 h-5" />,
    feather: <Feather className="w-5 h-5" />,
    globe: <Globe className="w-5 h-5" />,
    sparkles: <Sparkles className="w-5 h-5" />,
    'message-circle': <MessageCircle className="w-5 h-5" />,
    camera: <Camera className="w-5 h-5" />,
    'map-pin': <MapPin className="w-5 h-5" />,
    'shield-check': <ShieldCheck className="w-5 h-5" />,
    server: <Server className="w-5 h-5" />,
  };

  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-[#F6EFE4] text-[#3F2E22] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EADFCC] border border-[#C29F5B]/40 text-xs font-semibold tracking-widest text-[#8F7030] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C29F5B]" />
            <span>TRANSPARÊNCIA E CUIDADO</span>
          </div>

          <h2 className="font-serif-cormorant text-3xl sm:text-4xl md:text-5xl font-bold text-[#4A3727] tracking-tight mb-4 text-balance">
            {t.title}
          </h2>

          <p className="text-base sm:text-lg text-[#3F2E22]/90 leading-relaxed font-light">
            {t.subtitle}
          </p>
        </div>

        {/* 2-Column Story: Left Meet Lana, Right 5 Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          {/* Left Column: Meet Lana Card */}
          <div className="lg:col-span-5 bg-[#FAF5EE] rounded-2xl p-8 border border-[#C29F5B]/40 shadow-md relative">
            {/* Soft decorative glow */}
            <div
              className="absolute -top-6 -right-6 w-32 h-32 bg-[#F2DFA7]/40 rounded-full blur-2xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16 rounded-full p-[2px] bg-gold-mirror shadow-gold-glow shrink-0">
                <img
                  src={siteData.heroImage}
                  alt="Lana - GlowSites Web Designer"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>

              <div>
                <h3 className="font-serif-cormorant text-2xl font-bold text-[#4A3727]">
                  {t.meetLanaTitle}
                </h3>
                <p className="text-xs text-[#8F7030] font-semibold tracking-wider uppercase">
                  GlowSites Web Studio
                </p>
              </div>
            </div>

            <p className="text-sm text-[#3F2E22] leading-relaxed mb-6 font-normal">
              {t.meetLanaBio}
            </p>

            <p className="text-xs text-[#8F7030] italic mb-6">
              {t.meetLanaSub}
            </p>

            <div className="pt-4 border-t border-[#C29F5B]/30 flex items-center justify-between">
              <span className="font-allura text-4xl text-[#8F7030] select-none">
                Lana
              </span>
              <span className="text-xs font-semibold text-[#4A3727] bg-[#EADFCC] px-3 py-1 rounded-full">
                Especialista em Beleza
              </span>
            </div>
          </div>

          {/* Right Column: 5 Numbered Steps connected by gold line */}
          <div className="lg:col-span-7 relative">
            {/* Vertical Golden Connecting Line */}
            <div
              className="absolute left-6 top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#8F6F2E] via-[#F2DFA7] to-[#B08A3A] hidden sm:block"
              aria-hidden="true"
            />

            <div className="space-y-6 sm:space-y-8">
              {siteData.steps.map((step, idx) => (
                <div key={idx} className="relative flex items-start gap-4 sm:gap-6">
                  {/* Step Number Circle */}
                  <div className="w-12 h-12 rounded-full bg-gold-mirror text-[#3F2E22] font-bold font-serif-cormorant text-xl flex items-center justify-center shrink-0 shadow-gold-glow border border-[#FFF3C9] z-10">
                    {step.number}
                  </div>

                  {/* Step Content */}
                  <div className="bg-[#FAF5EE] rounded-xl p-5 border border-[#C29F5B]/30 shadow-xs flex-1 hover:border-[#C29F5B] transition-colors">
                    <h3 className="font-serif-cormorant text-xl font-bold text-[#4A3727] mb-1">
                      {step.title[currentLang]}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#3F2E22]/90 leading-relaxed">
                      {step.description[currentLang]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* "O que está incluído" 3x3 Grid */}
        <div className="mt-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="font-serif-cormorant text-2xl sm:text-3xl font-bold text-[#4A3727]">
              {t.includedTitle}
            </h3>
            <div className="w-12 h-[2px] bg-gold-mirror mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteData.included.map((item) => (
              <div
                key={item.id}
                className="bg-[#FAF5EE] rounded-[14px] p-6 border border-[#C29F5B]/35 shadow-xs hover:shadow-gold-glow hover:border-[#C29F5B] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#EADFCC] text-[#8F7030] flex items-center justify-center mb-4">
                    {iconMap[item.icon] || <Sparkles className="w-5 h-5" />}
                  </div>

                  <h4 className="font-serif-cormorant text-lg font-bold text-[#4A3727] mb-2 leading-snug">
                    {item.title[currentLang]}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#3F2E22]/85 leading-relaxed">
                    {item.description[currentLang]}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#C29F5B]/20 flex items-center gap-1.5 text-xs text-[#8F7030] font-medium">
                  <Check className="w-3.5 h-3.5 text-[#8F7030]" />
                  <span>Incluso no projeto</span>
                </div>
              </div>
            ))}
          </div>

          {/* Extras under consultation banner */}
          <div className="mt-8 p-5 bg-[#FAF5EE] rounded-xl border border-dashed border-[#C29F5B]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-[#8F7030] text-lg">✦</span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#4A3727]">
                  {t.extrasTitle}
                </p>
                <p className="text-xs text-[#3F2E22]/90">
                  {t.extrasText}
                </p>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#8F7030] hover:text-[#4A3727] underline whitespace-nowrap shrink-0"
            >
              Consultar opções ↗
            </a>
          </div>

          {/* Section CTA */}
          <div className="mt-14 text-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#3F2E22] bg-gold-mirror rounded-full shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 shimmer-button cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-[#3F2E22]" />
              <span>{t.ctaSection}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

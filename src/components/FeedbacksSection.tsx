/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { siteData, Language, buildWhatsAppLink } from '../data/siteData';
import { Star, MessageCircle, Quote, Sparkles } from 'lucide-react';

interface FeedbacksSectionProps {
  currentLang: Language;
}

export const FeedbacksSection: React.FC<FeedbacksSectionProps> = ({ currentLang }) => {
  const t = siteData.translations[currentLang].feedbacks;
  const whatsappUrl = buildWhatsAppLink(
    currentLang === 'en'
      ? "Hi Lana! 💛 I saw the reviews from beauty professionals and I want the same high standard for my business."
      : currentLang === 'es'
      ? "¡Hola Lana! 💛 Vi las reseñas de las profesionales y quiero el mismo nivel de excelencia para mi negocio."
      : "Oi, Lana! 💛 Vi as avaliações no seu portfólio e quero o mesmo para o meu negócio de beleza."
  );

  return (
    <section id="avaliacoes" className="py-20 md:py-28 bg-[#8B6B52] text-[#F6EFE4] relative overflow-hidden">
      {/* Decorative sparkles */}
      <div className="absolute top-12 right-12 text-[#F2DFA7]/15 text-7xl select-none pointer-events-none" aria-hidden="true">
        ✦
      </div>
      <div className="absolute bottom-10 left-10 text-[#F2DFA7]/15 text-6xl select-none pointer-events-none" aria-hidden="true">
        ✦
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EE]/10 border border-[#C29F5B]/30 text-xs font-semibold tracking-widest text-[#F2DFA7] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#F2DFA7]" />
            <span>DEPOIMENTOS 5 ESTRELAS</span>
          </div>

          <h2 className="font-serif-cormorant text-3xl sm:text-4xl md:text-5xl font-bold text-[#F6EFE4] tracking-tight mb-4 text-balance">
            {t.title}
          </h2>

          <p className="text-base sm:text-lg text-[#F6EFE4]/80 leading-relaxed font-light">
            {t.subtitle}
          </p>
        </div>

        {/* 6 Testimonial Cards Grid (3x2 Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {siteData.testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#FAF5EE]/95 text-[#3F2E22] rounded-[16px] p-6 sm:p-7 border border-[#C29F5B]/40 shadow-lg hover:shadow-gold-glow hover:border-[#F2DFA7] transition-all duration-300 flex flex-col justify-between relative group"
            >
              {/* Decorative quotation icon */}
              <div className="absolute top-4 right-5 text-[#C29F5B]/25 group-hover:text-[#C29F5B]/45 transition-colors">
                <Quote className="w-9 h-9 fill-current" />
              </div>

              <div>
                {/* 5 Golden Stars with glow */}
                <div className="flex items-center gap-1 mb-4" aria-label="5 estrelas">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#C29F5B] text-[#C29F5B] drop-shadow-[0_0_6px_rgba(214,174,87,0.4)]"
                    />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm sm:text-[15px] text-[#3F2E22] leading-relaxed italic mb-6">
                  &ldquo;{item.quote[currentLang]}&rdquo;
                </p>
              </div>

              {/* Author Identification */}
              <div className="pt-4 border-t border-[#C29F5B]/25 flex items-center justify-between">
                <div>
                  <h3 className="font-serif-cormorant text-base font-bold text-[#4A3727]">
                    {item.role[currentLang]}
                  </h3>
                  <p className="text-xs text-[#8F7030] font-medium flex items-center gap-1.5 mt-0.5">
                    <span>{item.flag}</span>
                    <span>{item.country}</span>
                  </p>
                </div>

                <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-[#EADFCC] text-[#4A3727]">
                  {t.verified}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Section Bottom CTA */}
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
    </section>
  );
};

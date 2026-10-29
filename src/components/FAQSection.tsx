/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { siteData, Language, buildWhatsAppLink, getDefaultWhatsAppMessage } from '../data/siteData';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';

interface FAQSectionProps {
  currentLang: Language;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ currentLang }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default for immediate preview
  const t = siteData.translations[currentLang].faq;
  const whatsappUrl = buildWhatsAppLink(getDefaultWhatsAppMessage(currentLang));

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#F6EFE4] text-[#3F2E22] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EADFCC] border border-[#C29F5B]/40 text-xs font-semibold tracking-widest text-[#8F7030] uppercase mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#C29F5B]" />
            <span>DÚVIDAS COMUNS</span>
          </div>

          <h2 className="font-serif-cormorant text-3xl sm:text-4xl md:text-5xl font-bold text-[#4A3727] tracking-tight mb-4 text-balance">
            {t.title}
          </h2>

          <p className="text-base sm:text-lg text-[#3F2E22]/90 leading-relaxed font-light">
            {t.subtitle}
          </p>
        </div>

        {/* 10 Accordion Items */}
        <div className="space-y-3.5">
          {siteData.faq.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.id}
                className="bg-[#FAF5EE] rounded-xl border border-[#C29F5B]/35 shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-4.5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C29F5B] cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  id={`faq-question-${item.id}`}
                >
                  <span className="font-serif-cormorant text-lg sm:text-xl font-bold text-[#4A3727] leading-snug">
                    {index + 1}. {item.question[currentLang]}
                  </span>
                  <span
                    className={`w-7 h-7 rounded-full bg-[#EADFCC] flex items-center justify-center shrink-0 text-[#8F7030] transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-gold-mirror text-[#3F2E22]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${item.id}`}
                    className="px-5 sm:px-6 pb-5 pt-1 text-sm text-[#3F2E22]/90 leading-relaxed border-t border-[#C29F5B]/15 bg-white/40"
                  >
                    <p>{item.answer[currentLang]}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Section Final CTA */}
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

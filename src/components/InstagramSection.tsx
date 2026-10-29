/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { siteData, Language, buildWhatsAppLink, getDefaultWhatsAppMessage } from '../data/siteData';
import { Instagram, MessageCircle, Heart } from 'lucide-react';

interface InstagramProps {
  currentLang: Language;
}

export const InstagramSection: React.FC<InstagramProps> = ({ currentLang }) => {
  const t = siteData.translations[currentLang].instagram;
  const whatsappUrl = buildWhatsAppLink(getDefaultWhatsAppMessage(currentLang));
  const instagramUrl = siteData.instagramUrl;

  // Real client professional photos for authentic Instagram gallery feed
  const clientGallery = siteData.projects.slice(0, 6);

  return (
    <section id="instagram" className="py-20 md:py-28 bg-[#F6EFE4] text-[#3F2E22] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EADFCC] border border-[#C29F5B]/40 text-xs font-semibold tracking-widest text-[#8F7030] uppercase mb-4">
            <Instagram className="w-3.5 h-3.5 text-[#C29F5B]" />
            <span>CONEXÃO E BASTIDORES</span>
          </div>

          <h2 className="font-serif-cormorant text-3xl sm:text-4xl md:text-5xl font-bold text-[#4A3727] tracking-tight mb-4 text-balance">
            {t.title}
          </h2>

          <p className="text-base sm:text-lg text-[#3F2E22]/90 leading-relaxed font-light">
            {t.subtitle}
          </p>
        </div>

        {/* Instagram Profile Header Card */}
        <div className="max-w-xl mx-auto bg-[#FAF5EE] rounded-2xl p-6 sm:p-8 border border-[#C29F5B]/40 shadow-md mb-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            {/* Avatar with golden glowing ring */}
            <div className="relative w-18 h-18 rounded-full p-[2.5px] bg-gold-mirror shadow-gold-glow shrink-0">
              <img
                src={siteData.heroImage}
                alt="Instagram GlowSites"
                className="w-full h-full rounded-full object-cover"
              />
              <span className="absolute bottom-0 right-0 p-1 bg-[#4A3727] text-[#FFF3C9] rounded-full text-[10px]">
                ✦
              </span>
            </div>

            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="font-serif-cormorant text-xl sm:text-2xl font-bold text-[#4A3727]">
                  {siteData.brandName}
                </span>
                <span className="text-xs bg-[#EADFCC] text-[#8F7030] px-2 py-0.5 rounded-full font-semibold">
                  Oficial
                </span>
              </div>
              <p className="text-xs font-semibold text-[#8F7030] mt-0.5">
                {t.handle}
              </p>
              <p className="text-xs text-[#3F2E22]/80 mt-1">
                {t.bioSnippet}
              </p>
            </div>
          </div>

          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#3F2E22] bg-gold-mirror rounded-full shadow-gold-glow hover:shadow-gold-glow-lg transition-all shimmer-button cursor-pointer shrink-0"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span>{t.followBtn}</span>
          </a>
        </div>

        {/* Visual Instagram Photo Feed (Showing real client portraits & work, without text clutter) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-12">
          {clientGallery.map((item) => (
            <a
              key={item.id}
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden bg-[#EADFCC] border border-[#C29F5B]/30 shadow-xs block"
              aria-label={`Ver Instagram de ${item.name}`}
            >
              {/* High-quality real client photo */}
              <img
                src={item.professionalPhoto}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = siteData.heroImage;
                }}
              />

              {/* Instagram Hover Scrim with Heart Icon */}
              <div className="absolute inset-0 bg-[#2B1F17]/65 backdrop-blur-[1.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-1.5 text-[#FFF3C9] p-2 text-center">
                <Heart className="w-6 h-6 fill-current text-[#C29F5B]" />
                <span className="text-[11px] font-bold tracking-wider uppercase">
                  @glowsites.us
                </span>
                <span className="text-[10px] text-[#F2DFA7] truncate max-w-full font-medium">
                  {item.name}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#4A3727] bg-[#EADFCC] border border-[#C29F5B]/50 rounded-full hover:bg-[#FAF5EE] hover:border-[#8F7030] transition-colors cursor-pointer"
          >
            <Instagram className="w-4 h-4 text-[#8F7030]" />
            <span>Seguir @glowsites.us</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#3F2E22] bg-gold-mirror rounded-full shadow-gold-glow hover:shadow-gold-glow-lg transition-all shimmer-button cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-[#3F2E22]" />
            <span>{t.whatsappBtn}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

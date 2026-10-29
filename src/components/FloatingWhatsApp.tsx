/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { siteData, Language, buildWhatsAppLink, getDefaultWhatsAppMessage } from '../data/siteData';
import { MessageCircle } from 'lucide-react';

interface FloatingWhatsAppProps {
  currentLang: Language;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ currentLang }) => {
  const [isVisible, setIsVisible] = useState(false);
  const t = siteData.translations[currentLang];
  const whatsappUrl = buildWhatsAppLink(getDefaultWhatsAppMessage(currentLang));

  useEffect(() => {
    const handleScroll = () => {
      // Show once scrolled past the hero (~360px)
      setIsVisible(window.scrollY > 360);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 animate-fadeIn">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir conversa no WhatsApp da GlowSites"
        className="flex items-center gap-2.5 px-4 py-3 bg-gold-mirror text-[#3F2E22] rounded-full shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 hover:scale-105 active:scale-95 shimmer-button border border-[#FFF3C9] min-w-[48px] min-h-[48px] justify-center cursor-pointer group"
      >
        <MessageCircle className="w-5 h-5 fill-[#3F2E22] shrink-0" />
        <span className="text-xs font-bold uppercase tracking-wider whitespace-nowrap hidden sm:inline">
          {t.floatingCta}
        </span>
      </a>
    </div>
  );
};

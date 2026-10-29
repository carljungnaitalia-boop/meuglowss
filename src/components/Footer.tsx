/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { siteData, Language } from '../data/siteData';
import { PrivacyModal } from './PrivacyModal';
import { Instagram, MessageCircle, Sparkles } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const t = siteData.translations[currentLang].footer;

  return (
    <footer className="bg-[#4A3727] text-[#F6EFE4] relative border-t-2 border-[#C29F5B]">
      {/* Mirror Gold Hairline Top Border Ribbon */}
      <div className="h-[2px] w-full bg-gold-mirror" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        {/* Line 1: Logo Wordmark & Social Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
          <a
            href="#"
            className="flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C29F5B] rounded py-1"
            aria-label="GlowSites Home"
          >
            <span className="font-serif-cormorant text-2xl font-bold tracking-[0.25em] text-[#FFF3C9] uppercase">
              GLOWSITES
            </span>
            <span className="text-xs text-[#F2DFA7]" aria-hidden="true">
              ✦
            </span>
          </a>

          <div className="flex items-center gap-4">
            <a
              href={siteData.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-[#8B6B52]/50 hover:bg-[#8B6B52] border border-[#C29F5B]/40 flex items-center justify-center text-[#F2DFA7] hover:text-[#FFF3C9] transition-colors"
              aria-label="Instagram @glowsites.us"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href={`https://wa.me/${siteData.whatsappPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-[#8B6B52]/50 hover:bg-[#8B6B52] border border-[#C29F5B]/40 flex items-center justify-center text-[#F2DFA7] hover:text-[#FFF3C9] transition-colors"
              aria-label="WhatsApp GlowSites"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
            </a>
          </div>
        </div>

        {/* Line 2: Tagline & Copyright */}
        <p className="text-xs text-[#F6EFE4]/80 mb-2 font-light">
          {t.madeWith}
        </p>

        <p className="text-xs text-[#F6EFE4]/70 mb-5">
          {t.copyright}
        </p>

        {/* Line 3: Legal Links */}
        <div className="flex items-center justify-center gap-4 text-xs text-[#F2DFA7]/90 pt-4 border-t border-[#8B6B52]/40">
          <button
            type="button"
            onClick={() => setIsPrivacyOpen(true)}
            className="hover:underline focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C29F5B] cursor-pointer"
          >
            {t.privacyPolicyBtn}
          </button>
        </div>
      </div>

      {/* Accessible Privacy Modal */}
      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
        currentLang={currentLang}
      />
    </footer>
  );
};

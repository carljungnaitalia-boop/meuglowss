/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { siteData, Language } from '../data/siteData';

interface MarqueeProps {
  currentLang: Language;
}

export const Marquee: React.FC<MarqueeProps> = ({ currentLang }) => {
  const words = siteData.translations[currentLang].marquee;

  // Repeat sequence 4 times for continuous, smooth infinite loop without interruption
  const repeatedWords = [...words, ...words, ...words, ...words];

  return (
    <div
      className="relative w-full bg-gold-mirror py-3.5 shadow-sm border-y border-[#B08A3A] overflow-hidden select-none"
      role="region"
      aria-label="Especialidades em destaque"
    >
      <div className="flex items-center overflow-hidden">
        {/* Continuous Animated Scrolling Strip - infinite loop with no pause */}
        <div
          className="animate-marquee flex items-center gap-6 whitespace-nowrap"
          aria-hidden="true"
        >
          {repeatedWords.map((word, index) => (
            <div key={index} className="inline-flex items-center gap-6 shrink-0">
              <span className="font-serif-cormorant text-base sm:text-lg font-bold tracking-[0.25em] text-[#4A3727] uppercase">
                {word}
              </span>
              <span className="text-xs text-[#8F6F2E]" aria-hidden="true">
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

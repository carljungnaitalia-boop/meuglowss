/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Language } from '../data/siteData';
import { Globe } from 'lucide-react';

interface FloatingLanguageSwitcherProps {
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
}

export const FloatingLanguageSwitcher: React.FC<FloatingLanguageSwitcherProps> = ({
  currentLang,
  onSelectLang,
}) => {
  return (
    <aside
      className="fixed bottom-6 left-4 sm:left-6 z-40 select-none"
      aria-label="Trocar idioma flutuante / Floating language switcher"
    >
      <div className="flex items-center gap-1 p-1 bg-[#4A3727]/90 backdrop-blur-md rounded-full border border-[#C29F5B]/70 shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300">
        {/* Globe icon badge */}
        <div className="w-8 h-8 rounded-full bg-[#EADFCC] text-[#4A3727] flex items-center justify-center shrink-0 shadow-xs">
          <Globe className="w-4 h-4 text-[#8F7030]" />
        </div>

        {/* Trilingual buttons */}
        <div className="flex items-center gap-1 pr-1">
          <button
            type="button"
            onClick={() => onSelectLang('pt')}
            title="Ler em Português"
            aria-label="Ler em Português"
            aria-pressed={currentLang === 'pt'}
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              currentLang === 'pt'
                ? 'bg-gold-mirror text-[#3F2E22] shadow-xs scale-105'
                : 'text-[#F6EFE4] hover:text-[#FFF3C9] hover:bg-white/10'
            }`}
          >
            <span className="text-[13px]" aria-hidden="true">🇧🇷</span>
            <span>PT</span>
          </button>

          <button
            type="button"
            onClick={() => onSelectLang('en')}
            title="Read in English"
            aria-label="Read in English"
            aria-pressed={currentLang === 'en'}
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              currentLang === 'en'
                ? 'bg-gold-mirror text-[#3F2E22] shadow-xs scale-105'
                : 'text-[#F6EFE4] hover:text-[#FFF3C9] hover:bg-white/10'
            }`}
          >
            <span className="text-[13px]" aria-hidden="true">🇬🇧</span>
            <span>EN</span>
          </button>

          <button
            type="button"
            onClick={() => onSelectLang('es')}
            title="Leer en Español"
            aria-label="Leer en Español"
            aria-pressed={currentLang === 'es'}
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              currentLang === 'es'
                ? 'bg-gold-mirror text-[#3F2E22] shadow-xs scale-105'
                : 'text-[#F6EFE4] hover:text-[#FFF3C9] hover:bg-white/10'
            }`}
          >
            <span className="text-[13px]" aria-hidden="true">🇪🇸</span>
            <span>ES</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import { siteData, Language } from '../data/siteData';
import { X, ShieldCheck } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({
  isOpen,
  onClose,
  currentLang,
}) => {
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const t = siteData.translations[currentLang].privacyModal;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      // Focus close button on open
      setTimeout(() => closeBtnRef.current?.focus(), 50);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2B1F17]/85 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-2xl bg-[#FAF5EE] rounded-2xl shadow-2xl border border-[#C29F5B] overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#EADFCC]/80 border-b border-[#C29F5B]/30">
          <div className="flex items-center gap-2 text-[#4A3727]">
            <ShieldCheck className="w-5 h-5 text-[#8F7030]" />
            <h3
              id="privacy-modal-title"
              className="font-serif-cormorant text-xl font-bold"
            >
              {t.title}
            </h3>
          </div>

          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-[#4A3727] hover:bg-[#FAF5EE] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C29F5B] cursor-pointer"
            aria-label={t.close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto text-xs sm:text-sm text-[#3F2E22]/90 leading-relaxed space-y-4 whitespace-pre-line font-light">
          {t.content}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-[#EADFCC]/50 border-t border-[#C29F5B]/20 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 text-xs font-bold uppercase tracking-wider text-[#3F2E22] bg-gold-mirror rounded-full shadow-xs hover:shadow-gold-glow transition-all cursor-pointer"
          >
            {t.close}
          </button>
        </div>
      </div>
    </div>
  );
};

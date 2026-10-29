/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { ProjectItem, Language, siteData } from '../data/siteData';
import { X, ExternalLink, Monitor, Smartphone, RefreshCw, AlertCircle } from 'lucide-react';

interface QuickPreviewModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  currentLang: Language;
}

export const QuickPreviewModal: React.FC<QuickPreviewModalProps> = ({
  project,
  onClose,
  currentLang,
}) => {
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');
  const [iframeKey, setIframeKey] = useState(0);
  const t = siteData.translations[currentLang].projects;

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#2B1F17]/80 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="preview-modal-title"
    >
      <div className="relative w-full max-w-6xl h-[90vh] bg-[#F6EFE4] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-[#C29F5B]">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[#FAF5EE] border-b border-[#C29F5B]/30 shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-xl" aria-hidden="true">
              {project.flag}
            </span>
            <div>
              <h3
                id="preview-modal-title"
                className="font-serif-cormorant text-lg sm:text-xl font-bold text-[#4A3727] leading-none"
              >
                {project.name}
              </h3>
              <p className="text-xs text-[#8F7030] mt-0.5">
                {project.city} · {project.segment[currentLang]}
              </p>
            </div>
          </div>

          {/* Viewport device controls */}
          <div className="hidden sm:flex items-center gap-1 bg-[#EADFCC] p-1 rounded-lg">
            <button
              type="button"
              onClick={() => setDevice('desktop')}
              className={`flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
                device === 'desktop'
                  ? 'bg-[#4A3727] text-[#FFF3C9] shadow-xs'
                  : 'text-[#4A3727] hover:text-[#8F7030]'
              }`}
              aria-label={t.deviceDesktop}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>{t.deviceDesktop}</span>
            </button>
            <button
              type="button"
              onClick={() => setDevice('mobile')}
              className={`flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
                device === 'mobile'
                  ? 'bg-[#4A3727] text-[#FFF3C9] shadow-xs'
                  : 'text-[#4A3727] hover:text-[#8F7030]'
              }`}
              aria-label={t.deviceMobile}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>{t.deviceMobile}</span>
            </button>
            <button
              type="button"
              onClick={() => setIframeKey((prev) => prev + 1)}
              className="p-1.5 text-[#4A3727] hover:text-[#8F7030] rounded-md transition-colors"
              title="Recarregar"
              aria-label="Recarregar prévia"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Actions & Close */}
          <div className="flex items-center gap-3">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#3F2E22] bg-gold-mirror rounded-full shadow-xs hover:shadow-gold-glow transition-all"
            >
              <span className="hidden xs:inline">{t.openNewTab}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-full text-[#4A3727] hover:bg-[#EADFCC] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C29F5B]"
              aria-label="Fechar prévia"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Notice Strip regarding iframe security headers */}
        <div className="bg-[#EADFCC]/60 px-4 py-2 border-b border-[#C29F5B]/20 flex items-center justify-between text-xs text-[#4A3727]">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-[#8F7030] shrink-0" />
            <span className="truncate max-w-3xl">{t.iframeNotice}</span>
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8F7030] font-semibold underline shrink-0 hover:text-[#4A3727]"
          >
            {project.url} ↗
          </a>
        </div>

        {/* Modal Body: Iframe Container */}
        <div className="flex-1 bg-[#2B1F17] flex items-center justify-center p-2 sm:p-4 overflow-hidden">
          <div
            className={`transition-all duration-300 h-full overflow-hidden bg-white shadow-2xl ${
              device === 'desktop'
                ? 'w-full rounded-lg'
                : 'w-[375px] max-w-full rounded-[32px] border-[8px] border-[#4A3727]'
            }`}
          >
            <iframe
              key={iframeKey}
              src={project.url}
              title={`Pré-visualização do site ${project.name}`}
              className="w-full h-full border-0"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-forms"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

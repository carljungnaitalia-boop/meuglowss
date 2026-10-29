/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { siteData, Language, ProjectItem, buildWhatsAppLink } from '../data/siteData';
import { QuickPreviewModal } from './QuickPreviewModal';
import { ExternalLink, Eye, MessageCircle, Sparkles } from 'lucide-react';

interface ProjectsSectionProps {
  currentLang: Language;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ currentLang }) => {
  const [previewProject, setPreviewProject] = useState<ProjectItem | null>(null);

  const t = siteData.translations[currentLang].projects;
  const whatsappUrl = buildWhatsAppLink(
    currentLang === 'en'
      ? "Hi Lana! 💛 I saw the projects in your portfolio and I would love a website like these for my beauty business."
      : currentLang === 'es'
      ? "¡Hola Lana! 💛 Vi los proyectos de tu portafolio y me encantaría tener un sitio web así para mi negocio de belleza."
      : "Oi, Lana! 💛 Vi os projetos no seu portfólio e gostaria de um site assim para o meu negócio de beleza."
  );

  return (
    <section id="projetos" className="py-20 md:py-28 bg-[#8B6B52] text-[#F6EFE4] relative overflow-hidden">
      {/* Subtle background star accents */}
      <div className="absolute top-10 left-10 text-[#F2DFA7]/10 text-6xl select-none pointer-events-none" aria-hidden="true">
        ✦
      </div>
      <div className="absolute bottom-20 right-12 text-[#F2DFA7]/10 text-8xl select-none pointer-events-none" aria-hidden="true">
        ✦
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF5EE]/10 border border-[#C29F5B]/40 text-xs font-semibold tracking-widest text-[#F2DFA7] uppercase mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#F2DFA7]" />
            <span>{t.eyebrow || 'PROJETOS RECENTES'}</span>
          </div>

          <h2 className="font-serif-cormorant text-3xl sm:text-4xl md:text-5xl font-bold text-[#F6EFE4] tracking-tight mb-4 text-balance">
            {t.title}
          </h2>

          <p className="text-sm sm:text-base text-[#F6EFE4]/85 leading-relaxed font-light max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* 10 Projects Grid (All countries together as requested) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {siteData.projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-[#FAF5EE] rounded-[18px] overflow-hidden border border-[#C29F5B]/40 shadow-lg hover:shadow-gold-glow hover:border-[#F2DFA7] transition-all duration-500 flex flex-col"
            >
              {/* Browser Mockup Top Bar with Mirror Gold Frame */}
              <div className="bg-[#EADFCC] px-4 py-2.5 border-b border-[#C29F5B]/30 flex items-center justify-between">
                {/* Browser window dots */}
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#8B6B52]/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C29F5B]/50" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#8F7030]/60" />
                </div>

                {/* Simulated address bar */}
                <div className="text-[11px] font-mono text-[#8B6B52] bg-[#FAF5EE]/90 px-3 py-0.5 rounded-full max-w-[190px] truncate border border-[#C29F5B]/20">
                  {project.url.replace('https://', '')}
                </div>

                {/* Country flag */}
                <span className="text-sm select-none" title={project.country}>
                  {project.flag}
                </span>
              </div>

              {/* Mockup Preview Area with Professional Photo & Live Vercel Preview */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#2B1F17] group-hover:cursor-pointer">
                {/* Visual Backdrop */}
                <div
                  className={`w-full h-full bg-gradient-to-br ${project.colorGradient} p-5 flex flex-col justify-between text-[#F6EFE4] transition-transform duration-700 ease-out group-hover:scale-105 relative`}
                >
                  {/* Subtle Background Pattern */}
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#F2DFA7_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                  <div className="relative z-10 flex items-start justify-between">
                    <span className="text-[11px] uppercase tracking-wider text-[#F2DFA7] font-semibold bg-black/30 px-2.5 py-0.5 rounded-md backdrop-blur-xs">
                      {project.city}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-md bg-white/20 text-[#FAF5EE] backdrop-blur-xs font-medium">
                      100% Responsivo
                    </span>
                  </div>

                  {/* Centered Professional Highlight */}
                  <div className="relative z-10 flex items-center gap-3.5 my-auto">
                    {/* Circular photo of the beauty professional */}
                    <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full p-[2.5px] bg-gold-mirror shadow-gold-glow shrink-0">
                      <img
                        src={project.professionalPhoto}
                        alt={`Foto da profissional ${project.name}`}
                        className="w-full h-full rounded-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = siteData.heroImage;
                        }}
                      />
                    </div>
                    <div>
                      <h3 className="font-serif-cormorant text-xl sm:text-2xl font-bold tracking-tight text-[#FAF5EE] drop-shadow-sm leading-tight">
                        {project.name}
                      </h3>
                      <p className="text-xs text-[#F2DFA7] font-medium mt-0.5">
                        {project.segment[currentLang]}
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 flex items-center justify-between text-[11px] text-[#F6EFE4]/80 pt-2 border-t border-white/15">
                    <span>✦ GlowSites Studio</span>
                    <span>Agendamento no WhatsApp</span>
                  </div>
                </div>

                {/* Subtle mirror shine diagonal on card */}
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  aria-hidden="true"
                />

                {/* Floating Quick Action Overlay on Hover */}
                <div className="absolute inset-0 bg-[#2B1F17]/65 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#3F2E22] bg-gold-mirror rounded-full shadow-gold-glow hover:scale-105 transition-transform"
                    aria-label={`Ver site real de ${project.name}, abre em nova aba`}
                  >
                    <span>{t.viewOnline}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setPreviewProject(project);
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[#FAF5EE] bg-[#4A3727]/90 hover:bg-[#4A3727] rounded-full border border-[#C29F5B]/50 transition-colors cursor-pointer"
                    aria-label={`Pré-visualizar ${project.name}`}
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{t.quickPreview}</span>
                  </button>
                </div>
              </div>

              {/* Card Meta & Bottom Bar with Circular Avatar */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-[#FAF5EE]">
                <div>
                  {/* Professional Avatar in Circular Frame */}
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="relative shrink-0">
                      <div className="w-13 h-13 rounded-full p-[2px] bg-gold-mirror shadow-gold-glow">
                        <img
                          src={project.professionalPhoto}
                          alt={`Profissional ${project.name}`}
                          className="w-full h-full rounded-full object-cover"
                          loading="lazy"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).src = siteData.heroImage;
                          }}
                        />
                      </div>
                      <span
                        className="absolute -bottom-1 -right-1 text-xs bg-[#FAF5EE] rounded-full p-0.5 shadow-xs border border-[#C29F5B]/40"
                        title={project.country}
                      >
                        {project.flag}
                      </span>
                    </div>

                    <div className="min-w-0">
                      <h3 className="font-serif-cormorant text-xl font-bold text-[#4A3727] leading-snug truncate">
                        {project.name}
                      </h3>
                      <p className="text-xs text-[#8F7030] font-semibold flex items-center gap-1 mt-0.5 truncate">
                        <span>{project.city}</span>
                      </p>
                      <span className="inline-block mt-1 text-[11px] px-2.5 py-0.5 rounded-full bg-[#EADFCC] text-[#4A3727] font-medium truncate">
                        {project.segment[currentLang]}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-[#C29F5B]/20 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setPreviewProject(project)}
                    className="text-xs font-semibold text-[#8F7030] hover:text-[#4A3727] flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{t.quickPreview}</span>
                  </button>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4A3727] hover:text-[#8F7030] transition-colors"
                  >
                    <span>{t.viewOnline}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
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

      {/* Quick Preview Modal */}
      <QuickPreviewModal
        project={previewProject}
        onClose={() => setPreviewProject(null)}
        currentLang={currentLang}
      />
    </section>
  );
};

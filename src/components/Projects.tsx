import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Github, Sparkles, Layers, ShieldCheck, Check, Calendar, ArrowUpRight, Smartphone, Eye } from 'lucide-react';
import { PORTFOLIO_DATA, Language } from '../data/portfolioData';
import { ProjectDetailModal } from './ProjectDetailModal';
import { playCyberClick } from '../utils/audio';

interface ProjectsProps {
  currentLang: Language;
}

export const Projects: React.FC<ProjectsProps> = ({ currentLang }) => {
  const { featuredProject } = PORTFOLIO_DATA;
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    playCyberClick(750, 0.04);
    setModalOpen(true);
  };

  return (
    <section id="projects" className="relative py-24 sm:py-32 border-t border-neutral-900 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-[#151515] text-xs font-mono text-[#E50924]">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>03 // {currentLang === 'en' ? 'SELECTED WORK' : 'PROYEK UNGGULAN'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display uppercase tracking-tight text-white">
            {currentLang === 'en' ? 'FEATURED PROJECT' : 'PROYEK UTAMA'}
          </h2>
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
            <span className="w-2 h-2 rounded-full bg-[#E50924]" />
            <span>{currentLang === 'en' ? '1 Featured Project (Authentic Portfolio)' : '1 Proyek Unggulan (Portofolio Nyata)'}</span>
          </div>
          <div className="w-16 h-1 bg-[#E50924] rounded-full mt-1" />
        </div>

        {/* Aula FST Showcase Card */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#141414] to-[#0D0D0D] border border-neutral-800/90 shadow-2xl overflow-hidden p-6 sm:p-8 lg:p-10">
          
          {/* Subtle Ambient Red Glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E50924]/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Col: Project Information */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Category & Status */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#E50924]/15 border border-[#E50924]/30 text-[#FF243D]">
                  {featuredProject.category[currentLang]}
                </span>
                <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-neutral-900 border border-neutral-800 text-neutral-400">
                  UIN Sunan Gunung Djati
                </span>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
                  {featuredProject.title}
                </h3>
                <p className="font-mono text-sm sm:text-base text-neutral-400 mt-1">
                  {featuredProject.subtitle[currentLang]}
                </p>
              </div>

              {/* Description */}
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                {featuredProject.description[currentLang]}
              </p>

              {/* Feature Highlights */}
              <div className="space-y-2 pt-1">
                <p className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                  {currentLang === 'en' ? 'Core Capabilities' : 'Kemampuan Utama'}:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#E50924] shrink-0" />
                    <span>{currentLang === 'en' ? 'Hall Schedule Monitoring' : 'Pemantauan Jadwal Aula'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#E50924] shrink-0" />
                    <span>{currentLang === 'en' ? 'Booking Management' : 'Manajemen Reservasi'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#E50924] shrink-0" />
                    <span>{currentLang === 'en' ? 'Progressive Web App (PWA)' : 'Progressive Web App (PWA)'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#E50924] shrink-0" />
                    <span>{currentLang === 'en' ? 'Structured JSON Storage' : 'Penyimpanan Data JSON'}</span>
                  </div>
                </div>
              </div>

              {/* Technology Badges */}
              <div className="space-y-2 pt-2">
                <p className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                  {currentLang === 'en' ? 'Tech Stack' : 'Teknologi Digunakan'}:
                </p>
                <div className="flex flex-wrap gap-2">
                  {featuredProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-[#181818] border border-neutral-700/80 text-xs font-mono text-neutral-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={handleOpenModal}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#E50924] hover:bg-[#FF243D] text-white text-sm font-medium transition-all shadow-[0_0_20px_rgba(229,9,36,0.35)] active:scale-95"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  <span>{currentLang === 'en' ? 'View Project Details' : 'Lihat Detail Proyek'}</span>
                </button>

                <a
                  href={featuredProject.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playCyberClick(800, 0.04)}
                  className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-[#181818] hover:bg-[#222222] border border-neutral-700 hover:border-neutral-500 text-neutral-200 hover:text-white text-sm font-medium transition-all active:scale-95"
                >
                  <Github className="w-4 h-4 mr-2" />
                  <span>{currentLang === 'en' ? 'View Source Code' : 'Kode Sumber GitHub'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1 text-neutral-400" />
                </a>
              </div>
            </div>

            {/* Right Col: Interactive Visual Mockup */}
            <div className="lg:col-span-6">
              <div
                onClick={handleOpenModal}
                className="cursor-pointer group relative rounded-2xl bg-neutral-950 border border-neutral-800 overflow-hidden shadow-2xl transition-all duration-300 hover:border-[#E50924]/60 hover:shadow-[0_0_35px_rgba(229,9,36,0.2)]"
              >
                {/* Browser Titlebar */}
                <div className="px-4 py-3 bg-[#161616] border-b border-neutral-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="text-xs font-mono text-neutral-400 bg-neutral-900 px-3 py-0.5 rounded border border-neutral-800">
                    aula-fst.github.io
                  </div>
                  <span className="text-[11px] font-mono text-[#E50924]">v1.0-academic</span>
                </div>

                {/* Mockup Screen Viewport */}
                <div className="p-5 sm:p-6 space-y-4 bg-gradient-to-b from-[#111111] to-[#0A0A0A]">
                  
                  {/* Mock Dashboard Top Header */}
                  <div className="flex items-center justify-between border-b border-neutral-800/80 pb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#E50924]/20 border border-[#E50924]/40 flex items-center justify-center text-[#FF243D] font-bold text-xs">
                        FST
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white leading-none">
                          Aula FST Manager
                        </p>
                        <p className="text-[10px] text-neutral-400 font-mono mt-0.5">
                          Faculty of Science & Technology
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                      System Active
                    </span>
                  </div>

                  {/* Mock Schedule Cards Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-[#161616] border border-neutral-800 group-hover:border-neutral-700 transition-colors">
                      <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 mb-1">
                        <span>Aula Utama</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E50924]" />
                      </div>
                      <p className="text-xs font-semibold text-white">08:00 – 12:00 WIB</p>
                      <p className="text-[10px] text-neutral-400 truncate mt-0.5">HIMATIF Seminar</p>
                    </div>

                    <div className="p-3 rounded-lg bg-[#161616] border border-neutral-800 group-hover:border-neutral-700 transition-colors">
                      <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 mb-1">
                        <span>Aula Rapat</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      </div>
                      <p className="text-xs font-semibold text-white">13:00 – 17:00 WIB</p>
                      <p className="text-[10px] text-emerald-400 truncate mt-0.5">Available Slot</p>
                    </div>
                  </div>

                  {/* Mock Analytics / Booking Bar */}
                  <div className="p-3 rounded-lg bg-[#161616] border border-neutral-800 space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-neutral-300 font-mono">
                      <span>Hall Reservation Capacity</span>
                      <span className="text-[#FF243D]">65% Scheduled</span>
                    </div>
                    <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                      <div className="h-full bg-[#E50924] w-[65%] rounded-full shadow-[0_0_8px_#E50924]" />
                    </div>
                  </div>

                  {/* Hover Prompt */}
                  <div className="pt-2 text-center">
                    <span className="text-xs font-mono text-[#FF243D] group-hover:underline flex items-center justify-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>
                        {currentLang === 'en'
                          ? 'Click to expand interactive preview modal'
                          : 'Klik untuk membuka simulasi & arsitektur proyek'}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        currentLang={currentLang}
      />
    </section>
  );
};

import React, { useState } from 'react';
import { X, ExternalLink, Github, Layers, Calendar, CheckCircle, Shield, Monitor, Smartphone, Database, Code2 } from 'lucide-react';
import { PORTFOLIO_DATA, Language } from '../data/portfolioData';
import { playCyberClick } from '../utils/audio';

interface ProjectDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  isOpen,
  onClose,
  currentLang,
}) => {
  const { featuredProject } = PORTFOLIO_DATA;
  const [activeTab, setActiveTab] = useState<'overview' | 'preview' | 'architecture'>('overview');

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0E0E0E] border border-neutral-800 rounded-2xl shadow-[0_0_50px_rgba(229,9,36,0.2)] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-[#141414]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E50924]" />
            <h3 className="font-display font-bold text-white text-lg">
              {featuredProject.title} — {currentLang === 'en' ? 'Project Deep Dive' : 'Detail Proyek'}
            </h3>
            <span className="ml-2 text-xs font-mono px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-400">
              PWA
            </span>
          </div>

          <button
            onClick={() => {
              playCyberClick(500, 0.04);
              onClose();
            }}
            className="p-1.5 rounded-lg border border-neutral-800 hover:border-[#E50924] hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Tabs */}
        <div className="flex border-b border-neutral-800/80 bg-[#111111] px-6 gap-2">
          {(['overview', 'preview', 'architecture'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => {
                playCyberClick(700, 0.03);
                setActiveTab(tab);
              }}
              className={`py-3 px-4 text-xs sm:text-sm font-medium border-b-2 transition-colors capitalize ${
                activeTab === tab
                  ? 'border-[#E50924] text-white'
                  : 'border-transparent text-neutral-400 hover:text-neutral-200'
              }`}
            >
              {tab === 'overview'
                ? currentLang === 'en' ? 'Project Overview' : 'Ringkasan Proyek'
                : tab === 'preview'
                ? currentLang === 'en' ? 'App Preview & Simulation' : 'Pratinjau & Simulasi'
                : currentLang === 'en' ? 'Tech & Architecture' : 'Teknologi & Arsitektur'}
            </button>
          ))}
        </div>

        {/* Modal Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-neutral-300 text-sm">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <p className="text-xs font-mono text-[#E50924] uppercase tracking-wider mb-1">
                  {featuredProject.category[currentLang]}
                </p>
                <h4 className="text-xl sm:text-2xl font-bold font-display text-white">
                  {featuredProject.subtitle[currentLang]}
                </h4>
                <p className="mt-3 text-neutral-300 leading-relaxed">
                  {featuredProject.description[currentLang]}
                </p>
              </div>

              {/* Key Features List */}
              <div className="space-y-3">
                <h5 className="font-display font-semibold text-white uppercase text-xs tracking-wider">
                  {currentLang === 'en' ? 'System Capabilities' : 'Kemampuan & Fitur Sistem'}
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {featuredProject.features[currentLang].map((feature, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-lg bg-[#141414] border border-neutral-800 flex items-start gap-2.5"
                    >
                      <CheckCircle className="w-4 h-4 text-[#E50924] shrink-0 mt-0.5" />
                      <span className="text-xs text-neutral-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {featuredProject.highlights.map((h, i) => (
                  <div key={i} className="p-4 rounded-xl bg-[#151515] border border-neutral-800">
                    <p className="font-display font-bold text-white text-sm mb-1">
                      {h.title[currentLang]}
                    </p>
                    <p className="text-xs text-neutral-400">
                      {h.desc[currentLang]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'preview' && (
            <div className="space-y-4">
              <div className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800 text-xs text-neutral-400 flex items-center justify-between">
                <span>
                  {currentLang === 'en'
                    ? 'Faculty Hall Booking Management — Schedule Interface Mockup'
                    : 'Manajemen Pemesanan Aula FST — Antarmuka Jadwal & Ketersediaan'}
                </span>
                <span className="font-mono text-emerald-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live Schema
                </span>
              </div>

              {/* Simulated Hall Schedule Browser Window */}
              <div className="rounded-xl border border-neutral-800 bg-[#0A0A0A] overflow-hidden shadow-2xl">
                {/* Simulated Browser Bar */}
                <div className="px-4 py-2.5 bg-[#141414] border-b border-neutral-800 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                  </div>
                  <div className="text-[11px] font-mono text-neutral-400 bg-neutral-900 px-4 py-1 rounded-md border border-neutral-800">
                    aula-fst.campus.local/dashboard
                  </div>
                  <div className="text-xs text-neutral-500 font-mono">FST UIN SGD</div>
                </div>

                {/* Simulated App Dashboard */}
                <div className="p-5 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-800 pb-3">
                    <div>
                      <h4 className="font-display font-bold text-white text-base">
                        FST Hall Booking Schedule
                      </h4>
                      <p className="text-xs text-neutral-400">
                        {currentLang === 'en' ? 'Faculty Hall A & Hall B Room Slots' : 'Slot Aula Utama & Aula Serbaguna FST'}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-md bg-emerald-950/60 text-emerald-300 border border-emerald-800/60 text-xs font-mono">
                        Available Today: 2 Slots
                      </span>
                    </div>
                  </div>

                  {/* Schedule Table Preview */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs font-mono">
                      <thead>
                        <tr className="border-b border-neutral-800 text-neutral-400">
                          <th className="py-2 px-3">Room / Hall</th>
                          <th className="py-2 px-3">Time Window</th>
                          <th className="py-2 px-3">Organizer / Event</th>
                          <th className="py-2 px-3">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-900 text-neutral-300">
                        <tr>
                          <td className="py-3 px-3 font-semibold text-white">Aula Utama FST</td>
                          <td className="py-3 px-3">08:00 – 12:00 WIB</td>
                          <td className="py-3 px-3">HIMATIF — Seminar Teknologi</td>
                          <td className="py-3 px-3">
                            <span className="px-2 py-0.5 rounded bg-red-950/70 text-red-300 border border-red-800/50">
                              Booked / Terisi
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-3 font-semibold text-white">Aula Utama FST</td>
                          <td className="py-3 px-3">13:00 – 16:30 WIB</td>
                          <td className="py-3 px-3">Slot Kosong / Pemeliharaan</td>
                          <td className="py-3 px-3">
                            <span className="px-2 py-0.5 rounded bg-emerald-950/70 text-emerald-300 border border-emerald-800/50">
                              Available / Siap
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-3 font-semibold text-white">Aula Rapat Lt. 2</td>
                          <td className="py-3 px-3">09:00 – 11:30 WIB</td>
                          <td className="py-3 px-3">BEM FST — Rapat Koordinasi</td>
                          <td className="py-3 px-3">
                            <span className="px-2 py-0.5 rounded bg-amber-950/70 text-amber-300 border border-amber-800/50">
                              Pending Review
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Live demo deployment note */}
              <div className="p-3.5 rounded-xl bg-[#141414] border border-neutral-800 text-xs text-neutral-400">
                <span className="text-white font-medium">Deployment Status: </span>
                {currentLang === 'en'
                  ? 'Currently running on academic development environments. Live production deployment URL is configurable once domain deployment is finalized.'
                  : 'Saat ini berjalan pada lingkungan pengembangan akademik. Tautan demo langsung dapat dikonfigurasikan setelah penerapan domain kampus final.'}
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#141414] border border-neutral-800 space-y-2">
                  <div className="flex items-center gap-2 text-white font-medium">
                    <Smartphone className="w-4 h-4 text-[#E50924]" />
                    <span>Progressive Web App (PWA)</span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {currentLang === 'en'
                      ? 'Features web manifest, service worker caching for offline schedule checks, and responsive mobile viewport optimizations.'
                      : 'Dilengkapi web manifest dan service worker untuk caching jadwal serta pengalaman aplikasi mobile yang ringan.'}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#141414] border border-neutral-800 space-y-2">
                  <div className="flex items-center gap-2 text-white font-medium">
                    <Database className="w-4 h-4 text-[#FF243D]" />
                    <span>JSON-Based Storage</span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {currentLang === 'en'
                      ? 'Lightweight, self-contained record structures for hall availability without requiring heavyweight cloud database infrastructure.'
                      : 'Struktur data berbasis JSON yang mandiri dan terstruktur tanpa memerlukan beban basis data server yang kompleks.'}
                  </p>
                </div>
              </div>

              {/* Stack Badges */}
              <div className="space-y-2">
                <h5 className="font-display font-semibold text-white text-xs uppercase tracking-wider">
                  {currentLang === 'en' ? 'Technologies Applied' : 'Teknologi yang Diterapkan'}
                </h5>
                <div className="flex flex-wrap gap-2">
                  {featuredProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-[#151515] border border-neutral-700/80 text-xs font-mono text-neutral-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-neutral-800 bg-[#121212] flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs font-mono text-neutral-400">
            {currentLang === 'en' ? 'Official GitHub Repository' : 'Repositori Resmi GitHub'}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={featuredProject.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playCyberClick(800, 0.04)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#E50924] hover:bg-[#FF243D] text-white text-xs sm:text-sm font-medium transition-all shadow-[0_0_15px_rgba(229,9,36,0.3)]"
            >
              <Github className="w-4 h-4" />
              <span>{currentLang === 'en' ? 'View Source Code' : 'Buka Kode Sumber'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl border border-neutral-800 bg-neutral-900 text-neutral-300 hover:text-white text-xs sm:text-sm font-medium transition-colors"
            >
              {currentLang === 'en' ? 'Close' : 'Tutup'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

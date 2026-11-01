import React from 'react';
import { Terminal, Heart, ArrowUp, Github, Instagram, Linkedin, MessageSquare } from 'lucide-react';
import { PORTFOLIO_DATA, Language } from '../data/portfolioData';
import { playCyberClick } from '../utils/audio';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const { socials } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    playCyberClick(700, 0.04);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#060606] border-t border-neutral-900/90 text-neutral-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-neutral-900">
          
          {/* Logo & Bio */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-[#E50924]/40 flex items-center justify-center text-[#FF243D]">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <p className="font-display font-bold text-white text-base">
                MUHAMMAD RASHYA REIHANSYAH
              </p>
              <p className="font-mono text-neutral-400 text-[11px]">
                Informatics Engineering Student • UIN Sunan Gunung Djati Bandung
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={socials.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-white/50 text-neutral-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={socials.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-pink-500/50 text-neutral-400 hover:text-pink-400 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={socials.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-sky-500/50 text-neutral-400 hover:text-sky-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={socials.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-emerald-500/50 text-neutral-400 hover:text-emerald-400 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#E50924]/10 border border-[#E50924]/40 text-[#FF243D] hover:bg-[#E50924] hover:text-white transition-all shadow-[0_0_12px_rgba(229,9,36,0.2)] ml-2"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Status */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-[11px] font-mono text-neutral-400">
          <p>
            © {new Date().getFullYear()} Muhammad Rashya Reihansyah. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E50924] animate-pulse" />
            <span>
              {currentLang === 'en'
                ? 'Curiosity, Code & Continuous Growth'
                : 'Rasa Ingin Tahu, Kode & Bertumbuh Tanpa Henti'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React from 'react';
import { Compass, CodeXml, Globe, Sparkles, Cpu, Lightbulb, Zap } from 'lucide-react';
import { PORTFOLIO_DATA, Language } from '../data/portfolioData';

interface InterestsProps {
  currentLang: Language;
}

export const Interests: React.FC<InterestsProps> = ({ currentLang }) => {
  const { interests } = PORTFOLIO_DATA;

  const iconMap: Record<string, React.ElementType> = {
    'code-xml': CodeXml,
    globe: Globe,
    sparkles: Sparkles,
    cpu: Cpu,
    lightbulb: Lightbulb,
    zap: Zap,
  };

  return (
    <section id="interests" className="relative py-24 sm:py-32 border-t border-neutral-900 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-[#151515] text-xs font-mono text-[#E50924]">
            <Compass className="w-3.5 h-3.5" />
            <span>06 // {currentLang === 'en' ? 'CURIOUS DOMAINS' : 'EKSPLORASI TEKNOLOGI'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display uppercase tracking-tight text-white">
            {currentLang === 'en' ? "WHAT I'M EXPLORING" : 'YANG SEDANG SAYA EKSPLORASI'}
          </h2>
          <p className="text-neutral-400 text-sm max-w-xl">
            {currentLang === 'en'
              ? 'Topics and technological frontiers that inspire my curiosity as an undergraduate student.'
              : 'Bidang dan batas teknologi yang membakar rasa ingin tahu saya selama masa perkuliahan.'}
          </p>
          <div className="w-16 h-1 bg-[#E50924] rounded-full mt-1" />
        </div>

        {/* Interests Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest) => {
            const Icon = iconMap[interest.icon] || Sparkles;
            return (
              <div
                key={interest.id}
                className="group p-6 rounded-2xl bg-[#0F0F0F] border border-neutral-800/90 hover:border-[#E50924]/40 transition-all duration-300 hover:bg-[#141414] hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-[#161616] border border-neutral-800 flex items-center justify-center text-[#E50924] group-hover:text-[#FF243D] group-hover:border-[#E50924]/40 transition-colors mb-5 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="font-display font-semibold text-lg text-white mb-2">
                  {interest.title[currentLang]}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {interest.description[currentLang]}
                </p>

                <div className="mt-5 pt-3 border-t border-neutral-800/60 flex items-center gap-1.5 text-neutral-400 font-mono text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 group-hover:bg-[#E50924] transition-colors" />
                  <span>{currentLang === 'en' ? 'Actively Exploring' : 'Eksplorasi Aktif'}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

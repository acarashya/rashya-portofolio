import React, { useState } from 'react';
import { Cpu, Bot, Code, Terminal, Sparkles, Info, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA, Language } from '../data/portfolioData';
import { getSkillLevelMeta } from '../utils/portfolio';
import { playCyberClick } from '../utils/audio';

interface SkillsProps {
  currentLang: Language;
}

export const Skills: React.FC<SkillsProps> = ({ currentLang }) => {
  const { skills } = PORTFOLIO_DATA;
  const [activeTab, setActiveTab] = useState<'all' | 'programming' | 'ai' | 'web'>('all');

  const tabs = [
    { id: 'all', label: { en: 'All Tech', id: 'Semua Keahlian' } },
    { id: 'programming', label: { en: 'Programming', id: 'Pemrograman' } },
    { id: 'ai', label: { en: 'AI & Productivity', id: 'AI & Produktivitas' } },
    { id: 'web', label: { en: 'Web & Tools', id: 'Web & Perkakas' } },
  ];

  const handleTabChange = (tabId: 'all' | 'programming' | 'ai' | 'web') => {
    playCyberClick(750, 0.04);
    setActiveTab(tabId);
  };

  const showProgramming = activeTab === 'all' || activeTab === 'programming';
  const showAI = activeTab === 'all' || activeTab === 'ai';
  const showWeb = activeTab === 'all' || activeTab === 'web';

  return (
    <section id="skills" className="relative py-24 sm:py-32 border-t border-neutral-900 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-[#151515] text-xs font-mono text-[#E50924]">
            <Cpu className="w-3.5 h-3.5" />
            <span>02 // {currentLang === 'en' ? 'CAPABILITIES' : 'KEMAMPUAN TEKNIS'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display uppercase tracking-tight text-white">
            {currentLang === 'en' ? 'MY TECH STACK' : 'KEAHLIAN TEKNIS'}
          </h2>
          <p className="text-neutral-400 text-sm max-w-xl">
            {currentLang === 'en'
              ? 'An honest representation of my current technical journey, languages in progress, and daily workflow tools.'
              : 'Representasi jujur tentang proses belajar teknis, bahasa yang sedang dipelajari, serta alat kerja harian saya.'}
          </p>
          <div className="w-16 h-1 bg-[#E50924] rounded-full mt-1" />
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-xl bg-[#111111] border border-neutral-800">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id as typeof activeTab)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#E50924] text-white shadow-[0_0_12px_rgba(229,9,36,0.3)]'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {tab.label[currentLang]}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Container */}
        <div className="space-y-12">
          
          {/* Group 1: Programming Languages */}
          {showProgramming && (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#E50924]" />
                <h3 className="font-display font-semibold text-lg text-white uppercase tracking-wider">
                  {currentLang === 'en' ? 'Core Programming Languages' : 'Bahasa Pemrograman Inti'}
                </h3>
                <span className="text-xs font-mono text-neutral-400 ml-2">
                  (Undergraduate Curriculum)
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.programming.map((skill) => {
                  const meta = getSkillLevelMeta(skill.level);
                  return (
                    <div
                      key={skill.name}
                      className="group p-6 rounded-2xl bg-[#0F0F0F] border border-neutral-800 hover:border-[#E50924]/50 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(229,9,36,0.1)] relative overflow-hidden"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-[#161616] border border-neutral-700/60 flex items-center justify-center font-mono font-bold text-white group-hover:border-[#E50924] transition-colors">
                            {skill.name}
                          </div>
                          <div>
                            <h4 className="font-display font-bold text-lg text-white">
                              {skill.name}
                            </h4>
                            <span className="text-xs font-mono text-neutral-400">
                              {currentLang === 'en' ? 'Academic Focus' : 'Fokus Perkuliahan'}
                            </span>
                          </div>
                        </div>

                        {/* Level Badge */}
                        <div
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-mono ${meta.badgeClass}`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${meta.dotClass}`} />
                          <span>{skill.level}</span>
                        </div>
                      </div>

                      <p className="text-sm text-neutral-300 leading-relaxed mb-5">
                        {skill.description[currentLang]}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-3 border-t border-neutral-800/80">
                        {skill.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-md bg-[#161616] border border-neutral-800 text-xs font-mono text-neutral-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Group 2: AI Tools & Productivity */}
          {showAI && (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Bot className="w-4 h-4 text-[#FF243D]" />
                <h3 className="font-display font-semibold text-lg text-white uppercase tracking-wider">
                  {currentLang === 'en' ? 'AI Tools & Productivity' : 'Alat AI & Produktivitas'}
                </h3>
              </div>

              {/* Honest AI Disclaimer Box */}
              <div className="p-4 rounded-xl bg-[#141414] border border-[#E50924]/30 flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                <Info className="w-5 h-5 text-[#E50924] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <span className="text-white font-semibold">
                    {currentLang === 'en' ? 'Honest Scope: ' : 'Catatan Keterbukaan: '}
                  </span>
                  {skills.aiProficiencyDisclaimer[currentLang]}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {skills.aiTools.map((tool) => {
                  const meta = getSkillLevelMeta(tool.level);
                  return (
                    <div
                      key={tool.name}
                      className="group p-5 rounded-xl bg-[#0F0F0F] border border-neutral-800 hover:border-[#FF243D]/50 transition-all duration-300 hover:bg-[#141414] flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-display font-semibold text-white text-base">
                            {tool.name}
                          </h4>
                          <span
                            className={`px-2 py-0.5 rounded text-[11px] font-mono border ${meta.badgeClass}`}
                          >
                            {tool.level}
                          </span>
                        </div>
                        <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                          {tool.description[currentLang]}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-800">
                        {tool.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/60 border border-neutral-800 text-neutral-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Group 3: Web Foundations & Tooling */}
          {showWeb && (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-[#E50924]" />
                <h3 className="font-display font-semibold text-lg text-white uppercase tracking-wider">
                  {currentLang === 'en' ? 'Web Technologies & Development Tools' : 'Teknologi Web & Perkakas Pengembangan'}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {skills.webTools.map((tool) => (
                  <div
                    key={tool.name}
                    className="p-5 rounded-xl bg-[#0F0F0F] border border-neutral-800 hover:border-neutral-700 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-display font-medium text-white text-sm">
                          {tool.name}
                        </h4>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-400">
                          Basic
                        </span>
                      </div>
                      <p className="text-xs text-neutral-400 leading-relaxed mb-3">
                        {tool.description[currentLang]}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1 pt-2 border-t border-neutral-800/80">
                      {tool.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono px-1.5 py-0.5 text-neutral-400"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

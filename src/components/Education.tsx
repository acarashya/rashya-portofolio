import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, CheckCircle } from 'lucide-react';
import { PORTFOLIO_DATA, Language } from '../data/portfolioData';

interface EducationProps {
  currentLang: Language;
}

export const Education: React.FC<EducationProps> = ({ currentLang }) => {
  const { educationTimeline } = PORTFOLIO_DATA;

  return (
    <section id="education" className="relative py-24 sm:py-32 border-t border-neutral-900 bg-[#0A0A0A]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-[#151515] text-xs font-mono text-[#E50924]">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>05 // {currentLang === 'en' ? 'ACADEMIC PATHWAY' : 'JEJAK AKADEMIK'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display uppercase tracking-tight text-white">
            {currentLang === 'en' ? 'EDUCATION TIMELINE' : 'LINIMASA PENDIDIKAN'}
          </h2>
          <p className="text-neutral-400 text-sm max-w-xl">
            {currentLang === 'en'
              ? 'The academic milestones that shaped my analytical thinking, science foundation, and computing focus.'
              : 'Tonggak akademik yang membentuk pemikiran analitis, fondasi sains, dan fokus teknik informatika saya.'}
          </p>
          <div className="w-16 h-1 bg-[#E50924] rounded-full mt-1" />
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Glowing Timeline Line */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#E50924] via-[#FF243D]/50 to-neutral-800 shadow-[0_0_8px_rgba(229,9,36,0.3)]" />

          <div className="space-y-12">
            {educationTimeline.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.year + item.institution}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node / Marker */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                    <div
                      className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                        item.current
                          ? 'border-[#E50924] bg-neutral-950 shadow-[0_0_16px_rgba(229,9,36,0.8)]'
                          : 'border-neutral-700 bg-neutral-900'
                      }`}
                    >
                      <div
                        className={`w-2.5 h-2.5 rounded-full ${
                          item.current ? 'bg-[#FF243D] animate-ping' : 'bg-neutral-500'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Content Card (Left or Right on desktop) */}
                  <div
                    className={`pl-12 sm:pl-0 sm:w-1/2 ${
                      isEven ? 'sm:pr-12 sm:text-right' : 'sm:pl-12 sm:text-left'
                    }`}
                  >
                    <div
                      className={`p-6 rounded-2xl bg-[#111111] border transition-all duration-300 hover:border-[#E50924]/50 shadow-lg ${
                        item.current
                          ? 'border-[#E50924]/40 bg-gradient-to-br from-[#161616] to-[#0E0E0E]'
                          : 'border-neutral-800'
                      }`}
                    >
                      {/* Year Badge */}
                      <div
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono mb-3 ${
                          item.current
                            ? 'bg-[#E50924]/20 text-[#FF243D] border border-[#E50924]/30'
                            : 'bg-neutral-900 text-neutral-400 border border-neutral-800'
                        }`}
                      >
                        <Calendar className="w-3 h-3 text-[#E50924]" />
                        <span>{item.year}</span>
                      </div>

                      {/* Institution & Degree */}
                      <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                        {item.institution}
                      </h3>
                      <p className="text-sm font-medium text-neutral-300 mt-1">
                        {item.degree}
                      </p>

                      {/* Optional Field of Study */}
                      {item.field && (
                        <p className="text-xs font-mono text-neutral-400 mt-1">
                          {item.field}
                        </p>
                      )}

                      {/* GPA if current / university */}
                      {item.gpa && (
                        <div
                          className={`mt-3 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300 ${
                            isEven ? 'sm:ml-auto' : ''
                          }`}
                        >
                          <span className="text-[#FF243D] font-bold">GPA:</span>
                          <span>{item.gpa} / 4.00</span>
                        </div>
                      )}

                      {/* Location */}
                      <div
                        className={`flex items-center gap-1 text-xs font-mono text-neutral-400 mt-4 ${
                          isEven ? 'sm:justify-end' : ''
                        }`}
                      >
                        <MapPin className="w-3.5 h-3.5 text-[#E50924]" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

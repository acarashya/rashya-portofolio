import React from 'react';
import { Users, Building2, Calendar, MapPin, Award, CheckCircle2, Flag, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA, Language } from '../data/portfolioData';

interface OrganizationsProps {
  currentLang: Language;
}

export const Organizations: React.FC<OrganizationsProps> = ({ currentLang }) => {
  const { organizations, campusActivities, certifications } = PORTFOLIO_DATA;

  return (
    <section id="organizations" className="relative py-24 sm:py-32 border-t border-neutral-900 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-[#151515] text-xs font-mono text-[#E50924]">
            <Users className="w-3.5 h-3.5" />
            <span>04 // {currentLang === 'en' ? 'LEADERSHIP & SERVICE' : 'KEORGANISASIAN & KEPEMIMPINAN'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display uppercase tracking-tight text-white">
            {currentLang === 'en' ? 'ORGANIZATIONAL EXPERIENCE' : 'PENGALAMAN ORGANISASI'}
          </h2>
          <p className="text-neutral-400 text-sm max-w-xl">
            {currentLang === 'en'
              ? 'Active engagement in campus student leadership, strategic advocacy, and alumni network development.'
              : 'Keterlibatan aktif dalam himpunan mahasiswa jurusan, kajian strategis advokasi, dan pengembangan aparatur organisasi.'}
          </p>
          <div className="w-16 h-1 bg-[#E50924] rounded-full mt-1" />
        </div>

        {/* Primary Organizational Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {organizations.map((org, index) => (
            <div
              key={org.name}
              className="group relative rounded-2xl bg-[#0F0F0F] border border-neutral-800 hover:border-[#E50924]/50 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between shadow-lg hover:shadow-[0_4px_30px_rgba(229,9,36,0.12)]"
            >
              <div>
                {/* Header: Name & Role Badge */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#E50924]" />
                      <span className="text-xs font-mono text-[#FF243D] uppercase tracking-wider font-semibold">
                        {org.name}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                      {org.organizationFullName}
                    </h3>
                  </div>

                  <span className="shrink-0 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300">
                    {org.period}
                  </span>
                </div>

                {/* Division & Location */}
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-neutral-400 mb-6">
                  <div className="px-2.5 py-1 rounded-md bg-[#181818] border border-neutral-800 text-white font-medium">
                    {org.role}: {org.division}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#E50924]" />
                    <span>{org.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                  {org.description[currentLang]}
                </p>

                {/* Specific Responsibilities / Bullets */}
                {org.bulletPoints && (
                  <div className="space-y-2.5 pt-4 border-t border-neutral-800/80">
                    {org.bulletPoints[currentLang].map((bullet, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E50924] shrink-0 mt-0.5" />
                        <span className="leading-normal">{bullet}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Campus Event Committees & Certifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Campus Activities / Event Committees */}
          <div className="lg:col-span-7 p-6 sm:p-7 rounded-2xl bg-[#0F0F0F] border border-neutral-800">
            <div className="flex items-center gap-2 mb-6">
              <Flag className="w-4 h-4 text-[#E50924]" />
              <h3 className="font-display font-semibold text-lg text-white">
                {currentLang === 'en' ? 'Campus Event Committees' : 'Kepanitiaan & Aktivitas Kampus'}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {campusActivities.map((act, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#141414] border border-neutral-800/90 hover:border-neutral-700 transition-colors"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-1">
                    <span className="text-white font-semibold">{act.title}</span>
                    <span className="text-[#FF243D]">{act.year}</span>
                  </div>
                  <p className="text-xs text-neutral-300">
                    {act.division}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership Certifications from CV */}
          <div className="lg:col-span-5 p-6 sm:p-7 rounded-2xl bg-[#0F0F0F] border border-neutral-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Award className="w-4 h-4 text-[#FF243D]" />
                <h3 className="font-display font-semibold text-lg text-white">
                  {currentLang === 'en' ? 'Student Certifications' : 'Sertifikasi & Pelatihan'}
                </h3>
              </div>

              <div className="space-y-3">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#141414] border border-neutral-800 flex items-start gap-3"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#E50924]/15 border border-[#E50924]/30 flex items-center justify-center text-[#FF243D] shrink-0 text-xs font-mono font-bold">
                      {idx + 1}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">
                        {cert.name}
                      </p>
                      <p className="text-[11px] font-mono text-neutral-400 mt-0.5">
                        {cert.institution} • {cert.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800 text-[11px] font-mono text-neutral-400">
              * {currentLang === 'en' ? 'Verified official campus leadership records' : 'Data terverifikasi resmi berdasarkan riwayat kemahasiswaan'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

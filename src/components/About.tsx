import React from 'react';
import { User, MapPin, GraduationCap, BookOpen, Layers, Target, Award, Sparkles, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA, Language } from '../data/portfolioData';
import { playCyberClick } from '../utils/audio';

interface AboutProps {
  currentLang: Language;
}

export const About: React.FC<AboutProps> = ({ currentLang }) => {
  const { profile } = PORTFOLIO_DATA;

  const infoCards = [
    {
      icon: User,
      label: currentLang === 'en' ? 'Full Name' : 'Nama Lengkap',
      value: profile.fullName,
      sub: profile.displayName,
    },
    {
      icon: MapPin,
      label: currentLang === 'en' ? 'Location' : 'Domisili',
      value: currentLang === 'en' ? 'Sukabumi, Indonesia' : 'Sukabumi, Jawa Barat',
      sub: 'West Java (WIB)',
    },
    {
      icon: GraduationCap,
      label: currentLang === 'en' ? 'University' : 'Perguruan Tinggi',
      value: 'UIN Sunan Gunung Djati',
      sub: currentLang === 'en' ? 'Faculty of Science & Tech' : 'Fakultas Sains & Teknologi',
    },
    {
      icon: BookOpen,
      label: currentLang === 'en' ? 'Major & Level' : 'Program Studi & Jenjang',
      value: currentLang === 'en' ? 'Informatics Engineering (S1)' : 'Teknik Informatika (S1)',
      sub: currentLang === 'en' ? 'Semester 3 • GPA: 3.20' : 'Semester 3 • IPK: 3.20',
    },
    {
      icon: Layers,
      label: currentLang === 'en' ? 'Current Focus' : 'Fokus Pembelajaran',
      value: currentLang === 'en' ? 'Programming & Web Tech' : 'Dasar Pemrograman & Web',
      sub: currentLang === 'en' ? 'C++, Java, AI Utilities' : 'C++, Java, Utilitas AI',
    },
    {
      icon: Target,
      label: currentLang === 'en' ? 'Aspiration' : 'Aspirasi Karier',
      value: currentLang === 'en' ? 'Software Developer' : 'Pengembang Perangkat Lunak',
      sub: currentLang === 'en' ? 'Building practical solutions' : 'Membangun solusi bermanfaat',
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-[#151515] text-xs font-mono text-[#E50924]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>01 // {currentLang === 'en' ? 'IDENTITY & BACKGROUND' : 'IDENTITAS & LATAR BELAKANG'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display uppercase tracking-tight text-white">
            {currentLang === 'en' ? 'ABOUT ME' : 'TENTANG SAYA'}
          </h2>
          <div className="w-16 h-1 bg-[#E50924] rounded-full mt-1" />
        </div>

        {/* Narrative & Quote Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          
          {/* Main Story Card */}
          <div className="lg:col-span-8 p-8 rounded-2xl bg-[#0D0D0D] border border-neutral-800/90 relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#E50924]/5 rounded-full blur-3xl pointer-events-none" />
            
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-4">
              {currentLang === 'en' ? (
                <>
                  Developing Skills, Exploring Solutions &{' '}
                  <span className="text-[#FF243D]">Growing Step by Step</span>
                </>
              ) : (
                <>
                  Mengembangkan Keterampilan, Menjelajahi Solusi &{' '}
                  <span className="text-[#FF243D]">Bertumbuh Berkelanjutan</span>
                </>
              )}
            </h3>

            <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed">
              <p>
                {currentLang === 'en'
                  ? 'I am an Informatics Engineering student at UIN Sunan Gunung Djati Bandung, passionate about exploring technology and developing digital solutions.'
                  : 'Saya adalah mahasiswa Teknik Informatika di UIN Sunan Gunung Djati Bandung dengan dedikasi tinggi dalam mengeksplorasi teknologi dan merancang solusi digital.'}
              </p>
              <p>
                {currentLang === 'en'
                  ? 'My current journey focuses on strengthening programming fundamentals, learning software development, and exploring the practical potential of artificial intelligence.'
                  : 'Fokus perjalanan saya saat ini berpusat pada penguatan logika dasar pemrograman, pembelajaran rekayasa perangkat lunak, serta eksplorasi potensi praktis alat kecerdasan buatan.'}
              </p>
              <p className="text-neutral-400">
                {currentLang === 'en'
                  ? 'As an active beginner, I approach every challenge with curiosity and persistence — transforming academic concepts into tangible digital projects like Aula FST.'
                  : 'Sebagai pembelajar yang aktif, saya menyikapi setiap tantangan dengan rasa ingin tahu dan konsistensi — mengonversi konsep perkuliahan menjadi proyek nyata seperti Aula FST.'}
              </p>
            </div>

            {/* Quick Link to Education Timeline */}
            <div className="mt-8 pt-6 border-t border-neutral-800/80 flex items-center justify-between">
              <span className="text-xs font-mono text-neutral-400">
                {currentLang === 'en' ? 'Formal Education & Activities' : 'Riwayat Pendidikan & Aktivitas'}
              </span>
              <a
                href="#education"
                onClick={() => playCyberClick(700, 0.04)}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#FF243D] hover:underline"
              >
                <span>{currentLang === 'en' ? 'View Timeline' : 'Lihat Linimasa'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Philosophy & Honest Stance Card */}
          <div className="lg:col-span-4 p-8 rounded-2xl bg-gradient-to-br from-[#151515] to-[#0A0A0A] border border-[#E50924]/20 flex flex-col justify-between shadow-xl relative">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#E50924]/10 border border-[#E50924]/30 flex items-center justify-center text-[#FF243D]">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-display font-semibold text-lg text-white">
                {currentLang === 'en' ? 'Core Philosophy' : 'Filosofi Belajar'}
              </h4>
              <blockquote className="text-sm italic text-neutral-300 border-l-2 border-[#E50924] pl-3 py-1">
                "{profile.aboutQuote[currentLang]}"
              </blockquote>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800 text-xs font-mono text-neutral-400 space-y-1">
              <div className="flex justify-between">
                <span>Status:</span>
                <span className="text-white font-medium">Undergraduate Student</span>
              </div>
              <div className="flex justify-between">
                <span>Stage:</span>
                <span className="text-[#FF243D] font-medium">Semester 3</span>
              </div>
              <div className="flex justify-between">
                <span>Ethos:</span>
                <span className="text-neutral-300">Honest & Continuous Growth</span>
              </div>
            </div>
          </div>
        </div>

        {/* Structured Information Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {infoCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="group p-5 rounded-xl bg-[#111111]/80 border border-neutral-800/80 hover:border-[#E50924]/40 transition-all duration-300 hover:bg-[#151515]"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-[#E50924] group-hover:text-[#FF243D] group-hover:border-[#E50924]/40 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                      {card.label}
                    </p>
                    <p className="font-display font-semibold text-white text-base leading-snug">
                      {card.value}
                    </p>
                    <p className="text-xs text-neutral-400 font-mono">
                      {card.sub}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

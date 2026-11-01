import React, { useState, useEffect } from 'react';
import { ArrowDown, Download, Sparkles, Send, ExternalLink, ShieldCheck, Code, MapPin, Eye } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA, Language } from '../data/portfolioData';
import { playCyberClick } from '../utils/audio';

interface HeroProps {
  currentLang: Language;
  onOpenPhotoModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onOpenPhotoModal }) => {
  const { profile } = PORTFOLIO_DATA;
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  // Typing effect
  useEffect(() => {
    const titles = profile.titles[currentLang];
    const currentFullText = titles[currentTitleIndex % titles.length];

    const typingSpeed = isDeleting ? 40 : 80;
    const pauseBeforeDelete = 2000;
    const pauseBeforeNext = 400;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentFullText.length) {
          setDisplayedText(currentFullText.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
        }
      } else {
        if (charIndex > 0) {
          setDisplayedText(currentFullText.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
          setTimeout(() => {}, pauseBeforeNext);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentTitleIndex, currentLang, profile.titles]);

  const handleDownloadCV = (e: React.MouseEvent) => {
    playCyberClick(880, 0.08);
    try {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#E50924', '#FF243D', '#FFFFFF'],
      });
    } catch {
      // Ignore if confetti fails
    }
  };

  const scrollTo = (id: string) => {
    playCyberClick(700, 0.04);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:py-32 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Personal Introduction & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-neutral-800 bg-[#121212]/90 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E50924] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF243D]"></span>
              </span>
              <span className="font-mono text-xs uppercase tracking-wider text-neutral-300">
                {profile.statusBadge[currentLang]}
              </span>
            </div>

            {/* Greetings & Name */}
            <div className="space-y-2">
              <p className="font-mono text-sm tracking-widest text-[#E50924] uppercase font-medium">
                {currentLang === 'en' ? "HELLO, I'M" : 'HALO, SAYA'}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display uppercase leading-tight">
                Muhammad <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-neutral-400">
                  Rashya
                </span>{' '}
                <span className="text-[#FF243D] text-glow-red">Reihansyah</span>
              </h1>
            </div>

            {/* Dynamic Role Subtitle */}
            <div className="h-8 flex items-center">
              <div className="flex items-center gap-2 font-mono text-base sm:text-lg text-neutral-300">
                <span className="text-[#E50924]">&gt;</span>
                <span className="font-medium text-white">{displayedText}</span>
                <span className="w-2 h-5 bg-[#FF243D] animate-pulse inline-block" />
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-neutral-400 max-w-2xl leading-relaxed">
              {currentLang === 'en' ? (
                <>
                  Exploring the intersection of <span className="text-neutral-200">software development</span>,{' '}
                  <span className="text-neutral-200">technology</span>, and{' '}
                  <span className="text-neutral-200">artificial intelligence</span>. Building skills, creating solutions, and growing one project at a time.
                </>
              ) : (
                <>
                  Mengeksplorasi titik temu antara <span className="text-neutral-200">pengembangan perangkat lunak</span>,{' '}
                  <span className="text-neutral-200">teknologi</span>, dan{' '}
                  <span className="text-neutral-200">kecerdasan buatan</span>. Mengembangkan keterampilan, membangun solusi, dan bertumbuh langkah demi langkah.
                </>
              )}
            </p>

            {/* Location & Quick Meta */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-neutral-400 font-mono pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#E50924]" />
                <span>{profile.location}</span>
              </div>
              <span className="text-neutral-700">•</span>
              <div className="flex items-center gap-1.5">
                <Code className="w-3.5 h-3.5 text-[#FF243D]" />
                <span>UIN Sunan Gunung Djati Bandung (Semester 3)</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-4">
              {/* Explore My Work */}
              <button
                onClick={() => scrollTo('projects')}
                className="group relative inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium text-sm text-white bg-[#E50924] hover:bg-[#FF243D] transition-all duration-200 shadow-[0_0_20px_rgba(229,9,36,0.4)] hover:shadow-[0_0_28px_rgba(229,9,36,0.65)] active:scale-95"
              >
                <span>{currentLang === 'en' ? 'Explore My Work' : 'Lihat Proyek Saya'}</span>
                <Sparkles className="w-4 h-4 ml-2 transition-transform group-hover:rotate-12" />
              </button>

              {/* Download CV */}
              <a
                href={profile.cvUrl}
                download="CV_Muhammad_Rashya_Reihansyah.pdf"
                onClick={handleDownloadCV}
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-medium text-sm text-neutral-200 bg-[#151515] hover:bg-[#1f1f1f] border border-neutral-700/80 hover:border-[#E50924]/60 transition-all duration-200 hover:text-white active:scale-95 shadow-sm"
              >
                <Download className="w-4 h-4 mr-2 text-[#E50924]" />
                <span>{currentLang === 'en' ? 'Download CV' : 'Unduh CV'}</span>
              </a>

              {/* Contact Me */}
              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-medium text-sm text-neutral-300 hover:text-white bg-transparent hover:bg-white/5 border border-transparent hover:border-neutral-800 transition-all active:scale-95"
              >
                <Send className="w-4 h-4 mr-2 text-neutral-400" />
                <span>{currentLang === 'en' ? 'Contact Me' : 'Hubungi Saya'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Authentic Personal Portrait Photograph */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-[340px] sm:max-w-[380px]">
              
              {/* Subtle Ambient Red Glow behind card */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#E50924]/40 via-red-600/20 to-transparent blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Tech Frame Outer Container */}
              <div className="relative rounded-2xl p-1 bg-gradient-to-b from-neutral-800 via-neutral-900 to-black border border-neutral-800/80 shadow-2xl overflow-hidden">
                
                {/* Tech HUD Corner Accents */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#E50924] z-20" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#E50924] z-20" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#E50924] z-20" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#E50924] z-20" />

                {/* Portrait Image Holder */}
                <div className="relative rounded-xl overflow-hidden bg-neutral-950 aspect-[3/4]">
                  <img
                    src={profile.photoUrl}
                    alt="Muhammad Rashya Reihansyah"
                    className="w-full h-full object-cover object-center filter contrast-[1.02] brightness-95 group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />

                  {/* Red Atmospheric Gradient at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />

                  {/* Interactive View Full Photo Button */}
                  <button
                    onClick={onOpenPhotoModal}
                    className="absolute top-3 right-3 p-2 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 text-white/80 hover:text-white hover:border-[#E50924]/60 transition-all opacity-0 group-hover:opacity-100"
                    title={currentLang === 'en' ? 'View Full Portrait' : 'Lihat Foto Lengkap'}
                    aria-label="View portrait photo modal"
                  >
                    <Eye className="w-4 h-4 text-neutral-300" />
                  </button>

                  {/* Identification Card Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-[#0D0D0D]/85 backdrop-blur-md border border-white/10 text-left">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#E50924]" />
                          <p className="font-display font-semibold text-white text-sm">
                            Muhammad Rashya
                          </p>
                        </div>
                        <p className="text-[11px] font-mono text-neutral-400 mt-0.5">
                          Informatics Eng. • UIN SGD Bandung
                        </p>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#E50924]/20 text-[#FF243D] border border-[#E50924]/30 font-semibold">
                        S1 - SEM 3
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Tech Metrics Tag */}
              <div className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#151515] border border-neutral-800 shadow-lg text-neutral-300 font-mono text-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E50924]" />
                <span>Verified Identity</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-16 pb-4 flex justify-center">
          <button
            onClick={() => scrollTo('about')}
            className="group flex flex-col items-center gap-2 text-xs font-mono text-neutral-500 hover:text-neutral-300 transition-colors focus:outline-none"
            aria-label="Scroll down to About section"
          >
            <span>{currentLang === 'en' ? 'SCROLL TO EXPLORE' : 'GULIR KE BAWAH'}</span>
            <div className="w-5 h-8 rounded-full border border-neutral-700 flex justify-center p-1 group-hover:border-[#E50924] transition-colors">
              <div className="w-1 h-2 rounded-full bg-[#E50924] animate-bounce" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

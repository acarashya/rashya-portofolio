import React, { useState, useEffect } from 'react';
import { Menu, X, Volume2, VolumeX, Globe, Terminal } from 'lucide-react';
import { Language } from '../data/portfolioData';
import { isSoundEnabled, toggleSound, playCyberClick } from '../utils/audio';

interface NavbarProps {
  currentLang: Language;
  onToggleLang: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onToggleLang,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    setSoundOn(isSoundEnabled());

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 40);

      const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (winHeight > 0) {
        setScrollProgress((scrollY / winHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: { en: 'Home', id: 'Beranda' } },
    { id: 'about', label: { en: 'About', id: 'Tentang' } },
    { id: 'skills', label: { en: 'Skills', id: 'Keahlian' } },
    { id: 'projects', label: { en: 'Project', id: 'Proyek' } },
    { id: 'organizations', label: { en: 'Organizations', id: 'Organisasi' } },
    { id: 'education', label: { en: 'Education', id: 'Pendidikan' } },
    { id: 'contact', label: { en: 'Contact', id: 'Kontak' } },
  ];

  const handleNavClick = (id: string) => {
    playCyberClick(700, 0.04);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSoundToggle = () => {
    const nextState = toggleSound();
    setSoundOn(nextState);
  };

  return (
    <>
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-neutral-900 z-50">
        <div
          className="h-full bg-gradient-to-r from-[#E50924] via-[#FF243D] to-rose-400 transition-all duration-75 ease-out shadow-[0_0_8px_#E50924]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-panel border-b border-neutral-800/80 shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
              className="group flex items-center gap-2 focus:outline-none"
              aria-label="Rashya Portfolio Home"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#151515] to-[#0A0A0A] border border-[#E50924]/40 flex items-center justify-center group-hover:border-[#FF243D] transition-colors shadow-[0_0_12px_rgba(229,9,36,0.2)]">
                <Terminal className="w-4 h-4 text-[#E50924] group-hover:text-[#FF243D] transition-colors" />
              </div>
              <span className="font-display font-bold text-lg tracking-wider text-neutral-100 group-hover:text-white transition-colors">
                RASHYA<span className="text-[#E50924] animate-pulse">.</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative px-3 py-1.5 rounded-md text-xs lg:text-sm font-medium tracking-wide transition-all ${
                      isActive
                        ? 'text-white'
                        : 'text-neutral-400 hover:text-neutral-200 hover:bg-white/5'
                    }`}
                  >
                    {item.label[currentLang]}
                    {isActive && (
                      <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#E50924] shadow-[0_0_8px_#E50924] rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Utility Actions (Language & Audio) */}
            <div className="hidden md:flex items-center gap-3">
              {/* Language Switch */}
              <button
                onClick={() => {
                  playCyberClick(900, 0.04);
                  onToggleLang();
                }}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-neutral-800 bg-[#151515]/70 hover:border-[#E50924]/50 hover:bg-[#1a1a1a] text-xs font-mono transition-all text-neutral-300"
                title={currentLang === 'en' ? 'Ganti ke Bahasa Indonesia' : 'Switch to English'}
                aria-label="Toggle language"
              >
                <Globe className="w-3.5 h-3.5 text-[#E50924]" />
                <span className={currentLang === 'en' ? 'text-white font-semibold' : 'text-neutral-400'}>EN</span>
                <span className="text-neutral-600">/</span>
                <span className={currentLang === 'id' ? 'text-white font-semibold' : 'text-neutral-400'}>ID</span>
              </button>

              {/* Sound Toggle */}
              <button
                onClick={handleSoundToggle}
                className={`p-2 rounded-lg border transition-all text-xs ${
                  soundOn
                    ? 'border-[#E50924]/50 bg-[#E50924]/10 text-[#FF243D] shadow-[0_0_10px_rgba(229,9,36,0.25)]'
                    : 'border-neutral-800 bg-[#151515]/70 text-neutral-400 hover:text-neutral-200'
                }`}
                title={soundOn ? 'Mute interaction sounds' : 'Enable interaction sounds'}
                aria-label="Toggle interaction audio"
              >
                {soundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => {
                  playCyberClick(900, 0.04);
                  onToggleLang();
                }}
                className="flex items-center gap-1 px-2 py-1 rounded border border-neutral-800 bg-[#151515] text-xs font-mono text-neutral-300"
                aria-label="Toggle language mobile"
              >
                <span>{currentLang.toUpperCase()}</span>
              </button>

              <button
                onClick={() => {
                  playCyberClick(600, 0.04);
                  setMobileMenuOpen(!mobileMenuOpen);
                }}
                className="p-2 rounded-lg border border-neutral-800 bg-[#151515] text-neutral-300 hover:text-white"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-[#FF243D]" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-panel-glow border-t border-neutral-800/80 px-4 pt-3 pb-6 mt-3 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#E50924]/15 text-[#FF243D] border border-[#E50924]/30'
                      : 'text-neutral-300 hover:bg-neutral-800/60'
                  }`}
                >
                  {item.label[currentLang]}
                </button>
              );
            })}

            <div className="pt-3 border-t border-neutral-800 flex items-center justify-between">
              <span className="text-xs text-neutral-400 font-mono">
                {currentLang === 'en' ? 'Audio Feedback' : 'Efek Audio'}
              </span>
              <button
                onClick={handleSoundToggle}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-mono ${
                  soundOn
                    ? 'border-[#E50924] bg-[#E50924]/15 text-[#FF243D]'
                    : 'border-neutral-800 text-neutral-400'
                }`}
              >
                {soundOn ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
                <span>{soundOn ? 'ON' : 'OFF'}</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

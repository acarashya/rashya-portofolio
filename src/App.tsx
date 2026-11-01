import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA, Language } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Organizations } from './components/Organizations';
import { Education } from './components/Education';
import { Interests } from './components/Interests';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { CyberBackground } from './components/CyberBackground';
import { LoadingScreen } from './components/LoadingScreen';
import { PhotoModal } from './components/PhotoModal';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [activeSection, setActiveSection] = useState('home');
  const [photoModalOpen, setPhotoModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(PORTFOLIO_DATA.profile.photoUrl);

  const toggleLang = () => {
    setCurrentLang((prev) => (prev === 'en' ? 'id' : 'en'));
  };

  // Scrollspy observer for active section
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'organizations', 'education', 'interests', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#080808] text-[#F5F5F5] selection:bg-[#E50924] selection:text-white font-sans">
      {/* Loading Screen */}
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      {/* Custom Cursor for Desktop */}
      <CustomCursor />

      {/* Ambient Futuristic Background Particles & Glow */}
      <CyberBackground />

      {/* Main Content Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar
          currentLang={currentLang}
          onToggleLang={toggleLang}
          activeSection={activeSection}
        />

        <main className="flex-1">
          <Hero
            currentLang={currentLang}
            onOpenPhotoModal={() => setPhotoModalOpen(true)}
          />

          <About currentLang={currentLang} />

          <Skills currentLang={currentLang} />

          <Projects currentLang={currentLang} />

          <Organizations currentLang={currentLang} />

          <Education currentLang={currentLang} />

          <Interests currentLang={currentLang} />

          <Contact currentLang={currentLang} />
        </main>

        <Footer currentLang={currentLang} />
      </div>

      {/* Photo Lightbox Modal */}
      <PhotoModal
        isOpen={photoModalOpen}
        onClose={() => setPhotoModalOpen(false)}
        currentPhoto={currentPhoto}
        onUpdatePhoto={(newPhoto) => setCurrentPhoto(newPhoto)}
        onResetPhoto={() => setCurrentPhoto(PORTFOLIO_DATA.profile.photoUrl)}
        currentLang={currentLang}
      />
    </div>
  );
}

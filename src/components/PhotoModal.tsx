import React, { useRef } from 'react';
import { X, Upload, Check, ShieldCheck, Download, RefreshCw } from 'lucide-react';
import { PORTFOLIO_DATA, Language } from '../data/portfolioData';
import { playCyberClick } from '../utils/audio';

interface PhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPhoto: string;
  onUpdatePhoto: (newUrl: string) => void;
  onResetPhoto: () => void;
  currentLang: Language;
}

export const PhotoModal: React.FC<PhotoModalProps> = ({
  isOpen,
  onClose,
  currentPhoto,
  onUpdatePhoto,
  onResetPhoto,
  currentLang,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      playCyberClick(800, 0.05);
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        if (uploadEvent.target?.result) {
          onUpdatePhoto(uploadEvent.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full bg-[#0E0E0E] border border-neutral-800 rounded-3xl p-6 shadow-[0_0_50px_rgba(229,9,36,0.3)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#E50924]" />
            <h3 className="font-display font-bold text-white text-base">
              {currentLang === 'en' ? 'Authentic Portrait Profile' : 'Foto Profil Resmi'}
            </h3>
          </div>
          <button
            onClick={() => {
              playCyberClick(500, 0.03);
              onClose();
            }}
            className="p-1 rounded-lg border border-neutral-800 text-neutral-400 hover:text-white hover:border-[#E50924]"
            aria-label="Close photo modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* High-res Image Preview */}
        <div className="relative rounded-2xl overflow-hidden aspect-[3/4] max-h-[460px] mx-auto border border-neutral-800 bg-neutral-950 shadow-inner">
          <img
            src={currentPhoto}
            alt="Muhammad Rashya Reihansyah Full Portrait"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
          
          <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 text-left">
            <p className="font-display font-semibold text-white text-sm">
              Muhammad Rashya Reihansyah
            </p>
            <p className="text-[11px] font-mono text-neutral-300">
              UIN Sunan Gunung Djati Bandung • Informatics Engineering
            </p>
          </div>
        </div>

        {/* Image Controls & Upload Placeholder */}
        <div className="mt-5 pt-4 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />

          <button
            onClick={() => fileInputRef.current?.click()}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#161616] hover:bg-[#202020] border border-neutral-700 text-neutral-200 hover:text-white transition-colors"
          >
            <Upload className="w-3.5 h-3.5 text-[#E50924]" />
            <span>{currentLang === 'en' ? 'Upload Custom Photo' : 'Unggah Foto Lain'}</span>
          </button>

          <button
            onClick={() => {
              playCyberClick(600, 0.03);
              onResetPhoto();
            }}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-neutral-800 text-neutral-400 hover:text-white transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>{currentLang === 'en' ? 'Reset to Default' : 'Reset Foto Asli'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

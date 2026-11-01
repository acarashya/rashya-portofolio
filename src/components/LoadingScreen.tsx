import React, { useEffect, useState } from 'react';
import { Terminal } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if ?autostart=1 or prefers reduced motion
    const params = new URLSearchParams(window.location.search);
    if (params.get('autostart') === '1') {
      onComplete();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 200);
          return 100;
        }
        return prev + 15;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      onClick={onComplete}
      className="fixed inset-0 z-50 bg-[#080808] flex flex-col items-center justify-center p-4 cursor-pointer select-none transition-opacity duration-300"
      aria-label="Booting Portfolio"
    >
      <div className="w-full max-w-sm space-y-6 text-center">
        {/* Emblem */}
        <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[#181818] to-[#0A0A0A] border border-[#E50924]/50 flex items-center justify-center text-[#FF243D] shadow-[0_0_30px_rgba(229,9,36,0.3)] animate-pulse">
          <Terminal className="w-8 h-8" />
        </div>

        {/* Title */}
        <div>
          <h1 className="font-display font-bold text-xl text-white tracking-widest uppercase">
            RASHYA<span className="text-[#E50924]">.DEV</span>
          </h1>
          <p className="font-mono text-xs text-neutral-400 mt-1">
            INITIALIZING SYSTEM KERNEL // UIN SGD
          </p>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="w-full h-1 bg-neutral-900 rounded-full overflow-hidden border border-neutral-800">
            <div
              className="h-full bg-gradient-to-r from-[#E50924] to-[#FF243D] transition-all duration-75 shadow-[0_0_12px_#E50924]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-[11px] font-mono text-neutral-400">
            <span>LOADING MODULES</span>
            <span className="text-[#FF243D] font-bold">{progress}%</span>
          </div>
        </div>

        <p className="text-[10px] font-mono text-neutral-400 pt-4">
          Click anywhere to skip
        </p>
      </div>
    </div>
  );
};

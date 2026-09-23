'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState(
    'INITIALIZING SPATIAL WORKSPACE'
  );
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const statuses = [
      { at: 15, text: 'INITIALIZING SPATIAL WORKSPACE' },
      { at: 40, text: 'LOADING 3D KINETIC ENGINE' },
      { at: 70, text: 'SYNTHESIZING 500+ COLLEGE DATA' },
      { at: 90, text: 'PREPARING EXPERT GUIDANCE' },
      { at: 100, text: 'WELCOME TO EDUCATOR' },
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Organic acceleration
        const increment =
          prev < 50
            ? Math.floor(Math.random() * 5) + 3
            : Math.floor(Math.random() * 8) + 4;
        const next = Math.min(100, prev + increment);

        // Update status text
        const currentStatus = [...statuses].reverse().find((s) => next >= s.at);
        if (currentStatus) {
          setStatusText(currentStatus.text);
        }

        return next;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setIsFadingOut(true);
        setTimeout(() => {
          onComplete();
        }, 700);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [progress, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0d131f] text-white transition-all duration-700 select-none ${
        isFadingOut
          ? 'opacity-0 scale-105 pointer-events-none'
          : 'opacity-100 scale-100'
      }`}
    >
      {/* Background ambient glow circles */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#00df89]/15 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-[#007bff]/20 rounded-full blur-3xl pointer-events-none animate-pulse animation-delay-1000" />

      <div className="relative flex flex-col items-center max-w-sm w-full px-6">
        {/* Animated Brand Favicon / Logo */}
        <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
          {/* Outer rotating dashed ring */}
          <div className="absolute inset-0 rounded-full border border-dashed border-[#00df89]/40 animate-spin-slow" />

          {/* Pulsing glow ring */}
          <div className="absolute inset-2 rounded-full border border-[#00c9a7]/30 animate-ping opacity-25" />

          {/* Favicon Logo */}
          <div className="relative w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-lg p-1.5 z-10">
            <Image
              src="/favicon.png"
              alt="Educator Icon"
              width={48}
              height={48}
              className="w-full h-full object-contain"
              priority
            />
          </div>
        </div>

        {/* Brand Name */}
        <h2 className="text-2xl font-bold tracking-tight text-white mb-1">
          Educator
        </h2>
        <p className="text-[11px] uppercase tracking-[0.25em] text-[#00df89] font-medium mb-8">
          Right Career, Right College!
        </p>

        {/* Progress Display */}
        <div className="w-full flex items-baseline justify-between mb-2 font-mono text-xs text-slate-400">
          <span className="text-[11px] tracking-wider text-slate-300 font-sans font-semibold">
            {statusText}
          </span>
          <span className="text-lg font-bold text-white tracking-tighter">
            {progress}
            <span className="text-xs text-brand-mint">%</span>
          </span>
        </div>

        {/* Sleek Progress Bar */}
        <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-700/50">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#00df89] via-[#00c9a7] to-[#0084ff] transition-all duration-150 ease-out shadow-[0_0_12px_rgba(0,223,137,0.6)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Skip button for quick review */}
        <button
          onClick={() => {
            setIsFadingOut(true);
            setTimeout(onComplete, 400);
          }}
          className="mt-8 text-[11px] tracking-widest text-slate-500 hover:text-slate-300 uppercase transition-colors"
        >
          Skip Intro →
        </button>
      </div>
    </div>
  );
}

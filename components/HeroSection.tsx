'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import {
  ArrowDownRight,
  Star,
  ShieldCheck,
  TrendingUp,
  Sparkles,
} from 'lucide-react';
import Header from './Header';
import HexBackground from './HexBackground';

interface HeroSectionProps {
  onOpenModal: (
    type: 'about' | 'courses' | 'teachers' | 'contacts' | 'trial'
  ) => void;
  onReplayLoading?: () => void;
}

export default function HeroSection({
  onOpenModal,
  onReplayLoading,
}: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full min-h-[92vh] xl:min-h-screen bg-white relative overflow-hidden flex flex-col justify-between border-b border-slate-100"
    >
      {/* Full-bleed Hexagonal & Ambient Background spanning edge-to-edge */}
      <HexBackground />

      {/* Top Navigation Bar with Official Educator Logo */}
      <Header onOpenModal={onOpenModal} onReplayLoading={onReplayLoading} />

      {/* Main Full-Screen Hero Canvas */}
      <div className="relative flex-1 w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 select-none min-h-[740px] lg:min-h-[800px] xl:min-h-[850px] 2xl:min-h-[900px] flex flex-col justify-between pb-8">
        {/* Central Visual & Typography Arena */}
        <div className="relative w-full h-[580px] sm:h-[640px] lg:h-[700px] xl:h-[740px]">
          {/* ------------------------------------------------------------- */}
          {/* BACKGROUND 3D VIDEO: edtech.mp4 */}
          {/* Ambient, unpausable background video running seamlessly */}
          {/* ------------------------------------------------------------- */}
          <div
            className="absolute left-[50%] lg:left-[51%] top-[46%] -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none select-none flex items-center justify-center"
            style={{
              transform: `translate3d(calc(-50% + ${mousePos.x * 14}px), calc(-50% + ${mousePos.y * 10}px), 0)`,
              transition: 'transform 0.25s cubic-bezier(0.2, 0, 0.2, 1)',
            }}
          >
            <div className="relative w-[380px] h-[380px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[660px] xl:h-[660px] 2xl:w-[720px] 2xl:h-[720px] flex items-center justify-center">
              <video
                ref={videoRef}
                src="/edtech.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-contain mix-blend-multiply pointer-events-none select-none"
              />
            </div>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* TYPOGRAPHY: LEARN (Top Left) */}
          {/* ------------------------------------------------------------- */}
          <div className="absolute left-2 sm:left-4 lg:left-6 top-[3%] z-20 pointer-events-none">
            <h1 className="font-display text-[115px] sm:text-[150px] lg:text-[185px] xl:text-[215px] 2xl:text-[240px] leading-[0.76] tracking-[-0.02em] text-[#111827]">
              LEARN
            </h1>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* TYPOGRAPHY: THE (Mid Left) */}
          {/* ------------------------------------------------------------- */}
          <div className="absolute left-2 sm:left-4 lg:left-6 top-[30%] z-20 pointer-events-none">
            <h2 className="font-display text-[115px] sm:text-[150px] lg:text-[185px] xl:text-[215px] 2xl:text-[240px] leading-[0.76] tracking-[-0.02em] text-[#111827]">
              THE
            </h2>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* TYPOGRAPHY: FUTURE */}
          {/* Senior Frontend Designer Touch: */}
          {/* - F: vibrant mint green */}
          {/* - Center part (U, T, U): TRANSPARENT with crisp white stroke */}
          {/*   so the 3D rotating background video shines through! */}
          {/* - R, E: electric cyan to royal blue gradient */}
          {/* ------------------------------------------------------------- */}
          <div
            className="absolute left-[33%] lg:left-[35%] xl:left-[36%] top-[30%] z-20 pointer-events-none flex items-baseline font-display text-[115px] sm:text-[150px] lg:text-[185px] xl:text-[215px] 2xl:text-[240px] leading-[0.76] tracking-[-0.02em] font-bold"
            style={{
              transform: `translate3d(${mousePos.x * -8}px, ${mousePos.y * -5}px, 0)`,
              transition: 'transform 0.2s cubic-bezier(0.2, 0, 0.2, 1)',
            }}
          >
            {/* F - Solid Mint Green */}
            <span className="text-[#00DF89] drop-shadow-[0_1px_2px_rgba(0,223,137,0.15)]">
              F
            </span>

            {/* U - Mint Green on left, transparent with white stroke over the 3D video */}
            <span className="relative">
              <span className="text-[#00DF89]">U</span>
              <span
                className="absolute inset-0 text-stroke-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.2)]"
                style={{
                  clipPath: 'polygon(35% 0, 100% 0, 100% 100%, 35% 100%)',
                }}
              >
                U
              </span>
            </span>

            {/* T - Transparent with crisp white stroke so the video in background is visible */}
            <span className="text-stroke-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
              T
            </span>

            {/* U - Transparent with white stroke transitioning to Cyan */}
            <span className="relative">
              <span className="text-stroke-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
                U
              </span>
              <span
                className="absolute inset-0 text-[#00B4D8]"
                style={{
                  clipPath: 'polygon(60% 0, 100% 0, 100% 100%, 60% 100%)',
                }}
              >
                U
              </span>
            </span>

            {/* R - Electric Blue */}
            <span className="text-[#0084FF] drop-shadow-[0_1px_2px_rgba(0,132,255,0.15)]">
              R
            </span>

            {/* E - Royal Blue */}
            <span className="text-[#0066FF] drop-shadow-[0_1px_2px_rgba(0,102,255,0.15)]">
              E
            </span>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* TYPOGRAPHY: WAY (Bottom Right, under R and E) */}
          {/* ------------------------------------------------------------- */}
          <div className="absolute right-2 sm:right-4 lg:right-6 top-[57%] z-20 pointer-events-none">
            <h3 className="font-display text-[115px] sm:text-[150px] lg:text-[185px] xl:text-[215px] 2xl:text-[240px] leading-[0.76] tracking-[-0.02em] text-[#111827]">
              WAY
            </h3>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* FLOATING AVATARS: Concentric rings & exact reference positions */}
          {/* ------------------------------------------------------------- */}

          {/* AVATAR 1: Top Center-Left (Near 'N' of LEARN) */}
          <div
            className="absolute z-30 animate-float-slow group cursor-pointer"
            style={{
              top: '12%',
              left: '30%',
              transform: `translate3d(${mousePos.x * 20}px, ${mousePos.y * 14}px, 0)`,
              transition: 'transform 0.2s cubic-bezier(0.2, 0, 0.2, 1)',
            }}
            onClick={() => onOpenModal('teachers')}
          >
            <div className="relative flex items-center justify-center">
              <div className="absolute -inset-3 rounded-full border border-sky-300/70 pointer-events-none group-hover:scale-110 group-hover:border-sky-400 transition-all duration-300" />
              <div className="absolute -inset-1.5 rounded-full border border-sky-200/90 pointer-events-none" />

              <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-white shadow-md border border-white">
                <Image
                  src="/avatars/avatar-1.png"
                  alt="Emma Watson"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-300"
                />
              </div>

              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 bg-slate-900 text-white text-[10px] font-semibold tracking-wide rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-40">
                Emma W. • 3D Design
              </div>
            </div>
          </div>

          {/* AVATAR 2: Top Right (Above 'R' of FUTURE) */}
          <div
            className="absolute z-30 animate-float-delayed group cursor-pointer"
            style={{
              top: '19%',
              right: '22%',
              transform: `translate3d(${mousePos.x * 24}px, ${mousePos.y * 18}px, 0)`,
              transition: 'transform 0.2s cubic-bezier(0.2, 0, 0.2, 1)',
            }}
            onClick={() => onOpenModal('courses')}
          >
            <div className="relative flex items-center justify-center">
              <div className="absolute -inset-3 rounded-full border border-sky-300/70 pointer-events-none group-hover:scale-110 group-hover:border-sky-400 transition-all duration-300" />
              <div className="absolute -inset-1.5 rounded-full border border-sky-200/90 pointer-events-none" />

              <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-white shadow-md border border-white">
                <Image
                  src="/avatars/avatar-2.png"
                  alt="Liam Chen"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-300"
                />
              </div>

              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 bg-slate-900 text-white text-[10px] font-semibold tracking-wide rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-40">
                Liam C. • AI Engineer
              </div>
            </div>
          </div>

          {/* AVATAR 3: Bottom Right (Left of 'WAY') */}
          <div
            className="absolute z-30 animate-float-reverse group cursor-pointer"
            style={{
              top: '67%',
              right: '28%',
              transform: `translate3d(${mousePos.x * 18}px, ${mousePos.y * 14}px, 0)`,
              transition: 'transform 0.2s cubic-bezier(0.2, 0, 0.2, 1)',
            }}
            onClick={() => onOpenModal('about')}
          >
            <div className="relative flex items-center justify-center">
              <div className="absolute -inset-3 rounded-full border border-sky-300/70 pointer-events-none group-hover:scale-110 group-hover:border-sky-400 transition-all duration-300" />
              <div className="absolute -inset-1.5 rounded-full border border-sky-200/90 pointer-events-none" />

              <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-white shadow-md border border-white">
                <Image
                  src="/avatars/avatar-3.png"
                  alt="Marcus Vance"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-300"
                />
              </div>

              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2.5 py-1 bg-slate-900 text-white text-[10px] font-semibold tracking-wide rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-40">
                Marcus V. • Quantum Lead
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* SENIOR DESIGNER ACCENTS: FILLING THE RIGHT FLANK HARMONIOUSLY */}
          {/* ------------------------------------------------------------- */}

          {/* Upper Right Feature Badge: Top-Ranked Institutes */}
          <div
            className="hidden xl:flex absolute right-4 top-10 z-20 items-center gap-3 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] animate-float"
            style={{
              transform: `translate3d(${mousePos.x * -10}px, ${mousePos.y * -8}px, 0)`,
            }}
          >
            <div className="w-8 h-8 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                500+ Top Colleges
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <div className="text-[10px] text-slate-500 font-medium">
                NIRF 2025 Live Cutoffs & Counseling
              </div>
            </div>
          </div>

          {/* Bottom Right Stat Badge: 98.4% Admission Success */}
          <div
            className="hidden xl:flex absolute right-4 bottom-2 z-20 items-center gap-3 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] animate-float-delayed"
            style={{
              transform: `translate3d(${mousePos.x * -6}px, ${mousePos.y * -4}px, 0)`,
            }}
          >
            <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-slate-900">
                98.4% Admission Rate
              </div>
              <div className="text-[10px] text-slate-500 font-medium">
                Across IITs, NITs & Premier Unis
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* BOTTOM LEFT: Subtext, CTA Button & Social Proof Trust Bar */}
        {/* Fills the left flank with authority and clean spatial alignment */}
        {/* ------------------------------------------------------------- */}
        <div className="relative z-30 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className="max-w-[420px] lg:max-w-[480px] space-y-4">
            <p className="text-[13.5px] sm:text-[14.5px] leading-[1.65] text-slate-600 font-normal">
              Welcome to Educator, where we&apos;re shaping the future of
              learning today. Our mission is to empower individuals to unlock
              their full potential and achieve their educational goals.
            </p>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenModal('trial')}
                className="group relative inline-flex items-center gap-3.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#00D2A0] via-[#00C9A7] to-[#0084FF] text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_8px_25px_rgba(0,210,160,0.35)] hover:shadow-[0_12px_32px_rgba(0,132,255,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <span>TRY FOR FREE</span>
                <div className="w-5 h-5 rounded-full bg-white/25 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5">
                  <ArrowDownRight className="w-3.5 h-3.5 text-white stroke-[2.5]" />
                </div>
              </button>

              <a
                href="#colleges"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold text-xs sm:text-sm tracking-wide border border-slate-200 transition-colors"
              >
                <span>Explore 500+ Colleges</span>
              </a>
            </div>

            {/* Trust Proof Bar filling bottom-left */}
            <div className="pt-2 flex items-center gap-3 text-xs text-slate-500">
              <div className="flex -space-x-2 overflow-hidden">
                <img
                  className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover"
                  src="/avatars/avatar-1.png"
                  alt="Student"
                />
                <img
                  className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover"
                  src="/avatars/avatar-2.png"
                  alt="Student"
                />
                <img
                  className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover"
                  src="/avatars/avatar-3.png"
                  alt="Student"
                />
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-amber-400 stroke-none" />
                </div>
                <span className="font-semibold text-slate-700">4.9/5</span>
                <span>(50,000+ Students Guided)</span>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded-full">
                <ShieldCheck className="w-3 h-3 text-emerald-600" />
                Verified
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

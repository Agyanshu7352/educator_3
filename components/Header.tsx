'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowDownRight } from 'lucide-react';

interface HeaderProps {
  onOpenModal: (
    type: 'about' | 'courses' | 'teachers' | 'contacts' | 'trial'
  ) => void;
  onReplayLoading?: () => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
  return (
    <header className="relative z-30 w-full px-8 sm:px-12 lg:px-14 pt-6 pb-2 select-none">
      <div className="flex items-center justify-between">
        {/* Brand Logo - Official Educator Logo */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="relative h-11 w-44 sm:w-48 flex items-center">
            <Image
              src="/Logo.png"
              alt="Educator - Right Career, Right College!"
              width={200}
              height={55}
              priority
              className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* Center Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-11">
          <a
            href="#about"
            className="text-[12px] font-semibold tracking-[0.18em] text-slate-500 hover:text-slate-900 transition-colors uppercase"
          >
            ABOUT US
          </a>

          <a
            href="#colleges"
            className="text-[12px] font-semibold tracking-[0.18em] text-slate-500 hover:text-slate-900 transition-colors uppercase"
          >
            COLLEGES
          </a>

          <a
            href="#how-it-works"
            className="text-[12px] font-semibold tracking-[0.18em] text-slate-500 hover:text-slate-900 transition-colors uppercase"
          >
            HOW IT WORKS
          </a>

          <a
            href="#contact"
            className="text-[12px] font-semibold tracking-[0.18em] text-slate-500 hover:text-slate-900 transition-colors uppercase"
          >
            CONTACTS
          </a>
        </nav>

        {/* Right CTA: LET'S TRY ↘ */}
        <div className="flex items-center">
          <button
            onClick={() => onOpenModal('trial')}
            className="group flex items-center gap-1.5 text-[12.5px] font-bold tracking-[0.16em] text-slate-800 hover:text-cyan-700 uppercase transition-all duration-200"
          >
            <span>LET&apos;S TRY</span>
            <ArrowDownRight className="w-3.5 h-3.5 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5 text-cyan-600" />
          </button>
        </div>
      </div>
    </header>
  );
}

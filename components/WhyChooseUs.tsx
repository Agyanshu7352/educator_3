'use client';

import React from 'react';
import { School, Sparkles, CheckCircle2, Bell, Users } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      title: 'Explore Colleges',
      description: 'Compare top colleges across India',
      icon: <School className="w-5 h-5 text-cyan-600" />,
      bg: 'bg-cyan-50/70 border-cyan-100/80 hover:border-cyan-200',
      iconBg: 'bg-cyan-100',
    },
    {
      title: 'Personalized Guidance',
      description: 'Get recommendations based on your interests',
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-600" />,
      bg: 'bg-emerald-50/70 border-emerald-100/80 hover:border-emerald-200',
      iconBg: 'bg-emerald-100',
    },
    {
      title: 'Career Insights',
      description: 'Know the right career path with expert advice',
      icon: <Sparkles className="w-5 h-5 text-pink-600" />,
      bg: 'bg-pink-50/70 border-pink-100/80 hover:border-pink-200',
      iconBg: 'bg-pink-100',
    },
    {
      title: 'Latest Updates',
      description: 'Stay informed about admissions, exams & more',
      icon: <Bell className="w-5 h-5 text-purple-600" />,
      bg: 'bg-purple-50/70 border-purple-100/80 hover:border-purple-200',
      iconBg: 'bg-purple-100',
    },
  ];

  return (
    <section
      id="about"
      className="py-20 lg:py-28 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-Column Grid matching reference image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Asymmetric Organic Cutout Image of Student with Backpack */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Handwritten Top Left Annotation */}
            <div className="hidden sm:block absolute -top-10 -left-6 z-20 pointer-events-none transform -rotate-12 text-left">
              <span className="font-handwritten text-2xl lg:text-3xl text-cyan-600 font-bold tracking-wide">
                Guiding Students
                <br />
                Every Step!
              </span>
              <svg
                className="w-14 h-12 text-cyan-400 mt-1"
                viewBox="0 0 60 45"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              >
                <path d="M12,6 C24,18 30,28 42,34" />
                <path d="M30,34 L43,35 L39,24" />
              </svg>
            </div>

            {/* Asymmetric Organic Shape Container matching reference design */}
            <div className="relative w-full max-w-[380px] aspect-[4/5]">
              {/* Organic Ambient Glow Backdrop */}
              <div
                className="absolute -inset-3 bg-gradient-to-tr from-cyan-200/50 via-teal-100/40 to-emerald-200/50 blur-xl opacity-70 pointer-events-none transition-transform duration-700 hover:scale-105"
                style={{ borderRadius: '56% 44% 50% 50% / 46% 54% 46% 54%' }}
              />

              {/* Asymmetric Organic Student Image Card */}
              <div
                className="relative w-full h-full overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.12)] border-[5px] border-white bg-slate-100 transition-transform duration-500 hover:scale-[1.01]"
                style={{
                  borderRadius: '56% 44% 48% 52% / 48% 54% 46% 52%',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80"
                  alt="Student with backpack smiling on campus"
                  className="w-full h-full object-cover object-top scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
              </div>

              {/* Floating Pill Badge: 500+ Expert Counselors */}
              <div className="absolute bottom-4 left-2 sm:left-4 z-20 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-xl border border-slate-100 flex items-center gap-3 animate-float">
                <div className="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 shadow-sm">
                  <Users className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-extrabold text-slate-900">
                    500+
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    Expert Counselors
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Heading, Subheading & 2x2 Feature Cards Grid */}
          <div className="lg:col-span-7 text-left space-y-8">
            <div>
              <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-200/80 text-[11px] font-bold text-cyan-700 uppercase tracking-wider mb-4">
                WHY CHOOSE EDUCATOR
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-4">
                More Than Admission
                <br />
                <span className="text-slate-900">A Clearer Tomorrow</span>
              </h2>

              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
                We simplify your college search, provide expert guidance, and
                help you make informed decisions for a brighter future.
              </p>
            </div>

            {/* 2x2 Feature Cards Grid matching reference image */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((card, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${card.bg}`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${card.iconBg}`}
                  >
                    {card.icon}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

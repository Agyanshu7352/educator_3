"use client";

import React, { useState } from 'react';
import { X, CheckCircle2, Star, BookOpen, Users, Sparkles, Send, ArrowRight } from 'lucide-react';

interface ModalsProps {
  activeModal: 'about' | 'courses' | 'teachers' | 'contacts' | 'trial' | null;
  onClose: () => void;
}

export default function InteractiveModals({ activeModal, onClose }: ModalsProps) {
  const [trialForm, setTrialForm] = useState({ name: '', email: '', course: 'AI & Spatial Computing' });
  const [trialSuccess, setTrialSuccess] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);

  if (!activeModal) return null;

  // Simple pure-canvas confetti effect on trial activation
  const triggerConfetti = () => {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '9999';
    document.body.appendChild(canvas);

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      rotation: number;
      vRot: number;
    }> = [];

    const colors = ['#00DF89', '#00C9A7', '#00D2A0', '#00C6FF', '#007BFF', '#FFD700', '#FF4081'];

    for (let i = 0; i < 90; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: (Math.random() - 0.5) * 14,
        vy: (Math.random() - 0.5) * 16 - 6,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 10,
      });
    }

    let frame = 0;
    const animate = () => {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.35; // gravity
        p.rotation += p.vRot;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      });

      if (frame < 120) {
        requestAnimationFrame(animate);
      } else {
        canvas.remove();
      }
    };
    animate();
  };

  const handleTrialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTrialSuccess(true);
    triggerConfetti();
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fade-in select-none">
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden max-h-[90vh] flex flex-col animate-scale-up"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 via-white to-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-mint to-brand-blue flex items-center justify-center text-white font-bold text-sm shadow-sm">
              E
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 capitalize">
                {activeModal === 'trial' ? 'Start Your Free Trial' : activeModal.replace('-', ' ')}
              </h3>
              <p className="text-xs text-slate-500 font-medium">EduNova Spatial Learning Platform</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-8 overflow-y-auto">
          {/* ABOUT US MODAL */}
          {activeModal === 'about' && (
            <div className="space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-bold tracking-widest text-brand-mint uppercase bg-emerald-50 px-2.5 py-1 rounded-full">
                  Our Mission
                </span>
                <h4 className="text-2xl font-black text-slate-900 tracking-tight">
                  Empowering 1,000,000+ Minds Through Next-Gen Spatial Education
                </h4>
                <p className="text-sm leading-relaxed text-slate-600">
                  EduNova is an advanced educational ecosystem combining 3D interactive simulations, adaptive AI tutoring, and cohort-based masterclasses to turn aspiring learners into world-class innovators.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100">
                <div className="p-4 rounded-2xl bg-slate-50 text-center border border-slate-100">
                  <div className="text-2xl font-black text-slate-900">98.4%</div>
                  <div className="text-xs text-slate-500 font-medium mt-1">Course Completion</div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 text-center border border-slate-100">
                  <div className="text-2xl font-black text-brand-teal">50,000+</div>
                  <div className="text-xs text-slate-500 font-medium mt-1">Active Students</div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 text-center border border-slate-100">
                  <div className="text-2xl font-black text-brand-blue">4.9 / 5.0</div>
                  <div className="text-xs text-slate-500 font-medium mt-1">Global Rating</div>
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Got It
                </button>
              </div>
            </div>
          )}

          {/* COURSES MODAL */}
          {activeModal === 'courses' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-500 font-medium">Explore flagship tracks designed with top tech companies:</p>
              <div className="space-y-3">
                {[
                  {
                    title: "Spatial UI & 3D Interactive Design",
                    level: "Intermediate",
                    weeks: "10 Weeks",
                    rating: "4.95",
                    tag: "Trending",
                    gradient: "from-emerald-500 to-teal-600"
                  },
                  {
                    title: "AI & Autonomous Agents Engineering",
                    level: "Advanced",
                    weeks: "12 Weeks",
                    rating: "4.98",
                    tag: "Popular",
                    gradient: "from-blue-600 to-indigo-600"
                  },
                  {
                    title: "Full-Stack Next.js & Cloud Architecture",
                    level: "Beginner to Pro",
                    weeks: "8 Weeks",
                    rating: "4.92",
                    tag: "Comprehensive",
                    gradient: "from-teal-500 to-cyan-600"
                  },
                  {
                    title: "Quantum Algorithms & Computational Science",
                    level: "Specialist",
                    weeks: "14 Weeks",
                    rating: "5.0",
                    tag: "New",
                    gradient: "from-indigo-500 to-purple-600"
                  }
                ].map((course, idx) => (
                  <div key={idx} className="p-4 rounded-2xl border border-slate-100 hover:border-slate-300 hover:shadow-md transition-all flex items-center justify-between group">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                          {course.tag}
                        </span>
                        <span className="text-xs text-slate-400">• {course.weeks}</span>
                        <div className="flex items-center text-amber-500 text-xs gap-0.5">
                          <Star className="w-3 h-3 fill-amber-400 stroke-none" />
                          <span>{course.rating}</span>
                        </div>
                      </div>
                      <h5 className="text-sm font-bold text-slate-800 group-hover:text-brand-blue transition-colors">
                        {course.title}
                      </h5>
                    </div>
                    <button
                      onClick={() => {
                        setTrialForm(prev => ({ ...prev, course: course.title }));
                        // switch to trial
                      }}
                      className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-gradient-to-r hover:from-brand-mint hover:to-brand-blue hover:text-white transition-all text-slate-700"
                    >
                      Enroll
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TEACHERS MODAL */}
          {activeModal === 'teachers' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-500 font-medium">Learn directly from world-class industry researchers and founders:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    name: "Dr. Elena Rostova",
                    role: "Head of 3D Spatial Computing",
                    ex: "Ex-Pixar & MIT Media Lab",
                    img: "/avatars/avatar-1.png",
                    students: "12,400+ students"
                  },
                  {
                    name: "Alex Thorne",
                    role: "Chief AI Architect",
                    ex: "DeepMind & OpenAI Alum",
                    img: "/avatars/avatar-2.png",
                    students: "18,900+ students"
                  },
                  {
                    name: "Marcus Vance",
                    role: "Quantum & Distributed Systems Lead",
                    ex: "CERN Fellow",
                    img: "/avatars/avatar-3.png",
                    students: "9,200+ students"
                  },
                  {
                    name: "Sophie Chen",
                    role: "Creative Director & UX Strategist",
                    ex: "Apple Design Guild",
                    img: "/avatars/avatar-1.png",
                    students: "15,100+ students"
                  }
                ].map((teacher, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3.5">
                    <img
                      src={teacher.img}
                      alt={teacher.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-brand-mint/40"
                    />
                    <div>
                      <h5 className="text-sm font-bold text-slate-900">{teacher.name}</h5>
                      <p className="text-[11px] text-brand-blue font-medium">{teacher.role}</p>
                      <p className="text-[10px] text-slate-400 mt-0.5">{teacher.ex}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CONTACTS MODAL */}
          {activeModal === 'contacts' && (
            <div>
              {contactSuccess ? (
                <div className="text-center py-8 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-brand-mint mx-auto" />
                  <h4 className="text-xl font-bold text-slate-900">Message Received!</h4>
                  <p className="text-sm text-slate-500">Our academic advisor will reach out to you within 2 hours.</p>
                  <button
                    onClick={onClose}
                    className="mt-4 px-6 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <p className="text-xs text-slate-500 font-medium">Have questions or want tailored enterprise training? Send us a note:</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name</label>
                      <input
                        required
                        type="text"
                        placeholder="Sarah Connor"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                      <input
                        required
                        type="email"
                        placeholder="sarah@edunova.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Message</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="How can we help your learning journey?"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue focus:outline-none resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-mint to-brand-blue text-white text-xs font-bold uppercase tracking-wider hover:opacity-95 transition-opacity flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Send Inquiry
                  </button>
                </form>
              )}
            </div>
          )}

          {/* TRIAL MODAL */}
          {activeModal === 'trial' && (
            <div>
              {trialSuccess ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-brand-mint">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900">Your 14-Day Free Access Is Unlocked!</h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Welcome aboard, <strong>{trialForm.name || 'Scholar'}</strong>! We&apos;ve sent your spatial dashboard invite to <strong>{trialForm.email || 'your email'}</strong>.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-2 px-8 py-3 rounded-xl bg-gradient-to-r from-brand-mint to-brand-blue text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-teal-500/20"
                  >
                    Enter Learning Campus
                  </button>
                </div>
              ) : (
                <form onSubmit={handleTrialSubmit} className="space-y-4">
                  <div className="bg-gradient-to-r from-emerald-50 to-blue-50 p-4 rounded-2xl border border-emerald-100 flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-brand-mint mt-0.5 shrink-0" />
                    <div className="text-xs text-slate-700 leading-relaxed">
                      <strong>Full VIP Access:</strong> Includes 120+ spatial courses, interactive 3D simulations, private Discord community, and 1-on-1 mentor code reviews. No credit card required.
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
                    <input
                      required
                      type="text"
                      value={trialForm.name}
                      onChange={(e) => setTrialForm({ ...trialForm, name: e.target.value })}
                      placeholder="Alex Mercer"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-brand-blue focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Work / Student Email</label>
                    <input
                      required
                      type="email"
                      value={trialForm.email}
                      onChange={(e) => setTrialForm({ ...trialForm, email: e.target.value })}
                      placeholder="alex@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-brand-blue focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Select Track</label>
                    <select
                      value={trialForm.course}
                      onChange={(e) => setTrialForm({ ...trialForm, course: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-brand-blue focus:outline-none bg-white"
                    >
                      <option>AI & Spatial Computing</option>
                      <option>Spatial UI & 3D Interactive Design</option>
                      <option>Full-Stack Next.js & Cloud</option>
                      <option>Quantum Computing Foundation</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-mint via-brand-teal to-brand-blue text-white text-sm font-bold uppercase tracking-wider shadow-lg shadow-teal-500/25 hover:shadow-cyan-500/35 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 mt-2"
                  >
                    <span>Activate Free 14-Day Trial</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


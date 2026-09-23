'use client';

import React, { useState } from 'react';
import Preloader from '@/components/Preloader';
import HeroSection from '@/components/HeroSection';
import InstitutionsMarquee from '@/components/InstitutionsMarquee';
import WhyChooseUs from '@/components/WhyChooseUs';
import HowItWorks from '@/components/HowItWorks';
import CollegesCount from '@/components/CollegesCount';
import FeaturedColleges from '@/components/FeaturedColleges';
import Testimonials from '@/components/Testimonials';
import CtaBanner from '@/components/CtaBanner';
import Footer from '@/components/Footer';
import InteractiveModals from '@/components/InteractiveModals';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeModal, setActiveModal] = useState<
    'about' | 'courses' | 'teachers' | 'contacts' | 'trial' | null
  >(null);

  const handleOpenModal = (
    type: 'about' | 'courses' | 'teachers' | 'contacts' | 'trial'
  ) => {
    setActiveModal(type);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  const handleReplayLoading = () => {
    setIsLoading(true);
  };

  return (
    <main className="relative min-h-screen bg-[#FDFDFE] flex flex-col">
      {/* Aesthetic Intro Preloader */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {/* Hero Section with Unpausable Background Video & Transparent FUTURE */}
      <HeroSection
        onOpenModal={handleOpenModal}
        onReplayLoading={handleReplayLoading}
      />

      {/* Accredited Institutions Marquee */}
      <InstitutionsMarquee />

      {/* Section 1: Why Choose Educator - More Than Admission A Clearer Tomorrow */}
      <div id="about">
        <WhyChooseUs />
      </div>

      {/* Section 2: How It Works - Your Dream College is Just a Few Steps Away */}
      <div id="how-it-works">
        <HowItWorks />
      </div>

      {/* Section 3: Explore Without Limits - 500+ Colleges Across India */}
      <div id="colleges">
        <CollegesCount />
      </div>

      {/* Section 4: Featured Colleges - Top Colleges to Explore */}
      <FeaturedColleges />

      {/* Section 5: Real People Real Journeys - Success Looks Better Here */}
      <div id="testimonials">
        <Testimonials />
      </div>

      {/* Section 6: Let's Build Your Brighter Tomorrow - CTA Banner */}
      <div id="get-started">
        <CtaBanner />
      </div>

      {/* Section 7: Educator Official Footer */}
      <Footer />

      {/* Interactive Feature Modals */}
      <InteractiveModals activeModal={activeModal} onClose={handleCloseModal} />
    </main>
  );
}

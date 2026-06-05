/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import DailyCycle from './components/DailyCycle';
import Gallery from './components/Gallery';
import AboutCrete from './components/AboutCrete';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Mail, Phone, MapPin, Sparkles } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [inquiryCategory, setInquiryCategory] = useState('');

  // Set active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'gallery', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    setInquiryCategory(''); // Reset general pref
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleBookService = (serviceType: string) => {
    // Map human service name to selector values
    if (serviceType.includes('Resort') || serviceType.includes('hotel')) {
      setInquiryCategory('hotel-shootings');
    } else if (serviceType.includes('Golden Hour')) {
      setInquiryCategory('golden-hour-shootings');
    } else if (serviceType.includes('Portraits') || serviceType.includes('Couples')) {
      setInquiryCategory('private-portraits');
    } else {
      setInquiryCategory('price-quote');
    }

    // Scroll to contact form
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('home');
  };

  return (
    <div className="relative min-h-screen font-sans bg-[#050505] text-zinc-100 overflow-x-hidden">
      
      {/* Background Ambience Grid */}
      <div className="fixed inset-0 bg-zinc-950 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gold-400/[0.02] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-amber-500/[0.015] rounded-full blur-[120px]" />
      </div>

      {/* Global Header */}
      <Header activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Sections wrapped inside entrance slide animation */}
      <main className="relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Hero Banner Section */}
          <Hero onExplore={handleNavigate} />

          {/* Services Presentation Section */}
          <Services onSelectService={handleBookService} />

          {/* Daily 24-Hour Capture & Sales Cycle */}
          <DailyCycle />

          {/* Golden Hour & Resort Portfolio Gallery Section */}
          <Gallery />

          {/* About Crete Territory Focus Section */}
          <AboutCrete />

          {/* Booking / Customized Pricing form Section */}
          <BookingForm prefilledService={inquiryCategory} />
        </motion.div>
      </main>

      {/* Footer Content */}
      <Footer onScrollToTop={handleScrollToTop} />
    </div>
  );
}

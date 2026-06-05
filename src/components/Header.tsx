import React, { useState, useEffect } from 'react';
import { Camera, Menu, X, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Header({ activeSection, onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-350 ${
        isScrolled
          ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-900/65 py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          id="brand-logo-btn"
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 text-left group focus:outline-none cursor-pointer"
        >
          <div className="bg-gold-500/10 p-1.5 rounded border border-gold-400/25 group-hover:bg-gold-500/20 transition-all">
            <Camera className="w-4 h-4 text-gold-400" />
          </div>
          <div>
            <span className="block font-serif tracking-wider text-sm font-bold uppercase text-zinc-100">
              PHOTO <span className="text-gold-400 italic">FAN</span>
            </span>
            <span className="block font-mono text-[7px] tracking-widest text-[#c5a059]">
              Crete
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              id={`nav-item-${item.id}`}
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-[11px] tracking-wider uppercase font-medium transition-colors hover:text-gold-400 relative py-1 focus:outline-none cursor-pointer ${
                activeSection === item.id ? 'text-gold-400' : 'text-zinc-400'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.span
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gold-400"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Action button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            id="instagram-nav-link"
            href="https://www.instagram.com/photofan.crete/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-gold-400 p-1.5 transition-colors"
            title="Follow us on Instagram"
          >
            <Instagram className="w-4.5 h-4.5" />
          </a>
          <button
            id="contact-header-btn"
            onClick={() => handleNavClick('contact')}
            className="border border-gold-400/30 hover:border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-zinc-950 px-4 py-1.5 rounded-full font-bold text-[10px] tracking-wider uppercase transition-all cursor-pointer"
          >
            Book Session
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            id="instagram-nav-link-mobile"
            href="https://www.instagram.com/photofan.crete/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-gold-400 transition-colors"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="text-zinc-400 hover:text-gold-400 p-1 bg-zinc-900 border border-zinc-900 rounded focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-zinc-950/95 border-b border-zinc-900 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-3.5">
              {navItems.map((item) => (
                <button
                  id={`mobile-nav-item-${item.id}`}
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left text-xs tracking-widest uppercase py-1.5 border-b border-zinc-900/60 transition-colors focus:outline-none cursor-pointer ${
                    activeSection === item.id ? 'text-gold-400 font-bold' : 'text-zinc-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                id="mobile-book-btn"
                onClick={() => handleNavClick('contact')}
                className="w-full bg-gold-400 hover:bg-gold-500 text-zinc-950 py-2.5 rounded font-bold tracking-wide text-xs uppercase transition-colors"
              >
                Request Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

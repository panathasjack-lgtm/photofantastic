import React from 'react';
import { Camera, Mail, Phone, Instagram, ArrowUp } from 'lucide-react';

interface FooterProps {
  onScrollToTop: () => void;
}

export default function Footer({ onScrollToTop }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="site-footer" className="bg-[#09090b] text-zinc-500 text-xs border-t border-zinc-900 border-zinc-900/40 relative">
      
      {/* Scroll to Top Trigger */}
      <button
        id="scroll-to-top-footer-btn"
        onClick={onScrollToTop}
        className="absolute -top-5 left-1/2 -translate-x-1/2 p-2.5 bg-zinc-950 border border-zinc-900 hover:border-gold-400/40 text-gold-400 rounded-full cursor-pointer transition-colors shadow-2xl group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>

      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand Details */}
        <div className="flex items-center gap-2 select-none text-left">
          <div className="bg-gold-500/10 p-1.5 rounded border border-gold-400/20">
            <Camera className="w-3.5 h-3.5 text-gold-400" />
          </div>
          <div>
            <span className="block font-serif tracking-wider text-xs font-bold uppercase text-zinc-200">
              PHOTO <span className="text-gold-400 italic">FAN</span>
            </span>
            <span className="block font-mono text-[7px] tracking-widest text-zinc-500 uppercase">
              Hersonissos • Crete
            </span>
          </div>
        </div>

        {/* Action Direct Links */}
        <div className="flex flex-wrap items-center justify-center gap-5 text-zinc-400 text-[11px]">
          <a
            id="footer-email"
            href="mailto:photofan.crete@gmail.com"
            className="hover:text-gold-400 transition-colors redact-email"
          >
            photofan.crete@gmail.com
          </a>
          <a
            id="footer-phone"
            href="tel:+306977244788"
            className="hover:text-gold-400 transition-colors"
          >
            +30 697 724 4788
          </a>
          <a
            id="footer-instagram"
            href="https://www.instagram.com/photofan.crete/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold-400 transition-colors flex items-center gap-1"
          >
            <Instagram className="w-3.5 h-3.5 text-zinc-550" />
            <span>@photofan.crete</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-zinc-600 font-mono text-[9px] uppercase tracking-wider text-right">
          &copy; {currentYear} Photo Fan. Crete, Greece.
        </div>

      </div>
    </footer>
  );
}

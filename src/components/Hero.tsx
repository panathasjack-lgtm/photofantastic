import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Flame, Hotel, MapPin, Sparkles } from 'lucide-react';
import photoFantasticFlyer from '../assets/images/photo_fantastic_flyer_1780664354821.png';

interface HeroProps {
  onExplore: (sectionId: string) => void;
}

export default function Hero({ onExplore }: HeroProps) {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24 pb-12">
      {/* Immersive background image with advanced overlay */}
      <div className="absolute inset-0 z-0">
        <picture>
          <img
            src={photoFantasticFlyer}
            alt="Crete Golden Hour Horizon"
            className="w-full h-full object-cover object-center scale-102 filter brightness-[0.22] contrast-[1.02]"
            referrerPolicy="no-referrer"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left Column: Premium Text & Call to Actions */}
        <div className="md:col-span-7 flex flex-col items-center text-center md:items-start md:text-left text-zinc-100">
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-zinc-950/80 border border-gold-400/20 px-3.5 py-1.5 rounded-full mb-5 backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-gold-200">
              Exclusive Portraiture • Crete
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight max-w-xl leading-[1.2] mb-4"
          >
            Preserve Your Vacation <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-amber-200 italic font-semibold">
              Under Cretan Light
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-zinc-300 text-xs sm:text-sm max-w-md font-light leading-relaxed mb-6"
          >
            Capturing the emotional beauty of your resort stay in <span className="font-medium text-white">Hersonissos</span>. Elite on-site photography for premium hotel residents.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto"
          >
            <button
              id="hero-view-gallery-btn"
              onClick={() => onExplore('gallery')}
              className="w-full sm:w-auto bg-gradient-to-r from-gold-400 to-amber-500 hover:from-gold-500 hover:to-amber-550 text-zinc-950 px-6 py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest shadow-lg shadow-gold-500/5 transition-transform cursor-pointer"
            >
              View Portfolio
            </button>
            <button
              id="hero-request-quote-btn"
              onClick={() => onExplore('contact')}
              className="w-full sm:w-auto bg-zinc-900/80 hover:bg-zinc-850 hover:border-zinc-750 border border-zinc-850 text-zinc-200 px-6 py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest transition-colors cursor-pointer"
            >
              Request Quote
            </button>
          </motion.div>
        </div>

        {/* Right Column: Retro Polaroid Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-5 flex justify-center w-full"
        >
          <div 
            onClick={() => onExplore('contact')}
            className="relative z-10 bg-zinc-900/60 border border-zinc-900/80 p-3 pb-5 rounded-xl shadow-xl hover:border-gold-400/20 transition-colors cursor-pointer max-w-[320px] w-full"
          >
            <div className="overflow-hidden rounded-lg bg-zinc-900 aspect-[3/4] relative">
              <picture>
                <img
                  src={photoFantasticFlyer}
                  alt="Campaign portrait"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </picture>
            </div>
            <div className="mt-3 text-center">
              <p className="font-serif text-zinc-200 text-xs font-semibold">Photo Fan Specialists</p>
              <span className="block font-mono text-[9px] uppercase tracking-widest text-gold-400/85 mt-1">Book at Hersonissos Resorts</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1 opacity-45">
        <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-zinc-400">Scroll</span>
        <ArrowDown className="w-3.5 h-3.5 text-gold-400 animate-bounce" />
      </div>
    </section>
  );
}

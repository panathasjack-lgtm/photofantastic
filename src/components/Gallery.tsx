import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../data';
import { Camera, Eye, MapPin, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Gallery() {
  const [filter, setFilter] = useState<'all' | 'hotel' | 'golden-hour' | 'private'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = PORTFOLIO_ITEMS.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  const categories: { value: 'all' | 'hotel' | 'golden-hour' | 'private'; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'hotel', label: 'In-Resort' },
    { value: 'golden-hour', label: 'Golden Hour' },
    { value: 'private', label: 'Bespoke & Couples' }
  ];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex(lightboxIndex === 0 ? filteredItems.length - 1 : lightboxIndex - 1);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex(lightboxIndex === filteredItems.length - 1 ? 0 : lightboxIndex + 1);
  };

  return (
    <section id="gallery" className="py-20 bg-zinc-950 border-t border-zinc-900/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Simplified Header */}
        <div className="text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold-400 block mb-2">
            The Portfolio
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-zinc-100 mb-4">
            Captured Moments
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto font-light leading-relaxed">
            A curated showcase of romantic sunset sessions and luxury resort experiences in Crete.
          </p>
        </div>

        {/* Minimal Categories Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 pb-6 border-b border-zinc-900/40">
          {categories.map((cat) => (
            <button
              id={`filter-pill-${cat.value}`}
              key={cat.value}
              onClick={() => {
                setFilter(cat.value);
                setLightboxIndex(null);
              }}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 focus:outline-none cursor-pointer ${
                filter === cat.value
                  ? 'bg-gold-400 text-zinc-950 font-semibold shadow-md shadow-gold-500/10'
                  : 'bg-zinc-900/40 hover:bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-900/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Compact Grid */}
        <div
          id="portfolio-items-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              id={`portfolio-item-card-${item.id}`}
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="group relative cursor-pointer bg-zinc-900 border border-zinc-900 rounded-2xl overflow-hidden shadow-md hover:border-zinc-800 transition-all duration-300 aspect-[3/4]"
              onClick={() => setLightboxIndex(index)}
            >
              {/* Photo */}
              <div className="w-full h-full overflow-hidden">
                <picture>
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-103 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </picture>
              </div>

              {/* soft gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300" />

              {/* inner info */}
              <div className="absolute inset-0 p-5 flex flex-col justify-end text-left">
                <span className="font-mono text-[9px] text-gold-400 uppercase tracking-widest block mb-1">
                  {item.category.replace('-', ' ')}
                </span>
                <h3 className="font-serif text-base font-bold text-white leading-tight">
                  {item.title}
                </h3>
                {item.hotel && (
                  <span className="block font-mono text-[9px] text-zinc-400 mt-1 uppercase">
                    {item.hotel}
                  </span>
                )}
                <div className="flex items-center gap-1 text-zinc-400 text-xs mt-2.5 opacity-0 group-hover:opacity-100 transition-all duration-350">
                  <MapPin className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                  <span className="truncate font-light text-[11px]">{item.location}</span>
                </div>
              </div>

              {/* hover indicator */}
              <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-zinc-950/80 border border-zinc-800 flex items-center justify-center text-zinc-350 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Eye className="w-3.5 h-3.5" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Simplified Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && filteredItems[lightboxIndex] && (
          <motion.div
            id="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col justify-between p-6"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Top info */}
            <div className="flex items-center justify-between w-full max-w-5xl mx-auto text-zinc-300 z-10">
              <div className="text-left">
                <span className="font-mono text-[9px] text-gold-400 uppercase tracking-wider">
                  Photo Fan Crete • {filteredItems[lightboxIndex].category.replace('-', ' ')}
                </span>
                <h4 className="font-serif text-md font-bold text-white">
                  {filteredItems[lightboxIndex].title}
                </h4>
              </div>
              <button
                id="lightbox-close-btn"
                onClick={() => setLightboxIndex(null)}
                className="p-1.5 border border-zinc-800 rounded-full bg-zinc-900/40 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Slider frame */}
            <div className="flex-1 flex items-center justify-center py-4 w-full max-w-4xl mx-auto relative">
              <button
                id="lightbox-prev-btn"
                onClick={handlePrev}
                className="absolute left-0 p-2.5 border border-zinc-800/60 rounded-full bg-zinc-900/60 text-zinc-200 hover:text-white z-10 cursor-pointer backdrop-blur-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25 }}
                className="max-h-[65vh] max-w-full flex items-center justify-center rounded-xl overflow-hidden shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                <picture>
                  <img
                    src={filteredItems[lightboxIndex].imageUrl}
                    alt={filteredItems[lightboxIndex].title}
                    className="max-h-[65vh] max-w-full object-contain rounded-lg"
                    referrerPolicy="no-referrer"
                  />
                </picture>
              </motion.div>

              <button
                id="lightbox-next-btn"
                onClick={handleNext}
                className="absolute right-0 p-2.5 border border-zinc-800/60 rounded-full bg-zinc-900/60 text-zinc-200 hover:text-white z-10 cursor-pointer backdrop-blur-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom details */}
            <div className="w-full max-w-5xl mx-auto text-center flex flex-col sm:flex-row items-center sm:justify-between gap-2 border-t border-zinc-900/80 pt-4 text-zinc-500 text-xs">
              <div className="flex items-center gap-1.5 justify-center">
                <MapPin className="w-3.5 h-3.5 text-zinc-650" />
                <span>{filteredItems[lightboxIndex].location}</span>
                {filteredItems[lightboxIndex].hotel && (
                  <span className="text-zinc-650 font-medium"> • {filteredItems[lightboxIndex].hotel}</span>
                )}
              </div>
              <div className="font-mono text-[9px] uppercase tracking-wider text-gold-500">
                Photo {lightboxIndex + 1} of {filteredItems.length}
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

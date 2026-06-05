import React from 'react';
import { MapPin, Compass } from 'lucide-react';

export default function AboutCrete() {
  return (
    <section id="about" className="py-20 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gold-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          
          {/* Visual Showcase Stack */}
          <div className="md:col-span-6 overflow-hidden rounded-2xl aspect-[4/3] shadow-2xl relative border border-zinc-900 group">
            <picture>
              <img
                src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&fit=crop&w=1200&q=80"
                alt="Crete shores"
                className="w-full h-full object-cover transform scale-100 group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-zinc-950/80 px-3.5 py-1.5 rounded-lg border border-zinc-900">
              <Compass className="w-4 h-4 text-gold-400" />
              <span className="font-mono text-[10px] text-zinc-300 font-bold uppercase tracking-wider">Hersonissos Coastal Cape</span>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="md:col-span-6 flex flex-col text-left">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-px bg-gold-400"></span>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold-400">
                Local Storytellers
              </span>
            </div>

            <h2 className="font-serif text-3xl font-bold tracking-tight text-white mb-4">
              Our Base: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-amber-200">
                Crete, Greece
              </span>
            </h2>

            <p className="text-zinc-450 text-xs sm:text-sm font-light leading-relaxed mb-4">
              Our boutique photography collective is proudly headquartered in Hersonissos, where pristine Aegean waves break against ancient coastal stone.
            </p>

            <p className="text-zinc-455 text-xs sm:text-sm font-light leading-relaxed mb-6">
              We guide you strictly on private resort grounds and hidden scenic keys to compose authentic, artistic frames of your vacation, far from common tourist avenues.
            </p>

            <div className="flex items-center gap-3 bg-zinc-900/30 border border-zinc-900/60 p-4 rounded-xl">
              <MapPin className="w-4.5 h-4.5 text-gold-400" />
              <p className="text-xs text-zinc-400 font-light leading-snug">
                Exclusive shooting privileges at registered resident luxury hotels in Sarantaris, Stalida, and Anissaras.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

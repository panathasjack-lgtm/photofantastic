import React from 'react';
import { SERVICES } from '../data';
import { Sparkles, Check, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  return (
    <section id="services" className="py-20 bg-zinc-950 border-y border-zinc-900/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Simplified Header */}
        <div className="text-center md:text-left mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold-400 block mb-2">
              Our Expertise
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-zinc-100">
              Luxury Photography Packages
            </h2>
          </div>
          <p className="text-zinc-400 font-light max-w-sm text-sm leading-relaxed">
            Every session in Hersonissos is curated with signature editorial care. Bespoke pricing schedules are calculated upon request.
          </p>
        </div>

        {/* 3-Column Simple Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {SERVICES.map((service) => (
            <div
              id={`service-card-${service.id}`}
              key={service.id}
              className="bg-zinc-900/30 border border-zinc-900/85 hover:border-gold-500/20 rounded-2xl overflow-hidden flex flex-col justify-between p-6 transition-all duration-300 hover:bg-zinc-900/50 group"
            >
              {/* Card visual banner & content */}
              <div>
                <div className="aspect-video w-full rounded-xl overflow-hidden mb-6 relative">
                  <picture>
                    <img
                      src={service.coverImage}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </picture>
                  <div className="absolute top-2.5 right-2.5 bg-zinc-950/80 px-2.5 py-1 rounded-full border border-zinc-900">
                    <span className="font-mono text-[8px] uppercase tracking-wider text-gold-400">
                      Private Grounds
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 mb-3.5 text-gold-450">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span className="font-mono text-[9px] uppercase tracking-widest font-medium">Session Feature</span>
                </div>

                <h3 className="font-serif text-xl font-bold text-zinc-100 mb-2.5 group-hover:text-gold-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-zinc-400 text-xs font-light leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                {/* Bullets lists */}
                <div className="border-t border-zinc-900/60 pt-4 mb-8">
                  <ul className="flex flex-col gap-2.5">
                    {service.highlights.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-zinc-500">
                        <Check className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                        <span className="leading-tight text-zinc-400 font-light text-[11px]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action */}
              <button
                id={`book-service-btn-${service.id}`}
                onClick={() => onSelectService(service.title)}
                className="w-full bg-zinc-900 hover:bg-gold-400 text-zinc-350 hover:text-zinc-950 border border-zinc-800 hover:border-gold-400 py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest flex items-center justify-center gap-1.5 transition-all duration-300 cursor-pointer"
              >
                <span>Discuss Session</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

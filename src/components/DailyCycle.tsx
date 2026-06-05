import React from 'react';
import { Camera, Flame, Coffee, Clock } from 'lucide-react';

export default function DailyCycle() {
  const steps = [
    {
      phase: "01",
      title: "Golden Hour Capture",
      time: "18:00 – 20:30",
      icon: Camera,
      color: "text-gold-400",
      bg: "bg-gold-400/5",
      border: "border-gold-400/10",
      description: "Premium shooting session conducted at your registered staying resort during the exact astronomical sweet hour."
    },
    {
      phase: "02",
      title: "Fine Art Edit",
      time: "20:30 – 24:00",
      icon: Flame,
      color: "text-amber-500",
      bg: "bg-amber-500/5",
      border: "border-amber-500/10",
      description: "Our dedicated post-production editors color grade and apply cinema layouts to your session's best files."
    },
    {
      phase: "03",
      title: "Lobby Showcase",
      time: "07:00 – 11:00",
      icon: Coffee,
      color: "text-gold-400",
      bg: "bg-gold-400/5",
      border: "border-gold-400/10",
      description: "Meet our resident support team at your resort lounge next morning to select and receive your high-res frames."
    }
  ];

  return (
    <section id="workflow" className="py-20 bg-zinc-950 relative border-t border-zinc-900/40">
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold-400 block mb-2">
            The Flow
          </span>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-white">
            Our 24-Hour Experience
          </h2>
          <p className="text-zinc-400 font-light text-xs sm:text-sm mt-3 leading-relaxed">
            Beautifully integrated into your vacation. We capture, edit, and deliver stunning legacy portraits within a day.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div 
                id={`cycle-step-${idx}`}
                key={idx}
                className="bg-zinc-900/20 border border-zinc-900 rounded-xl p-6 relative flex flex-col justify-between hover:border-gold-500/20 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-9 h-9 rounded-lg ${step.bg} border ${step.border} flex items-center justify-center`}>
                      <IconComponent className={`w-4 h-4 ${step.color}`} />
                    </div>
                    <span className="font-mono text-xs text-zinc-700 font-black tracking-widest uppercase">
                      Phase {step.phase}
                    </span>
                  </div>

                  <h3 className="font-serif text-md font-bold text-zinc-100 mb-1.5">
                    {step.title}
                  </h3>

                  <p className="text-zinc-400 font-light text-xs leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 bg-zinc-950/80 py-1.5 px-3 rounded-lg border border-zinc-900 w-max mt-2">
                  <Clock className="w-3 h-3 text-gold-400" />
                  <span className="font-mono text-[10px] text-zinc-400 font-medium tracking-wide">
                    {step.time}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

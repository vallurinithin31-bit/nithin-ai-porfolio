import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  Building2, 
  CheckCircle2, 
  PlusCircle,
  BrainCircuit
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lilac-500/10 border border-lilac-500/25 text-lilac-300 text-xs font-mono tracking-widest uppercase mb-3 backdrop-blur-md">
            <Briefcase className="w-3.5 h-3.5" />
            <span>PRACTICAL ENGAGEMENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold text-white tracking-wider">
            Experience &amp; Project Studio
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mt-4 leading-relaxed font-normal">
            A transparent timeline of applied AI engineering, industry internship deliverables, and active machine learning project development.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-lilac-400 to-transparent rounded-full mt-4" />
        </div>

        {/* Experience Cards */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {experienceData.map((item) => (
            <div
              key={item.id}
              className={`glass-panel rounded-3xl p-7 sm:p-9 border ${
                item.isPlaceholder
                  ? 'border-dashed border-lilac-500/20 bg-obsidian-surface/40'
                  : 'border-lilac-500/20 ai-glow-card'
              }`}
            >
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-5 border-b border-lilac-500/15">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-2xl bg-lilac-500/15 text-lilac-300 border border-lilac-500/30">
                    {item.isPlaceholder ? <PlusCircle className="w-5 h-5" /> : <BrainCircuit className="w-5 h-5" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-lg font-cinzel font-bold text-white tracking-wide">
                        {item.role}
                      </h3>
                      {item.isPlaceholder && (
                        <span className="px-2.5 py-0.5 rounded bg-lilac-500/10 text-lilac-300 text-[10px] font-mono border border-lilac-500/20 uppercase tracking-wider">
                          Placeholder
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-mono text-lilac-300/80 flex items-center gap-1.5 mt-0.5">
                      <Building2 className="w-3.5 h-3.5 text-lilac-400" />
                      <span>{item.organization}</span>
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-obsidian-surface text-lilac-300 text-xs font-mono shrink-0 border border-lilac-500/20">
                  <Calendar className="w-3.5 h-3.5 text-lilac-400" />
                  <span>{item.duration}</span>
                </div>
              </div>

              {/* Description */}
              {item.description && (
                <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>
              )}

              {/* Focus Areas */}
              <div className="mb-6">
                <h4 className="text-xs font-cinzel font-bold uppercase tracking-widest text-lilac-300/80 mb-3">
                  Core Focus &amp; Competencies:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.focus.map((f, i) => (
                    <span
                      key={i}
                      className="px-3.5 py-1.5 rounded-xl bg-obsidian-surface border border-lilac-500/20 text-xs font-mono text-lilac-200"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Responsibilities */}
              {item.responsibilities && item.responsibilities.length > 0 && (
                <div className="pt-5 border-t border-lilac-500/15">
                  <h4 className="text-xs font-cinzel font-bold uppercase tracking-widest text-lilac-300/80 mb-3">
                    Key Deliverables &amp; Responsibilities:
                  </h4>
                  <ul className="space-y-2.5 text-xs text-zinc-300">
                    {item.responsibilities.map((r, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-lilac-400 mt-0.5 shrink-0" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

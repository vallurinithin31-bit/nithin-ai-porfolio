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
    <section id="experience" className="py-24 relative select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono tracking-widest uppercase mb-3 backdrop-blur-md">
            <Briefcase className="w-3.5 h-3.5" />
            <span>PRACTICAL ENGAGEMENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Experience &amp; Project Studio
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mt-4 leading-relaxed font-normal">
            A transparent timeline of applied AI engineering, industry internship deliverables, and active machine learning project development.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full mt-4" />
        </div>

        {/* Experience Cards */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {experienceData.map((item) => (
            <div
              key={item.id}
              className={`rounded-3xl p-7 sm:p-9 border bg-[#12131a] ${
                item.isPlaceholder
                  ? 'border-dashed border-white/10'
                  : 'border-white/10 hover:border-red-500/40 transition-colors'
              }`}
            >
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-5 border-b border-white/10">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-2xl bg-red-500/10 text-red-400 border border-red-500/20">
                    {item.isPlaceholder ? <PlusCircle className="w-5 h-5" /> : <BrainCircuit className="w-5 h-5" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {item.role}
                      </h3>
                      {item.isPlaceholder && (
                        <span className="px-2.5 py-0.5 rounded bg-red-500/10 text-red-400 text-[10px] font-mono border border-red-500/20 uppercase tracking-wider">
                          Placeholder
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-mono text-zinc-400 flex items-center gap-1.5 mt-0.5">
                      <Building2 className="w-3.5 h-3.5 text-red-400" />
                      <span>{item.organization}</span>
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0c0d12] text-zinc-300 text-xs font-mono shrink-0 border border-white/10">
                  <Calendar className="w-3.5 h-3.5 text-red-400" />
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
                <h4 className="text-xs font-bold uppercase tracking-wider text-red-400 mb-3 font-mono">
                  Core Focus &amp; Competencies:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.focus.map((f, i) => (
                    <span
                      key={i}
                      className="px-3.5 py-1.5 rounded-xl bg-[#0c0d12] border border-white/10 text-xs font-mono text-zinc-300"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Responsibilities */}
              {item.responsibilities && item.responsibilities.length > 0 && (
                <div className="pt-5 border-t border-white/10">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-red-400 mb-3 font-mono">
                    Key Deliverables &amp; Responsibilities:
                  </h4>
                  <ul className="space-y-2.5 text-xs text-zinc-300">
                    {item.responsibilities.map((r, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-red-400 mt-0.5 shrink-0" />
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

import React from 'react';
import { 
  Trophy, 
  Calendar, 
  PlusCircle
} from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 relative select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono tracking-widest uppercase mb-3 backdrop-blur-md">
            <Trophy className="w-3.5 h-3.5" />
            <span>MILESTONES &amp; HONORS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Achievements &amp; Learning Milestones
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mt-4 leading-relaxed font-normal">
            A dedicated record of hackathons, technical workshops, competitive builds, and project deliverables.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full mt-4" />
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className={`rounded-3xl p-7 border flex flex-col justify-between bg-[#12131a] ${
                item.isPlaceholder
                  ? 'border-dashed border-white/10'
                  : 'border-white/10 hover:border-red-500/40 transition-colors'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <span className="px-3 py-0.5 rounded-full text-[10px] font-mono font-medium border bg-red-500/10 text-red-400 border-red-500/20 uppercase tracking-wider">
                    {item.category}
                  </span>
                  
                  <span className="text-[11px] font-mono text-zinc-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-red-400" /> {item.date}
                  </span>
                </div>

                <div className="flex items-start gap-3 mb-2.5">
                  <div className={`p-2 rounded-xl mt-0.5 ${
                    item.isPlaceholder 
                      ? 'bg-white/5 text-zinc-400' 
                      : 'bg-red-500/10 text-red-400 border border-red-500/20'
                  }`}>
                    {item.isPlaceholder ? <PlusCircle className="w-4 h-4" /> : <Trophy className="w-4 h-4" />}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed mb-5 pl-9">
                  {item.description}
                </p>
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-1.5 pl-9">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded bg-red-950/30 text-[10px] font-mono text-red-300 border border-red-500/20"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

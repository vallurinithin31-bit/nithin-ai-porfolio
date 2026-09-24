import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  Building2, 
  CheckCircle2, 
  Cpu,
  LineChart,
  Zap,
  Database,
  Layers,
  Sparkles
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const getMetricIcon = (icon: string) => {
    switch (icon) {
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-indigo-400" />;
      case 'LineChart':
        return <LineChart className="w-5 h-5 text-cyan-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-purple-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-cyan-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="experience" className="py-20 sm:py-24 bg-dark-950/60 relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-dark-900 border border-indigo-500/30 text-indigo-300 text-xs font-mono tracking-widest uppercase mb-3">
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>EXPERIENCE &amp; APPLIED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-display">
            Real-World Impact &amp; AI Workflows
          </h2>
          <p className="text-sm sm:text-base text-dark-300 max-w-2xl mt-3 leading-relaxed">
            Applying generative AI, prompt engineering, agentic concepts, and product analytics in real operational environments.
          </p>
        </div>

        {/* 4 Metric-Style Impact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10">
          {experienceData.metricCards.map((card, idx) => (
            <div
              key={idx}
              className="glass-panel p-5 sm:p-6 rounded-3xl group hover:border-cyan-400/40 hover:bg-dark-850/80 transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-dark-800 border border-dark-700">
                  {getMetricIcon(card.icon)}
                </div>
                <span className="text-[10px] font-mono text-cyan-300 uppercase px-2 py-0.5 rounded-full bg-dark-900 border border-dark-700">
                  Core Area
                </span>
              </div>

              <div className="text-sm font-bold text-white font-display mb-1 group-hover:text-cyan-300 transition-colors">
                {card.title}
              </div>
              <div className="text-xs font-mono text-indigo-300 font-semibold mb-2">
                {card.highlight}
              </div>
              <p className="text-[11px] sm:text-xs text-dark-300 leading-relaxed font-sans">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Primary Role Card */}
        <div className="glass-panel p-6 sm:p-9 rounded-3xl mb-8 relative overflow-hidden">
          {/* Subtle Ambient Backlight */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header Info */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-dark-800">
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-indigo-500/15 text-indigo-400 border border-indigo-500/30">
                <Cpu className="w-6 h-6 text-cyan-400 animate-pulse" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight font-display">
                    {experienceData.role}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 text-[10px] font-mono border border-emerald-500/25 uppercase tracking-wider flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Active Role
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-mono text-dark-300 flex items-center gap-1.5 mt-1">
                  <Building2 className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{experienceData.company}</span>
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-900/90 text-dark-200 text-xs font-mono border border-dark-700">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                <span>{experienceData.duration}</span>
              </div>
              <div className="px-3 py-1.5 rounded-full bg-dark-900/90 text-dark-300 text-xs font-mono border border-dark-700">
                {experienceData.location}
              </div>
            </div>
          </div>

          {/* Summary */}
          <p className="text-xs sm:text-sm text-dark-200 leading-relaxed mb-6 font-normal">
            {experienceData.description}
          </p>

          {/* 9 Responsibilities Grid */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-4 font-mono flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Key Responsibilities &amp; Deliverables:</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {experienceData.responsibilities.map((r, i) => (
                <div 
                  key={i} 
                  className="flex items-start gap-2.5 p-3 rounded-2xl bg-dark-900/60 border border-dark-800 text-xs text-dark-200 hover:border-dark-700 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <span className="leading-relaxed">{r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Prior Experience Subsection */}
        {experienceData.priorExperience && experienceData.priorExperience.length > 0 && (
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-dark-400">
              Prior Experience
            </h4>
            {experienceData.priorExperience.map((prior) => (
              <div
                key={prior.id}
                className="glass-panel p-5 sm:p-6 rounded-3xl border border-dark-800 flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2.5">
                    <h5 className="text-sm font-bold text-white font-display">
                      {prior.role}
                    </h5>
                    <span className="text-xs font-mono text-dark-400">@ {prior.organization}</span>
                  </div>
                  <p className="text-xs text-dark-300 max-w-2xl">
                    {prior.description}
                  </p>
                </div>
                <div className="text-xs font-mono text-dark-400 px-3 py-1 rounded-full bg-dark-900 border border-dark-800 self-start md:self-auto">
                  {prior.duration}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default Experience;

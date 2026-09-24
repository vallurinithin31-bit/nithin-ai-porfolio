import React from 'react';
import { 
  FlaskConical, 
  Bot, 
  Database, 
  Mic, 
  Zap, 
  Sparkles, 
  Cpu, 
  Laptop, 
  BrainCircuit,
  Activity
} from 'lucide-react';
import { aiLabItems } from '../data/portfolioData';

export const AILab: React.FC = () => {
  const getLabIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot':
        return <Bot className="w-5 h-5 text-indigo-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-cyan-400" />;
      case 'Mic':
        return <Mic className="w-5 h-5 text-purple-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-cyan-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-indigo-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'Laptop':
        return <Laptop className="w-5 h-5 text-purple-400" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-indigo-400" />;
      default:
        return <FlaskConical className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="ailab" className="py-20 sm:py-24 bg-dark-950 relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header with Live Pulse Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-dark-900 border border-indigo-500/30 text-indigo-300 text-xs font-mono tracking-widest uppercase mb-3">
              <FlaskConical className="w-3.5 h-3.5 text-cyan-400" />
              <span>RESEARCH &amp; PROTOTYPING</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-display">
              AI LAB // Experimental Systems
            </h2>
            <p className="text-sm sm:text-base text-dark-300 max-w-xl mt-3 leading-relaxed">
              Cutting-edge explorations, experimental agentic architectures, and automated intelligence pipelines.
            </p>
          </div>

          {/* Currently Exploring Live Status Card */}
          <div className="p-4 rounded-2xl bg-dark-900 border border-cyan-500/30 shadow-electric-sm backdrop-blur-md flex items-center gap-3.5">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
              <Activity className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-cyan-400 block uppercase tracking-wider">
                Currently Exploring
              </span>
              <span className="text-xs sm:text-sm font-bold text-white font-mono">
                AI Agents + Generative AI + Automation
              </span>
            </div>
          </div>
        </div>

        {/* 8 Experimental Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {aiLabItems.map((item) => (
            <div
              key={item.id}
              className="glass-panel p-5 sm:p-6 rounded-3xl group hover:border-indigo-500/50 hover:bg-dark-850/80 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Corner Ambient Glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full blur-xl group-hover:bg-indigo-500/15 transition-all" />

              <div>
                {/* Header with Icon and Status Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-2xl bg-dark-800 border border-dark-700 group-hover:scale-110 transition-transform">
                    {getLabIcon(item.iconName)}
                  </div>
                  <span className="text-[10px] font-mono text-cyan-300 px-2 py-0.5 rounded-full bg-dark-900 border border-dark-700 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                    {item.status}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white font-display tracking-tight mb-2 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-dark-300 leading-relaxed font-sans mb-4">
                  {item.description}
                </p>
              </div>

              {/* Tech Tags */}
              <div className="pt-3 border-t border-dark-800 flex flex-wrap gap-1.5">
                {item.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded-lg text-[10px] font-mono bg-dark-800 border border-dark-700 text-dark-300"
                  >
                    {t}
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

export default AILab;

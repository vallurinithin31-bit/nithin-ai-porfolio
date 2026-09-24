import React, { useState } from 'react';
import { 
  GitBranch, 
  Search, 
  Wrench, 
  Cpu, 
  CheckCircle2, 
  RefreshCw,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { approachSteps } from '../data/portfolioData';

export const Approach: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const getStepIcon = (stage: string) => {
    switch (stage) {
      case 'IDEA':
        return <Search className="w-5 h-5 text-cyan-400" />;
      case 'RESEARCH':
        return <GitBranch className="w-5 h-5 text-indigo-400" />;
      case 'PROTOTYPE':
        return <Wrench className="w-5 h-5 text-purple-400" />;
      case 'BUILD':
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'TEST':
        return <CheckCircle2 className="w-5 h-5 text-indigo-400" />;
      case 'ITERATE':
        return <RefreshCw className="w-5 h-5 text-emerald-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="approach" className="py-20 sm:py-24 bg-dark-950/70 relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-dark-900 border border-indigo-500/30 text-indigo-300 text-xs font-mono tracking-widest uppercase mb-3">
            <GitBranch className="w-3.5 h-3.5 text-cyan-400" />
            <span>ENGINEERING WORKFLOW</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-display">
            My Approach: Idea to Product
          </h2>
          <p className="text-sm sm:text-base text-dark-300 max-w-2xl mt-3 leading-relaxed">
            A systematic 6-stage engineering process designed to eliminate guesswork, validate feasibility quickly, and build robust software.
          </p>
        </div>

        {/* 6 Step Interactive Horizontal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {approachSteps.map((step, idx) => {
            const isActive = activeStepIndex === idx;

            return (
              <div
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`glass-panel p-6 rounded-3xl transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                  isActive
                    ? 'border-cyan-400/60 bg-dark-850/90 shadow-electric-md ring-1 ring-cyan-400/30'
                    : 'border-dark-700/80 hover:border-indigo-500/40 hover:bg-dark-900/90'
                }`}
              >
                {/* Step Top Bar */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2.5 rounded-xl bg-dark-800 border border-dark-700">
                        {getStepIcon(step.stage)}
                      </div>
                      <span className="text-xs font-mono font-bold text-cyan-400">
                        STAGE {step.step}
                      </span>
                    </div>

                    <span className="text-[10px] font-mono font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-dark-900 border border-dark-700 text-indigo-300">
                      {step.stage}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white font-display tracking-tight mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-dark-300 leading-relaxed font-sans mb-4">
                    {step.description}
                  </p>
                </div>

                {/* Action Points */}
                <div className="pt-3 border-t border-dark-800 space-y-1.5">
                  {step.actionPoints.map((action, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] text-dark-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>{action}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Guarantee Footer */}
        <div className="p-5 rounded-2xl bg-dark-900/80 border border-indigo-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-dark-300">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white">Continuous Feedback Loop:</span>
            <span>Every iteration is measured against user utility and technical efficiency.</span>
          </div>
          <a
            href="#projects"
            className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1 shrink-0"
          >
            <span>See Applied Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Approach;

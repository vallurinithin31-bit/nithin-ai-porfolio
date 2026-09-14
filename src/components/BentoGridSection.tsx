import React from 'react';
import { 
  Sparkles, 
  ArrowUpRight 
} from 'lucide-react';
import { TiltCard3D } from './TiltCard3D';

export const BentoGridSection: React.FC = () => {
  const toolkit = [
    { name: 'Python', tag: 'PY', desc: 'Core ML & Analytics' },
    { name: 'Pandas', tag: 'PD', desc: 'Data Wrangling' },
    { name: 'NumPy', tag: 'NP', desc: 'Matrix Math' },
    { name: 'Django', tag: 'DJ', desc: 'Backend Web' },
    { name: 'JavaScript', tag: 'JS', desc: 'Frontend Logic' },
    { name: 'HTML5/CSS3', tag: 'UI', desc: 'Modern Web' },
    { name: 'MySQL/SQLite', tag: 'SQL', desc: 'Database Design' },
    { name: 'Git & GitHub', tag: 'GIT', desc: 'Version Control' },
    { name: 'VS Code', tag: 'IDE', desc: 'Development' },
    { name: 'Jupyter', tag: 'NB', desc: 'Exploratory EDA' },
    { name: 'RAG Systems', tag: 'LLM', desc: 'Vector Retrieval' },
    { name: 'n8n & AI Agents', tag: 'AGT', desc: 'Automation' }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'DISCOVER & ANALYZE',
      description: 'Understanding problem statements, reviewing dataset schemas, and setting baseline metrics.'
    },
    {
      step: '02',
      title: 'DATA & MODEL DESIGN',
      description: 'Data cleaning, feature engineering, and selecting optimal ML algorithms or LLM agent architectures.'
    },
    {
      step: '03',
      title: 'DEVELOP & TRAIN',
      description: 'Writing modular Python code, training models, tuning hyperparameters, and building REST endpoints.'
    },
    {
      step: '04',
      title: 'VALIDATE & DEPLOY',
      description: 'Evaluating precision/recall/loss, edge case validation, and packaging for seamless execution.'
    }
  ];

  return (
    <section id="toolkit-process" className="py-24 relative select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Bento Grid: 3 Columns with 3D Tilt */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
          
          {/* COLUMN 1: MY TOOLKIT (4 cols) */}
          <TiltCard3D className="lg:col-span-4 h-full">
            <div className="rounded-3xl p-7 bg-[#12131a] border border-white/10 flex flex-col justify-between h-full shadow-lg hover:border-red-500/40 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/10">
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    MY TOOLKIT
                  </h3>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
                    12 Technologies
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  {toolkit.map((tool) => (
                    <div
                      key={tool.name}
                      className="p-3 rounded-2xl bg-[#0c0d12] border border-white/10 hover:border-red-500/40 transition-all flex flex-col justify-between group"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="w-6 h-6 rounded-lg bg-red-500/15 text-red-400 text-[10px] font-mono font-bold flex items-center justify-center border border-red-500/25 group-hover:bg-red-600 group-hover:text-white transition-colors">
                          {tool.tag}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-red-500 opacity-40 group-hover:opacity-100" />
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-white group-hover:text-red-400 transition-colors">
                          {tool.name}
                        </h4>
                        <p className="text-[10px] font-mono text-zinc-500 truncate">
                          {tool.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-white/10 text-[11px] font-mono text-zinc-500 flex items-center justify-between">
                <span>Modern AI &amp; Web Stack</span>
                <span className="text-red-400">Ready for scale</span>
              </div>
            </div>
          </TiltCard3D>

          {/* COLUMN 2: WORK PROCESS (4 cols) */}
          <TiltCard3D className="lg:col-span-4 h-full">
            <div className="rounded-3xl p-7 bg-[#12131a] border border-white/10 flex flex-col justify-between h-full shadow-lg hover:border-red-500/40 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    WORK PROCESS
                  </h3>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
                    4-Phase Pipeline
                  </span>
                </div>

                <div className="space-y-4">
                  {processSteps.map((step) => (
                    <div
                      key={step.step}
                      className="p-3.5 rounded-2xl bg-[#0c0d12] border border-white/10 hover:border-red-500/40 transition-all flex items-start gap-3.5 group"
                    >
                      <span className="w-7 h-7 rounded-xl bg-red-500/15 text-red-400 font-mono text-xs font-bold flex items-center justify-center border border-red-500/30 shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
                        {step.step}
                      </span>
                      <div>
                        <h4 className="text-xs font-bold text-white tracking-tight group-hover:text-red-400 transition-colors font-mono">
                          {step.title}
                        </h4>
                        <p className="text-[11px] text-zinc-400 mt-1 leading-relaxed font-normal">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-white/10 text-[11px] font-mono text-zinc-500 flex items-center justify-between">
                <span>Systematic Engineering</span>
                <span className="text-red-400">Data to Deployment</span>
              </div>
            </div>
          </TiltCard3D>

          {/* COLUMN 3: PHILOSOPHY & AMBITION (4 cols) */}
          <TiltCard3D className="lg:col-span-4 h-full">
            <div className="rounded-3xl p-7 bg-[#12131a] border border-white/10 flex flex-col justify-between h-full shadow-lg hover:border-red-500/40 transition-colors">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-mono uppercase tracking-widest">
                      CORE PHILOSOPHY
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white leading-snug tracking-tight">
                    ENGINEERING INTELLIGENCE WITH PURPOSE
                  </h3>
                  <p className="text-xs text-zinc-300 mt-3 leading-relaxed font-normal">
                    "AI isn't just about training algorithms; it's about solving real human friction. By merging clean Python architectures, deep analytics, and autonomous agentic workflows, I build solutions that deliver measurable value."
                  </p>
                </div>

                {/* 3 Core Pillars */}
                <div className="space-y-2.5 pt-2">
                  <div className="p-3 rounded-2xl bg-[#0c0d12] border border-white/10 flex items-center justify-between">
                    <span className="text-xs font-bold text-white">Continuous Innovation</span>
                    <Sparkles className="w-3.5 h-3.5 text-red-400" />
                  </div>
                  <div className="p-3 rounded-2xl bg-[#0c0d12] border border-white/10 flex items-center justify-between">
                    <span className="text-xs font-bold text-white">Clean &amp; Modular Code</span>
                    <Sparkles className="w-3.5 h-3.5 text-red-400" />
                  </div>
                  <div className="p-3 rounded-2xl bg-[#0c0d12] border border-white/10 flex items-center justify-between">
                    <span className="text-xs font-bold text-white">Data-Driven Precision</span>
                    <Sparkles className="w-3.5 h-3.5 text-red-400" />
                  </div>
                </div>
              </div>

              {/* Bottom CTA to Projects */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <a
                  href="#projects"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md shadow-red-950/60"
                >
                  <span>Explore Applied AI</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </TiltCard3D>

        </div>

      </div>
    </section>
  );
};

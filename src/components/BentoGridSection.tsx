import React from 'react';
import { 
  Sparkles, 
  ArrowUpRight 
} from 'lucide-react';

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
    <section id="toolkit-process" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bento Grid: 3 Columns Matching the Poster */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
          
          {/* COLUMN 1: MY TOOLKIT (4 cols) */}
          <div className="lg:col-span-4 glass-panel rounded-3xl p-7 border border-lilac-500/20 ai-glow-card flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-lilac-500/15">
                <h3 className="font-cinzel text-lg font-bold text-white tracking-wider">
                  MY TOOLKIT
                </h3>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-lilac-500/10 text-lilac-300 border border-lilac-500/20">
                  12 Technologies
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {toolkit.map((tool) => (
                  <div
                    key={tool.name}
                    className="p-3 rounded-2xl bg-obsidian-surface/90 border border-lilac-500/15 hover:border-lilac-400/50 transition-all flex flex-col justify-between group"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="w-6 h-6 rounded-lg bg-lilac-500/15 text-lilac-300 text-[10px] font-mono font-bold flex items-center justify-center border border-lilac-500/25 group-hover:bg-lilac-500 group-hover:text-black transition-colors">
                        {tool.tag}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-lilac-400 opacity-40 group-hover:opacity-100" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-white group-hover:text-lilac-200 transition-colors">
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

            <div className="mt-5 pt-3 border-t border-lilac-500/15 text-[11px] font-mono text-zinc-500 flex items-center justify-between">
              <span>Modern AI &amp; Web Stack</span>
              <span className="text-lilac-400">Ready for scale</span>
            </div>
          </div>

          {/* COLUMN 2: WORK PROCESS (4 cols) */}
          <div className="lg:col-span-4 glass-panel rounded-3xl p-7 border border-lilac-500/20 ai-glow-card flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-lilac-500/15">
                <h3 className="font-cinzel text-lg font-bold text-white tracking-wider">
                  WORK PROCESS
                </h3>
                <span className="text-[11px] font-mono text-lilac-400 font-bold">
                  4 Iterative Stages
                </span>
              </div>

              {/* Vertical Step Timeline */}
              <div className="relative pl-6 space-y-6 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-lilac-500 before:via-purple-500/50 before:to-transparent">
                {processSteps.map((step) => (
                  <div key={step.step} className="relative group">
                    
                    {/* Number Bullet */}
                    <div className="absolute -left-6 top-0 w-6 h-6 rounded-full bg-obsidian-base border-2 border-lilac-400 text-lilac-300 text-[10px] font-mono font-bold flex items-center justify-center group-hover:bg-lilac-500 group-hover:text-black transition-all">
                      {step.step}
                    </div>

                    <div className="pl-3">
                      <h4 className="text-xs font-cinzel font-bold text-white tracking-wide group-hover:text-lilac-200 transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-[11px] text-zinc-400 mt-1 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-lilac-500/15 text-[11px] font-mono text-zinc-500">
              Rigorous, test-driven AI workflow
            </div>
          </div>

          {/* COLUMN 3: SOLID ROYAL VIOLET CTA CARD (4 cols) */}
          <div className="lg:col-span-4 rounded-3xl p-8 bg-gradient-to-br from-lilac-500 via-purple-600 to-indigo-700 text-white shadow-2xl shadow-purple-950/80 flex flex-col justify-between relative overflow-hidden group">
            
            {/* Ambient Graphic Elements inside CTA card */}
            <div className="absolute -right-12 -top-12 w-48 h-48 bg-white/15 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
            <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-black/20 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              
              {/* Header Sparkle */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/20 text-white text-[11px] font-mono backdrop-blur-md border border-white/20">
                <Sparkles className="w-3.5 h-3.5" /> OPEN FOR OPPORTUNITIES
              </div>

              {/* Big Bold Headline from Poster */}
              <h3 className="text-2xl sm:text-3xl font-cinzel font-black tracking-tight leading-tight uppercase">
                LET'S BUILD<br />
                SOMETHING<br />
                AMAZING<br />
                TOGETHER. <span className="text-lilac-200">✦</span>
              </h3>

              <p className="text-xs sm:text-sm text-purple-100/90 leading-relaxed font-normal">
                I'm actively seeking AI/ML engineering internships, full-stack projects, and innovative technical collaborations.
              </p>
            </div>

            {/* Dark Pill CTA Button from Poster */}
            <div className="relative z-10 pt-6 mt-6 border-t border-white/20">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-between px-6 py-4 rounded-2xl bg-obsidian-base hover:bg-black text-white font-bold text-xs uppercase tracking-wider shadow-2xl group-hover:scale-[1.02] transition-all"
              >
                <span>GET IN TOUCH</span>
                <div className="w-8 h-8 rounded-xl bg-lilac-500 text-black flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

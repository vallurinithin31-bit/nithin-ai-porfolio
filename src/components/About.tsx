import React from 'react';
import { 
  User, 
  Cpu, 
  Boxes, 
  Zap, 
  GraduationCap, 
  CheckCircle2,
  BrainCircuit
} from 'lucide-react';
import { personalInfo, aboutHighlights, educationData } from '../data/portfolioData';
import { InstagramGlassCard } from './InstagramGlassCard';

export const About: React.FC = () => {
  const currentFocus = [
    'Generative AI & LLM Systems',
    'AI Agents & Autonomous Loops',
    'Intelligent Workflow Automation',
    'Prompt Engineering & Structured Output',
    'Product Analytics & Funnel EDA',
    'AI-Assisted Software Development'
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-indigo-400" />;
      case 'Boxes':
        return <Boxes className="w-5 h-5 text-cyan-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-purple-400" />;
      default:
        return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="about" className="py-20 sm:py-24 bg-dark-950 relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-dark-900 border border-indigo-500/30 text-indigo-300 text-xs font-mono tracking-widest uppercase mb-3">
            <User className="w-3.5 h-3.5 text-cyan-400" />
            <span>ABOUT NITHIN SAI VALLURI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-display">
            {personalInfo.aboutHeading}
          </h2>
          <p className="text-sm sm:text-base text-dark-300 max-w-2xl mt-3 leading-relaxed">
            Positioned at the intersection of AI engineering, product thinking, automation, and analytics to transform complex concepts into practical, reliable software.
          </p>
        </div>

        {/* 3 Prominent Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-12">
          {aboutHighlights.map((highlight) => (
            <div
              key={highlight.id}
              className="glass-panel p-6 sm:p-7 rounded-3xl group hover:border-indigo-500/50 hover:bg-dark-850/80 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/15 transition-all" />

              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-dark-800 border border-dark-700 group-hover:scale-110 transition-transform">
                  {getIcon(highlight.iconName)}
                </div>
                <span className="text-[10px] font-mono text-cyan-300 uppercase tracking-wider px-2.5 py-1 rounded-full bg-dark-900 border border-dark-700">
                  {highlight.tag}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight font-display mb-1 group-hover:text-cyan-300 transition-colors">
                {highlight.title}
              </h3>
              
              <div className="text-xs font-mono text-indigo-300 mb-3">
                {highlight.subtitle}
              </div>

              <p className="text-xs sm:text-sm text-dark-300 leading-relaxed font-sans">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        {/* Narrative & Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Narrative Bio & Focus Areas */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6">
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight font-display flex items-center gap-2.5">
                <BrainCircuit className="w-5 h-5 text-cyan-400" />
                <span>How I Build &amp; Solve Problems</span>
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-dark-200 leading-relaxed">
                <p>
                  I am a Computer Science Engineering student specializing in <strong className="text-white">Artificial Intelligence &amp; Machine Learning</strong>. Rather than treating code as just syntax, I approach engineering from a product and systems mindset — deconstructing the root friction, prototyping with cutting-edge AI architectures, and turning ideas into reliable experiences.
                </p>
                <p>
                  My applied work covers large language models, prompt engineering pipelines, agentic workflows, SQL database querying, and automated background tasks. I thrive on fast iterative experimentation and turning ambiguity into structured, useful software.
                </p>
              </div>

              {/* Current Focus List */}
              <div className="pt-4 border-t border-dark-800 space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 block">
                  Current Technical Focus:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentFocus.map((point, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-dark-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education Banner */}
              <div className="pt-5 border-t border-dark-800 flex items-start gap-3.5">
                <div className="p-2.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/25 text-indigo-400 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">
                    {educationData.status}
                  </div>
                  <h4 className="text-sm font-bold text-white">
                    {educationData.degree}
                  </h4>
                  <p className="text-xs text-dark-400">
                    {educationData.institution} • {educationData.year}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Holographic Glass Instagram & Identity Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="w-full">
              <InstagramGlassCard />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;

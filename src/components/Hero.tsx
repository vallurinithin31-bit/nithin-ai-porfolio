import React from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  BrainCircuit,
  Sparkles
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { LinkedinIcon, GithubIcon } from './Icons';

interface HeroProps {
  onOpenResumeModal: () => void;
  onToast: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal, onToast }) => {
  const handleDownloadResume = () => {
    onToast("Opening Executive Digital Resume viewer...", "info");
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden select-none">
      
      {/* Subtle Side Ribbons */}
      <div className="hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-left items-center gap-4 text-[10px] font-mono tracking-[0.35em] text-lilac-400/40 uppercase pointer-events-none z-20">
        <span>— MACHINE LEARNING</span>
        <span>•</span>
        <span>AGENTIC AI</span>
        <span>•</span>
        <span>DATA PIPELINES —</span>
      </div>

      <div className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 rotate-90 origin-right items-center gap-4 text-[10px] font-mono tracking-[0.35em] text-lilac-400/40 uppercase pointer-events-none z-20">
        <span>— DEEP LEARNING</span>
        <span>•</span>
        <span>PYTHON DEV</span>
        <span>•</span>
        <span>INTELLIGENT SYSTEMS —</span>
      </div>

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto">
        
        {/* Top Mini Tagline & Status */}
        <div className="flex items-center justify-between border-b border-lilac-500/15 pb-3.5 mb-8 text-xs font-mono uppercase tracking-widest text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="text-lilac-400 text-base font-bold animate-pulse">✦</span>
            <span className="font-semibold tracking-wider text-lilac-200">AI &amp; MACHINE LEARNING SPECIALIST</span>
          </div>
          
          <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-lilac-500/10 border border-lilac-500/25 text-lilac-300 text-[11px] font-mono">
            <Sparkles className="w-3 h-3 text-lilac-400" />
            <span>AMRITA SAI INSTITUTE OF SCIENCE &amp; TECHNOLOGY</span>
          </div>
        </div>

        {/* Main Composition */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* Left / Center-Left: Prominent Animated Name & Editorial Headline */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-20">
            
            <div className="relative mb-6 select-none w-full">
              
              {/* Highlighted Full Name with Shimmer Glow Animation */}
              <div className="mb-2">
                <span className="text-xs sm:text-sm font-mono tracking-[0.3em] uppercase text-lilac-400 font-semibold block mb-1">
                  AI &amp; MACHINE LEARNING
                </span>
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-cinzel font-black tracking-wider uppercase leading-none animated-name-highlight drop-shadow-[0_0_30px_rgba(192,132,252,0.6)]">
                  {personalInfo.name}
                </h1>
              </div>

              {/* Specialization & Role Headline */}
              <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-cinzel font-black tracking-tight leading-[1.05] text-transparent bg-clip-text bg-gradient-to-r from-lilac-300 via-lilac-400 to-purple-500 mt-2">
                AI &amp; MACHINE LEARNING<br />
                <span className="text-white font-cinzel tracking-normal">ENGINEER</span>
              </div>

              {/* Sub-tagline */}
              <p className="font-mono text-xs sm:text-sm text-lilac-300/90 tracking-wider mt-3">
                B.Tech (AI &amp; ML) • Python Developer • Autonomous Agent Builder
              </p>
            </div>

            {/* Left Sub-description & Tag */}
            <div className="space-y-4 max-w-xl">
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                {personalInfo.intro}
              </p>

              {/* Monospace Tag Box: </ DATA. ALGORITHMS. AGENTS. DEPLOY /> */}
              <div className="inline-block px-3.5 py-1.5 rounded-xl bg-lilac-950/40 border border-lilac-500/20 text-lilac-300 font-mono text-xs tracking-widest">
                &lt;/ DATA. ALGORITHMS. AGENTS. DEPLOY /&gt;
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-lilac-500 via-purple-600 to-indigo-600 hover:from-lilac-400 hover:to-indigo-500 text-white font-bold text-xs uppercase tracking-wider shadow-xl shadow-purple-950/60 hover:scale-105 transition-all duration-200"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-obsidian-surface hover:bg-lilac-950/40 text-white border border-lilac-500/30 font-semibold text-xs uppercase tracking-wider transition-all duration-200 hover:border-lilac-400"
                >
                  <Mail className="w-3.5 h-3.5 text-lilac-300" />
                  <span>Get In Touch</span>
                </a>

                <button
                  onClick={() => {
                    handleDownloadResume();
                    onOpenResumeModal();
                  }}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10 font-semibold text-xs uppercase tracking-wider transition-all duration-200"
                >
                  <Download className="w-3.5 h-3.5 text-lilac-400" />
                  <span>Resume</span>
                </button>
              </div>

              {/* Social Profiles Strip */}
              <div className="flex items-center gap-3 pt-4 border-t border-lilac-500/15">
                <span className="text-xs font-mono text-zinc-500 uppercase">Profiles:</span>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2.5 rounded-xl bg-obsidian-surface text-zinc-400 hover:text-white hover:bg-purple-900/60 border border-lilac-500/20 transition-all hover:scale-110"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2.5 rounded-xl bg-obsidian-surface text-zinc-400 hover:text-white hover:bg-purple-900/60 border border-lilac-500/20 transition-all hover:scale-110"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.socials.email}`}
                  aria-label="Email"
                  className="p-2.5 rounded-xl bg-obsidian-surface text-zinc-400 hover:text-white hover:bg-purple-900/60 border border-lilac-500/20 transition-all hover:scale-110"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: High-Tech Holographic Visual Frame & Rotating Stamp */}
          <div className="lg:col-span-5 relative flex items-center justify-center pt-8 lg:pt-0">
            
            {/* Cosmic Violet Nebula Spray behind the character visual */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-purple-800 via-lilac-600 to-indigo-600 shadow-2xl opacity-40 blur-3xl animate-pulse-slow pointer-events-none" />

            {/* Glowing Holographic AI Core Frame */}
            <div className="relative z-10 w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden glass-panel border border-lilac-500/30 p-7 flex flex-col items-center justify-between text-center group ai-glow-card">
              
              {/* Inner subtle tech grid */}
              <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />

              {/* Status Header without "AVAILABLE" word */}
              <div className="w-full flex items-center justify-center z-10">
                <span className="px-4 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-lilac-500/15 text-lilac-300 border border-lilac-500/30 font-bold">
                  AI &amp; ML CORE
                </span>
              </div>

              {/* Holographic Glowing Core */}
              <div className="relative my-auto flex items-center justify-center">
                
                {/* Multi-tier rotating aura rings */}
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full border-2 border-dashed border-lilac-400/40 animate-spin-slow flex items-center justify-center">
                  <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border border-purple-500/30 flex items-center justify-center" />
                </div>

                <div className="absolute w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-purple-700 to-lilac-400 p-1 shadow-2xl shadow-purple-900/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <div className="w-full h-full rounded-full bg-obsidian-base flex items-center justify-center border border-lilac-300/30">
                    <BrainCircuit className="w-12 h-12 sm:w-16 sm:h-16 text-lilac-300 animate-pulse" />
                  </div>
                </div>

                {/* Sparkling accent stars */}
                <span className="absolute -top-2 right-2 text-lilac-300 animate-ping">✦</span>
                <span className="absolute bottom-2 -left-2 text-purple-400 text-xs">✦</span>
              </div>

              {/* High-Tech Badge Information */}
              <div className="space-y-1.5 z-10 w-full pt-4 border-t border-lilac-500/20">
                <h3 className="font-cinzel text-base font-bold text-white tracking-wider">
                  Intelligent Agent Studio
                </h3>
                <p className="text-xs text-lilac-300/80 font-mono">
                  Python • RAG • LLMs • Predictive Models
                </p>
              </div>

            </div>

            {/* Rotating Circular Stamp Badge / Monogram in Upper Corner */}
            <div className="absolute -top-6 right-2 sm:-top-8 sm:right-4 z-30 w-28 h-28 sm:w-36 sm:h-36 pointer-events-none">
              <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                <defs>
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <text className="text-[7px] font-mono uppercase tracking-[0.22em] fill-lilac-300 font-bold">
                  <textPath href="#circlePath">
                    • VALLURI NITHIN SAI • AI &amp; ML SPECIALIST • 
                  </textPath>
                </text>
              </svg>
              
              {/* Center Monogram VN */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <div className="w-10 h-10 rounded-full bg-obsidian-surface border border-lilac-500/30 flex items-center justify-center shadow-lg">
                  <span className="font-cinzel font-black text-xs text-white">
                    VN
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* 4-Column Statistics Strip (Directly from Uploaded Poster) */}
        <div className="mt-14 pt-8 border-t border-lilac-500/20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          
          <div className="p-4 rounded-2xl bg-obsidian-surface/60 border border-lilac-500/15">
            <div className="text-2xl sm:text-3xl font-cinzel font-black text-white">
              2024-2028
            </div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-lilac-300/80 mt-1">
              B.Tech Specialization
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-obsidian-surface/60 border border-lilac-500/15">
            <div className="text-2xl sm:text-3xl font-cinzel font-black text-white">
              10,000+
            </div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-lilac-300/80 mt-1">
              Data Records Analyzed
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-obsidian-surface/60 border border-lilac-500/15">
            <div className="text-2xl sm:text-3xl font-cinzel font-black text-white">
              9+
            </div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-lilac-300/80 mt-1">
              Verified Credentials
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-obsidian-surface/60 border border-lilac-500/15">
            <div className="text-2xl sm:text-3xl font-cinzel font-black text-white">
              12+
            </div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-lilac-300/80 mt-1">
              Technologies &amp; Tools
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

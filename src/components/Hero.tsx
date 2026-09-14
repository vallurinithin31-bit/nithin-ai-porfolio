import React from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Sparkles,
  Terminal,
  Cpu,
  Bot,
  GraduationCap
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { LinkedinIcon, GithubIcon } from './Icons';
import { ThreeHeroHologram } from './ThreeHeroHologram';
import { TiltCard3D } from './TiltCard3D';

interface HeroProps {
  onOpenResumeModal: () => void;
  onToast: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal, onToast }) => {
  const handleDownloadResume = () => {
    onToast("Opening Executive Digital Resume viewer with PDF download...", "info");
  };

  const professionPills = [
    { label: 'B.Tech in AI & ML (2024-2028)', icon: GraduationCap },
    { label: 'Python & ML Specialist', icon: Cpu },
    { label: 'Agentic AI & RAG Architectures', icon: Bot },
    { label: 'Predictive Data Analytics', icon: Sparkles }
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden select-none">
      
      {/* Subtle Side Ribbons */}
      <div className="hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-left items-center gap-4 text-[10px] font-mono tracking-[0.35em] text-lilac-400/40 uppercase pointer-events-none z-20">
        <span>— MACHINE LEARNING</span>
        <span>•</span>
        <span>AGENTIC AI</span>
        <span>•</span>
        <span>PYTHON SPECIALIST</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        
        {/* Main 2-Column Hero Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Monumental Name, Profession Badges & Bio Box */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Top Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-lilac-500/10 border border-lilac-500/30 text-lilac-300 text-xs font-mono tracking-widest uppercase backdrop-blur-md shadow-lg shadow-purple-950/40">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Available for AI/ML Internships &amp; Roles</span>
            </div>

            {/* 1. TITLE: Full Name */}
            <div className="space-y-2">
              <span className="text-xs font-mono tracking-[0.3em] uppercase text-zinc-400 block">
                Official Portfolio • {personalInfo.socials.location || 'Vijayawada, India'}
              </span>
              <h1 className="font-cinzel font-black uppercase text-2xl sm:text-4xl md:text-5xl tracking-wider leading-tight animated-name-highlight">
                {personalInfo.name}
              </h1>
            </div>

            {/* 2. SUBTITLE / PROFESSION HIGHLIGHT */}
            <div className="w-full space-y-3">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-cinzel font-bold text-white tracking-widest uppercase">
                AI &amp; MACHINE LEARNING ENGINEER
              </h2>

              {/* Specialization Bullet Badges */}
              <div className="flex flex-wrap gap-2.5 pt-1">
                {professionPills.map((pill, idx) => {
                  const Icon = pill.icon;
                  return (
                    <div
                      key={idx}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-obsidian-surface/90 border border-lilac-500/25 text-xs font-mono text-lilac-200 shadow-sm backdrop-blur-sm hover:border-lilac-400/60 transition-colors"
                    >
                      <Icon className="w-3.5 h-3.5 text-lilac-400" />
                      <span>{pill.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3. ANIMATED BIO BOX */}
            <div className="w-full relative group">
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-lilac-500/30 via-purple-600/20 to-indigo-600/30 opacity-40 group-hover:opacity-75 blur-sm transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative rounded-2xl bg-obsidian-surface/90 border border-lilac-500/30 p-5 sm:p-6 backdrop-blur-md shadow-xl flex gap-4 items-start">
                
                {/* Vertical Glowing Accent Bar */}
                <div className="w-1.5 self-stretch rounded-full bg-gradient-to-b from-lilac-400 via-purple-500 to-indigo-500 shrink-0" />
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                    <Terminal className="w-3.5 h-3.5 text-lilac-400" />
                    <span>PROFESSIONAL SUMMARY &amp; BIO</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                    {personalInfo.aboutText}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Action Buttons & Socials */}
            <div className="space-y-4 w-full">
              <div className="flex flex-wrap gap-3">
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
                  <span>Resume PDF</span>
                </button>
              </div>

              {/* Social Profiles Strip */}
              <div className="flex items-center gap-3 pt-3 border-t border-lilac-500/15">
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

          {/* Right Column: 3D Holographic AI Core Frame with Three.js WebGL Core */}
          <div className="lg:col-span-5 relative flex items-center justify-center pt-8 lg:pt-0">
            
            {/* Cosmic Violet Nebula Spray */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-purple-800 via-lilac-600 to-indigo-600 shadow-2xl opacity-40 blur-3xl animate-pulse-slow pointer-events-none" />

            {/* Glowing 3D Interactive Holographic AI Core Frame */}
            <TiltCard3D className="w-full max-w-sm">
              <div className="relative z-10 w-full aspect-[4/5] rounded-3xl overflow-hidden glass-panel border border-lilac-500/30 p-6 flex flex-col items-center justify-between text-center group ai-glow-card shadow-2xl">
                
                {/* Inner subtle tech grid */}
                <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />

                {/* Status Header */}
                <div className="w-full flex items-center justify-between z-10">
                  <span className="px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-lilac-500/15 text-lilac-300 border border-lilac-500/30 font-bold">
                    3D AI &amp; ML CORE
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    ONLINE
                  </span>
                </div>

                {/* Interactive 3D WebGL Hologram Orb */}
                <div className="relative my-auto flex items-center justify-center py-2">
                  <ThreeHeroHologram />
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
            </TiltCard3D>

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

        {/* 4-Column Statistics Strip */}
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

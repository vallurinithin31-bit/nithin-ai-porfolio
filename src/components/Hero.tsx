import React from 'react';
import { 
  Download, 
  ArrowRight, 
  Mail, 
  Terminal, 
  Cpu, 
  Bot, 
  Database,
  Code2
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { LinkedinIcon, GithubIcon, InstagramIcon } from './Icons';

interface HeroProps {
  onOpenResumeModal: () => void;
  onToast: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal, onToast }) => {
  const handleDownloadResume = () => {
    onOpenResumeModal();
    onToast("Opening Executive Digital Resume viewer...", "info");
  };

  const techBadges = [
    { label: 'Python', icon: Code2 },
    { label: 'Machine Learning', icon: Cpu },
    { label: 'RAG & Agents', icon: Bot },
    { label: 'Data Analytics', icon: Database },
  ];

  return (
    <section 
      id="home" 
      className="hero-crimson-stage relative min-h-screen flex flex-col justify-center pt-28 pb-16 overflow-hidden select-none"
    >
      {/* Pinned Left Vertical Social Media Rail */}
      <div className="fixed left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col items-center gap-4 text-white/80">
        <a
          href={personalInfo.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="p-2.5 rounded-full bg-black/30 hover:bg-white hover:text-black border border-white/20 backdrop-blur-md transition-all hover:scale-110 shadow-lg"
        >
          <GithubIcon className="w-4 h-4" />
        </a>

        <a
          href={personalInfo.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="p-2.5 rounded-full bg-black/30 hover:bg-white hover:text-black border border-white/20 backdrop-blur-md transition-all hover:scale-110 shadow-lg"
        >
          <LinkedinIcon className="w-4 h-4" />
        </a>

        <a
          href="https://www.instagram.com/valluri_nani_/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="p-2.5 rounded-full bg-black/30 hover:bg-white hover:text-black border border-white/20 backdrop-blur-md transition-all hover:scale-110 shadow-lg"
        >
          <InstagramIcon className="w-4 h-4" />
        </a>

        <a
          href={`mailto:${personalInfo.socials.email}`}
          aria-label="Email"
          className="p-2.5 rounded-full bg-black/30 hover:bg-white hover:text-black border border-white/20 backdrop-blur-md transition-all hover:scale-110 shadow-lg"
        >
          <Mail className="w-4 h-4" />
        </a>

        <div className="w-[1.5px] h-12 bg-white/30 rounded-full mt-2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Greeting, Role, Description, 3 Pill Buttons */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/30 border border-white/25 text-white text-xs font-mono tracking-wider backdrop-blur-md shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Available for AI/ML Opportunities</span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                Hi, I'm <span className="underline decoration-white/30 underline-offset-8">Valluri Nithin</span>,
              </h1>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white/90 tracking-tight">
                AI &amp; Machine Learning Engineer
              </h2>
            </div>

            {/* Punchy Bio Subtitle */}
            <p className="text-sm sm:text-base text-white/90 max-w-xl leading-relaxed font-normal">
              I build fast, scalable intelligent applications, machine learning models, autonomous RAG agents, and predictive data pipelines using Python, PyTorch, and modern web architectures.
            </p>

            {/* 3 Pill Action Buttons (Matching Reel) */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="btn-pill-white"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="btn-pill-glass"
              >
                <span>Contact Me</span>
              </a>

              <button
                onClick={handleDownloadResume}
                className="btn-pill-glass"
              >
                <Download className="w-4 h-4 text-white/90" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Mobile Social Links Strip */}
            <div className="flex md:hidden items-center gap-3 pt-3">
              <span className="text-xs text-white/70 font-mono">Connect:</span>
              <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black/30 text-white border border-white/20">
                <GithubIcon className="w-3.5 h-3.5" />
              </a>
              <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black/30 text-white border border-white/20">
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
              <a href="https://www.instagram.com/valluri_nani_/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black/30 text-white border border-white/20">
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a href={`mailto:${personalInfo.socials.email}`} className="p-2 rounded-full bg-black/30 text-white border border-white/20">
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Desk Setup Visual with Laptop & Floating Badges */}
          <div className="lg:col-span-5 relative flex items-center justify-center pt-8 lg:pt-0">
            
            {/* Ambient Background Backlight Glow */}
            <div className="absolute w-80 h-80 rounded-full bg-white/20 blur-3xl pointer-events-none" />

            {/* Desk Workspace Container */}
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-b from-black/20 via-black/40 to-black/80 border border-white/25 shadow-2xl p-6 flex flex-col justify-between backdrop-blur-xl group">
              
              {/* Top Header on Visual */}
              <div className="flex items-center justify-between z-10">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-white/20 text-white text-[11px] font-mono">
                  <Terminal className="w-3 h-3 text-red-400" />
                  <span>workspace://active</span>
                </div>
                <span className="text-[10px] font-mono text-white/80 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/20">
                  AMRITA SAI
                </span>
              </div>

              {/* Center Portrait / Laptop Visual */}
              <div className="relative my-auto flex flex-col items-center text-center py-4">
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1 bg-gradient-to-tr from-white via-red-300 to-white/40 shadow-2xl overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-500">
                  <img
                    src="/images/nithin.jpg"
                    alt={personalInfo.name}
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop";
                    }}
                  />
                </div>

                {/* Floating Tech Chips around avatar */}
                <div className="grid grid-cols-2 gap-2 w-full pt-2">
                  {techBadges.map((badge, idx) => {
                    const Icon = badge.icon;
                    return (
                      <div
                        key={idx}
                        className="flex items-center gap-2 p-2 rounded-xl bg-black/40 border border-white/15 text-[11px] font-mono text-white/90 backdrop-blur-md"
                      >
                        <Icon className="w-3.5 h-3.5 text-red-400" />
                        <span className="truncate">{badge.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Desk Surface Reflection Bar */}
              <div className="pt-3 border-t border-white/15 flex items-center justify-between text-xs font-mono text-white/80 z-10">
                <span>📍 VIJAYAWADA, INDIA</span>
                <span className="flex items-center gap-1.5 text-emerald-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  ONLINE
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

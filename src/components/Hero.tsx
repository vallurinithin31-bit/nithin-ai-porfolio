import React from 'react';
import { 
  Download, 
  ArrowRight, 
  Mail
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { LinkedinIcon, GithubIcon } from './Icons';
import { HeroInteractiveNodes } from './HeroInteractiveNodes';

interface HeroProps {
  onOpenResumeModal: () => void;
  onToast: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal, onToast }) => {
  const handleDownloadResume = () => {
    onOpenResumeModal();
    onToast("Opening Executive Digital Resume viewer...", "info");
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex flex-col justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden select-none"
    >
      {/* Pinned Left Vertical Social Media Rail on Desktop */}
      <div className="fixed left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 hidden xl:flex flex-col items-center gap-3 text-dark-300">
        <a
          href={personalInfo.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="p-2.5 rounded-xl bg-dark-900/80 hover:bg-white hover:text-dark-950 border border-dark-700/80 backdrop-blur-md transition-all hover:scale-110 shadow-lg text-dark-200"
        >
          <GithubIcon className="w-4 h-4" />
        </a>

        <a
          href={personalInfo.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="p-2.5 rounded-xl bg-dark-900/80 hover:bg-[#0A66C2] hover:text-white border border-dark-700/80 backdrop-blur-md transition-all hover:scale-110 shadow-lg text-dark-200"
        >
          <LinkedinIcon className="w-4 h-4" />
        </a>

        <a
          href={`mailto:${personalInfo.socials.email}`}
          aria-label="Direct Email Transmission"
          className="p-2.5 rounded-xl bg-dark-900/80 hover:bg-cyan-500 hover:text-dark-950 border border-dark-700/80 backdrop-blur-md transition-all hover:scale-110 shadow-lg text-dark-200"
        >
          <Mail className="w-4 h-4" />
        </a>

        <div className="w-[1px] h-12 bg-gradient-to-b from-dark-700 to-transparent mt-1" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Brand Identity, Headline, Pitch & Action Buttons */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-5">
            
            {/* Top Sub-Brand Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-900/90 border border-indigo-500/30 text-indigo-300 text-xs font-mono tracking-wider backdrop-blur-md shadow-lg">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>AI / ML • PRODUCT • AUTOMATION</span>
            </div>

            {/* Main Headline & Positioning */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-black tracking-tight text-white leading-[1.15] font-display">
                Building Intelligent Products <span className="text-gradient-electric">With AI.</span>
              </h1>
              
              <p className="text-lg sm:text-xl font-medium text-dark-200 tracking-tight leading-relaxed">
                {personalInfo.heroStatement}
              </p>
            </div>

            {/* Supporting Narrative Paragraph */}
            <p className="text-sm sm:text-base text-dark-300 max-w-xl leading-relaxed font-normal">
              {personalInfo.heroParagraph}
            </p>

            {/* 3 Call-to-Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="btn-electric-primary w-full sm:w-auto text-center"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={handleDownloadResume}
                className="btn-electric-secondary w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="btn-electric-secondary w-full sm:w-auto flex items-center justify-center gap-2 text-dark-200 hover:text-white"
              >
                <span>Let's Connect</span>
                <span className="text-cyan-400">→</span>
              </a>
            </div>

            {/* Quick Metrics / Key Focus Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-4 w-full max-w-lg">
              <div className="p-2.5 rounded-xl bg-dark-900/60 border border-dark-800 backdrop-blur-sm">
                <span className="text-[10px] font-mono text-dark-400 block uppercase tracking-wider">Focus</span>
                <span className="text-xs font-semibold text-white">LLM Apps & Agents</span>
              </div>
              <div className="p-2.5 rounded-xl bg-dark-900/60 border border-dark-800 backdrop-blur-sm">
                <span className="text-[10px] font-mono text-dark-400 block uppercase tracking-wider">Applied Stack</span>
                <span className="text-xs font-semibold text-cyan-300">Python • SQL • RAG</span>
              </div>
              <div className="col-span-2 sm:col-span-1 p-2.5 rounded-xl bg-dark-900/60 border border-dark-800 backdrop-blur-sm">
                <span className="text-[10px] font-mono text-dark-400 block uppercase tracking-wider">Status</span>
                <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Building Active
                </span>
              </div>
            </div>

            {/* Mobile / Tablet Social Strip */}
            <div className="flex xl:hidden items-center gap-3 pt-2">
              <span className="text-xs text-dark-400 font-mono">Socials:</span>
              <a 
                href={personalInfo.socials.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-lg bg-dark-800 text-dark-200 hover:text-white border border-dark-700"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </a>
              <a 
                href={personalInfo.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-lg bg-dark-800 text-dark-200 hover:text-white border border-dark-700"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
              <a 
                href={`mailto:${personalInfo.socials.email}`} 
                className="p-2 rounded-lg bg-dark-800 text-dark-200 hover:text-white border border-dark-700"
                aria-label="Email"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: High-Tech Interactive AI Core & Technology Constellation Visual */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <HeroInteractiveNodes />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

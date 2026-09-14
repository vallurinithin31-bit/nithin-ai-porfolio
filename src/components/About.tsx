import React from 'react';
import { 
  User, 
  GraduationCap, 
  Sparkles, 
  BookOpen, 
  Compass, 
  Target, 
  Cpu,
  ArrowUpRight
} from 'lucide-react';
import { personalInfo, educationInfo, currentlyLearningList } from '../data/portfolioData';
import { InstagramGlassCard } from './InstagramGlassCard';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Elegant Typography */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lilac-500/10 border border-lilac-500/25 text-lilac-300 text-xs font-mono tracking-widest uppercase mb-3 backdrop-blur-md">
            <User className="w-3.5 h-3.5" />
            <span>BACKGROUND &amp; ACADEMICS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold text-white tracking-wider">
            About Me
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-lilac-400 to-transparent rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Bio Narrative & Core Goals */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Main Bio Card */}
            <div className="glass-panel rounded-3xl p-7 sm:p-9 ai-glow-card border border-lilac-500/20">
              <div className="flex items-center gap-3.5 mb-5">
                <div className="p-2.5 rounded-xl bg-lilac-500/15 text-lilac-300 border border-lilac-500/30">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-cinzel font-bold text-white tracking-wide">Profile Overview</h3>
                  <p className="text-xs text-lilac-300/80 font-mono tracking-wider">B.Tech in Artificial Intelligence &amp; Machine Learning</p>
                </div>
              </div>

              <p className="text-zinc-300 leading-relaxed text-base sm:text-lg mb-6 font-normal tracking-wide">
                {personalInfo.aboutText}
              </p>

              {/* Core Philosophy / Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-5 border-t border-lilac-500/15">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-obsidian-surface border border-lilac-500/20">
                  <Target className="w-4 h-4 text-lilac-400 mt-1 shrink-0" />
                  <div>
                    <h4 className="text-sm font-cinzel font-bold text-white">Primary Goal</h4>
                    <p className="text-xs text-zinc-400 mt-1 leading-normal">
                      Secure AI/ML internships to build scalable real-world solutions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-obsidian-surface border border-lilac-500/20">
                  <Cpu className="w-4 h-4 text-lilac-400 mt-1 shrink-0" />
                  <div>
                    <h4 className="text-sm font-cinzel font-bold text-white">Engineering Mindset</h4>
                    <p className="text-xs text-zinc-400 mt-1 leading-normal">
                      Hands-on coding, honest capability reporting, and continuous learning.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Card */}
            <div className="glass-panel rounded-3xl p-7 sm:p-9 border border-lilac-500/20">
              <div className="flex items-center gap-3.5 mb-6">
                <div className="p-2.5 rounded-xl bg-lilac-500/15 text-lilac-300 border border-lilac-500/30">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-cinzel font-bold text-white tracking-wide">Academic Journey</h3>
                  <p className="text-xs text-lilac-300/80 font-mono tracking-wider">{educationInfo.institution}</p>
                </div>
              </div>

              <div className="relative pl-6 border-l-2 border-lilac-500/40 space-y-4">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-lilac-400 border-4 border-obsidian-base" />
                
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-md bg-lilac-500/15 text-lilac-300 text-xs font-mono font-medium mb-1.5 border border-lilac-500/25">
                    <span>Status:</span>
                    <strong className="text-white font-bold">{educationInfo.status}</strong>
                  </div>
                  <h4 className="text-base sm:text-lg font-cinzel font-bold text-white tracking-wide">
                    {educationInfo.degree}
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1 font-mono">
                    Specialization: {educationInfo.specialization}
                  </p>
                  <p className="text-xs text-zinc-300 mt-2.5 leading-relaxed">
                    Focus on Algorithms, Data Structures, Machine Learning, Deep Learning Architectures, Python Programming, and Artificial Intelligence Systems.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: "Currently Learning" High-Tech Hub */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-panel rounded-3xl p-7 sm:p-9 ai-glow-card border border-lilac-500/20">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-lilac-500/15 text-lilac-300 border border-lilac-500/30">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-cinzel font-bold text-white tracking-wide">Currently Learning</h3>
                    <p className="text-[11px] text-lilac-400/80 font-mono">Active Topics &amp; Focus Areas</p>
                  </div>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-lilac-500/15 text-lilac-300 border border-lilac-500/25">
                  {currentlyLearningList.length} Tracks
                </span>
              </div>

              <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
                Disciplines and frameworks I am actively exploring through practical implementations, research papers, and structured courses:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentlyLearningList.map((item) => (
                  <div
                    key={item.name}
                    className="p-3.5 rounded-2xl bg-obsidian-surface border border-lilac-500/15 hover:border-lilac-400/50 transition-all group flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono font-medium text-lilac-400 uppercase tracking-wider">
                        {item.tag}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-lilac-400 animate-pulse" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors">
                        {item.name}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-lilac-300 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Progress Transparency Note */}
              <div className="mt-6 p-4 rounded-2xl bg-obsidian-surface border border-lilac-500/15 flex items-start gap-3 text-xs text-zinc-400 leading-relaxed">
                <BookOpen className="w-4 h-4 text-lilac-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white font-semibold">Honest Skill Progression:</strong> I prioritize deep conceptual understanding and verified practical code over superficial buzzwords.
                </span>
              </div>
            </div>

            {/* Holographic 3D Transparent Instagram ID Card */}
            <div className="pt-2">
              <InstagramGlassCard />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

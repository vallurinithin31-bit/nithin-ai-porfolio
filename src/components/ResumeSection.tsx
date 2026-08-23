import React, { useState } from 'react';
import { 
  FileText, 
  Eye, 
  CheckCircle2, 
  Briefcase, 
  GraduationCap, 
  BrainCircuit, 
  Copy, 
  Code2, 
  Phone, 
  Mail, 
  MapPin, 
  Sparkles
} from 'lucide-react';
import { personalInfo, educationInfo, experienceData } from '../data/portfolioData';
import { LinkedinIcon, GithubIcon } from './Icons';

interface ResumeSectionProps {
  onOpenModal: () => void;
  onToast: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenModal, onToast }) => {
  const [activeTab, setActiveTab] = useState<'summary' | 'experience' | 'education' | 'skills'>('summary');

  const handlePrintOrDownload = () => {
    onOpenModal();
    onToast("Opening Executive Digital Resume viewer with Print / Download options.", "info");
  };

  const handleCopySummary = () => {
    navigator.clipboard.writeText(personalInfo.aboutText);
    onToast("Professional Summary copied to clipboard!", "success");
  };

  return (
    <section id="resume" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lilac-500/10 border border-lilac-500/25 text-lilac-300 text-xs font-mono tracking-widest uppercase mb-3 backdrop-blur-md">
            <FileText className="w-3.5 h-3.5" />
            <span>OFFICIAL CURRICULUM VITAE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold text-white tracking-wider">
            Interactive Digital Resume
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mt-4 leading-relaxed font-normal">
            An interactive, structured digital rendition of my professional resume tailored for AI/ML engineering and software internships.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-lilac-400 to-transparent rounded-full mt-4" />
        </div>

        {/* Main Resume Showcase Container */}
        <div className="relative rounded-3xl overflow-hidden glass-panel border border-lilac-500/20 p-6 sm:p-10 lg:p-12 ai-glow-card">
          
          {/* Subtle Ambient Mesh */}
          <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-lilac-500/10 rounded-full blur-3xl pointer-events-none" />
          
          {/* Top Resume Header Card with Quick Contact Strip */}
          <div className="relative z-10 pb-8 mb-8 border-b border-lilac-500/20 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-lilac-500/10 text-xs font-mono text-lilac-300 border border-lilac-500/20 mb-2.5">
                <Sparkles className="w-3 h-3 text-lilac-400" /> Available for AI/ML Internships
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-black tracking-wider uppercase animated-name-highlight">
                {personalInfo.name}
              </h3>
              <p className="font-cinzel text-xs sm:text-sm font-semibold text-lilac-300 uppercase tracking-wider mt-1">
                {personalInfo.title}
              </p>
              
              {/* Contact metadata pills */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-3 text-xs font-mono text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-lilac-400" /> Vijayawada, India
                </span>
                <span>•</span>
                <a href={`mailto:${personalInfo.socials.email}`} className="flex items-center gap-1.5 hover:text-lilac-300 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-lilac-400" /> {personalInfo.socials.email}
                </a>
                <span>•</span>
                <a href="tel:+918121467245" className="flex items-center gap-1.5 hover:text-lilac-300 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-lilac-400" /> +91-8121467245
                </a>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={handlePrintOrDownload}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-lilac-500 via-purple-600 to-indigo-600 hover:from-lilac-400 hover:to-indigo-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-purple-950/50 hover:scale-105 transition-all duration-200"
              >
                <Eye className="w-4 h-4" />
                <span>View Complete Resume</span>
              </button>
            </div>
          </div>

          {/* Tab Selection Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none border-b border-lilac-500/20">
            {[
              { id: 'summary', label: 'Summary & Overview', icon: FileText },
              { id: 'experience', label: 'Work Experience', icon: Briefcase },
              { id: 'education', label: 'Education History', icon: GraduationCap },
              { id: 'skills', label: 'Technical Stack', icon: BrainCircuit }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-semibold tracking-wide transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-gradient-to-r from-lilac-500 to-purple-600 text-white shadow-lg shadow-purple-950/60'
                      : 'bg-obsidian-surface text-zinc-400 border border-lilac-500/20 hover:border-lilac-400/50'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Dynamic Tab Body */}
          <div className="min-h-[280px]">
            
            {/* TAB 1: SUMMARY */}
            {activeTab === 'summary' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <h4 className="font-cinzel text-base sm:text-lg font-bold text-white tracking-wide">
                    Professional Statement
                  </h4>
                  <button
                    onClick={handleCopySummary}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-lilac-500/10 hover:bg-lilac-500/20 text-lilac-300 text-xs font-mono transition-colors border border-lilac-500/20"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Text</span>
                  </button>
                </div>

                <div className="p-6 sm:p-7 rounded-2xl bg-obsidian-surface border border-lilac-500/20">
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                    {personalInfo.aboutText}
                  </p>
                </div>
              </div>
            )}

            {/* TAB 2: EXPERIENCE */}
            {activeTab === 'experience' && (
              <div className="space-y-6 animate-fadeIn">
                {experienceData.map((item) => (
                  <div key={item.id} className="p-6 rounded-2xl bg-obsidian-surface border border-lilac-500/20 space-y-4">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                      <div>
                        <h4 className="font-cinzel text-base font-bold text-white">
                          {item.role}
                        </h4>
                        <p className="text-xs font-mono text-lilac-400 mt-0.5">
                          {item.organization}
                        </p>
                      </div>
                      <span className="inline-block px-3 py-1 rounded-full text-[11px] font-mono bg-lilac-500/10 text-lilac-300 border border-lilac-500/20 w-fit">
                        {item.duration}
                      </span>
                    </div>

                    {item.responsibilities && (
                      <ul className="space-y-2 text-xs text-zinc-300 pl-1">
                        {item.responsibilities.map((r, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-lilac-400 mt-0.5 shrink-0" />
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* TAB 3: EDUCATION */}
            {activeTab === 'education' && (
              <div className="space-y-4 animate-fadeIn">
                
                {/* College */}
                <div className="p-6 rounded-2xl bg-obsidian-surface border border-lilac-500/20">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-cinzel text-base font-bold text-white">
                        {educationInfo.degree}
                      </h4>
                      <p className="text-xs font-mono text-lilac-300 mt-0.5">
                        {educationInfo.institution} • {educationInfo.specialization}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-lilac-400">{educationInfo.year}</span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-2">
                    Currently pursuing undergraduate specialization in AI &amp; Machine Learning with a focus on Python, algorithmic problem solving, and modern generative AI models.
                  </p>
                </div>

                {/* Intermediate */}
                <div className="p-6 rounded-2xl bg-obsidian-surface border border-lilac-500/20">
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h4 className="font-cinzel text-base font-bold text-white">
                        INTERMEDIATE (M.P.C)
                      </h4>
                      <p className="text-xs font-mono text-lilac-300 mt-0.5">
                        SR Junior College, Hyderabad
                      </p>
                    </div>
                    <span className="text-xs font-mono text-zinc-400">Higher Secondary</span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-1">
                    Mathematics, Physics, and Chemistry foundation.
                  </p>
                </div>

                {/* School */}
                <div className="p-6 rounded-2xl bg-obsidian-surface border border-lilac-500/20">
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h4 className="font-cinzel text-base font-bold text-white">
                        SCHOOL (CBSE)
                      </h4>
                      <p className="text-xs font-mono text-lilac-300 mt-0.5">
                        SREE VIDYA PEETHI (CBSE) KIMS INSTITUTION, Narketpally
                      </p>
                    </div>
                    <span className="text-xs font-mono text-zinc-400">Secondary Education</span>
                  </div>
                </div>

              </div>
            )}

            {/* TAB 4: SKILLS */}
            {activeTab === 'skills' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fadeIn">
                
                <div className="p-5 rounded-2xl bg-obsidian-surface border border-lilac-500/20">
                  <h4 className="font-cinzel text-sm font-bold text-white mb-2 flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-lilac-400" /> Languages &amp; Core
                  </h4>
                  <ul className="space-y-1.5 text-xs text-zinc-300 font-mono">
                    <li>• Python (Pandas, NumPy, Matplotlib)</li>
                    <li>• Basics of Machine Learning</li>
                    <li>• HTML5, CSS3, JavaScript</li>
                    <li>• SQL / MySQL / SQLite</li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-obsidian-surface border border-lilac-500/20">
                  <h4 className="font-cinzel text-sm font-bold text-white mb-2 flex items-center gap-2">
                    <BrainCircuit className="w-4 h-4 text-lilac-400" /> AI &amp; Analytics
                  </h4>
                  <ul className="space-y-1.5 text-xs text-zinc-300 font-mono">
                    <li>• Data Cleaning &amp; Feature Engineering</li>
                    <li>• Descriptive Statistics &amp; EDA</li>
                    <li>• Regression &amp; Classification Models</li>
                    <li>• RAG Systems &amp; LLMs</li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-obsidian-surface border border-lilac-500/20">
                  <h4 className="font-cinzel text-sm font-bold text-white mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-lilac-400" /> Professional Skills
                  </h4>
                  <ul className="space-y-1.5 text-xs text-zinc-300 font-mono">
                    <li>• Analytical Thinking &amp; Problem Solving</li>
                    <li>• Business Communication</li>
                    <li>• Presentation Skills</li>
                    <li>• Git &amp; GitHub Version Control</li>
                  </ul>
                </div>

              </div>
            )}

          </div>

          {/* Bottom Card Footer */}
          <div className="pt-8 mt-8 border-t border-lilac-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-lilac-400 animate-pulse" />
              <span>Full curriculum vitae synced with verified credentials</span>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-lilac-300 flex items-center gap-1 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-lilac-400" /> LinkedIn
              </a>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-lilac-300 flex items-center gap-1 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 text-lilac-400" /> GitHub
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

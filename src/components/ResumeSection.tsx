import React, { useState } from 'react';
import { 
  FileText, 
  Eye, 
  Download, 
  Briefcase, 
  GraduationCap, 
  BrainCircuit, 
  Copy, 
  Mail, 
  MapPin, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { personalInfo, educationData, experienceData } from '../data/portfolioData';
import { LinkedinIcon, GithubIcon } from './Icons';

interface ResumeSectionProps {
  onOpenModal: () => void;
  onToast: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenModal, onToast }) => {
  const [activeTab, setActiveTab] = useState<'summary' | 'experience' | 'education' | 'skills'>('summary');

  const handleDownloadDirect = () => {
    const link = document.createElement('a');
    link.href = personalInfo.resumePath;
    link.download = personalInfo.resumeFileName;
    link.click();
    onToast(`Downloading ${personalInfo.resumeFileName}`, 'success');
  };

  const handleCopySummary = () => {
    navigator.clipboard.writeText(personalInfo.aboutText);
    onToast("Professional Summary copied to clipboard!", "success");
  };

  return (
    <section id="resume" className="py-20 sm:py-24 bg-dark-950/80 relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-dark-900 border border-indigo-500/30 text-indigo-300 text-xs font-mono tracking-widest uppercase mb-3">
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>CURRICULUM VITAE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-display">
            Want the complete picture?
          </h2>
          <p className="text-sm sm:text-base text-dark-300 max-w-2xl mt-3 leading-relaxed">
            Download the official PDF resume or inspect the interactive digital overview below.
          </p>
        </div>

        {/* Main Resume Showcase Container */}
        <div className="glass-panel rounded-3xl p-6 sm:p-9 lg:p-10 relative overflow-hidden border border-dark-700/80">
          
          {/* Top Resume Header Card */}
          <div className="pb-6 mb-6 border-b border-dark-800 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-indigo-500/10 text-xs font-mono text-cyan-300 border border-indigo-500/30 mb-2">
                <Sparkles className="w-3 h-3 text-cyan-400" /> Available for AI/ML Roles &amp; Internships
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white font-display">
                {personalInfo.name}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-indigo-300 tracking-wider mt-1 font-mono">
                {personalInfo.primaryPositioning}
              </p>
              
              {/* Contact metadata */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-3 text-xs font-mono text-dark-300">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" /> {personalInfo.location}
                </span>
                <span>•</span>
                <a href={`mailto:${personalInfo.socials.email}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <Mail className="w-3.5 h-3.5 text-indigo-400" /> {personalInfo.socials.email}
                </a>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={onOpenModal}
                className="btn-electric-secondary text-xs flex items-center gap-2 py-2.5 px-5 cursor-pointer"
              >
                <Eye className="w-4 h-4 text-cyan-400" />
                <span>View Digital Resume</span>
              </button>

              <button
                onClick={handleDownloadDirect}
                className="btn-electric-primary text-xs flex items-center gap-2 py-2.5 px-5 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </button>
            </div>
          </div>

          {/* Tab Selection Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none border-b border-dark-800">
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
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium tracking-wide transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-electric-sm border border-cyan-300'
                      : 'bg-dark-900 text-dark-300 border border-dark-700 hover:border-dark-600 hover:text-white'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Dynamic Tab Body */}
          <div className="min-h-[220px]">
            
            {/* TAB 1: SUMMARY */}
            {activeTab === 'summary' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white font-display">
                    Professional Statement
                  </h4>
                  <button
                    onClick={handleCopySummary}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-dark-900 hover:bg-dark-800 text-dark-300 hover:text-white text-xs font-mono transition-colors border border-dark-700 cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Text</span>
                  </button>
                </div>

                <div className="p-5 sm:p-6 rounded-2xl bg-dark-950 border border-dark-800">
                  <p className="text-xs sm:text-sm text-dark-200 leading-relaxed font-sans">
                    {personalInfo.aboutText}
                  </p>
                </div>
              </div>
            )}

            {/* TAB 2: EXPERIENCE */}
            {activeTab === 'experience' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="p-5 sm:p-6 rounded-2xl bg-dark-950 border border-dark-800 space-y-3">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                    <div>
                      <h4 className="text-base font-bold text-white font-display">
                        {experienceData.role}
                      </h4>
                      <p className="text-xs font-mono text-cyan-400 mt-0.5">
                        {experienceData.company}
                      </p>
                    </div>
                    <span className="inline-block px-3 py-1 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/25 w-fit">
                      {experienceData.duration}
                    </span>
                  </div>

                  <p className="text-xs text-dark-300">
                    {experienceData.description}
                  </p>

                  <div className="pt-2">
                    <ul className="space-y-1.5 text-xs text-dark-200">
                      {experienceData.responsibilities.slice(0, 4).map((r, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: EDUCATION */}
            {activeTab === 'education' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="p-5 sm:p-6 rounded-2xl bg-dark-950 border border-dark-800">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-base font-bold text-white font-display">
                        {educationData.degree}
                      </h4>
                      <p className="text-xs font-mono text-indigo-300 mt-0.5">
                        {educationData.institution}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-cyan-400">{educationData.year}</span>
                  </div>
                  <p className="text-xs text-dark-300 mt-2 leading-relaxed">
                    Undergraduate study specializing in Artificial Intelligence and Machine Learning with coursework in Python, Neural Networks, Database Systems, and DSA.
                  </p>
                </div>
              </div>
            )}

            {/* TAB 4: SKILLS */}
            {activeTab === 'skills' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fadeIn">
                <div className="p-4 rounded-2xl bg-dark-950 border border-dark-800">
                  <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-2">
                    AI &amp; Generative Models
                  </h4>
                  <p className="text-xs text-dark-300">
                    LLMs, AI Agents, Prompt Engineering, RAG Architectures, Audio &amp; Voice Pipelines.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-dark-950 border border-dark-800">
                  <h4 className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-wider mb-2">
                    Programming &amp; Data
                  </h4>
                  <p className="text-xs text-dark-300">
                    Python, SQL, Exploratory Data Analysis, Data Cleaning, REST APIs, Automation Scripts.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-dark-950 border border-dark-800">
                  <h4 className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider mb-2">
                    Product &amp; Systems
                  </h4>
                  <p className="text-xs text-dark-300">
                    User Journey Analytics, Conversion Funnels, Rapid Prototyping, Git/GitHub.
                  </p>
                </div>
              </div>
            )}

          </div>

          {/* Bottom Card Footer */}
          <div className="pt-6 mt-6 border-t border-dark-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-dark-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Resume file synced with latest verified project credentials</span>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white flex items-center gap-1 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-cyan-400" /> LinkedIn
              </a>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white flex items-center gap-1 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 text-indigo-400" /> GitHub
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ResumeSection;

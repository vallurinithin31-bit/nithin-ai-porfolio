import React from 'react';
import { 
  User, 
  GraduationCap, 
  CheckCircle2, 
  Code2
} from 'lucide-react';
import { educationInfo } from '../data/portfolioData';
import { InstagramGlassCard } from './InstagramGlassCard';

export const About: React.FC = () => {
  const stats = [
    { label: 'B.Tech Specialization', value: '2024–2028', desc: 'Artificial Intelligence & Machine Learning' },
    { label: 'Applied AI Projects', value: '10+', desc: 'RAG, Voice Agents, Sales EDA' },
    { label: 'Data Records Analyzed', value: '10,000+', desc: 'Python, Pandas, NumPy, Visuals' },
    { label: 'Industry Credentials', value: '3+', desc: 'IBM, Codegnan, Internshala' }
  ];

  const focusPoints = [
    'Supervised & Unsupervised Machine Learning Algorithms',
    'Agentic AI & Retrieval-Augmented Generation (RAG)',
    'Exploratory Data Analysis & Statistical Modeling',
    'Full-Stack Python APIs with Django & Modern UI'
  ];

  return (
    <section id="about" className="py-24 bg-[#0c0d12] relative select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono tracking-widest uppercase mb-3">
            <User className="w-3.5 h-3.5" />
            <span>BACKGROUND &amp; FOCUS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            About Me
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mt-3 leading-relaxed">
            A passionate AI &amp; Machine Learning Engineer dedicated to building high-performance models, intelligent agentic workflows, and clean data architectures.
          </p>
        </div>

        {/* 4 Stat Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-[#12131a] border border-white/10 hover:border-red-500/40 transition-all duration-300 group"
            >
              <div className="text-2xl sm:text-3xl font-black text-white group-hover:text-red-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs font-bold font-mono text-zinc-300 uppercase tracking-wider mt-1">
                {stat.label}
              </div>
              <p className="text-[11px] text-zinc-500 mt-2 leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Narrative Bio & Focus Areas */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="p-8 sm:p-9 rounded-3xl bg-[#12131a] border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2.5">
                <Code2 className="w-5 h-5 text-red-500" />
                <span>Engineering Philosophy</span>
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
                <p>
                  I am a forward-thinking <strong className="text-white">B.Tech student (2024–2028)</strong> specializing in Artificial Intelligence and Machine Learning at Amrita Sai Institute of Science &amp; Technology. My core expertise centers on building end-to-end predictive pipelines, training supervised/unsupervised machine learning models, and architecting autonomous AI agents.
                </p>
                <p>
                  Whether conducting deep exploratory data analysis on complex retail datasets or engineering voice-enabled health diagnostic assistants with vector retrieval, I focus on precision, speed, and real-world utility.
                </p>
              </div>

              {/* Focus List */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-400 block">
                  Core Specializations:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {focusPoints.map((point, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education Block */}
              <div className="pt-5 border-t border-white/10 flex items-start gap-3.5">
                <div className="p-2.5 rounded-2xl bg-red-500/10 border border-red-500/25 text-red-400 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-mono text-red-400 uppercase tracking-wider">
                    {educationInfo.status}
                  </div>
                  <h4 className="text-sm font-bold text-white">
                    {educationInfo.degree} — {educationInfo.specialization}
                  </h4>
                  <p className="text-xs text-zinc-400">
                    {educationInfo.institution}
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Holographic 3D Transparent Instagram Card */}
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

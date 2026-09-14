import React from 'react';
import { 
  BrainCircuit, 
  Bot, 
  BarChart3, 
  Code2, 
  Layers,
  Database,
  Cpu,
  Sparkles
} from 'lucide-react';
import { TiltCard3D } from './TiltCard3D';

export const WhatIDo: React.FC = () => {
  const skillCategories = [
    {
      title: 'Machine Learning & AI',
      icon: BrainCircuit,
      skills: [
        { name: 'Python', level: 95 },
        { name: 'Scikit-Learn & Algorithms', level: 90 },
        { name: 'Neural Architectures', level: 85 },
        { name: 'Model Evaluation & Tuning', level: 88 }
      ]
    },
    {
      title: 'Agentic AI & RAG',
      icon: Bot,
      skills: [
        { name: 'RAG Architectures', level: 90 },
        { name: 'Vector Databases', level: 85 },
        { name: 'Multi-Agent Workflows', level: 88 },
        { name: 'LLM Prompt Engineering', level: 92 }
      ]
    },
    {
      title: 'Data Science & EDA',
      icon: BarChart3,
      skills: [
        { name: 'Pandas & NumPy', level: 95 },
        { name: 'Exploratory Data Analysis', level: 92 },
        { name: 'Matplotlib & Seaborn', level: 88 },
        { name: 'Statistical Testing', level: 85 }
      ]
    },
    {
      title: 'Backend & Full-Stack',
      icon: Code2,
      skills: [
        { name: 'Django & REST APIs', level: 85 },
        { name: 'SQL & Database Design', level: 84 },
        { name: 'Git & Version Control', level: 90 },
        { name: 'Modern Responsive UI', level: 86 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-[#0c0d12] relative select-none border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono tracking-widest uppercase mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Skills &amp; Capabilities
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mt-3 leading-relaxed">
            A comprehensive matrix of technical competencies across AI modeling, data analysis, and software engineering.
          </p>
        </div>

        {/* 4 Category Skill Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <TiltCard3D key={idx} className="h-full">
                <div className="p-7 sm:p-8 rounded-3xl bg-[#12131a] border border-white/10 hover:border-red-500/40 transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    {/* Category Title */}
                    <div className="flex items-center gap-3.5 mb-6">
                      <div className="p-3 rounded-2xl bg-red-500/10 text-red-400 border border-red-500/20 shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white tracking-tight">
                          {cat.title}
                        </h3>
                        <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                          Core Competency
                        </span>
                      </div>
                    </div>

                    {/* Skill progress bars */}
                    <div className="space-y-4">
                      {cat.skills.map((skill) => (
                        <div key={skill.name} className="space-y-1.5">
                          <div className="flex items-center justify-between text-xs font-mono text-zinc-300">
                            <span className="font-medium text-white">{skill.name}</span>
                            <span className="text-red-400 font-bold">{skill.level}%</span>
                          </div>
                          
                          {/* Progress Track */}
                          <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-red-600 to-rose-500 rounded-full transition-all duration-1000"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom verification badge */}
                  <div className="pt-5 mt-5 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                    <span>Verified Practical Application</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  </div>
                </div>
              </TiltCard3D>
            );
          })}
        </div>

      </div>
    </section>
  );
};

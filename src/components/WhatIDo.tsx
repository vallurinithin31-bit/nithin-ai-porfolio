import React from 'react';
import { 
  BrainCircuit, 
  Bot, 
  BarChart3, 
  Code2, 
  ArrowUpRight
} from 'lucide-react';

export const WhatIDo: React.FC = () => {
  const services = [
    {
      id: '01',
      title: 'MACHINE LEARNING',
      icon: BrainCircuit,
      description: 'Developing supervised & unsupervised models, predictive analytics, regression, and end-to-end data preprocessing pipelines.'
    },
    {
      id: '02',
      title: 'AGENTIC AI & LLMs',
      icon: Bot,
      description: 'Building intelligent RAG architectures, multi-agent frameworks, healthcare voice assistants, and custom LLM integrations.'
    },
    {
      id: '03',
      title: 'DATA ANALYTICS',
      icon: BarChart3,
      description: 'Extracting actionable insights from 10,000+ record datasets with Pandas, NumPy, statistical modeling, and data visualizations.'
    },
    {
      id: '04',
      title: 'FULL-STACK DEV',
      icon: Code2,
      description: 'Engineering responsive, modern web applications with Python/Django, RESTful APIs, SQLite/MySQL, and modern frontend tools.'
    }
  ];

  return (
    <section id="what-i-do" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Subtitle */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-black tracking-wider text-white">
                WHAT I DO
              </h2>
              <span className="text-2xl text-lilac-400 font-bold animate-pulse">✦</span>
            </div>
            <div className="w-16 h-0.5 bg-gradient-to-r from-lilac-400 to-transparent rounded-full mt-3" />
          </div>

          <div className="lg:col-span-7">
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
              I analyze, design, and engineer intelligent AI models, autonomous agents, and data-driven software solutions tailored for real-world business challenges and rapid performance.
            </p>
          </div>

        </div>

        {/* 4 Numbered Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="glass-panel rounded-3xl p-7 flex flex-col justify-between border border-lilac-500/20 ai-glow-card group hover:-translate-y-2 transition-all duration-300"
              >
                <div>
                  {/* Icon & Corner Star */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-2xl bg-lilac-500/10 text-lilac-300 border border-lilac-500/25 group-hover:scale-110 group-hover:bg-lilac-500 group-hover:text-black transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-lilac-400/50 group-hover:text-lilac-300 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-cinzel font-bold text-white tracking-wider mb-3 group-hover:text-lilac-200 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Number ID */}
                <div className="pt-6 mt-6 border-t border-lilac-500/15 flex items-center justify-between">
                  <span className="font-mono text-xs text-lilac-400/80 font-bold tracking-widest">
                    {item.id}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-lilac-400 opacity-40 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

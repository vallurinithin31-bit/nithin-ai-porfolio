import React, { useState } from 'react';
import { Bot, ArrowRight } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';

interface ProjectsProps {
  onToast: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onToast }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = ['All', 'Data Analysis', 'Agentic AI', 'Full-Stack Web'];

  const filteredProjects = projectsData.filter(project => {
    if (selectedFilter === 'All') return true;
    return project.category === selectedFilter;
  });

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Matching Poster */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-lilac-500/20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-lilac-500/10 text-xs font-mono text-lilac-300 border border-lilac-500/20 mb-2">
              <Bot className="w-3.5 h-3.5" /> PORTFOLIO SHOWCASE
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-black tracking-wider text-white">
              FEATURED PROJECTS
            </h2>
          </div>

          <a
            href="https://github.com/vallurinithin31-bit/My-Projects"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono text-lilac-300 hover:text-white uppercase tracking-widest transition-colors group"
          >
            <span>VIEW ALL PROJECTS</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2.5 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-5 py-2 rounded-2xl text-xs font-medium tracking-wide transition-all whitespace-nowrap ${
                selectedFilter === cat
                  ? 'bg-gradient-to-r from-lilac-500 to-purple-600 text-white shadow-lg shadow-purple-950/60 font-bold scale-105'
                  : 'bg-obsidian-surface text-zinc-400 border border-lilac-500/20 hover:border-lilac-400/50 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid with Numbered Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index + 1}
              onToast={onToast}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

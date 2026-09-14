import React, { useState } from 'react';
import { ArrowRight, FolderGit2 } from 'lucide-react';
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
    <section id="projects" className="py-24 bg-[#0c0d12] relative select-none border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/10 text-xs font-mono text-red-400 border border-red-500/20 mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>SELECTED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-xl mt-2 leading-relaxed">
              Explore applied AI models, multi-agent frameworks, statistical pipelines, and web applications.
            </p>
          </div>

          <a
            href="https://github.com/vallurinithin31-bit/My-Projects"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill-glass text-xs py-2.5 px-5 flex items-center gap-2"
          >
            <span>VIEW GITHUB REPOS</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2.5 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all whitespace-nowrap ${
                selectedFilter === cat
                  ? 'bg-red-600 text-white shadow-lg shadow-red-950/60 scale-105'
                  : 'bg-[#12131a] text-zinc-400 border border-white/10 hover:border-red-500/40 hover:text-white'
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

import React, { useState } from 'react';
import { ArrowRight, FolderGit2 } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  onToast: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onToast }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const categories = ['All', 'Voice AI', 'AI Agents', 'Automation', 'Workflow AI', 'Analytics'];

  const filteredProjects = projectsData.filter(project => {
    if (selectedFilter === 'All') return true;
    return project.category === selectedFilter;
  });

  return (
    <section id="projects" className="py-20 sm:py-24 bg-dark-950 relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-dark-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-dark-900 border border-indigo-500/30 text-indigo-300 text-xs font-mono tracking-widest uppercase mb-3">
              <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>FEATURED WORK &amp; SYSTEMS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-display">
              Featured AI Projects
            </h2>
            <p className="text-sm sm:text-base text-dark-300 max-w-xl mt-2 leading-relaxed">
              Real-world systems, voice interfaces, multi-agent frameworks, prompt pipelines, and data analytics dashboards.
            </p>
          </div>

          <a
            href="https://github.com/vallurinithin31-bit/My-Projects"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-electric-secondary text-xs py-2.5 px-5 flex items-center gap-2"
          >
            <span>EXPLORE GITHUB REPOS</span>
            <ArrowRight className="w-4 h-4 text-cyan-400" />
          </a>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium tracking-wide transition-all whitespace-nowrap cursor-pointer ${
                selectedFilter === cat
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-electric-sm border border-cyan-300 scale-105'
                  : 'bg-dark-900 text-dark-300 border border-dark-700 hover:border-dark-600 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index + 1}
              onOpenDetails={(p) => setActiveProjectModal(p)}
              onToast={onToast}
            />
          ))}
        </div>

        {/* Project Detail Lightbox Modal */}
        {activeProjectModal && (
          <ProjectModal
            project={activeProjectModal}
            onClose={() => setActiveProjectModal(null)}
            onToast={onToast}
          />
        )}

      </div>
    </section>
  );
};

export default Projects;

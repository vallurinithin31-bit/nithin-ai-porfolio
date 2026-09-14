import React from 'react';
import { 
  CheckCircle2, 
  Cpu, 
  Layers, 
  Bot,
  ArrowUpRight
} from 'lucide-react';
import { Project } from '../types';
import { GithubIcon } from './Icons';
import { TiltCard3D } from './TiltCard3D';

interface ProjectCardProps {
  project: Project;
  index: number;
  onToast: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onToast }) => {
  const handleDemoClick = (e: React.MouseEvent) => {
    if (!project.liveUrl) {
      e.preventDefault();
      onToast(`Live demo for "${project.title}" will be available upon server deployment.`, 'info');
    }
  };

  const formattedIndex = index < 10 ? `0${index}` : `${index}`;

  return (
    <TiltCard3D className="h-full">
      <div className="glass-panel rounded-3xl overflow-hidden border border-lilac-500/20 ai-glow-card flex flex-col justify-between group transition-all duration-300 shadow-xl hover:shadow-purple-950/40 h-full">
        <div>
          
          {/* Project Header Visual Mockup Frame with Purple Glow */}
          <div className="relative h-48 w-full bg-gradient-to-b from-purple-950/60 via-obsidian-surface to-obsidian-base p-5 flex flex-col justify-between overflow-hidden border-b border-lilac-500/20">
            
            {/* Subtle Background Grid Pattern */}
            <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />
            
            {/* Glowing Radial Orb */}
            <div className="absolute -right-8 -bottom-8 w-36 h-36 bg-lilac-500/20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />

            {/* Top Line: Numbered Box (01, 02...) & Category Tag */}
            <div className="flex items-center justify-between z-10">
              <span className="px-2.5 py-1 rounded-lg bg-obsidian-base border border-lilac-500/30 text-xs font-mono font-bold text-lilac-300 shadow">
                {formattedIndex}
              </span>

              <span className="px-3 py-0.5 rounded-full text-[10px] font-mono font-medium border border-lilac-500/25 bg-lilac-500/10 text-lilac-200 backdrop-blur-md">
                {project.badge || project.category}
              </span>
            </div>

            {/* Center Graphic Focus */}
            <div className="z-10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-lilac-500/15 border border-lilac-500/30 flex items-center justify-center text-lilac-300 shadow-inner group-hover:scale-110 group-hover:bg-lilac-500 group-hover:text-black transition-all">
                {project.category === 'Agentic AI' ? (
                  <Bot className="w-5 h-5" />
                ) : project.category === 'Data Analysis' ? (
                  <Cpu className="w-5 h-5" />
                ) : (
                  <Layers className="w-5 h-5" />
                )}
              </div>
              <div>
                <h3 className="text-base font-cinzel font-bold text-white group-hover:text-lilac-200 transition-colors tracking-wide line-clamp-1">
                  {project.title}
                </h3>
                <span className="text-[10px] font-mono text-zinc-400">
                  {project.category}
                </span>
              </div>
            </div>
          </div>

          {/* Content Body */}
          <div className="p-6 space-y-4">
            <p className="text-xs text-zinc-300 leading-relaxed font-normal">
              {project.shortDescription}
            </p>

            {/* Problem Statement Box */}
            <div className="p-3.5 rounded-2xl bg-obsidian-surface border border-lilac-500/15 text-xs">
              <div className="flex items-center gap-1.5 text-lilac-300 font-cinzel font-bold mb-1">
                <span>Problem Addressed:</span>
              </div>
              <p className="text-zinc-400 leading-relaxed text-[11px]">
                {project.problemStatement}
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-1.5">
              <ul className="space-y-1 text-xs text-zinc-300">
                {project.features.slice(0, 2).map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-lilac-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 rounded-lg text-[10px] font-mono bg-obsidian-base border border-lilac-500/20 text-zinc-300 group-hover:border-lilac-500/40 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Bottom Bar */}
        <div className="p-6 pt-0 flex items-center justify-between border-t border-lilac-500/15 mt-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Source Code</span>
          </a>

          <a
            href={project.liveUrl || '#'}
            onClick={handleDemoClick}
            target={project.liveUrl ? '_blank' : '_self'}
            rel={project.liveUrl ? 'noopener noreferrer' : ''}
            className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-xl bg-lilac-500/15 hover:bg-lilac-500/25 border border-lilac-500/30 text-lilac-200 text-xs font-mono transition-all hover:scale-105"
          >
            <span>Live Demo</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </TiltCard3D>
  );
};

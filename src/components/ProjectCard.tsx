import React from 'react';
import { 
  Bot, 
  Mic, 
  Laptop, 
  Cpu, 
  Database, 
  CheckCircle2, 
  Sparkles,
  Maximize2
} from 'lucide-react';
import { Project } from '../types';
import { GithubIcon } from './Icons';
import { TiltCard3D } from './TiltCard3D';

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpenDetails: (project: Project) => void;
  onToast?: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ 
  project, 
  index, 
  onOpenDetails
}) => {
  const formattedIndex = index < 10 ? `0${index}` : `${index}`;

  const getProjectIcon = (category: string) => {
    switch (category) {
      case 'Voice AI':
        return <Mic className="w-5 h-5 text-cyan-400" />;
      case 'AI Agents':
        return <Bot className="w-5 h-5 text-indigo-400" />;
      case 'Automation':
        return <Laptop className="w-5 h-5 text-purple-400" />;
      case 'Workflow AI':
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'Analytics':
        return <Database className="w-5 h-5 text-indigo-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <TiltCard3D className="h-full">
      <div className="glass-panel rounded-3xl overflow-hidden group transition-all duration-300 flex flex-col justify-between h-full border border-dark-700/80 hover:border-cyan-400/50 hover:shadow-electric-md">
        
        {/* Top Header Card Frame */}
        <div>
          <div className="relative p-5 sm:p-6 bg-gradient-to-b from-indigo-950/40 via-dark-900 to-dark-900/90 border-b border-dark-800">
            {/* Ambient Corner Glow */}
            <div className="absolute -right-6 -top-6 w-28 h-28 bg-indigo-500/15 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500 pointer-events-none" />

            <div className="flex items-center justify-between mb-3 z-10 relative">
              <span className="px-2.5 py-1 rounded-lg bg-dark-950 border border-dark-700 text-xs font-mono font-bold text-cyan-300 shadow">
                {formattedIndex}
              </span>

              <span className="px-3 py-0.5 rounded-full text-[10px] font-mono font-semibold border border-indigo-500/30 bg-indigo-500/15 text-indigo-300">
                {project.badge || project.category}
              </span>
            </div>

            <div className="flex items-center gap-3.5 z-10 relative">
              <div className="w-11 h-11 rounded-2xl bg-dark-800 border border-dark-700 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-cyan-400 transition-all shadow-md">
                {getProjectIcon(project.category)}
              </div>
              <div className="min-w-0">
                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors font-display tracking-tight truncate">
                  {project.title}
                </h3>
                <p className="text-[11px] font-mono text-dark-400 truncate">
                  {project.subtitle || project.category}
                </p>
              </div>
            </div>
          </div>

          {/* Body Information */}
          <div className="p-5 sm:p-6 space-y-4">
            <p className="text-xs text-dark-200 leading-relaxed font-sans line-clamp-2">
              {project.shortDescription}
            </p>

            {/* Problem Box */}
            <div className="p-3 rounded-2xl bg-dark-950 border border-dark-800 text-xs space-y-1">
              <div className="text-[10px] font-mono font-bold text-indigo-400 uppercase tracking-wider">
                Problem Addressed:
              </div>
              <p className="text-dark-300 text-[11px] leading-relaxed line-clamp-2">
                {project.problem}
              </p>
            </div>

            {/* Solution Highlights */}
            <div className="space-y-1.5">
              <div className="text-[10px] font-mono font-bold text-dark-400 uppercase tracking-wider">
                Core Highlights:
              </div>
              <ul className="space-y-1">
                {project.features.slice(0, 2).map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 text-[11px] text-dark-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Chips */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.technologies.slice(0, 4).map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 rounded-lg text-[10px] font-mono bg-dark-800 border border-dark-700 text-dark-200 group-hover:border-indigo-500/40 transition-colors"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-2 py-0.5 rounded-lg text-[10px] font-mono bg-dark-800 text-dark-400">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Action Bottom Bar */}
        <div className="p-5 sm:p-6 pt-0 flex items-center justify-between border-t border-dark-800 mt-2">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-dark-300 hover:text-white transition-colors"
            >
              <GithubIcon className="w-4 h-4 text-cyan-400" />
              <span>Source</span>
            </a>
          ) : (
            <span className="text-xs font-mono text-dark-400">Personal System</span>
          )}

          <button
            onClick={() => onOpenDetails(project)}
            className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-indigo-600/20 to-cyan-600/20 hover:from-indigo-600 hover:to-cyan-600 text-cyan-300 hover:text-white border border-indigo-500/30 text-xs font-mono transition-all hover:scale-105 cursor-pointer shadow-sm"
          >
            <span>Explore Details</span>
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </TiltCard3D>
  );
};

export default ProjectCard;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpenDetails: (project: Project) => void;
  onToast?: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

const categoryAccent: Record<string, string> = {
  'Voice AI': 'text-cyan-400 border-cyan-400/30 bg-cyan-400/10',
  'AI Agents': 'text-indigo-400 border-indigo-400/30 bg-indigo-400/10',
  'Automation': 'text-violet-400 border-violet-400/30 bg-violet-400/10',
  'Workflow AI': 'text-purple-400 border-purple-400/30 bg-purple-400/10',
  'Analytics': 'text-sky-400 border-sky-400/30 bg-sky-400/10',
};

const categoryGlow: Record<string, string> = {
  'Voice AI': 'rgba(56,189,248,0.12)',
  'AI Agents': 'rgba(99,102,241,0.12)',
  'Automation': 'rgba(139,92,246,0.12)',
  'Workflow AI': 'rgba(168,85,247,0.12)',
  'Analytics': 'rgba(14,165,233,0.12)',
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  onOpenDetails,
}) => {
  const [hovered, setHovered] = useState(false);
  const formattedIndex = index < 10 ? `0${index}` : `${index}`;
  const accent = categoryAccent[project.category] ?? 'text-indigo-400 border-indigo-400/30 bg-indigo-400/10';
  const glow = categoryGlow[project.category] ?? 'rgba(99,102,241,0.12)';

  return (
    <motion.div
      data-cursor="project"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={() => onOpenDetails(project)}
      className="relative flex flex-col cursor-pointer group rounded-2xl border border-zinc-800 bg-[#0b0c14] overflow-hidden select-none"
      style={{
        boxShadow: hovered
          ? `0 0 0 1.5px #6366f1, 0 8px 40px ${glow}, 0 2px 8px rgba(0,0,0,0.6)`
          : '0 2px 12px rgba(0,0,0,0.4)',
        transform: hovered ? 'translateY(-8px)' : 'translateY(0px)',
        transition: 'transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s cubic-bezier(0.22,1,0.36,1)',
      }}
    >
      {/* Ambient top-right glow */}
      <div
        className="absolute -top-10 -right-10 w-40 h-40 rounded-full pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle, ${glow} 0%, transparent 70%)`,
          opacity: hovered ? 1 : 0.4,
        }}
      />

      {/* Top Row — Category tag + Project number */}
      <div className="flex items-start justify-between px-6 pt-6 pb-0 relative z-10">
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] font-mono font-semibold tracking-widest uppercase border ${accent}`}
        >
          {project.badge ?? project.category}
        </span>
        <span className="text-5xl font-black text-zinc-800/60 font-display leading-none select-none">
          {formattedIndex}
        </span>
      </div>

      {/* Title */}
      <div className="px-6 pt-4 pb-0 relative z-10">
        <h3
          className="text-lg sm:text-xl font-bold text-white font-display tracking-tight leading-snug group-hover:text-indigo-200 transition-colors duration-300"
        >
          {project.title}
        </h3>
      </div>

      {/* Description */}
      <div className="px-6 pt-3 pb-0 relative z-10 flex-1">
        <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3 font-sans">
          {project.shortDescription}
        </p>
      </div>

      {/* Tech pills */}
      <div className="px-6 pt-4 pb-0 relative z-10 flex flex-wrap gap-1.5">
        {project.technologies.slice(0, 5).map((tech, idx) => (
          <span
            key={idx}
            className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-zinc-900 border border-zinc-700/60 text-zinc-400 group-hover:border-indigo-500/40 group-hover:text-zinc-300 transition-colors duration-300"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 5 && (
          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-500">
            +{project.technologies.length - 5}
          </span>
        )}
      </div>

      {/* Bottom bar */}
      <div className="px-6 pt-5 pb-5 mt-5 flex items-center justify-between relative z-10 border-t border-zinc-800/60">
        <span className="text-[11px] font-mono text-zinc-600 uppercase tracking-widest">
          VIEW DETAILS
        </span>
        <motion.div
          animate={{ rotate: hovered ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center group-hover:border-indigo-500 group-hover:bg-indigo-500/10 transition-colors duration-300"
        >
          <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-indigo-400 transition-colors duration-300" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle, 
  Info,
  ShieldCheck,
  Zap,
  Target
} from 'lucide-react';
import { Project } from '../types';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onToast: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onToast }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-3xl bg-dark-900 border border-indigo-500/40 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col text-left my-auto"
        >
          {/* Modal Header */}
          <div className="relative p-6 sm:p-8 bg-gradient-to-r from-dark-950 via-dark-900 to-indigo-950/60 border-b border-dark-800 flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-indigo-500/20 border border-indigo-500/40 text-cyan-300">
                  {project.badge || project.category}
                </span>
                <span className="text-xs font-mono text-dark-400">
                  NITHIN SAI VALLURI // REPO &amp; SYSTEM
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-display tracking-tight">
                {project.title}
              </h2>
              {project.subtitle && (
                <p className="text-xs sm:text-sm text-indigo-300 font-mono mt-0.5">
                  {project.subtitle}
                </p>
              )}
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-dark-800 text-dark-300 hover:text-white hover:bg-dark-700 transition-colors border border-dark-700"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
            
            {/* Short Intro */}
            <p className="text-sm text-dark-200 leading-relaxed font-sans">
              {project.shortDescription}
            </p>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-dark-950 border border-red-500/20 text-xs space-y-1.5">
                <div className="flex items-center gap-1.5 text-red-400 font-bold font-mono">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>The Problem:</span>
                </div>
                <p className="text-dark-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-dark-950 border border-cyan-500/20 text-xs space-y-1.5">
                <div className="flex items-center gap-1.5 text-cyan-400 font-bold font-mono">
                  <Zap className="w-4 h-4 shrink-0" />
                  <span>The Solution:</span>
                </div>
                <p className="text-dark-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Features List */}
            <div className="space-y-2.5">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
                <Target className="w-4 h-4 text-cyan-400" />
                <span>Architecture &amp; Key Features</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 p-2.5 rounded-xl bg-dark-950/70 border border-dark-800 text-xs text-dark-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contribution & Outcome */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-dark-950/90 border border-dark-800 text-xs space-y-1.5">
                <span className="text-[11px] font-mono text-cyan-400 block font-bold uppercase">
                  My Contribution:
                </span>
                <p className="text-dark-300 leading-relaxed">
                  {project.contribution}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-dark-950/90 border border-dark-800 text-xs space-y-1.5">
                <span className="text-[11px] font-mono text-emerald-400 block font-bold uppercase">
                  Impact / Outcome:
                </span>
                <p className="text-dark-300 leading-relaxed">
                  {project.outcome}
                </p>
              </div>
            </div>

            {/* Disclaimer or Note if present */}
            {project.disclaimer && (
              <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs flex items-start gap-2.5">
                <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong>Notice:</strong> {project.disclaimer}
                </p>
              </div>
            )}

            {project.note && (
              <div className="p-3.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-200 text-xs flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong>Security Note:</strong> {project.note}
                </p>
              </div>
            )}

            {/* Tech Stack Chips */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-dark-400 block">
                Technologies Applied:
              </span>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-xl text-xs font-mono bg-dark-800 border border-dark-700 text-cyan-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer Actions */}
          <div className="p-6 bg-dark-950 border-t border-dark-800 flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs font-mono text-dark-400">
              ID: {project.id}
            </div>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-electric-secondary text-xs flex items-center gap-2 py-2 px-4"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}

              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-electric-primary text-xs flex items-center gap-2 py-2 px-4"
                >
                  <span>Launch Project</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <button
                  onClick={() => onToast(`Demo for ${project.title} is available via GitHub repo execution.`, 'info')}
                  className="btn-electric-secondary text-xs flex items-center gap-2 py-2 px-4 cursor-pointer"
                >
                  <span>Local Demo</span>
                  <ExternalLink className="w-4 h-4 text-cyan-400" />
                </button>
              )}
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;

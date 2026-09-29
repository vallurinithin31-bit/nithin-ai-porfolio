import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';

const PROJECTS = [
  {
    id: 'janai',
    num: '01',
    title: 'JANAI — ALL-IN-ONE SMART LIFE ASSISTANT',
    category: 'Agentic AI',
    shortDescription: 'An AI-powered smart assistant for everyday questions, government-scheme guidance, job assistance, health awareness and voice-based interaction.',
    tech: ['Python', 'LLMs', 'AI Agents', 'Voice AI', 'Automation'],
    problem: 'Navigating fragmented systems for government welfare schemes, job postings, and everyday assistance is overwhelming and inaccessible for many citizens.',
    solution: 'Architected a multi-agent life assistant that orchestrates specialized AI agents to deliver clear, voice-guided assistance across multiple everyday domains.',
    features: [
      'Government scheme guidance & eligibility breakdown',
      'Job application assistance and opportunity search',
      'Everyday conversational Q&A with knowledge retrieval',
      'Health awareness informational guidance with clear disclaimers',
      'Proactive reminder workflows and routine scheduling',
      'Multilingual voice interaction for inclusive citizen access',
    ],
    githubUrl: 'https://github.com/vallurinithin31-bit/My-Projects',
    liveUrl: null,
  },
  {
    id: 'voice-health',
    num: '02',
    title: 'VOICE AI HEALTH ASSISTANT',
    category: 'Voice AI',
    shortDescription: 'A voice-based AI assistant providing general health awareness, reminders and conversational assistance.',
    tech: ['Python', 'AI Models', 'Voice AI', 'NLP', 'Automation'],
    problem: 'Accessing quick health awareness or reminders often requires complex screen navigation, creating friction for users who prefer hands-free interactions.',
    solution: 'Engineered a voice-interactive assistant that captures spoken input, evaluates conversational intent, and returns synthesized audio guidance.',
    features: [
      'Natural voice interaction for hands-free queries',
      'Intelligent AI responses tailored to daily needs',
      'Proactive reminder workflows and scheduled alerts',
      'Modular Python architecture with intent classification',
    ],
    githubUrl: 'https://github.com/vallurinithin31-bit/My-Projects',
    liveUrl: null,
  },
  {
    id: 'laptop-controller',
    num: '03',
    title: 'AI LAPTOP CONTROLLER',
    category: 'AI Automation',
    shortDescription: 'An AI-powered system to control and interact with a laptop remotely through a phone interface and voice commands.',
    tech: ['Python', 'AI Agents', 'Voice AI', 'APIs', 'Automation'],
    problem: 'Managing computer functions remotely without physical access to the keyboard creates unnecessary workflow disruption.',
    solution: 'Created a secure personal-device automation bridge that receives voice commands or mobile triggers and executes authorized system actions.',
    features: [
      'Remote mobile-to-PC connection over secure local communication',
      'Voice-activated system control and hotkey execution',
      'Automated script execution and application launch triggers',
      'Strict security perimeter restricted to authorized personal actions',
    ],
    githubUrl: 'https://github.com/vallurinithin31-bit/My-Projects',
    liveUrl: null,
  },
  {
    id: 'traffic',
    num: '04',
    title: 'AI TRAFFIC MANAGEMENT SYSTEM',
    category: 'AI + Computer Vision',
    shortDescription: 'An intelligent traffic-management concept using AI-based analysis to support adaptive traffic signal decisions.',
    tech: ['Python', 'Computer Vision', 'Machine Learning', 'Data Analysis'],
    problem: 'Static traffic signals create inefficiencies and congestion in high-traffic areas, leading to delays and increased emissions.',
    solution: 'Designed an AI-based analysis system that evaluates traffic density and suggests adaptive signal timing decisions.',
    features: [
      'Real-time traffic density analysis using computer vision',
      'Adaptive signal timing recommendations',
      'Data-driven congestion pattern analysis',
      'Scalable Python-based architecture',
    ],
    githubUrl: 'https://github.com/vallurinithin31-bit/My-Projects',
    liveUrl: null,
  },
  {
    id: 'learning-gap',
    num: '05',
    title: 'PERSONALIZED LEARNING GAP DETECTION',
    category: 'AI for Education',
    shortDescription: 'An AI-powered learning system to identify knowledge gaps and provide personalized learning recommendations.',
    tech: ['Python', 'Machine Learning', 'AI', 'Data Analysis'],
    problem: 'Students often struggle with hidden knowledge gaps that go undetected by standard assessment methods.',
    solution: 'Built an AI system that analyzes student responses to detect knowledge gaps and provide targeted learning recommendations.',
    features: [
      'Automated knowledge gap identification from assessment data',
      'Personalized learning path recommendations',
      'Progress tracking and performance analytics',
      'Adaptive difficulty adjustment',
    ],
    githubUrl: 'https://github.com/vallurinithin31-bit/My-Projects',
    liveUrl: null,
  },
  {
    id: 'phishing',
    num: '06',
    title: 'PHISHING DETECTION SYSTEM',
    category: 'Cybersecurity + ML',
    shortDescription: 'A machine-learning based concept for identifying suspicious URLs and phishing patterns.',
    tech: ['Python', 'Machine Learning', 'NLP', 'Data Analysis'],
    problem: 'Phishing attacks continue to be a major cybersecurity threat, requiring automated detection systems to protect users.',
    solution: 'Developed an ML classifier that analyzes URL patterns, content features, and linguistic signals to flag phishing attempts.',
    features: [
      'URL pattern analysis and feature extraction',
      'NLP-based content risk scoring',
      'Machine learning classification model',
      'Explainable prediction outputs',
    ],
    githubUrl: 'https://github.com/vallurinithin31-bit/My-Projects',
    liveUrl: null,
  },
];

type Project = typeof PROJECTS[0];

const FILTERS = ['ALL', 'Agentic AI', 'Voice AI', 'AI Automation', 'AI + Computer Vision', 'AI for Education', 'Cybersecurity + ML'];

const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[9995] flex items-center justify-center p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-black/90 backdrop-blur-2xl" onClick={onClose} />
      <motion.div
        className="relative z-10 bg-zinc-950 border border-white/10 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
        initial={{ scale: 0.95, y: 24, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.95, y: 24, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className="sticky top-0 bg-zinc-950/95 backdrop-blur border-b border-white/[0.06] px-6 py-4 flex items-center justify-between rounded-t-2xl z-10">
          <div>
            <p className="text-[10px] text-zinc-600 font-mono tracking-widest uppercase">{project.category}</p>
            <h3 className="text-base font-black text-white mt-0.5">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="text-zinc-600 hover:text-white transition-colors p-1"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <h4 className="text-[11px] font-mono tracking-widest text-zinc-600 uppercase mb-2">OVERVIEW</h4>
            <p className="text-zinc-300 text-sm leading-relaxed">{project.shortDescription}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-[11px] font-mono tracking-widest text-zinc-600 uppercase mb-2">PROBLEM</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">{project.problem}</p>
            </div>
            <div>
              <h4 className="text-[11px] font-mono tracking-widest text-zinc-600 uppercase mb-2">SOLUTION</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">{project.solution}</p>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-mono tracking-widest text-zinc-600 uppercase mb-3">KEY FEATURES</h4>
            <ul className="space-y-2">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-zinc-400">
                  <span className="text-indigo-500 mt-0.5 shrink-0">→</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-mono tracking-widest text-zinc-600 uppercase mb-3">TECHNOLOGIES</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="px-3 py-1 rounded-full border border-indigo-500/25 text-indigo-400 text-[11px] font-mono bg-indigo-500/5">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-white border border-white/20 px-5 py-2.5 rounded-full hover:bg-white/5 transition-colors"
              >
                <GithubIcon className="w-4 h-4" /> VIEW SOURCE ↗
              </a>
            )}
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold bg-indigo-600 text-white px-5 py-2.5 rounded-full hover:bg-indigo-500 transition-colors"
              >
                <ExternalLink size={15} /> LIVE DEMO ↗
              </a>
            ) : (
              <span className="flex items-center gap-2 text-sm font-semibold text-zinc-700 border border-zinc-800 px-5 py-2.5 rounded-full cursor-not-allowed">
                COMING SOON
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectCard: React.FC<{ project: Project; index: number; inView: boolean; onClick: () => void }> = ({
  project, index, inView, onClick,
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.08, ease: 'easeOut' }}
      onClick={onClick}
      data-cursor="project"
      className="group relative border border-white/[0.06] rounded-2xl p-6 md:p-8 bg-white/[0.01] hover:bg-white/[0.03] hover:border-indigo-500/25 transition-all duration-400 cursor-pointer overflow-hidden"
      whileHover={{ y: -6 }}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(99,102,241,0.06) 0%, transparent 60%)' }} />

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <span className="text-[10px] font-mono text-zinc-600 tracking-widest uppercase border border-zinc-800 px-2.5 py-1 rounded-full">
          {project.category}
        </span>
        <span className="text-4xl font-black text-zinc-900 tabular-nums leading-none">{project.num}</span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-black text-white tracking-tight leading-tight mb-3 group-hover:text-indigo-200 transition-colors duration-300">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-zinc-500 text-sm leading-relaxed mb-6">{project.shortDescription}</p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tech.slice(0, 4).map((t) => (
          <span key={t} className="px-2.5 py-1 text-[10px] font-mono border border-white/[0.06] text-zinc-600 rounded-full">
            {t}
          </span>
        ))}
        {project.tech.length > 4 && (
          <span className="px-2.5 py-1 text-[10px] font-mono border border-white/[0.06] text-zinc-700 rounded-full">
            +{project.tech.length - 4}
          </span>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <span className="text-[11px] text-zinc-700 font-mono group-hover:text-indigo-500 transition-colors duration-300 tracking-wide">
          CLICK TO EXPLORE
        </span>
        <motion.span
          animate={{ rotate: 0 }}
          whileHover={{ rotate: 45 }}
          className="text-zinc-700 group-hover:text-white transition-colors duration-300 text-lg"
        >
          ↗
        </motion.span>
      </div>
    </motion.article>
  );
};

interface ProjectsProps {
  onToast: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

export const Projects: React.FC<ProjectsProps> = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = activeFilter === 'ALL'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 md:py-36 px-6 md:px-10 max-w-7xl mx-auto">
      <div ref={ref}>
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-mono text-[11px] text-zinc-600 tracking-[0.3em] uppercase mb-6 flex items-center gap-3"
        >
          <span className="w-6 h-[1px] bg-zinc-700" />
          [PROJECTS]
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none mb-12"
        >
          SELECTED
          <br />
          <span className="text-zinc-600">PROJECTS.</span>
        </motion.h2>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              data-cursor="button"
              className={`text-[11px] font-mono tracking-widest uppercase px-4 py-2 rounded-full border transition-all duration-200 ${
                activeFilter === f
                  ? 'border-indigo-500 text-white bg-indigo-500/15'
                  : 'border-white/[0.06] text-zinc-600 hover:text-zinc-400 hover:border-white/20'
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                inView={inView}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

import React, { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';

const CATEGORIES = [
  {
    label: 'PROGRAMMING',
    skills: [
      { name: 'Python', desc: 'Primary language for AI, data pipelines, automation and backend scripts.' },
      { name: 'SQL', desc: 'Relational database queries, analytical aggregations and schema design.' },
      { name: 'HTML', desc: 'Semantic document structuring and web accessibility fundamentals.' },
      { name: 'JavaScript', desc: 'Frontend interactions and basic DOM manipulation.' },
    ],
  },
  {
    label: 'AI / ML',
    skills: [
      { name: 'Machine Learning', desc: 'Supervised and unsupervised ML algorithms for classification and prediction.' },
      { name: 'Generative AI', desc: 'Applying transformer models for text, vision and structured synthesis.' },
      { name: 'LLMs', desc: 'Large language model integration, reasoning pipelines and conversational interfaces.' },
      { name: 'RAG', desc: 'Retrieval-Augmented Generation with vector databases and semantic search.' },
      { name: 'AI Agents', desc: 'Autonomous goal-seeking loops with memory, tool selection and state machines.' },
    ],
  },
  {
    label: 'DATA',
    skills: [
      { name: 'Pandas', desc: 'Data manipulation, cleaning, transformation and analysis in Python.' },
      { name: 'NumPy', desc: 'Numerical computing and array operations for scientific data.' },
      { name: 'Data Analysis', desc: 'Exploratory analysis, statistical modeling and insight extraction.' },
      { name: 'Power BI', desc: 'Business intelligence dashboards and interactive data visualizations.' },
      { name: 'Jupyter', desc: 'Interactive computational notebooks for rapid EDA and experimentation.' },
    ],
  },
  {
    label: 'DEVELOPMENT',
    skills: [
      { name: 'Git', desc: 'Distributed version control, branching and commit history management.' },
      { name: 'GitHub', desc: 'Repository hosting, open-source collaboration and project management.' },
      { name: 'VS Code', desc: 'Primary code editor with extensions for Python, AI and web development.' },
      { name: 'AI Coding Tools', desc: 'Leveraging state-of-the-art AI developer environments and CLI agents.' },
    ],
  },
  {
    label: 'AUTOMATION',
    skills: [
      { name: 'n8n', desc: 'Visual workflow automation for connecting APIs and automating pipelines.' },
      { name: 'APIs', desc: 'Integrating third-party services via REST APIs and webhooks.' },
      { name: 'AI Automation', desc: 'Trigger-based intelligent pipelines eliminating repetitive manual work.' },
      { name: 'Prompt Engineering', desc: 'Systematic few-shot context framing and schema enforcement for LLMs.' },
    ],
  },
];

export const TechStack: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const [tooltip, setTooltip] = useState<{ name: string; desc: string } | null>(null);

  return (
    <section id="skills" className="py-24 md:py-36 px-6 md:px-10 max-w-7xl mx-auto">
      <div ref={ref}>
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-mono text-[11px] text-zinc-600 tracking-[0.3em] uppercase mb-6 flex items-center gap-3"
        >
          <span className="w-6 h-[1px] bg-zinc-700" />
          [STACK]
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none mb-16"
        >
          TOOLS I<br />
          <span className="text-zinc-600">WORK WITH.</span>
        </motion.h2>

        {/* Categories */}
        <div className="space-y-10">
          {CATEGORIES.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + ci * 0.1 }}
            >
              <p className="text-[10px] font-mono tracking-[0.3em] text-zinc-700 uppercase mb-3">{cat.label}</p>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name} className="relative">
                    <motion.button
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.3 + ci * 0.1 + si * 0.04 }}
                      whileHover={{ scale: 1.05 }}
                      onHoverStart={() => setTooltip(skill)}
                      onHoverEnd={() => setTooltip(null)}
                      className="px-4 py-2.5 rounded-xl border border-white/[0.07] text-sm text-zinc-400 bg-white/[0.02] hover:bg-indigo-500/10 hover:border-indigo-500/30 hover:text-white transition-all duration-200 font-medium"
                      style={{
                        boxShadow: tooltip?.name === skill.name ? '0 0 20px -5px rgba(99,102,241,0.3)' : 'none',
                      }}
                    >
                      {skill.name}
                    </motion.button>

                    {/* Tooltip */}
                    <AnimatePresence>
                      {tooltip?.name === skill.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 6, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 w-52 bg-zinc-950 border border-white/10 rounded-xl p-3 text-left pointer-events-none shadow-xl"
                        >
                          <p className="text-xs text-zinc-400 leading-relaxed">{tooltip.desc}</p>
                          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-zinc-950" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

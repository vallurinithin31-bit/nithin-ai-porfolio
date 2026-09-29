import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const MILESTONES = [
  {
    year: '2024',
    title: 'Programming Foundations',
    desc: 'Started building programming fundamentals. First steps into Python, algorithms and computer science concepts. Enrolled in B.Tech CSE (AI & ML) at Amrita Sai Institute.',
  },
  {
    year: '2025',
    title: 'AI / ML Deep Dive',
    desc: 'Focused on Python, SQL, data analysis and AI/ML fundamentals. Built first AI projects, earned IBM SkillsBuild certifications and participated in coding competitions.',
  },
  {
    year: '2026',
    title: 'Generative AI & Internships',
    desc: 'Exploring Generative AI, LLMs, AI agents, automation and AI-assisted software development. Active AI/Product/Growth Intern. Completed RAG Systems and DSA workshops.',
  },
  {
    year: 'NOW',
    title: 'Building & Growing',
    desc: 'Building practical AI projects and developing industry-ready skills. Open to AI/ML internship opportunities and collaborations.',
    isCurrent: true,
  },
];

export const Timeline: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="journey" className="py-24 md:py-36 px-6 md:px-10 max-w-7xl mx-auto">
      <div ref={ref}>
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-mono text-[11px] text-zinc-600 tracking-[0.3em] uppercase mb-6 flex items-center gap-3"
        >
          <span className="w-6 h-[1px] bg-zinc-700" />
          [JOURNEY]
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none mb-16"
        >
          MY<br />
          <span className="text-zinc-600">JOURNEY.</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-zinc-800 -translate-x-1/2" />

          {/* Animated fill line */}
          <motion.div
            className="absolute left-8 md:left-1/2 top-0 w-[1px] bg-gradient-to-b from-indigo-500 to-purple-500 -translate-x-1/2 origin-top"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />

          <div className="space-y-0">
            {MILESTONES.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -32 : 32 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.2, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex items-start gap-6 md:gap-0 pb-12 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`pl-16 md:pl-0 md:w-[calc(50%-40px)] ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className={`border border-white/[0.06] rounded-2xl p-6 bg-white/[0.01] hover:bg-white/[0.03] hover:border-indigo-500/20 transition-all duration-300 ${
                    m.isCurrent ? 'border-emerald-500/25 bg-emerald-500/[0.03]' : ''
                  }`}>
                    <p className={`text-[10px] font-mono tracking-widest uppercase mb-1 ${
                      m.isCurrent ? 'text-emerald-500' : 'text-zinc-600'
                    }`}>{m.year}</p>
                    <h3 className="text-base font-bold text-white mb-2">{m.title}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-8 md:left-1/2 top-6 -translate-x-1/2 z-10">
                  {m.isCurrent ? (
                    <span className="relative flex h-4 w-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50" />
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-black" />
                    </span>
                  ) : (
                    <span className="flex h-4 w-4 rounded-full bg-indigo-600 border-2 border-black" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const SERVICES = [
  {
    num: '01',
    title: 'AI / MACHINE LEARNING',
    description: 'Machine learning models and intelligent applications designed to solve practical problems using data.',
    tech: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'Machine Learning'],
  },
  {
    num: '02',
    title: 'GENERATIVE AI & AGENTS',
    description: 'LLM-powered applications, RAG systems, AI agents and intelligent workflows that automate repetitive tasks.',
    tech: ['LLMs', 'Prompt Engineering', 'RAG', 'AI Agents', 'APIs'],
  },
  {
    num: '03',
    title: 'AI AUTOMATION & PRODUCTS',
    description: 'AI-assisted products and automation workflows that improve productivity, user experience and business processes.',
    tech: ['AI Automation', 'n8n', 'APIs', 'Python', 'AI-assisted Development'],
  },
];

export const WhatIBuild: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="whatibuild" className="py-24 md:py-36 px-6 md:px-10 max-w-7xl mx-auto">
      <div ref={ref}>
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-mono text-[11px] text-zinc-600 tracking-[0.3em] uppercase mb-6 flex items-center gap-3"
        >
          <span className="w-6 h-[1px] bg-zinc-700" />
          [SERVICES]
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none mb-16"
        >
          WHAT I<br />
          <span className="text-zinc-600">BUILD.</span>
        </motion.h2>

        {/* Service cards */}
        <div className="space-y-3">
          {SERVICES.map((svc, i) => (
            <motion.div
              key={svc.num}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              className={`group relative border border-white/[0.06] rounded-2xl p-8 md:p-10 cursor-default transition-all duration-400 overflow-hidden ${
                hovered === i ? 'border-indigo-500/30 bg-indigo-500/[0.03]' : 'bg-white/[0.01]'
              }`}
            >
              {/* Hover glow */}
              <div
                className={`absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none ${
                  hovered === i ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ background: 'radial-gradient(ellipse at 20% 50%, rgba(99,102,241,0.06) 0%, transparent 70%)' }}
              />

              <div className="relative flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                {/* Number */}
                <motion.span
                  animate={{ x: hovered === i ? 8 : 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  className="text-5xl md:text-6xl font-black text-zinc-800 leading-none tabular-nums w-20 shrink-0"
                >
                  {svc.num}
                </motion.span>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl md:text-2xl font-black text-white tracking-tight mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed max-w-xl mb-4">
                    {svc.description}
                  </p>

                  {/* Tech tags — animate in on hover */}
                  <motion.div
                    className="flex flex-wrap gap-2"
                    animate={{ opacity: hovered === i ? 1 : 0.4 }}
                    transition={{ duration: 0.3 }}
                  >
                    {svc.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full text-[11px] font-mono border border-white/10 text-zinc-500 bg-white/[0.02]"
                      >
                        {t}
                      </span>
                    ))}
                  </motion.div>
                </div>

                {/* Arrow */}
                <motion.span
                  animate={{ rotate: hovered === i ? 45 : 0, x: hovered === i ? 4 : 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  className="text-2xl text-zinc-700 shrink-0 hidden md:block"
                >
                  ↗
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

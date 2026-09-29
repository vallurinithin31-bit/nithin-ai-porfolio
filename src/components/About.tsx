import React from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';
import { LinkedInGlassCard } from './LinkedInGlassCard';

const TECH_PILLS = ['Python', 'AI/ML', 'LLMs', 'RAG', 'AI Agents', 'Automation'];

interface AboutProps {
  onToast?: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

export const About: React.FC<AboutProps> = ({ onToast }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  const fadeUp = (delay: number): Variants => ({
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: 'easeOut' } },
  });

  return (
    <section id="about" className="py-24 md:py-36 px-6 md:px-10 max-w-7xl mx-auto">
      <div ref={ref}>
        {/* Section tag */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="font-mono text-[11px] text-zinc-600 tracking-[0.3em] uppercase mb-6 flex items-center gap-3"
        >
          <span className="w-6 h-[1px] bg-zinc-700" />
          [ABOUT]
        </motion.div>

        {/* Heading */}
        <div className="overflow-hidden mb-16">
          <motion.h2
            variants={fadeUp(0.1)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none"
          >
            A LITTLE BIT
            <br />
            <span className="text-zinc-600">ABOUT ME.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <div className="space-y-6">
            <motion.p
              variants={fadeUp(0.2)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="text-zinc-300 text-lg leading-relaxed"
            >
              I'm Valluri Nithin Sai, a Computer Science Engineering student specializing in{' '}
              <span className="text-white font-semibold">Artificial Intelligence and Machine Learning</span>. I enjoy
              building AI-powered applications, experimenting with LLMs, automation, data-driven systems and
              intelligent user experiences.
            </motion.p>
            <motion.p
              variants={fadeUp(0.3)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="text-zinc-400 text-base leading-relaxed"
            >
              My focus is on <span className="text-zinc-200">learning by building</span> — transforming ideas into
              working prototypes and practical products using Python, AI tools, APIs, automation and modern
              development workflows. I'm particularly drawn to Generative AI, LLM applications, AI agents and
              prompt engineering.
            </motion.p>

            {/* Info chips */}
            <motion.div
              variants={fadeUp(0.4)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="grid grid-cols-2 gap-3 pt-2"
            >
              {[
                { label: 'EDUCATION', value: 'B.Tech CSE (AI & ML)' },
                { label: 'LOCATION', value: 'Andhra Pradesh, India' },
                { label: 'FOCUS', value: 'AI / ML / Generative AI' },
                { label: 'STATUS', value: 'Open to Internships' },
              ].map(({ label, value }) => (
                <div key={label} className="border border-white/[0.08] rounded-xl p-4 bg-white/[0.02]">
                  <p className="text-[10px] tracking-widest text-zinc-500 uppercase font-mono mb-1">{label}</p>
                  <p className="text-sm text-zinc-200 font-medium">{value}</p>
                </div>
              ))}
            </motion.div>

            {/* Floating tech pills */}
            <motion.div
              variants={fadeUp(0.5)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="flex flex-wrap gap-2 pt-2"
            >
              {TECH_PILLS.map((pill, i) => (
                <motion.span
                  key={pill}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                  transition={{ delay: 0.5 + i * 0.06, duration: 0.4 }}
                  className="px-4 py-2 rounded-full border border-indigo-500/25 text-indigo-300 text-xs font-mono tracking-wide bg-indigo-500/5 hover:bg-indigo-500/15 hover:border-indigo-500/50 transition-all duration-200"
                >
                  {pill}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Holographic LinkedIn Glass ID Card */}
          <motion.div
            variants={fadeUp(0.25)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="w-full flex justify-center"
          >
            <LinkedInGlassCard onToast={onToast} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

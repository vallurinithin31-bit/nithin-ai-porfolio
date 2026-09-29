import React from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';

const TECH_PILLS = ['Python', 'AI/ML', 'LLMs', 'RAG', 'AI Agents', 'Automation'];

export const About: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
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
              className="text-zinc-500 text-base leading-relaxed"
            >
              My focus is on <span className="text-zinc-300">learning by building</span> — transforming ideas into
              working prototypes and practical products using Python, AI tools, APIs, automation and modern
              development workflows. I'm particularly drawn to Generative AI, LLM applications, AI agents and
              prompt engineering.
            </motion.p>

            {/* Info chips */}
            <motion.div
              variants={fadeUp(0.4)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="grid grid-cols-2 gap-3 pt-4"
            >
              {[
                { label: 'EDUCATION', value: 'B.Tech CSE (AI & ML)' },
                { label: 'LOCATION', value: 'Andhra Pradesh, India' },
                { label: 'FOCUS', value: 'AI / ML / Generative AI' },
                { label: 'STATUS', value: 'Open to Internships' },
              ].map(({ label, value }) => (
                <div key={label} className="border border-white/[0.06] rounded-xl p-4 bg-white/[0.02]">
                  <p className="text-[10px] tracking-widest text-zinc-600 uppercase font-mono mb-1">{label}</p>
                  <p className="text-sm text-zinc-300 font-medium">{value}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Profile card + tech pills */}
          <div className="flex flex-col items-center gap-8">
            {/* Profile card */}
            <motion.div
              variants={fadeUp(0.25)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="group relative w-64 h-72 rounded-2xl border border-white/10 overflow-hidden bg-zinc-900/60 cursor-pointer"
              data-cursor="image"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              {/* Placeholder avatar */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-950/60 to-black">
                <span className="text-7xl font-black text-white/10 select-none">VS</span>
              </div>
              {/* Ambient glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 via-transparent to-transparent" />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-sm font-bold tracking-[0.25em] uppercase text-center">
                  AI • BUILD
                  <br />
                  LEARN • INNOVATE
                </p>
              </div>
              {/* Corner accent */}
              <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-indigo-500/50 rounded-tl" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-indigo-500/50 rounded-br" />
            </motion.div>

            {/* Floating tech pills */}
            <motion.div
              variants={fadeUp(0.4)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="flex flex-wrap justify-center gap-2"
            >
              {TECH_PILLS.map((pill, i) => (
                <motion.span
                  key={pill}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                  transition={{ delay: 0.5 + i * 0.07, duration: 0.4 }}
                  className="px-4 py-2 rounded-full border border-indigo-500/25 text-indigo-300 text-xs font-mono tracking-wide bg-indigo-500/5 hover:bg-indigo-500/15 hover:border-indigo-500/50 transition-all duration-200"
                >
                  {pill}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

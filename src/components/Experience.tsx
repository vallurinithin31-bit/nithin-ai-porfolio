import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const EXPERIENCES = [
  {
    num: '01',
    role: 'AI / Product / Growth Intern',
    company: 'Screen Pitch AI (Screen Andragogy Platforms)',
    duration: 'Present',
    location: 'Remote',
    description: 'Working at the intersection of AI, content technology, product workflows and growth analytics.',
    responsibilities: [
      'AI-assisted product development and rapid prototype engineering',
      'AI workflow experimentation and prompt engineering optimization',
      'AI content, storytelling and visual concept generation workflows',
      'Product and user insight analysis to understand prospect behavior',
      'Conversion analysis and outreach campaign pattern discovery',
      'Data preparation and analysis using Python and SQL',
      'Translating business requirements into AI-powered solutions',
    ],
    tags: ['AI', 'Product', 'Python', 'Analytics', 'Prompt Engineering'],
    isCurrent: true,
  },
  {
    num: '02',
    role: 'Web Development Intern',
    company: 'CodeAlpha',
    duration: 'Completed',
    location: 'Remote',
    description: 'Hands-on full-stack development building web applications using Python, Django and JavaScript.',
    responsibilities: [
      'Built responsive frontends and integrated secure REST APIs',
      'Implemented relational database schemas using MySQL and SQLite',
      'Managed version control and code collaboration via Git/GitHub',
    ],
    tags: ['Python', 'Django', 'JavaScript', 'SQL', 'Git'],
    isCurrent: false,
  },
];

export const Experience: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="experience" className="py-24 md:py-36 px-6 md:px-10 max-w-7xl mx-auto">
      <div ref={ref}>
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-mono text-[11px] text-zinc-600 tracking-[0.3em] uppercase mb-6 flex items-center gap-3"
        >
          <span className="w-6 h-[1px] bg-zinc-700" />
          [EXPERIENCE]
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none mb-16"
        >
          EXPERI
          <span className="text-zinc-600">ENCE.</span>
        </motion.h2>

        {/* Experience items */}
        <div className="space-y-6">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.num}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className={`border border-white/[0.06] rounded-2xl p-8 md:p-10 bg-white/[0.01] hover:border-indigo-500/20 transition-all duration-300 ${
                exp.isCurrent ? 'border-indigo-500/15' : ''
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                {/* Left: number + meta */}
                <div className="md:w-56 shrink-0">
                  <span className="text-5xl font-black text-zinc-800 block mb-4">{exp.num}</span>
                  <div className="space-y-1">
                    {exp.isCurrent && (
                      <div className="flex items-center gap-1.5 mb-2">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                        <span className="text-[10px] font-mono text-emerald-500 tracking-widest uppercase">Active</span>
                      </div>
                    )}
                    <p className="text-[10px] font-mono text-zinc-600 tracking-wide">{exp.duration}</p>
                    <p className="text-[10px] font-mono text-zinc-700">{exp.location}</p>
                  </div>
                </div>

                {/* Right: details */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl md:text-2xl font-black text-white tracking-tight mb-1">{exp.role}</h3>
                  <p className="text-indigo-400 text-sm font-semibold mb-3">{exp.company}</p>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-5">{exp.description}</p>

                  <ul className="space-y-2 mb-6">
                    {exp.responsibilities.map((r) => (
                      <li key={r} className="flex items-start gap-2.5 text-sm text-zinc-500">
                        <span className="text-indigo-600 mt-0.5 shrink-0">→</span>
                        {r}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-[10px] font-mono border border-white/[0.06] text-zinc-600 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

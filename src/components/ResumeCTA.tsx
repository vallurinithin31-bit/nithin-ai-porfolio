import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, FileText } from 'lucide-react';

interface ResumeCTAProps {
  onOpenModal: () => void;
  onToast: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

export const ResumeCTA: React.FC<ResumeCTAProps> = ({ onOpenModal }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="resume" className="py-24 md:py-32 px-6 md:px-10">
      <div ref={ref} className="max-w-7xl mx-auto">
        {/* Thin top rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="h-[1px] bg-white/[0.06] mb-16 origin-left"
        />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="font-mono text-[11px] text-zinc-600 tracking-[0.3em] uppercase mb-4">
              [RESUME]
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
              WANT TO KNOW
              <br />
              <span className="text-zinc-600">MORE ABOUT ME?</span>
            </h2>
            <p className="mt-4 text-zinc-500 text-base leading-relaxed max-w-md">
              Explore my resume to see my skills, projects, learning journey and experience.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 shrink-0"
          >
            <button
              onClick={onOpenModal}
              data-cursor="button"
              className="group flex items-center justify-center gap-2 bg-white text-black font-bold text-sm px-8 py-4 rounded-full hover:bg-zinc-100 transition-colors tracking-wide"
            >
              <FileText size={15} />
              VIEW RESUME ↗
            </button>
            <a
              href="/resume.pdf"
              download
              data-cursor="button"
              className="group flex items-center justify-center gap-2 border border-white/20 text-white font-semibold text-sm px-8 py-4 rounded-full hover:border-white/50 hover:bg-white/5 transition-all tracking-wide"
            >
              <Download size={15} />
              DOWNLOAD RESUME ↓
            </a>
          </motion.div>
        </div>

        {/* Thin bottom rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-[1px] bg-white/[0.06] mt-16 origin-left"
        />
      </div>
    </section>
  );
};

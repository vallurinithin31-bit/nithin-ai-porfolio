import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Download } from 'lucide-react';

const CERTS = [
  {
    id: 'rag',
    title: 'Build Intelligent RAG Systems Workshop',
    issuer: 'Codegnan IT Solutions Pvt Ltd',
    date: 'June 2026',
    category: 'Generative AI',
    image: '/certificates/codegnan_rag_systems.jpg',
    credentialUrl: 'https://drive.google.com/drive/folders/1wuKqIYfjg9ChGK_-vwSm9cNlOi9Xa8Z6?usp=sharing',
  },
  {
    id: 'ibm-ai',
    title: 'Artificial Intelligence Fundamentals',
    issuer: 'IBM SkillsBuild',
    date: '2025–2026',
    category: 'AI',
    image: '/certificates/ibm_ai_fundamentals.jpg',
    credentialUrl: 'https://drive.google.com/drive/folders/1wuKqIYfjg9ChGK_-vwSm9cNlOi9Xa8Z6?usp=sharing',
  },
  {
    id: 'internshala',
    title: 'AI Data Analytics Internship Selection',
    issuer: 'Internshala / InAmigos Foundation',
    date: 'May 2026',
    category: 'Internships',
    image: '/certificates/internshala_ai_analytics.jpg',
    credentialUrl: 'https://internshala.com/verify_certificate',
  },
  {
    id: 'code-hunt',
    title: 'Certificate of Merit – CODE HUNT 2.0',
    issuer: 'JNTU-GV CEV(A) / Yukta Devsquad',
    date: '2025–2026',
    category: 'Competitions',
    image: '/certificates/code_hunt_merit.jpg',
    credentialUrl: 'https://drive.google.com/drive/folders/1wuKqIYfjg9ChGK_-vwSm9cNlOi9Xa8Z6?usp=sharing',
  },
  {
    id: 'cynohub',
    title: 'Programming Fundamentals with Python',
    issuer: 'CynoHub Academy',
    date: 'June 2026',
    category: 'Python',
    image: '/certificates/cynohub_python.jpg',
    credentialUrl: 'https://drive.google.com/drive/folders/1wuKqIYfjg9ChGK_-vwSm9cNlOi9Xa8Z6?usp=sharing',
  },
  {
    id: 'dsa',
    title: 'DSA With Python - 1 Workshop',
    issuer: 'Codegnan IT Solutions Pvt Ltd',
    date: 'July 2026',
    category: 'Workshops',
    image: '/certificates/codegnan_dsa_python.jpg',
    credentialUrl: 'https://drive.google.com/drive/folders/1wuKqIYfjg9ChGK_-vwSm9cNlOi9Xa8Z6?usp=sharing',
  },
  {
    id: 'elevatex',
    title: '12-Hour Hackathon – ElevateX',
    issuer: 'Codegnan Community Hub, Vijayawada',
    date: 'January 2026',
    category: 'Hackathons',
    image: '/certificates/elevatex_hackathon.jpg',
    credentialUrl: 'https://drive.google.com/drive/folders/1wuKqIYfjg9ChGK_-vwSm9cNlOi9Xa8Z6?usp=sharing',
  },
  {
    id: 'ibm-ps',
    title: 'Customer Engagement: Problem Solving & Process Controls',
    issuer: 'IBM SkillsBuild',
    date: 'Sep 2025',
    category: 'Professional',
    image: '/certificates/ibm_problem_solving.jpg',
    credentialUrl: 'https://www.credly.com/badges/80ffec29-73ca-48c3-b669-5bf81acdfcfb',
  },
  {
    id: 'ibm-comm',
    title: 'Communication & Personality Dynamics',
    issuer: 'IBM SkillsBuild',
    date: 'Sep 2025',
    category: 'Professional',
    image: '/certificates/ibm_communication.jpg',
    credentialUrl: 'https://www.credly.com/badges/aac6dab3-63c0-460d-9b00-9b50a092b75f',
  },
];

type Cert = typeof CERTS[0];

const CertModal: React.FC<{ cert: Cert; onClose: () => void }> = ({ cert, onClose }) => (
  <motion.div
    className="fixed inset-0 z-[9995] flex items-center justify-center p-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <div className="absolute inset-0 bg-black/90 backdrop-blur-2xl" onClick={onClose} />
    <motion.div
      className="relative z-10 bg-zinc-950 border border-white/10 rounded-2xl max-w-2xl w-full overflow-hidden"
      initial={{ scale: 0.95, y: 20, opacity: 0 }}
      animate={{ scale: 1, y: 0, opacity: 1 }}
      exit={{ scale: 0.95, y: 20, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      {/* Image */}
      <div className="relative h-64 bg-zinc-900">
        <img
          src={cert.image}
          alt={cert.title}
          className="w-full h-full object-contain p-4"
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-black/60 backdrop-blur border border-white/10 rounded-full p-2 text-zinc-400 hover:text-white transition-colors"
        >
          <X size={16} />
        </button>
      </div>

      {/* Details */}
      <div className="p-6">
        <span className="text-[10px] font-mono text-indigo-400 tracking-widest uppercase">{cert.category}</span>
        <h3 className="text-lg font-black text-white mt-1 mb-1">{cert.title}</h3>
        <p className="text-sm text-zinc-500 mb-1">{cert.issuer}</p>
        <p className="text-[11px] font-mono text-zinc-700 mb-6">{cert.date}</p>

        <div className="flex gap-3">
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 px-5 py-2.5 rounded-full transition-colors"
          >
            <ExternalLink size={14} /> VIEW CREDENTIAL ↗
          </a>
          <a
            href={cert.image}
            download
            className="flex items-center gap-2 text-sm font-semibold text-zinc-400 border border-white/10 hover:border-white/30 px-5 py-2.5 rounded-full transition-colors"
          >
            <Download size={14} /> DOWNLOAD
          </a>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

interface CertificationsProps {
  onToast: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

export const Certifications: React.FC<CertificationsProps> = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const [selected, setSelected] = useState<Cert | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="certificates" className="py-24 md:py-36 max-w-7xl mx-auto px-6 md:px-10">
      <div ref={ref}>
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-mono text-[11px] text-zinc-600 tracking-[0.3em] uppercase mb-6 flex items-center gap-3"
        >
          <span className="w-6 h-[1px] bg-zinc-700" />
          [CERTIFICATIONS]
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none mb-4"
        >
          CERTIFI
          <span className="text-zinc-600">CATIONS.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="text-zinc-600 text-sm font-mono mb-10"
        >
          {CERTS.length} credentials earned ↗ Scroll to explore →
        </motion.p>

        {/* Horizontal scroll */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin"
          style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(99,102,241,0.3) transparent' }}
        >
          {CERTS.map((cert, i) => (
            <motion.button
              key={cert.id}
              initial={{ opacity: 0, x: 32 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.06 }}
              onClick={() => setSelected(cert)}
              data-cursor="project"
              className="group flex-shrink-0 w-72 snap-center border border-white/[0.06] rounded-2xl overflow-hidden bg-white/[0.01] hover:border-indigo-500/30 hover:bg-white/[0.03] transition-all duration-300 text-left"
              whileHover={{ y: -4 }}
            >
              {/* Image area */}
              <div className="h-44 bg-zinc-900 flex items-center justify-center overflow-hidden relative">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const parent = (e.target as HTMLImageElement).parentElement!;
                    (e.target as HTMLImageElement).style.display = 'none';
                    parent.innerHTML = `<div class="flex items-center justify-center w-full h-full"><span class="text-4xl font-black text-zinc-800">${cert.category[0]}</span></div>`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Details */}
              <div className="p-4">
                <span className="text-[9px] font-mono text-indigo-400 tracking-widest uppercase">{cert.category}</span>
                <p className="text-sm font-bold text-white mt-1 mb-1 leading-tight line-clamp-2">{cert.title}</p>
                <p className="text-[11px] text-zinc-600 mb-1">{cert.issuer}</p>
                <p className="text-[10px] text-zinc-700 font-mono">{cert.date}</p>
                <p className="mt-3 text-[11px] text-indigo-400 font-mono group-hover:text-indigo-300 transition-colors">
                  VIEW CREDENTIAL ↗
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <CertModal cert={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
};

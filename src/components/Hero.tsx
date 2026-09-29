import React, { useEffect, useRef } from 'react';
import { motion, Variants } from 'framer-motion';

interface HeroProps {
  onOpenResumeModal?: () => void;
  onToast?: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

const HEADLINE_LINES = [
  'AI/ML DEVELOPER',
  'BUILDING INTELLIGENT',
  'DIGITAL EXPERIENCES.',
];

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Subtle particle network background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.2 + 0.4,
      });
    }

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99,102,241,${0.05 * (1 - d / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(99,102,241,0.25)';
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
  };

  const lineVariant: Variants = {
    hidden: { y: 80, opacity: 0, skewY: 3 },
    show: { y: 0, opacity: 1, skewY: 0, transition: { duration: 0.85, ease: 'easeOut' } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16"
    >
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Ambient glow */}
      <div
        className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none opacity-[0.07]"
        style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)', transform: 'translate(-50%,-50%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
        {/* Section tag */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-mono text-[11px] text-zinc-600 tracking-[0.3em] uppercase mb-8 flex items-center gap-3"
        >
          <span className="w-6 h-[1px] bg-zinc-700" />
          HI THERE, I'M
        </motion.div>

        {/* Name */}
        <div className="overflow-hidden mb-3">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[108px] font-black text-white tracking-tight leading-none"
          >
            NITHIN SAI.
          </motion.h1>
        </div>

        {/* Headline lines */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mb-8 overflow-hidden"
        >
          {HEADLINE_LINES.map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.div variants={lineVariant}>
                <span
                  className={`block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight ${
                    i === HEADLINE_LINES.length - 1
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400'
                      : 'text-zinc-300'
                  }`}
                >
                  {line}
                </span>
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
          className="max-w-xl text-zinc-500 text-base md:text-lg leading-relaxed mb-10"
        >
          I build AI-powered applications, automation workflows and intelligent systems
          that turn ideas into practical solutions.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0, ease: 'easeOut' }}
          className="flex flex-wrap gap-4 mb-12"
        >
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
            data-cursor="button"
            className="group flex items-center gap-2 bg-white text-black font-bold text-sm px-7 py-3.5 rounded-full hover:bg-zinc-100 transition-all duration-300 tracking-wide"
          >
            VIEW MY WORK
            <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">↗</span>
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            data-cursor="button"
            className="group flex items-center gap-2 border border-white/20 text-white font-semibold text-sm px-7 py-3.5 rounded-full hover:border-white/50 hover:bg-white/5 transition-all duration-300 tracking-wide"
          >
            LET'S CONNECT
            <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">↗</span>
          </a>
          {onOpenResumeModal && (
            <button
              onClick={onOpenResumeModal}
              data-cursor="button"
              className="group flex items-center gap-2 text-zinc-500 hover:text-zinc-300 font-medium text-sm transition-colors duration-200 tracking-wide"
            >
              VIEW RESUME ↗
            </button>
          )}
        </motion.div>

        {/* Status + Scroll */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2, ease: 'easeOut' }}
            className="flex items-center gap-2.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-zinc-500 text-[11px] tracking-[0.2em] uppercase font-mono">
              Open to AI/ML Internships & Opportunities
            </span>
          </motion.div>

          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.3, ease: 'easeOut' }}
            className="font-mono text-[11px] text-zinc-700 tracking-[0.2em] uppercase animate-bounce"
          >
            SCROLL TO EXPLORE ↓
          </motion.div>
        </div>
      </div>
    </section>
  );
};

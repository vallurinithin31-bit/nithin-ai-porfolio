import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EntrancePortalProps {
  onEnter: () => void;
}

export const EntrancePortal: React.FC<EntrancePortalProps> = ({ onEnter }) => {
  const [phase, setPhase] = useState<'idle' | 'loading' | 'ready'>('idle');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Auto-start loading
    const start = setTimeout(() => setPhase('loading'), 400);
    return () => clearTimeout(start);
  }, []);

  useEffect(() => {
    if (phase !== 'loading') return;
    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 12 + 4;
      if (current >= 100) {
        current = 100;
        setProgress(100);
        clearInterval(interval);
        setTimeout(() => setPhase('ready'), 500);
      } else {
        setProgress(Math.floor(current));
      }
    }, 80);
    return () => clearInterval(interval);
  }, [phase]);

  const lines = [
    'INITIALIZING AI PORTFOLIO...',
    'LOADING NEURAL NETWORKS...',
    'CONNECTING AI SYSTEMS...',
    'READY TO EXPLORE...',
  ];

  const activeLine = Math.floor((progress / 100) * lines.length);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#07080d]"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Ambient background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% 40%, rgba(99,102,241,0.12) 0%, transparent 65%)',
          }}
        />

        <div className="relative z-10 flex flex-col items-center gap-8 w-full max-w-sm px-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="text-white font-black text-4xl tracking-widest">NITHIN</div>
            <div className="text-zinc-500 text-[10px] tracking-[0.4em] uppercase font-mono">
              AI/ML Developer
            </div>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === 'loading' || phase === 'ready' ? 1 : 0 }}
            className="w-full"
          >
            <div className="h-[1px] bg-zinc-800 rounded-full overflow-hidden w-full">
              <motion.div
                className="h-full rounded-full"
                style={{
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #a855f7)',
                  transition: 'width 0.1s linear',
                }}
              />
            </div>
            <div className="mt-3 flex justify-between items-center">
              <span className="text-zinc-600 font-mono text-[10px]">
                {lines[Math.min(activeLine, lines.length - 1)]}
              </span>
              <span className="text-zinc-500 font-mono text-[10px]">{progress}%</span>
            </div>
          </motion.div>

          {/* Enter button */}
          <AnimatePresence>
            {phase === 'ready' && (
              <motion.button
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                onClick={onEnter}
                className="group relative px-10 py-4 border border-white/20 rounded-full text-white font-bold text-sm tracking-widest uppercase overflow-hidden hover:border-indigo-500/50 transition-all duration-300"
              >
                <span className="relative z-10">ENTER PORTFOLIO</span>
                <div className="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/10 transition-colors duration-300" />
                <span className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-500 group-hover:text-white transition-colors duration-300">
                  ↗
                </span>
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* Corner decorators */}
        <div className="absolute top-6 left-6 font-mono text-[10px] text-zinc-700 tracking-widest">
          PORTFOLIO v2.0
        </div>
        <div className="absolute bottom-6 right-6 font-mono text-[10px] text-zinc-700 tracking-widest">
          AI/ML ENGINEER
        </div>
        <div className="absolute bottom-6 left-6 font-mono text-[10px] text-zinc-700 tracking-widest">
          ANDHRA PRADESH, IN
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

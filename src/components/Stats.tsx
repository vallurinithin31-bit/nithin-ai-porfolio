import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const STATS = [
  { value: 6, suffix: '+', label: 'AI PROJECTS', isNumber: true },
  { value: 15, suffix: '+', label: 'TECHNOLOGIES', isNumber: true },
  { value: 5, suffix: '+', label: 'AI DOMAINS', isNumber: true },
  { value: 'AI / ML', suffix: '', label: 'CURRENT FOCUS', isNumber: false },
];

function useCounter(target: number, active: boolean, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

const StatItem: React.FC<{ stat: typeof STATS[0]; active: boolean; index: number }> = ({ stat, active, index }) => {
  const count = useCounter(stat.isNumber ? (stat.value as number) : 0, active);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center justify-center text-center py-8 px-4"
    >
      <span className="text-5xl md:text-6xl lg:text-7xl font-black text-white tabular-nums leading-none mb-3">
        {stat.isNumber ? `${count}${stat.suffix}` : stat.value}
      </span>
      <span className="text-[10px] tracking-[0.3em] text-zinc-600 uppercase font-mono">{stat.label}</span>
    </motion.div>
  );
};

export const Stats: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section className="border-y border-white/[0.05] bg-zinc-950/40">
      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.05]">
          {STATS.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} active={inView} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

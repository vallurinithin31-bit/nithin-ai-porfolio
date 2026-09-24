import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { heroNodes } from '../data/portfolioData';
import { HeroNode } from '../types';
import { Bot, Activity, ArrowUpRight } from 'lucide-react';

export const HeroInteractiveNodes: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<string>('node-llms');
  const [autoRotate, setAutoRotate] = useState<boolean>(true);

  // Position nodes in a radial constellation layout
  const getNodePosition = (index: number, total: number, radius: number = 145) => {
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
    const x = Math.round(Math.cos(angle) * radius);
    const y = Math.round(Math.sin(angle) * (radius * 0.82));
    return { x, y };
  };

  useEffect(() => {
    if (!autoRotate) return;
    const timer = setInterval(() => {
      setActiveNodeId((prev) => {
        const currentIndex = heroNodes.findIndex((n) => n.id === prev);
        const nextIndex = (currentIndex + 1) % heroNodes.length;
        return heroNodes[nextIndex].id;
      });
    }, 3600);
    return () => clearInterval(timer);
  }, [autoRotate]);

  const activeNode = heroNodes.find((n) => n.id === activeNodeId) || heroNodes[0];

  const handleNodeClick = (node: HeroNode) => {
    setActiveNodeId(node.id);
    setAutoRotate(false);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto flex flex-col items-center select-none py-2">
      {/* Outer ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 via-cyan-500/15 to-violet-600/20 rounded-3xl blur-3xl pointer-events-none" />

      {/* Main Interactive Constellation Canvas Box */}
      <div 
        className="relative w-full h-[370px] sm:h-[400px] rounded-3xl bg-dark-900/85 border border-dark-700/80 backdrop-blur-xl shadow-2xl p-4 sm:p-6 flex items-center justify-center overflow-hidden group"
        onMouseEnter={() => setAutoRotate(false)}
        onMouseLeave={() => setAutoRotate(true)}
      >
        {/* Subtle Background Tech Grid */}
        <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />

        {/* Top Header Badge */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-none">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-dark-800/80 border border-cyan-500/30 text-cyan-300 text-[11px] font-mono shadow-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>AI CORE // INTERACTIVE MESH</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-dark-800/60 border border-dark-700 text-[10px] font-mono text-dark-300">
            <Activity className="w-3 h-3 text-indigo-400" />
            <span>9 ACTIVE NODES</span>
          </div>
        </div>

        {/* SVG Connecting Lines between Central Core and Floating Nodes */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <defs>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {heroNodes.map((node, i) => {
            const { x, y } = getNodePosition(i, heroNodes.length, 135);
            const isSelected = node.id === activeNodeId;

            return (
              <g key={node.id}>
                {/* Background Line */}
                <line
                  x1="50%"
                  y1="50%"
                  x2={`calc(50% + ${x}px)`}
                  y2={`calc(50% + ${y}px)`}
                  stroke={isSelected ? '#38bdf8' : 'rgba(99, 102, 241, 0.25)'}
                  strokeWidth={isSelected ? 2 : 1}
                  strokeDasharray={isSelected ? 'none' : '3 3'}
                  className="transition-all duration-300"
                />
                {/* Flowing energy pulse on active line */}
                {isSelected && (
                  <line
                    x1="50%"
                    y1="50%"
                    x2={`calc(50% + ${x}px)`}
                    y2={`calc(50% + ${y}px)`}
                    stroke="#a855f7"
                    strokeWidth={2.5}
                    filter="url(#glow)"
                    className="animate-pulse"
                  />
                )}
              </g>
            );
          })}
        </svg>

        {/* Central Core: NITHIN SAI / AI CORE */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          {/* Pulsing Concentric Rings */}
          <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-indigo-500/20 via-cyan-500/20 to-purple-500/20 animate-ping opacity-30 pointer-events-none duration-1000" />
          <div className="absolute -inset-3 rounded-full bg-indigo-500/10 border border-indigo-500/30 animate-spin-slow pointer-events-none" />

          {/* Central AI Orb */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-dark-900 via-indigo-950/90 to-dark-950 border border-cyan-400/40 shadow-electric-lg flex flex-col items-center justify-center p-2 text-center backdrop-blur-md group-hover:scale-105 transition-transform duration-300">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center shadow-md mb-1">
              <Bot className="w-4 h-4 text-white animate-pulse" />
            </div>
            <span className="text-[10px] sm:text-[11px] font-bold font-display text-white tracking-wider">
              NITHIN SAI
            </span>
            <span className="text-[8px] font-mono text-cyan-300 tracking-tight">
              AI CORE
            </span>
          </div>
        </div>

        {/* 9 Floating Radial Technology Nodes */}
        {heroNodes.map((node, i) => {
          const { x, y } = getNodePosition(i, heroNodes.length, 135);
          const isSelected = node.id === activeNodeId;

          return (
            <motion.button
              key={node.id}
              onClick={() => handleNodeClick(node)}
              onMouseEnter={() => handleNodeClick(node)}
              className={`absolute z-10 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-300 flex items-center gap-1.5 shadow-lg cursor-pointer ${
                isSelected
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white border-cyan-300 scale-110 shadow-electric-md ring-2 ring-cyan-400/50'
                  : 'bg-dark-800/90 text-dark-200 border-dark-600 hover:border-cyan-400/50 hover:text-white hover:bg-dark-700/90'
              } border`}
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full transition-colors"
                style={{ backgroundColor: isSelected ? '#38bdf8' : node.color }}
              />
              <span className="whitespace-nowrap text-[10px] sm:text-xs">
                {node.label}
              </span>
            </motion.button>
          );
        })}

        {/* Bottom Status bar */}
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between z-20 pointer-events-none text-[10px] font-mono text-dark-400">
          <span>INTERACTIVE MESH</span>
          <span className="text-cyan-400/80">STATUS: ACTIVE</span>
        </div>
      </div>

      {/* Dynamic Inspector Card for the Active Node */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeNode.id}
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.98 }}
          transition={{ duration: 0.25 }}
          className="w-full mt-3 p-3.5 sm:p-4 rounded-2xl bg-dark-900/90 border border-indigo-500/30 shadow-xl backdrop-blur-xl flex items-start gap-3 relative overflow-hidden"
        >
          {/* Accent bar on left */}
          <div
            className="w-1 self-stretch rounded-full flex-shrink-0"
            style={{ backgroundColor: activeNode.color }}
          />

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2 mb-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white font-display tracking-tight">
                  {activeNode.label}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-dark-800 border border-dark-700 text-indigo-300">
                  {activeNode.category}
                </span>
              </div>
              <span className="text-[10px] font-mono text-cyan-400 flex items-center gap-0.5">
                INSPECT <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>

            <p className="text-xs text-dark-200 leading-relaxed font-sans">
              {activeNode.description}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HeroInteractiveNodes;

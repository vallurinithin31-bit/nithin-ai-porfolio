import React from 'react';
import { ThreeBackground } from './ThreeBackground';

export const BackgroundGlow: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      
      {/* 1. Deep Obsidian & Electric Indigo Mesh Base */}
      <div 
        className="absolute inset-0 opacity-100 transition-opacity duration-500"
        style={{
          background: `
            radial-gradient(circle at 75% 15%, rgba(99, 102, 241, 0.12) 0%, transparent 45%),
            radial-gradient(circle at 20% 40%, rgba(56, 189, 248, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 75%, rgba(168, 85, 247, 0.08) 0%, transparent 45%),
            linear-gradient(180deg, #07080d 0%, #0a0c14 50%, #07080d 100%)
          `
        }}
      />

      {/* 2. Interactive 3D WebGL Neural Mesh Animation */}
      <ThreeBackground />

      {/* 3. Subtle Tech Grid */}
      <div className="absolute inset-0 tech-grid opacity-25" />

      {/* 4. Ambient Glow Orbs */}
      <div 
        className="absolute -top-24 right-1/4 w-[40rem] h-[40rem] rounded-full blur-3xl opacity-20 animate-pulse-slow pointer-events-none"
        style={{ backgroundColor: '#6366f1' }}
      />

      <div 
        className="absolute top-1/2 -left-20 w-[32rem] h-[32rem] rounded-full blur-3xl opacity-15 animate-float pointer-events-none"
        style={{ backgroundColor: '#38bdf8' }}
      />
    </div>
  );
};

export default BackgroundGlow;

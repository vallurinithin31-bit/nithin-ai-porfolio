import React from 'react';
import { ThreeBackground } from './ThreeBackground';

export const BackgroundGlow: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      
      {/* 1. Deep Obsidian & Crimson Mesh Base */}
      <div 
        className="absolute inset-0 opacity-100 transition-opacity duration-500"
        style={{
          background: `
            radial-gradient(circle at 75% 15%, rgba(229, 46, 46, 0.08) 0%, transparent 45%),
            radial-gradient(circle at 20% 40%, rgba(220, 38, 38, 0.06) 0%, transparent 50%),
            radial-gradient(circle at 80% 75%, rgba(244, 63, 94, 0.05) 0%, transparent 45%),
            linear-gradient(180deg, #0c0d12 0%, #090a0f 50%, #0c0d12 100%)
          `
        }}
      />

      {/* 2. Interactive 3D Crimson & White WebGL Animation */}
      <ThreeBackground />

      {/* 3. Subtle Tech Grid */}
      <div className="absolute inset-0 tech-grid opacity-20" />

      {/* 4. Crimson Dust / Ambient Glow */}
      <div 
        className="absolute -top-24 right-1/4 w-[40rem] h-[40rem] rounded-full blur-3xl opacity-15 animate-pulse-slow pointer-events-none"
        style={{ backgroundColor: '#dc2626' }}
      />

      {/* Rose Ambient Glow Orb */}
      <div 
        className="absolute top-1/2 -left-20 w-[32rem] h-[32rem] rounded-full blur-3xl opacity-10 animate-float pointer-events-none"
        style={{ backgroundColor: '#e11d48' }}
      />
    </div>
  );
};

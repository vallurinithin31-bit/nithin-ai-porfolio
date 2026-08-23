import React from 'react';
import { ThreeBackground } from './ThreeBackground';

export const BackgroundGlow: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      
      {/* 1. Deep Obsidian Velvet & Royal Violet Mesh Base */}
      <div 
        className="absolute inset-0 opacity-100 transition-opacity duration-500"
        style={{
          background: `
            radial-gradient(circle at 75% 15%, rgba(168, 85, 247, 0.12) 0%, transparent 45%),
            radial-gradient(circle at 20% 40%, rgba(147, 51, 234, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 75%, rgba(192, 132, 252, 0.06) 0%, transparent 45%),
            linear-gradient(180deg, #09090e 0%, #0d0c15 50%, #07070b 100%)
          `
        }}
      />

      {/* Light Mode Clean Lilac Base */}
      <div 
        className="absolute inset-0 opacity-0 dark:hidden light:opacity-100 transition-opacity duration-500"
        style={{
          background: `
            radial-gradient(circle at 80% 20%, rgba(192, 132, 252, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 20% 70%, rgba(168, 85, 247, 0.10) 0%, transparent 50%),
            linear-gradient(180deg, #ffffff 0%, #faf5ff 50%, #f3e8ff 100%)
          `
        }}
      />

      {/* 2. Interactive 3D Royal Violet & Lilac WebGL Animation */}
      <ThreeBackground />

      {/* 3. Subtle Tech Grid */}
      <div className="absolute inset-0 tech-grid opacity-30 dark:opacity-20" />

      {/* 4. Cosmic Purple Dust / Nebula Spray behind Hero Graphic */}
      <div 
        className="absolute -top-24 right-1/4 w-[40rem] h-[40rem] rounded-full blur-3xl opacity-25 dark:opacity-20 animate-pulse-slow pointer-events-none"
        style={{ backgroundColor: '#9333ea' }}
      />

      {/* Electric Lilac Glow Orb */}
      <div 
        className="absolute top-1/2 -left-20 w-[32rem] h-[32rem] rounded-full blur-3xl opacity-20 dark:opacity-15 animate-float pointer-events-none"
        style={{ backgroundColor: '#c084fc' }}
      />
    </div>
  );
};

import React, { useEffect, useRef, useState } from 'react';

interface Section3DWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export const Section3DWrapper: React.FC<Section3DWrapperProps> = ({ children, id, className = '' }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [slideState, setSlideState] = useState<'above' | 'visible' | 'below'>('below');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = rect.height;

      // Center of element relative to center of viewport
      const elementCenter = rect.top + elementHeight / 2;
      const viewportCenter = windowHeight / 2;
      const distanceFromCenter = elementCenter - viewportCenter;

      // Normalized progress: -1 (far above), 0 (centered), 1 (far below)
      const normProgress = Math.max(-1.5, Math.min(1.5, distanceFromCenter / (windowHeight * 0.75)));
      setProgress(normProgress);

      // Determine state
      if (rect.top <= windowHeight * 0.85 && rect.bottom >= windowHeight * 0.15) {
        setSlideState('visible');
      } else if (rect.bottom < windowHeight * 0.15) {
        setSlideState('above');
      } else {
        setSlideState('below');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Compute 3D slide transform style based on scroll progress
  const isVisible = slideState === 'visible';
  
  // Calculate dynamic 3D tilt and slide offset
  const translateY = Math.max(-120, Math.min(120, progress * 90));
  const rotateX = Math.max(-16, Math.min(16, progress * 14));
  const translateZ = Math.max(-80, Math.min(0, -Math.abs(progress) * 70));
  const scale = Math.max(0.90, Math.min(1, 1 - Math.abs(progress) * 0.08));
  const opacity = isVisible 
    ? Math.max(0.4, 1 - Math.abs(progress) * 0.7) 
    : 0.1;
  const blur = Math.max(0, (Math.abs(progress) - 0.4) * 6);

  return (
    <div
      ref={sectionRef}
      id={id}
      style={{
        perspective: '1400px',
        transformStyle: 'preserve-3d',
        transform: `perspective(1400px) translateY(${translateY}px) rotateX(${rotateX}deg) translateZ(${translateZ}px) scale(${scale})`,
        opacity: opacity,
        filter: blur > 0.5 ? `blur(${blur}px)` : 'none',
        transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.45s ease-out, filter 0.45s ease-out',
        willChange: 'transform, opacity, filter'
      }}
      className={`relative min-h-[50vh] transition-all ${className}`}
    >
      {children}
    </div>
  );
};

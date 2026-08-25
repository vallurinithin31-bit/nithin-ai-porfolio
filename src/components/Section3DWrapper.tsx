import React, { useEffect, useRef, useState } from 'react';

interface Section3DWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export const Section3DWrapper: React.FC<Section3DWrapperProps> = ({ children, id, className = '' }) => {
  const domRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Toggle visibility based on intersection
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else if (entry.boundingClientRect.top > 0) {
          // If scrolling back up above the element
          setIsVisible(false);
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -60px 0px'
      }
    );

    const currentEl = domRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) observer.unobserve(currentEl);
    };
  }, []);

  return (
    <div
      ref={domRef}
      id={id}
      style={{
        perspective: '1200px',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.85s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1)',
        transform: isVisible
          ? 'perspective(1200px) rotateX(0deg) translateZ(0px) translateY(0px) scale(1)'
          : 'perspective(1200px) rotateX(10deg) translateZ(-40px) translateY(60px) scale(0.96)',
        opacity: isVisible ? 1 : 0.18,
        willChange: 'transform, opacity'
      }}
      className={`relative ${className}`}
    >
      {children}
    </div>
  );
};

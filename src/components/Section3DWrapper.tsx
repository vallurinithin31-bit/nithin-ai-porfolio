import React, { useEffect, useRef, useState } from 'react';

interface Section3DWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export const Section3DWrapper: React.FC<Section3DWrapperProps> = ({ children, id, className = '' }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else if (entry.boundingClientRect.top > window.innerHeight * 0.9) {
          // Reset when scrolling back above so it animates again smoothly on scroll down
          setIsInView(false);
        }
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    const currentEl = sectionRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) observer.unobserve(currentEl);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      style={{
        perspective: '1200px',
        transformStyle: 'preserve-3d',
        transform: isInView
          ? 'perspective(1200px) translateY(0px) rotateX(0deg) scale(1)'
          : 'perspective(1200px) translateY(45px) rotateX(8deg) scale(0.97)',
        opacity: isInView ? 1 : 0.15,
        transition: 'transform 0.85s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'transform, opacity'
      }}
      className={`relative scroll-mt-20 ${className}`}
    >
      {children}
    </section>
  );
};

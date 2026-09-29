import React, { useEffect, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isTouch, setIsTouch] = useState(false);
  const [cursorState, setCursorState] = useState<'default' | 'project' | 'button' | 'image' | 'link'>('default');
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 300, mass: 0.5 };
  const ringSpringConfig = { damping: 22, stiffness: 150, mass: 0.8 };

  const dotX = useSpring(mouseX, springConfig);
  const dotY = useSpring(mouseY, springConfig);
  const ringX = useSpring(mouseX, ringSpringConfig);
  const ringY = useSpring(mouseY, ringSpringConfig);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
    if (!isVisible) setIsVisible(true);
  }, [mouseX, mouseY, isVisible]);

  const handleMouseLeave = useCallback(() => setIsVisible(false), []);

  const updateCursorState = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const el = target.closest('[data-cursor]') as HTMLElement | null;
    if (el) {
      const state = el.getAttribute('data-cursor') as 'default' | 'project' | 'button' | 'image' | 'link';
      setCursorState(state || 'default');
    } else {
      setCursorState('default');
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    // Detect touch devices
    const mq = window.matchMedia('(pointer: coarse)');
    if (mq.matches) {
      setIsTouch(true);
      return;
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousemove', updateCursorState, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousemove', updateCursorState);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove, updateCursorState, handleMouseLeave]);

  if (isTouch) return null;

  const getRingSize = () => {
    switch (cursorState) {
      case 'project': return 80;
      case 'image': return 80;
      case 'button': return 52;
      case 'link': return 52;
      default: return 36;
    }
  };

  const getRingBg = () => {
    switch (cursorState) {
      case 'button': return 'rgba(99,102,241,0.15)';
      default: return 'transparent';
    }
  };

  const getRingBorder = () => {
    switch (cursorState) {
      case 'project': return '1.5px solid rgba(255,255,255,0.9)';
      case 'image': return '1.5px solid rgba(255,255,255,0.9)';
      case 'button': return '1.5px solid rgba(99,102,241,0.8)';
      case 'link': return '1.5px solid rgba(255,255,255,0.5)';
      default: return '1.5px solid rgba(255,255,255,0.4)';
    }
  };

  const ringSize = getRingSize();
  const showLabel = cursorState === 'project' || cursorState === 'image';
  const label = cursorState === 'project' ? 'VIEW' : 'EXPLORE';

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99998] flex items-center justify-center"
        style={{
          x: ringX,
          y: ringY,
          width: ringSize,
          height: ringSize,
          marginLeft: -ringSize / 2,
          marginTop: -ringSize / 2,
          border: getRingBorder(),
          background: getRingBg(),
          borderRadius: '50%',
          opacity: isVisible ? 1 : 0,
          mixBlendMode: cursorState === 'default' ? 'difference' : 'normal',
        }}
        animate={{ width: ringSize, height: ringSize, marginLeft: -ringSize / 2, marginTop: -ringSize / 2 }}
        transition={{ type: 'spring', damping: 22, stiffness: 200 }}
      >
        {showLabel && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-white text-[10px] font-bold tracking-widest select-none"
          >
            {label}
          </motion.span>
        )}
      </motion.div>

      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999]"
        style={{
          x: dotX,
          y: dotY,
          width: cursorState === 'default' ? 6 : 0,
          height: cursorState === 'default' ? 6 : 0,
          marginLeft: cursorState === 'default' ? -3 : 0,
          marginTop: cursorState === 'default' ? -3 : 0,
          background: 'white',
          borderRadius: '50%',
          opacity: isVisible ? 1 : 0,
          mixBlendMode: 'difference',
        }}
        animate={{
          width: cursorState === 'default' ? 6 : 0,
          height: cursorState === 'default' ? 6 : 0,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400 }}
      />
    </>
  );
};

import React, { useEffect, useState } from 'react';

export const SlideNavigator: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    { id: 'home', label: '01 Home' },
    { id: 'what-i-do', label: '02 What I Do' },
    { id: 'projects', label: '03 Projects' },
    { id: 'toolkit-process', label: '04 Toolkit' },
    { id: 'certificates', label: '05 Certs' },
    { id: 'about', label: '06 About' },
    { id: 'experience', label: '07 Experience' },
    { id: 'achievements', label: '08 Honors' },
    { id: 'resume', label: '09 Resume' },
    { id: 'contact', label: '10 Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.4;
      slides.forEach((slide, index) => {
        const el = document.getElementById(slide.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSlide(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSlide = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 75;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col items-end gap-2.5 pointer-events-auto select-none">
      <div className="p-2 rounded-full bg-obsidian-surface/80 border border-lilac-500/20 backdrop-blur-xl shadow-2xl flex flex-col items-center gap-2">
        {slides.map((slide, index) => {
          const isActive = activeSlide === index;
          return (
            <button
              key={slide.id}
              onClick={() => scrollToSlide(slide.id)}
              className="group relative flex items-center justify-center p-1"
              title={slide.label}
              aria-label={`Slide ${slide.label}`}
            >
              {/* Tooltip on hover */}
              <span className="absolute right-7 px-2.5 py-1 rounded-lg bg-obsidian-surface border border-lilac-500/30 text-[10px] font-mono text-lilac-200 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
                {slide.label}
              </span>

              {/* 3D Slide Dot / Pill */}
              <div
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? 'w-2.5 h-6 bg-gradient-to-b from-lilac-400 to-purple-600 shadow-[0_0_10px_#c084fc]'
                    : 'w-2 h-2 bg-zinc-600 hover:bg-lilac-400/60'
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};

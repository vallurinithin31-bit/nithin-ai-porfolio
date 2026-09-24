import React, { useEffect, useState } from 'react';

export const SlideNavigator: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    { id: 'home', label: '01 Home' },
    { id: 'about', label: '02 About' },
    { id: 'experience', label: '03 Experience' },
    { id: 'skills', label: '04 Skills' },
    { id: 'projects', label: '05 Projects' },
    { id: 'ailab', label: '06 AI Lab' },
    { id: 'approach', label: '07 Approach' },
    { id: 'education', label: '08 Education' },
    { id: 'certificates', label: '09 Certificates' },
    { id: 'resume', label: '10 Resume' },
    { id: 'contact', label: '11 Contact' }
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
    <div className="fixed right-3 sm:right-5 top-1/2 -translate-y-1/2 z-30 hidden xl:flex flex-col items-end gap-2 pointer-events-auto select-none">
      <div className="p-2 rounded-full bg-dark-900/85 border border-dark-700 backdrop-blur-xl shadow-2xl flex flex-col items-center gap-1.5">
        {slides.map((slide, index) => {
          const isActive = activeSlide === index;
          return (
            <button
              key={slide.id}
              onClick={() => scrollToSlide(slide.id)}
              className="group relative flex items-center justify-center p-1 cursor-pointer"
              title={slide.label}
              aria-label={`Slide ${slide.label}`}
            >
              {/* Tooltip on hover */}
              <span className="absolute right-7 px-2.5 py-1 rounded-lg bg-dark-900 border border-dark-700 text-[10px] font-mono text-dark-200 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
                {slide.label}
              </span>

              {/* Slide Dot / Pill */}
              <div
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? 'w-2.5 h-5 bg-gradient-to-b from-cyan-400 to-indigo-600 shadow-[0_0_10px_#38bdf8]'
                    : 'w-1.5 h-1.5 bg-dark-600 hover:bg-cyan-400/70'
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SlideNavigator;

import React, { useState, useEffect } from 'react';
import { Menu, X, Bot } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'AI Lab', href: '#ailab' },
    { name: 'Approach', href: '#approach' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'ailab', 'approach', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of [...sections].reverse()) {
        const element = document.getElementById(sectionId);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(targetId);
      setIsOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-dark-950/85 backdrop-blur-xl border-b border-dark-800 py-3 shadow-2xl' 
        : 'bg-transparent py-4 sm:py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Left: Brand Logo & Terminal Tag */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Bot className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm sm:text-base tracking-tight text-white group-hover:text-cyan-300 transition-colors font-display">
                NITHIN<span className="text-cyan-400">.SAI</span>
              </span>
              <span className="text-[9px] font-mono text-dark-400 tracking-wider">
                AI PRODUCT BUILDER
              </span>
            </div>
          </a>

          {/* Center: Desktop Navigation Bar */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-mono text-dark-300">
            {navItems.map((item) => {
              const targetId = item.href.substring(1);
              const isActive = activeSection === targetId;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`transition-colors relative py-1 hover:text-white cursor-pointer ${
                    isActive ? 'text-cyan-300 font-semibold' : 'text-dark-300'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right: CTA 'Let's Connect' Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-electric-primary text-xs py-2 px-4 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Let's Connect</span>
              <span className="text-cyan-200">→</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-dark-900 border border-dark-700 text-dark-200 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden mt-3 pt-4 border-t border-dark-800 bg-dark-900/95 backdrop-blur-2xl rounded-2xl p-5 space-y-3 shadow-2xl">
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block text-xs font-mono text-dark-300 hover:text-white hover:bg-dark-800 p-2 rounded-xl transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
            
            <div className="pt-3 border-t border-dark-800">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="btn-electric-primary w-full text-center text-xs py-2.5 block"
              >
                Let's Connect →
              </a>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};

export default Navbar;

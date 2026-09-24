import React from 'react';
import { Mail, ArrowUp, Bot } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { LinkedinIcon, GithubIcon, InstagramIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'AI Lab', href: '#ailab' },
    { name: 'Approach', href: '#approach' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative border-t border-dark-800 bg-dark-950 py-12 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Brand & Title */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white text-xs font-bold">
                <Bot className="w-3.5 h-3.5" />
              </div>
              <span className="font-bold text-base tracking-tight text-white font-display">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs font-mono text-dark-400">
              {personalInfo.primaryPositioning}
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-mono text-dark-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-cyan-300 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-2.5">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl bg-dark-900 text-dark-300 hover:text-white hover:bg-dark-800 border border-dark-700 transition-all hover:scale-105"
            >
              <GithubIcon className="w-4 h-4 text-cyan-400" />
            </a>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl bg-dark-900 text-dark-300 hover:text-white hover:bg-dark-800 border border-dark-700 transition-all hover:scale-105"
            >
              <LinkedinIcon className="w-4 h-4 text-indigo-400" />
            </a>

            <a
              href="https://www.instagram.com/valluri_nani_/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="p-2.5 rounded-xl bg-dark-900 text-dark-300 hover:text-white hover:bg-dark-800 border border-dark-700 transition-all hover:scale-105"
            >
              <InstagramIcon className="w-4 h-4 text-purple-400" />
            </a>

            <a
              href={`mailto:${personalInfo.socials.email}`}
              aria-label="Email Transmission"
              className="p-2.5 rounded-xl bg-dark-900 text-dark-300 hover:text-white hover:bg-dark-800 border border-dark-700 transition-all hover:scale-105"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              title="Back to Top"
              className="p-2.5 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white shadow-electric-sm transition-all ml-2 hover:scale-105 cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright Line */}
        <div className="mt-8 pt-6 border-t border-dark-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs font-mono text-dark-500">
          <p>© 2026 {personalInfo.name}. Engineered with React, TypeScript &amp; Tailwind CSS.</p>
          <div className="flex items-center gap-1.5 text-cyan-400/80">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Available for AI Engineering &amp; Product Roles</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

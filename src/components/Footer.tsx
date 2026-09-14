import React from 'react';
import { Terminal, Mail, ArrowUp } from 'lucide-react';
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
    { name: 'Home', href: '#home' },
    { name: 'What I Do', href: '#what-i-do' },
    { name: 'Projects', href: '#projects' },
    { name: 'Toolkit & Process', href: '#toolkit-process' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative border-t border-lilac-500/20 bg-obsidian-surface/90 backdrop-blur-2xl py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Brand & Highlighted Name */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1.5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-lilac-400 via-purple-600 to-indigo-700 text-white flex items-center justify-center font-bold shadow-md shadow-purple-950/50">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="font-cinzel font-black text-xl sm:text-2xl uppercase tracking-wider text-white">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs font-cinzel text-lilac-300/80 tracking-wide">
              {personalInfo.title}
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-cinzel font-medium text-zinc-400 tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-lilac-300 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl bg-obsidian-surface text-zinc-400 hover:text-white hover:bg-purple-900/60 border border-lilac-500/20 transition-all hover:scale-105"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl bg-obsidian-surface text-zinc-400 hover:text-white hover:bg-purple-900/60 border border-lilac-500/20 transition-all hover:scale-105"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href="https://www.instagram.com/valluri_nani_/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2.5 rounded-xl bg-obsidian-surface text-zinc-400 hover:text-white hover:bg-purple-900/60 border border-lilac-500/20 transition-all hover:scale-105"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.socials.email}`}
              aria-label="Email"
              className="p-2.5 rounded-xl bg-obsidian-surface text-zinc-400 hover:text-white hover:bg-purple-900/60 border border-lilac-500/20 transition-all hover:scale-105"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              title="Back to Top"
              className="p-2.5 rounded-xl bg-gradient-to-r from-lilac-500 to-purple-600 text-white hover:from-lilac-400 hover:to-purple-500 shadow-md shadow-purple-950/50 transition-all ml-2 hover:scale-105"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright Line */}
        <div className="mt-10 pt-7 border-t border-lilac-500/15 text-center text-xs font-mono text-zinc-500">
          <p>© 2026 {personalInfo.name}. All Rights Reserved. Crafted with React, Tailwind CSS &amp; Three.js.</p>
        </div>
      </div>
    </footer>
  );
};

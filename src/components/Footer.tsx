import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
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
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-[#0c0d12] py-14 select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Brand & Title */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <span className="font-black text-xl tracking-tight text-white">
              {personalInfo.name}
            </span>
            <p className="text-xs font-mono text-zinc-400">
              {personalInfo.title} • Vijayawada, India
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-zinc-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors"
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
              aria-label="GitHub"
              className="p-2.5 rounded-full bg-[#12131a] text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10 transition-all hover:scale-105"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-full bg-[#12131a] text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10 transition-all hover:scale-105"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href="https://www.instagram.com/valluri_nani_/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2.5 rounded-full bg-[#12131a] text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10 transition-all hover:scale-105"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.socials.email}`}
              aria-label="Email"
              className="p-2.5 rounded-full bg-[#12131a] text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10 transition-all hover:scale-105"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              title="Back to Top"
              className="p-2.5 rounded-full bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-950/60 transition-all ml-2 hover:scale-105"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright Line */}
        <div className="mt-10 pt-6 border-t border-white/5 text-center text-xs font-mono text-zinc-500">
          <p>© 2026 {personalInfo.name}. All Rights Reserved. Built with React, TypeScript &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};

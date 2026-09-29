import React from 'react';
import { motion } from 'framer-motion';
import { Mail, FileText } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/[0.05] bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          {/* Brand */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-black text-white tracking-tight mb-1"
            >
              VALLURI NITHIN SAI
            </motion.h2>
            <p className="text-zinc-600 text-sm font-mono tracking-wide">AI/ML Developer</p>
            <p className="text-zinc-700 text-sm italic mt-2">
              "Building. Learning. Experimenting with AI."
            </p>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/nithin-sai-valluri-a947b0410/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                data-cursor="link"
                className="w-10 h-10 rounded-xl border border-white/[0.07] flex items-center justify-center text-zinc-500 hover:text-white hover:border-white/30 transition-all duration-200 hover:bg-white/[0.04]"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/vallurinithin31-bit"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                data-cursor="link"
                className="w-10 h-10 rounded-xl border border-white/[0.07] flex items-center justify-center text-zinc-500 hover:text-white hover:border-white/30 transition-all duration-200 hover:bg-white/[0.04]"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:vallurinithin989@gmail.com"
                title="Email"
                data-cursor="link"
                className="w-10 h-10 rounded-xl border border-white/[0.07] flex items-center justify-center text-zinc-500 hover:text-white hover:border-white/30 transition-all duration-200 hover:bg-white/[0.04]"
              >
                <Mail size={16} />
              </a>
              <a
                href="/resume.pdf"
                download
                title="Resume"
                data-cursor="link"
                className="w-10 h-10 rounded-xl border border-white/[0.07] flex items-center justify-center text-zinc-500 hover:text-white hover:border-white/30 transition-all duration-200 hover:bg-white/[0.04]"
              >
                <FileText size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.05] mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-zinc-700 font-mono">
            © 2026 Valluri Nithin Sai. All rights reserved.
          </p>
          <p className="text-[11px] text-zinc-800 font-mono">
            Built with React + Framer Motion + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

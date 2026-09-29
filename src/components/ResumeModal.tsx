import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Download } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onToast?: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9996] flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/95 backdrop-blur-2xl" onClick={onClose} />

          {/* Panel */}
          <motion.div
            className="relative z-10 flex flex-col h-full max-h-screen m-4 md:m-8 bg-zinc-950 border border-white/[0.08] rounded-2xl overflow-hidden"
            initial={{ scale: 0.96, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.96, y: 20, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06] shrink-0">
              <div>
                <p className="text-[10px] font-mono text-zinc-600 tracking-widest uppercase">Resume</p>
                <h3 className="text-base font-black text-white">Valluri Nithin Sai</h3>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold text-zinc-400 border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-colors"
                >
                  <ExternalLink size={12} /> Full Screen
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center gap-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-full transition-colors"
                >
                  <Download size={12} /> Download
                </a>
                <button
                  onClick={onClose}
                  className="text-zinc-600 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/[0.05]"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* PDF iframe */}
            <div className="flex-1 overflow-hidden">
              <iframe
                src="/resume.pdf"
                title="Valluri Nithin Sai Resume"
                className="w-full h-full"
                style={{ border: 'none', minHeight: '500px' }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

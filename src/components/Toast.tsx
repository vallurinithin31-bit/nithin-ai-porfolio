import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Info, AlertCircle, X } from 'lucide-react';

interface ToastProps {
  message: string;
  type?: 'success' | 'info' | 'error';
  onClose: () => void;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  type = 'success',
  onClose,
  duration = 4000,
}) => {
  useEffect(() => {
    const t = setTimeout(onClose, duration);
    return () => clearTimeout(t);
  }, [duration, onClose]);

  const config = {
    success: { icon: CheckCircle, color: 'text-emerald-400', border: 'border-emerald-500/30' },
    info: { icon: Info, color: 'text-sky-400', border: 'border-sky-500/30' },
    error: { icon: AlertCircle, color: 'text-red-400', border: 'border-red-500/30' },
  }[type];

  const Icon = config.icon;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.95 }}
        className={`fixed bottom-6 right-6 z-[9999] flex items-center gap-3 px-5 py-4 rounded-xl border ${config.border} bg-zinc-950/95 backdrop-blur-xl shadow-2xl max-w-sm`}
      >
        <Icon size={16} className={config.color} />
        <p className="text-sm text-zinc-200 font-medium">{message}</p>
        <button
          onClick={onClose}
          className="ml-2 text-zinc-600 hover:text-zinc-300 transition-colors"
        >
          <X size={14} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

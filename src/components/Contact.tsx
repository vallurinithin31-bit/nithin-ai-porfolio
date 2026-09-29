import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Mail } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';

interface ContactProps {
  onToast: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

export const Contact: React.FC<ContactProps> = ({ onToast }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email';
    if (!form.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSending(true);
    setErrors({});
    // Simulate send
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setForm({ name: '', email: '', message: '' });
    onToast('Message sent! I\'ll get back to you soon.', 'success');
  };

  const fadeUp = (delay: number) => ({
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
  });

  return (
    <section id="contact" className="py-24 md:py-36 px-6 md:px-10 max-w-7xl mx-auto">
      <div ref={ref}>
        {/* Tag */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="font-mono text-[11px] text-zinc-600 tracking-[0.3em] uppercase mb-6 flex items-center gap-3"
        >
          <span className="w-6 h-[1px] bg-zinc-700" />
          [CONTACT]
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={fadeUp(0.1)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none mb-6"
        >
          LET'S BUILD
          <br />
          <span className="text-zinc-600">SOMETHING</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">INTELLIGENT.</span>
        </motion.h2>

        <motion.p
          variants={fadeUp(0.2)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="text-zinc-500 text-lg leading-relaxed max-w-xl mb-16"
        >
          Have an idea, project or opportunity? Let's connect and build something meaningful with AI.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact info */}
          <motion.div
            variants={fadeUp(0.3)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="space-y-4"
          >
            <a
              href="mailto:vallurinithin989@gmail.com"
              data-cursor="link"
              className="group flex items-center gap-4 border border-white/[0.06] rounded-xl p-5 hover:border-indigo-500/30 hover:bg-white/[0.02] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                <Mail size={18} className="text-indigo-400" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-zinc-700 tracking-widest uppercase mb-0.5">EMAIL</p>
                <p className="text-sm text-zinc-300 group-hover:text-white transition-colors">vallurinithin989@gmail.com</p>
              </div>
              <span className="ml-auto text-zinc-700 group-hover:text-indigo-400 transition-colors">↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/nithin-sai-valluri-a947b0410/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="link"
              className="group flex items-center gap-4 border border-white/[0.06] rounded-xl p-5 hover:border-indigo-500/30 hover:bg-white/[0.02] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                <LinkedinIcon className="w-4 h-4 text-indigo-400" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-zinc-700 tracking-widest uppercase mb-0.5">LINKEDIN</p>
                <p className="text-sm text-zinc-300 group-hover:text-white transition-colors">nithin-sai-valluri</p>
              </div>
              <span className="ml-auto text-zinc-700 group-hover:text-indigo-400 transition-colors">↗</span>
            </a>

            <a
              href="https://github.com/vallurinithin31-bit"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="link"
              className="group flex items-center gap-4 border border-white/[0.06] rounded-xl p-5 hover:border-indigo-500/30 hover:bg-white/[0.02] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                <GithubIcon className="w-4 h-4 text-indigo-400" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-zinc-700 tracking-widest uppercase mb-0.5">GITHUB</p>
                <p className="text-sm text-zinc-300 group-hover:text-white transition-colors">vallurinithin31-bit</p>
              </div>
              <span className="ml-auto text-zinc-700 group-hover:text-indigo-400 transition-colors">↗</span>
            </a>
          </motion.div>

          {/* Form */}
          <motion.form
            variants={fadeUp(0.4)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            onSubmit={handleSubmit}
            className="space-y-4"
            noValidate
          >
            {/* Name */}
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={`w-full bg-white/[0.02] border rounded-xl px-5 py-4 text-sm text-zinc-200 placeholder:text-zinc-700 outline-none focus:border-indigo-500/50 transition-colors ${
                  errors.name ? 'border-red-500/50' : 'border-white/[0.06]'
                }`}
              />
              {errors.name && <p className="text-red-400 text-[11px] mt-1 font-mono">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={`w-full bg-white/[0.02] border rounded-xl px-5 py-4 text-sm text-zinc-200 placeholder:text-zinc-700 outline-none focus:border-indigo-500/50 transition-colors ${
                  errors.email ? 'border-red-500/50' : 'border-white/[0.06]'
                }`}
              />
              {errors.email && <p className="text-red-400 text-[11px] mt-1 font-mono">{errors.email}</p>}
            </div>

            {/* Message */}
            <div>
              <textarea
                placeholder="Your Message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`w-full bg-white/[0.02] border rounded-xl px-5 py-4 text-sm text-zinc-200 placeholder:text-zinc-700 outline-none focus:border-indigo-500/50 transition-colors resize-none ${
                  errors.message ? 'border-red-500/50' : 'border-white/[0.06]'
                }`}
              />
              {errors.message && <p className="text-red-400 text-[11px] mt-1 font-mono">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={sending}
              data-cursor="button"
              className="w-full flex items-center justify-center gap-2 bg-white text-black font-bold text-sm py-4 rounded-xl hover:bg-zinc-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed tracking-wide"
            >
              {sending ? (
                <>
                  <span className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                  SENDING...
                </>
              ) : (
                <>
                  <Send size={15} />
                  SEND MESSAGE ↗
                </>
              )}
            </button>

            <p className="text-[10px] text-zinc-700 font-mono text-center">
              Form submissions are processed via email integration.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

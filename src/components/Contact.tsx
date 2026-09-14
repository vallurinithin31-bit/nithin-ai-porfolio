import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Copy, 
  MessageSquare, 
  MapPin,
  Phone,
  ExternalLink,
  MessageCircle
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { LinkedinIcon, GithubIcon } from './Icons';
import { InstagramGlassCard } from './InstagramGlassCard';

interface ContactProps {
  onToast: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

export const Contact: React.FC<ContactProps> = ({ onToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onToast('Please fill in all required fields.', 'error');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      onToast(`Thank you, ${formData.name}! Opening your email client...`, 'success');

      const mailtoSubject = encodeURIComponent(formData.subject || `Portfolio Inquiry from ${formData.name}`);
      const mailtoBody = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:${personalInfo.socials.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.socials.email);
    onToast(`Email copied: ${personalInfo.socials.email}`, 'success');
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+918121467245');
    onToast('Phone number copied to clipboard: +91 8121467245', 'success');
  };

  return (
    <section id="contact" className="py-24 bg-[#0c0d12] relative select-none border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono tracking-widest uppercase mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mt-3 leading-relaxed">
            Have an internship opportunity, machine learning project, or technical question? Reach out through any channel below or drop a transmission.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-3xl bg-[#12131a] border border-white/10 space-y-6">
              <h3 className="text-lg font-bold text-white tracking-tight">
                Direct Communication Channels
              </h3>

              <div className="space-y-3">
                
                {/* Email Direct Contact */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-[#0c0d12] border border-white/10 hover:border-red-500/40 transition-all">
                  <a
                    href={`mailto:${personalInfo.socials.email}`}
                    className="flex items-center gap-3.5 flex-1 min-w-0"
                  >
                    <div className="p-2.5 rounded-xl bg-red-500/15 text-red-400 border border-red-500/30 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-white">Direct Email</h4>
                      <p className="text-xs text-zinc-400 font-mono truncate">{personalInfo.socials.email}</p>
                    </div>
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl bg-white/5 hover:bg-red-500 hover:text-white text-zinc-400 transition-all border border-white/10 ml-2"
                    title="Copy Email Address"
                    aria-label="Copy Email Address"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Phone & WhatsApp Card */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-[#0c0d12] border border-white/10 hover:border-red-500/40 transition-all">
                  <a
                    href="tel:+918121467245"
                    className="flex items-center gap-3.5 flex-1 min-w-0"
                  >
                    <div className="p-2.5 rounded-xl bg-red-500/15 text-red-400 border border-red-500/30 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-white">Phone Call</h4>
                      <p className="text-xs text-zinc-400 font-mono">+91 81214 67245</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-1.5 ml-2">
                    <a
                      href="https://wa.me/918121467245"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-emerald-950/40 text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all border border-emerald-500/30"
                      title="Chat on WhatsApp"
                      aria-label="Chat on WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                    </a>
                    <button
                      onClick={handleCopyPhone}
                      className="p-2 rounded-xl bg-white/5 hover:bg-red-500 hover:text-white text-zinc-400 transition-all border border-white/10"
                      title="Copy Phone Number"
                      aria-label="Copy Phone Number"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* LinkedIn Card */}
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#0c0d12] border border-white/10 hover:border-red-500/40 transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-red-500/15 text-red-400 border border-red-500/30 group-hover:scale-105 transition-transform">
                      <LinkedinIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-white">LinkedIn Profile</h4>
                      <p className="text-xs text-zinc-400 font-mono">linkedin.com/in/nithin-sai-valluri</p>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-red-400 transition-all" />
                </a>

                {/* GitHub Card */}
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#0c0d12] border border-white/10 hover:border-red-500/40 transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-red-500/15 text-red-400 border border-red-500/30 group-hover:scale-105 transition-transform">
                      <GithubIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-white">GitHub Profile</h4>
                      <p className="text-xs text-zinc-400 font-mono">github.com/vallurinithin31-bit</p>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-red-400 transition-all" />
                </a>

              </div>

              {/* Location indicator */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-red-500" />
                  <span>{personalInfo.socials.location}</span>
                </div>
                <span className="text-[10px] text-red-400 uppercase tracking-wider font-bold">REMOTE / ONSITE</span>
              </div>
            </div>

            {/* 3D Holographic Transparent Instagram Card */}
            <div className="w-full">
              <InstagramGlassCard onToast={onToast} />
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-9 rounded-3xl bg-[#12131a] border border-white/10 space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">Send A Message</h3>
                  <p className="text-xs text-zinc-400 font-mono">Dispatches directly to {personalInfo.socials.email}</p>
                </div>
                <div className="p-2.5 rounded-full bg-red-500/10 border border-red-500/25 text-red-400">
                  <MessageSquare className="w-4 h-4" />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono font-medium text-zinc-300 mb-1.5 uppercase tracking-wider">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Alex Johnson"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-2xl bg-[#0c0d12] border border-white/10 text-white placeholder-zinc-600 text-xs focus:outline-none focus:border-red-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono font-medium text-zinc-300 mb-1.5 uppercase tracking-wider">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-2xl bg-[#0c0d12] border border-white/10 text-white placeholder-zinc-600 text-xs focus:outline-none focus:border-red-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-mono font-medium text-zinc-300 mb-1.5 uppercase tracking-wider">
                    Subject / Topic
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Internship opportunity / Project collaboration"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-2xl bg-[#0c0d12] border border-white/10 text-white placeholder-zinc-600 text-xs focus:outline-none focus:border-red-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono font-medium text-zinc-300 mb-1.5 uppercase tracking-wider">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Hello Nithin, I came across your portfolio and would like to discuss an opportunity..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-2xl bg-[#0c0d12] border border-white/10 text-white placeholder-zinc-600 text-xs focus:outline-none focus:border-red-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-pill-crimson w-full justify-center text-xs py-3.5 mt-2"
                >
                  <Send className="w-4 h-4 mr-1" />
                  <span>{isSubmitting ? 'PREPARING TRANSMISSION...' : 'SEND MESSAGE'}</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

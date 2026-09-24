import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Copy, 
  MessageSquare, 
  MapPin,
  Phone,
  ExternalLink,
  MessageCircle,
  Clock
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

      const mailtoSubject = encodeURIComponent(formData.subject || `AI Product / Engineering Inquiry from ${formData.name}`);
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
    navigator.clipboard.writeText('+91 81214 67245');
    onToast('Phone number copied to clipboard: +91 81214 67245', 'success');
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-dark-950 relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-dark-900 border border-indigo-500/30 text-indigo-300 text-xs font-mono tracking-widest uppercase mb-3">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-display">
            Let's Build Something Intelligent.
          </h2>
          <p className="text-sm sm:text-base text-dark-300 max-w-2xl mt-3 leading-relaxed">
            Open for AI/ML engineering opportunities, AI automation projects, product collaborations, or technical discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6 border border-dark-700/80">
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-bold text-white font-display">
                  Direct Channels
                </h3>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-400">
                  <Clock className="w-3.5 h-3.5" />
                  <span>&lt; 24h Response</span>
                </div>
              </div>

              <div className="space-y-3">
                
                {/* Email Direct Contact */}
                <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-dark-950 border border-dark-800 hover:border-cyan-400/40 transition-all">
                  <a
                    href={`mailto:${personalInfo.socials.email}`}
                    className="flex items-center gap-3 flex-1 min-w-0"
                  >
                    <div className="p-2.5 rounded-xl bg-indigo-500/15 text-indigo-400 border border-indigo-500/30 shrink-0">
                      <Mail className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div className="truncate">
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-white font-mono">Email</h4>
                      <p className="text-xs text-dark-300 font-mono truncate">{personalInfo.socials.email}</p>
                    </div>
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl bg-dark-800 hover:bg-cyan-500 hover:text-dark-950 text-dark-400 transition-all border border-dark-700 ml-2 cursor-pointer"
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Phone Card */}
                <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-dark-950 border border-dark-800 hover:border-cyan-400/40 transition-all">
                  <a
                    href="tel:+918121467245"
                    className="flex items-center gap-3 flex-1 min-w-0"
                  >
                    <div className="p-2.5 rounded-xl bg-indigo-500/15 text-indigo-400 border border-indigo-500/30 shrink-0">
                      <Phone className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div className="truncate">
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-white font-mono">Phone / Call</h4>
                      <p className="text-xs text-dark-300 font-mono">+91 81214 67245</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-1.5 ml-2">
                    <a
                      href="https://wa.me/918121467245"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-emerald-950/40 text-emerald-400 hover:bg-emerald-500 hover:text-dark-950 transition-all border border-emerald-500/30"
                      title="WhatsApp"
                      aria-label="WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                    </a>
                    <button
                      onClick={handleCopyPhone}
                      className="p-2 rounded-xl bg-dark-800 hover:bg-cyan-500 hover:text-dark-950 text-dark-400 transition-all border border-dark-700 cursor-pointer"
                      title="Copy Phone"
                      aria-label="Copy Phone"
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
                  className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-dark-950 border border-dark-800 hover:border-cyan-400/40 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-indigo-500/15 text-indigo-400 border border-indigo-500/30 group-hover:scale-105 transition-transform">
                      <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-white font-mono">LinkedIn Profile</h4>
                      <p className="text-xs text-dark-300 font-mono">linkedin.com/in/nithin-sai-valluri</p>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-dark-400 group-hover:text-cyan-400 transition-all" />
                </a>

                {/* GitHub Card */}
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-dark-950 border border-dark-800 hover:border-cyan-400/40 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-indigo-500/15 text-indigo-400 border border-indigo-500/30 group-hover:scale-105 transition-transform">
                      <GithubIcon className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-white font-mono">GitHub Profile</h4>
                      <p className="text-xs text-dark-300 font-mono">github.com/vallurinithin31-bit</p>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-dark-400 group-hover:text-cyan-400 transition-all" />
                </a>

              </div>

              {/* Location */}
              <div className="pt-3 border-t border-dark-800 flex items-center justify-between text-xs font-mono text-dark-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{personalInfo.location}</span>
                </div>
                <span className="text-[10px] text-emerald-400 uppercase font-bold">AVAILABLE NOW</span>
              </div>
            </div>

            {/* Glass Instagram Card */}
            <div className="w-full">
              <InstagramGlassCard onToast={onToast} />
            </div>

          </div>

          {/* Right Column: Interactive Contact Transmission Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6 border border-dark-700/80">
              <div className="flex items-center justify-between border-b border-dark-800 pb-4">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white font-display">Send A Transmission</h3>
                  <p className="text-xs text-dark-400 font-mono">Dispatches directly to {personalInfo.socials.email}</p>
                </div>
                <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/25 text-indigo-400">
                  <MessageSquare className="w-4 h-4 text-cyan-400" />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono font-medium text-dark-300 mb-1.5 uppercase tracking-wider">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Sarah Connor"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-dark-700 text-white placeholder-dark-500 text-xs focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono font-medium text-dark-300 mb-1.5 uppercase tracking-wider">
                      Your Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="sarah@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-dark-700 text-white placeholder-dark-500 text-xs focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-mono font-medium text-dark-300 mb-1.5 uppercase tracking-wider">
                    Subject / Topic
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="AI Internship / Product Opportunity / Project Collaboration"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-dark-700 text-white placeholder-dark-500 text-xs focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono font-medium text-dark-300 mb-1.5 uppercase tracking-wider">
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Hi Nithin, I saw your AI projects and would like to discuss..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-dark-700 text-white placeholder-dark-500 text-xs focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-electric-primary w-full justify-center text-xs py-3 mt-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 mr-1.5" />
                  <span>{isSubmitting ? 'DISPATCHING TRANSMISSION...' : 'TRANSMIT MESSAGE'}</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;

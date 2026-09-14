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
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lilac-500/10 border border-lilac-500/25 text-lilac-300 text-xs font-mono tracking-widest uppercase mb-3 backdrop-blur-md">
            <Mail className="w-3.5 h-3.5" />
            <span>OPEN FOR OPPORTUNITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold text-white tracking-wider">
            Let's Connect &amp; Collaborate
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mt-4 leading-relaxed font-normal">
            Feel completely free to reach out for internship opportunities, AI/ML project collaborations, technical questions, or professional networking.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-lilac-400 to-transparent rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-panel rounded-3xl p-7 sm:p-9 ai-glow-card border border-lilac-500/20">
              <h3 className="text-lg font-cinzel font-bold text-white mb-2 tracking-wide">
                Direct Contact Channels
              </h3>
              <p className="text-xs text-zinc-400 mb-7 leading-relaxed font-normal">
                Choose any channel below to connect directly with me:
              </p>

              <div className="space-y-3.5">
                
                {/* Email Direct Contact */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-obsidian-surface border border-lilac-500/20 hover:border-lilac-400/50 transition-all">
                  <a
                    href={`mailto:${personalInfo.socials.email}`}
                    className="flex items-center gap-3.5 flex-1 min-w-0"
                  >
                    <div className="p-2.5 rounded-xl bg-lilac-500/15 text-lilac-300 border border-lilac-500/30 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="truncate">
                      <h4 className="text-sm font-cinzel font-bold text-white tracking-wide">Direct Email</h4>
                      <p className="text-xs text-lilac-300 font-mono truncate">{personalInfo.socials.email}</p>
                    </div>
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2.5 rounded-xl bg-lilac-500/10 hover:bg-lilac-500 hover:text-black text-lilac-300 transition-all border border-lilac-500/20 ml-2"
                    title="Copy Email Address"
                    aria-label="Copy Email Address"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>

                {/* Phone & WhatsApp Card */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-obsidian-surface border border-lilac-500/20 hover:border-lilac-400/50 transition-all">
                  <a
                    href="tel:+918121467245"
                    className="flex items-center gap-3.5 flex-1 min-w-0"
                  >
                    <div className="p-2.5 rounded-xl bg-lilac-500/15 text-lilac-300 border border-lilac-500/30 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="truncate">
                      <h4 className="text-sm font-cinzel font-bold text-white tracking-wide">Phone Call</h4>
                      <p className="text-xs text-lilac-300 font-mono">+91 8121467245</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-1.5 ml-2">
                    <a
                      href="https://wa.me/918121467245"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-emerald-950/40 text-emerald-300 hover:bg-emerald-600 hover:text-white transition-all border border-emerald-500/30"
                      title="Chat on WhatsApp"
                      aria-label="Chat on WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                    <button
                      onClick={handleCopyPhone}
                      className="p-2.5 rounded-xl bg-lilac-500/10 hover:bg-lilac-500 hover:text-black text-lilac-300 transition-all border border-lilac-500/20"
                      title="Copy Phone Number"
                      aria-label="Copy Phone Number"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* LinkedIn Card */}
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-obsidian-surface border border-lilac-500/20 hover:border-lilac-400/50 transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-lilac-500/15 text-lilac-300 border border-lilac-500/30 group-hover:scale-105 transition-transform">
                      <LinkedinIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-cinzel font-bold text-white tracking-wide">LinkedIn Profile</h4>
                      <p className="text-xs text-lilac-300 font-mono">linkedin.com/in/nithin-sai-valluri-a947b0410</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-lilac-400 group-hover:text-white transition-all" />
                </a>

                {/* GitHub Card */}
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-obsidian-surface border border-lilac-500/20 hover:border-lilac-400/50 transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-lilac-500/15 text-lilac-300 border border-lilac-500/30 group-hover:scale-105 transition-transform">
                      <GithubIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-cinzel font-bold text-white tracking-wide">GitHub Profile</h4>
                      <p className="text-xs text-lilac-300 font-mono">github.com/vallurinithin31-bit</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-lilac-400 group-hover:text-white transition-all" />
                </a>

              </div>

              {/* Location indicator */}
              <div className="mt-6 pt-4 border-t border-lilac-500/15 flex items-center gap-2.5 text-xs font-mono text-zinc-400">
                <MapPin className="w-3.5 h-3.5 text-lilac-400" />
                <span>{personalInfo.socials.location} • Available for Remote &amp; Onsite Internships</span>
              </div>
            </div>

            {/* 3D Holographic Transparent Instagram ID Card */}
            <InstagramGlassCard onToast={onToast} />

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-7 sm:p-9 ai-glow-card border border-lilac-500/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-lilac-500/15 text-lilac-300 border border-lilac-500/30">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-cinzel font-bold text-white tracking-wide">Send a Quick Message</h3>
                  <p className="text-xs text-lilac-300 font-mono">Dispatches directly to {personalInfo.socials.email}</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono font-medium text-lilac-300 mb-1.5 uppercase tracking-wider">
                      Your Name <span className="text-lilac-400">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Alex Johnson"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-obsidian-surface border border-lilac-500/20 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-lilac-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono font-medium text-lilac-300 mb-1.5 uppercase tracking-wider">
                      Your Email <span className="text-lilac-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-obsidian-surface border border-lilac-500/20 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-lilac-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-mono font-medium text-lilac-300 mb-1.5 uppercase tracking-wider">
                    Subject / Topic
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Internship opportunity / Project collaboration"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-obsidian-surface border border-lilac-500/20 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-lilac-400 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono font-medium text-lilac-300 mb-1.5 uppercase tracking-wider">
                    Message <span className="text-lilac-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Hello Nithin, I came across your portfolio and would like to discuss an opportunity..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-obsidian-surface border border-lilac-500/20 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-lilac-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-lilac-500 via-purple-600 to-indigo-600 hover:from-lilac-400 hover:to-indigo-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-purple-950/50 transition-all hover:scale-[1.01] disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Preparing Email...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

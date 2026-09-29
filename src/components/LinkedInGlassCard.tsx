import React, { useState } from 'react';
import { 
  MessageSquare, 
  Share2, 
  Check, 
  UserPlus,
  ShieldCheck,
  Briefcase,
  MapPin,
  Sparkles
} from 'lucide-react';
import { TiltCard3D } from './TiltCard3D';
import { LinkedinIcon } from './Icons';

interface LinkedInGlassCardProps {
  onToast?: (msg: string, type?: 'success' | 'info' | 'error') => void;
  className?: string;
}

export const LinkedInGlassCard: React.FC<LinkedInGlassCardProps> = ({ onToast, className = '' }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [copied, setCopied] = useState(false);

  const linkedinUrl = "https://www.linkedin.com/in/nithin-sai-valluri-a947b0410/";

  const handleConnectClick = () => {
    setIsConnected(!isConnected);
    window.open(linkedinUrl, "_blank", "noopener,noreferrer");
    if (onToast) {
      onToast("Opening LinkedIn profile...", "success");
    }
  };

  const handleMessageClick = () => {
    window.open(linkedinUrl, "_blank", "noopener,noreferrer");
    if (onToast) {
      onToast("Opening message on LinkedIn...", "info");
    }
  };

  const handleShareClick = () => {
    navigator.clipboard.writeText(linkedinUrl);
    setCopied(true);
    if (onToast) {
      onToast("LinkedIn profile link copied to clipboard!", "success");
    }
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <TiltCard3D maxTilt={12} className={`w-full max-w-md mx-auto ${className}`}>
      {/* Outer Glow Halo */}
      <div className="relative group">
        <div className="absolute -inset-1.5 rounded-[2.5rem] bg-gradient-to-r from-blue-600/30 via-indigo-600/30 to-sky-500/30 opacity-75 group-hover:opacity-100 blur-xl transition-all duration-500 pointer-events-none" />

        {/* 3D Holographic Frosted Glass ID Card Container */}
        <div className="relative rounded-[2.2rem] bg-zinc-950/75 backdrop-blur-2xl border border-white/20 p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.85)] overflow-hidden text-left flex flex-col justify-between select-none">
          
          {/* Subtle Acrylic Lighting Texture */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-blue-900/20 pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-indigo-600/25 blur-3xl pointer-events-none" />

          {/* Top Card Bar */}
          <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/10">
            <div className="inline-flex items-center gap-2">
              <div className="p-1.5 rounded-xl bg-gradient-to-tr from-blue-600 via-sky-500 to-indigo-600 text-white shadow-md">
                <LinkedinIcon className="w-3.5 h-3.5" />
              </div>
              <span className="font-mono text-xs font-bold text-white tracking-wider">
                nithin-sai-valluri
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="px-2.5 py-0.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-[10px] font-mono text-sky-300 font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-sky-400" />
                VERIFIED ID
              </span>
            </div>
          </div>

          {/* Profile Header: Avatar + Professional Stats */}
          <div className="relative z-10 py-5 flex items-center justify-between gap-4">
            
            {/* Holographic Glowing Avatar */}
            <div className="relative shrink-0 group/avatar">
              {/* Neon Halo Border */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-sky-400 via-blue-500 to-indigo-600 animate-spin-slow opacity-90 blur-[2px]" />
              
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-zinc-900 p-0.5 overflow-hidden border border-white/40 shadow-xl">
                <img 
                  src="/images/profile.jpg" 
                  alt="Valluri Nithin Sai"
                  className="w-full h-full object-cover group-hover/avatar:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src.indexOf('nithin.jpg') === -1) {
                      target.src = '/images/nithin.jpg';
                    } else {
                      target.style.display = 'none';
                    }
                  }}
                />
                {/* Fallback Initials */}
                <div className="w-full h-full bg-gradient-to-tr from-blue-900 to-zinc-900 flex items-center justify-center text-white font-black text-lg">
                  VN
                </div>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="flex-1 grid grid-cols-3 gap-2 text-center">
              <div className="p-2 sm:p-2.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-blue-500/40 transition-colors">
                <div className="text-base sm:text-lg font-black text-white">500+</div>
                <div className="text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-zinc-400">CONNECTS</div>
              </div>

              <div className="p-2 sm:p-2.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-indigo-500/40 transition-colors">
                <div className="text-base sm:text-lg font-black text-white">06+</div>
                <div className="text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-zinc-400">PROJECTS</div>
              </div>

              <div className="p-2 sm:p-2.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-sky-500/40 transition-colors">
                <div className="text-base sm:text-lg font-black text-white">09+</div>
                <div className="text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-zinc-400">CERTS</div>
              </div>
            </div>
          </div>

          {/* Bio & Details Area */}
          <div className="relative z-10 space-y-2.5 mb-5">
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-base sm:text-lg font-black text-white tracking-wide">
                  VALLURI NITHIN SAI
                </h4>
                <span className="text-zinc-500 text-xs font-mono">•</span>
                <span className="text-xs font-mono text-sky-400">@nithin-sai-valluri</span>
              </div>
              <p className="text-xs text-indigo-300 font-mono italic mt-0.5 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-sky-400" />
                "Building Intelligent Solutions with AI"
              </p>
            </div>

            <p className="text-xs sm:text-[13px] text-zinc-300 leading-relaxed font-sans">
              <span className="font-semibold text-white">AI/ML Developer</span> • Python, Generative AI & Autonomous Agent Builder • Amrita Sai Institute of Science & Technology
            </p>

            {/* Status Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-medium bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <Briefcase className="w-3 h-3 text-emerald-400" />
                Open to AI/ML Internships
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-medium bg-blue-500/10 border border-blue-500/30 text-sky-300">
                <MapPin className="w-3 h-3 text-sky-400" />
                Andhra Pradesh, India
              </span>
            </div>
          </div>

          {/* Interactive Action Buttons */}
          <div className="relative z-10 flex items-center gap-2.5 pt-2">
            <button
              onClick={handleConnectClick}
              data-cursor="button"
              className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 flex items-center justify-center gap-2 transition-all duration-300 active:scale-95"
            >
              <UserPlus className="w-4 h-4" />
              <span>{isConnected ? "CONNECTED" : "CONNECT ↗"}</span>
            </button>

            <button
              onClick={handleMessageClick}
              data-cursor="button"
              className="py-3 px-5 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 active:scale-95"
            >
              <MessageSquare className="w-4 h-4 text-sky-300" />
              <span>MESSAGE</span>
            </button>

            <button
              onClick={handleShareClick}
              data-cursor="button"
              title="Copy LinkedIn URL"
              className="p-3 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 text-zinc-300 hover:text-white transition-all duration-300 active:scale-95 flex items-center justify-center"
            >
              {copied ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <Share2 className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Card Footer Microtext */}
          <div className="relative z-10 pt-4 mt-2 border-t border-white/[0.08] text-center">
            <span className="text-[10px] font-mono text-zinc-500 tracking-wider">
              Holographic Identity Card • linkedin.com/in/nithin-sai-valluri
            </span>
          </div>

        </div>
      </div>
    </TiltCard3D>
  );
};

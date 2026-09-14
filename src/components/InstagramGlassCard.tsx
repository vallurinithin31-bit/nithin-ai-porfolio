import React, { useState } from 'react';
import { 
  MessageCircle, 
  Share2, 
  Check, 
  Heart,
  Flame,
  UserPlus
} from 'lucide-react';
import { TiltCard3D } from './TiltCard3D';
import { InstagramIcon } from './Icons';

interface InstagramGlassCardProps {
  onToast?: (msg: string, type?: 'success' | 'info' | 'error') => void;
  className?: string;
}

export const InstagramGlassCard: React.FC<InstagramGlassCardProps> = ({ onToast, className = '' }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
    window.open("https://www.instagram.com/valluri_nani_/", "_blank", "noopener,noreferrer");
    if (onToast) {
      onToast("Opening @valluri_nani_ on Instagram!", "success");
    }
  };

  const handleMessageClick = () => {
    window.open("https://ig.me/m/valluri_nani_", "_blank", "noopener,noreferrer");
    if (onToast) {
      onToast("Opening Direct Message with @valluri_nani_ on Instagram", "info");
    }
  };

  const handleShareClick = () => {
    navigator.clipboard.writeText("https://www.instagram.com/valluri_nani_/");
    setCopied(true);
    if (onToast) {
      onToast("Instagram profile link copied to clipboard!", "success");
    }
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <TiltCard3D maxTilt={14} className={`w-full max-w-md mx-auto ${className}`}>
      {/* Outer Glow Halo */}
      <div className="relative group">
        <div className="absolute -inset-1.5 rounded-[2.5rem] bg-gradient-to-r from-pink-500/30 via-purple-600/30 to-amber-500/30 opacity-70 group-hover:opacity-100 blur-xl transition-all duration-500 pointer-events-none" />

        {/* 3D Holographic Frosted Glass ID Card Container */}
        <div className="relative rounded-[2.2rem] bg-zinc-950/60 backdrop-blur-2xl border border-white/20 p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden text-left flex flex-col justify-between select-none">
          
          {/* Subtle Acrylic Noise/Grid Texture */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-purple-900/20 pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-pink-500/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-purple-600/20 blur-3xl pointer-events-none" />

          {/* Top Card Bar */}
          <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/10">
            <div className="inline-flex items-center gap-2">
              <div className="p-1.5 rounded-xl bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 text-white shadow-md">
                <InstagramIcon className="w-3.5 h-3.5" />
              </div>
              <span className="font-mono text-xs font-bold text-white tracking-wider">
                valluri_nani_
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="px-2.5 py-0.5 rounded-full bg-pink-500/15 border border-pink-500/30 text-[10px] font-mono text-pink-300 font-semibold flex items-center gap-1">
                <Flame className="w-3 h-3 text-pink-400" />
                VERIFIED ID
              </span>
            </div>
          </div>

          {/* Profile Header: Avatar + Stats */}
          <div className="relative z-10 py-5 flex items-center justify-between gap-4">
            
            {/* Holographic Glowing Avatar */}
            <div className="relative shrink-0 group/avatar">
              {/* Neon Halo Border */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 animate-spin-slow opacity-90 blur-[2px]" />
              
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-zinc-900 p-0.5 overflow-hidden border border-white/40 shadow-xl">
                <img 
                  src="/images/instagram-avatar.png" 
                  alt="Valluri Nani"
                  className="w-full h-full object-cover group-hover/avatar:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                {/* Fallback Icon */}
                <div className="w-full h-full bg-gradient-to-tr from-purple-900 to-zinc-900 flex items-center justify-center text-white font-cinzel font-black text-lg">
                  VN
                </div>
              </div>

              {/* Status Heart Badge */}
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-tr from-pink-600 to-purple-600 border border-white/60 flex items-center justify-center shadow-lg">
                <Heart className="w-3 h-3 text-white fill-white animate-pulse" />
              </div>
            </div>

            {/* Real Instagram Stats Counter */}
            <div className="flex-1 grid grid-cols-3 gap-2 text-center">
              <div className="p-2 rounded-2xl bg-white/5 border border-white/10 hover:border-pink-500/40 transition-colors">
                <div className="text-base sm:text-lg font-bold text-white tracking-tight">5</div>
                <div className="text-[10px] font-mono text-zinc-400 uppercase">Posts</div>
              </div>
              <div className="p-2 rounded-2xl bg-white/5 border border-white/10 hover:border-pink-500/40 transition-colors">
                <div className="text-base sm:text-lg font-bold text-white tracking-tight">353</div>
                <div className="text-[10px] font-mono text-zinc-400 uppercase">Followers</div>
              </div>
              <div className="p-2 rounded-2xl bg-white/5 border border-white/10 hover:border-pink-500/40 transition-colors">
                <div className="text-base sm:text-lg font-bold text-white tracking-tight">354</div>
                <div className="text-[10px] font-mono text-zinc-400 uppercase">Following</div>
              </div>
            </div>

          </div>

          {/* Bio & Links Section */}
          <div className="relative z-10 space-y-2.5 pb-5">
            <div>
              <h4 className="text-sm sm:text-base font-cinzel font-bold text-white flex items-center gap-1.5">
                <span>VALLURI NANI</span>
                <span className="text-xs text-zinc-400 font-sans font-normal">• @valluri_nani_</span>
              </h4>
              <p className="text-xs text-pink-300/90 font-mono italic mt-0.5">
                ~𝓝💫 ~𝐼𝒻 𝓉𝒽𝑒 𝓌𝑜𝓇𝓁𝒹 𝓌𝒶𝓈 𝑒𝓃𝒹𝒾𝓃𝑔🥀
              </p>
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed font-normal">
              AI &amp; Machine Learning Engineer • Python &amp; Autonomous Agents Developer • Amrita Sai Institute of Science &amp; Technology
            </p>

            {/* Linked Profile Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/5 border border-white/15 text-[11px] font-mono text-zinc-300 hover:border-pink-400/50 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                @valluri_nani_ (Threads)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/5 border border-white/15 text-[11px] font-mono text-zinc-300 hover:border-blue-400/50 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Valluri Nithin (Facebook)
              </span>
            </div>
          </div>

          {/* Action Buttons Row */}
          <div className="relative z-10 grid grid-cols-12 gap-2 pt-4 border-t border-white/10">
            
            {/* Primary Follow Button */}
            <button
              onClick={handleFollowClick}
              className="col-span-6 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 hover:from-pink-400 hover:to-indigo-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-purple-950/50 hover:scale-[1.02] active:scale-95 transition-all"
            >
              <UserPlus className="w-3.5 h-3.5" />
              <span>{isFollowing ? "Following" : "Follow"}</span>
            </button>

            {/* DM Message Button */}
            <button
              onClick={handleMessageClick}
              className="col-span-4 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs tracking-wider border border-white/15 hover:scale-[1.02] active:scale-95 transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>DM</span>
            </button>

            {/* Share / Copy Button */}
            <button
              onClick={handleShareClick}
              className="col-span-2 inline-flex items-center justify-center p-2.5 rounded-2xl bg-white/10 hover:bg-white/15 text-zinc-300 hover:text-white border border-white/15 transition-all hover:scale-105"
              title="Copy Profile Link"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            </button>

          </div>

          {/* Bottom Card Watermark */}
          <div className="relative z-10 text-[9px] font-mono text-zinc-500 text-center pt-3">
            Holographic Social Card • instagram.com/valluri_nani_
          </div>

        </div>
      </div>
    </TiltCard3D>
  );
};

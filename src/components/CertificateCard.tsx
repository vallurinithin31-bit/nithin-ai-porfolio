import React, { useState } from 'react';
import { 
  Award, 
  ExternalLink, 
  Download, 
  Calendar, 
  Building, 
  Hash, 
  Eye
} from 'lucide-react';
import { Certificate } from '../types';

interface CertificateCardProps {
  certificate: Certificate;
  onOpenModal: (cert: Certificate) => void;
  onToast: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

export const CertificateCard: React.FC<CertificateCardProps> = ({
  certificate,
  onOpenModal,
  onToast
}) => {
  const [imgError, setImgError] = useState(false);

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (certificate.downloadUrl) {
      const link = document.createElement('a');
      link.href = certificate.downloadUrl;
      link.download = `${certificate.title.replace(/\s+/g, '_')}.jpg`;
      link.click();
      onToast(`Downloading ${certificate.title}`, 'success');
    } else {
      onToast('Downloadable certificate file will be available once uploaded.', 'info');
    }
  };

  const isRealImage = certificate.image && !certificate.image.endsWith('.svg') && !imgError;

  return (
    <div
      onClick={() => onOpenModal(certificate)}
      className="glass-panel rounded-3xl p-6 sm:p-7 border border-lilac-500/20 ai-glow-card flex flex-col justify-between cursor-pointer group transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-purple-950/50"
    >
      <div>
        {/* Certificate Preview Frame with Real Image Support */}
        <div className="relative h-48 sm:h-52 w-full rounded-2xl bg-gradient-to-b from-purple-950/40 via-obsidian-surface to-obsidian-base border border-lilac-500/20 mb-5 flex flex-col items-center justify-center text-center overflow-hidden group-hover:border-lilac-400/50 transition-colors">
          
          {isRealImage ? (
            <img
              src={certificate.image}
              alt={certificate.title}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="p-5 flex flex-col items-center justify-center">
              <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />
              <Award className="w-10 h-10 text-lilac-300 mb-2 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-xs font-cinzel font-bold text-white line-clamp-1 px-4 tracking-wide">
                {certificate.title}
              </span>
              <span className="text-[11px] font-mono text-zinc-400 mt-1">
                {certificate.issuer}
              </span>
            </div>
          )}

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity backdrop-blur-[2px]">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lilac-500 text-black text-xs font-bold uppercase tracking-wider shadow-xl">
              <Eye className="w-3.5 h-3.5" /> View Certificate
            </span>
          </div>
        </div>

        {/* Certificate Category Pill */}
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <span className="px-3 py-0.5 rounded-full text-[10px] font-mono bg-lilac-500/10 text-lilac-300 border border-lilac-500/20">
            {certificate.category}
          </span>
          <span className="text-[11px] font-mono text-zinc-400 flex items-center gap-1">
            <Calendar className="w-3 h-3 text-lilac-400" /> {certificate.date}
          </span>
        </div>

        {/* Title & Issuer */}
        <h3 className="text-base font-cinzel font-bold text-white group-hover:text-lilac-200 transition-colors mb-1.5 tracking-wide">
          {certificate.title}
        </h3>
        
        <p className="text-xs font-mono text-zinc-400 flex items-center gap-1.5 mb-3">
          <Building className="w-3.5 h-3.5 text-lilac-400 shrink-0" />
          <span>{certificate.issuer}</span>
        </p>

        {certificate.credentialId && (
          <p className="text-[11px] font-mono text-zinc-400 mb-3 flex items-center gap-1">
            <Hash className="w-3 h-3 text-lilac-300" />
            <span>ID: <code className="text-lilac-200">{certificate.credentialId}</code></span>
          </p>
        )}

        <p className="text-xs text-zinc-400 line-clamp-2 mb-5 leading-relaxed">
          {certificate.description}
        </p>

        {/* Skills Chips */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {certificate.skills.map((skill) => (
            <span
              key={skill}
              className="px-2.5 py-0.5 rounded-md bg-lilac-950/30 text-[10px] font-mono text-lilac-200 border border-lilac-500/20"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Card Action Buttons */}
      <div className="pt-4 border-t border-lilac-500/15 flex items-center justify-between gap-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpenModal(certificate);
          }}
          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-lilac-300 hover:text-white"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>View Image</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={handleDownload}
            aria-label={`Download ${certificate.title}`}
            title="Download Certificate File"
            className="p-2 rounded-lg bg-obsidian-surface hover:bg-lilac-950/50 text-zinc-300 hover:text-white text-xs transition-colors border border-lilac-500/20"
          >
            <Download className="w-3.5 h-3.5" />
          </button>

          {certificate.credentialUrl && (
            <a
              href={certificate.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label="Verify credential online"
              title="Verify Credential"
              className="p-2 rounded-lg bg-lilac-500/15 hover:bg-lilac-500 hover:text-black text-lilac-300 border border-lilac-500/30 text-xs transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

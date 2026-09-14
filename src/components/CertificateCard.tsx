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
import { TiltCard3D } from './TiltCard3D';

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
    <TiltCard3D className="h-full">
      <div
        onClick={() => onOpenModal(certificate)}
        className="rounded-3xl p-6 sm:p-7 bg-[#12131a] border border-white/10 hover:border-red-500/40 flex flex-col justify-between cursor-pointer group transition-all duration-300 shadow-lg h-full"
      >
        <div>
          {/* Certificate Preview Frame with Real Image Support */}
          <div className="relative h-48 sm:h-52 w-full rounded-2xl bg-[#0c0d12] border border-white/10 mb-5 flex flex-col items-center justify-center text-center overflow-hidden group-hover:border-red-500/40 transition-colors">
            
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
                <Award className="w-10 h-10 text-red-400 mb-2 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs font-bold text-white max-w-[200px] line-clamp-2">
                  {certificate.title}
                </span>
                <span className="text-[10px] font-mono text-zinc-400 mt-1">
                  {certificate.issuer}
                </span>
              </div>
            )}

            {/* Top Tag */}
            <div className="absolute top-3 left-3 z-10">
              <span className="px-3 py-1 rounded-full text-[10px] font-mono bg-black/60 text-white border border-white/20 backdrop-blur-md">
                {certificate.category}
              </span>
            </div>

            {/* Hover View Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
              <span className="p-2.5 rounded-full bg-red-600 text-white font-bold transform scale-90 group-hover:scale-100 transition-transform shadow-lg">
                <Eye className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Certificate Metadata */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white group-hover:text-red-400 transition-colors line-clamp-2 tracking-tight">
              {certificate.title}
            </h3>

            <div className="space-y-1.5 text-xs text-zinc-400 font-mono">
              <div className="flex items-center gap-2">
                <Building className="w-3.5 h-3.5 text-red-400 shrink-0" />
                <span className="text-zinc-300 truncate">{certificate.issuer}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-red-400 shrink-0" />
                <span>{certificate.date}</span>
              </div>
              {certificate.credentialId && (
                <div className="flex items-center gap-2">
                  <Hash className="w-3.5 h-3.5 text-red-400 shrink-0" />
                  <span className="truncate text-zinc-500">{certificate.credentialId}</span>
                </div>
              )}
            </div>

            {/* Skills Tag Pills */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {certificate.skills.slice(0, 3).map((skill, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 rounded-lg text-[10px] font-mono bg-[#0c0d12] border border-white/10 text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Button Row */}
        <div className="pt-5 mt-5 border-t border-white/10 flex items-center justify-between">
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
            title="Download Certificate"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download</span>
          </button>

          <span className="inline-flex items-center gap-1 text-xs font-mono text-red-400 group-hover:text-white transition-colors">
            <span>Inspect</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </TiltCard3D>
  );
};

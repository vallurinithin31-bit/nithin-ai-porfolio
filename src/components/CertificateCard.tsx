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
        className="glass-panel rounded-3xl p-5 sm:p-6 flex flex-col justify-between cursor-pointer group transition-all duration-300 shadow-xl border border-dark-700/80 hover:border-cyan-400/50 hover:shadow-electric-md h-full"
      >
        <div>
          {/* Certificate Preview Frame with Real Image Support */}
          <div className="relative h-44 sm:h-48 w-full rounded-2xl bg-dark-950 border border-dark-700 mb-4 flex flex-col items-center justify-center text-center overflow-hidden group-hover:border-cyan-400/40 transition-colors">
            
            {isRealImage ? (
              <img
                src={certificate.image}
                alt={certificate.title}
                onError={() => setImgError(true)}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="p-4 flex flex-col items-center justify-center">
                <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />
                <Award className="w-10 h-10 text-indigo-400 mb-2 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs font-bold text-white max-w-[200px] line-clamp-2">
                  {certificate.title}
                </span>
                <span className="text-[10px] font-mono text-dark-400 mt-1">
                  {certificate.issuer}
                </span>
              </div>
            )}

            {/* Top Category Tag */}
            <div className="absolute top-3 left-3 z-10">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-dark-900/90 text-cyan-300 border border-dark-700 backdrop-blur-md">
                {certificate.category}
              </span>
            </div>

            {/* Hover View Overlay */}
            <div className="absolute inset-0 bg-dark-950/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
              <span className="p-2.5 rounded-full bg-cyan-500 text-dark-950 font-bold transform scale-90 group-hover:scale-100 transition-transform shadow-lg">
                <Eye className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Certificate Metadata */}
          <div className="space-y-2.5">
            <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2 tracking-tight font-display">
              {certificate.title}
            </h3>

            <div className="space-y-1 text-xs text-dark-400 font-mono">
              <div className="flex items-center gap-2">
                <Building className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span className="text-dark-200 truncate">{certificate.issuer}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>{certificate.date}</span>
              </div>
              {certificate.credentialId && (
                <div className="flex items-center gap-2">
                  <Hash className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span className="truncate text-dark-400 text-[11px]">{certificate.credentialId}</span>
                </div>
              )}
            </div>

            {/* Skills Tag Pills */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {certificate.skills.slice(0, 3).map((skill, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded-lg text-[10px] font-mono bg-dark-800 border border-dark-700 text-dark-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Button Row */}
        <div className="pt-4 mt-4 border-t border-dark-800 flex items-center justify-between">
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-dark-400 hover:text-white transition-colors cursor-pointer"
            title="Download Certificate"
          >
            <Download className="w-3.5 h-3.5 text-cyan-400" />
            <span>Download</span>
          </button>

          <span className="inline-flex items-center gap-1 text-xs font-mono text-indigo-400 group-hover:text-cyan-300 transition-colors">
            <span>Inspect</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </TiltCard3D>
  );
};

export default CertificateCard;

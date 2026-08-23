import React, { useEffect, useCallback, useState } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  ExternalLink, 
  Award, 
  Calendar, 
  Building, 
  CheckCircle2
} from 'lucide-react';
import { Certificate } from '../types';

interface CertificateModalProps {
  certificate: Certificate | null;
  certificatesList: Certificate[];
  onClose: () => void;
  onSelectCertificate: (cert: Certificate) => void;
  onToast: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  certificate,
  certificatesList,
  onClose,
  onSelectCertificate,
  onToast
}) => {
  const [imgError, setImgError] = useState(false);

  const currentIndex = certificate
    ? certificatesList.findIndex((c) => c.id === certificate.id)
    : -1;

  const handlePrev = useCallback(() => {
    setImgError(false);
    if (currentIndex > 0) {
      onSelectCertificate(certificatesList[currentIndex - 1]);
    } else {
      onSelectCertificate(certificatesList[certificatesList.length - 1]);
    }
  }, [currentIndex, certificatesList, onSelectCertificate]);

  const handleNext = useCallback(() => {
    setImgError(false);
    if (currentIndex < certificatesList.length - 1) {
      onSelectCertificate(certificatesList[currentIndex + 1]);
    } else {
      onSelectCertificate(certificatesList[0]);
    }
  }, [currentIndex, certificatesList, onSelectCertificate]);

  useEffect(() => {
    setImgError(false);
  }, [certificate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!certificate) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [certificate, onClose, handlePrev, handleNext]);

  if (!certificate) return null;

  const handleDownload = () => {
    if (certificate.downloadUrl) {
      const link = document.createElement('a');
      link.href = certificate.downloadUrl;
      link.download = `${certificate.title.replace(/\s+/g, '_')}.jpg`;
      link.click();
      onToast(`Downloading certificate: ${certificate.title}`, 'success');
    } else {
      onToast('Certificate file download initiated.', 'info');
    }
  };

  const isRealImage = certificate.image && !certificate.image.endsWith('.svg') && !imgError;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-2xl animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-3xl bg-obsidian-surface border border-lilac-500/30 shadow-2xl p-6 sm:p-9 flex flex-col justify-between text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Controls */}
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-lilac-500/20">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-lilac-500/15 text-lilac-300 border border-lilac-500/30">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-lilac-400">
                Verified Credential ({currentIndex + 1} of {certificatesList.length})
              </span>
              <h2 id="cert-modal-title" className="text-lg sm:text-xl font-cinzel font-bold text-white tracking-wide">
                {certificate.title}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close certificate lightbox modal"
            className="p-2 rounded-xl bg-obsidian-base hover:bg-lilac-500 hover:text-black text-zinc-400 border border-lilac-500/25 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
          
          {/* Certificate Image Frame */}
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden bg-obsidian-base border border-lilac-500/25 aspect-[4/3] flex items-center justify-center shadow-inner">
            {isRealImage ? (
              <img
                src={certificate.image}
                alt={certificate.title}
                onError={() => setImgError(true)}
                className="w-full h-full object-contain p-2"
              />
            ) : (
              <div className="p-8 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-lilac-500/15 text-lilac-300 flex items-center justify-center mb-3">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-base font-cinzel font-bold text-white mb-1">
                  {certificate.title}
                </h3>
                <p className="text-xs font-mono text-zinc-400">
                  {certificate.issuer} • {certificate.date}
                </p>
              </div>
            )}
          </div>

          {/* Metadata & Skill Breakdown */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <span className="px-3 py-0.5 rounded-full text-xs font-mono bg-lilac-500/15 text-lilac-300 border border-lilac-500/30">
                {certificate.category}
              </span>

              <h3 className="text-xl font-cinzel font-bold text-white mt-3 mb-1 tracking-wide">
                {certificate.title}
              </h3>

              <p className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                <Building className="w-4 h-4 text-lilac-400" />
                <span>{certificate.issuer}</span>
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-obsidian-base border border-lilac-500/15">
                <span className="text-zinc-500 block text-[10px]">ISSUED DATE</span>
                <span className="text-zinc-200 flex items-center gap-1 mt-0.5">
                  <Calendar className="w-3.5 h-3.5 text-lilac-400" /> {certificate.date}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-obsidian-base border border-lilac-500/15">
                <span className="text-zinc-500 block text-[10px]">VERIFICATION</span>
                <span className="text-lilac-300 flex items-center gap-1 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-lilac-400" /> Authentic
                </span>
              </div>
            </div>

            {certificate.credentialId && (
              <div className="p-3 rounded-xl bg-obsidian-base border border-lilac-500/15 text-xs font-mono">
                <span className="text-zinc-500 block text-[10px]">CREDENTIAL ID</span>
                <code className="text-lilac-300 break-all">{certificate.credentialId}</code>
              </div>
            )}

            <p className="text-xs text-zinc-300 leading-relaxed">
              {certificate.description}
            </p>

            <div>
              <span className="text-[10px] font-cinzel font-bold uppercase tracking-widest text-zinc-400 block mb-2">
                Demonstrated Competencies:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {certificate.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg bg-lilac-950/40 border border-lilac-500/20 text-xs font-mono text-lilac-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-lilac-500 to-purple-600 hover:from-lilac-400 hover:to-purple-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-purple-950/50 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download File</span>
              </button>

              {certificate.credentialUrl && (
                <a
                  href={certificate.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-obsidian-base hover:bg-lilac-950/40 text-lilac-300 border border-lilac-500/30 text-xs font-semibold uppercase tracking-wider transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Verify Credential</span>
                </a>
              )}
            </div>

          </div>

        </div>

        {/* Modal Pagination Footer */}
        <div className="flex items-center justify-between pt-5 mt-6 border-t border-lilac-500/20 text-xs font-mono text-zinc-400">
          <button
            onClick={handlePrev}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-obsidian-base hover:bg-lilac-950/40 border border-lilac-500/20 text-zinc-300 hover:text-white transition-all"
          >
            <ChevronLeft className="w-4 h-4 text-lilac-400" />
            <span>Previous</span>
          </button>

          <span className="text-zinc-500 hidden sm:inline">
            Use keyboard <kbd className="px-1.5 py-0.5 rounded bg-obsidian-base border border-lilac-500/20 text-zinc-300">←</kbd> <kbd className="px-1.5 py-0.5 rounded bg-obsidian-base border border-lilac-500/20 text-zinc-300">→</kbd> to navigate
          </span>

          <button
            onClick={handleNext}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-obsidian-base hover:bg-lilac-950/40 border border-lilac-500/20 text-zinc-300 hover:text-white transition-all"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4 text-lilac-400" />
          </button>
        </div>

      </div>
    </div>
  );
};

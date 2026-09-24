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
  ShieldCheck
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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-3xl bg-dark-900 border border-indigo-500/40 shadow-2xl p-6 sm:p-8 flex flex-col justify-between text-left my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Controls */}
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-dark-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/25">
              <Award className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">
                Verified Credential ({currentIndex + 1} of {certificatesList.length})
              </span>
              <h2 id="cert-modal-title" className="text-lg sm:text-xl font-bold text-white tracking-tight font-display">
                {certificate.title}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close certificate lightbox modal"
            className="p-2 rounded-xl bg-dark-800 hover:bg-dark-700 text-dark-300 hover:text-white border border-dark-700 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
          
          {/* Certificate Image Frame */}
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden bg-dark-950 border border-dark-700 aspect-[4/3] flex items-center justify-center shadow-inner">
            {isRealImage ? (
              <img
                src={certificate.image}
                alt={certificate.title}
                onError={() => setImgError(true)}
                className="w-full h-full object-contain p-2"
              />
            ) : (
              <div className="p-8 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-3">
                  <Award className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-base font-bold text-white mb-1 font-display">
                  {certificate.title}
                </h3>
                <p className="text-xs font-mono text-dark-400">
                  {certificate.issuer} • {certificate.date}
                </p>
              </div>
            )}
          </div>

          {/* Metadata & Skill Breakdown */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <span className="px-3 py-0.5 rounded-full text-xs font-mono bg-indigo-500/15 text-cyan-300 border border-indigo-500/30">
                {certificate.category}
              </span>

              <h3 className="text-lg sm:text-xl font-bold text-white mt-3 mb-1 tracking-tight font-display">
                {certificate.title}
              </h3>

              <p className="text-xs font-mono text-dark-300 flex items-center gap-1.5">
                <Building className="w-4 h-4 text-indigo-400" />
                <span>{certificate.issuer}</span>
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-dark-950 border border-dark-800">
                <span className="text-dark-400 block text-[10px]">ISSUED DATE</span>
                <span className="text-white flex items-center gap-1 mt-0.5">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" /> {certificate.date}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-dark-950 border border-dark-800">
                <span className="text-dark-400 block text-[10px]">STATUS</span>
                <span className="text-emerald-400 flex items-center gap-1 mt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Authentic
                </span>
              </div>
            </div>

            {certificate.credentialId && (
              <div className="p-3 rounded-xl bg-dark-950 border border-dark-800 text-xs font-mono">
                <span className="text-dark-400 block text-[10px]">CREDENTIAL ID</span>
                <code className="text-cyan-300 break-all">{certificate.credentialId}</code>
              </div>
            )}

            <p className="text-xs text-dark-200 leading-relaxed font-sans">
              {certificate.description}
            </p>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-dark-400 block mb-2 font-mono">
                Demonstrated Competencies:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {certificate.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg bg-dark-800 border border-dark-700 text-xs font-mono text-cyan-300"
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
                className="btn-electric-primary text-xs py-2 px-4 flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download File</span>
              </button>

              {certificate.credentialUrl && (
                <a
                  href={certificate.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-electric-secondary text-xs py-2 px-4 flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4 text-cyan-400" />
                  <span>Verify Credential</span>
                </a>
              )}
            </div>

          </div>

        </div>

        {/* Modal Pagination Footer */}
        <div className="flex items-center justify-between pt-5 mt-6 border-t border-dark-800 text-xs font-mono text-dark-400">
          <button
            onClick={handlePrev}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-dark-800 hover:bg-dark-700 border border-dark-700 text-dark-200 hover:text-white transition-all cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4 text-cyan-400" />
            <span>Previous</span>
          </button>

          <span className="text-dark-400 hidden sm:inline">
            Use keyboard <kbd className="px-1.5 py-0.5 rounded bg-dark-800 border border-dark-700 text-dark-200">←</kbd> <kbd className="px-1.5 py-0.5 rounded bg-dark-800 border border-dark-700 text-dark-200">→</kbd> to navigate
          </span>

          <button
            onClick={handleNext}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-dark-800 hover:bg-dark-700 border border-dark-700 text-dark-200 hover:text-white transition-all cursor-pointer"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4 text-cyan-400" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default CertificateModal;

import React, { useEffect } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  Copy, 
  MapPin, 
  Mail, 
  Phone, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Layers
} from 'lucide-react';
import { personalInfo, educationData, projectsData, experienceData, certificationsData } from '../data/portfolioData';
import { LinkedinIcon, GithubIcon } from './Icons';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onToast: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onToast }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
${personalInfo.name}
${personalInfo.primaryPositioning}
Location: ${personalInfo.location} | Email: ${personalInfo.socials.email} | Phone: ${personalInfo.socials.phone || '+91 81214 67245'}
LinkedIn: ${personalInfo.socials.linkedin}
GitHub: ${personalInfo.socials.github}

PROFESSIONAL SUMMARY:
${personalInfo.aboutText}

EDUCATION:
- ${educationData.degree} (${educationData.year})
  ${educationData.institution} • ${educationData.status}
  Core Coursework: ${educationData.coursework.join(', ')}

EXPERIENCE:
- ${experienceData.role} — ${experienceData.company} (${experienceData.duration})
  ${experienceData.description}
  Key Deliverables:
${experienceData.responsibilities.map(r => `  - ${r}`).join('\n')}

FEATURED PROJECTS:
${projectsData.map(p => `• ${p.title} (${p.category})\n  ${p.shortDescription}\n  Technologies: ${p.technologies.join(', ')}`).join('\n\n')}

CERTIFICATIONS & ACHIEVEMENTS:
${certificationsData.map(c => `• ${c.title} – ${c.issuer} (${c.date})`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(resumeText);
    onToast('Complete Resume copied to clipboard as text!', 'success');
  };

  const handleDownloadOriginalPdf = () => {
    const link = document.createElement('a');
    link.href = personalInfo.resumePath;
    link.download = personalInfo.resumeFileName;
    link.click();
    onToast(`Downloading ${personalInfo.resumeFileName}`, 'success');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-document-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-dark-900 border border-indigo-500/40 shadow-2xl p-6 sm:p-9 flex flex-col justify-between text-left my-auto print:p-0 print:border-none print:bg-white print:text-black"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between pb-4 mb-6 border-b border-dark-800 gap-4 print:hidden">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <Layers className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">
                Executive Document Format
              </span>
              <h2 id="resume-document-title" className="text-lg sm:text-xl font-bold text-white tracking-wide font-display">
                Curriculum Vitae — <span className="text-gradient-electric">{personalInfo.name}</span>
              </h2>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-dark-800 hover:bg-dark-700 text-dark-200 text-xs font-mono border border-dark-700 transition-all cursor-pointer"
              title="Print / Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>

            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-dark-800 hover:bg-dark-700 text-dark-200 text-xs font-mono border border-dark-700 transition-all cursor-pointer"
              title="Copy as Plain Text"
            >
              <Copy className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Copy Text</span>
            </button>

            <button
              onClick={handleDownloadOriginalPdf}
              className="btn-electric-primary text-xs py-2 px-4 flex items-center gap-2 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close resume viewer"
              className="p-2 rounded-xl bg-dark-800 text-dark-300 hover:text-white hover:bg-dark-700 transition-colors border border-dark-700 ml-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Paper Styled Resume Sheet */}
        <div className="bg-dark-950 p-6 sm:p-8 rounded-2xl border border-dark-800 text-dark-200 space-y-7 font-sans print:p-0 print:border-none print:bg-white print:text-black">
          
          {/* Header Block */}
          <div className="text-center space-y-2 border-b border-dark-800 pb-5 print:border-black">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white print:text-black font-display">
              {personalInfo.name}
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-cyan-300 font-mono print:text-black">
              {personalInfo.primaryPositioning}
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 pt-2 text-xs font-mono text-dark-400 print:text-black">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-cyan-400" /> {personalInfo.location}
              </span>
              <span>|</span>
              <a href={`mailto:${personalInfo.socials.email}`} className="flex items-center gap-1 hover:underline">
                <Mail className="w-3 h-3 text-indigo-400" /> {personalInfo.socials.email}
              </a>
              <span>|</span>
              <a href={`tel:${personalInfo.socials.phone}`} className="flex items-center gap-1 hover:underline">
                <Phone className="w-3 h-3 text-cyan-400" /> {personalInfo.socials.phone}
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 pt-1 text-xs font-mono text-dark-400 print:text-black">
              <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-dark-200 hover:underline">
                <LinkedinIcon className="w-3 h-3" /> LinkedIn Profile
              </a>
              <span>|</span>
              <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-dark-200 hover:underline">
                <GithubIcon className="w-3 h-3" /> GitHub Profile
              </a>
            </div>
          </div>

          {/* Section 1: Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold tracking-widest uppercase text-indigo-400 border-b border-dark-800 pb-1 print:text-black">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-dark-200 print:text-black font-normal">
              {personalInfo.aboutText}
            </p>
          </div>

          {/* Section 2: Work Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold tracking-widest uppercase text-indigo-400 border-b border-dark-800 pb-1 print:text-black flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5 text-cyan-400 print:hidden" />
              Applied Experience
            </h2>

            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex justify-between items-start">
                <div>
                  <strong className="text-white print:text-black font-bold">
                    {experienceData.role} — {experienceData.company}
                  </strong>
                  <p className="text-xs font-mono text-dark-400 print:text-black">{experienceData.location}</p>
                </div>
                <span className="font-mono text-xs text-cyan-400 print:text-black">{experienceData.duration}</span>
              </div>

              <p className="text-xs text-dark-300 print:text-black">
                {experienceData.description}
              </p>

              <ul className="list-disc list-inside space-y-1 text-xs text-dark-200 print:text-black pl-1">
                {experienceData.responsibilities.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 3: Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold tracking-widest uppercase text-indigo-400 border-b border-dark-800 pb-1 print:text-black flex items-center gap-2">
              <GraduationCap className="w-3.5 h-3.5 text-cyan-400 print:hidden" />
              Education
            </h2>
            
            <div className="flex justify-between items-start text-xs sm:text-sm">
              <div>
                <strong className="text-white print:text-black block">
                  {educationData.degree}
                </strong>
                <span className="text-dark-300 print:text-black">{educationData.institution}</span>
                <p className="text-[11px] font-mono text-dark-400 print:text-black mt-0.5">
                  Core: {educationData.coursework.join(' • ')}
                </p>
              </div>
              <span className="font-mono text-xs text-cyan-400 print:text-black">{educationData.year}</span>
            </div>
          </div>

          {/* Section 4: Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold tracking-widest uppercase text-indigo-400 border-b border-dark-800 pb-1 print:text-black">
              Featured Projects
            </h2>

            <div className="space-y-3 text-xs">
              {projectsData.map((p) => (
                <div key={p.id} className="space-y-0.5">
                  <div className="flex justify-between items-start">
                    <strong className="text-white print:text-black font-semibold">
                      {p.title}
                    </strong>
                    <span className="font-mono text-[10px] text-cyan-300 print:text-black">{p.category}</span>
                  </div>
                  <p className="text-dark-300 print:text-black">{p.shortDescription}</p>
                  <p className="text-[10px] font-mono text-dark-400 print:text-black">
                    Stack: {p.technologies.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Certifications */}
          <div className="space-y-2 pt-1">
            <h2 className="text-xs font-mono font-bold tracking-widest uppercase text-indigo-400 border-b border-dark-800 pb-1 print:text-black flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-cyan-400 print:hidden" />
              Key Certifications &amp; Awards
            </h2>

            <ul className="list-disc list-inside space-y-1 text-xs text-dark-300 print:text-black pl-1">
              {certificationsData.slice(0, 5).map((c) => (
                <li key={c.id}>
                  <strong>{c.title}:</strong> {c.issuer} ({c.date})
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Modal Bottom Actions */}
        <div className="pt-5 mt-5 border-t border-dark-800 flex flex-wrap items-center justify-between gap-4 print:hidden">
          <span className="text-xs font-mono text-dark-400">
            Document synced from Nithin Sai Valluri's official resume
          </span>

          <div className="flex items-center gap-3">
            <button
              onClick={handleDownloadOriginalPdf}
              className="btn-electric-primary text-xs py-2 px-5 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ResumeModal;

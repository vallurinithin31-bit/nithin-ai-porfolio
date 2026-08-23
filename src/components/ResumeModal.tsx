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
import { personalInfo, educationInfo, projectsData, experienceData, certificatesData } from '../data/portfolioData';
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
VALLURI NITHIN SAI
${personalInfo.title}
Location: ${personalInfo.socials.location || 'Vijayawada, India'} | Email: ${personalInfo.socials.email} | Phone: ${personalInfo.phone || '+91-8121467245'}
LinkedIn: ${personalInfo.socials.linkedin}
GitHub: ${personalInfo.socials.github}

PROFESSIONAL SUMMARY:
${personalInfo.aboutText}

EDUCATION:
- ${educationInfo.degree} - Specialization: ${educationInfo.specialization} (${educationInfo.year || '2024-2028'})
- Institution: ${educationInfo.institution || 'Amrita Sai Institute of Science and Technology'}
- INTERMEDIATE (M.P.C): SR Junior College, Hyderabad
- SCHOOL: SREE VIDYA PEETHI (CBSE) KIMS INSTITUTION, Narketpally

PROJECTS:
${projectsData.map(p => `• ${p.title} (${p.category})\n  ${p.shortDescription}\n  Technologies: ${p.technologies.join(', ')}`).join('\n\n')}

WORK EXPERIENCE:
${experienceData.map(e => `• ${e.role} - ${e.organization} (${e.duration})\n  ${e.description}\n  Responsibilities:\n  ${e.responsibilities?.map(r => `  - ${r}`).join('\n')}`).join('\n\n')}

TECHNICAL SKILLS:
- Languages: Python (Pandas, NumPy, Matplotlib), Basics of Machine Learning, HTML5, CSS3, JavaScript, SQL
- Analytics Skills: Data Cleaning, Data Visualization, Descriptive Statistics, Regression Analysis, Hypothesis Testing
- Soft Skills: Analytical Thinking, Problem-Solving, Business Communication, Presentation Skills

CERTIFICATIONS & ACHIEVEMENTS:
${certificatesData.map(c => `• ${c.title} – Issued by ${c.issuer} (${c.date})`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(resumeText);
    onToast('Complete Resume copied to clipboard as text!', 'success');
  };

  const handleDownloadOriginalPdf = () => {
    const link = document.createElement('a');
    link.href = personalInfo.resumeUrl;
    link.download = personalInfo.resumeFileName;
    link.click();
    onToast(`Downloading ${personalInfo.resumeFileName}`, 'success');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-document-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-fadeIn overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-zinc-950 border border-white/20 shadow-2xl p-6 sm:p-10 flex flex-col justify-between text-left print:p-0 print:border-none print:bg-white print:text-black"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Floating Control Bar */}
        <div className="flex flex-wrap items-center justify-between pb-5 mb-7 border-b border-zinc-800 gap-4 print:hidden">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-white/10 text-white border border-white/15">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                Executive Document Format
              </span>
              <h2 id="resume-document-title" className="text-lg sm:text-xl font-cinzel font-bold text-white tracking-wide">
                Curriculum Vitae — <span className="font-algerian tracking-wider text-[#e08569]">{personalInfo.name}</span>
              </h2>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 text-xs font-semibold uppercase tracking-wider border border-white/10 transition-all"
              title="Print / Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>

            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 text-xs font-semibold uppercase tracking-wider border border-white/10 transition-all"
              title="Copy as Plain Text"
            >
              <Copy className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Copy Text</span>
            </button>

            <button
              onClick={handleDownloadOriginalPdf}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-zinc-200 text-black text-xs font-bold uppercase tracking-wider shadow-lg transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close resume viewer"
              className="p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors border border-white/10 ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Paper Styled Resume Sheet */}
        <div className="bg-zinc-900/50 dark:bg-zinc-950 p-6 sm:p-10 rounded-2xl border border-zinc-800/90 text-zinc-300 space-y-8 font-sans print:p-0 print:border-none print:text-black">
          
          {/* Header Block */}
          <div className="text-center space-y-2 border-b border-zinc-800 pb-6 print:border-black">
            <h1 className="font-algerian text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider text-white print:text-black">
              {personalInfo.name}
            </h1>
            <p className="font-cinzel text-xs sm:text-sm font-semibold text-[#e08569] dark:text-[#e08569] print:text-black tracking-wide">
              {personalInfo.title}
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 pt-2 text-xs font-mono text-zinc-400 print:text-black">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-zinc-400" /> Vijayawada, India
              </span>
              <span>|</span>
              <a href={`mailto:${personalInfo.socials.email}`} className="flex items-center gap-1 hover:underline">
                <Mail className="w-3 h-3 text-zinc-400" /> {personalInfo.socials.email}
              </a>
              <span>|</span>
              <a href="tel:+918121467245" className="flex items-center gap-1 hover:underline">
                <Phone className="w-3 h-3 text-zinc-400" /> +91-8121467245
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 pt-1 text-xs font-mono text-zinc-400 print:text-black">
              <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-white hover:underline">
                <LinkedinIcon className="w-3 h-3" /> linkedin.com/in/nithin-sai-valluri-a947b0410
              </a>
              <span>|</span>
              <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-white hover:underline">
                <GithubIcon className="w-3 h-3" /> github.com/vallurinithin31-bit
              </a>
            </div>
          </div>

          {/* Section 1: Professional Summary */}
          <div className="space-y-2.5">
            <h2 className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-white border-b border-zinc-800 pb-1.5 print:text-black print:border-black flex items-center gap-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-zinc-300 print:text-black font-normal">
              {personalInfo.aboutText}
            </p>
          </div>

          {/* Section 2: Education */}
          <div className="space-y-3">
            <h2 className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-white border-b border-zinc-800 pb-1.5 print:text-black print:border-black flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#e08569] print:hidden" />
              Education
            </h2>
            
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between items-start">
                <div>
                  <strong className="font-cinzel text-white print:text-black text-sm block">
                    Bachelor of Technology (B.Tech)
                  </strong>
                  <span className="text-zinc-400 print:text-black">Artificial Intelligence &amp; Machine Learning</span>
                  <p className="text-[11px] font-mono text-zinc-500 print:text-black">{educationInfo.institution}</p>
                </div>
                <span className="font-mono text-xs text-zinc-400 print:text-black">2024 – 2028</span>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <strong className="font-cinzel text-white print:text-black text-xs block">
                    INTERMEDIATE (M.P.C)
                  </strong>
                  <span className="text-zinc-400 print:text-black text-xs">SR Junior College, Hyderabad</span>
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <strong className="font-cinzel text-white print:text-black text-xs block">
                    SCHOOL (CBSE)
                  </strong>
                  <span className="text-zinc-400 print:text-black text-xs">SREE VIDYA PEETHI (CBSE) KIMS INSTITUTION, Narketpally</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Projects */}
          <div className="space-y-3">
            <h2 className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-white border-b border-zinc-800 pb-1.5 print:text-black print:border-black flex items-center gap-2">
              Projects
            </h2>

            <div className="space-y-4 text-xs sm:text-sm">
              {/* Project 1 */}
              <div>
                <div className="flex justify-between items-start mb-1">
                  <strong className="font-cinzel text-white print:text-black font-bold">
                    Sales Performance Dashboard and Analysis
                  </strong>
                  <span className="font-mono text-[11px] text-zinc-400 print:text-black">Python • Pandas • Excel</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-zinc-300 print:text-black pl-1">
                  <li>Analyzed 10,000 plus retail sales records using Python (Pandas) and Excel to identify top products, seasonal trends, and regional patterns.</li>
                  <li>Engineered exploratory data analysis (EDA) charts and correlation evaluations using Matplotlib.</li>
                </ul>
              </div>

              {/* Project 2 */}
              <div>
                <div className="flex justify-between items-start mb-1">
                  <strong className="font-cinzel text-white print:text-black font-bold">
                    AI Voice Agent Health Assistant
                  </strong>
                  <span className="font-mono text-[11px] text-zinc-400 print:text-black">Voice AI • Agentic AI • Python</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-zinc-300 print:text-black pl-1">
                  <li>Developed a voice-based AI health assistant that provides basic health guidance and personalized reminders through natural voice interaction.</li>
                  <li>The system allows users to describe symptoms and receive simple health suggestions, awareness tips, and timely reminders for medication or daily care.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 4: Technical Skills */}
          <div className="space-y-3">
            <h2 className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-white border-b border-zinc-800 pb-1.5 print:text-black print:border-black">
              Technical &amp; Analytical Skills
            </h2>

            <div className="space-y-1.5 text-xs text-zinc-300 print:text-black">
              <p>
                <strong className="font-cinzel text-white print:text-black">Languages &amp; Core:</strong> Python (Pandas, NumPy, Matplotlib), Basics of Machine Learning, HTML5, CSS3, JavaScript, SQL.
              </p>
              <p>
                <strong className="font-cinzel text-white print:text-black">Analytics Skills:</strong> Data Cleaning, Data Visualization, Descriptive Statistics, Regression Analysis, Hypothesis Testing.
              </p>
              <p>
                <strong className="font-cinzel text-white print:text-black">Soft Skills:</strong> Analytical Thinking, Problem-Solving, Business Communication, Presentation Skills.
              </p>
            </div>
          </div>

          {/* Section 5: Work Experience */}
          <div className="space-y-3">
            <h2 className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-white border-b border-zinc-800 pb-1.5 print:text-black print:border-black flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#e08569] print:hidden" />
              Work Experience
            </h2>

            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex justify-between items-start">
                <div>
                  <strong className="font-cinzel text-white print:text-black text-sm block">
                    CodeAlpha – Web Development Intern
                  </strong>
                </div>
                <span className="font-mono text-xs text-zinc-400 print:text-black">July 2026 – August 2026</span>
              </div>

              <ul className="list-disc list-inside space-y-1 text-xs text-zinc-300 print:text-black pl-1">
                <li>Developed three full-stack web applications: Nexora (Social Media), Nexus (E-Commerce), and TaskForge (Project Management) using HTML, CSS, JavaScript, Django/Express.js, and MySQL/SQLite.</li>
                <li>Built responsive frontends and integrated secure backend services using REST APIs.</li>
                <li>Implemented authentication, CRUD operations, relational database design, and scalable backend architecture.</li>
                <li>Developed features including posts, comments, likes, shopping cart, order management, task assignment, and collaborative workflows.</li>
                <li>Utilized Git/GitHub for version control while enhancing expertise in full-stack development and database management.</li>
              </ul>

              <p className="text-[11px] font-mono text-zinc-400 print:text-black pt-1">
                <strong>Technologies:</strong> HTML5, CSS3, JavaScript, Python, Django, Node.js, Express.js, MySQL, SQLite, REST APIs, Git, GitHub.
              </p>
            </div>
          </div>

          {/* Section 6: Certifications & Achievements */}
          <div className="space-y-3 pt-2">
            <h2 className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-white border-b border-zinc-800 pb-1.5 print:text-black print:border-black flex items-center gap-2">
              <Award className="w-4 h-4 text-[#e08569] print:hidden" />
              Certifications &amp; Achievements
            </h2>

            <ul className="list-disc list-inside space-y-1.5 text-xs text-zinc-300 print:text-black pl-1">
              <li><strong>Build Intelligent RAG Systems:</strong> Codegnan IT Solutions Pvt Ltd (June 2026)</li>
              <li><strong>Artificial Intelligence Fundamentals:</strong> IBM SkillsBuild (Plan ID: PLAN-7913EE1DB030)</li>
              <li><strong>Programming Fundamentals with Python:</strong> CynoHub Academy (ID: CYNO-0F21VE-1XAPGM)</li>
              <li><strong>DSA With Python Workshop:</strong> Codegnan IT Solutions Pvt Ltd (July 2026)</li>
              <li><strong>Certificate of Merit – CODE HUNT 2.0:</strong> JNTU-GV College of Engineering Vizianagaram(A)</li>
              <li><strong>12-Hour Hackathon ElevateX:</strong> Codegnan Community Hub, Vijayawada (Jan 2026)</li>
              <li><strong>AI Data Analytics Internship Selection:</strong> Internshala / InAmigos Foundation (ID: ccnwh9lkpkx)</li>
              <li><strong>IBM Professional Excellence:</strong> Problem Solving &amp; Process Controls + Communication Dynamics (Credly Verified)</li>
              <li><strong>Web Development Internship:</strong> CodeAlpha Full-Stack Certification</li>
            </ul>
          </div>

        </div>

        {/* Modal Bottom Actions */}
        <div className="pt-6 mt-6 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4 print:hidden">
          <span className="text-xs font-mono text-zinc-500">
            Document synced from Valluri Nithin Sai's official resume
          </span>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 text-xs font-semibold uppercase tracking-wider border border-white/10 transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={handleDownloadOriginalPdf}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white hover:bg-zinc-200 text-black text-xs font-bold uppercase tracking-wider shadow-lg transition-all"
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

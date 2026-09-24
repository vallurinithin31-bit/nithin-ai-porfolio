import React, { useState } from 'react';
import { Award, Search, FolderLock, ExternalLink } from 'lucide-react';
import { certificatesData, personalInfo } from '../data/portfolioData';
import { Certificate } from '../types';
import { CertificateCard } from './CertificateCard';
import { CertificateModal } from './CertificateModal';

interface CertificatesProps {
  onToast: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

export const Certificates: React.FC<CertificatesProps> = ({ onToast }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalCert, setActiveModalCert] = useState<Certificate | null>(null);

  const categories = [
    'All',
    'Generative AI',
    'Artificial Intelligence',
    'Competitions & Hackathons',
    'Python',
    'Workshops',
    'Internships',
    'Professional Skills'
  ];

  const filteredCertificates = certificatesData.filter((cert: Certificate) => {
    const matchesCategory = selectedCategory === 'All' || cert.category === selectedCategory;
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      cert.title.toLowerCase().includes(query) ||
      cert.issuer.toLowerCase().includes(query) ||
      cert.skills.some((s: string) => s.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="certificates" className="py-20 sm:py-24 bg-dark-950 relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-dark-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-dark-900 border border-indigo-500/30 text-indigo-300 text-xs font-mono tracking-widest uppercase mb-3">
              <Award className="w-3.5 h-3.5 text-cyan-400" />
              <span>VERIFIED CREDENTIALS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-display">
              Certifications &amp; Achievements
            </h2>
            <p className="text-sm sm:text-base text-dark-300 max-w-xl mt-2 leading-relaxed">
              Official credentials in Generative AI, RAG architectures, IBM AI fundamentals, and competitive programming.
            </p>
          </div>

          <a
            href={personalInfo.socials.driveCertificates || "https://drive.google.com/drive/folders/1wuKqIYfjg9ChGK_-vwSm9cNlOi9Xa8Z6?usp=sharing"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-electric-secondary text-xs py-2.5 px-5 flex items-center gap-2 shrink-0"
          >
            <span>GOOGLE DRIVE FOLDER</span>
            <ExternalLink className="w-4 h-4 text-cyan-400" />
          </a>
        </div>

        {/* Filter and Search Bar */}
        <div className="space-y-4 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start lg:justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium tracking-wide transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-electric-sm border border-cyan-300 scale-105'
                    : 'bg-dark-900 text-dark-300 border border-dark-700 hover:border-dark-600 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-dark-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search certificates by title, issuer or skill..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-dark-900 border border-dark-700 text-white placeholder-dark-400 focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>
        </div>

        {/* Certificates Grid */}
        {filteredCertificates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertificates.map((cert: Certificate) => (
              <CertificateCard
                key={cert.id}
                certificate={cert}
                onOpenModal={(c: Certificate) => setActiveModalCert(c)}
                onToast={onToast}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16 rounded-3xl bg-dark-900/80 border border-dark-700 max-w-lg mx-auto p-8">
            <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mx-auto mb-4 border border-indigo-500/20">
              <FolderLock className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-white tracking-wide font-display">
              No matching certificates found
            </h3>
            <p className="text-xs text-dark-400 mt-2 leading-relaxed">
              Try adjusting your search query or reset category filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="btn-electric-primary mt-5 text-xs py-2 px-5 cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Lightbox / Modal */}
      {activeModalCert && (
        <CertificateModal
          certificate={activeModalCert}
          certificatesList={filteredCertificates.length > 0 ? filteredCertificates : certificatesData}
          onClose={() => setActiveModalCert(null)}
          onSelectCertificate={(c) => setActiveModalCert(c)}
          onToast={onToast}
        />
      )}
    </section>
  );
};

export default Certificates;

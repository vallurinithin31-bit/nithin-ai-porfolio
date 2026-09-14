import React, { useState } from 'react';
import { Award, Search, FolderLock } from 'lucide-react';
import { certificatesData } from '../data/portfolioData';
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
    'Professional Skills',
    'Web Development'
  ];

  const filteredCertificates = certificatesData.filter((cert) => {
    const matchesCategory = selectedCategory === 'All' || cert.category === selectedCategory;
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      cert.title.toLowerCase().includes(query) ||
      cert.issuer.toLowerCase().includes(query) ||
      cert.skills.some((s) => s.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="certificates" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono tracking-widest uppercase mb-3 backdrop-blur-md">
            <Award className="w-3.5 h-3.5" />
            <span>CREDENTIALS &amp; CERTIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Certifications &amp; Achievements
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mt-4 leading-relaxed font-normal">
            Formal internship verifications, specialized AI/ML certificates, competitive hackathon awards, and verified technical credentials.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full mt-4" />
        </div>

        {/* Filter and Search Bar */}
        <div className="space-y-5 mb-12">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start lg:justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-red-600 text-white shadow-lg shadow-red-950/60'
                    : 'bg-[#12131a] text-zinc-400 border border-white/10 hover:border-red-500/40 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search certificates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs rounded-full bg-[#12131a] border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 transition-colors"
            />
          </div>
        </div>

        {/* Certificates Grid */}
        {filteredCertificates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertificates.map((cert) => (
              <CertificateCard
                key={cert.id}
                certificate={cert}
                onOpenModal={(c) => setActiveModalCert(c)}
                onToast={onToast}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16 rounded-3xl bg-[#12131a] border border-white/10 max-w-lg mx-auto p-8">
            <div className="w-14 h-14 rounded-2xl bg-red-500/10 text-red-400 flex items-center justify-center mx-auto mb-4 border border-red-500/20">
              <FolderLock className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-white tracking-wide">
              No matching certificates found
            </h3>
            <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
              Try adjusting your search query or reset the category filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-5 px-5 py-2 rounded-full bg-red-600 text-white text-xs font-semibold hover:bg-red-500 transition-colors"
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

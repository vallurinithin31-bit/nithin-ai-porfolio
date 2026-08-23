import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { BackgroundGlow } from './components/BackgroundGlow';
import { EntrancePortal } from './components/EntrancePortal';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhatIDo } from './components/WhatIDo';
import { Projects } from './components/Projects';
import { BentoGridSection } from './components/BentoGridSection';
import { Certificates } from './components/Certificates';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { ResumeSection } from './components/ResumeSection';
import { ResumeModal } from './components/ResumeModal';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';

export const App: React.FC = () => {
  const [hasEntered, setHasEntered] = useState<boolean>(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [toast, setToast] = useState<{ message: string; type?: 'success' | 'info' | 'error' } | null>(null);

  const showToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    setToast({ message, type });
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen relative selection:bg-lilac-500/30 selection:text-lilac-200">
        
        {/* Animated Entrance Portal Gate */}
        {!hasEntered && (
          <EntrancePortal onEnter={() => setHasEntered(true)} />
        )}

        {/* Ambient AI Background Glow & 3D Neural Mesh */}
        <BackgroundGlow />

        {/* Sticky Accessible Navigation Bar */}
        <Navbar />

        {/* Main Content Sections Flowing Seamlessly */}
        <main className="relative z-10">
          <Hero
            onOpenResumeModal={() => setIsResumeModalOpen(true)}
            onToast={showToast}
          />
          <WhatIDo />
          <Projects onToast={showToast} />
          <BentoGridSection />
          <Certificates onToast={showToast} />
          <About />
          <Experience />
          <Achievements />
          <ResumeSection
            onOpenModal={() => setIsResumeModalOpen(true)}
            onToast={showToast}
          />
          <Contact onToast={showToast} />
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Interactive Resume Lightbox Modal */}
        <ResumeModal
          isOpen={isResumeModalOpen}
          onClose={() => setIsResumeModalOpen(false)}
          onToast={showToast}
        />

        {/* Global Toast Notification */}
        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </div>
    </ThemeProvider>
  );
};

export default App;

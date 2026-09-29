import React, { useState } from 'react';
import { BackgroundGlow } from './components/BackgroundGlow';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { EntrancePortal } from './components/EntrancePortal';
import { Section3DWrapper } from './components/Section3DWrapper';
import { Navbar } from './components/Navbar';
import { CustomCursor } from './components/CustomCursor';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WhatIBuild } from './components/WhatIBuild';
import { Stats } from './components/Stats';
import { Projects } from './components/Projects';
import { TechStack } from './components/TechStack';
import { Timeline } from './components/Timeline';
import { Certifications } from './components/Certifications';
import { Experience } from './components/Experience';
import { ResumeCTA } from './components/ResumeCTA';
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
    <div className="min-h-screen relative overflow-x-hidden bg-[#07080d] text-zinc-100 selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Custom cursor (desktop only) */}
      <CustomCursor />

      {/* Top scroll progress bar */}
      <ScrollProgressBar />

      {/* Entrance loading screen */}
      {!hasEntered && (
        <EntrancePortal onEnter={() => setHasEntered(true)} />
      )}

      {/* Ambient background particles */}
      <BackgroundGlow />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main className="relative z-10">
        <Section3DWrapper id="home">
          <Hero
            onOpenResumeModal={() => setIsResumeModalOpen(true)}
            onToast={showToast}
          />
        </Section3DWrapper>

        <Section3DWrapper id="about">
          <About onToast={showToast} />
        </Section3DWrapper>

        <Section3DWrapper id="whatibuild">
          <WhatIBuild />
        </Section3DWrapper>

        <Stats />

        <Section3DWrapper id="projects">
          <Projects onToast={showToast} />
        </Section3DWrapper>

        <Section3DWrapper id="skills">
          <TechStack />
        </Section3DWrapper>

        <Section3DWrapper id="journey">
          <Timeline />
        </Section3DWrapper>

        <Section3DWrapper id="certificates">
          <Certifications onToast={showToast} />
        </Section3DWrapper>

        <Section3DWrapper id="experience">
          <Experience />
        </Section3DWrapper>

        <Section3DWrapper id="resume">
          <ResumeCTA
            onOpenModal={() => setIsResumeModalOpen(true)}
            onToast={showToast}
          />
        </Section3DWrapper>

        <Section3DWrapper id="contact">
          <Contact onToast={showToast} />
        </Section3DWrapper>
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        onToast={showToast}
      />

      {/* Toast notifications */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
};

export default App;

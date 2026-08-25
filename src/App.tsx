import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { BackgroundGlow } from './components/BackgroundGlow';
import { EntrancePortal } from './components/EntrancePortal';
import { Section3DWrapper } from './components/Section3DWrapper';
import { SlideNavigator } from './components/SlideNavigator';
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
      <div className="min-h-screen relative selection:bg-lilac-500/30 selection:text-lilac-200 overflow-x-hidden">
        
        {/* Welcoming AI & ML Entrance Gate with Hyperdrive Opening Animation */}
        {!hasEntered && (
          <EntrancePortal onEnter={() => setHasEntered(true)} />
        )}

        {/* Ambient AI Background Glow & 3D Neural Mesh */}
        <BackgroundGlow />

        {/* Sticky Accessible Navigation Bar */}
        <Navbar />

        {/* Floating 3D Slide Navigator */}
        <SlideNavigator />

        {/* Main Content Sections with Dynamic 3D Movable Slide Scroll System */}
        <main className="relative z-10 space-y-16 sm:space-y-24 py-8">
          <Section3DWrapper id="home">
            <Hero
              onOpenResumeModal={() => setIsResumeModalOpen(true)}
              onToast={showToast}
            />
          </Section3DWrapper>

          <Section3DWrapper id="what-i-do">
            <WhatIDo />
          </Section3DWrapper>

          <Section3DWrapper id="projects">
            <Projects onToast={showToast} />
          </Section3DWrapper>

          <Section3DWrapper id="toolkit-process">
            <BentoGridSection />
          </Section3DWrapper>

          <Section3DWrapper id="certificates">
            <Certificates onToast={showToast} />
          </Section3DWrapper>

          <Section3DWrapper id="about">
            <About />
          </Section3DWrapper>

          <Section3DWrapper id="experience">
            <Experience />
          </Section3DWrapper>

          <Section3DWrapper id="achievements">
            <Achievements />
          </Section3DWrapper>

          <Section3DWrapper id="resume">
            <ResumeSection
              onOpenModal={() => setIsResumeModalOpen(true)}
              onToast={showToast}
            />
          </Section3DWrapper>

          <Section3DWrapper id="contact">
            <Contact onToast={showToast} />
          </Section3DWrapper>
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

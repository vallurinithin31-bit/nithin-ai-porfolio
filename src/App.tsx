import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { BackgroundGlow } from './components/BackgroundGlow';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { EntrancePortal } from './components/EntrancePortal';
import { Section3DWrapper } from './components/Section3DWrapper';
import { SlideNavigator } from './components/SlideNavigator';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { AILab } from './components/AILab';
import { Approach } from './components/Approach';
import { Education } from './components/Education';
import { Certificates } from './components/Certificates';
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
      <div className="min-h-screen relative selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden bg-dark-950 text-dark-100">
        
        {/* Top Laser Scroll Progress Indicator */}
        <ScrollProgressBar />

        {/* Welcoming AI & ML Entrance Gate with Hyperdrive Opening Animation */}
        {!hasEntered && (
          <EntrancePortal onEnter={() => setHasEntered(true)} />
        )}

        {/* Ambient AI Background Glow & 3D Neural Mesh */}
        <BackgroundGlow />

        {/* Sticky Accessible Navigation Bar */}
        <Navbar />

        {/* Floating Slide Navigator */}
        <SlideNavigator />

        {/* Main Content Sections with Ultra-Smooth 3D Scroll Reveal Animation */}
        <main className="relative z-10 space-y-12 sm:space-y-16">
          <Section3DWrapper id="home">
            <Hero
              onOpenResumeModal={() => setIsResumeModalOpen(true)}
              onToast={showToast}
            />
          </Section3DWrapper>

          <Section3DWrapper id="about">
            <About />
          </Section3DWrapper>

          <Section3DWrapper id="experience">
            <Experience />
          </Section3DWrapper>

          <Section3DWrapper id="skills">
            <Skills />
          </Section3DWrapper>

          <Section3DWrapper id="projects">
            <Projects onToast={showToast} />
          </Section3DWrapper>

          <Section3DWrapper id="ailab">
            <AILab />
          </Section3DWrapper>

          <Section3DWrapper id="approach">
            <Approach />
          </Section3DWrapper>

          <Section3DWrapper id="education">
            <Education />
          </Section3DWrapper>

          <Section3DWrapper id="certificates">
            <Certificates onToast={showToast} />
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

        {/* Global Developer Footer */}
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

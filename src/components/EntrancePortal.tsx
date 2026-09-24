import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { 
  Volume2, 
  VolumeX, 
  ArrowRight,
  Loader2,
  Sparkles,
  Zap
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface EntrancePortalProps {
  onEnter: () => void;
}

export const EntrancePortal: React.FC<EntrancePortalProps> = ({ onEnter }) => {
  const [progress, setProgress] = useState(0);
  const [isOpeningAnimation, setIsOpeningAnimation] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isHoveredImage, setIsHoveredImage] = useState(false);

  const threeCanvasRef = useRef<HTMLDivElement>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const warpSpeedRef = useRef<number>(0.003);

  // 3D Three.js Ambient Welcoming WebGL Canvas
  useEffect(() => {
    const container = threeCanvasRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 45;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 1. Subtle 3D Geometric Floating Gyroscope
    const torusGeo = new THREE.TorusKnotGeometry(9, 2.2, 80, 16);
    const torusMat = new THREE.MeshBasicMaterial({
      color: 0x84cc16, // Lime green glow matching entry artwork
      wireframe: true,
      transparent: true,
      opacity: 0.18
    });
    const torusKnot = new THREE.Mesh(torusGeo, torusMat);
    scene.add(torusKnot);

    // 2. 3D Particle Starfield
    const starCount = 280;
    const starGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);

    const colorPalette = [
      new THREE.Color('#84cc16'), // Lime
      new THREE.Color('#a3e635'), // Light lime
      new THREE.Color('#38bdf8'), // Electric cyan
      new THREE.Color('#ffffff')  // White star
    ];

    for (let i = 0; i < starCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 120;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 90;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 70;

      const col = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const starMat = new THREE.PointsMaterial({
      size: 2.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });

    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);

    // Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const handleResize = () => {
      if (!container) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      camera.position.x += (mouseX * 5 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 4 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      torusKnot.rotation.x = elapsed * 0.18;
      torusKnot.rotation.y = elapsed * 0.24;

      const pos = starGeo.attributes.position.array as Float32Array;
      const speed = warpSpeedRef.current;

      for (let i = 0; i < starCount; i++) {
        pos[i * 3 + 2] += speed * 55;
        if (pos[i * 3 + 2] > 35) {
          pos[i * 3 + 2] = -35;
          pos[i * 3] = (Math.random() - 0.5) * 120;
          pos[i * 3 + 1] = (Math.random() - 0.5) * 90;
        }
      }
      starGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      torusGeo.dispose();
      torusMat.dispose();
      starGeo.dispose();
      starMat.dispose();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Web Audio API Sound Synthesizer
  const playOpenSound = () => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const now = ctx.currentTime;

      // Harmonic Chord chime
      [440, 554.37, 659.25, 880, 1108.73, 1318.51].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + i * 0.05);
        osc.frequency.exponentialRampToValueAtTime(freq * 1.5, now + i * 0.05 + 0.35);

        gain.gain.setValueAtTime(0.12, now + i * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.05 + 0.55);

        osc.start(now + i * 0.05);
        osc.stop(now + i * 0.05 + 0.55);
      });

      // Futuristic Laser Sweep
      const laserOsc = ctx.createOscillator();
      const laserGain = ctx.createGain();
      laserOsc.connect(laserGain);
      laserGain.connect(ctx.destination);

      laserOsc.type = 'sine';
      laserOsc.frequency.setValueAtTime(1400, now + 0.1);
      laserOsc.frequency.exponentialRampToValueAtTime(180, now + 0.65);

      laserGain.gain.setValueAtTime(0.14, now + 0.1);
      laserGain.gain.exponentialRampToValueAtTime(0.001, now + 0.65);

      laserOsc.start(now + 0.1);
      laserOsc.stop(now + 0.65);
    } catch {
      // Fallback
    }
  };

  // Progressive Loading Simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 14) + 8;
        return Math.min(next, 100);
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const handleOpenPortfolio = () => {
    if (progress < 100 || isOpeningAnimation) return;
    
    playOpenSound();
    warpSpeedRef.current = 0.12;
    setIsOpeningAnimation(true);

    setTimeout(() => {
      onEnter();
    }, 950);
  };

  const isReady = progress >= 100;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden select-none bg-[#07080d] flex items-center justify-center font-sans">
      
      {/* 3D Three.js WebGL Canvas Layer */}
      <div 
        ref={threeCanvasRef}
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-75"
        aria-hidden="true"
      />

      {/* Subtle Halftone Dot Matrix Pattern */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[radial-gradient(#84cc16_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#07080d]/40 to-[#07080d] pointer-events-none z-0" />

      {/* Opening Light Burst Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-tr from-lime-600 via-emerald-500 to-cyan-400 pointer-events-none z-30 transition-opacity duration-700 ${
        isOpeningAnimation ? 'opacity-90' : 'opacity-0'
      }`} />

      {/* Left & Right Shutter Panels for Cinematic Door Reveal */}
      <div 
        className={`absolute inset-y-0 left-0 w-1/2 bg-[#07080d] z-20 transition-transform duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${
          isOpeningAnimation ? '-translate-x-full shadow-[30px_0_60px_rgba(132,204,22,0.8)]' : 'translate-x-0'
        }`}
      />
      <div 
        className={`absolute inset-y-0 right-0 w-1/2 bg-[#07080d] z-20 transition-transform duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${
          isOpeningAnimation ? 'translate-x-full shadow-[-30px_0_60px_rgba(132,204,22,0.8)]' : 'translate-x-0'
        }`}
      />

      {/* MAIN CONTAINER */}
      <div className={`relative z-40 max-w-5xl w-full h-full mx-auto px-4 sm:px-6 py-6 flex flex-col items-center justify-between text-center transition-all duration-800 cubic-bezier(0.16, 1, 0.3, 1) ${
        isOpeningAnimation 
          ? 'scale-125 opacity-0 blur-sm pointer-events-none' 
          : 'scale-100 opacity-100 blur-0'
      }`}>
        
        {/* TOP FLOATING PILL NAVIGATION BAR */}
        <div className="w-full flex items-center justify-between pt-1">
          <div className="opacity-0 w-10 hidden sm:block" />

          {/* Floating Pill Menu */}
          <div className="mx-auto inline-flex items-center gap-1 sm:gap-2 px-3 py-1.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-2xl shadow-2xl">
            <span className="px-3.5 py-1 rounded-full bg-white text-dark-950 font-semibold text-xs tracking-wide shadow-md">
              Entry Portal
            </span>
            <span 
              className="px-3 py-1 text-dark-300 hover:text-white text-xs font-mono transition-colors cursor-pointer"
              onClick={handleOpenPortfolio}
            >
              Explore Portfolio
            </span>
            <span 
              className="px-3 py-1 text-dark-300 hover:text-white text-xs font-mono transition-colors cursor-pointer hidden sm:inline"
              onClick={handleOpenPortfolio}
            >
              AI Systems
            </span>
          </div>

          {/* Sound Toggle */}
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-2.5 rounded-full bg-black/60 border border-white/10 text-dark-300 hover:text-white transition-all hover:scale-105 backdrop-blur-md cursor-pointer"
            title={soundEnabled ? "Mute Audio" : "Enable Audio"}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-lime-400" /> : <VolumeX className="w-4 h-4" />}
          </button>
        </div>

        {/* CENTER HERO: ENTRY IMAGE ARTWORK */}
        <div className="my-auto py-2 flex flex-col items-center w-full max-w-4xl">
          
          {/* Top subtle badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-dark-900/90 border border-lime-500/30 text-lime-300 text-[11px] font-mono tracking-wider mb-3 backdrop-blur-md shadow-lg">
            <Sparkles className="w-3 h-3 text-lime-400" />
            <span>NITHIN SAI VALLURI // AI PRODUCT BUILDER</span>
          </div>

          {/* Cinematic Interactive Entry Image Frame */}
          <div 
            className="relative w-full max-w-3xl aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer group select-none shadow-2xl border border-white/15 bg-black/80 transition-all duration-500 hover:border-lime-400/60 hover:shadow-[0_0_40px_rgba(132,204,22,0.35)]"
            onMouseEnter={() => setIsHoveredImage(true)}
            onMouseLeave={() => setIsHoveredImage(false)}
            onClick={handleOpenPortfolio}
          >
            {/* Ambient Backlight Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-lime-500/10 via-transparent to-transparent pointer-events-none z-10" />

            {/* The Entry Image */}
            <img
              src="/images/entry-cover.png"
              alt="Portfolio Entry Cover - Create a collection of works for portfolio"
              className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
                isHoveredImage ? 'scale-[1.03]' : 'scale-100'
              }`}
            />

            {/* Hover Prompt Cue Overlay */}
            <div className={`absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 flex flex-col items-center justify-center gap-3 z-20 ${
              isHoveredImage ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}>
              <div className="px-5 py-2.5 rounded-full bg-white text-dark-950 font-bold text-xs uppercase tracking-widest shadow-2xl flex items-center gap-2 transform scale-95 group-hover:scale-100 transition-transform">
                <Zap className="w-4 h-4 text-lime-600 fill-lime-600" />
                <span>CLICK TO ENTER &amp; EXPLORE</span>
                <ArrowRight className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-mono text-lime-300 bg-black/70 px-3 py-1 rounded-full border border-lime-500/30">
                Audio Chime + Warp Animation Enabled
              </span>
            </div>

            {/* Subtle corner tech markers */}
            <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-lime-400 z-10 pointer-events-none" />
            <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-lime-400 z-10 pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-lime-400 z-10 pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-lime-400 z-10 pointer-events-none" />
          </div>

          {/* INTEGRATED LOADING BAR & ENTER ACTION BUTTON */}
          <div className="w-full max-w-md mt-5">
            {!isReady ? (
              <div className="w-full rounded-2xl bg-black/70 border border-white/15 p-3.5 shadow-2xl backdrop-blur-md">
                <div className="flex items-center justify-between text-xs font-mono text-dark-300 mb-2">
                  <span className="flex items-center gap-2 text-dark-200">
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-lime-400" />
                    INITIALIZING AI CORE &amp; ASSETS...
                  </span>
                  <span className="font-bold text-lime-400">{progress}%</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-dark-800 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-lime-500 via-emerald-400 to-cyan-400 transition-all duration-150"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            ) : (
              <button
                onClick={handleOpenPortfolio}
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-white via-zinc-100 to-white hover:bg-zinc-200 text-dark-950 font-bold text-xs sm:text-sm uppercase tracking-widest shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300 hover:scale-105 active:scale-95 group border border-white/40 cursor-pointer"
              >
                <Zap className="w-4 h-4 text-lime-600 fill-lime-600 animate-pulse" />
                <span>OPEN &amp; EXPLORE PORTFOLIO</span>
                <ArrowRight className="w-4 h-4 text-dark-950 group-hover:translate-x-1.5 transition-transform" />
              </button>
            )}
          </div>

        </div>

        {/* BOTTOM MINIMALIST FOOTER STRIP */}
        <div className="w-full flex items-center justify-between text-xs font-mono text-dark-500 tracking-wider pt-1">
          <span>{personalInfo.name}</span>
          <span className="text-lime-400/80">AI/ML ENGINEER &amp; PRODUCT BUILDER</span>
          <span>2026</span>
        </div>

      </div>
    </div>
  );
};

export default EntrancePortal;

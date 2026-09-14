import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { 
  Volume2, 
  VolumeX, 
  ArrowRight,
  BrainCircuit,
  Loader2,
  Zap,
  FileCode
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface EntrancePortalProps {
  onEnter: () => void;
}

export const EntrancePortal: React.FC<EntrancePortalProps> = ({ onEnter }) => {
  const [progress, setProgress] = useState(0);
  const [isOpeningAnimation, setIsOpeningAnimation] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isHoveredFolder, setIsHoveredFolder] = useState(false);

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
      color: 0xc084fc,
      wireframe: true,
      transparent: true,
      opacity: 0.22
    });
    const torusKnot = new THREE.Mesh(torusGeo, torusMat);
    scene.add(torusKnot);

    // 2. 3D Particle Starfield
    const starCount = 280;
    const starGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);

    const colorPalette = [
      new THREE.Color('#c084fc'),
      new THREE.Color('#a855f7'),
      new THREE.Color('#fbbf24'),
      new THREE.Color('#ffffff')
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

      torusKnot.rotation.x = elapsed * 0.20;
      torusKnot.rotation.y = elapsed * 0.28;

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
        const next = prev + Math.floor(Math.random() * 12) + 7;
        return Math.min(next, 100);
      });
    }, 55);

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
    <div className="fixed inset-0 z-50 overflow-hidden select-none bg-[#09090e] flex items-center justify-center font-sans">
      
      {/* 3D Three.js WebGL Canvas Layer */}
      <div 
        ref={threeCanvasRef}
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-75"
        aria-hidden="true"
      />

      {/* Subtle Halftone Dot Matrix Pattern in Top Corner */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[radial-gradient(#a855f7_1px,transparent_1px)] [background-size:16px_16px] opacity-25 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#09090e]/40 to-[#09090e] pointer-events-none z-0" />

      {/* Opening Light Burst Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-tr from-purple-800 via-lilac-500 to-amber-300 pointer-events-none z-30 transition-opacity duration-700 ${
        isOpeningAnimation ? 'opacity-90' : 'opacity-0'
      }`} />

      {/* Left & Right Shutter Panels for Cinematic Door Reveal */}
      <div 
        className={`absolute inset-y-0 left-0 w-1/2 bg-[#09090e] z-20 transition-transform duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${
          isOpeningAnimation ? '-translate-x-full shadow-[30px_0_60px_rgba(192,132,252,0.9)]' : 'translate-x-0'
        }`}
      />
      <div 
        className={`absolute inset-y-0 right-0 w-1/2 bg-[#09090e] z-20 transition-transform duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${
          isOpeningAnimation ? 'translate-x-full shadow-[-30px_0_60px_rgba(192,132,252,0.9)]' : 'translate-x-0'
        }`}
      />

      {/* =========================================================================
          MAIN TEMPLATE CANVAS CONTAINER
      ========================================================================= */}
      <div className={`relative z-40 max-w-4xl w-full h-full mx-auto px-6 py-8 flex flex-col items-center justify-between text-center transition-all duration-800 cubic-bezier(0.16, 1, 0.3, 1) ${
        isOpeningAnimation 
          ? 'scale-125 opacity-0 blur-sm pointer-events-none' 
          : 'scale-100 opacity-100 blur-0'
      }`}>
        
        {/* 1. TOP FLOATING PILL NAVIGATION BAR */}
        <div className="w-full flex items-center justify-between pt-2">
          
          <div className="opacity-0 w-10 hidden sm:block" />

          {/* Floating Pill Menu matching template */}
          <div className="mx-auto inline-flex items-center gap-1 sm:gap-2 px-2.5 py-1.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-2xl shadow-2xl">
            <span className="px-4 py-1.5 rounded-full bg-white text-black font-semibold text-xs tracking-wide shadow-md">
              Home
            </span>
            <span className="px-3 sm:px-4 py-1.5 text-zinc-400 hover:text-white text-xs font-medium transition-colors cursor-pointer" onClick={() => handleOpenPortfolio()}>
              About me
            </span>
            <span className="px-3 sm:px-4 py-1.5 text-zinc-400 hover:text-white text-xs font-medium transition-colors cursor-pointer" onClick={() => handleOpenPortfolio()}>
              Why me
            </span>
            <span className="px-3 sm:px-4 py-1.5 text-zinc-400 hover:text-white text-xs font-medium transition-colors cursor-pointer" onClick={() => handleOpenPortfolio()}>
              Projects
            </span>
            <span className="px-3 sm:px-4 py-1.5 text-zinc-400 hover:text-white text-xs font-medium transition-colors cursor-pointer" onClick={() => handleOpenPortfolio()}>
              Contact
            </span>
          </div>

          {/* Sound Toggle */}
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-2.5 rounded-full bg-black/60 border border-white/10 text-zinc-400 hover:text-white transition-all hover:scale-105 backdrop-blur-md"
            title={soundEnabled ? "Mute Audio" : "Enable Audio"}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-lilac-300" /> : <VolumeX className="w-4 h-4" />}
          </button>
        </div>

        {/* 2. CENTER HERO: HEADLINE & 3D FROSTED FOLDER */}
        <div className="my-auto py-4 flex flex-col items-center w-full max-w-2xl">
          
          {/* Headline Text matching template */}
          <div className="space-y-1 mb-6 text-center">
            <p className="text-zinc-400 text-sm sm:text-base tracking-wide font-medium">
              Explore my
            </p>
            <h2 className="text-zinc-300 text-lg sm:text-2xl font-medium tracking-wide">
              Artificial Intelligence &amp; Machine Learning
            </h2>
            
            {/* Monumental 'Portfolio' with Floating 3D Gold Medal Ribbon */}
            <div className="relative inline-block mt-1">
              <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-500 drop-shadow-2xl">
                Portfolio
              </h1>

              {/* 3D Gold Medal Badge with Star on the letter 'o' */}
              <div className="absolute -top-1 sm:-top-2 -right-4 sm:-right-8 w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center animate-bounce-slow">
                <div className="relative flex items-center justify-center">
                  {/* Glowing Medal Body */}
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-amber-600 via-amber-300 to-yellow-100 p-0.5 shadow-[0_0_20px_rgba(251,191,36,0.6)] border border-amber-200 flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-inner">
                      <span className="text-white text-xs sm:text-base font-black">★</span>
                    </div>
                  </div>
                  {/* Hanging Gold Ribbons */}
                  <div className="absolute -bottom-2 flex gap-1">
                    <div className="w-2 h-3 bg-amber-600 rotate-12 rounded-b-sm" />
                    <div className="w-2 h-3 bg-amber-600 -rotate-12 rounded-b-sm" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. CENTER 3D FROSTED GLASS FOLDER WITH SLIDING DOCUMENTS */}
          <div 
            className="relative w-72 sm:w-96 aspect-[4/3] my-2 cursor-pointer group select-none"
            onMouseEnter={() => setIsHoveredFolder(true)}
            onMouseLeave={() => setIsHoveredFolder(false)}
            onClick={handleOpenPortfolio}
          >
            {/* Folder Back Tab */}
            <div className="absolute inset-x-4 -top-3 h-8 bg-zinc-800/80 rounded-t-2xl border-t border-l border-r border-white/20" />

            {/* Folder Back Body */}
            <div className="absolute inset-0 rounded-3xl bg-zinc-900/90 border border-white/15 shadow-2xl overflow-hidden" />

            {/* 3 Sliding Document Sheets Inside Folder */}
            <div className={`absolute inset-x-8 top-3 h-4/5 flex justify-center transition-transform duration-500 ${
              isHoveredFolder ? '-translate-y-8 scale-105' : 'translate-y-0 scale-100'
            }`}>
              
              {/* Document Sheet 3 (Back) */}
              <div className="absolute w-56 sm:w-64 h-36 sm:h-44 bg-zinc-300 rounded-xl shadow-lg transform -rotate-3 translate-y-1 p-3 flex flex-col justify-between opacity-70">
                <div className="space-y-1.5">
                  <div className="w-16 h-2 rounded bg-zinc-500" />
                  <div className="w-36 h-1.5 rounded bg-zinc-400" />
                  <div className="w-28 h-1.5 rounded bg-zinc-400" />
                </div>
              </div>

              {/* Document Sheet 2 (Middle) */}
              <div className="absolute w-56 sm:w-64 h-36 sm:h-44 bg-zinc-200 rounded-xl shadow-lg transform rotate-2 translate-y-2 p-3.5 flex flex-col justify-between opacity-85">
                <div className="space-y-1.5">
                  <div className="w-20 h-2 rounded bg-purple-600/60" />
                  <div className="w-40 h-1.5 rounded bg-zinc-400" />
                  <div className="w-32 h-1.5 rounded bg-zinc-400" />
                </div>
              </div>

              {/* Document Sheet 1 (Front) */}
              <div className="absolute w-56 sm:w-64 h-36 sm:h-44 bg-white rounded-xl shadow-xl transform rotate-0 translate-y-3 p-4 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-purple-700 uppercase">
                      AI &amp; ML Projects
                    </span>
                    <FileCode className="w-3.5 h-3.5 text-zinc-400" />
                  </div>
                  <div className="w-full h-1.5 rounded bg-zinc-200" />
                  <div className="w-4/5 h-1.5 rounded bg-zinc-200" />
                  <div className="w-3/5 h-1.5 rounded bg-zinc-200" />
                </div>
                <div className="text-[9px] font-mono text-zinc-500 flex items-center justify-between">
                  <span>Python • RAG • Models</span>
                  <span className="text-purple-600 font-bold">100%</span>
                </div>
              </div>

            </div>

            {/* Folder Front Translucent Frosted Glass Cover */}
            <div className="absolute inset-0 rounded-3xl bg-zinc-800/40 backdrop-blur-xl border border-white/25 shadow-2xl p-6 flex flex-col items-center justify-center transition-all duration-300 group-hover:bg-zinc-800/30">
              
              {/* Glowing High-Tech Center Emblem matching template */}
              <div className="flex flex-col items-center justify-center space-y-1 my-auto">
                <div className="w-14 h-14 rounded-2xl bg-black/50 border border-white/20 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:border-amber-400/60 transition-all duration-300">
                  <BrainCircuit className="w-8 h-8 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                </div>
                <span className="text-xs font-cinzel font-black tracking-widest text-white uppercase mt-1">
                  VN AI &amp; ML
                </span>
                <span className="text-[9px] font-mono text-zinc-400 tracking-wider">
                  INTELLIGENT SYSTEMS
                </span>
              </div>

              {/* Floating Angled Gold Badge / Sticker on the right of the folder */}
              <div className="absolute -top-3 -right-3 sm:-right-4 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold text-[11px] font-mono tracking-tight shadow-xl rotate-6 border border-yellow-200 flex flex-col items-start leading-tight animate-pulse">
                <span className="text-xs font-black">2024-2028</span>
                <span className="text-[9px] font-semibold">B.Tech AI &amp; ML</span>
              </div>

            </div>
          </div>

          {/* 4. INTEGRATED LOADING BAR & ENTER ACTION BUTTON */}
          <div className="w-full max-w-sm mt-4">
            {!isReady ? (
              <div className="w-full rounded-2xl bg-black/70 border border-white/15 p-3.5 shadow-2xl backdrop-blur-md">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-300 mb-2">
                  <span className="flex items-center gap-2 text-zinc-300">
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-amber-400" />
                    INITIALIZING AI &amp; ML CORE...
                  </span>
                  <span className="font-bold text-amber-400">{progress}%</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-500 via-lilac-400 to-amber-400 transition-all duration-150"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            ) : (
              <button
                onClick={handleOpenPortfolio}
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-2xl bg-white hover:bg-zinc-200 text-black font-cinzel font-black text-xs sm:text-sm uppercase tracking-widest shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group border border-white/40"
              >
                <Zap className="w-4 h-4 text-black animate-bounce" />
                <span>OPEN &amp; EXPLORE PORTFOLIO</span>
                <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
              </button>
            )}
          </div>

        </div>

        {/* 5. BOTTOM MINIMALIST FOOTER STRIP */}
        <div className="w-full flex items-center justify-between text-xs font-medium text-zinc-500 tracking-wider pt-2">
          <span>{personalInfo.name}</span>
          <span>2026</span>
        </div>

      </div>
    </div>
  );
};

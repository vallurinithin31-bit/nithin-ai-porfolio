import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { 
  BrainCircuit, 
  Sparkles, 
  Terminal, 
  Volume2, 
  VolumeX, 
  Lock, 
  Unlock,
  Radio,
  Fingerprint
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface EntrancePortalProps {
  onEnter: () => void;
}

export const EntrancePortal: React.FC<EntrancePortalProps> = ({ onEnter }) => {
  const [progress, setProgress] = useState(0);
  const [isOpening, setIsOpening] = useState(false);
  const [hasStartedCelebration, setHasStartedCelebration] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [activeStage, setActiveStage] = useState<'calibrating' | 'ready' | 'opening'>('calibrating');
  const [sparks, setSparks] = useState<{ id: number; x: number; y: number; size: number; color: string }[]>([]);

  const threeCanvasRef = useRef<HTMLDivElement>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const warpSpeedRef = useRef<number>(0.003);

  // 3D Three.js WebGL Entrance Scene
  useEffect(() => {
    const container = threeCanvasRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 1. 3D Rotating Geometric Wireframes
    const torusKnotGeo = new THREE.TorusKnotGeometry(9, 2.2, 80, 16);
    const torusKnotMat = new THREE.MeshBasicMaterial({
      color: 0xc084fc,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    const torusKnot = new THREE.Mesh(torusKnotGeo, torusKnotMat);
    scene.add(torusKnot);

    const icosaGeo = new THREE.IcosahedronGeometry(13, 1);
    const icosaMat = new THREE.MeshBasicMaterial({
      color: 0xfbbf24,
      wireframe: true,
      transparent: true,
      opacity: 0.20
    });
    const icosahedron = new THREE.Mesh(icosaGeo, icosaMat);
    scene.add(icosahedron);

    // 2. 3D Particle Starfield & Vortex
    const starCount = 350;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    const colors = [
      new THREE.Color('#c084fc'),
      new THREE.Color('#a855f7'),
      new THREE.Color('#fbbf24'),
      new THREE.Color('#ffffff')
    ];

    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 120;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 90;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 80;

      const col = colors[Math.floor(Math.random() * colors.length)];
      starColors[i * 3] = col.r;
      starColors[i * 3 + 1] = col.g;
      starColors[i * 3 + 2] = col.b;
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMaterial = new THREE.PointsMaterial({
      size: 2.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Camera parallax
      camera.position.x += (mouseX * 8 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 5 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      // Rotate wireframe meshes
      torusKnot.rotation.x = elapsed * 0.3;
      torusKnot.rotation.y = elapsed * 0.4;
      icosahedron.rotation.x = -elapsed * 0.2;
      icosahedron.rotation.y = -elapsed * 0.25;

      // Particle Vortex motion
      const pos = starGeometry.attributes.position.array as Float32Array;
      const speed = warpSpeedRef.current;

      for (let i = 0; i < starCount; i++) {
        pos[i * 3 + 2] += speed * 60;
        if (pos[i * 3 + 2] > 40) {
          pos[i * 3 + 2] = -40;
          pos[i * 3] = (Math.random() - 0.5) * 120;
          pos[i * 3 + 1] = (Math.random() - 0.5) * 90;
        }
      }
      starGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      torusKnotGeo.dispose();
      torusKnotMat.dispose();
      icosaGeo.dispose();
      icosaMat.dispose();
      starGeometry.dispose();
      starMaterial.dispose();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Play synthetic futuristic sound effects with Web Audio API
  const playSciFiSound = (type: 'beep' | 'unlock' | 'laser') => {
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

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;

      if (type === 'beep') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.exponentialRampToValueAtTime(1200, now + 0.1);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
        osc.start(now);
        osc.stop(now + 0.15);
      } else if (type === 'unlock') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(400, now);
        osc.frequency.exponentialRampToValueAtTime(1600, now + 0.4);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
        osc.start(now);
        osc.stop(now + 0.6);
      } else if (type === 'laser') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(1800, now);
        osc.frequency.exponentialRampToValueAtTime(200, now + 0.5);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
        osc.start(now);
        osc.stop(now + 0.5);
      }
    } catch {
      // Audio fallback
    }
  };

  // Generate celebration spark particles
  const triggerCelebrationSparks = () => {
    const newSparks = [];
    const colors = ['#c084fc', '#a855f7', '#fbbf24', '#ffffff', '#e879f9', '#60a5fa'];
    for (let i = 0; i < 45; i++) {
      newSparks.push({
        id: i,
        x: (Math.random() - 0.5) * 850,
        y: (Math.random() - 0.5) * 650,
        size: Math.random() * 9 + 4,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    setSparks(newSparks);
  };

  // Automated Progressive Loading
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setActiveStage('ready');
          playSciFiSound('beep');
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 12) + 6;
        return Math.min(next, 100);
      });
    }, 70);

    return () => clearInterval(interval);
  }, []);

  const handleGrandOpening = () => {
    if (isOpening) return;
    setIsOpening(true);
    setActiveStage('opening');
    setHasStartedCelebration(true);
    warpSpeedRef.current = 0.08; // Accelerate 3D starfield hyperdrive!
    triggerCelebrationSparks();
    playSciFiSound('unlock');

    // Slide open doors and reveal portfolio
    setTimeout(() => {
      playSciFiSound('laser');
    }, 300);

    setTimeout(() => {
      onEnter();
    }, 1100);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden select-none bg-black flex items-center justify-center">
      
      {/* =========================================================================
          3D THREE.JS WEBGL SINGULARITY & VORTEX CANVAS (Background)
      ========================================================================= */}
      <div 
        ref={threeCanvasRef}
        className="absolute inset-0 pointer-events-none z-20 overflow-hidden opacity-80"
        aria-hidden="true"
      />

      {/* =========================================================================
          LEFT VAULT SLIDING DOOR
      ========================================================================= */}
      <div 
        className={`absolute inset-y-0 left-0 w-1/2 bg-[#09090e]/95 z-30 transition-transform duration-1000 ease-in-out flex items-center justify-start overflow-hidden backdrop-blur-sm ${
          isOpening ? '-translate-x-full shadow-[20px_0_50px_rgba(168,85,247,0.8)]' : 'translate-x-0'
        }`}
      >
        {/* Futuristic circuit grid on left door */}
        <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />
        
        {/* Left Decorative Hydraulic Marks */}
        <div className="absolute left-6 sm:left-12 top-10 font-mono text-[10px] text-lilac-400/40 space-y-1 tracking-widest uppercase">
          <div>// GATE: SECTOR_01_AI</div>
          <div>// 3D_NEURAL_ENGINE: ACTIVE</div>
        </div>

        {/* Inset & Centered AI Monogram */}
        <div className="text-6xl sm:text-8xl md:text-9xl font-cinzel font-black text-lilac-500/[0.07] ml-8 sm:ml-16 select-none pointer-events-none tracking-widest">
          AI
        </div>
      </div>

      {/* =========================================================================
          RIGHT VAULT SLIDING DOOR
      ========================================================================= */}
      <div 
        className={`absolute inset-y-0 right-0 w-1/2 bg-[#09090e]/95 z-30 transition-transform duration-1000 ease-in-out flex items-center justify-end overflow-hidden backdrop-blur-sm ${
          isOpening ? 'translate-x-full shadow-[-20px_0_50px_rgba(168,85,247,0.8)]' : 'translate-x-0'
        }`}
      >
        {/* Futuristic circuit grid on right door */}
        <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />
        
        {/* Right Decorative Status */}
        <div className="absolute right-6 sm:right-12 top-10 font-mono text-[10px] text-lilac-400/40 space-y-1 tracking-widest text-right uppercase">
          <div>WEBGL_3D: ENABLED //</div>
          <div>EST. 2026 //</div>
        </div>

        {/* Inset & Centered ML Monogram */}
        <div className="text-6xl sm:text-8xl md:text-9xl font-cinzel font-black text-lilac-500/[0.07] mr-8 sm:mr-16 select-none pointer-events-none tracking-widest">
          ML
        </div>
      </div>

      {/* =========================================================================
          PORTFOLIO PREVIEW LIGHT BURST (Visible as doors open)
      ========================================================================= */}
      <div className="absolute inset-0 z-10 bg-gradient-to-tr from-purple-900 via-lilac-600 to-indigo-900 flex items-center justify-center opacity-90 scale-110 blur-xl pointer-events-none" />

      {/* =========================================================================
          MAIN CENTER GRAND OPENING TERMINAL & CEREMONIAL LOCK
      ========================================================================= */}
      <div className={`relative z-40 max-w-3xl w-full mx-auto px-6 py-8 flex flex-col items-center text-center transition-all duration-700 ${
        isOpening ? 'scale-110 opacity-0' : 'scale-100 opacity-100'
      }`}>
        
        {/* Top Floating VIP Invitation Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/15 via-lilac-500/20 to-purple-500/15 border border-amber-400/40 text-amber-300 text-xs font-mono tracking-[0.25em] uppercase mb-6 shadow-[0_0_20px_rgba(251,191,36,0.3)] animate-pulse">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>OFFICIAL DIGITAL LAUNCH • 3D IMMERSIVE GATE</span>
        </div>

        {/* Centerpiece: Multi-tier 3D Holographic Gyroscope AI Singularity */}
        <div className="relative mb-6 flex items-center justify-center">
          
          {/* Shockwave Energy Ripples */}
          <div className="absolute w-44 h-44 rounded-full border border-lilac-500/30 animate-shockwave pointer-events-none" />
          <div className="absolute w-60 h-60 rounded-full border border-amber-400/20 animate-shockwave pointer-events-none" style={{ animationDelay: '1s' }} />

          {/* Outer Multi-layered Gyroscopes */}
          <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full border-2 border-dashed border-lilac-400/60 animate-spin-slow flex items-center justify-center shadow-[0_0_40px_rgba(192,132,252,0.4)]">
            <div 
              className="w-36 h-36 sm:w-44 sm:h-44 rounded-full border-2 border-amber-400/40 flex items-center justify-center"
              style={{ animation: 'spin-slow 14s linear infinite reverse' }}
            />
          </div>

          {/* Center Holographic AI Sphere */}
          <div className="absolute w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-tr from-purple-800 via-lilac-500 to-amber-400 p-1 shadow-[0_0_60px_rgba(192,132,252,0.9)] flex items-center justify-center animate-float">
            <div className="w-full h-full rounded-full bg-[#09090e] flex flex-col items-center justify-center border-2 border-lilac-300/60 shadow-inner">
              <BrainCircuit className="w-12 h-12 sm:w-16 sm:h-16 text-lilac-200 animate-pulse drop-shadow-[0_0_15px_rgba(192,132,252,0.8)]" />
              
              {/* Equalizer Wave Bars under core */}
              <div className="flex items-end gap-1 mt-1 h-3">
                <span className="w-1 bg-lilac-400 rounded-full animate-eq-1" />
                <span className="w-1 bg-amber-300 rounded-full animate-eq-2" />
                <span className="w-1 bg-purple-400 rounded-full animate-eq-3" />
                <span className="w-1 bg-lilac-400 rounded-full animate-eq-4" />
                <span className="w-1 bg-amber-300 rounded-full animate-eq-5" />
              </div>
            </div>
          </div>

          {/* Floating Key Metric Pills */}
          <div className="absolute -left-10 sm:-left-16 top-4 px-3 py-1 rounded-xl bg-obsidian-surface/90 border border-lilac-500/30 text-[10px] font-mono text-lilac-300 shadow-xl hidden sm:flex items-center gap-1.5 animate-float" style={{ animationDelay: '0.5s' }}>
            <Radio className="w-3 h-3 text-amber-400 animate-ping" />
            <span>AIML 2024-2028</span>
          </div>

          <div className="absolute -right-10 sm:-right-16 top-4 px-3 py-1 rounded-xl bg-obsidian-surface/90 border border-lilac-500/30 text-[10px] font-mono text-lilac-300 shadow-xl hidden sm:flex items-center gap-1.5 animate-float" style={{ animationDelay: '1.5s' }}>
            <Sparkles className="w-3 h-3 text-lilac-400" />
            <span>10,000+ Records</span>
          </div>

          <div className="absolute -left-8 sm:-left-14 bottom-4 px-3 py-1 rounded-xl bg-obsidian-surface/90 border border-lilac-500/30 text-[10px] font-mono text-lilac-300 shadow-xl hidden sm:flex items-center gap-1.5 animate-float" style={{ animationDelay: '2s' }}>
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>9+ Credentials</span>
          </div>

          <div className="absolute -right-8 sm:-right-14 bottom-4 px-3 py-1 rounded-xl bg-obsidian-surface/90 border border-lilac-500/30 text-[10px] font-mono text-lilac-300 shadow-xl hidden sm:flex items-center gap-1.5 animate-float" style={{ animationDelay: '1s' }}>
            <Terminal className="w-3 h-3 text-lilac-400" />
            <span>Agentic Systems</span>
          </div>
        </div>

        {/* Small Intro Line */}
        <p className="text-xs sm:text-sm font-mono tracking-[0.35em] text-lilac-300/80 uppercase mb-1">
          WELCOME TO THE 3D DIGITAL REALM OF
        </p>

        {/* Monumental Highlighted Name Typography */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-cinzel font-black tracking-wider uppercase leading-tight mb-2 animated-name-highlight drop-shadow-[0_0_40px_rgba(192,132,252,0.8)]">
          {personalInfo.name}
        </h1>

        {/* Core Subtitle */}
        <p className="text-xs sm:text-sm font-cinzel font-bold tracking-widest text-amber-300 uppercase mb-6">
          ARTIFICIAL INTELLIGENCE &amp; MACHINE LEARNING ENGINEER
        </p>

        {/* Live System Diagnostics Loading Bar */}
        <div className="w-full max-w-md rounded-2xl bg-obsidian-surface/90 border border-lilac-500/30 p-3.5 mb-7 shadow-2xl backdrop-blur-md">
          <div className="flex items-center justify-between text-[11px] font-mono text-zinc-300 mb-2">
            <span className="flex items-center gap-1.5 text-lilac-300">
              <Terminal className="w-3.5 h-3.5" />
              {activeStage === 'opening' 
                ? 'INITIALIZING 3D WARP SEQUENCE...' 
                : activeStage === 'ready' 
                ? '3D ENGINES READY • ACCESS GRANTED' 
                : 'SYNCHRONIZING 3D NEURAL NODES...'}
            </span>
            <span className="font-bold text-amber-400">{progress}%</span>
          </div>

          <div className="w-full h-2 rounded-full bg-black border border-lilac-500/20 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-600 via-lilac-500 to-amber-400 transition-all duration-150 shadow-[0_0_15px_rgba(251,191,36,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* =====================================================================
            INTERACTIVE BIOMETRIC GRAND OPENING BUTTON TRIGGER
        ===================================================================== */}
        <div className="relative group">
          
          {/* Pulsing button halo */}
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-amber-400 via-lilac-500 to-purple-600 opacity-75 blur-lg group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />

          <button
            onClick={handleGrandOpening}
            className="relative inline-flex items-center justify-center gap-3.5 px-10 sm:px-14 py-4 sm:py-5 rounded-2xl bg-gradient-to-r from-amber-400 via-lilac-400 to-purple-600 hover:from-amber-300 hover:to-purple-500 text-black font-cinzel font-black text-sm sm:text-base uppercase tracking-widest shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 border border-white/40"
          >
            {activeStage === 'opening' ? (
              <Unlock className="w-5 h-5 animate-spin" />
            ) : activeStage === 'ready' ? (
              <Fingerprint className="w-5 h-5 animate-pulse" />
            ) : (
              <Lock className="w-5 h-5" />
            )}
            
            <span>{activeStage === 'opening' ? '3D WARP OPENING...' : 'UNLOCK & ENTER 3D PORTFOLIO'}</span>
          </button>
        </div>

        {/* Celebration Sparks Blast during opening */}
        {hasStartedCelebration && (
          <div className="absolute inset-0 pointer-events-none z-50 flex items-center justify-center">
            {sparks.map((spark) => (
              <div
                key={spark.id}
                className="absolute rounded-full animate-ping"
                style={{
                  width: `${spark.size}px`,
                  height: `${spark.size}px`,
                  backgroundColor: spark.color,
                  transform: `translate(${spark.x}px, ${spark.y}px)`,
                  transition: 'all 1s cubic-bezier(0.1, 0.8, 0.2, 1)'
                }}
              />
            ))}
          </div>
        )}

        {/* Bottom Audio Toggle & Quick Enter Strip */}
        <div className="flex items-center justify-between w-full max-w-md mt-6 pt-4 border-t border-lilac-500/15 text-[11px] font-mono text-zinc-500">
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="flex items-center gap-1.5 hover:text-lilac-300 transition-colors"
          >
            {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-lilac-400" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span>Sound FX: {soundEnabled ? 'ON' : 'OFF'}</span>
          </button>

          <button
            onClick={handleGrandOpening}
            className="hover:text-lilac-300 transition-colors uppercase tracking-wider"
          >
            Skip Intro &gt;&gt;
          </button>
        </div>

      </div>
    </div>
  );
};

import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { 
  Volume2, 
  VolumeX, 
  ArrowRight,
  BrainCircuit,
  Loader2,
  Zap,
  HandMetal
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface EntrancePortalProps {
  onEnter: () => void;
}

export const EntrancePortal: React.FC<EntrancePortalProps> = ({ onEnter }) => {
  const [progress, setProgress] = useState(0);
  const [isOpeningAnimation, setIsOpeningAnimation] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const threeCanvasRef = useRef<HTMLDivElement>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const warpSpeedRef = useRef<number>(0.004);

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

    // 1. Central 3D Welcoming Gyroscope Torus Knot
    const torusGeo = new THREE.TorusKnotGeometry(10, 2.4, 90, 16);
    const torusMat = new THREE.MeshBasicMaterial({
      color: 0xc084fc,
      wireframe: true,
      transparent: true,
      opacity: 0.32
    });
    const torusKnot = new THREE.Mesh(torusGeo, torusMat);
    scene.add(torusKnot);

    // 2. 3D Particle Starfield & Warp Vortex
    const starCount = 300;
    const starGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);

    const colorPalette = [
      new THREE.Color('#c084fc'),
      new THREE.Color('#a855f7'),
      new THREE.Color('#fbbf24'),
      new THREE.Color('#ffffff'),
      new THREE.Color('#e879f9')
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
      size: 2.4,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
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

    // Resize Handler
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

      // Camera smooth parallax
      camera.position.x += (mouseX * 7 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 5 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      // Rotate central 3D wireframe
      torusKnot.rotation.x = elapsed * 0.28;
      torusKnot.rotation.y = elapsed * 0.38;

      // Particle Vortex motion
      const pos = starGeo.attributes.position.array as Float32Array;
      const speed = warpSpeedRef.current;

      for (let i = 0; i < starCount; i++) {
        pos[i * 3 + 2] += speed * 60;
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

      // Chord chime
      [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + i * 0.08);
        osc.frequency.exponentialRampToValueAtTime(freq * 1.5, now + i * 0.08 + 0.4);

        gain.gain.setValueAtTime(0.08, now + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.6);

        osc.start(now + i * 0.08);
        osc.stop(now + i * 0.08 + 0.6);
      });
    } catch {
      // Audio fallback
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
    }, 60);

    return () => clearInterval(interval);
  }, []);

  const handleOpenPortfolio = () => {
    if (progress < 100 || isOpeningAnimation) return;
    
    // Trigger opening animation sequence
    setIsOpeningAnimation(true);
    warpSpeedRef.current = 0.09; // Accelerate 3D vortex into hyperdrive warp!
    playOpenSound();

    setTimeout(() => {
      onEnter();
    }, 850);
  };

  const isReady = progress >= 100;

  return (
    <div 
      className={`fixed inset-0 z-50 overflow-hidden select-none bg-[#09090e] flex flex-col items-center justify-between p-6 sm:p-10 transition-all duration-850 ease-out ${
        isOpeningAnimation 
          ? 'opacity-0 scale-150 rotate-1 filter blur-sm pointer-events-none' 
          : 'opacity-100 scale-100 rotate-0 filter-none'
      }`}
    >
      {/* 3D WebGL Canvas Layer */}
      <div 
        ref={threeCanvasRef}
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-80"
        aria-hidden="true"
      />

      {/* Ambient Lighting */}
      <div className="absolute w-[44rem] h-[44rem] rounded-full bg-purple-600/20 blur-[130px] pointer-events-none z-0 animate-pulse-slow" />
      <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none z-0" />

      {/* Opening Light Burst Overlay (Flashes when clicking enter) */}
      <div className={`absolute inset-0 bg-gradient-to-tr from-purple-800 via-lilac-500 to-amber-300 pointer-events-none z-20 transition-opacity duration-700 ${
        isOpeningAnimation ? 'opacity-90' : 'opacity-0'
      }`} />

      {/* Top Welcoming Header Bar */}
      <div className="relative z-10 w-full max-w-4xl flex items-center justify-between pt-2">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-xs font-mono tracking-widest uppercase backdrop-blur-md shadow-[0_0_15px_rgba(251,191,36,0.25)] animate-pulse">
          <HandMetal className="w-3.5 h-3.5 text-amber-400" />
          <span>WELCOME, ESTEEMED VISITOR &amp; GUEST</span>
        </div>

        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          className="p-2.5 rounded-xl bg-obsidian-surface/80 border border-lilac-500/20 text-zinc-400 hover:text-lilac-300 transition-all hover:scale-105 backdrop-blur-md"
          title={soundEnabled ? "Mute Sound Effects" : "Enable Sound Effects"}
          aria-label={soundEnabled ? "Mute Sound Effects" : "Enable Sound Effects"}
        >
          {soundEnabled ? <Volume2 className="w-4 h-4 text-lilac-400" /> : <VolumeX className="w-4 h-4" />}
        </button>
      </div>

      {/* Center Welcoming Content Card & Center Button */}
      <div className="relative z-10 max-w-2xl w-full text-center flex flex-col items-center my-auto py-6">
        
        {/* Holographic Glowing Brain Core Icon */}
        <div className="relative mb-5 flex items-center justify-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-tr from-purple-700 via-lilac-500 to-amber-400 p-[1.5px] shadow-[0_0_50px_rgba(192,132,252,0.7)] animate-float">
            <div className="w-full h-full rounded-3xl bg-[#09090e] flex items-center justify-center border border-lilac-300/30">
              <BrainCircuit className="w-10 h-10 sm:w-12 sm:h-12 text-lilac-200 animate-pulse drop-shadow-[0_0_15px_rgba(192,132,252,0.9)]" />
            </div>
          </div>
        </div>

        {/* Welcoming Subtitle Banner */}
        <p className="text-xs sm:text-sm font-mono tracking-[0.35em] text-lilac-300 uppercase mb-1">
          ✦ WELCOME TO THE DIGITAL WORLD OF ✦
        </p>

        {/* Main Title Name */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-cinzel font-black tracking-wider uppercase leading-tight mb-2 animated-name-highlight drop-shadow-[0_0_35px_rgba(192,132,252,0.8)]">
          {personalInfo.name}
        </h1>

        {/* Profession Highlight */}
        <h2 className="text-base sm:text-xl font-cinzel font-bold text-amber-300 tracking-widest uppercase mb-3">
          ARTIFICIAL INTELLIGENCE &amp; MACHINE LEARNING ENGINEER
        </h2>

        {/* Warm Personal Welcoming Statement */}
        <p className="text-xs sm:text-sm text-zinc-300 max-w-lg leading-relaxed font-normal mb-8">
          Welcome! I am delighted to invite you to explore my intelligent AI architectures, autonomous agents, predictive analytics models, and verified certifications.
        </p>

        {/* =========================================================================
            ONLY CENTER BUTTON WITH INTEGRATED LOADING BAR
        ========================================================================= */}
        <div className="w-full max-w-md flex flex-col items-center">
          
          {!isReady ? (
            /* Loading State Pill */
            <div className="w-full rounded-2xl bg-obsidian-surface/95 border border-lilac-500/35 p-4 shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-300 mb-2.5">
                <span className="flex items-center gap-2 text-lilac-300">
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-amber-400" />
                  PREPARING 3D PORTFOLIO EXPERIENCE...
                </span>
                <span className="font-bold text-amber-400">{progress}%</span>
              </div>

              {/* Progress Bar Fill */}
              <div className="w-full h-2 rounded-full bg-black border border-lilac-500/20 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-600 via-lilac-500 to-amber-400 transition-all duration-150 shadow-[0_0_15px_rgba(251,191,36,0.8)]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          ) : (
            /* Interactive Ready Enter Button */
            <div className="relative group w-full sm:w-auto">
              
              {/* Glowing Aura Ring */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-amber-400 via-lilac-500 to-purple-600 opacity-80 blur-lg group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />

              <button
                onClick={handleOpenPortfolio}
                className="relative w-full sm:w-auto inline-flex items-center justify-center gap-3.5 px-10 sm:px-14 py-4 sm:py-5 rounded-2xl bg-gradient-to-r from-amber-400 via-lilac-400 to-purple-600 hover:from-amber-300 hover:to-purple-500 text-black font-cinzel font-black text-sm sm:text-base uppercase tracking-widest shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 border border-white/40"
              >
                <Zap className="w-5 h-5 text-black animate-bounce" />
                <span>ENTER &amp; EXPLORE PORTFOLIO</span>
                <ArrowRight className="w-5 h-5 text-black group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}

          {/* Quick direct skip */}
          <button
            onClick={() => {
              playOpenSound();
              setIsOpeningAnimation(true);
              setTimeout(() => onEnter(), 400);
            }}
            className="text-[11px] font-mono text-zinc-500 hover:text-lilac-300 transition-colors mt-6 tracking-wider uppercase"
          >
            Skip directly into slides &gt;&gt;
          </button>
        </div>

      </div>

      {/* Bottom Sub-tag */}
      <div className="relative z-10 text-[11px] font-mono text-zinc-500 text-center pb-2">
        Amrita Sai Institute of Science &amp; Technology • Python Developer • 2024-2028
      </div>

    </div>
  );
};

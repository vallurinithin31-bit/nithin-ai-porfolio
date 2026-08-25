import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { 
  Sparkles, 
  Volume2, 
  VolumeX, 
  ArrowRight,
  BrainCircuit,
  Loader2
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface EntrancePortalProps {
  onEnter: () => void;
}

export const EntrancePortal: React.FC<EntrancePortalProps> = ({ onEnter }) => {
  const [progress, setProgress] = useState(0);
  const [isEntering, setIsEntering] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const threeCanvasRef = useRef<HTMLDivElement>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // 3D Ambient WebGL Background Scene
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

    // 1. Central 3D AI & ML Torus Knot Wireframe
    const torusGeo = new THREE.TorusKnotGeometry(10, 2.5, 90, 16);
    const torusMat = new THREE.MeshBasicMaterial({
      color: 0xc084fc,
      wireframe: true,
      transparent: true,
      opacity: 0.28
    });
    const torusKnot = new THREE.Mesh(torusGeo, torusMat);
    scene.add(torusKnot);

    // 2. 3D Particle Starfield
    const starCount = 200;
    const starGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);

    const colorPalette = [
      new THREE.Color('#c084fc'),
      new THREE.Color('#a855f7'),
      new THREE.Color('#e9d5ff'),
      new THREE.Color('#ffffff')
    ];

    for (let i = 0; i < starCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 110;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 60;

      const col = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const starMat = new THREE.PointsMaterial({
      size: 2.0,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
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

      // Camera smooth lerp
      camera.position.x += (mouseX * 6 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 4 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      // Rotate central 3D wireframe
      torusKnot.rotation.x = elapsed * 0.25;
      torusKnot.rotation.y = elapsed * 0.35;

      // Rotate starfield
      stars.rotation.y = elapsed * 0.05;

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
  const playUnlockSound = () => {
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
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(1320, now + 0.35);

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.55);

      osc.start(now);
      osc.stop(now + 0.55);
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
        const next = prev + Math.floor(Math.random() * 14) + 8;
        return Math.min(next, 100);
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  const handleEnterClick = () => {
    if (progress < 100 || isEntering) return;
    setIsEntering(true);
    playUnlockSound();

    setTimeout(() => {
      onEnter();
    }, 650);
  };

  const isReady = progress >= 100;

  return (
    <div 
      className={`fixed inset-0 z-50 overflow-hidden select-none bg-[#09090e] flex flex-col items-center justify-between p-6 sm:p-10 transition-all duration-700 ${
        isEntering ? 'opacity-0 scale-110 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* 3D WebGL Canvas Layer */}
      <div 
        ref={threeCanvasRef}
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-75"
        aria-hidden="true"
      />

      {/* Ambient Radial Lighting */}
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none z-0 opacity-60" />
      <div className="absolute w-[40rem] h-[40rem] rounded-full bg-purple-600/15 blur-[120px] pointer-events-none z-0" />

      {/* Top Bar */}
      <div className="relative z-10 w-full max-w-4xl flex items-center justify-between pt-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lilac-500/10 border border-lilac-500/25 text-lilac-300 text-xs font-mono tracking-widest uppercase backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-lilac-400" />
          <span>AI &amp; MACHINE LEARNING</span>
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

      {/* Center Hero Card & Action Button */}
      <div className="relative z-10 max-w-2xl w-full text-center flex flex-col items-center my-auto py-8">
        
        {/* Glowing Brain Hologram Icon */}
        <div className="relative mb-6 flex items-center justify-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-tr from-purple-700 via-lilac-500 to-indigo-600 p-[1.5px] shadow-[0_0_45px_rgba(192,132,252,0.6)] animate-float">
            <div className="w-full h-full rounded-3xl bg-[#09090e] flex items-center justify-center border border-lilac-300/30">
              <BrainCircuit className="w-10 h-10 sm:w-12 sm:h-12 text-lilac-200 animate-pulse drop-shadow-[0_0_15px_rgba(192,132,252,0.8)]" />
            </div>
          </div>
        </div>

        {/* Name Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-cinzel font-black tracking-wider uppercase leading-tight mb-2 animated-name-highlight drop-shadow-[0_0_35px_rgba(192,132,252,0.7)]">
          {personalInfo.name}
        </h1>

        {/* AI & ML Role */}
        <h2 className="text-lg sm:text-2xl font-cinzel font-bold text-white tracking-widest uppercase mb-2">
          ARTIFICIAL INTELLIGENCE &amp; MACHINE LEARNING
        </h2>

        <p className="text-xs sm:text-sm font-mono text-lilac-300/80 mb-10">
          Amrita Sai Institute of Science &amp; Technology • Python Developer
        </p>

        {/* Center Loading Bar & Enter Button */}
        <div className="w-full max-w-md flex flex-col items-center">
          
          {!isReady ? (
            /* Loading State Pill */
            <div className="w-full rounded-2xl bg-obsidian-surface/90 border border-lilac-500/30 p-4 shadow-xl backdrop-blur-md">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-300 mb-2">
                <span className="flex items-center gap-2 text-lilac-300">
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-lilac-400" />
                  INITIALIZING AI &amp; ML CORE...
                </span>
                <span className="font-bold text-lilac-300">{progress}%</span>
              </div>

              {/* Progress Bar Fill */}
              <div className="w-full h-2 rounded-full bg-black/60 border border-lilac-500/20 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-600 via-lilac-500 to-indigo-500 transition-all duration-150 shadow-[0_0_12px_rgba(192,132,252,0.8)]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          ) : (
            /* Ready Enter Button */
            <div className="relative group w-full sm:w-auto">
              {/* Glowing Aura Ring */}
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-lilac-500 via-purple-600 to-indigo-600 opacity-75 blur-md group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />

              <button
                onClick={handleEnterClick}
                className="relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 sm:px-14 py-4 sm:py-4.5 rounded-2xl bg-gradient-to-r from-lilac-500 via-purple-600 to-indigo-600 hover:from-lilac-400 hover:to-indigo-500 text-white font-cinzel font-black text-sm sm:text-base uppercase tracking-widest shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>ENTER AI &amp; ML PORTFOLIO</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}

          {/* Skip option */}
          <button
            onClick={() => {
              playUnlockSound();
              setIsEntering(true);
              setTimeout(() => onEnter(), 400);
            }}
            className="text-[11px] font-mono text-zinc-500 hover:text-lilac-300 transition-colors mt-6 tracking-wider uppercase"
          >
            Skip to Portfolio &gt;&gt;
          </button>
        </div>

      </div>

      {/* Bottom Sub-tag */}
      <div className="relative z-10 text-[11px] font-mono text-zinc-500 text-center pb-2">
        © 2026 {personalInfo.name} • Built with React, Three.js &amp; Tailwind CSS
      </div>

    </div>
  );
};

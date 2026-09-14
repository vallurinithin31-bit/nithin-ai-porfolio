import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';

export const ThreeBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // --- Scene Setup ---
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 85;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // --- Crimson & Obsidian Palette ---
    const themeColors = [
      new THREE.Color('#ef4444'), // Crimson Red
      new THREE.Color('#dc2626'), // Deep Red
      new THREE.Color('#f87171'), // Light Coral
      new THREE.Color('#ffffff'), // Sparkle White
      new THREE.Color('#fda4af')  // Rose Accent
    ];

    // --- 1. 3D Neural Nodes ---
    const particleCount = window.innerWidth < 768 ? 90 : 160;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const velocities: { x: number; y: number; z: number }[] = [];

    const spreadX = 140;
    const spreadY = 100;
    const spreadZ = 80;

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * spreadX;
      positions[i * 3 + 1] = (Math.random() - 0.5) * spreadY;
      positions[i * 3 + 2] = (Math.random() - 0.5) * spreadZ;

      const randomColor = themeColors[Math.floor(Math.random() * themeColors.length)];
      colors[i * 3] = randomColor.r;
      colors[i * 3 + 1] = randomColor.g;
      colors[i * 3 + 2] = randomColor.b;

      velocities.push({
        x: (Math.random() - 0.5) * 0.05,
        y: (Math.random() - 0.5) * 0.05,
        z: (Math.random() - 0.5) * 0.03
      });
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Custom radial glow texture
    const createCircleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.3, 'rgba(248, 113, 113, 0.9)');
        gradient.addColorStop(0.65, 'rgba(220, 38, 38, 0.4)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 64, 64);
      }
      return new THREE.CanvasTexture(canvas);
    };

    const particleMaterial = new THREE.PointsMaterial({
      size: 4.2,
      map: createCircleTexture(),
      transparent: true,
      opacity: 0.85,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // --- 2. Dynamic 3D Crimson Neural Synapses ---
    const maxConnections = particleCount * 5;
    const linePositions = new Float32Array(maxConnections * 6);
    const lineColors = new Float32Array(maxConnections * 6);

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3).setUsage(THREE.DynamicDrawUsage));
    lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3).setUsage(THREE.DynamicDrawUsage));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(linesMesh);

    // --- 3. 3D Floating Geometric AI Crystals ---
    const geomGroup = new THREE.Group();

    // Geometric Cluster 1: Icosahedron in Crimson Wireframe
    const icoGeo = new THREE.IcosahedronGeometry(7, 1);
    const icoMat = new THREE.MeshBasicMaterial({
      color: 0xef4444,
      wireframe: true,
      transparent: true,
      opacity: 0.25
    });
    const icosahedron = new THREE.Mesh(icoGeo, icoMat);
    icosahedron.position.set(38, 15, -20);
    geomGroup.add(icosahedron);

    // Geometric Cluster 2: Torus Ring in Deep Red
    const torusGeo = new THREE.TorusGeometry(12, 0.35, 16, 64);
    const torusMat = new THREE.MeshBasicMaterial({
      color: 0xdc2626,
      wireframe: true,
      transparent: true,
      opacity: 0.20
    });
    const torus = new THREE.Mesh(torusGeo, torusMat);
    torus.position.set(-42, -18, -15);
    torus.rotation.x = Math.PI / 3;
    geomGroup.add(torus);

    // Geometric Cluster 3: Octahedron in Coral/White
    const octGeo = new THREE.OctahedronGeometry(5, 0);
    const octMat = new THREE.MeshBasicMaterial({
      color: 0xf87171,
      wireframe: true,
      transparent: true,
      opacity: 0.22
    });
    const octahedron = new THREE.Mesh(octGeo, octMat);
    octahedron.position.set(45, -28, -10);
    geomGroup.add(octahedron);

    scene.add(geomGroup);

    // --- 4. 3D Undulating Wave Surface ---
    const planeWidth = 160;
    const planeHeight = 100;
    const widthSegments = 40;
    const heightSegments = 30;

    const surfaceGeometry = new THREE.PlaneGeometry(planeWidth, planeHeight, widthSegments, heightSegments);
    const surfaceMaterial = new THREE.MeshBasicMaterial({
      color: 0xdc2626,
      wireframe: true,
      transparent: true,
      opacity: 0.12
    });

    const waveSurface = new THREE.Mesh(surfaceGeometry, surfaceMaterial);
    waveSurface.rotation.x = -Math.PI / 2.3;
    waveSurface.position.set(0, -35, -20);
    scene.add(waveSurface);

    const surfacePosAttr = surfaceGeometry.attributes.position;
    const originalZ = new Float32Array(surfacePosAttr.count);
    for (let i = 0; i < surfacePosAttr.count; i++) {
      originalZ[i] = surfacePosAttr.getZ(i);
    }

    // --- Mouse Interaction & Parallax ---
    let mouseX = 0;
    let mouseY = 0;
    let targetCameraX = 0;
    let targetCameraY = 0;
    let scrollY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
      targetCameraX = mouseX * 12;
      targetCameraY = mouseY * 8;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // --- Resize Handler ---
    const handleResize = () => {
      if (!container) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // --- Animation Loop ---
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Camera lerp with mouse & scroll
      const scrollOffset = (scrollY * 0.02) % 30;
      camera.position.x += (targetCameraX - camera.position.x) * 0.04;
      camera.position.y += (targetCameraY - (scrollY * 0.015) - camera.position.y) * 0.04;
      camera.lookAt(0, -scrollOffset * 0.2, 0);

      // Rotate geometric objects
      icosahedron.rotation.x = elapsedTime * 0.25;
      icosahedron.rotation.y = elapsedTime * 0.35;
      torus.rotation.x = Math.PI / 3 + Math.sin(elapsedTime * 0.4) * 0.2;
      torus.rotation.y = elapsedTime * 0.2;
      octahedron.rotation.y = elapsedTime * 0.3;
      octahedron.rotation.z = elapsedTime * 0.2;

      // Update neural node positions
      const posArray = particleGeometry.attributes.position.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        posArray[i3] += velocities[i].x;
        posArray[i3 + 1] += velocities[i].y;
        posArray[i3 + 2] += velocities[i].z;

        // Bounce boundaries
        if (Math.abs(posArray[i3]) > spreadX / 2) velocities[i].x *= -1;
        if (Math.abs(posArray[i3 + 1]) > spreadY / 2) velocities[i].y *= -1;
        if (Math.abs(posArray[i3 + 2]) > spreadZ / 2) velocities[i].z *= -1;
      }
      particleGeometry.attributes.position.needsUpdate = true;

      // Update Synapse Lines
      let lineIndex = 0;
      let colorIndex = 0;
      const connectionDistance = 22;

      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const dx = posArray[i * 3] - posArray[j * 3];
          const dy = posArray[i * 3 + 1] - posArray[j * 3 + 1];
          const dz = posArray[i * 3 + 2] - posArray[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < connectionDistance) {
            const alpha = 1.0 - dist / connectionDistance;

            linePositions[lineIndex++] = posArray[i * 3];
            linePositions[lineIndex++] = posArray[i * 3 + 1];
            linePositions[lineIndex++] = posArray[i * 3 + 2];

            linePositions[lineIndex++] = posArray[j * 3];
            linePositions[lineIndex++] = posArray[j * 3 + 1];
            linePositions[lineIndex++] = posArray[j * 3 + 2];

            // Royal violet line colors
            const r = 0.75 * alpha;
            const g = 0.52 * alpha;
            const b = 0.98 * alpha;

            lineColors[colorIndex++] = r;
            lineColors[colorIndex++] = g;
            lineColors[colorIndex++] = b;

            lineColors[colorIndex++] = r * 0.8;
            lineColors[colorIndex++] = g * 0.8;
            lineColors[colorIndex++] = b * 0.8;
          }
        }
      }

      lineGeometry.setDrawRange(0, lineIndex / 3);
      lineGeometry.attributes.position.needsUpdate = true;
      lineGeometry.attributes.color.needsUpdate = true;

      // Update 3D Wave Surface
      for (let i = 0; i < surfacePosAttr.count; i++) {
        const u = surfacePosAttr.getX(i);
        const v = surfacePosAttr.getY(i);
        const z = Math.sin(u * 0.08 + elapsedTime * 1.5) * Math.cos(v * 0.08 + elapsedTime * 1.2) * 3.5;
        surfacePosAttr.setZ(i, originalZ[i] + z);
      }
      surfacePosAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // --- Cleanup on unmount ---
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      particleGeometry.dispose();
      particleMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      icoGeo.dispose();
      icoMat.dispose();
      torusGeo.dispose();
      torusMat.dispose();
      octGeo.dispose();
      octMat.dispose();
      surfaceGeometry.dispose();
      surfaceMaterial.dispose();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [theme]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};

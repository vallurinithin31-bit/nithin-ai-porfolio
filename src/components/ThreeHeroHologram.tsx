import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeHeroHologram: React.FC = () => {
  const canvasContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = canvasContainerRef.current;
    if (!container) return;

    const width = container.clientWidth || 240;
    const height = container.clientHeight || 240;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.z = 22;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. 3D Neural Geodesic Core
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Inner glowing sphere
    const innerGeo = new THREE.SphereGeometry(3.2, 24, 24);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x9333ea,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    const innerSphere = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerSphere);

    // Outer Geodesic Icosahedron Wireframe
    const outerGeo = new THREE.IcosahedronGeometry(5.2, 1);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0xc084fc,
      wireframe: true,
      transparent: true,
      opacity: 0.75
    });
    const outerIco = new THREE.Mesh(outerGeo, outerMat);
    coreGroup.add(outerIco);

    // Outer Octahedron accent
    const octaGeo = new THREE.OctahedronGeometry(6.5, 0);
    const octaMat = new THREE.MeshBasicMaterial({
      color: 0xfbbf24,
      wireframe: true,
      transparent: true,
      opacity: 0.30
    });
    const octa = new THREE.Mesh(octaGeo, octaMat);
    coreGroup.add(octa);

    // 3. Orbital Particle Ring
    const ringParticleCount = 80;
    const ringGeo = new THREE.BufferGeometry();
    const ringPositions = new Float32Array(ringParticleCount * 3);
    const ringRadius = 7.5;

    for (let i = 0; i < ringParticleCount; i++) {
      const angle = (i / ringParticleCount) * Math.PI * 2;
      ringPositions[i * 3] = Math.cos(angle) * ringRadius + (Math.random() - 0.5) * 0.4;
      ringPositions[i * 3 + 1] = (Math.random() - 0.5) * 0.6;
      ringPositions[i * 3 + 2] = Math.sin(angle) * ringRadius + (Math.random() - 0.5) * 0.4;
    }

    ringGeo.setAttribute('position', new THREE.BufferAttribute(ringPositions, 3));
    const ringMat = new THREE.PointsMaterial({
      color: 0xe9d5ff,
      size: 1.8,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });
    const ring = new THREE.Points(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 4;
    scene.add(ring);

    // 4. Interactive Mouse Rotation
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX = x * 2;
      mouseY = y * 2;
    };

    container.addEventListener('mousemove', handleMouseMove);

    // 5. Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth target interpolation
      targetRotationY = mouseX * 1.5;
      targetRotationX = mouseY * 1.5;

      coreGroup.rotation.y += (targetRotationY + elapsed * 0.4 - coreGroup.rotation.y) * 0.05;
      coreGroup.rotation.x += (targetRotationX + elapsed * 0.25 - coreGroup.rotation.x) * 0.05;

      innerSphere.rotation.y = -elapsed * 0.6;
      outerIco.rotation.z = elapsed * 0.3;
      octa.rotation.y = elapsed * 0.5;
      ring.rotation.z = elapsed * 0.25;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        if (renderer.domElement) {
          container.removeChild(renderer.domElement);
        }
      }
      cancelAnimationFrame(animId);

      innerGeo.dispose();
      innerMat.dispose();
      outerGeo.dispose();
      outerMat.dispose();
      octaGeo.dispose();
      octaMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={canvasContainerRef} 
      className="w-48 h-48 sm:w-56 sm:h-56 relative flex items-center justify-center cursor-grab active:cursor-grabbing"
      title="Interactive 3D Holographic AI Core - Move your mouse to rotate"
    />
  );
};

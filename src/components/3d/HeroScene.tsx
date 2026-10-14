"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import * as THREE from "three";

function checkWebGLSupport(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl") || canvas.getContext("experimental-webgl"));
  } catch {
    return false;
  }
}

const emptySubscribe = () => () => {};

export default function HeroScene() {
  const mountRef = useRef<HTMLDivElement>(null);
  const isSupported = useSyncExternalStore(emptySubscribe, checkWebGLSupport, () => false);

  useEffect(() => {
    if (!isSupported) return;

    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene & Camera
    const scene = new THREE.Scene();
    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight;

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 5.2;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      currentMount.appendChild(renderer.domElement);
    } catch {
      return;
    }

    // 1. Central Complex Geometric Crystal (Torus Knot + Icosahedron Core)
    const torusGeometry = new THREE.TorusKnotGeometry(1.1, 0.28, 120, 18, 2, 3);
    const torusMaterial = new THREE.MeshStandardMaterial({
      color: 0x070b16,
      emissive: 0x0284c7,
      emissiveIntensity: 0.35,
      roughness: 0.2,
      metalness: 0.9,
      wireframe: false,
    });
    const torusMesh = new THREE.Mesh(torusGeometry, torusMaterial);
    scene.add(torusMesh);

    // Outer Wireframe Cage for Tech/Code Aesthetic
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: 0x00f2fe,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const wireMesh = new THREE.Mesh(torusGeometry, wireMaterial);
    wireMesh.scale.set(1.03, 1.03, 1.03);
    scene.add(wireMesh);

    // 2. Interactive Ambient Starfield / Particle Cloud (180 glowing nodes)
    const particleCount = 200;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const cyanColor = new THREE.Color(0x00f2fe);
    const blueColor = new THREE.Color(0x3b82f6);

    for (let i = 0; i < particleCount; i++) {
      // Spherical distribution around center
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 2.8 + 1.2;

      const sinPhi = Math.sin(phi);
      positions[i * 3] = r * sinPhi * Math.cos(theta);
      positions[i * 3 + 1] = r * sinPhi * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      const mixedColor = cyanColor.clone().lerp(blueColor, Math.random());
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const particleCloud = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleCloud);

    // 3. Orbiting Dual Light Rings
    const ringGeometry = new THREE.RingGeometry(2.2, 2.22, 64);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.3,
    });
    const ringMesh1 = new THREE.Mesh(ringGeometry, ringMaterial);
    ringMesh1.rotation.x = Math.PI / 3;
    scene.add(ringMesh1);

    const ringMesh2 = new THREE.Mesh(ringGeometry, ringMaterial);
    ringMesh2.rotation.x = -Math.PI / 4;
    ringMesh2.rotation.y = Math.PI / 6;
    scene.add(ringMesh2);

    // Dynamic Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const cyanPointLight = new THREE.PointLight(0x00f2fe, 4, 12);
    cyanPointLight.position.set(3, 3, 4);
    scene.add(cyanPointLight);

    const bluePointLight = new THREE.PointLight(0x3b82f6, 3, 12);
    bluePointLight.position.set(-3, -2, 3);
    scene.add(bluePointLight);

    // Interactive Pointer Physics
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handlePointerMove = (e: MouseEvent) => {
      const rect = currentMount.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetMouseX = x * 1.5;
      targetMouseY = -y * 1.5;
    };

    window.addEventListener("mousemove", handlePointerMove, { passive: true });

    // Animation Render Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Fluid interpolation for mouse tracking
      currentMouseX += (targetMouseX - currentMouseX) * 0.04;
      currentMouseY += (targetMouseY - currentMouseY) * 0.04;

      // Rotate central 3D mesh
      torusMesh.rotation.x = time * 0.25 + currentMouseY;
      torusMesh.rotation.y = time * 0.35 + currentMouseX;
      wireMesh.rotation.x = torusMesh.rotation.x;
      wireMesh.rotation.y = torusMesh.rotation.y;

      // Rotate particle cloud gently in reverse
      particleCloud.rotation.y = -time * 0.08 + currentMouseX * 0.5;
      particleCloud.rotation.x = time * 0.05 + currentMouseY * 0.5;

      // Orbiting rings
      ringMesh1.rotation.z = time * 0.15;
      ringMesh2.rotation.z = -time * 0.18;

      // Subtle breath bobbing
      torusMesh.position.y = Math.sin(time * 0.8) * 0.1;
      wireMesh.position.y = torusMesh.position.y;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!currentMount) return;
      const w = currentMount.clientWidth;
      const h = currentMount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      torusGeometry.dispose();
      torusMaterial.dispose();
      wireMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
    };
  }, [isSupported]);

  if (!isSupported) {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-transparent rounded-full blur-2xl animate-pulse" />
        <div className="relative w-44 h-44 border border-cyan-400/30 rounded-full flex items-center justify-center">
          <div className="w-32 h-32 border border-blue-500/40 rounded-full animate-spin duration-1000" />
        </div>
      </div>
    );
  }

  return (
    <div
      ref={mountRef}
      className="relative w-full h-full pointer-events-none select-none"
      aria-hidden="true"
    />
  );
}

"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function CosmicBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 2000);
    camera.position.z = 800;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const vertices = [];

    for (let i = 0; i < 800; i++) {
      vertices.push(
        Math.random() * 1600 - 800,
        Math.random() * 1600 - 800,
        Math.random() * 1600 - 800
      );
    }

    geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
    const material = new THREE.PointsMaterial({ color: 0x8b5cf6, size: 1.5 });
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const animate = () => {
      points.rotation.y += 0.0006;
      points.rotation.x += 0.0003;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      renderer.dispose();
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 -z-10" />;
}

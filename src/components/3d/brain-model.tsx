"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";
import type { Mesh, Group } from "three";

interface BrainModelProps {
  scrollProgress: React.RefObject<{ value: number }>;
}

/**
 * Generates a brain-like geometry by combining multiple TorusKnot shapes
 * to simulate cerebral sulci (folds/grooves).
 */
function BrainHemisphere({
  position,
  scaleX,
}: {
  position: [number, number, number];
  scaleX: number;
}) {
  return (
    <group position={position} scale={[scaleX, 1, 1]}>
      {/* Main hemisphere mass */}
      <mesh>
        <sphereGeometry args={[0.85, 48, 48]} />
        <MeshDistortMaterial
          color="#00d4ff"
          emissive="#00d4ff"
          emissiveIntensity={0.3}
          roughness={0.4}
          metalness={0.7}
          distort={0.35}
          speed={1.5}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Sulci / brain folds — TorusKnot wrapping */}
      <mesh rotation={[0.3, 0.5, 0.2]}>
        <torusKnotGeometry args={[0.7, 0.12, 128, 16, 3, 5]} />
        <meshStandardMaterial
          color="#00d4ff"
          emissive="#00d4ff"
          emissiveIntensity={0.5}
          roughness={0.3}
          metalness={0.8}
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Secondary folds layer */}
      <mesh rotation={[0.8, -0.3, 0.6]}>
        <torusKnotGeometry args={[0.65, 0.08, 100, 12, 2, 3]} />
        <meshStandardMaterial
          color="#00d4ff"
          emissive="#00b8d4"
          emissiveIntensity={0.4}
          roughness={0.5}
          metalness={0.6}
          transparent
          opacity={0.3}
        />
      </mesh>
    </group>
  );
}

export function BrainModel({ scrollProgress }: BrainModelProps) {
  const groupRef = useRef<Group>(null);
  const coreRef = useRef<Mesh>(null);

  // Synapse connection points (small glowing dots on the brain surface)
  const synapsePoints = useMemo(() => {
    const points: [number, number, number][] = [];
    for (let i = 0; i < 40; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 0.8 + Math.random() * 0.3;
      points.push([
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi),
      ]);
    }
    return points;
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Slow auto-rotation
    groupRef.current.rotation.y += delta * 0.12;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;

    // Scroll-linked scale
    const progress = scrollProgress.current?.value ?? 0;
    groupRef.current.scale.setScalar(1 - progress * 0.25);

    // Inner core pulsing
    if (coreRef.current) {
      coreRef.current.rotation.y -= delta * 0.4;
      const pulse = 0.6 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      coreRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.6}>
      <group ref={groupRef}>
        {/* Left hemisphere */}
        <BrainHemisphere position={[-0.3, 0, 0]} scaleX={1} />

        {/* Right hemisphere */}
        <BrainHemisphere position={[0.3, 0, 0]} scaleX={-1} />

        {/* Central fissure line (separating hemispheres) */}
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.01, 0.01, 1.8, 8]} />
          <meshBasicMaterial color="#00d4ff" transparent opacity={0.3} />
        </mesh>

        {/* Brain stem */}
        <mesh position={[0, -0.9, 0]}>
          <cylinderGeometry args={[0.15, 0.08, 0.4, 16]} />
          <meshStandardMaterial
            color="#00a0c8"
            emissive="#00d4ff"
            emissiveIntensity={0.3}
            roughness={0.5}
            metalness={0.6}
            transparent
            opacity={0.5}
          />
        </mesh>

        {/* Wireframe outer shell */}
        <mesh>
          <sphereGeometry args={[1.1, 24, 24]} />
          <meshBasicMaterial
            color="#00d4ff"
            wireframe
            transparent
            opacity={0.08}
          />
        </mesh>

        {/* Inner core — gold energy center */}
        <mesh ref={coreRef}>
          <sphereGeometry args={[0.3, 24, 24]} />
          <MeshDistortMaterial
            color="#c8953e"
            emissive="#c8953e"
            emissiveIntensity={0.8}
            roughness={0.2}
            metalness={0.9}
            distort={0.4}
            speed={3}
            transparent
            opacity={0.6}
          />
        </mesh>

        {/* Synapse points — small glowing dots scattered on surface */}
        {synapsePoints.map((pos, i) => (
          <mesh key={i} position={pos}>
            <sphereGeometry args={[0.02, 8, 8]} />
            <meshBasicMaterial
              color={i % 3 === 0 ? "#c8953e" : "#00d4ff"}
              transparent
              opacity={0.8}
            />
          </mesh>
        ))}

        {/* Lighting */}
        <pointLight color="#00d4ff" intensity={3} distance={6} decay={2} position={[2, 1, 2]} />
        <pointLight color="#c8953e" intensity={1.5} distance={5} decay={2} position={[-1, -1, -1]} />
        <pointLight color="#00d4ff" intensity={1} distance={4} decay={2} position={[0, 2, 0]} />
      </group>
    </Float>
  );
}

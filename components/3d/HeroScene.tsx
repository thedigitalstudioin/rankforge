"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function Globe() {
  const globeRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (globeRef.current) {
      globeRef.current.rotation.y = clock.getElapsedTime() * 0.15;
      globeRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.08) * 0.1;
    }
  });

  return (
    <mesh ref={globeRef}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshBasicMaterial
        color="#6C5CE7"
        wireframe
        transparent
        opacity={0.35}
      />
    </mesh>
  );
}

function Particles({ count = 80 }: { count?: number }) {
  const meshRef = useRef<THREE.InstancedMesh>(null);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.5 + Math.random() * 1.5;
      temp.push({
        position: new THREE.Vector3(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi)
        ),
        scale: 0.02 + Math.random() * 0.03,
        speed: 0.2 + Math.random() * 0.5,
        offset: Math.random() * Math.PI * 2,
      });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    particles.forEach((p, i) => {
      const wobble = Math.sin(t * p.speed + p.offset) * 0.15;
      dummy.position.set(
        p.position.x + wobble,
        p.position.y + Math.sin(t * p.speed * 0.5 + p.offset) * 0.1,
        p.position.z + wobble * 0.5
      );
      dummy.scale.setScalar(p.scale);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#00D2FF" transparent opacity={0.6} />
    </instancedMesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.6} color="#6C5CE7" />
      <pointLight position={[-10, -5, 5]} intensity={0.3} color="#00D2FF" />
      <Globe />
      <Particles />
      <OrbitControls
        autoRotate
        autoRotateSpeed={0.5}
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
    </>
  );
}

export default function HeroScene() {
  return (
    <Suspense fallback={null}>
      <Canvas
        gl={{ alpha: true, antialias: true }}
        camera={{ position: [0, 0, 6], fov: 45 }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </Suspense>
  );
}

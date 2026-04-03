"use client";

import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function RotatingShape({
  position,
  color,
  rotationAxis,
  children,
}: {
  position: [number, number, number];
  color: string;
  rotationAxis: "x" | "y" | "z";
  children: React.ReactNode;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    if (rotationAxis === "x") {
      ref.current.rotation.x = t * 0.3;
      ref.current.rotation.y = t * 0.1;
    } else if (rotationAxis === "y") {
      ref.current.rotation.y = t * 0.25;
      ref.current.rotation.z = t * 0.15;
    } else {
      ref.current.rotation.z = t * 0.2;
      ref.current.rotation.x = t * 0.12;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      {children}
      <meshBasicMaterial color={color} wireframe transparent opacity={0.25} />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <RotatingShape position={[-3, 0, 0]} color="#6C5CE7" rotationAxis="x">
        <icosahedronGeometry args={[1, 0]} />
      </RotatingShape>
      <RotatingShape position={[3, 1, 0]} color="#00D2FF" rotationAxis="y">
        <torusGeometry args={[0.8, 0.3, 8, 16]} />
      </RotatingShape>
      <RotatingShape position={[0, -2, 2]} color="#FF6B6B" rotationAxis="z">
        <octahedronGeometry args={[1, 0]} />
      </RotatingShape>
    </>
  );
}

export default function FloatingShapes() {
  return (
    <Suspense fallback={null}>
      <Canvas
        gl={{ alpha: true, antialias: true }}
        camera={{ position: [0, 0, 8], fov: 45 }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </Suspense>
  );
}

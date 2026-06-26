import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import { Mesh, Points, AdditiveBlending, Vector3 } from 'three';

/* ─── Central Geometric Shape ─── */

function CoreShape() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    meshRef.current.rotation.x = Math.sin(t * 0.2) * 0.3 + state.pointer.y * 0.2;
    meshRef.current.rotation.y = Math.sin(t * 0.15) * 0.3 + state.pointer.x * 0.2;
    meshRef.current.position.y = Math.sin(t * 0.3) * 0.15;
    // gentle scale pulse
    const s = 1 + Math.sin(t * 0.5) * 0.03;
    meshRef.current.scale.setScalar(s);
  });

  return (
    <Float speed={0.5} rotationIntensity={0} floatIntensity={0}>
      <mesh ref={meshRef} scale={1.2}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#22d3ee"
          emissive="#22d3ee"
          emissiveIntensity={0.15}
          metalness={0.9}
          roughness={0.1}
          distort={0.12}
          speed={1.2}
          transparent
          opacity={0.9}
          wireframe
        />
      </mesh>
    </Float>
  );
}

/* ─── Inner Glow Sphere ─── */

function GlowSphere() {
  const ref = useRef<Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.scale.setScalar(1 + Math.sin(t * 0.3) * 0.05);
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.6, 32, 32]} />
      <meshBasicMaterial
        color="#a78bfa"
        transparent
        opacity={0.15}
      />
    </mesh>
  );
}

/* ─── Orbiting Rings ─── */

function OrbitRing({ radius, color, speed, offset = 0 }: { radius: number; color: string; speed: number; offset?: number }) {
  const ref = useRef<Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * speed + offset;
    ref.current.position.x = Math.cos(t) * radius;
    ref.current.position.z = Math.sin(t) * radius;
    ref.current.rotation.x = t * 0.5;
    ref.current.rotation.z = t * 0.3;
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[0.3, 0.02, 8, 20]} />
      <meshStandardMaterial
        color={color}
        metalness={0.8}
        roughness={0.2}
        transparent
        opacity={0.4}
      />
    </mesh>
  );
}

/* ─── Particle Field ─── */

function Particles() {
  const count = 200;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 15;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 15 - 3;
    }
    return arr;
  }, []);

  const ref = useRef<Points>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.pointer.x * 0.02;
    ref.current.rotation.x = state.pointer.y * 0.01;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#60a5fa"
        transparent
        opacity={0.5}
        sizeAttenuation
        depthWrite={false}
        blending={AdditiveBlending}
      />
    </points>
  );
}

/* ─── Floating Small Cubes ─── */

function FloatingCubes() {
  const cubes = useMemo(() =>
    Array.from({ length: 8 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 4 - 2,
      ] as [number, number, number],
      scale: Math.random() * 0.15 + 0.05,
      color: [0x22d3ee, 0xa78bfa, 0xf472b6, 0x60a5fa, 0xfb923c][i % 5],
      speed: Math.random() * 0.5 + 0.2,
      offset: Math.random() * Math.PI * 2,
    })),
    []
  );

  return (
    <>
      {cubes.map((cube, i) => (
        <FloatingCube key={i} {...cube} />
      ))}
    </>
  );
}

function FloatingCube({ position, scale, color, speed, offset }: {
  position: [number, number, number];
  scale: number;
  color: number;
  speed: number;
  offset: number;
}) {
  const ref = useRef<Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * speed + offset;
    ref.current.position.y = position[1] + Math.sin(t) * 0.3;
    ref.current.rotation.x = t * 0.5;
    ref.current.rotation.y = t * 0.7;
  });

  return (
    <mesh ref={ref} position={position as unknown as Vector3} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={color}
        metalness={0.6}
        roughness={0.2}
        transparent
        opacity={0.3}
      />
    </mesh>
  );
}

/* ─── Main Scene Export ─── */

/* Suppress harmless THREE.Clock deprecation (upstream R3F issue) */
const _warn = console.warn;
console.warn = (...args) => {
  if (args[0]?.includes?.('THREE.Clock')) return;
  _warn(...args);
};

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#22d3ee" />
        <pointLight position={[-5, -3, -5]} intensity={0.4} color="#a78bfa" />
        <CoreShape />
        <GlowSphere />
        <OrbitRing radius={2} color="#22d3ee" speed={0.3} offset={0} />
        <OrbitRing radius={2.4} color="#a78bfa" speed={-0.25} offset={1.2} />
        <OrbitRing radius={1.6} color="#f472b6" speed={0.35} offset={2.5} />
        <Particles />
        <FloatingCubes />
      </Canvas>
    </div>
  );
}

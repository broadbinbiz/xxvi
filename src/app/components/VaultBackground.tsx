"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, useTexture } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import * as THREE from "three";

const crystalConfigs = [
  {
    position: [-2.8, 1.1, -0.9],
    rotation: [0.35, 0.28, -0.18],
    scale: 0.13,
    speed: 0.46,
  },
  {
    position: [2.55, 0.78, -0.7],
    rotation: [-0.26, 0.44, 0.18],
    scale: 0.16,
    speed: 0.38,
  },
  {
    position: [-1.42, -1.58, -0.55],
    rotation: [0.18, -0.34, 0.4],
    scale: 0.1,
    speed: 0.5,
  },
  {
    position: [1.72, -1.18, -0.48],
    rotation: [0.46, 0.18, -0.26],
    scale: 0.09,
    speed: 0.42,
  },
] as const;

const glintConfigs = [
  { position: [-1.55, 1.55, 0.2], scale: 0.7, delay: 0 },
  { position: [2.1, 0.2, 0.1], scale: 0.55, delay: 2.7 },
  { position: [0.95, -1.62, 0.05], scale: 0.48, delay: 5.2 },
] as const;

function useReducedMotionPreference() {
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setShouldReduceMotion(motionQuery.matches);

    updatePreference();
    motionQuery.addEventListener("change", updatePreference);

    return () => motionQuery.removeEventListener("change", updatePreference);
  }, []);

  return shouldReduceMotion;
}

function useScrollProgress(shouldReduceMotion: boolean) {
  const scrollProgress = useRef(0);

  useEffect(() => {
    if (shouldReduceMotion) {
      scrollProgress.current = 0.18;
      return undefined;
    }

    const updateScroll = () => {
      const maxScroll = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      scrollProgress.current = window.scrollY / maxScroll;
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);

    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, [shouldReduceMotion]);

  return scrollProgress;
}

function VaultImagePlane({
  scrollProgress,
  shouldReduceMotion,
}: {
  scrollProgress: { current: number };
  shouldReduceMotion: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const texture = useTexture("/xxvi-vault-bg.jpg");
  const { viewport } = useThree();
  const portraitAspect = 750 / 1240;
  const planeHeight = viewport.height * (viewport.width < 6 ? 1.2 : 1.38);
  const planeWidth = planeHeight * portraitAspect;

  useEffect(() => {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = 4;
    texture.needsUpdate = true;
  }, [texture]);

  useFrame(({ clock }) => {
    const group = groupRef.current;

    if (!group || shouldReduceMotion) {
      return;
    }

    const elapsed = clock.getElapsedTime();
    const scrollOffset = scrollProgress.current - 0.5;
    const targetX = viewport.width > 7 ? 1.05 - scrollOffset * 0.32 : 0;
    const targetY = scrollOffset * 0.5 + Math.sin(elapsed * 0.11) * 0.035;

    group.position.x = THREE.MathUtils.lerp(group.position.x, targetX, 0.035);
    group.position.y = THREE.MathUtils.lerp(group.position.y, targetY, 0.035);
    group.rotation.x = -0.035 + Math.sin(elapsed * 0.08) * 0.009;
    group.rotation.y = Math.sin(elapsed * 0.07) * 0.015;
    group.rotation.z = scrollOffset * 0.026 + Math.sin(elapsed * 0.09) * 0.012;
  });

  return (
    <group
      ref={groupRef}
      position={[viewport.width > 7 ? 1.05 : 0, 0, -2.35]}
      rotation={[-0.035, 0, 0]}
    >
      <mesh>
        <planeGeometry args={[planeWidth, planeHeight, 18, 18]} />
        <meshBasicMaterial
          color="#dfe4e7"
          depthWrite={false}
          map={texture}
          opacity={0.34}
          toneMapped={false}
          transparent
        />
      </mesh>
    </group>
  );
}

function Crystal({
  config,
  scrollProgress,
  shouldReduceMotion,
}: {
  config: (typeof crystalConfigs)[number];
  scrollProgress: { current: number };
  shouldReduceMotion: boolean;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const mesh = meshRef.current;

    if (!mesh || shouldReduceMotion) {
      return;
    }

    const elapsed = clock.getElapsedTime() * config.speed;
    mesh.position.y =
      config.position[1] +
      Math.sin(elapsed * 0.78) * 0.045 +
      (scrollProgress.current - 0.5) * 0.12;
    mesh.rotation.x = config.rotation[0] + Math.sin(elapsed) * 0.08;
    mesh.rotation.y = config.rotation[1] + Math.cos(elapsed * 0.68) * 0.08;
    mesh.rotation.z = config.rotation[2] + Math.sin(elapsed * 0.46) * 0.05;
  });

  return (
    <Float
      floatIntensity={shouldReduceMotion ? 0 : 0.08}
      rotationIntensity={shouldReduceMotion ? 0 : 0.12}
      speed={shouldReduceMotion ? 0 : config.speed}
    >
      <mesh
        ref={meshRef}
        position={config.position}
        rotation={config.rotation}
        scale={config.scale}
      >
        <octahedronGeometry args={[1, 0]} />
        <meshPhysicalMaterial
          clearcoat={0.42}
          color="#eef3f5"
          depthWrite={false}
          metalness={0.18}
          opacity={0.18}
          roughness={0.22}
          transparent
        />
      </mesh>
    </Float>
  );
}

function Glint({
  config,
  shouldReduceMotion,
}: {
  config: (typeof glintConfigs)[number];
  shouldReduceMotion: boolean;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const mesh = meshRef.current;

    if (!mesh || shouldReduceMotion) {
      return;
    }

    const material = mesh.material as THREE.MeshBasicMaterial;
    const wave =
      Math.sin(clock.getElapsedTime() * 0.38 + config.delay) * 0.5 + 0.5;
    material.opacity = wave > 0.84 ? (wave - 0.84) * 0.9 : 0;
  });

  return (
    <mesh
      ref={meshRef}
      position={config.position}
      rotation={[0, 0, -0.38]}
      scale={[config.scale, 0.012, 1]}
    >
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial
        blending={THREE.AdditiveBlending}
        color="#ffffff"
        depthWrite={false}
        opacity={0}
        toneMapped={false}
        transparent
      />
    </mesh>
  );
}

function VaultScene({ shouldReduceMotion }: { shouldReduceMotion: boolean }) {
  const scrollProgress = useScrollProgress(shouldReduceMotion);

  return (
    <>
      <ambientLight color="#dbe2e7" intensity={0.54} />
      <directionalLight color="#f8fafb" intensity={0.68} position={[3, 3, 4]} />
      <pointLight color="#9aa7b0" intensity={0.5} position={[-3, 1.4, 2.4]} />
      <VaultImagePlane
        scrollProgress={scrollProgress}
        shouldReduceMotion={shouldReduceMotion}
      />
      {crystalConfigs.map((config) => (
        <Crystal
          config={config}
          key={config.position.join("-")}
          scrollProgress={scrollProgress}
          shouldReduceMotion={shouldReduceMotion}
        />
      ))}
      {glintConfigs.map((config) => (
        <Glint
          config={config}
          key={config.position.join("-")}
          shouldReduceMotion={shouldReduceMotion}
        />
      ))}
      {!shouldReduceMotion && (
        <EffectComposer multisampling={0}>
          <Bloom intensity={0.08} luminanceThreshold={0.94} mipmapBlur />
        </EffectComposer>
      )}
    </>
  );
}

export default function VaultBackground() {
  const shouldReduceMotion = useReducedMotionPreference();

  return (
    <div className="vaultBackground pointer-events-none" aria-hidden="true">
      <div className="vaultBackgroundFallback" />
      <Canvas
        camera={{ far: 20, fov: 42, near: 0.1, position: [0, 0, 5.4] }}
        className="vaultBackgroundCanvas"
        dpr={[1, 1.35]}
        frameloop={shouldReduceMotion ? "demand" : "always"}
        gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
      >
        <Suspense fallback={null}>
          <VaultScene shouldReduceMotion={shouldReduceMotion} />
        </Suspense>
      </Canvas>
      <div className="vaultBackgroundGrade" />
      <span className="vaultBackgroundGlint vaultBackgroundGlintOne" />
      <span className="vaultBackgroundGlint vaultBackgroundGlintTwo" />
    </div>
  );
}

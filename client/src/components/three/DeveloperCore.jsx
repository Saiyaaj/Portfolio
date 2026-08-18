import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  Sparkles,
  Text,
  RoundedBox,
} from "@react-three/drei";
import { useRef } from "react";

/* ================================
   FLOATING TECH BADGE
================================ */

function TechBadge({ position, label, color, delay = 0 }) {
  const ref = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime() + delay;

    if (ref.current) {
      ref.current.position.y =
        position[1] + Math.sin(t * 1.5) * 0.18;

      ref.current.rotation.y =
        Math.sin(t * 0.7) * 0.25;
    }
  });

  return (
    <group ref={ref} position={position}>
      <RoundedBox
        args={[1.45, 0.62, 0.18]}
        radius={0.08}
        smoothness={4}
      >
        <meshStandardMaterial
          color="#111111"
          emissive={color}
          emissiveIntensity={0.15}
          metalness={0.7}
          roughness={0.25}
        />
      </RoundedBox>

      <Text
        position={[0, 0, 0.12]}
        fontSize={0.2}
        color={color}
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </group>
  );
}

/* ================================
   CODE LINE
================================ */

function CodeLine({ position, width }) {
  return (
    <mesh position={position}>
      <boxGeometry args={[width, 0.08, 0.03]} />

      <meshStandardMaterial
        color="#8b5cf6"
        emissive="#7c3aed"
        emissiveIntensity={1.8}
      />
    </mesh>
  );
}

/* ================================
   LAPTOP
================================ */

function Laptop() {
  const laptopRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (laptopRef.current) {
      laptopRef.current.rotation.y =
        Math.sin(t * 0.35) * 0.12;

      laptopRef.current.position.y =
        Math.sin(t * 1.2) * 0.12;
    }
  });

  return (
    <group ref={laptopRef}>
      {/* Laptop Base */}
      <RoundedBox
        args={[3.6, 0.18, 2.35]}
        radius={0.08}
        smoothness={4}
        position={[0, -1.25, 0]}
      >
        <meshStandardMaterial
          color="#18181b"
          metalness={0.85}
          roughness={0.25}
        />
      </RoundedBox>

      {/* Keyboard */}
      <mesh
        position={[0, -1.13, -0.15]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <planeGeometry args={[2.7, 1.45]} />

        <meshStandardMaterial
          color="#09090b"
          metalness={0.4}
          roughness={0.7}
        />
      </mesh>

      {/* Trackpad */}
      <mesh
        position={[0, -1.11, 0.72]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <planeGeometry args={[0.85, 0.5]} />

        <meshStandardMaterial
          color="#27272a"
          metalness={0.5}
        />
      </mesh>

      {/* Laptop Screen */}
      <group
        position={[0, 0.35, -0.98]}
        rotation={[-0.22, 0, 0]}
      >
        {/* Screen Frame */}
        <RoundedBox
          args={[3.7, 2.35, 0.14]}
          radius={0.12}
          smoothness={5}
        >
          <meshStandardMaterial
            color="#18181b"
            metalness={0.8}
            roughness={0.25}
          />
        </RoundedBox>

        {/* Screen */}
        <mesh position={[0, 0, 0.08]}>
          <planeGeometry args={[3.35, 1.95]} />

          <meshStandardMaterial
            color="#080812"
            emissive="#1e1b4b"
            emissiveIntensity={0.8}
          />
        </mesh>

        {/* Code Lines */}
        <CodeLine position={[-1.15, 0.6, 0.12]} width={0.75} />
        <CodeLine position={[-0.65, 0.32, 0.12]} width={1.35} />
        <CodeLine position={[-0.95, 0.04, 0.12]} width={0.9} />
        <CodeLine position={[-0.4, -0.25, 0.12]} width={1.6} />
        <CodeLine position={[-0.85, -0.55, 0.12]} width={1.1} />

        {/* Screen Text */}
        <Text
          position={[0, 0.88, 0.13]}
          fontSize={0.16}
          color="#a78bfa"
          anchorX="center"
          anchorY="middle"
        >
          {"<Saiyaaj.dev />"}
        </Text>
      </group>

      {/* Purple Under Glow */}
      <mesh position={[0, -1.38, 0]}>
        <planeGeometry args={[5.5, 4]} />

        <meshBasicMaterial
          color="#7c3aed"
          transparent
          opacity={0.08}
        />
      </mesh>
    </group>
  );
}

/* ================================
   SCENE
================================ */

function Scene() {
  const sceneRef = useRef();

  useFrame((state) => {
    const { x, y } = state.pointer;

    if (sceneRef.current) {
      sceneRef.current.rotation.y = x * 0.22;
      sceneRef.current.rotation.x = -y * 0.1;
    }
  });

  return (
    <group ref={sceneRef}>
      <Float
        speed={1.5}
        rotationIntensity={0.15}
        floatIntensity={0.35}
      >
        <Laptop />
      </Float>

      {/* Floating Technology Badges */}

      <TechBadge
        position={[3.1, 1.7, 0]}
        label="React"
        color="#61dafb"
        delay={0}
      />

      <TechBadge
        position={[-3.2, 1.1, 0]}
        label="JavaScript"
        color="#facc15"
        delay={1}
      />

      <TechBadge
        position={[3, -1.45, 0]}
        label="Node.js"
        color="#22c55e"
        delay={2}
      />

      <TechBadge
        position={[-3, -1.7, 0]}
        label="MongoDB"
        color="#10b981"
        delay={3}
      />

      {/* Sparkle Background */}
      <Sparkles
        count={180}
        scale={[9, 7, 7]}
        size={2}
        speed={0.35}
        opacity={0.85}
        color="#a78bfa"
      />
    </group>
  );
}

/* ================================
   MAIN COMPONENT
================================ */

const DeveloperCore = () => {
  return (
    <div className="h-[400px] w-full sm:h-[450px] lg:h-[550px]">
      <Canvas
        camera={{
          position: [0, 0.3, 9],
          fov: 45,
        }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={1.4} />

        <pointLight
          position={[4, 5, 5]}
          intensity={60}
          color="#8b5cf6"
        />

        <pointLight
          position={[-5, 1, 3]}
          intensity={35}
          color="#2563eb"
        />

        <pointLight
          position={[0, -4, 4]}
          intensity={25}
          color="#7c3aed"
        />

        <Scene />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
    </div>
  );
};

export default DeveloperCore;
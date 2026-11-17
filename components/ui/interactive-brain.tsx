"use client";

import { useRef, useState, useMemo, useCallback, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { AnimatePresence, motion } from "framer-motion";
import * as THREE from "three";

// ─── Zone definitions ───────────────────────────────────────────────────────

const BRAIN_ZONES = {
  ML: {
    label: "Machine Learning",
    description:
      "Building and training neural networks and ML models for predictive intelligence and pattern recognition.",
    skills: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "Deep Learning"],
    color: "#38bdf8",
    center: new THREE.Vector3(-0.8, 0.5, 0),
  },
  GENAI: {
    label: "Generative AI",
    description:
      "Building intelligent applications powered by large language models, RAG pipelines, and modern AI frameworks.",
    skills: ["LangChain", "Hugging Face", "LLMs", "RAG", "LLM Fine-Tuning", "Embeddings"],
    color: "#818cf8",
    center: new THREE.Vector3(0.8, 0.5, 0),
  },
  AGENTIC: {
    label: "Agentic AI",
    description:
      "Designing autonomous multi-agent systems that reason, plan, and execute complex multi-step workflows.",
    skills: ["Multi-Agent Systems", "MCP", "Agent Orchestration", "Tool Calling", "Autonomous Workflows"],
    color: "#c084fc",
    center: new THREE.Vector3(0, 0.8, 0.8),
  },
  NLP: {
    label: "Natural Language Processing",
    description:
      "Processing and understanding human language using transformers, semantic search, and sentiment analysis.",
    skills: ["NLP", "BERT", "DistilBERT", "Sentence Transformers", "SpaCy", "Sentiment Analysis"],
    color: "#60a5fa",
    center: new THREE.Vector3(-1.2, 0, 0),
  },
  VISION: {
    label: "Computer Vision",
    description:
      "Real-time object detection, image classification, and deep learning models for visual intelligence.",
    skills: ["OpenCV", "YOLOv5", "YOLOv8", "Vision Transformers", "Image Classification", "Object Detection"],
    color: "#34d399",
    center: new THREE.Vector3(0, -0.2, -1),
  },
  BACKEND: {
    label: "Backend, Cloud & MLOps",
    description:
      "Production-grade Python backends, containerized deployments, and cloud-based AI infrastructure.",
    skills: ["Python", "FastAPI", "Docker", "AWS", "Azure", "Google Cloud", "CI/CD"],
    color: "#f472b6",
    center: new THREE.Vector3(0, -0.9, 0),
  },
} as const;

type ZoneKey = keyof typeof BRAIN_ZONES;

// ─── Node generation ─────────────────────────────────────────────────────────

function generateZoneNodes(center: THREE.Vector3, count: number, spread: number) {
  const positions: THREE.Vector3[] = [];
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = spread * Math.cbrt(Math.random());
    positions.push(
      new THREE.Vector3(
        center.x + r * Math.sin(phi) * Math.cos(theta),
        center.y + r * Math.sin(phi) * Math.sin(theta) * 0.7,
        center.z + r * Math.cos(phi) * 0.7
      )
    );
  }
  return positions;
}

// ─── Single node mesh ─────────────────────────────────────────────────────────

interface NodeMeshProps {
  position: THREE.Vector3;
  color: string;
  zoneKey: ZoneKey;
  activeZone: ZoneKey | null;
  onHover: (zone: ZoneKey | null) => void;
  onClick: (zone: ZoneKey) => void;
}

function NodeMesh({ position, color, zoneKey, activeZone, onHover, onClick }: NodeMeshProps) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const isActive = activeZone === null || activeZone === zoneKey;

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    const targetScale = activeZone === zoneKey ? 1.6 : activeZone !== null ? 0.6 : 1.0;
    const targetOpacity = activeZone === zoneKey ? 1.0 : activeZone !== null ? 0.25 : 0.85;
    meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), delta * 5);
    const mat = meshRef.current.material as THREE.MeshStandardMaterial;
    mat.opacity = THREE.MathUtils.lerp(mat.opacity, targetOpacity, delta * 5);
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={(e) => { e.stopPropagation(); onHover(zoneKey); }}
      onPointerOut={() => onHover(null)}
      onPointerDown={(e) => { e.stopPropagation(); onClick(zoneKey); }}
    >
      <sphereGeometry args={[0.04, 8, 8]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={activeZone === zoneKey ? 2.5 : 0.8}
        transparent
        opacity={0.85}
      />
    </mesh>
  );
}

// ─── Connection lines ─────────────────────────────────────────────────────────

interface ConnectionsProps {
  nodesByZone: Record<ZoneKey, THREE.Vector3[]>;
  activeZone: ZoneKey | null;
}

function Connections({ nodesByZone, activeZone }: ConnectionsProps) {
  const lines = useMemo(() => {
    const result: { start: THREE.Vector3; end: THREE.Vector3; zone: ZoneKey; crossZone: boolean }[] = [];
    const zoneKeys = Object.keys(nodesByZone) as ZoneKey[];

    // Within-zone connections
    for (const zone of zoneKeys) {
      const nodes = nodesByZone[zone];
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          if (nodes[i].distanceTo(nodes[j]) < 0.6) {
            result.push({ start: nodes[i], end: nodes[j], zone, crossZone: false });
          }
        }
      }
    }

    // Cross-zone connections (sample subset for perf)
    for (let zi = 0; zi < zoneKeys.length; zi++) {
      for (let zj = zi + 1; zj < zoneKeys.length; zj++) {
        const nodesA = nodesByZone[zoneKeys[zi]];
        const nodesB = nodesByZone[zoneKeys[zj]];
        for (let i = 0; i < nodesA.length; i += 2) {
          for (let j = 0; j < nodesB.length; j += 2) {
            if (nodesA[i].distanceTo(nodesB[j]) < 0.9) {
              result.push({ start: nodesA[i], end: nodesB[j], zone: zoneKeys[zi], crossZone: true });
            }
          }
        }
      }
    }

    return result;
  }, [nodesByZone]);

  return (
    <>
      {lines.map((line, idx) => {
        const isActive = activeZone === null || activeZone === line.zone;
        const color = BRAIN_ZONES[line.zone].color;
        const points = [line.start, line.end];
        const geo = new THREE.BufferGeometry().setFromPoints(points);
        return (
          <lineSegments key={idx} geometry={geo}>
            <lineBasicMaterial
              color={color}
              transparent
              opacity={activeZone === line.zone ? 0.7 : activeZone !== null ? 0.05 : line.crossZone ? 0.1 : 0.3}
            />
          </lineSegments>
        );
      })}
    </>
  );
}

// ─── Signal pulses ─────────────────────────────────────────────────────────

interface PulseConnection {
  start: THREE.Vector3;
  end: THREE.Vector3;
  color: string;
}

function SignalPulses({ pulseConnections }: { pulseConnections: PulseConnection[] }) {
  const pulsesRef = useRef<{ t: number; speed: number; idx: number }[]>(
    pulseConnections.map((_, i) => ({ t: Math.random(), speed: 0.3 + Math.random() * 0.4, idx: i }))
  );
  const meshRefs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame((_, delta) => {
    pulsesRef.current.forEach((pulse, i) => {
      pulse.t += delta * pulse.speed;
      if (pulse.t > 1) pulse.t = 0;
      const conn = pulseConnections[pulse.idx];
      const mesh = meshRefs.current[i];
      if (mesh && conn) {
        mesh.position.lerpVectors(conn.start, conn.end, pulse.t);
      }
    });
  });

  return (
    <>
      {pulseConnections.map((conn, i) => (
        <mesh
          key={i}
          ref={(el) => { meshRefs.current[i] = el; }}
          position={conn.start}
        >
          <sphereGeometry args={[0.02, 6, 6]} />
          <meshStandardMaterial
            color={conn.color}
            emissive={conn.color}
            emissiveIntensity={3}
            transparent
            opacity={0.9}
          />
        </mesh>
      ))}
    </>
  );
}

// ─── Brain scene (inside Canvas) ─────────────────────────────────────────────

interface BrainSceneProps {
  activeZone: ZoneKey | null;
  lockedZone: ZoneKey | null;
  onHover: (zone: ZoneKey | null) => void;
  onClick: (zone: ZoneKey) => void;
}

function BrainScene({ activeZone, lockedZone, onHover, onClick }: BrainSceneProps) {
  const groupRef = useRef<THREE.Group>(null!);
  const mouseRef = useRef({ x: 0, y: 0 });
  const { gl } = useThree();

  // Build nodes per zone
  const nodesByZone = useMemo<Record<ZoneKey, THREE.Vector3[]>>(() => {
    return {
      ML: generateZoneNodes(BRAIN_ZONES.ML.center, 20, 0.45),
      GENAI: generateZoneNodes(BRAIN_ZONES.GENAI.center, 20, 0.45),
      AGENTIC: generateZoneNodes(BRAIN_ZONES.AGENTIC.center, 20, 0.45),
      NLP: generateZoneNodes(BRAIN_ZONES.NLP.center, 20, 0.4),
      VISION: generateZoneNodes(BRAIN_ZONES.VISION.center, 20, 0.4),
      BACKEND: generateZoneNodes(BRAIN_ZONES.BACKEND.center, 20, 0.4),
    };
  }, []);

  // Pick a subset of connections for pulses
  const pulseConnections = useMemo<PulseConnection[]>(() => {
    const result: PulseConnection[] = [];
    const zones = Object.keys(nodesByZone) as ZoneKey[];
    for (const zone of zones) {
      const nodes = nodesByZone[zone];
      const color = BRAIN_ZONES[zone].color;
      for (let i = 0; i < nodes.length - 1; i += 3) {
        if (nodes[i].distanceTo(nodes[i + 1]) < 0.6) {
          result.push({ start: nodes[i], end: nodes[i + 1], color });
        }
      }
    }
    return result;
  }, [nodesByZone]);

  useEffect(() => {
    const canvas = gl.domElement;
    const handleMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseRef.current.y = -((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    canvas.addEventListener("mousemove", handleMove);
    return () => canvas.removeEventListener("mousemove", handleMove);
  }, [gl]);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    // Auto-rotate
    groupRef.current.rotation.y += delta * 0.25;
    // Mouse parallax
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      mouseRef.current.y * 0.15,
      delta * 2
    );
  });

  const displayZone = lockedZone ?? activeZone;

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.4} color="#1e3a5f" />
      <pointLight position={[2, 2, 2]} intensity={1.5} color="#38bdf8" />
      <pointLight position={[-2, -1, -2]} intensity={1.0} color="#c084fc" />
      <pointLight position={[0, 3, 0]} intensity={0.8} color="#818cf8" />

      {/* Connections */}
      <Connections nodesByZone={nodesByZone} activeZone={displayZone} />

      {/* Nodes */}
      {(Object.keys(nodesByZone) as ZoneKey[]).map((zone) =>
        nodesByZone[zone].map((pos, i) => (
          <NodeMesh
            key={`${zone}-${i}`}
            position={pos}
            color={BRAIN_ZONES[zone].color}
            zoneKey={zone}
            activeZone={displayZone}
            onHover={lockedZone ? () => {} : onHover}
            onClick={onClick}
          />
        ))
      )}

      {/* Signal pulses */}
      <SignalPulses pulseConnections={pulseConnections} />
    </group>
  );
}

// ─── Fallback SVG ─────────────────────────────────────────────────────────────

function BrainFallback({
  activeZone,
  onZoneClick,
}: {
  activeZone: ZoneKey | null;
  onZoneClick: (zone: ZoneKey) => void;
}) {
  const zones = Object.keys(BRAIN_ZONES) as ZoneKey[];
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-4 p-6">
      <svg viewBox="0 0 200 160" className="w-48 h-auto opacity-70">
        <ellipse cx="100" cy="80" rx="85" ry="65" fill="none" stroke="#38bdf8" strokeWidth="1" opacity="0.4" />
        {zones.map((zone, i) => {
          const angle = (i / zones.length) * Math.PI * 2;
          const x = 100 + 55 * Math.cos(angle);
          const y = 80 + 42 * Math.sin(angle);
          const color = BRAIN_ZONES[zone].color;
          return (
            <g key={zone} style={{ cursor: "pointer" }} onClick={() => onZoneClick(zone)}>
              <circle cx={x} cy={y} r={10} fill={color} opacity={activeZone === zone ? 1 : 0.5} />
              {zones.map((z2, j) => {
                if (j <= i) return null;
                const angle2 = (j / zones.length) * Math.PI * 2;
                const x2 = 100 + 55 * Math.cos(angle2);
                const y2 = 80 + 42 * Math.sin(angle2);
                return (
                  <line key={z2} x1={x} y1={y} x2={x2} y2={y2} stroke="#38bdf8" strokeWidth="0.5" opacity="0.2" />
                );
              })}
            </g>
          );
        })}
      </svg>
      <div className="flex flex-wrap gap-2 justify-center max-w-xs">
        {zones.map((zone) => (
          <button
            key={zone}
            onClick={() => onZoneClick(zone)}
            className="px-3 py-1 rounded-full text-xs border transition-all"
            style={{
              borderColor: BRAIN_ZONES[zone].color,
              color: BRAIN_ZONES[zone].color,
              backgroundColor: activeZone === zone ? `${BRAIN_ZONES[zone].color}22` : "transparent",
            }}
          >
            {BRAIN_ZONES[zone].label}
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Skill card overlay ───────────────────────────────────────────────────────

function SkillCard({ zone }: { zone: ZoneKey }) {
  const data = BRAIN_ZONES[zone];
  return (
    <motion.div
      key={zone}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-64 max-w-[90vw]"
      style={{
        background: "rgba(4,7,29,0.88)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(56,189,248,0.3)",
        borderRadius: "16px",
        padding: "24px",
      }}
    >
      <p
        className="text-xs uppercase tracking-widest font-semibold mb-2"
        style={{ color: data.color }}
      >
        {data.label}
      </p>
      <p className="text-xs text-white/60 mb-4 leading-relaxed">{data.description}</p>
      <div className="flex flex-wrap gap-2">
        {data.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 rounded-full text-xs"
            style={{
              background: "rgba(56,189,248,0.08)",
              border: "1px solid rgba(56,189,248,0.2)",
              color: "#e2e8f0",
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export const InteractiveBrain = () => {
  const [activeZone, setActiveZone] = useState<ZoneKey | null>(null);
  const [lockedZone, setLockedZone] = useState<ZoneKey | null>(null);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const ctx =
        canvas.getContext("webgl2") ||
        canvas.getContext("webgl") ||
        canvas.getContext("experimental-webgl");
      if (!ctx) setWebglSupported(false);
    } catch {
      setWebglSupported(false);
    }
  }, []);

  const handleHover = useCallback((zone: ZoneKey | null) => {
    setActiveZone(zone);
  }, []);

  const handleClick = useCallback((zone: ZoneKey) => {
    setLockedZone((prev) => (prev === zone ? null : zone));
  }, []);

  const displayZone = lockedZone ?? activeZone;

  return (
    <div className="relative w-full h-full min-h-[480px]">
      {/* Skill card — left side on desktop, hidden on mobile if no active */}
      <div className="hidden lg:block">
        <AnimatePresence mode="wait">
          {displayZone && <SkillCard key={displayZone} zone={displayZone} />}
        </AnimatePresence>
      </div>

      {/* Brain */}
      {webglSupported ? (
        <Canvas
          camera={{ position: [0, 0, 3.5], fov: 55 }}
          gl={{ antialias: true, alpha: true }}
          style={{ background: "transparent" }}
          className="w-full h-full"
        >
          <BrainScene
            activeZone={activeZone}
            lockedZone={lockedZone}
            onHover={handleHover}
            onClick={handleClick}
          />
        </Canvas>
      ) : (
        <BrainFallback activeZone={displayZone} onZoneClick={handleClick} />
      )}

      {/* Skill card — below on mobile */}
      <div className="lg:hidden mt-4">
        <AnimatePresence mode="wait">
          {displayZone && (
            <motion.div
              key={displayZone}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.25 }}
              style={{
                background: "rgba(4,7,29,0.88)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(56,189,248,0.3)",
                borderRadius: "16px",
                padding: "16px",
              }}
            >
              <p
                className="text-xs uppercase tracking-widest font-semibold mb-2"
                style={{ color: BRAIN_ZONES[displayZone].color }}
              >
                {BRAIN_ZONES[displayZone].label}
              </p>
              <div className="flex flex-wrap gap-2">
                {BRAIN_ZONES[displayZone].skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded-full text-xs"
                    style={{
                      background: "rgba(56,189,248,0.08)",
                      border: "1px solid rgba(56,189,248,0.2)",
                      color: "#e2e8f0",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

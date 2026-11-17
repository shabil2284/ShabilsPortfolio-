"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUserAstronaut,
  FaNetworkWired,
  FaRobot,
  FaBrain,
  FaDatabase,
  FaCheckDouble,
  FaArrowRight,
} from "react-icons/fa6";
import { approachSteps } from "@/data";

const ARCH_NODES = [
  {
    id: "input",
    label: "User Input",
    tech: "Multi-modal / Queries",
    icon: FaUserAstronaut,
    color: "#38bdf8",
    description: "Accepts natural language prompts, structured enterprise documents, audio or financial time-series data.",
  },
  {
    id: "gateway",
    label: "API Gateway",
    tech: "FastAPI / Auth / Masking",
    icon: FaNetworkWired,
    color: "#60a5fa",
    description: "High-throughput async routing, rate-limiting, and Protecto PII data tokenization before AI exposure.",
  },
  {
    id: "agent",
    label: "AI Agent",
    tech: "LangGraph / MCP",
    icon: FaRobot,
    color: "#818cf8",
    description: "Autonomous planning, cyclical reasoning loops, state management, and intelligent tool selection.",
  },
  {
    id: "llm",
    label: "LLM Engine",
    tech: "Bedrock / Ollama / Mistral",
    icon: FaBrain,
    color: "#c084fc",
    description: "Fine-tuned open-weights and frontier reasoning models operating locally or via private cloud VPC.",
  },
  {
    id: "tools",
    label: "Vector DB & Tools",
    tech: "ChromaDB / Embeddings",
    icon: FaDatabase,
    color: "#34d399",
    description: "Dense semantic retrieval with cross-encoders, real-time WebSocket market streams, and execution APIs.",
  },
  {
    id: "response",
    label: "Verified Output",
    tech: "JSON / Schema Validated",
    icon: FaCheckDouble,
    color: "#38bdf8",
    description: "Strict Pydantic parsing, Hallucination-check validation gates, and low-latency client delivery.",
  },
];

export const Approach = () => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  return (
    <section id="architecture" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-sky-400">
            System Design & Engineering
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            How I Build <span className="bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">Intelligent Systems</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-slate-300">
            A production AI system is never just a model prompt. It is a resilient,
            verified architecture engineered from ingestion to output.
          </p>
        </div>

        {/* Animated Interactive Pipeline Architecture */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-[#04071d]/80 p-6 sm:p-10 backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-sky-400 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
              Live Pipeline Architecture
            </span>
            <span className="text-xs text-slate-400 hidden sm:inline">
              Hover or click any node to inspect subsystem mechanics
            </span>
          </div>

          {/* Nodes Horizontal Flow */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 relative">
            {ARCH_NODES.map((node, i) => {
              const Icon = node.icon;
              const isSelected = selectedNode === node.id;
              return (
                <div key={node.id} className="relative flex flex-col items-center">
                  <motion.div
                    onClick={() => setSelectedNode(isSelected ? null : node.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className={`cursor-pointer w-full rounded-2xl border p-5 flex flex-col items-center text-center transition-all duration-300 ${
                      isSelected
                        ? "border-sky-400 bg-sky-500/20 shadow-lg shadow-sky-500/25"
                        : "border-white/10 bg-[#000319]/90 hover:border-sky-400/50 hover:bg-slate-900/60"
                    }`}
                  >
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl mb-3 shadow-inner"
                      style={{ backgroundColor: `${node.color}15`, color: node.color }}
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    <h4 className="text-sm font-bold text-white tracking-wide">
                      {node.label}
                    </h4>

                    <span className="mt-1 text-[11px] font-mono text-slate-300">
                      {node.tech}
                    </span>
                  </motion.div>

                  {/* Flow Arrow to next node */}
                  {i < ARCH_NODES.length - 1 && (
                    <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-sky-400/40">
                      <FaArrowRight className="h-3 w-3 animate-pulse" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Node Detail Drawer */}
          <AnimatePresence mode="wait">
            {selectedNode && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-8 rounded-2xl border border-sky-500/30 bg-sky-500/10 p-5 backdrop-blur-md"
              >
                {(() => {
                  const node = ARCH_NODES.find((n) => n.id === selectedNode);
                  if (!node) return null;
                  return (
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: node.color }} />
                          <h5 className="text-base font-bold text-white">
                            {node.label} Mechanics
                          </h5>
                          <span className="text-xs font-mono text-sky-300">
                            ({node.tech})
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-slate-200">
                          {node.description}
                        </p>
                      </div>

                      <button
                        onClick={() => setSelectedNode(null)}
                        className="text-xs text-slate-300 hover:text-white underline underline-offset-4"
                      >
                        Dismiss
                      </button>
                    </div>
                  );
                })()}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 3 Engineering Methodology Cards */}
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {approachSteps.map((step, index) => (
            <motion.div
              key={step.phase}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, borderColor: "rgba(56, 189, 248, 0.4)" }}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#04071d]/85 p-8 backdrop-blur-xl shadow-xl transition-all duration-300"
            >
              <div>
                <span className="inline-block rounded-full border border-sky-400/30 bg-sky-500/10 px-3.5 py-1 text-xs font-mono font-bold tracking-wider text-sky-300">
                  {step.phase}
                </span>

                <h3 className="mt-5 text-xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-sky-400 font-medium">
                <span>Phase Completion Verification</span>
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

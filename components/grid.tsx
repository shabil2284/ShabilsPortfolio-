"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaLocationDot, FaMicrochip, FaShieldHalved } from "react-icons/fa6";
import { GridGlobe } from "@/components/grid-globe";
import { education } from "@/data";

export const Grid = () => {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-sky-400">
            Background & Focus
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            About <span className="bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">My Engineering</span>
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Narrative Bio & Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 lg:col-span-7"
          >
            <div className="rounded-2xl border border-white/10 bg-[#04071d]/85 p-8 backdrop-blur-xl shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Architecting Production-Ready Artificial Intelligence
              </h3>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am an <strong className="text-white font-semibold">AI/ML Engineer, Generative AI Developer, and Agentic AI Specialist</strong> based in Doha, Qatar. I specialize in taking raw machine learning research and transforming it into battle-tested, low-latency, and privacy-preserving production systems.
                </p>
                <p>
                  My engineering journey spans developing multi-agent financial systems, document intelligence pipelines with 98% extraction accuracy, and hybrid 3D CNN plus Vision Transformer architectures for medical classification.
                </p>
                <p>
                  Whether fine-tuning open-weights models with Ollama and Hugging Face, architecting complex RAG pipelines with LangChain and vector databases, or orchestrating autonomous tool-calling workflows via MCP, my philosophy centers on shipping software that creates tangible business impact.
                </p>
              </div>

              {/* Status Badges */}
              <div className="mt-6 flex flex-wrap gap-2 pt-6 border-t border-white/[0.08]">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-300">
                  <FaLocationDot className="h-3 w-3" />
                  Doha, Qatar
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Available Immediately
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300">
                  <FaShieldHalved className="h-3 w-3" />
                  QID Valid · NOC Available
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-600 bg-slate-800/40 px-3 py-1 text-xs font-medium text-slate-300">
                  <FaMicrochip className="h-3 w-3" />
                  No Sponsorship Needed
                </span>
              </div>
            </div>

            {/* Academic Credential Card */}
            <div className="rounded-2xl border border-white/10 bg-[#04071d]/85 p-6 backdrop-blur-xl flex items-center gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-sky-400/30 bg-sky-500/10 text-sky-400">
                <FaGraduationCap className="h-6 w-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-sky-400">
                  Degree & Alma Mater
                </span>
                <h4 className="text-base font-bold text-white">
                  {education.degree}
                </h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  {education.school} ({education.period})
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3D Interactive World Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-[420px] lg:h-[520px] w-full rounded-3xl border border-white/10 bg-[#04071d]/80 overflow-hidden backdrop-blur-xl flex flex-col justify-between p-6 lg:col-span-5"
          >
            <div className="relative z-20">
              <span className="inline-flex items-center rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-300">
                Global Connectivity
              </span>
              <h3 className="mt-2 text-xl font-bold text-white">
                Based in Doha, Collaborative Worldwide
              </h3>
              <p className="mt-1 text-xs text-slate-300">
                Flexible across US, European, and Asian timezones with distributed CI/CD workflows.
              </p>
            </div>

            {/* Globe Visualizer */}
            <div className="absolute inset-0 flex items-center justify-center">
              <GridGlobe />
            </div>

            <div className="relative z-20 text-center">
              <p className="text-[11px] font-mono text-slate-300">
                Hub: Doha (25.28° N, 51.53° E) · Active Arcs
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

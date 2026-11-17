"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowRight, FaFileArrowDown, FaEnvelope } from "react-icons/fa6";
import { HiOutlineSparkles } from "react-icons/hi2";

import { Spotlight } from "@/components/ui/spotlight";
import { InteractiveBrain } from "@/components/ui/interactive-brain";
import { links } from "@/config";

const TYPING_ROLES = [
  "AI/ML Engineer",
  "Generative AI Developer",
  "Agentic AI Specialist",
  "Python Backend Developer",
  "LLM Application Developer",
];

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % TYPING_ROLES.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden pb-16 pt-28 md:pt-36">
      {/* Dynamic Background Spotlights */}
      <div>
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="left-full top-10 h-[80vh] w-[50vw]"
          fill="#8b5cf6"
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="#06b6d4"
        />
      </div>

      {/* Grid Pattern Background with Radial Vignette */}
      <div className="absolute inset-0 flex h-full w-full items-center justify-center bg-[#000319] bg-grid-white/[0.02]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#000319] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Professional Presentation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start lg:col-span-7"
          >
            {/* Status Pill */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-medium tracking-wide text-sky-200">
                Available · Doha, Qatar · QID Valid · NOC Available
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Engineering Intelligence.{" "}
              <span className="block mt-1 bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                Building the Future with AI.
              </span>
            </h1>

            {/* Rotating Role Typing Strip */}
            <div className="mt-4 flex h-8 items-center gap-2 text-lg sm:text-xl font-semibold text-sky-400">
              <HiOutlineSparkles className="h-5 w-5 text-sky-400" />
              <span>Specializing as</span>
              <motion.span
                key={TYPING_ROLES[roleIndex]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="text-white border-b-2 border-sky-400 pb-0.5"
              >
                {TYPING_ROLES[roleIndex]}
              </motion.span>
            </div>

            {/* Subheading & Introduction */}
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-300 max-w-2xl">
              I build intelligent systems that combine Machine Learning, Large Language
              Models, Generative AI, and autonomous AI agents to solve real-world problems.
              Bridging cutting-edge research with production-grade backend architectures.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:shadow-sky-500/40 hover:scale-[1.02] active:scale-[0.98]"
              >
                View My Projects
                <FaArrowRight className="h-3.5 w-3.5" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-md transition-all hover:border-sky-500/50 hover:bg-slate-800/80 active:scale-[0.98]"
              >
                Contact Me
                <FaEnvelope className="h-3.5 w-3.5 text-sky-400" />
              </Link>

              <a
                href={links.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-900/60 text-slate-200 backdrop-blur-md transition-all hover:border-sky-500/50 hover:text-sky-400 hover:scale-105"
                aria-label="GitHub Profile"
              >
                <FaGithub className="h-5 w-5" />
              </a>

              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-900/60 text-slate-200 backdrop-blur-md transition-all hover:border-sky-500/50 hover:text-sky-400 hover:scale-105"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Signature 3D Interactive AI Brain */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex flex-col items-center justify-center lg:col-span-5"
          >
            <div className="relative w-full aspect-square max-w-[500px]">
              <InteractiveBrain />
            </div>
            <p className="mt-3 text-center text-xs tracking-wider text-slate-400">
              Interactive 3D Neural Brain · Hover or tap regions to explore skills
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

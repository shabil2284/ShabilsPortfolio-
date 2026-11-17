"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";

import { projects } from "@/data";

export const RecentProjects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-sky-400">
            Engineered In Code
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Featured <span className="bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">AI Projects</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-slate-300">
            Architected and implemented production systems spanning Generative AI,
            autonomous multi-agent workflows, computer vision, and algorithmic trading.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ id, des, gradient, tech, link, title }, index) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              whileHover={{
                y: -6,
                boxShadow: "0 20px 35px -10px rgba(56, 189, 248, 0.15)",
                borderColor: "rgba(56, 189, 248, 0.4)",
              }}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#04071d]/80 backdrop-blur-xl transition-all duration-300"
            >
              {/* Card Banner with Gradient & Number */}
              <div className={`relative h-36 w-full overflow-hidden bg-gradient-to-br ${gradient} p-6 flex flex-col justify-between`}>
                <span className="absolute -right-2 -top-4 text-8xl font-black text-white/5 select-none transition-transform group-hover:scale-105">
                  {String(id).padStart(2, "0")}
                </span>

                <div className="flex items-center justify-between z-10">
                  <span className="inline-flex items-center rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1 text-xs font-semibold tracking-wider text-sky-300">
                    Project {String(id).padStart(2, "0")}
                  </span>
                </div>

                <div className="z-10 flex flex-wrap gap-1.5">
                  {tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/15 bg-black/50 px-2 py-0.5 text-[11px] font-medium text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                  {tech.length > 3 && (
                    <span className="rounded-md border border-white/15 bg-black/50 px-2 py-0.5 text-[11px] font-medium text-slate-300">
                      +{tech.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors line-clamp-2">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-300 line-clamp-3">
                  {des}
                </p>

                {/* All Tech Pills */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white/[0.04] px-2.5 py-0.5 text-xs text-slate-300 border border-white/[0.06]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer with GitHub Link */}
              <div className="border-t border-white/[0.08] p-6 pt-4">
                <Link
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                >
                  <FaGithub className="h-4 w-4" />
                  <span>View Repository</span>
                  <FaArrowUpRightFromSquare className="h-3 w-3 ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

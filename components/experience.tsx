"use client";

import { motion } from "framer-motion";
import {
  FaBoxesStacked,
  FaBrain,
  FaChartLine,
  FaGraduationCap,
  FaLaptopCode,
} from "react-icons/fa6";

import { education, workExperience } from "@/data";

const icons = {
  ai: FaBrain,
  data: FaChartLine,
  web: FaLaptopCode,
  ops: FaBoxesStacked,
} as const;

export const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-sky-400">
            Professional Track Record
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Engineering <span className="bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-slate-300">
            Demonstrated hands-on experience designing, testing, and deploying production machine learning architectures.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative mt-16 max-w-4xl mx-auto">
          {/* Vertical Glowing Line */}
          <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-sky-500 via-indigo-500 to-purple-500 sm:left-8" />

          <div className="space-y-12">
            {workExperience.map((item, index) => {
              const Icon = icons[item.icon];
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative flex items-start gap-6 sm:gap-8"
                >
                  {/* Glowing Node Marker */}
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-sky-400/40 bg-[#000319] shadow-lg shadow-sky-500/20 sm:h-16 sm:w-16">
                    <Icon className="h-5 w-5 text-sky-400 sm:h-6 sm:w-6" />
                  </div>

                  {/* Card Content */}
                  <div className="flex-1 rounded-2xl border border-white/10 bg-[#04071d]/85 p-6 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-sky-500/40 hover:shadow-sky-500/10">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.08] pb-4">
                      <div>
                        <h3 className="text-lg font-bold text-white sm:text-xl">
                          {item.title}
                        </h3>
                        <p className="text-sm font-semibold text-sky-400">
                          {item.company}
                        </p>
                      </div>

                      <div className="text-right">
                        <span className="inline-block rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-300">
                          {item.period}
                        </span>
                        <p className="mt-1 text-xs text-slate-300">{item.location}</p>
                      </div>
                    </div>

                    <ul className="mt-4 space-y-2.5">
                      {item.points.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 text-sm text-slate-300">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Education Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-4xl rounded-2xl border border-white/10 bg-gradient-to-r from-sky-500/10 via-indigo-500/5 to-purple-500/10 p-6 sm:p-8 backdrop-blur-xl"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-purple-400/40 bg-[#000319] shadow-lg shadow-purple-500/20">
              <FaGraduationCap className="h-7 w-7 text-purple-400" />
            </div>

            <div className="flex-1">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
                Academic Foundation
              </span>
              <h3 className="mt-1 text-xl font-bold text-white">
                {education.degree}
              </h3>
              <p className="text-sm font-medium text-slate-300">
                {education.school}
              </p>
              <p className="mt-1 text-xs text-slate-300">
                {education.period} · {education.location}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

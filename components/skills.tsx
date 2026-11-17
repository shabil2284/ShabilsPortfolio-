"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { stats, skillGroups } from "@/data";

function parseStatValue(raw: string): number {
  return parseFloat(raw.replace(/[^0-9.]/g, ""));
}

function StatCard({ value, label }: { value: string; label: string }) {
  const [displayed, setDisplayed] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const target = parseStatValue(value);
  const suffix = value.replace(/[0-9.]/g, "");
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const duration = 1200;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplayed(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center rounded-2xl border border-white/10 p-6 text-center shadow-lg transition-all hover:border-sky-500/30 hover:shadow-sky-500/10"
      style={{ background: "rgba(4,7,29,0.85)" }}
    >
      <span className="text-4xl font-extrabold text-sky-400 sm:text-5xl">
        {displayed}
        {suffix}
      </span>
      <span className="mt-2 text-xs font-medium uppercase tracking-wider text-slate-300 sm:text-sm">
        {label}
      </span>
    </div>
  );
}

export const Skills = () => {
  const [activeTab, setActiveTab] = useState<string>(skillGroups[0].title);
  const activeGroup = skillGroups.find((g) => g.title === activeTab) || skillGroups[0];

  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-sky-400">
            Engineered For High-Performance AI
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Technical <span className="bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">Arsenal</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-slate-300">
            Every technology in my stack is chosen deliberately to build scalable,
            production-ready intelligent systems.
          </p>
        </div>

        {/* Quantified Impact Metrics */}
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {stats.map((s) => (
            <StatCard key={s.label} value={s.value} label={s.label} />
          ))}
        </div>

        {/* Category Tabs */}
        <div className="relative mt-14 flex flex-wrap justify-center gap-2 border-b border-white/10 pb-2">
          {skillGroups.map((group) => {
            const isActive = activeTab === group.title;
            return (
              <button
                key={group.title}
                onClick={() => setActiveTab(group.title)}
                className={`relative rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none ${
                  isActive
                    ? "text-sky-300"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]"
                }`}
              >
                {group.title}
                {isActive && (
                  <motion.div
                    layoutId="activeSkillTabIndicator"
                    className="absolute inset-x-2 -bottom-2.5 h-0.5 rounded-full bg-gradient-to-r from-sky-400 to-purple-400"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Interactive Skill Cards Grid */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
            >
              {activeGroup.items.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03, duration: 0.25 }}
                  whileHover={{
                    scale: 1.02,
                    borderColor: "rgba(56,189,248,0.5)",
                    backgroundColor: "rgba(56,189,248,0.06)",
                    boxShadow: "0 0 20px rgba(56,189,248,0.15)",
                  }}
                  className="flex items-center gap-3 rounded-xl border border-white/10 p-4 transition-all"
                  style={{ background: "rgba(4,7,29,0.7)" }}
                >
                  <span className="h-2 w-2 rounded-full bg-sky-400 shadow-sm shadow-sky-400" />
                  <span className="text-sm font-medium text-slate-100">{skill}</span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

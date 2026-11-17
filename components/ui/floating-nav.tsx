"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { FaBars, FaXmark } from "react-icons/fa6";

import { navItems } from "@/data";
import { cn } from "@/lib/utils";

type FloatingNavProps = {
  navItems: typeof navItems;
  className?: string;
};

export const FloatingNav = ({ navItems, className }: FloatingNavProps) => {
  const { scrollY } = useScroll();

  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (typeof current === "number") {
      if (current < 60) {
        setVisible(true);
      } else {
        if (current > lastScrollY && current > 120) {
          setVisible(false); // Scrolling down
        } else {
          setVisible(true); // Scrolling up
        }
      }
      setLastScrollY(current);
    }
  });

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.nav
          initial={{ opacity: 1, y: -100 }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className={cn(
            "fixed inset-x-0 top-6 z-[5000] mx-auto flex max-w-fit items-center gap-6 rounded-full border border-white/10 bg-[#000319]/85 px-6 py-3 shadow-2xl backdrop-blur-xl",
            className
          )}
        >
          {/* Monogram Brand Mark */}
          <Link
            href="#"
            className="flex items-center gap-2 font-mono text-xs font-black tracking-widest text-sky-400 hover:text-white transition-colors"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-sky-400/40 bg-sky-500/10 shadow-sm shadow-sky-400/30">
              SA
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="text-xs font-semibold tracking-wider text-slate-300 transition-colors hover:text-sky-400"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="#contact"
              className="rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-1.5 text-xs font-semibold text-white shadow-md shadow-sky-500/20 transition-all hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-300 hover:text-white transition-colors p-1"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <FaXmark className="h-4 w-4" /> : <FaBars className="h-4 w-4" />}
          </button>
        </motion.nav>
      </AnimatePresence>

      {/* Mobile Fullscreen Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-[4999] flex flex-col items-center justify-center gap-8 bg-[#000319]/95 p-6 backdrop-blur-2xl md:hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-bold text-slate-200 transition-colors hover:text-sky-400"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/30"
            >
              Get in Touch
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

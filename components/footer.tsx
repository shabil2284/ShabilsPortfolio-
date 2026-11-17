"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaFileArrowDown,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

import { links } from "@/config";

export const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${links.ownerEmail}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <footer id="contact" className="relative w-full pt-20 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-sky-400">
            Let&apos;s Build Together
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Start a Conversation on <span className="bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">AI Engineering</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-slate-300">
            Available for AI/ML Engineering roles, Generative AI development, and enterprise agentic systems consulting. Based in Doha with immediate availability.
          </p>
        </div>

        {/* Contact Layout: Cards & Form */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact Info Cards */}
          <div className="flex flex-col justify-between gap-6 lg:col-span-5">
            <div className="space-y-4">
              {/* Email Card */}
              <a
                href={`mailto:${links.ownerEmail}`}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-[#04071d]/80 p-5 backdrop-blur-xl transition-all hover:border-sky-500/40 hover:bg-slate-900/60"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 group-hover:scale-105 transition-transform">
                  <FaEnvelope className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs font-medium text-slate-400">Direct Email</span>
                  <p className="text-sm font-semibold text-white group-hover:text-sky-300 transition-colors">
                    {links.ownerEmail}
                  </p>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-[#04071d]/80 p-5 backdrop-blur-xl transition-all hover:border-sky-500/40 hover:bg-slate-900/60"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 group-hover:scale-105 transition-transform">
                  <FaLinkedin className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs font-medium text-slate-400">LinkedIn Network</span>
                  <p className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                    in/shabil-ahmed-2337b3316
                  </p>
                </div>
              </a>

              {/* GitHub Card */}
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-[#04071d]/80 p-5 backdrop-blur-xl transition-all hover:border-sky-500/40 hover:bg-slate-900/60"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 group-hover:scale-105 transition-transform">
                  <FaGithub className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs font-medium text-slate-400">Code Repositories</span>
                  <p className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                    github.com/shabil2284
                  </p>
                </div>
              </a>

              {/* Location Card */}
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#04071d]/80 p-5 backdrop-blur-xl">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <FaLocationDot className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs font-medium text-slate-400">Current Residence</span>
                  <p className="text-sm font-semibold text-white">
                    {links.ownerLocation}
                  </p>
                  <p className="text-xs text-emerald-400 font-medium">
                    Valid QID · NOC Available · Immediate Joining
                  </p>
                </div>
              </div>
            </div>

            {/* Resume Button */}
            <a
              href="mailto:shabil.ahemd112@outlook.com?subject=Resume%20Request%20-%20AI%2FML%20Engineer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-sky-500/40 bg-sky-500/10 px-6 py-4 text-sm font-semibold text-sky-300 backdrop-blur-md transition-all hover:bg-sky-500/20 hover:border-sky-400 active:scale-[0.98]"
            >
              <FaFileArrowDown className="h-4 w-4" />
              Request Formal Resume (PDF)
            </a>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="rounded-3xl border border-white/10 bg-[#04071d]/85 p-8 backdrop-blur-xl shadow-2xl lg:col-span-7">
            <h3 className="text-xl font-bold text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Fill in your project requirements and I will respond promptly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Dr. Jane Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-[#000319] px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Work Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-[#000319] px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-medium text-slate-300 mb-1.5">
                  Subject or Project Scope
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  placeholder="AI Engineering Role / GenAI Pipeline Development"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-[#000319] px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-1.5">
                  Message Details
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Describe the system architecture, business requirements, or role specifications..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-[#000319] px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:shadow-sky-500/40 hover:scale-[1.01] active:scale-[0.99]"
              >
                <FaPaperPlane className="h-4 w-4" />
                Dispatch Message
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/[0.08] pt-8">
          <p className="text-xs text-slate-400 text-center sm:text-left">
            © {new Date().getFullYear()} Shabil Mahammad Rafeek · AI/ML & Generative AI Engineer · Doha, Qatar
          </p>

          <div className="flex items-center gap-4">
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer noopener"
              className="text-slate-400 hover:text-sky-400 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="text-slate-400 hover:text-sky-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a
              href={links.leetcode}
              target="_blank"
              rel="noreferrer noopener"
              className="text-slate-400 hover:text-sky-400 transition-colors"
              aria-label="LeetCode"
            >
              <SiLeetcode className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${links.ownerEmail}`}
              className="text-slate-400 hover:text-sky-400 transition-colors"
              aria-label="Email"
            >
              <FaEnvelope className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

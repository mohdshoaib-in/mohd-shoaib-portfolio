"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Download,
  Mail,
} from "lucide-react";

import ResumeViewer from "./ResumeViewer";
import { profile } from "@/lib/profile";

const technologies = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express.js",
];

export default function Hero() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <>
      <section
        id="home"
        className="relative flex min-h-[720px] items-center overflow-hidden px-6 py-20"
      >
        {/* =========================================================
            BACKGROUND
        ========================================================= */}
        <div className="pointer-events-none absolute inset-0">
          {/* Main violet glow */}
          <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/[0.06] blur-[140px]" />

          {/* Right blue glow */}
          <div className="absolute right-[-200px] top-[20%] h-[400px] w-[400px] rounded-full bg-blue-600/[0.03] blur-[130px]" />

          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#08090b] to-transparent" />
        </div>

        {/* =========================================================
            CONTENT
        ========================================================= */}
        <div className="relative mx-auto w-full max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            {/* =====================================================
                LEFT CONTENT
            ===================================================== */}
            <div>
              {/* Availability */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.04] px-3 py-1.5"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />

                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>

                <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-emerald-300">
                  Immediate Joiner
                </span>
              </motion.div>

              {/* Small Heading */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="mb-3 text-sm font-medium tracking-wide text-violet-300"
              >
                Full Stack Software Engineer
              </motion.p>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="max-w-4xl text-5xl font-bold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl xl:text-8xl"
              >
                Mohd
                <span className="text-zinc-600">Shoaib</span>
              </motion.h1>

              {/* Role */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.18 }}
                className="mt-4 max-w-3xl text-2xl font-medium tracking-tight text-zinc-400 sm:text-3xl lg:text-4xl"
              >
                 React.js Developer
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="mt-5 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base"
              >
                8.8+ years of experience building scalable enterprise
                applications, reusable frontend systems, analytics
                dashboards, real-time applications, and full-stack products
                using modern JavaScript technologies.
              </motion.p>

              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-6 flex max-w-2xl flex-wrap gap-2"
              >
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-1.5 text-[11px] text-zinc-600 transition hover:border-violet-400/20 hover:bg-violet-400/[0.04] hover:text-violet-300"
                  >
                    {technology}
                  </span>
                ))}
              </motion.div>

              {/* Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.38 }}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                {/* Resume */}
                <button
                  type="button"
                  onClick={() => setResumeOpen(true)}
                  className="group inline-flex items-center justify-center gap-2 rounded-xl border border-violet-400/25 bg-violet-500/10 px-5 py-3 text-sm font-semibold text-violet-200 shadow-[0_0_25px_rgba(139,92,246,0.08)] transition-all duration-300 hover:border-violet-400/40 hover:bg-violet-500/15 hover:text-white hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]"
                >
                  <Download size={16} />

                  View Resume

                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

                {/* Contact */}
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.02] px-5 py-3 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.05] hover:text-white"
                >
                  <Mail size={16} />

                  Contact Me

                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-7 flex items-center gap-3"
              >
                <span className="mr-2 text-[10px] uppercase tracking-[0.15em] text-zinc-700">
                  Connect
                </span>

                {/* LinkedIn */}
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.02] text-[11px] font-semibold text-zinc-600 transition hover:border-violet-400/20 hover:bg-violet-400/5 hover:text-violet-300"
                >
                  in
                </a>

                {/* GitHub */}
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.02] text-[11px] font-semibold text-zinc-600 transition hover:border-violet-400/20 hover:bg-violet-400/5 hover:text-violet-300"
                >
                  GH
                </a>
              </motion.div>
            </div>

            {/* =====================================================
                RIGHT — PREMIUM PHOTO
            ===================================================== */}
            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="relative mx-auto w-full max-w-[300px] lg:ml-auto"
            >
              {/* Large Ambient Glow */}
              <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.08] blur-[120px]" />

              {/* Secondary Glow */}
              <div className="absolute -right-10 top-10 h-40 w-40 rounded-full bg-indigo-500/[0.06] blur-[90px]" />

              {/* Decorative Outer Border */}
              <div className="absolute -inset-3 rounded-[2.5rem] border border-white/[0.025]" />

              {/* Main Image Container */}
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-[#0b0c0f] p-2 shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
              >
                {/* Photo */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] bg-zinc-900">
                  <img
                    src="/image.jpeg"
                    alt="Mohd Shoaib — Full Stack Software Engineer"
                    className="h-full w-full object-cover object-center grayscale-[15%] transition duration-700 ease-out group-hover:scale-[1.025] group-hover:grayscale-0"
                  />

                  {/* Subtle image gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/5" />

                  {/* Violet edge glow */}
                  <div className="absolute inset-0 rounded-[1.6rem] ring-1 ring-inset ring-violet-400/[0.08]" />
                </div>

                {/* Bottom Information */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="rounded-2xl border border-white/[0.08] bg-black/55 px-4 py-3 backdrop-blur-xl">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-zinc-500">
                          Full Stack Engineer
                        </p>

                        <p className="mt-1 text-sm font-semibold text-white">
                          8.8+ Years Experience
                        </p>
                      </div>

                      {/* Availability */}
                      <div className="flex shrink-0 items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/[0.05] px-2.5 py-1.5">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />

                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        </span>

                        <span className="text-[9px] font-medium text-emerald-300">
                          Available
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Technology Card */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.7,
                }}
                className="absolute -bottom-6 -left-5 hidden rounded-2xl border border-white/[0.08] bg-[#0b0c0f]/95 px-4 py-3 shadow-[0_15px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:block"
              >
                <p className="text-[9px] uppercase tracking-[0.18em] text-zinc-600">
                  Primary Stack
                </p>

                <div className="mt-2 flex items-center gap-2">
                  <span className="text-xs font-medium text-zinc-300">
                    React
                  </span>

                  <span className="text-zinc-700">
                    ·
                  </span>

                  <span className="text-xs font-medium text-zinc-300">
                    Next.js
                  </span>

                  <span className="text-zinc-700">
                    ·
                  </span>

                  <span className="text-xs font-medium text-zinc-300">
                    Node.js
                  </span>
                </div>
              </motion.div>

              {/* Decorative Element */}
              <div className="absolute -right-3 top-10 hidden h-16 w-16 rounded-2xl border border-violet-400/10 bg-violet-400/[0.03] backdrop-blur-sm sm:block">
                <div className="flex h-full items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-violet-400/60 shadow-[0_0_18px_rgba(139,92,246,0.5)]" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* =====================================================
              SCROLL INDICATOR
          ===================================================== */}
          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 1,
            }}
            className="absolute bottom-[-15px] left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-zinc-700 transition hover:text-zinc-400 lg:flex"
          >
            <span className="text-[9px] uppercase tracking-[0.25em]">
              Scroll
            </span>

            <ArrowDown
              size={14}
              className="animate-bounce"
            />
          </motion.a>
        </div>
      </section>

      {/* =========================================================
          RESUME VIEWER
      ========================================================= */}
      <ResumeViewer
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </>
  );
}
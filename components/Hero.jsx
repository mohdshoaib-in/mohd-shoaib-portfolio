"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Download,
  Mail,
  Code2,
  Layers3,
  Sparkles,
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

const roles = [
  "React.js Developer",
  "Full Stack Developer",
];

export default function Hero() {
  const [resumeOpen, setResumeOpen] = useState(false);

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState(roles[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  /* =========================================================
      TYPEWRITER ANIMATION
  ========================================================= */
  useEffect(() => {
    const currentRole = roles[roleIndex];

    let timeout;

    // Wait after the complete word/sentence is displayed
    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
    }

    // When deletion is complete, move to next role
    else if (isDeleting && displayText === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 300);
    }

    // Type or delete one character at a time
    else {
      timeout = setTimeout(
        () => {
          if (isDeleting) {
            setDisplayText((prev) => prev.slice(0, -1));
          } else {
            setDisplayText(
              currentRole.slice(0, displayText.length + 1)
            );
          }
        },
        isDeleting ? 45 : 75
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

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
          <div className="absolute left-[45%] top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/[0.06] blur-[140px]" />

          {/* Right blue glow */}
          <div className="absolute right-[-150px] top-[15%] h-[500px] w-[500px] rounded-full bg-blue-600/[0.035] blur-[140px]" />

          {/* Right violet glow */}
          <div className="absolute right-[15%] top-[35%] h-[300px] w-[300px] rounded-full bg-violet-500/[0.04] blur-[120px]" />

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
          <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">

            {/* =====================================================
                LEFT CONTENT
            ===================================================== */}
            <div className="w-full">

              {/* Availability */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                }}
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
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.05,
                }}
                className="mb-3 text-sm font-medium tracking-wide text-violet-300"
              >
                Full Stack Software Engineer
              </motion.p>

              {/* =====================================================
                  NAME
              ===================================================== */}
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="max-w-4xl text-5xl font-bold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl xl:text-8xl"
              >
                Mohd{" "}
                <span className="text-zinc-600">
                  Shoaib
                </span>
              </motion.h1>

              {/* =====================================================
                  ANIMATED ROLE
              ===================================================== */}
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.5,
                }}
                className="mt-4 min-h-[52px] sm:min-h-[58px] lg:min-h-[64px]"
              >
                <h2 className="text-2xl font-medium tracking-tight text-zinc-400 sm:text-3xl lg:text-4xl">
                  {displayText}

                  <span
                    className="ml-1 inline-block h-[1em] w-[2px] translate-y-[2px] bg-violet-400 align-middle animate-pulse"
                  />
                </h2>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.7,
                }}
                className="mt-3 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base"
              >
                8.8 years of experience building scalable enterprise
                applications, reusable frontend systems, analytics
                dashboards, real-time applications, and full-stack products
                using modern JavaScript technologies.
              </motion.p>

              {/* Technologies */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.8,
                }}
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
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.9,
                }}
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
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0.8,
                  delay: 1,
                }}
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
                RIGHT DEVELOPER VISUAL
            ===================================================== */}
            <motion.div
              initial={{
                opacity: 0,
                x: 40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.25,
              }}
              className="relative hidden min-h-[480px] items-center justify-center lg:flex"
            >
              {/* Background Glow */}
              <div className="absolute h-[330px] w-[330px] rounded-full bg-violet-500/[0.07] blur-[100px]" />

              {/* Orbit */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-[390px] w-[390px] rounded-full border border-violet-400/[0.06]"
              />

              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 22,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-[310px] w-[310px] rounded-full border border-blue-400/[0.05]"
              />

              {/* Main Card */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-[390px] rounded-3xl border border-white/[0.08] bg-[#0d0f13]/90 p-6 shadow-2xl shadow-violet-950/20 backdrop-blur-xl"
              >
                {/* Card Header */}
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/[0.08]">
                      <Code2
                        size={19}
                        className="text-violet-300"
                      />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-zinc-200">
                        Developer Profile
                      </p>

                      <p className="text-[10px] text-zinc-600">
                        JavaScript Ecosystem
                      </p>
                    </div>
                  </div>

                  <span className="flex items-center gap-1.5 text-[9px] uppercase tracking-wider text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Available
                  </span>
                </div>

                {/* Experience */}
                <div className="mt-6">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                    Experience
                  </p>

                  <div className="mt-2 flex items-end gap-3">
                    <span className="text-5xl font-bold tracking-tight text-white">
                      8.8
                    </span>

                    <span className="mb-2 text-sm text-zinc-500">
                      Years
                    </span>
                  </div>
                </div>

                {/* Skills */}
                <div className="mt-7 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                    <Layers3
                      size={18}
                      className="text-violet-300"
                    />

                    <p className="mt-3 text-xs font-medium text-zinc-300">
                      Frontend
                    </p>

                    <p className="mt-1 text-[10px] leading-5 text-zinc-600">
                      React.js · Next.js
                      <br />
                      TypeScript · JavaScript
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                    <Sparkles
                      size={18}
                      className="text-blue-300"
                    />

                    <p className="mt-3 text-xs font-medium text-zinc-300">
                      Full Stack
                    </p>

                    <p className="mt-1 text-[10px] leading-5 text-zinc-600">
                      Node.js · Express
                      <br />
                      REST APIs · MongoDB
                    </p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mt-6">
                  <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                    Core Stack
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {[
                      "React",
                      "Next.js",
                      "JS",
                      "TS",
                      "Node",
                      "REST API",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-2.5 py-1.5 text-[10px] text-zinc-500"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Code Line */}
                <div className="mt-6 rounded-xl border border-violet-400/[0.08] bg-violet-500/[0.025] px-4 py-3">
                  <div className="flex items-center gap-2 font-mono text-[10px]">
                    <span className="text-violet-400">
                      const
                    </span>

                    <span className="text-zinc-400">
                      developer
                    </span>

                    <span className="text-zinc-600">
                      =
                    </span>

                    <span className="text-emerald-400">
                      "React.js"
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Focus Badge */}
              <motion.div
                animate={{
                  y: [0, -7, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-3 top-16 rounded-2xl border border-white/[0.08] bg-[#0d0f13]/95 px-4 py-3 shadow-xl backdrop-blur-xl"
              >
                <p className="text-[9px] uppercase tracking-wider text-zinc-600">
                  Focus
                </p>

                <p className="mt-1 text-xs font-semibold text-violet-300">
                  Scalable UI
                </p>
              </motion.div>

              {/* React Badge */}
              <motion.div
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-5 bottom-20 rounded-2xl border border-white/[0.08] bg-[#0d0f13]/95 px-4 py-3 shadow-xl backdrop-blur-xl"
              >
                <p className="text-[9px] uppercase tracking-wider text-zinc-600">
                  Primary
                </p>

                <p className="mt-1 text-xs font-semibold text-blue-300">
                  React.js
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* =========================================================
              SCROLL INDICATOR
          ========================================================= */}
          <motion.a
            href="#about"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
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
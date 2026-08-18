"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Layers3,
  Server,
  Zap,
} from "lucide-react";
import ResumeViewer from "./ResumeViewer";

const highlights = [
  {
    icon: Layers3,
    title: "Scalable Frontend Architecture",
    description:
      "Reusable components, design systems, state management, and maintainable React architectures built for enterprise applications.",
  },
  {
    icon: Server,
    title: "Full Stack Development",
    description:
      "React and Next.js applications integrated with Node.js, Express.js, REST APIs, authentication, and backend services.",
  },
  {
    icon: Zap,
    title: "Performance & UX",
    description:
      "Focused on responsive interfaces, rendering performance, accessibility, code splitting, lazy loading, and reliable user experiences.",
  },
];

export default function About() {
const [resumeOpen, setResumeOpen] = useState(false);
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-28 sm:py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-[400px] w-[400px] rounded-full bg-violet-600/5 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-violet-400" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
              About Me
            </span>
          </div>

          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Engineering scalable products
            <span className="text-zinc-600"> with a focus on quality.</span>
          </h2>
        </motion.div>

        {/* Main About Content */}
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg leading-8 text-zinc-300">
              I'm{" "}
              <span className="font-medium text-white">
                Mohd Shoaib
              </span>
              , a  React.js Developer and Full Stack Engineer with
              <span className="font-medium text-violet-300">
                {" "}
                8.8+ years
              </span>{" "}
              of experience building enterprise-grade web applications.
            </p>

            <p className="mt-6 text-base leading-8 text-zinc-500">
              My primary strength is building scalable frontend architectures
              with React.js, TypeScript, JavaScript, Redux, and modern UI
              technologies. I also work across the stack with Node.js,
              Express.js, REST APIs, authentication, and real-time services.
            </p>

            <p className="mt-6 text-base leading-8 text-zinc-500">
              Throughout my career, I've worked on marketing analytics,
              healthcare systems, real-time applications, dashboards, and
              enterprise component libraries. I enjoy turning complex
              requirements and data into reliable, intuitive products.
            </p>

            {/* Resume Link */}
            <button
                  type="button"
                  onClick={() => setResumeOpen(true)}
                  className="group inline-flex items-center justify-center gap-2 rounded-xl border border-violet-400/25 bg-violet-500/10 px-5 py-3 text-sm font-semibold text-violet-200 shadow-[0_0_25px_rgba(139,92,246,0.08)] transition-all duration-300 hover:border-violet-400/40 hover:bg-violet-500/15 hover:text-white hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]"
                >

                  View Resume 
            </button>
          </motion.div>

          {/* Right */}
          <div className="space-y-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="group rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition duration-300 hover:border-violet-400/20 hover:bg-white/[0.035]"
                >
                  <div className="flex gap-5">
                    {/* Icon */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-zinc-400 transition duration-300 group-hover:border-violet-400/20 group-hover:bg-violet-400/10 group-hover:text-violet-300">
                      <Icon size={19} strokeWidth={1.7} />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-sm font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-zinc-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Expertise Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 border-t border-white/[0.06] pt-8"
        >
          <div className="flex flex-wrap items-center justify-between gap-5">
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-600">
              Core Engineering Focus
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-zinc-500">
              <span>Frontend Architecture</span>
              <span>Reusable Components</span>
              <span>API Integration</span>
              <span>Performance</span>
              <span>Real-Time Applications</span>
            </div>
          </div>
        </motion.div>
      </div>
      <ResumeViewer
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
       />
    </section>
  );
}
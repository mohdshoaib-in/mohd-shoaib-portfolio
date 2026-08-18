"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Boxes,
  Gauge,
  Network,
  ServerCog,
  Workflow,
} from "lucide-react";

const expertise = [
  {
    number: "01",
    icon: Boxes,
    title: "Frontend Architecture",
    description:
      "Designing scalable React applications with clear component boundaries, reusable patterns, predictable state management, and maintainable frontend structures.",
    capabilities: [
      "Scalable React architecture",
      "Reusable components",
      "Global state management",
      "Component-driven development",
    ],
  },
  {
    number: "02",
    icon: Network,
    title: "Component Systems",
    description:
      "Building reusable UI systems and component libraries that improve consistency, reduce duplication, and accelerate product development across teams.",
    capabilities: [
      "Design systems",
      "Storybook",
      "Web Components",
      "Reusable UI libraries",
    ],
  },
  {
    number: "03",
    icon: Gauge,
    title: "Performance Engineering",
    description:
      "Optimizing React applications for faster rendering, smaller bundles, efficient loading, and better user experiences.",
    capabilities: [
      "Code splitting",
      "Lazy loading",
      "Dynamic imports",
      "Rendering optimization",
    ],
  },
  {
    number: "04",
    icon: ServerCog,
    title: "API & Full Stack Integration",
    description:
      "Connecting modern React applications with Node.js services and REST APIs while maintaining reliable frontend-backend communication.",
    capabilities: [
      "REST API integration",
      "Node.js services",
      "Express.js",
      "Authentication workflows",
    ],
  },
  {
    number: "05",
    icon: Activity,
    title: "Real-Time Applications",
    description:
      "Developing real-time experiences where applications need continuous data updates, live monitoring, communication, and operational visibility.",
    capabilities: [
      "WebSocket",
      "Socket.io",
      "Real-time dashboards",
      "Live data interfaces",
    ],
  },
  {
    number: "06",
    icon: Workflow,
    title: "Data & Analytics",
    description:
      "Transforming complex data into interactive interfaces that help users understand performance, trends, and operational insights.",
    capabilities: [
      "Highcharts.js",
      "Chart.js",
      "Analytics dashboards",
      "Data-driven interfaces",
    ],
  },
];

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="relative overflow-hidden border-t border-white/[0.05] px-6 py-28 sm:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/5 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end"
        >
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-violet-400" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
                Engineering Expertise
              </span>
            </div>

            <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Beyond writing code.
              <br />

              <span className="text-zinc-600">
                Building systems that scale.
              </span>
            </h2>
          </div>

          <p className="text-sm leading-7 text-zinc-600">
            My approach combines strong frontend engineering with practical
            backend integration, reusable architecture, performance
            optimization, and data-driven product development.
          </p>
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid gap-px overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.07] md:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                }}
                className="group relative bg-[#080808] p-7 transition duration-500 hover:bg-[#0b0b0b] sm:p-8"
              >
                {/* Number */}
                <span className="absolute right-7 top-6 text-xs font-medium tracking-widest text-zinc-800">
                  {item.number}
                </span>

                {/* Icon */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-zinc-500 transition duration-300 group-hover:border-violet-400/20 group-hover:bg-violet-400/10 group-hover:text-violet-300">
                  <Icon size={19} strokeWidth={1.6} />
                </div>

                {/* Title */}
                <h3 className="mt-7 text-base font-semibold text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  {item.description}
                </p>

                {/* Capabilities */}
                <div className="mt-6 space-y-2.5">
                  {item.capabilities.map((capability) => (
                    <div
                      key={capability}
                      className="flex items-center gap-2 text-xs text-zinc-500"
                    >
                      <span className="h-1 w-1 rounded-full bg-violet-400/50" />

                      {capability}
                    </div>
                  ))}
                </div>

                {/* Bottom Accent */}
                <div className="mt-7 h-px w-8 bg-white/[0.08] transition-all duration-500 group-hover:w-16 group-hover:bg-violet-400/40" />
              </motion.article>
            );
          })}
        </div>

        {/* Architecture Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.02]"
        >
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            {/* Left */}
            <div className="border-b border-white/[0.06] p-7 sm:p-9 lg:border-b-0 lg:border-r">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300">
                Engineering Philosophy
              </p>

              <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">
                Simple systems.
                <br />
                <span className="text-zinc-600">
                  Strong foundations.
                </span>
              </h3>
            </div>

            {/* Right */}
            <div className="p-7 sm:p-9">
              <p className="max-w-2xl text-base leading-8 text-zinc-500">
                Good engineering is not only about choosing the right
                technology. It is about creating software that teams can
                understand, extend, test, and operate confidently. I focus on
                reusable architecture, clear interfaces, performance, and
                practical solutions that solve the actual product problem.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "Clean Code",
                  "Reusable Architecture",
                  "Performance",
                  "Accessibility",
                  "Maintainability",
                  "Scalability",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/[0.06] bg-black/20 px-3 py-1.5 text-[11px] text-zinc-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Layers3,
  MapPinned,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "GeoLift Research Tool",
    category: "Location-Based Marketing",
    description:
      "A full-stack marketing research platform designed to generate location-based insights and interactive analytical experiences for marketing teams.",
    icon: MapPinned,
    featured: true,
    technologies: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Chart.js",
      "Tailwind CSS",
    ],
    highlights: [
      "Interactive data-driven interfaces",
      "REST API integration",
      "Responsive enterprise UI",
      "Marketing analytics workflows",
    ],
  },
  {
    number: "02",
    title: "Agile MMM",
    category: "Marketing Mix Modelling",
    description:
      "An enterprise marketing analytics platform supporting global media teams across 10+ markets with interactive dashboards and data visualization.",
    icon: BarChart3,
    featured: true,
    technologies: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Highcharts.js",
    ],
    highlights: [
      "10+ global markets",
      "Reusable visualization components",
      "Interactive analytics dashboards",
      "Scalable data workflows",
    ],
  },
  {
    number: "03",
    title: "Omni UI",
    category: "Enterprise Component Library",
    description:
      "A scalable Web Components and UI library created to standardize product interfaces and eliminate duplicated UI development across internal products.",
    icon: Layers3,
    featured: false,
    technologies: [
      "TypeScript",
      "React.js",
      "Storybook",
      "Web Components",
      "Design Systems",
    ],
    highlights: [
      "Adopted across 5+ products",
      "Used by 10+ developers daily",
      "Reusable component architecture",
      "Standardized UI development",
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-white/[0.05] px-6 py-28 sm:py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 bg-violet-600/5 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
        >
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-violet-400" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
                Featured Work
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Selected projects that{" "}
              <span className="text-zinc-600">
                define my work.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-zinc-600 lg:text-right">
            A selection of enterprise applications and engineering systems
            I've worked on across marketing technology and product
            development.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-5">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.02] transition duration-500 hover:border-violet-400/20 hover:bg-white/[0.035]"
              >
                {/* Project Number */}
                <div className="absolute right-7 top-6 text-5xl font-bold tracking-tighter text-white/[0.025] transition duration-500 group-hover:text-violet-400/[0.08]">
                  {project.number}
                </div>

                <div className="grid gap-8 p-7 sm:p-9 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
                  {/* Left */}
                  <div>
                    {/* Icon */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-zinc-400 transition duration-300 group-hover:border-violet-400/20 group-hover:bg-violet-400/10 group-hover:text-violet-300">
                      <Icon
                        size={21}
                        strokeWidth={1.6}
                      />
                    </div>

                    {/* Category */}
                    <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300/70">
                      {project.category}
                    </p>

                    {/* Title */}
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-5 max-w-lg text-sm leading-7 text-zinc-500">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg border border-white/[0.06] bg-black/20 px-2.5 py-1.5 text-[10px] text-zinc-500 transition group-hover:border-white/[0.1]"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right */}
                  <div className="relative flex flex-col justify-between rounded-2xl border border-white/[0.05] bg-black/20 p-6">
                    {/* Visual Placeholder */}
                    <div className="relative h-40 overflow-hidden rounded-xl border border-white/[0.05] bg-[#080808]">
                      {/* Grid */}
                      <div
                        className="absolute inset-0 opacity-[0.06]"
                        style={{
                          backgroundImage: `
                            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
                          `,
                          backgroundSize: "32px 32px",
                        }}
                      />

                      {/* Abstract Dashboard */}
                      <div className="absolute inset-5">
                        <div className="flex gap-2">
                          <div className="h-2 w-16 rounded-full bg-white/[0.08]" />
                          <div className="h-2 w-8 rounded-full bg-violet-400/20" />
                        </div>

                        <div className="mt-5 grid grid-cols-3 gap-2">
                          <div className="h-12 rounded-lg border border-white/[0.05] bg-white/[0.025]" />
                          <div className="h-12 rounded-lg border border-white/[0.05] bg-white/[0.025]" />
                          <div className="h-12 rounded-lg border border-white/[0.05] bg-white/[0.025]" />
                        </div>

                        <div className="mt-3 h-16 rounded-lg border border-white/[0.05] bg-white/[0.025]">
                          <div className="ml-4 mt-8 h-px w-2/3 bg-gradient-to-r from-violet-400/50 via-blue-400/30 to-transparent" />
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mt-6">
                      <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-700">
                        Key Contributions
                      </p>

                      <div className="grid gap-3 sm:grid-cols-2">
                        {project.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="flex items-start gap-2 text-xs text-zinc-500"
                          >
                            <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-violet-400/60" />

                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Project Link Placeholder */}
                    <div className="mt-7 flex items-center justify-between border-t border-white/[0.05] pt-5">
                      <span className="text-[10px] uppercase tracking-[0.15em] text-zinc-700">
                        Enterprise Project
                      </span>

                      <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.06] text-zinc-700 transition group-hover:border-violet-400/20 group-hover:text-violet-300">
                        <ArrowUpRight size={15} />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-10 flex items-center justify-center"
        >
          <p className="text-xs text-zinc-700">
            Selected projects from enterprise product development
          </p>
        </motion.div>
      </div>
    </section>
  );
}
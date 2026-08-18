"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Boxes,
  CheckCircle2,
  Code2,
  Database,
  Gauge,
  GitBranch,
  Layers3,
  Palette,
  Server,
  TestTube2,
  Workflow,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend Engineering",
    description:
      "Modern frontend development focused on scalable React applications and maintainable user interfaces.",
    icon: Code2,
    skills: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "ES6+",
      "React Hooks",
      "Custom Hooks",
      "JSX",
      "React Router",
      "HTML5",
      "CSS3",
      "SCSS",
    ],
  },
  {
    title: "Backend & APIs",
    description:
      "Building and integrating backend services, REST APIs, authentication workflows, and real-time communication.",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "RESTful Services",
      "API Integration",
      "Authentication",
      "WebSocket",
      "Socket.io",
      "Backend Services",
    ],
  },
  {
    title: "State Management",
    description:
      "Managing application state with scalable patterns for complex enterprise applications.",
    icon: Workflow,
    skills: [
      "Redux",
      "Redux Toolkit",
      "Redux Saga",
      "Redux Thunk",
      "Zustand",
      "React Context API",
      "Global State",
      "Async State",
    ],
  },
  {
    title: "UI & Design Systems",
    description:
      "Creating reusable interfaces, component libraries, design systems, and responsive experiences.",
    icon: Palette,
    skills: [
      "Tailwind CSS",
      "Material UI",
      "Bootstrap",
      "Bulma",
      "Styled Components",
      "CSS Modules",
      "Storybook",
      "Reusable Components",
      "Design Systems",
      "Responsive Design",
    ],
  },
  {
    title: "Architecture & Performance",
    description:
      "Focused on scalable frontend architecture, performance optimization, and efficient application delivery.",
    icon: Gauge,
    skills: [
      "Frontend Architecture",
      "Micro Frontends",
      "Performance Optimization",
      "Code Splitting",
      "Lazy Loading",
      "Dynamic Imports",
      "Bundle Optimization",
      "Accessibility",
      "Component Libraries",
    ],
  },
  {
    title: "Testing & Quality",
    description:
      "Building reliable applications with automated testing and component-level quality practices.",
    icon: TestTube2,
    skills: [
      "Vitest",
      "Jest",
      "React Testing Library",
      "Unit Testing",
      "Integration Testing",
      "Component Testing",
    ],
  },
  {
    title: "Data Visualization",
    description:
      "Building interactive dashboards and data-driven interfaces for analytical applications.",
    icon: Database,
    skills: [
      "Highcharts.js",
      "Chart.js",
      "Interactive Dashboards",
      "Real-Time Dashboards",
      "Analytics UI",
      "Data-Driven Interfaces",
    ],
  },
  {
    title: "Tools, Cloud & AI",
    description:
      "Modern engineering workflows, automation, CI/CD, containers, and AI-assisted development.",
    icon: BrainCircuit,
    skills: [
      "Git",
      "GitHub",
      "GitHub Actions",
      "CI/CD",
      "Docker",
      "Jira",
      "Postman",
      "NPM",
      "Yarn",
      "Vite",
      "LLM Integration",
      "Prompt Engineering",
      "AI-Assisted Development",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-white/[0.05] px-6 py-28 sm:py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-[450px] w-[450px] rounded-full bg-blue-600/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-violet-400" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
              Technical Expertise
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Technologies I use to{" "}
            <span className="text-zinc-600">
              build production software.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-500">
            A practical engineering stack built around React, modern
            JavaScript, scalable frontend architecture, Node.js services,
            reusable UI systems, and performance-focused development.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: (index % 2) * 0.1,
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition duration-300 hover:border-violet-400/20 hover:bg-white/[0.035]"
              >
                {/* Hover Glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-violet-500/5 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

                {/* Header */}
                <div className="relative flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-zinc-400 transition duration-300 group-hover:border-violet-400/20 group-hover:bg-violet-400/10 group-hover:text-violet-300">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      {group.title}
                    </h3>

                    <p className="mt-1.5 text-xs leading-5 text-zinc-600">
                      {group.description}
                    </p>
                  </div>
                </div>

                {/* Skills */}
                <div className="relative mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.06] bg-black/20 px-2.5 py-1.5 text-[11px] text-zinc-500 transition duration-200 hover:border-white/[0.12] hover:text-zinc-300"
                    >
                      <CheckCircle2
                        size={11}
                        className="text-zinc-700 transition group-hover:text-violet-400/60"
                      />

                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 flex flex-wrap items-center justify-between gap-5 border-t border-white/[0.06] pt-7"
        >
          <div className="flex items-center gap-3">
            <Boxes
              size={17}
              className="text-zinc-600"
            />

            <span className="text-xs uppercase tracking-[0.18em] text-zinc-600">
              Primary Stack
            </span>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-zinc-500">
            <span>React.js</span>
            <span>TypeScript</span>
            <span>Next.js</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>Redux</span>
            <span>REST APIs</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
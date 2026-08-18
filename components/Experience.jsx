"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  CalendarDays,
  MapPin,
} from "lucide-react";

const experiences = [
  {
    company: "Omnicom Media Group",
    role: "Software Engineer",
    period: "Dec 2021 — Jun 2026",
    location: "Gurugram, India",
    current: false,
    description:
      "Worked on enterprise marketing technology platforms focused on location-based research, marketing mix modelling, analytics, and reusable UI systems.",
    projects: [
      {
        name: "GeoLift Research Tool",
        description:
          "Contributed to a full-stack location-based marketing research platform using React, TypeScript, Node.js, Express.js, and Chart.js. Built responsive interfaces and integrated frontend services with backend APIs.",
        technologies: [
          "React",
          "TypeScript",
          "Node.js",
          "Express.js",
          "Chart.js",
          "Tailwind CSS",
        ],
      },
      {
        name: "Agile MMM",
        description:
          "Helped scale and rebuild a Marketing Mix Modelling platform supporting global media teams across 10+ markets. Developed reusable Highcharts.js visualizations and interactive analytical dashboards.",
        technologies: [
          "React",
          "TypeScript",
          "Node.js",
          "Express.js",
          "Highcharts.js",
        ],
      },
      {
        name: "Omni UI",
        description:
          "Spearheaded development of a scalable Web Components library adopted across 5+ internal products and used by 10+ developers daily. Established reusable component and design standards.",
        technologies: [
          "TypeScript",
          "React",
          "Storybook",
          "Web Components",
          "Design Systems",
        ],
      },
    ],
  },

  {
    company: "QSS Technosoft Pvt. Ltd",
    role: "Sr. Software Engineer",
    period: "Jun 2021 — Dec 2021",
    location: "Noida, India",
    current: false,
    description:
      "Built high-performance React applications across multiple client projects with a focus on rendering performance, accessibility, responsive design, and API integration.",
    projects: [
      {
        name: "Enterprise React Applications",
        description:
          "Developed responsive React applications and collaborated with Node.js backend teams on REST API design, integration, error handling, and frontend-backend communication.",
        technologies: [
          "React",
          "JavaScript",
          "Node.js",
          "REST APIs",
          "Responsive Design",
        ],
      },
      {
        name: "Performance Optimization",
        description:
          "Applied React performance techniques including React.memo, useCallback, lazy loading, and code splitting, improving page load speed by approximately 35%.",
        technologies: [
          "React.memo",
          "useCallback",
          "Lazy Loading",
          "Code Splitting",
        ],
      },
    ],
  },

  {
    company: "Laitkor Consultancy Service Pvt. Ltd",
    role: "Software Engineer",
    period: "Dec 2020 — May 2021",
    location: "Lucknow, India",
    current: false,
    description:
      "Developed a full-stack real-time communication platform combining React, Node.js, Express.js, and Socket.io.",
    projects: [
      {
        name: "Real-Time Chat Application",
        description:
          "Built real-time messaging with low-latency bidirectional communication. Developed authentication, chat room management, messaging, and message persistence APIs with responsive cross-device interfaces.",
        technologies: [
          "React",
          "Node.js",
          "Express.js",
          "Socket.io",
          "REST APIs",
          "Bootstrap",
        ],
      },
    ],
  },

  {
    company: "Spinsci Technology LLC",
    role: "Software Engineer",
    period: "Sep 2016 — Feb 2018 · Nov 2018 — Sep 2020",
    location: "Hyderabad, India",
    current: false,
    description:
      "Worked on healthcare applications involving patient information management, pharmacy operations, real-time monitoring, and secure API integrations.",
    projects: [
      {
        name: "Carle Foundation Clinic",
        description:
          "Built patient information management modules using React.js and integrated them with secure REST APIs and backend services for real-time clinical data access.",
        technologies: [
          "React.js",
          "REST APIs",
          "Healthcare",
          "Real-Time Data",
        ],
      },
      {
        name: "Trinity Health Care",
        description:
          "Developed a React-based pharmacy management application integrated with an IVR system for real-time access to pharmacy data and improved operational communication.",
        technologies: [
          "React.js",
          "REST APIs",
          "IVR Integration",
          "Healthcare",
        ],
      },
      {
        name: "Agenta Dashboard — TELUS",
        description:
          "Developed a real-time device monitoring dashboard with dynamic log visualization and alert management, helping operations teams monitor device performance and troubleshoot issues.",
        technologies: [
          "React.js",
          "Real-Time Dashboard",
          "Data Visualization",
          "Alerts",
        ],
      },
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden border-t border-white/[0.05] px-6 py-28 sm:py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/5 blur-[150px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-violet-400" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
              Experience
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            A career built around{" "}
            <span className="text-zinc-600">
              solving complex problems.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-500">
            8.8+ years of experience across enterprise software, marketing
            technology, healthcare systems, real-time applications, analytics,
            and reusable component architecture.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute bottom-0 left-[11px] top-0 w-px bg-gradient-to-b from-violet-400/50 via-white/[0.08] to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-14">
            {experiences.map((experience, index) => (
              <motion.article
                key={`${experience.company}-${experience.role}`}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-80px",
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.05,
                }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[5px] top-7 z-10 flex h-3 w-3 items-center justify-center rounded-full border border-violet-400/50 bg-[#050505] md:left-1/2 md:-translate-x-1/2">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                </div>

                {/* Content */}
                <div
                  className={`ml-10 md:ml-0 md:w-[calc(50%-45px)] ${
                    index % 2 === 0
                      ? "md:mr-auto"
                      : "md:ml-auto"
                  }`}
                >
                  <div className="group rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition duration-300 hover:border-violet-400/20 hover:bg-white/[0.035] sm:p-7">
                    {/* Company Header */}
                    <div className="flex flex-col gap-5">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex gap-4">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-zinc-500 transition group-hover:border-violet-400/20 group-hover:text-violet-300">
                            <Building2
                              size={19}
                              strokeWidth={1.6}
                            />
                          </div>

                          <div>
                            <h3 className="text-base font-semibold text-white">
                              {experience.company}
                            </h3>

                            <p className="mt-1 text-sm text-violet-300">
                              {experience.role}
                            </p>
                          </div>
                        </div>

                        {experience.current && (
                          <span className="rounded-full border border-emerald-400/20 bg-emerald-400/5 px-2.5 py-1 text-[10px] uppercase tracking-wider text-emerald-300">
                            Current
                          </span>
                        )}
                      </div>

                      {/* Meta */}
                      <div className="flex flex-wrap gap-x-5 gap-y-2 border-t border-white/[0.05] pt-4 text-xs text-zinc-600">
                        <span className="inline-flex items-center gap-1.5">
                          <CalendarDays size={13} />

                          {experience.period}
                        </span>

                        <span className="inline-flex items-center gap-1.5">
                          <MapPin size={13} />

                          {experience.location}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mt-6 text-sm leading-6 text-zinc-500">
                      {experience.description}
                    </p>

                    {/* Projects */}
                    <div className="mt-6 space-y-4">
                      {experience.projects.map((project) => (
                        <div
                          key={project.name}
                          className="rounded-xl border border-white/[0.05] bg-black/20 p-4"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <h4 className="text-sm font-medium text-zinc-200">
                              {project.name}
                            </h4>

                            <ArrowUpRight
                              size={14}
                              className="shrink-0 text-zinc-700"
                            />
                          </div>

                          <p className="mt-2 text-xs leading-5 text-zinc-600">
                            {project.description}
                          </p>

                          {/* Technologies */}
                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {project.technologies.map((technology) => (
                              <span
                                key={technology}
                                className="rounded-md border border-white/[0.05] bg-white/[0.02] px-2 py-1 text-[10px] text-zinc-600"
                              >
                                {technology}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Career End */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 flex flex-col items-center text-center"
        >
          <div className="h-2 w-2 rounded-full bg-zinc-700" />

          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-zinc-700">
            More to build
          </p>
        </motion.div>
      </div>
    </section>
  );
}
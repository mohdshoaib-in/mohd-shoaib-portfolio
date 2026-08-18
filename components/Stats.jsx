"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "8.8+",
    label: "Years Experience",
    description: "Building enterprise applications",
  },
  {
    value: "10+",
    label: "Global Markets",
    description: "Supporting marketing teams worldwide",
  },
  {
    value: "5+",
    label: "Internal Products",
    description: "Powered by reusable UI systems",
  },
  {
    value: "10+",
    label: "Developers",
    description: "Using the component library daily",
  },
];

export default function Stats() {
  return (
    <section
      id="stats"
      className="relative border-y border-white/[0.06] bg-white/[0.015] px-6 py-10"
    >
      {/* Subtle Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-[500px] -translate-x-1/2 bg-violet-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-2 divide-x divide-white/[0.06] md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="group px-5 py-5 text-center md:px-8"
            >
              {/* Value */}
              <div className="bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
                {stat.value}
              </div>

              {/* Label */}
              <div className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-zinc-300">
                {stat.label}
              </div>

              {/* Description */}
              <p className="mx-auto mt-2 max-w-[180px] text-xs leading-5 text-zinc-600">
                {stat.description}
              </p>

              {/* Hover Line */}
              <div className="mx-auto mt-4 h-px w-0 bg-gradient-to-r from-transparent via-violet-400/60 to-transparent transition-all duration-500 group-hover:w-16" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import { Profiler, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Copy,
  Mail,
  MapPin,
} from "lucide-react";
import { profile } from "@/lib/profile";

const EMAIL = profile.email;

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Unable to copy email:", error);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/[0.05] px-6 py-28 sm:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/5 blur-[160px]" />

      <div className="relative mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-violet-400" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
              Get In Touch
            </span>

            <span className="h-px w-8 bg-violet-400" />
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let's build something
            <br />

            <span className="text-zinc-600">
              meaningful together.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-zinc-500 sm:text-base">
            Looking for a  React.js developer or full stack engineer?
            I'm available for new opportunities and ready to contribute to
            challenging products.
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-12 overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02]"
        >
          <div className="grid lg:grid-cols-[1fr_0.8fr]">
            {/* Main CTA */}
            <div className="relative p-7 sm:p-10 lg:p-12">
              {/* Decorative Number */}
              <span className="pointer-events-none absolute right-7 top-5 text-7xl font-bold tracking-tighter text-white/[0.025]">
                01
              </span>

              <div className="relative">
                {/* Availability */}
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />

                  <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-emerald-300">
                    Immediate Joiner
                  </span>
                </div>

                <h3 className="mt-7 text-2xl font-semibold text-white">
                  Have an opportunity?
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-zinc-600">
                  Whether you're hiring for a  frontend role, building a
                  new product, or looking for someone experienced with React
                  and enterprise applications, I'd be happy to connect.
                </p>

                {/* Email CTA */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="group inline-flex items-center justify-center gap-2 rounded-xl border border-violet-400/25 bg-violet-500/10 px-5 py-3 text-sm font-semibold text-violet-200 shadow-[0_0_25px_rgba(139,92,246,0.08)] transition-all duration-300 hover:border-violet-400/40 hover:bg-violet-500/15 hover:text-white hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]"
                    >
                    <Mail size={16} />

                    Send me an email

                    <ArrowUpRight
                        size={15}
                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                    </a>

                  <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.025] px-5 py-3 text-sm font-medium text-zinc-300 transition hover:border-white/[0.15] hover:bg-white/[0.05] hover:text-white"
                  >
                    {copied ? (
                      <>
                        <Check size={15} />

                        Copied
                      </>
                    ) : (
                      <>
                        <Copy size={15} />

                        Copy email
                      </>
                    )}
                  </button>
                </div>


                
              </div>
            </div>

            {/* Details */}
            <div className="border-t border-white/[0.06] bg-black/20 p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-700">
                Contact Details
              </p>

              <div className="mt-7 space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.025] text-zinc-500">
                    <Mail size={16} />
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-zinc-700">
                      Email
                    </p>

                    <a
                      href={`mailto:${EMAIL}`}
                      className="mt-1 block break-all text-sm text-zinc-400 transition hover:text-white"
                    >
                      {EMAIL}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.025] text-zinc-500">
                    <MapPin size={16} />
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-zinc-700">
                      Location
                    </p>

                    <p className="mt-1 text-sm text-zinc-400">
                      India
                    </p>
                  </div>
                </div>
              </div>

              {/* LinkedIn */}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 flex items-center justify-between border-t border-white/[0.06] pt-6"
              >
                <span className="text-sm text-zinc-500 transition group-hover:text-white">
                  Connect on LinkedIn
                </span>

                <ArrowUpRight
                  size={16}
                  className="text-zinc-700 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-300"
                />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 text-center"
        >
          <p className="text-xs text-zinc-700">
            React.js · TypeScript · Next.js · Node.js · Enterprise
            Applications
          </p>
        </motion.div>
      </div>
    </section>
  );
}
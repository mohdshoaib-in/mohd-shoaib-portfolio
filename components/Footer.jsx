"use client";

import { ArrowUp } from "lucide-react";
import { profile } from "@/lib/profile";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-white/[0.05] bg-[#030303] px-6">
      <div className="mx-auto max-w-7xl">
        {/* Main Footer */}
        <div className="flex flex-col gap-8 py-10 sm:flex-row sm:items-center sm:justify-between">
          {/* Brand */}
          <div>
            <a
              href="#top"
              className="text-sm font-semibold tracking-tight text-white"
            >
              Mohd Shoaib
            </a>

            <p className="mt-2 text-xs text-zinc-700">
              Full Stack Software Engineer ·  React.js Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
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

            {/* Back To Top */}
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="ml-2 flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.02] text-zinc-600 transition hover:border-violet-400/20 hover:bg-violet-400/5 hover:text-violet-300"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-3 border-t border-white/[0.05] py-6 text-[11px] text-zinc-700 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Mohd Shoaib. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
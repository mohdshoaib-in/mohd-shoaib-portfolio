"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ExternalLink, FileText } from "lucide-react";
import { profile } from "@/lib/profile";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <nav className="rounded-2xl border border-white/[0.08] bg-black/70 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-6">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link
              href="/"
              onClick={closeMenu}
              className="group flex items-center gap-3"
            >
              <img
                src="/image.jpg"
                alt="Mohd Shoaib"
                className="h-10 w-10 rounded-full object-cover border border-white/[0.08]"
              />

              <div>
                <p className="text-sm font-semibold tracking-wide text-white">
                  Mohd Shoaib
                </p>

                <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                  Full Stack Engineer
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-1 lg:flex">
              {navItems.map((item) => {
                const isRoute = item.href.startsWith("/");

                if (isRoute) {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-lg px-3 py-2 text-sm text-zinc-400 transition hover:bg-white/[0.05] hover:text-white"
                    >
                      {item.label}
                    </Link>
                  );
                }

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-lg px-3 py-2 text-sm text-zinc-400 transition hover:bg-white/[0.05] hover:text-white"
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>

            {/* Desktop Actions */}
            <div className="hidden items-center gap-2 lg:flex">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/[0.08] px-3 py-2 text-sm text-zinc-300 transition hover:border-white/[0.15] hover:bg-white/[0.05] hover:text-white"
              >
                <ExternalLink size={15} />
                LinkedIn
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-violet-400/25 bg-violet-500/10 px-5 py-3 text-sm font-semibold text-violet-200 shadow-[0_0_25px_rgba(139,92,246,0.08)] transition-all duration-300 hover:border-violet-400/40 hover:bg-violet-500/15 hover:text-white hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]"
              >
                <FileText size={15} />
                Resume
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="rounded-lg border border-white/[0.08] p-2 text-zinc-300 transition hover:bg-white/[0.05] hover:text-white lg:hidden"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="border-t border-white/[0.08] pt-4 lg:hidden">
              <div className="flex flex-col gap-1">

                {navItems.map((item) => {
                  const isRoute = item.href.startsWith("/");

                  if (isRoute) {
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMenu}
                        className="rounded-lg px-3 py-3 text-sm text-zinc-400 transition hover:bg-white/[0.05] hover:text-white"
                      >
                        {item.label}
                      </Link>
                    );
                  }

                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className="rounded-lg px-3 py-3 text-sm text-zinc-400 transition hover:bg-white/[0.05] hover:text-white"
                    >
                      {item.label}
                    </a>
                  );
                })}

                {/* Mobile Actions */}
                <div className="mt-3 grid grid-cols-2 gap-2 border-t border-white/[0.08] pt-3">

                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/[0.08] px-3 py-3 text-sm text-zinc-300 transition hover:bg-white/[0.05] hover:text-white"
                  >
                    <ExternalLink size={15} />
                    LinkedIn
                  </a>

                 <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl border border-violet-400/25 bg-violet-500/10 px-3 py-3 text-sm font-semibold text-violet-200 shadow-[0_0_25px_rgba(139,92,246,0.08)] transition-all duration-300 hover:border-violet-400/40 hover:bg-violet-500/15 hover:text-white hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]"
                >
                  <FileText size={15} />
                  Resume
                </a>


                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

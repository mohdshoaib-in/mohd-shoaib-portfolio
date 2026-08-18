"use client";

import { useEffect } from "react";
import {
  Download,
  ExternalLink,
  FileText,
  X,
} from "lucide-react";

export default function ResumeViewer({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Prevent background scrolling
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-black/90 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label="Resume viewer"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      {/* Header */}
      <div className="flex h-16 shrink-0 items-center justify-between border-b border-white/[0.08] bg-[#080808]/95 px-4 sm:px-6">
        {/* Title */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-violet-400/20 bg-violet-500/10 text-violet-300">
            <FileText size={17} />
          </div>

          <div>
            <p className="text-sm font-medium text-white">
              Mohd Shoaib — Resume
            </p>

            <p className="hidden text-[10px] text-zinc-600 sm:block">
               React.js Developer · Full Stack Engineer
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Open PDF */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open resume in new tab"
            className="hidden h-9 items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.025] px-3 text-xs font-medium text-zinc-400 transition hover:border-white/[0.15] hover:bg-white/[0.05] hover:text-white sm:flex"
          >
            <ExternalLink size={14} />

            Open
          </a>

          {/* Download */}
          <a
            href="/resume.pdf"
            download="John-Doe-Resume.pdf"
            aria-label="Download resume"
            className="flex h-9 items-center gap-2 rounded-lg border border-violet-400/25 bg-violet-500/10 px-3 text-xs font-medium text-violet-200 transition hover:border-violet-400/40 hover:bg-violet-500/15 hover:text-white"
          >
            <Download size={14} />

            <span className="hidden sm:inline">
              Download
            </span>
          </a>

          {/* Close */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close resume viewer"
            className="ml-1 flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.025] text-zinc-500 transition hover:border-red-400/20 hover:bg-red-400/5 hover:text-red-300"
          >
            <X size={17} />
          </button>
        </div>
      </div>

      {/* PDF Area */}
      <div className="min-h-0 flex-1 bg-[#111] p-2 sm:p-4">
        <div className="h-full w-full overflow-hidden rounded-xl border border-white/[0.06] bg-[#1a1a1a] shadow-2xl">
          <iframe
            src="/resume.pdf#toolbar=1&navpanes=0&scrollbar=1"
            title="Mohd Shoaib Resume"
            className="h-full w-full border-0"
          />
        </div>
      </div>
    </div>
  );
}
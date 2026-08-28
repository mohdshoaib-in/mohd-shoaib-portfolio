"use client";

import { useEffect, useState } from "react";
import {
  Download,
  ExternalLink,
  FileText,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
} from "lucide-react";

export default function ResumeViewer({ isOpen, onClose }) {
  const [PDFComponents, setPDFComponents] = useState(null);
  const [pdfjs, setPdfjs] = useState(null);

  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  /*
   * Load react-pdf ONLY inside the browser.
   *
   * This prevents pdfjs from being evaluated by
   * Next.js/Turbopack during SSR.
   */
  useEffect(() => {
    if (!isOpen) return;

    let cancelled = false;

    async function loadPDFViewer() {
      try {
        setLoading(true);
        setError(false);

        /*
         * Make sure this code runs only in browser.
         */
        if (typeof window === "undefined") {
          return;
        }

        /*
         * Dynamically import react-pdf.
         */
        const reactPdf = await import("react-pdf");

        /*
         * Dynamically import pdfjs-dist.
         */
        const pdfjsModule = await import("pdfjs-dist");

        if (cancelled) return;

        /*
         * Configure PDF.js worker in the browser.
         */
        const workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsModule.version}/build/pdf.worker.min.mjs`;

        pdfjsModule.GlobalWorkerOptions.workerSrc = workerSrc;

        setPDFComponents({
          Document: reactPdf.Document,
          Page: reactPdf.Page,
        });

        setPdfjs(pdfjsModule);

        setLoading(false);
      } catch (err) {
        console.error("Failed to load PDF viewer:", err);

        if (!cancelled) {
          setLoading(false);
          setError(true);
        }
      }
    }

    loadPDFViewer();

    return () => {
      cancelled = true;
    };
  }, [isOpen]);

  /*
   * Prevent background scrolling.
   */
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        setPageNumber((current) => Math.max(1, current - 1));
      }

      if (event.key === "ArrowRight") {
        setPageNumber((current) =>
          numPages > 0
            ? Math.min(numPages, current + 1)
            : current
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose, numPages]);

  /*
   * Reset viewer when closed.
   */
  useEffect(() => {
    if (!isOpen) {
      setNumPages(0);
      setPageNumber(1);
      setScale(1);
      setError(false);
      setPDFComponents(null);
      setPdfjs(null);
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const handleDocumentLoadSuccess = ({ numPages: totalPages }) => {
    setNumPages(totalPages);
    setPageNumber(1);
    setError(false);
  };

  const handleDocumentLoadError = (err) => {
    console.error("PDF document error:", err);
    setError(true);
  };

  const previousPage = () => {
    setPageNumber((current) => Math.max(1, current - 1));
  };

  const nextPage = () => {
    setPageNumber((current) =>
      numPages > 0
        ? Math.min(numPages, current + 1)
        : current
    );
  };

  const zoomIn = () => {
    setScale((current) => Math.min(2, current + 0.1));
  };

  const zoomOut = () => {
    setScale((current) => Math.max(0.6, current - 0.1));
  };

  const Document = PDFComponents?.Document;
  const Page = PDFComponents?.Page;

  return (
    <div
      className="fixed inset-0 z-[9999] flex h-[100dvh] w-full flex-col bg-black"
      role="dialog"
      aria-modal="true"
      aria-label="Resume viewer"
    >
      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="flex h-16 shrink-0 items-center justify-between border-b border-white/[0.08] bg-[#08090b] px-3 sm:px-6">

        {/* Resume title */}

        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-violet-400/20 bg-violet-500/10 text-violet-300">
            <FileText size={17} />
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-white">
              Mohd Shoaib — Resume
            </p>

            <p className="hidden text-xs text-zinc-500 sm:block">
              React.js Developer · Full Stack Engineer
            </p>
          </div>
        </div>

        {/* Actions */}

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">

          {/* Open */}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open resume in new tab"
            className="inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 text-xs font-medium text-zinc-300 transition hover:bg-white/[0.08] hover:text-white sm:px-3"
          >
            <ExternalLink size={14} />

            <span className="hidden sm:inline">
              Open
            </span>
          </a>

          {/* Download */}

          <a
            href="/resume.pdf"
            download="Mohd-Shoaib-Resume.pdf"
            aria-label="Download resume"
            className="inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-violet-400/30 bg-violet-500/10 px-2.5 text-xs font-semibold text-violet-200 transition hover:bg-violet-500/20 hover:text-white sm:px-3"
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
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-zinc-400 transition hover:border-red-400/30 hover:bg-red-500/10 hover:text-red-300"
          >
            <X size={17} />
          </button>
        </div>
      </header>

      {/* =====================================================
          PDF TOOLBAR
      ====================================================== */}

      <div className="flex h-12 shrink-0 items-center justify-center gap-2 border-b border-white/[0.06] bg-[#101114]">

        {/* Previous */}

        <button
          type="button"
          onClick={previousPage}
          disabled={pageNumber <= 1}
          aria-label="Previous page"
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] text-zinc-400 transition hover:bg-white/[0.06] hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ChevronLeft size={16} />
        </button>

        {/* Page */}

        <div className="min-w-[70px] text-center text-xs text-zinc-400">
          {pageNumber} / {numPages || "..."}
        </div>

        {/* Next */}

        <button
          type="button"
          onClick={nextPage}
          disabled={!numPages || pageNumber >= numPages}
          aria-label="Next page"
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] text-zinc-400 transition hover:bg-white/[0.06] hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ChevronRight size={16} />
        </button>

        {/* Divider */}

        <div className="mx-1 h-5 w-px bg-white/[0.08]" />

        {/* Zoom out */}

        <button
          type="button"
          onClick={zoomOut}
          disabled={scale <= 0.6}
          aria-label="Zoom out"
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] text-zinc-400 transition hover:bg-white/[0.06] hover:text-white disabled:opacity-30"
        >
          <ZoomOut size={15} />
        </button>

        {/* Zoom percentage */}

        <span className="w-12 text-center text-[11px] text-zinc-500">
          {Math.round(scale * 100)}%
        </span>

        {/* Zoom in */}

        <button
          type="button"
          onClick={zoomIn}
          disabled={scale >= 2}
          aria-label="Zoom in"
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] text-zinc-400 transition hover:bg-white/[0.06] hover:text-white disabled:opacity-30"
        >
          <ZoomIn size={15} />
        </button>
      </div>

      {/* =====================================================
          PDF CONTENT
      ====================================================== */}

      <main className="min-h-0 flex-1 overflow-auto bg-[#202020] p-2 sm:p-6">

        {/* Loading */}

        {loading && (
          <div className="flex h-full min-h-[300px] items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-zinc-700 border-t-violet-500" />

              <p className="text-xs text-zinc-500">
                Loading resume...
              </p>
            </div>
          </div>
        )}

        {/* Error */}

        {!loading && error && (
          <div className="flex h-full min-h-[300px] flex-col items-center justify-center text-center">

            <FileText
              size={40}
              className="mb-4 text-zinc-700"
            />

            <p className="text-sm font-medium text-zinc-300">
              Unable to display resume
            </p>

            <p className="mt-1 text-xs text-zinc-600">
              You can open or download the PDF instead.
            </p>

            <div className="mt-5 flex gap-2">

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-xs text-zinc-300 transition hover:bg-white/5"
              >
                <ExternalLink size={14} />
                Open
              </a>

              <a
                href="/resume.pdf"
                download="Mohd-Shoaib-Resume.pdf"
                className="inline-flex items-center gap-2 rounded-lg bg-violet-500 px-4 py-2 text-xs font-semibold text-white transition hover:bg-violet-400"
              >
                <Download size={14} />
                Download
              </a>

            </div>
          </div>
        )}

        {/* PDF */}

        {!loading && !error && Document && Page && pdfjs && (
          <div className="flex min-w-full justify-center">

            <Document
              file="/resume.pdf"
              onLoadSuccess={handleDocumentLoadSuccess}
              onLoadError={handleDocumentLoadError}
              loading={null}
            >
              <Page
                pageNumber={pageNumber}
                scale={scale}
                renderTextLayer={true}
                renderAnnotationLayer={true}
                className="shadow-2xl"
              />
            </Document>

          </div>
        )}
      </main>
    </div>
  );
}

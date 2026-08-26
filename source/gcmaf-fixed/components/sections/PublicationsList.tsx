"use client";

import { useState } from "react";
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Search,
  X,
} from "lucide-react";
import type { Publication } from "@/lib/data/research";

const PAGE_SIZE = 10;

const CATEGORY_COLOURS: Record<string, string> = {
  Cancer: "bg-rose-500/20 text-rose-700",
  Neurological: "bg-purple-500/20 text-purple-700",
  Immunology: "bg-brand/20 text-brand",
  "Infectious Disease": "bg-amber-500/20 text-amber-700",
  Autoimmune: "bg-cyan-600/20 text-cyan-700",
  Biomarker: "bg-emerald-500/20 text-emerald-700",
};

const CATEGORIES = [
  "All",
  "Cancer",
  "Immunology",
  "Neurological",
  "Infectious Disease",
  "Autoimmune",
  "Biomarker",
];

interface Props {
  publications: Publication[];
}

export function PublicationsList({ publications }: Props) {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  function updateSearch(value: string) {
    setSearch(value);
    setPage(1);
  }

  const term = search.toLowerCase();
  const filtered = term
    ? publications.filter(
        (p) =>
          (p.citation ?? "").toLowerCase().includes(term) ||
          (p.title ?? "").toLowerCase().includes(term) ||
          (p.authors ?? "").toLowerCase().includes(term) ||
          (p.journal ?? "").toLowerCase().includes(term) ||
          p.category.toLowerCase().includes(term),
      )
    : publications;

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const start = (page - 1) * PAGE_SIZE;
  const visible = filtered.slice(start, start + PAGE_SIZE);
  const placeholders = PAGE_SIZE - visible.length;
  const rangeStart = filtered.length === 0 ? 0 : start + 1;
  const rangeEnd = start + visible.length;

  function go(next: number) {
    setPage(next);
  }

  const paginationControls = (
    <div className="flex items-center gap-1.5 shrink-0">
      <button
        onClick={() => go(page - 1)}
        disabled={page === 1}
        className="p-2 rounded-lg border border-border hover:border-brand/40 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
        aria-label="Previous page"
      >
        <ChevronLeft size={14} className="text-ink-muted" />
      </button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
        <button
          key={p}
          onClick={() => go(p)}
          className={`w-8 h-8 rounded-lg font-body text-sm transition-colors cursor-pointer ${
            p === page
              ? "bg-brand text-white"
              : "border border-border text-ink-muted hover:border-brand/40"
          }`}
        >
          {p}
        </button>
      ))}
      <button
        onClick={() => go(page + 1)}
        disabled={page === totalPages}
        className="p-2 rounded-lg border border-border hover:border-brand/40 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
        aria-label="Next page"
      >
        <ChevronRight size={14} className="text-ink-muted" />
      </button>
    </div>
  );

  return (
    <div id="publications-top">
      {/* Search row */}
      <div className="relative mb-4">
        <Search
          size={15}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-muted pointer-events-none"
        />
        <input
          type="text"
          value={search}
          onChange={(e) => updateSearch(e.target.value)}
          placeholder="Search by title, author, journal, or category…"
          className="w-full pl-9 pr-9 py-2.5 rounded-xl border border-border bg-surface font-body text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:border-brand/50 transition-colors"
        />
        {search && (
          <button
            onClick={() => updateSearch("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-muted hover:text-ink transition-colors cursor-pointer"
            aria-label="Clear search"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {/* Category pills + count/pagination row */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        {CATEGORIES.map((cat) => {
          const active =
            cat === "All"
              ? !search
              : search === cat.toLowerCase() || term === cat.toLowerCase();
          return (
            <button
              key={cat}
              onClick={() => setSearch(cat === "All" ? "" : cat)}
              className={`px-3 py-1 rounded-full font-body text-xs font-medium border transition-colors cursor-pointer ${
                active
                  ? "bg-brand text-white border-brand"
                  : "border-brand/30 text-ink bg-brand/5 hover:border-brand/60 hover:bg-brand/10"
              }`}
            >
              {cat}
            </button>
          );
        })}
        <div className="ml-auto flex items-center gap-2 shrink-0">
          <span className="font-body text-xs text-ink-muted whitespace-nowrap">
            {totalPages > 1
              ? `Showing ${rangeStart}–${rangeEnd} of ${filtered.length}`
              : `${filtered.length} publication${filtered.length !== 1 ? "s" : ""}`}
          </span>
          {totalPages > 1 && paginationControls}
        </div>
      </div>

      {/* Publication cards */}
      <div className="space-y-4">
        {visible.length === 0 ? (
          <div className="py-16 text-center">
            <p className="font-body text-ink-muted">
              No publications found for &ldquo;{search}&rdquo;.
            </p>
          </div>
        ) : (
          <>
            {visible.map((pub) => {
              const colourClass =
                CATEGORY_COLOURS[pub.category] ?? "bg-brand/10 text-brand";
              const keyText =
                pub.citation ??
                `${pub.authors}-${pub.year}-${(pub.title ?? "").slice(0, 30)}`;
              return (
                <div
                  key={keyText}
                  className="p-6 rounded-2xl border border-border bg-surface hover:border-brand/30 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-brand/10 rounded-xl shrink-0 mt-0.5">
                      <BookOpen size={16} className="text-brand" />
                    </div>
                    <div>
                      <span
                        className={`inline-block mb-2 px-2 py-0.5 rounded-full text-xs font-body font-medium ${colourClass}`}
                      >
                        {pub.category}
                      </span>
                      {pub.citation ? (
                        <>
                          <p className="font-body text-sm text-ink-muted leading-relaxed">
                            {pub.citation}
                          </p>
                          {pub.url && (
                            <a
                              href={pub.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-2 inline-flex items-center gap-1.5 font-body text-sm text-brand hover:underline"
                            >
                              <ExternalLink size={14} className="shrink-0" />
                              View Source
                            </a>
                          )}
                        </>
                      ) : (
                        <>
                          <h3 className="font-display text-lg font-semibold text-ink mb-1 leading-snug">
                            {pub.title}
                          </h3>
                          <p className="font-body text-sm text-ink-muted">
                            {pub.authors} — <em>{pub.journal}</em>, {pub.year}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
            {/* Invisible placeholders to keep container height stable across pages */}
            {Array.from({ length: placeholders }).map((_, i) => (
              <div
                key={`placeholder-${i}`}
                aria-hidden="true"
                className="p-6 rounded-2xl invisible"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-xl shrink-0 mt-0.5 w-8 h-8" />
                  <div>
                    <span className="inline-block mb-2 px-2 py-0.5 rounded-full text-xs">
                      &nbsp;
                    </span>
                    <h3 className="font-display text-lg font-semibold mb-1">
                      &nbsp;
                    </h3>
                    <p className="font-body text-sm">&nbsp;</p>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

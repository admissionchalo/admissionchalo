"use client";

import { useRouter } from "next/navigation";
import { MapPin, Star, Bookmark, GitCompare, Download } from "lucide-react";
import { SectionHeader } from "./ui";
import colleges from "../lib/colleges/index";

const ALL_COLLEGES = Object.entries(colleges)
  .map(([id, d]) => ({ id, ...d }))
  .slice(0, 6);

export default function TopCollegesSection({ wishlist = [], onToggleWishlist, onPredictorOpen }) {
  const router = useRouter();

  return (
    <section className="mb-14">
      <SectionHeader title="Top Colleges 2026" subtitle="Curated Picks" link="View All Colleges" />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-5">
        {ALL_COLLEGES.map((col) => {
          const saved = wishlist.includes(col.name);

          return (
            <article
              key={col.id}
              onClick={() => router.push(`/college/${col.id}`)}
              className="bg-white rounded-2xl border border-charcoal/10 p-5 cursor-pointer transition-all duration-300 hover:border-gold/60 hover:shadow-[0_14px_32px_-16px_rgba(0,0,0,0.25)]"
            >
              <div className="flex items-start gap-3 mb-3.5">
                <div
                  className="relative w-12 h-12 rounded-2xl flex items-center justify-center text-white font-heading font-extrabold text-[14px] flex-shrink-0 shadow-[0_4px_10px_-2px_rgba(0,0,0,0.35)] ring-2 ring-white"
                  style={{ background: `linear-gradient(150deg, ${col.colors?.primary || "#2E2F31"} 0%, ${col.colors?.accent || "#55565A"} 100%)` }}
                >
                  <span className="relative z-10">{col.code}</span>
                  <div
                    className="absolute inset-0 rounded-2xl opacity-25"
                    style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.5) 0%, transparent 55%)" }}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-heading font-bold text-[14.5px] text-charcoal m-0 leading-snug truncate">
                    {col.shortName}
                  </h3>
                  <p className="flex items-center gap-1 text-[11px] text-charcoal/55 mt-0.5 m-0">
                    <MapPin size={11} /> {col.location} · <span className="text-gold-dark font-semibold">{col.nirf}</span>
                  </p>
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); onToggleWishlist?.(col.name); }}
                  className="flex-shrink-0 bg-transparent border-none cursor-pointer p-0.5"
                  aria-label="Save college"
                >
                  <Bookmark size={16} strokeWidth={2} color={saved ? "#F9B929" : "#C7C8CB"} fill={saved ? "#F9B929" : "none"} />
                </button>
              </div>

              <div className="h-px bg-charcoal/8 mb-3.5" />

              <div className="grid grid-cols-2 gap-3 mb-3.5">
                <div>
                  <p className="text-[10px] text-charcoal/45 m-0 mb-0.5">Courses</p>
                  <p className="flex items-center gap-1 font-heading font-bold text-charcoal text-[12.5px] m-0">
                    {col.coursesOffered}
                    <span className="flex items-center gap-0.5 text-[11px] font-bold text-gold-dark">
                      <Star size={11} fill="#F9B929" color="#F9B929" /> {col.rating}
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-[10px] text-charcoal/45 m-0 mb-0.5">Exams</p>
                  <p className="font-heading font-bold text-charcoal text-[12.5px] m-0 truncate">
                    {col.examsAccepted?.join(", ")}
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-[10px] text-charcoal/45 m-0 mb-0.5">Total Tuition Fees</p>
                <p className="font-heading font-bold text-charcoal text-[14px] m-0">{col.feesRange}</p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={(e) => { e.stopPropagation(); onPredictorOpen?.(); }}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-full border border-charcoal/15 bg-transparent font-bold text-[12px] text-charcoal cursor-pointer hover:border-charcoal/40 transition-colors"
                >
                  <GitCompare size={13} /> Compare
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); router.push(`/college/${col.id}`); }}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-full bg-charcoal text-white font-bold text-[12px] cursor-pointer hover:bg-gold hover:text-charcoal transition-colors"
                >
                  <Download size={13} /> Brochure
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
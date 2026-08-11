"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { MapPin, Star, Bookmark, Download, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "./ui";
import colleges from "../lib/colleges/index";

const ALL_COLLEGES = Object.entries(colleges).map(([id, d]) => ({ id, ...d }));

const REGIONS = ["All India", "Greater Noida", "Delhi/NCR", "Bangalore", "Pune", "Hyderabad", "Mumbai (All)"];

export default function TopCollegesSection({ wishlist = [], onToggleWishlist }) {
  const router = useRouter();
  const [activeRegion, setActiveRegion] = useState("All India");
  const scrollRef = useRef(null);

  const filteredColleges =
    activeRegion === "All India"
      ? ALL_COLLEGES
      : ALL_COLLEGES.filter((c) => c.location?.includes(activeRegion.split("/")[0]));

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
    }
  };

  return (
    <section className="mb-14">
      <SectionHeader title="Top Colleges 2026" subtitle="Curated Picks" link="View All Colleges" />

      {/* Region filter pills */}
      <div className="flex items-center gap-2 mb-6 overflow-x-auto scrollbar-hide pb-1">
        {REGIONS.map((region) => (
          <button
            key={region}
            onClick={() => setActiveRegion(region)}
            className={`text-[13px] font-semibold px-4 py-2 rounded-full border whitespace-nowrap transition-colors ${
              activeRegion === region
                ? "border-charcoal text-charcoal bg-white"
                : "border-charcoal/15 text-charcoal/50 bg-white hover:border-charcoal/30"
            }`}
          >
            {region}
          </button>
        ))}
      </div>

      {/* Horizontal scroll cards */}
      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="hidden sm:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-charcoal/10 items-center justify-center shadow-md hover:bg-gray-50"
          aria-label="Scroll left"
        >
          <ChevronLeft size={18} />
        </button>

        <div ref={scrollRef} className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-2">
          {filteredColleges.length === 0 && (
            <p className="text-[13px] text-charcoal/50 py-6">No colleges found for this region.</p>
          )}

          {filteredColleges.map((col) => {
            const saved = wishlist.includes(col.shortName);

            return (
              <article
                key={col.id}
                className="min-w-[300px] max-w-[300px] flex-shrink-0 bg-white rounded-2xl border border-charcoal/10 p-4"
              >
                {/* Top row: logo + name + bookmark */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div
                    onClick={() => router.push(`/college/${col.id}`)}
                    className="cursor-pointer"
                  >
                    <h3 className="font-heading font-bold text-[15px] text-blue-700 m-0 leading-snug">
                      {col.shortName || "Unnamed College"}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <div
                      className="relative w-9 h-9 rounded-lg flex items-center justify-center text-white font-heading font-extrabold text-[11px] flex-shrink-0"
                      style={{
                        background: `linear-gradient(150deg, ${col.colors?.primary || "#2E2F31"} 0%, ${col.colors?.accent || "#55565A"} 100%)`,
                      }}
                    >
                      {col.code || col.shortName?.slice(0, 2).toUpperCase() || "?"}
                    </div>
                  </div>
                </div>

                {/* Location - smaller text */}
                <p className="flex items-center gap-1 text-[10.5px] text-charcoal/50 mb-4 m-0">
                  <MapPin size={10} /> {col.location || "Location N/A"}
                  {col.nirf && <> · <span className="text-charcoal/70 font-semibold">{col.nirf}</span></>}
                </p>

                {/* Courses + Fees */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-[10.5px] text-charcoal/40 m-0 mb-1">Courses Offered</p>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[13px] font-semibold text-blue-700">
                        {col.coursesOffered || "N/A"}
                      </span>
                      <span className="flex items-center gap-0.5 text-[13px] font-semibold text-charcoal">
                        <Star size={12} fill="#F9B929" color="#F9B929" /> {col.rating ?? "—"}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[10.5px] text-charcoal/40 m-0 mb-1">Total Fees</p>
                    <p className="text-[13px] font-semibold text-charcoal m-0">
                      {col.feesRange || "Not disclosed"}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => { e.stopPropagation(); onToggleWishlist?.(col.shortName); }}
                    className="w-9 h-9 rounded-full border border-charcoal/15 flex items-center justify-center hover:bg-gray-50 flex-shrink-0"
                    aria-label="Save college"
                  >
                    <Bookmark size={15} color={saved ? "#F9B929" : "#2E2F31"} fill={saved ? "#F9B929" : "none"} />
                  </button>
               <button
  onClick={() => router.push(`/college/${col.id}`)}
  className="flex-1 bg-[#F9B929] hover:bg-[#E0A61F] text-charcoal text-[13px] font-semibold rounded-full py-2.5 flex items-center justify-center gap-1.5 transition-colors"
>
  <Download size={14} /> Brochure
</button>
                </div>
              </article>
            );
          })}
        </div>

        <button
          onClick={() => scroll("right")}
          className="hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-charcoal/10 items-center justify-center shadow-md hover:bg-gray-50"
          aria-label="Scroll right"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}
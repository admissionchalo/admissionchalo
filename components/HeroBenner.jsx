"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { heroBanners } from "../lib/data";

export default function HeroSection() {
  const [query, setQuery] = useState("");

  return (
    // Mobile: height driven by content (min-h only, no forced aspect ratio —
    // otherwise 3-line heading + description + search bar overflow the box).
    // Desktop (sm+): fixed aspect-ratio matches the 1600x600 banner crop.
    <section className="relative w-full min-h-[560px] sm:aspect-[8/3] sm:max-h-[560px] sm:min-h-[320px] overflow-hidden bg-charcoal">
      {/* Background image layers - pure CSS crossfade */}
      <div className="absolute inset-0 z-0">
        {heroBanners.map((banner, i) => (
          <div
            key={banner.id}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 animate-hero-fade"
            style={{
              backgroundImage: `url(${banner.image})`,
              animationDelay: `${i * 3}s`,
            }}
          />
        ))}
        {/* Dark overlay so white text stays readable on ANY banner image —
            stronger at top (behind heading) and bottom (behind search/tags),
            slightly lighter in the middle so the photo still reads through. */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 pt-10 pb-10 sm:px-10 sm:pt-20 sm:pb-16">
        <h1 className="max-w-4xl font-heading text-[26px] font-extrabold leading-[1.2] text-white drop-shadow-md sm:text-5xl">
          Find the Right College, Without the Guesswork
        </h1>
        <p className="mt-3 max-w-2xl font-body text-[13.5px] leading-relaxed text-white/85 sm:mt-4 sm:text-lg">
          Search 6,200+ colleges in India, compare fees and placements, and
          track every entrance exam date that matters — all in one place.
        </p>

        {/* Search bar — white pill, orange/gold search button, sits directly on the image */}
        <div className="mt-6 flex max-w-2xl flex-col sm:flex-row overflow-hidden rounded-xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.25)] sm:mt-8">
          <div className="flex flex-1 items-center gap-3 px-4 sm:px-5">
            <Search size={16} className="flex-shrink-0 text-charcoal/40" />
            <label htmlFor="college-search" className="sr-only">
              Search college, course, or city
            </label>
            <input
              id="college-search"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search college, course, or city…"
              className="w-full bg-transparent py-3.5 font-body text-[13px] text-charcoal outline-none placeholder:text-charcoal/40 sm:py-4 sm:text-sm"
            />
          </div>
          <button className="flex-shrink-0 bg-gold px-8 py-3.5 font-heading text-sm font-bold text-charcoal transition hover:bg-gold-dark sm:py-0">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
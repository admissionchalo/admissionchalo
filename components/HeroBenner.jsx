"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { heroBanners } from "../lib/data";

// Every heroBanners.image URL already contains "w_1600,h_600,c_fill,g_auto"
// (see lib/data.js). For mobile we swap that for a taller, portrait-ish
// crop — same g_auto smart-cropping, different shape — so the section's
// own aspect-ratio can exactly match what's actually rendered and bg-cover
// never has to scale the image up to cover extra height. That's what
// removes the zoom for good, instead of just shrinking padding/text.
const toMobileSrc = (url) => url.replace("w_1600,h_600", "w_900,h_780");

export default function HeroSection() {
  const [query, setQuery] = useState("");

  return (
    // Mobile: aspect-[9/10] matches the new 900x1000 mobile crop exactly.
    // Desktop (sm+): aspect-[8/3] matches the original 1600x600 crop.
    // Because each breakpoint's container ratio now equals its own image's
    // ratio, bg-cover never crops/zooms beyond what Cloudinary already did.
    <section className="relative w-full aspect-[900/780] max-h-[480px] sm:aspect-[8/3] overflow-hidden bg-charcoal">
      <div className="absolute inset-0 z-0">
        {heroBanners.map((banner, i) => (
          <div key={banner.id}>
            {/* Mobile crop */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 animate-hero-fade sm:hidden"
              style={{
                backgroundImage: `url(${toMobileSrc(banner.image)})`,
                animationDelay: `${i * 3}s`,
              }}
            />
            {/* Desktop crop */}
            <div
              className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat opacity-0 animate-hero-fade sm:block"
              style={{
                backgroundImage: `url(${banner.image})`,
                animationDelay: `${i * 3}s`,
              }}
            />
          </div>
        ))}
        {/* Dark overlay so white text stays readable on ANY banner image —
            stronger at top (behind heading) and bottom (behind search/tags),
            slightly lighter in the middle so the photo still reads through. */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-5 sm:px-10">
        <h1 className="max-w-4xl font-heading text-[22px] font-extrabold leading-[1.2] text-white drop-shadow-md sm:text-5xl">
          Find the Right College, Without the Guesswork
        </h1>
        <p className="mt-2 max-w-2xl font-body text-[13px] leading-snug text-white/85 line-clamp-2 sm:mt-4 sm:text-lg sm:line-clamp-none">
          Search 6,200+ colleges in India, compare fees and placements, and
          track every entrance exam date that matters — all in one place.
        </p>

        {/* Search bar — single row on every screen size, input + button side by side */}
        <div className="mt-4 flex max-w-2xl overflow-hidden rounded-xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.25)] sm:mt-8">
          <div className="flex flex-1 min-w-0 items-center gap-2 px-3 sm:gap-3 sm:px-5">
            <Search size={15} className="flex-shrink-0 text-charcoal/40 sm:w-[18px] sm:h-[18px]" />
            <label htmlFor="college-search" className="sr-only">
              Search college, course, or city
            </label>
            <input
              id="college-search"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search college, course, or city…"
              className="w-full min-w-0 bg-transparent py-3 font-body text-[12.5px] text-charcoal outline-none placeholder:text-charcoal/40 sm:py-4 sm:text-sm"
            />
          </div>
          <button className="flex flex-shrink-0 items-center justify-center bg-gold px-4 font-heading text-[12.5px] font-bold text-charcoal transition hover:bg-gold-dark sm:px-8 sm:text-sm">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
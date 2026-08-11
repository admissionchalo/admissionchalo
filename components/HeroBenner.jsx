"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { heroBanners } from "../lib/data";

export default function HeroSection() {
  const [query, setQuery] = useState("");

  return (
    // aspect-[8/3] matches the 1600x600 shape every banner is now served at
    // (see lib/data.js — h_600,c_fill,g_auto) so bg-cover never has to
    // crop/zoom beyond what Cloudinary already cropped intentionally.
    <section className="relative w-full aspect-[8/3] max-h-[560px] min-h-[320px] overflow-hidden bg-charcoal">
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

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-14 pb-12 sm:px-10 sm:pt-20 sm:pb-16">
        <h1 className="max-w-4xl font-heading text-4xl font-extrabold leading-[1.15] text-white drop-shadow-md sm:text-5xl">
          Find the Right College, Without the Guesswork
        </h1>
        <p className="mt-4 max-w-2xl font-body text-base text-white/85 sm:text-lg">
          Search 6,200+ colleges in India, compare fees and placements, and
          track every entrance exam date that matters — all in one place.
        </p>

        {/* Search bar — white pill, orange/gold search button, sits directly on the image */}
        <div className="mt-8 flex max-w-2xl overflow-hidden rounded-xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
          <div className="flex flex-1 items-center gap-3 px-5">
            <Search size={18} className="flex-shrink-0 text-charcoal/40" />
            <label htmlFor="college-search" className="sr-only">
              Search college, course, or city
            </label>
            <input
              id="college-search"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search college, course, or city…"
              className="w-full bg-transparent py-4 font-body text-sm text-charcoal outline-none placeholder:text-charcoal/40"
            />
          </div>
          <button className="flex-shrink-0 bg-gold px-8 font-heading text-sm font-bold text-charcoal transition hover:bg-gold-dark">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
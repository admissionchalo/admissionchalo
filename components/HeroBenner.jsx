"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { heroBanners } from "../lib/data";

// The perceived "zoom" wasn't a resize bug — it was the mobile crop shape
// being TOO different from the desktop one. Desktop is a very wide banner
// (1600x600, ratio 2.67). The old mobile crop (1350x1170, ratio ~1.15) was
// close to square, which forces Cloudinary to cut away more than half the
// original width — so anything near the left/right edges of the source
// photo (badges, taglines, logos) gets cropped clean off. That's what
// read as "zoomed in": g_auto keeps the detected main subject and
// discards everything outside the much-narrower mobile frame.
//
// Using a 16:9 mobile crop instead (much closer to the desktop's own
// shape) keeps far more of the original photo's width in frame, so edge
// content survives, while still being noticeably taller/more portrait
// than the desktop banner.
const withHiResCrop = (url, width, height) =>
  url
    .replace(/w_\d+,h_\d+/, `w_${width},h_${height}`)
    .replace("g_auto", "g_auto,dpr_auto");

const toMobileSrc = (url) => withHiResCrop(url, 1600, 900);

const toDesktopSrc = (url) => withHiResCrop(url, 2400, 900);

export default function HeroSection() {
  const [query, setQuery] = useState("");

  return (
    // Mobile: aspect-video (16:9) matches the new, less-aggressive mobile
    // crop exactly — tall enough to feel like a hero, wide enough that
    // edge content (badges, taglines) from the source banner isn't lost.
    // Desktop (sm+): aspect-[8/3] matches the desktop crop's own ratio
    // exactly (2400/900 = 1600/600 = 8/3 — same shape, just higher-res).
    // Because each breakpoint's container ratio equals its own image's
    // ratio, bg-cover never crops/zooms beyond what Cloudinary already did.
    <section className="relative w-full aspect-video max-h-[480px] sm:aspect-[8/3] overflow-hidden bg-charcoal">
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
                backgroundImage: `url(${toDesktopSrc(banner.image)})`,
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
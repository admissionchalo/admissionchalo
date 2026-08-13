"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { heroBanners } from "../lib/data";

// heroBanners.image URLs already have one combined transform segment:
//   .../upload/f_auto,q_auto,w_1600,h_600,c_fill,g_auto/<version?>/<file>
// For desktop we just bump the resolution inside that same segment (in
// place, not a new chained segment — chaining a second crop after the
// first would re-crop and undo the resolution bump).
const withHiResCrop = (url, width, height) =>
  url
    .replace(/w_\d+,h_\d+/, `w_${width},h_${height}`)
    .replace("g_auto", "g_auto,dpr_auto");

const toDesktopSrc = (url) => withHiResCrop(url, 2400, 900);

// Mobile now uses a SEPARATE image per banner (heroBanners[i].mobileImage)
// instead of auto-cropping the wide desktop photo, once those dedicated
// crops are uploaded. Until then (mobileImage is null for every banner
// right now), we fall back to a smart-crop of the same desktop image — but
// crucially at the SAME 1:1 ratio as the mobile container below, so there's
// no ratio mismatch and no extra cropping while this fallback is in use.
const toMobileSrc = (banner) =>
  banner.mobileImage
    ? withHiResCrop(banner.mobileImage, 1200, 1200)
    : withHiResCrop(banner.image, 1200, 1200);

export default function HeroSection() {
  const [query, setQuery] = useState("");

  return (
    // Mobile: aspect-square (1:1) matches the mobile crop (1200x1200),
    // capped at 560px tall so it doesn't get excessively long on tall phones.
    // Desktop (sm+): aspect-[8/3] matches the desktop crop's own ratio
    // exactly (2400/900 = 1600/600 = 8/3). No max-height cap here — capping
    // height while width is unconstrained (full-bleed) would make the box's
    // *effective* ratio flatter than 8/3 on wide screens, forcing bg-cover
    // to crop the top and bottom of the image to fill that extra width —
    // which is exactly what was cutting off the logo and bottom tagline on
    // large monitors. Letting aspect-ratio fully control height keeps the
    // box's ratio identical to the image's ratio at every screen width, so
    // there's never any extra vertical cropping.
    <section className="relative w-full aspect-square max-h-[560px] sm:aspect-[8/3] sm:max-h-none overflow-hidden bg-charcoal">
      <div className="absolute inset-0 z-0">
        {heroBanners.map((banner, i) => (
          <div key={banner.id}>
            {/* Mobile crop */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 animate-hero-fade sm:hidden"
              style={{
                backgroundImage: `url(${toMobileSrc(banner)})`,
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
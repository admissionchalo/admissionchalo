"use client";

import { useRef, useState } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { impactStories } from "../lib/data";

function VideoCard({ story }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="group flex-shrink-0 w-[210px] h-[360px] flex flex-col rounded-2xl overflow-hidden bg-charcoal ring-1 ring-charcoal/5 shadow-[0_10px_28px_-10px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_44px_-14px_rgba(0,0,0,0.35)]">
      <div className="text-center pt-3 pb-2.5 px-3 flex-shrink-0">
        <p className="font-heading font-extrabold text-white text-[15px] tracking-wide m-0">
          Admission<span className="text-white/60">Chalo</span>
        </p>
        <p className="font-body font-semibold text-[10px] uppercase tracking-wider text-gold mt-1 m-0">
          Success Stories
        </p>
      </div>

      <div className="relative mx-3 rounded-xl overflow-hidden flex-shrink-0" style={{ height: 150 }}>
        {playing && story.youtubeId ? (
          // Iframe only mounts on click — zero cost until the user actually plays it
          <iframe
            src={`https://www.youtube.com/embed/${story.youtubeId}?autoplay=1`}
            title={story.name}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <>
            <div
              className="absolute inset-0"
              style={{ background: `linear-gradient(160deg, ${story.colors[0]}, ${story.colors[1]})` }}
            />
            <span className="absolute inset-0 flex items-center justify-center font-heading font-extrabold text-white text-[32px] opacity-90">
              {story.initials}
            </span>
            <button
              onClick={() => setPlaying(true)}
              aria-label={`Play ${story.name}'s story`}
              className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/0 hover:bg-black/10 transition-colors"
            >
              <span className="w-11 h-11 rounded-full bg-white shadow-[0_8px_20px_-4px_rgba(0,0,0,0.4)] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Play size={16} color="#2E2F31" fill="#2E2F31" />
              </span>
            </button>
          </>
        )}
      </div>

      <div className="px-3.5 pt-3 pb-4 flex-1 min-h-0 overflow-hidden">
        <span className="inline-block bg-white/10 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide text-white mb-2.5">
          {story.stream}
        </span>
        <p className="font-heading font-bold text-[13.5px] text-white m-0 truncate">{story.name}</p>
        <p className="font-body text-[10.5px] text-white/55 mt-1.5 m-0 leading-snug line-clamp-1">{story.role}</p>
        <p className="font-body text-[10.5px] text-white/35 mt-0.5 m-0 leading-snug line-clamp-2">{story.college}</p>
      </div>
    </div>
  );
}

export default function ImpactSection() {
  const scrollRef = useRef(null);
  const scroll = (dir) => scrollRef.current?.scrollBy({ left: dir * 300, behavior: "smooth" });

  return (
    <section className="mb-14">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h2 className="font-heading font-bold text-2xl sm:text-3xl text-charcoal m-0">Our Impact</h2>
        <p className="font-body text-sm text-charcoal/60 mt-3 leading-relaxed m-0">
          Real stories of students and parents who turned career dreams into
          reality with expert counselling and informed guidance.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => scroll(-1)}
          className="flex-shrink-0 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-charcoal hover:text-white transition-colors"
        >
          <ChevronLeft size={18} />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scroll-smooth py-1"
          style={{ scrollbarWidth: "none", scrollSnapType: "x mandatory" }}
        >
          {impactStories.map((s, i) => (
            <div key={i} style={{ scrollSnapAlign: "start" }}>
              <VideoCard story={s} />
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll(1)}
          className="flex-shrink-0 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-charcoal hover:text-white transition-colors"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}
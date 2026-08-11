"use client";

import { useRef, useState } from "react";
import { Play, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { impactStories } from "../lib/data";

function VideoCard({ story }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="group flex-shrink-0 w-[230px] h-[290px] flex flex-col rounded-2xl overflow-hidden bg-white shadow-[0_6px_16px_-6px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-14px_rgba(0,0,0,0.28)]">
      <div className="relative overflow-hidden flex-shrink-0" style={{ height: 150 }}>
        {playing && story.youtubeId ? (
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
            <div
              className="absolute inset-0"
              style={{ background: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.14), transparent 55%), linear-gradient(to top, rgba(0,0,0,0.5), transparent 45%)" }}
            />
            <span className="absolute inset-0 flex items-center justify-center font-heading font-extrabold text-white text-[30px] opacity-75">
              {story.initials}
            </span>

            <span className="absolute top-2.5 left-2.5 bg-white/95 px-2 py-0.5 rounded-md text-[9.5px] font-bold uppercase tracking-wide text-charcoal shadow-sm">
              {story.stream}
            </span>

            <button
              onClick={() => setPlaying(true)}
              aria-label={`Play ${story.name}'s story`}
              className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/0 hover:bg-black/20 transition-colors"
            >
              <span className="w-12 h-8 rounded-lg bg-[#FF0000]/90 shadow-[0_4px_14px_-2px_rgba(0,0,0,0.5)] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Play size={16} color="#fff" fill="#fff" />
              </span>
            </button>

            <span className="absolute bottom-2 right-2 bg-black/75 px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold text-white">
              {story.duration || "2:14"}
            </span>
          </>
        )}
      </div>

      <div className="p-4 flex-1 min-h-0 overflow-hidden flex flex-col">
        <p className="font-heading font-bold text-[14px] text-charcoal m-0 truncate">{story.name}</p>
        <p className="flex items-center gap-1 font-body text-[11px] text-charcoal/55 mt-1.5 m-0 leading-snug">
          <MapPin size={11} className="flex-shrink-0" />
          <span className="truncate">{story.role}</span>
        </p>
        <div className="h-px bg-charcoal/8 my-2.5 flex-shrink-0" />
        <p className="font-body text-[11px] text-charcoal/45 m-0 leading-snug line-clamp-2">{story.college}</p>
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
          className="flex gap-5 overflow-x-auto scroll-smooth py-1 pr-6"
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
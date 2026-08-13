"use client";

import { useState } from "react";
import Image from "next/image";
import { collegeVideos } from "../lib/data";

export default function CollegeVideos() {
  const [activeId, setActiveId] = useState(collegeVideos[0].id);
  const [playing, setPlaying] = useState(false);
  const activeVideo = collegeVideos.find((v) => v.id === activeId);
  const activeIndex = collegeVideos.findIndex((v) => v.id === activeId);

  const handleSelect = (id) => {
    setActiveId(id);
    setPlaying(false);
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10">
      <div className="mb-5 flex items-end justify-between gap-4 sm:mb-6">
        <div>
          <span className="mb-1.5 inline-block h-1 w-8 rounded-full bg-amber-400 sm:w-10" />
          <h2 className="font-heading text-lg font-bold text-charcoal sm:text-2xl">
            Learn more about colleges and exams
          </h2>
          <p className="mt-0.5 font-body text-xs text-charcoal/55 sm:text-sm">
            Short videos to help you pick the right college
          </p>
        </div>
        <span className="hidden shrink-0 font-body text-xs font-semibold text-charcoal/40 sm:block">
          {activeIndex + 1} / {collegeVideos.length}
        </span>
      </div>

      <div className="grid gap-4 sm:gap-5 lg:grid-cols-[1fr_340px]">
        {/* Main player */}
        <div>
          <div className="group relative overflow-hidden rounded-xl bg-charcoal shadow-[0_8px_28px_rgba(0,0,0,0.12)] sm:rounded-2xl">
            <div className="relative aspect-video w-full">
              {playing && activeVideo.youtubeId ? (
                <iframe
                  key={activeVideo.id}
                  src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?autoplay=1`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              ) : (
                <button
                  onClick={() => setPlaying(true)}
                  className="absolute inset-0 h-full w-full cursor-pointer"
                  aria-label={`Play ${activeVideo.title}`}
                >
                  <Image
                    src={activeVideo.thumbnail}
                    alt={activeVideo.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 620px"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30" />

                  <span className="absolute left-2.5 top-2.5 rounded-full bg-white px-2.5 py-1 font-body text-[10px] font-bold tracking-wide text-charcoal shadow-sm sm:left-4 sm:top-4 sm:px-3 sm:py-1.5 sm:text-xs">
                    {activeVideo.channel}
                  </span>

                  <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-amber-400 shadow-lg ring-4 ring-white/30 transition-transform duration-200 group-hover:scale-110 sm:h-14 sm:w-14">
                    <svg className="ml-0.5 h-4 w-4 text-charcoal sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>

                  <span className="absolute bottom-2.5 right-2.5 rounded bg-black/70 px-1.5 py-0.5 font-body text-[9px] font-semibold text-white sm:bottom-4 sm:right-4 sm:px-2 sm:py-1 sm:text-[11px]">
                    Watch now
                  </span>
                </button>
              )}
            </div>
          </div>

          <h3 className="mt-2.5 font-heading text-sm font-bold leading-snug text-charcoal sm:mt-3 sm:text-base">
            {activeVideo.title}
          </h3>
          <div className="mt-1 flex flex-wrap items-center gap-x-1.5 font-body text-[11px] text-charcoal/55 sm:text-xs">
            <span>{activeVideo.views} views</span>
            <span className="text-charcoal/25">•</span>
            <span>{activeVideo.date}</span>
            <span className="text-charcoal/25">•</span>
            <span className="inline-flex items-center gap-1">
              <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21s-6.7-4.35-9.3-8.1C1.02 10.6 1.4 7.4 3.8 5.7c2-1.4 4.6-1 6.2.9l2 2.4 2-2.4c1.6-1.9 4.2-2.3 6.2-.9 2.4 1.7 2.78 4.9 1.1 7.2C18.7 16.65 12 21 12 21z" />
              </svg>
              {activeVideo.likes} likes
            </span>
          </div>
        </div>

        {/* Sidebar list */}
        <div className="overflow-hidden rounded-xl border border-charcoal/10 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.04)] sm:rounded-2xl">
          <div className="flex items-center gap-2 bg-charcoal px-4 py-3 sm:px-5 sm:py-3.5">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            <p className="font-heading text-[13px] font-bold text-white sm:text-sm">
              Watch next
            </p>
          </div>

          <div className="flex divide-x divide-charcoal/10 overflow-x-auto sm:flex-col sm:divide-x-0 sm:divide-y sm:overflow-x-visible">
            {collegeVideos.map((video) => {
              const isActive = video.id === activeId;
              return (
                <button
                  key={video.id}
                  onClick={() => handleSelect(video.id)}
                  className={`group relative flex w-[220px] shrink-0 gap-2.5 p-3 text-left transition-colors sm:w-auto sm:shrink sm:p-3 ${
                    isActive ? "bg-amber-50" : "hover:bg-charcoal/[0.03]"
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-x-0 top-0 h-[3px] bg-amber-400 sm:inset-y-0 sm:inset-x-auto sm:left-0 sm:h-auto sm:w-[3px]" />
                  )}

                  <div className="relative h-12 w-[76px] shrink-0 overflow-hidden rounded-md bg-charcoal/5 sm:h-14 sm:w-20 sm:rounded-lg">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-black/25 opacity-0 transition-opacity group-hover:opacity-100">
                      <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                    {isActive && (
                      <span className="absolute bottom-0.5 left-0.5 rounded bg-amber-400 px-1 py-0.5 font-body text-[7px] font-bold text-charcoal sm:text-[8px]">
                        NOW PLAYING
                      </span>
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p
                      className={`font-body text-[11px] font-bold leading-snug line-clamp-2 sm:text-[12.5px] ${
                        isActive ? "text-charcoal" : "text-charcoal/85"
                      }`}
                    >
                      {video.title}
                    </p>
                    <p className="mt-1 font-body text-[10px] text-charcoal/50">
                      {video.views} views
                      <span className="mx-1 text-charcoal/25">•</span>
                      {video.date}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
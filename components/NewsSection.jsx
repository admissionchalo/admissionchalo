"use client";

import { useRef } from "react";
import { FileText, Users, TrendingUp, AlertCircle, Landmark, ChevronLeft, ChevronRight } from "lucide-react";
import { latestNews } from "../lib/data";
import { SectionHeader } from "./ui";

const CATEGORY_ICONS = {
  Exam: FileText,
  Counselling: Users,
  Ranking: TrendingUp,
  Notification: AlertCircle,
  Policy: Landmark,
};

const ICON_COLOR = "#F9B929";

export default function NewsSection() {
  const scrollRef = useRef(null);
  const scroll = (dir) => scrollRef.current?.scrollBy({ left: dir * 350, behavior: "smooth" });

  return (
    <section className="mb-14">
      <SectionHeader title="Latest News & Notifications" subtitle="Stay Updated" link="View All News" />

      <div className="relative flex items-center gap-3 -mx-6 px-6">
        <button
          onClick={() => scroll(-1)}
          className="hidden sm:flex flex-shrink-0 w-9 h-9 rounded-full bg-white shadow-[0_6px_16px_-4px_rgba(0,0,0,0.2)] items-center justify-center hover:bg-charcoal hover:text-white transition-colors z-20"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="relative flex-1 min-w-0">
          {/* Right edge fade — masks the cut card so it reads as an intentional peek */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-graybg to-transparent" />

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth py-1"
            style={{ scrollbarWidth: "none", scrollSnapType: "x mandatory" }}
          >
            {latestNews.map((news, i) => {
              const Icon = CATEGORY_ICONS[news.category] || AlertCircle;
              const isLast = i === latestNews.length - 1;
              return (
                <article
                  key={news.id}
                  className={`group bg-white rounded-2xl p-3.5 min-w-[330px] max-w-[330px] flex-shrink-0 flex items-start gap-3 cursor-pointer shadow-[0_6px_16px_-6px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_-12px_rgba(0,0,0,0.28)] ${
                    isLast ? "mr-6" : ""
                  }`}
                  style={{ scrollSnapAlign: "start" }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${ICON_COLOR}14` }}
                  >
                    <Icon size={20} color={ICON_COLOR} strokeWidth={2} />
                  </div>
                  <div className="min-w-0 pt-0.5">
                    <p
                      className="text-[10px] font-bold uppercase tracking-wide m-0 mb-1"
                      style={{ color: ICON_COLOR }}
                    >
                      {news.category}
                    </p>
                    <h3 className="font-heading font-bold text-[13px] text-charcoal leading-snug m-0 line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="font-body text-[11px] text-charcoal/45 mt-2 m-0">{news.time}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <button
          onClick={() => scroll(1)}
          className="hidden sm:flex flex-shrink-0 w-9 h-9 rounded-full bg-white shadow-[0_6px_16px_-4px_rgba(0,0,0,0.2)] items-center justify-center hover:bg-charcoal hover:text-white transition-colors z-20"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}
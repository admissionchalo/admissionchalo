"use client";

import { useRef } from "react";
import { FileText, Users, TrendingUp, AlertCircle, Landmark, ChevronLeft, ChevronRight } from "lucide-react";
import { latestNews } from "../lib/data";
import { SectionHeader } from "./ui";

const CATEGORY_META = {
  Exam: { icon: FileText, color: "#2E2F31" },
  Counselling: { icon: Users, color: "#C99416" },
  Ranking: { icon: TrendingUp, color: "#2E2F31" },
  Notification: { icon: AlertCircle, color: "#C99416" },
  Policy: { icon: Landmark, color: "#2E2F31" },
};

export default function NewsSection() {
  const scrollRef = useRef(null);
  const scroll = (dir) => scrollRef.current?.scrollBy({ left: dir * 350, behavior: "smooth" });

  return (
    <section className="mb-14">
      <SectionHeader title="Latest News & Notifications" subtitle="Stay Updated" link="View All News" />

      <div className="flex items-center gap-3">
        <button
          onClick={() => scroll(-1)}
          className="flex-shrink-0 w-9 h-9 rounded-full bg-white shadow-[0_6px_16px_-4px_rgba(0,0,0,0.2)] flex items-center justify-center hover:bg-charcoal hover:text-white transition-colors"
        >
          <ChevronLeft size={18} />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth py-1"
          style={{ scrollbarWidth: "none", scrollSnapType: "x mandatory" }}
        >
          {latestNews.map((news) => {
            const meta = CATEGORY_META[news.category] || CATEGORY_META.Notification;
            const Icon = meta.icon;
            return (
              <article
                key={news.id}
                className="group bg-white rounded-2xl p-3.5 min-w-[330px] max-w-[330px] flex-shrink-0 flex items-start gap-3 cursor-pointer shadow-[0_6px_16px_-6px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_-12px_rgba(0,0,0,0.28)]"
                style={{ scrollSnapAlign: "start" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${meta.color}14` }}
                >
                  <Icon size={20} color={meta.color} strokeWidth={2} />
                </div>
                <div className="min-w-0 pt-0.5">
                  <p
                    className="text-[10px] font-bold uppercase tracking-wide m-0 mb-1"
                    style={{ color: meta.color }}
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

        <button
          onClick={() => scroll(1)}
          className="flex-shrink-0 w-9 h-9 rounded-full bg-white shadow-[0_6px_16px_-4px_rgba(0,0,0,0.2)] flex items-center justify-center hover:bg-charcoal hover:text-white transition-colors"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}
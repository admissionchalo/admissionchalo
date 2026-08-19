"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, Phone, GraduationCap, FileText, Megaphone } from "lucide-react";
import { announcements } from "../lib/data";

const ICONS = { GraduationCap, FileText, Megaphone };


const LOGO_SRC = "/AC-LOGO-PNG.png";

export default function TopBar() {
  const [query, setQuery] = useState("");

  return (
    <div>
      {/* Scrolling announcement ticker */}
      <div className="overflow-hidden bg-charcoal">
        <div className="flex items-center gap-8 py-1 px-4 animate-[ticker_24s_linear_infinite] whitespace-nowrap w-max">
          {[...announcements, ...announcements].map((a, i) => {
            const Icon = ICONS[a.icon] || Megaphone;
            return (
              <span key={i} className="flex items-center gap-1.5 font-body text-[11.5px] font-medium text-white/90">
                <Icon size={12} color="#F9B929" />
                {a.text}
                <span className="text-white/25 ml-8 text-[9px]">●</span>
              </span>
            );
          })}
        </div>
      </div>

      {/* ── Mobile layout: single row — logo + full-width search (Login moved to Explore bar) ── */}
      <div className="sm:hidden bg-white border-b border-charcoal/10 px-3 py-2">
        <div className="flex items-center gap-2">
          <Image
            src={LOGO_SRC}
            alt="AdmissionChalo"
            width={110}
            height={24}
            priority
            className="flex-shrink-0 h-[22px] w-auto object-contain"
          />

          <div className="flex-1 min-w-0 flex items-center gap-1.5 bg-graybg border border-charcoal/10 rounded-full px-3 py-1.5">
            <Search size={13} color="#8A8B8D" className="flex-shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search colleges, exams, courses..."
              className="flex-1 min-w-0 bg-transparent outline-none font-body text-[11.5px] text-charcoal placeholder:text-charcoal/40"
            />
          </div>
        </div>
      </div>

      {/* ── Desktop/tablet layout: original single row, unchanged ── */}
      <div className="hidden sm:block bg-white border-b border-charcoal/10">
        <div className="max-w-7xl mx-auto flex items-center gap-4 px-6 py-2.5">
          <Image
            src={LOGO_SRC}
            alt="AdmissionChalo"
            width={140}
            height={30}
            priority
            className="flex-shrink-0 h-[28px] w-auto object-contain"
          />

          <div className="flex-1 flex items-center gap-2 bg-graybg border border-charcoal/10 rounded-full px-4 py-1.5">
            <Search size={14} color="#8A8B8D" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search colleges, exams, courses..."
              className="flex-1 bg-transparent outline-none font-body text-[12.5px] text-charcoal placeholder:text-charcoal/40"
            />
          </div>

          <button className="flex-shrink-0 flex items-center gap-1.5 bg-gold text-charcoal font-heading font-bold text-[12.5px] px-5 py-1.5 rounded-full hover:bg-gold-dark transition-colors">
            <Search size={13} color="#2E2F31" /> Search
          </button>

          <button className="hidden sm:flex items-center gap-1.5 flex-shrink-0 bg-charcoal text-white font-heading font-bold text-[12px] px-4 py-1.5 rounded-full hover:bg-charcoal/90 transition-colors whitespace-nowrap">
            <Phone size={12} /> Free Counselling
          </button>

          <button className="flex-shrink-0 border border-charcoal/15 text-charcoal font-heading font-bold text-[12px] px-4 py-1.5 rounded-full hover:bg-charcoal/5 transition-colors whitespace-nowrap">
            Login
          </button>
        </div>
      </div>

      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
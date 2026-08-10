"use client";

import { useState } from "react";
import {
  Flame, Award, Zap, ChevronRight, Clock, Star,
  Laptop, BarChart3, Palette, BrainCircuit, LineChart, Scale,
  Megaphone, Calculator, Code2,
  Bot, CreditCard, ShieldCheck, Compass, Cloud,
} from "lucide-react";
import { trendingCourses, trendingCertificates, trendingSpecializations, tagColors } from "../lib/data";
import { SectionHeader } from "./ui";

const ICONS = {
  Laptop, BarChart3, Palette, BrainCircuit, LineChart, Scale,
  Megaphone, Calculator, Code2,
  Bot, CreditCard, ShieldCheck, Compass, Cloud,
};

const TABS = [
  { key: "courses", label: "Trending Courses", icon: Flame },
  { key: "certs", label: "Top Certificates", icon: Award },
  { key: "specs", label: "Specializations", icon: Zap },
];

function TrendingCoursesList() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-3.5">
      {trendingCourses.map((c, i) => {
        const Icon = ICONS[c.icon] || Laptop;
        return (
          <div
            key={i}
            className="group bg-white rounded-2xl px-4 py-4 flex items-center gap-3.5 cursor-pointer shadow-[0_6px_16px_-6px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_-12px_rgba(0,0,0,0.28)]"
          >
            <div className="w-11 h-11 rounded-xl bg-[#FFF6DF] flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
              <Icon size={20} color="#8A6200" strokeWidth={2} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="font-heading font-bold text-sm text-charcoal m-0 truncate">{c.name}</p>
                {c.hot && (
                  <span className="flex items-center gap-1 bg-[#FCE9EC] text-[#B91C4B] text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0">
                    <Flame size={10} /> HOT
                  </span>
                )}
              </div>
              <p className="font-body text-[11px] text-charcoal/50 mt-1 m-0">{c.enrolled} · {c.level}</p>
            </div>
            <ChevronRight size={18} color="#2E2F31" className="flex-shrink-0" />
          </div>
        );
      })}
    </div>
  );
}

function CertificatesList() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-3.5">
      {trendingCertificates.map((c, i) => {
        const Icon = ICONS[c.icon] || Award;
        return (
          <div
            key={i}
            className="group bg-white rounded-2xl p-4 cursor-pointer shadow-[0_6px_16px_-6px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_-12px_rgba(0,0,0,0.28)]"
          >
            <div className="flex items-center gap-2.5 mb-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${c.color}14` }}
              >
                <Icon size={19} color={c.color} strokeWidth={2} />
              </div>
              <div className="min-w-0">
                <p className="font-heading font-bold text-sm text-charcoal m-0 truncate">{c.name}</p>
                <p className="text-xs text-charcoal/50 m-0">by {c.provider}</p>
              </div>
            </div>
            <div className="flex justify-between items-center pt-3 border-t border-charcoal/8">
              <span className="flex items-center gap-1 font-body text-xs text-charcoal/50">
                <Clock size={12} /> {c.duration}
              </span>
              <span className="flex items-center gap-1 text-[13px] font-bold text-gold-dark">
                <Star size={13} fill="#F9B929" color="#F9B929" /> {c.rating}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function SpecializationsList() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-3">
      {trendingSpecializations.map((s, i) => {
        const tc = tagColors[s.tag] || { bg: "bg-slate-100", text: "text-slate-600" };
        const Icon = ICONS[s.icon] || Bot;
        return (
          <div
            key={i}
            className="group bg-white rounded-2xl px-4 py-4 cursor-pointer flex items-center gap-3 shadow-[0_6px_16px_-6px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_-12px_rgba(0,0,0,0.28)]"
          >
            <div className="w-10 h-10 rounded-xl bg-charcoal/5 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
              <Icon size={18} color="#2E2F31" strokeWidth={2} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-body font-medium text-[13px] text-charcoal m-0 truncate">{s.name}</p>
              <span className={`${tc.bg} ${tc.text} text-[10px] font-bold px-2 py-0.5 rounded-full mt-1 inline-block`}>
                {s.tag}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function TrendingSection() {
  const [activeTab, setActiveTab] = useState("courses");

  return (
    <section className="mb-14">
      <SectionHeader title="Trending in Education" subtitle="What's Popular" />

      <div className="flex gap-2 mb-6 flex-wrap">
        {TABS.map((tab) => {
          const TabIcon = tab.icon;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-1.5 px-5 py-2 rounded-full text-[13px] font-bold cursor-pointer transition-all duration-200 ${
                activeTab === tab.key
                  ? "bg-charcoal text-white border-transparent border shadow-sm"
                  : "bg-white text-charcoal border border-charcoal/12 hover:border-charcoal/30"
              }`}
            >
              <TabIcon size={14} /> {tab.label}
            </button>
          );
        })}
      </div>

      {activeTab === "courses" && <TrendingCoursesList />}
      {activeTab === "certs" && <CertificatesList />}
      {activeTab === "specs" && <SpecializationsList />}
    </section>
  );
}
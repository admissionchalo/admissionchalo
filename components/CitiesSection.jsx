"use client";

import { useState } from "react";
import { Building2, Factory, Landmark, Cpu, Anchor, Mountain, Waves, Building, TramFront, Castle } from "lucide-react";
import { SectionHeader } from "./ui";

const CITIES = [
  { name: "Greater Noida", colleges: 85, icon: Building2 },
  { name: "Ghaziabad", colleges: 70, icon: Factory },
  { name: "Delhi NCR", colleges: 420, icon: Landmark },
  { name: "Bengaluru", colleges: 310, icon: Cpu },
  { name: "Mumbai", colleges: 275, icon: Anchor },
  { name: "Pune", colleges: 240, icon: Mountain },
  { name: "Chennai", colleges: 190, icon: Waves },
  { name: "Hyderabad", colleges: 205, icon: Building },
  { name: "Kolkata", colleges: 160, icon: TramFront },
  { name: "Jaipur", colleges: 130, icon: Castle },
];

export default function CitiesSection() {
  const [activeCity, setActiveCity] = useState(null);

  return (
    <section className="mb-14">
      <SectionHeader title="Browse Colleges by City" subtitle="Popular Locations" link="View All Cities" />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
        {CITIES.map((city) => {
          const isActive = activeCity === city.name;
          return (
            <div
              key={city.name}
              onClick={() => setActiveCity(isActive ? null : city.name)}
              className={`group relative bg-white rounded-2xl px-4 py-5 cursor-pointer transition-all duration-300 border ${
                isActive
                  ? "border-gold shadow-[0_12px_28px_-10px_rgba(0,0,0,0.25)] -translate-y-0.5"
                  : "border-charcoal/10 shadow-[0_4px_12px_-6px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-10px_rgba(0,0,0,0.2)] hover:border-gold/50"
              }`}
            >
              <div className="w-11 h-11 rounded-xl bg-[#FFF6DF] flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110">
                <city.icon size={20} color="#8A6200" strokeWidth={2} />
              </div>
              <p className="font-heading font-bold text-[15px] text-charcoal m-0">{city.name}</p>
              <p className="font-body text-[11px] text-charcoal/50 mt-0.5 m-0">{city.colleges} Colleges</p>
              {isActive && (
                <span className="absolute top-3 right-3 rounded-full bg-gold px-2 py-0.5 text-[9px] font-bold tracking-wide text-charcoal shadow-sm">
                  SELECTED
                </span>
              )}
            </div>
          );
        })}
      </div>

      {activeCity && (
        <div className="mt-4 bg-charcoal/[0.03] border border-charcoal/10 rounded-2xl px-6 py-5 flex items-center justify-between">
          <div>
            <p className="font-heading font-bold text-charcoal text-[15px] m-0">
              📍 Explore colleges in {activeCity}
            </p>
            <p className="font-body text-charcoal/60 text-[13px] mt-0.5 m-0">
              Engineering, Medical, MBA and more
            </p>
          </div>
          <button className="rounded-xl bg-charcoal px-6 py-2.5 font-heading text-[13px] font-bold text-white transition hover:bg-gold hover:text-charcoal whitespace-nowrap">
            Explore {activeCity} →
          </button>
        </div>
      )}
    </section>
  );
}



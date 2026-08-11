import { TrendingUp, Landmark, Calculator, ArrowRight } from "lucide-react";
import { predictors } from "../lib/data";
import { SectionHeader } from "./ui";

const ICONS = { TrendingUp, Landmark, Calculator };

export default function PredictorsSection({ onPredictorClick }) {
  return (
    <section className="mb-14">
      <SectionHeader title="Smart Predictors" subtitle="AI-Powered Tools" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {predictors.map((p, i) => {
          const Icon = ICONS[p.icon] || TrendingUp;
          const isFeatured = i === 1;

          return (
            <div
              key={p.title}
              className={`group relative bg-white rounded-2xl border overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 ${
                isFeatured
                  ? "border-gold/40 shadow-[0_16px_36px_-16px_rgba(0,0,0,0.18)] md:-translate-y-2 hover:shadow-[0_28px_56px_-18px_rgba(0,0,0,0.3)]"
                  : "border-charcoal/10 hover:border-transparent hover:shadow-[0_22px_44px_-16px_rgba(0,0,0,0.22)]"
              }`}
            >
              {/* Top accent bar — colored per card, brightens on hover */}
              <div
                className="h-[3px] transition-opacity duration-300 opacity-80 group-hover:opacity-100"
                style={{ background: `linear-gradient(90deg, ${p.color} 0%, #F9B929 100%)` }}
              />

              {isFeatured && (
                <span className="absolute top-3 right-3 text-[9.5px] font-bold uppercase tracking-wide text-gold-dark bg-[#FFF6DF] px-2.5 py-1 rounded-full">
                  Most Used
                </span>
              )}

              <div className="p-6">
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
                    style={{ background: `${p.color}14` }}
                  >
                    <Icon size={24} color={p.color} strokeWidth={2} />
                  </div>
                  {!isFeatured && (
                    <span className="font-heading text-[11px] font-bold text-charcoal/25 mt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  )}
                </div>

                <h3 className="font-heading font-bold text-[18px] text-charcoal mb-2 m-0">{p.title}</h3>
                <p className="text-[13.5px] text-charcoal/60 leading-relaxed mb-6 m-0">{p.desc}</p>

                <button
                  onClick={() => onPredictorClick?.(p.title)}
                  className="flex items-center gap-2 w-full justify-center py-3 border-none rounded-xl text-[13.5px] font-bold cursor-pointer transition-all duration-300 text-white group-hover:gap-3"
                  style={{ background: isFeatured ? "#2E2F31" : p.color }}
                >
                  {p.cta} <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
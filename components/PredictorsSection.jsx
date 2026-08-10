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
          return (
            <div
              key={p.title}
              className="group relative bg-white rounded-2xl border border-charcoal/10 overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:border-transparent hover:shadow-[0_22px_44px_-16px_rgba(0,0,0,0.25)]"
            >
              <div className="h-1 bg-gradient-to-r from-charcoal to-gold" />

              <div className="p-6">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#FFF6DF] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Icon size={24} color="#2E2F31" strokeWidth={2} />
                  </div>
                  <span className="font-heading text-[11px] font-bold text-charcoal/25">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-[18px] text-charcoal mb-2 m-0">{p.title}</h3>
                <p className="text-[13.5px] text-charcoal/60 leading-relaxed mb-6 m-0">{p.desc}</p>

                <button
                  onClick={() => onPredictorClick?.(p.title)}
                  className="flex items-center gap-2 w-full justify-center py-3 bg-charcoal text-white border-none rounded-xl text-[13.5px] font-bold cursor-pointer transition-colors hover:bg-gold hover:text-charcoal"
                >
                  {p.cta} <ArrowRight size={15} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
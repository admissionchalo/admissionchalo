import { TrendingUp, Landmark, Calculator, ArrowRight } from "lucide-react";
import { predictors } from "../lib/data";
import { SectionHeader } from "./ui";

const ICONS = { TrendingUp, Landmark, Calculator };

export default function PredictorsSection({ onPredictorClick }) {
  return (
    <section className="mb-14">
      <SectionHeader title="Smart Predictors" subtitle="AI-Powered Tools" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {predictors.map((p) => {
          const Icon = ICONS[p.icon] || TrendingUp;
          return (
            <div
              key={p.title}
              className="group relative bg-white rounded-2xl border border-charcoal/10 p-6 cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_20px_44px_-16px_rgba(0,0,0,0.25)]"
            >
              <div
                className="absolute -right-10 -top-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle, ${p.color}18, transparent 70%)` }}
              />

              <div
                className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${p.color}12` }}
              >
                <Icon size={26} color={p.color} strokeWidth={2} />
              </div>

              <h3 className="relative font-heading font-bold text-[19px] text-charcoal mb-2 m-0">{p.title}</h3>
              <p className="relative text-[13.5px] text-charcoal/60 leading-relaxed mb-6 m-0">{p.desc}</p>

              <button
                onClick={() => onPredictorClick?.(p.title)}
                className="relative flex items-center gap-2 w-full justify-center py-3 text-white border-none rounded-xl text-[13.5px] font-bold cursor-pointer transition-opacity hover:opacity-90"
                style={{ background: p.color }}
              >
                {p.cta} <ArrowRight size={15} />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
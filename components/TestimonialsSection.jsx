import { Star } from "lucide-react";
import { testimonials } from "../lib/data";
import { SectionHeader } from "./ui";

export default function TestimonialsSection() {
  return (
    <section className="mb-14">
      <SectionHeader title="Student Success Stories" subtitle="Success Stories" />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="group bg-white rounded-2xl p-6 shadow-[0_6px_16px_-6px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_-12px_rgba(0,0,0,0.28)]"
          >
            <div className="flex items-center gap-0.5 mb-3">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} size={15} color="#F9B929" fill="#F9B929" strokeWidth={0} />
              ))}
            </div>
            <p className="text-[15px] text-charcoal leading-relaxed mb-5 m-0 italic">"{t.text}"</p>
            <div className="flex items-center gap-3 pt-4 border-t border-charcoal/8">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-sm flex-shrink-0"
                style={{ background: t.color + "18", color: t.color }}
              >
                {t.avatar}
              </div>
              <div>
                <p className="font-heading font-bold text-sm text-charcoal m-0">{t.name}</p>
                <p className="text-[11px] text-charcoal/50 m-0">{t.college}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}



import { Scale, ThumbsUp, Ruler, Stethoscope, ListChecks, Laptop } from "lucide-react";
import { ourProducts } from "../lib/data";

const ICONS = { Scale, ThumbsUp, Ruler, Stethoscope, ListChecks, Laptop };

export default function OurProductsSection({ onProductClick }) {
  return (
    <section className="mb-14">
      <h2 className="text-center font-heading font-bold text-2xl text-charcoal mb-8">Our Products</h2>
      <div className="flex flex-wrap justify-center gap-2">
        {ourProducts.map((p) => {
          const Icon = ICONS[p.icon] || Scale;
          return (
            <button
              key={p.title}
              onClick={() => onProductClick?.(p.title)}
              className="group flex flex-col items-center gap-3 w-[150px] py-6 px-3 rounded-2xl bg-transparent border-none cursor-pointer transition-all duration-300 hover:bg-white hover:shadow-[0_16px_36px_-16px_rgba(0,0,0,0.25)] hover:-translate-y-1"
            >
              <Icon size={34} color={p.color} strokeWidth={1.6} />
              <span className="font-body text-[13px] font-medium text-charcoal text-center leading-snug">
                {p.title}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}



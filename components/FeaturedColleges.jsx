import Image from "next/image";
import { featuredColleges } from "../lib/data";

export default function FeaturedColleges() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="flex overflow-hidden rounded-xl border border-charcoal/10 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.04)]">
        <div className="flex w-8 shrink-0 items-center justify-center bg-amber-50">
          <span className="rotate-180 font-heading text-[11px] font-bold tracking-wide text-amber-700/70 [writing-mode:vertical-rl]">
            Featured
          </span>
        </div>
        <div className="grid flex-1 grid-cols-1 divide-y divide-charcoal/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {featuredColleges.map((college) => (
            <div
              key={college.name}
              className="group flex flex-col justify-between transition-colors hover:bg-amber-50/30"
            >
              <div className="flex items-start gap-2 px-3 py-2">
                <div className="relative h-7 w-7 shrink-0 overflow-hidden rounded border border-amber-200 bg-amber-50">
                  <Image
                    src={college.logo}
                    alt={college.name}
                    fill
                    sizes="28px"
                    className="object-contain p-0.5"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <a
                    href="#"
                    className="font-heading text-[12.5px] font-bold leading-tight text-blue-700 hover:underline"
                  >
                    {college.name}
                  </a>
                  <div className="mt-0.5 flex items-center justify-between gap-2">
                    <p className="flex items-center gap-1 font-body text-[10.5px] text-charcoal/55">
                      <svg
                        className="h-3 w-3 shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M12 21s-7-6.5-7-11a7 7 0 0 1 14 0c0 4.5-7 11-7 11z" />
                        <circle cx="12" cy="10" r="2.5" />
                      </svg>
                      {college.location}
                    </p>
                    <a
                      href="#"
                      className="shrink-0 font-body text-[10.5px] font-bold text-charcoal underline underline-offset-2"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex min-h-[42px] items-center bg-amber-400 px-3 py-1.5">
                <p className="line-clamp-2 font-body text-[10.5px] font-bold leading-snug text-charcoal">
                  {college.highlight}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
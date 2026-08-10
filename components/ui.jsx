export function SectionHeader({ title, subtitle, link }) {
  return (
    <div className="flex items-end justify-between mb-6">
      <div>
        <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#F9B929] mb-1.5">
          {subtitle}
        </p>
        <h2 className="text-[26px] sm:text-[30px] font-semibold text-[#2E2F31] leading-tight m-0">
          {title}
        </h2>
      </div>
      {link && (
        <a
          href="#"
          className="hidden sm:flex items-center gap-1 text-[13px] font-semibold text-[#2E2F31] no-underline hover:text-[#55565A] transition-colors whitespace-nowrap"
        >
          {link} <span className="text-base leading-none">→</span>
        </a>
      )}
    </div>
  );
}

export function StarRating({ rating }) {
  const full = Math.round(rating);
  return (
    <div className="flex items-center gap-1">
      <span className="text-[#F9B929] text-sm tracking-tight">
        {"★".repeat(full)}
        <span className="text-[#E4DFD3]">{"★".repeat(5 - full)}</span>
      </span>
      <span className="font-mono text-[11px] text-[#6B7280]">{rating.toFixed(1)}</span>
    </div>
  );
}

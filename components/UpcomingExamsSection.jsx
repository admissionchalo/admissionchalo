import { useState } from "react";
import {
  Atom, HeartPulse, LineChart, Gavel, Cog, PenTool, Briefcase, Stethoscope
} from "lucide-react";
import { upcomingExams } from "../lib/data";
import { SectionHeader } from "./ui";

const EXAM_ICONS = {
  "JEE Main 2026": Atom,
  "NEET UG 2026": HeartPulse,
  "CAT 2026": LineChart,
  "CLAT 2026": Gavel,
  "BITSAT 2026": Cog,
  "NATA 2026": PenTool,
  "AIIMS UG 2026": Stethoscope,
  "XAT 2026": Briefcase,
};

const BADGE_STYLE = { bg: "bg-amber-100", text: "text-amber-700" };
const ICON_COLOR = "#D97706";

export default function UpcomingExamsSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleExams = showAll ? upcomingExams : upcomingExams.slice(0, 6);

  return (
    <section className="mb-14">
      <SectionHeader
        title="Upcoming Entrance Exams"
        subtitle="Exam Calendar"
        link={showAll ? "Show Less" : "View All Exams"}
        onLinkClick={() => setShowAll((prev) => !prev)}
      />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">
        {visibleExams.map((ex, i) => {
          const Icon = EXAM_ICONS[ex.name] || Cog;
          return (
            <div
              key={i}
              className="group bg-white rounded-2xl px-4 py-4 flex items-center gap-3.5 cursor-pointer shadow-[0_6px_16px_-6px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_-12px_rgba(0,0,0,0.28)]"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${ICON_COLOR}14` }}
              >
                <Icon size={20} color={ICON_COLOR} strokeWidth={2.2} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-heading font-bold text-[14px] text-charcoal m-0 truncate">{ex.name}</p>
                <p className="font-body text-[11px] text-charcoal/50 mt-0.5 m-0">{ex.date}</p>
              </div>
              <span className={`${BADGE_STYLE.bg} ${BADGE_STYLE.text} text-[10.5px] px-2.5 py-1 rounded-full font-bold whitespace-nowrap`}>
                {ex.stream}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
import { Cog, Stethoscope, Briefcase, Scale, FileText } from "lucide-react";
import { upcomingExams, streamBadgeColors } from "../lib/data";
import { SectionHeader } from "./ui";

const STREAM_ICONS = {
  Engineering: Cog,
  Medical: Stethoscope,
  Management: Briefcase,
  Law: Scale,
};

export default function UpcomingExamsSection() {
  return (
    <section className="mb-14">
      <SectionHeader title="Upcoming Entrance Exams" subtitle="Exam Calendar" link="View All Exams" />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">
        {upcomingExams.map((ex, i) => {
          const sc = streamBadgeColors[ex.stream] || { bg: "bg-slate-100", text: "text-slate-600" };
          const Icon = STREAM_ICONS[ex.stream] || FileText;
          return (
            <div
              key={i}
              className="group bg-white rounded-2xl px-4 py-4 flex items-center gap-3.5 cursor-pointer shadow-[0_6px_16px_-6px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_-12px_rgba(0,0,0,0.28)]"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${ex.color}14` }}
              >
                <Icon size={20} color={ex.color} strokeWidth={2.2} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-heading font-bold text-[14px] text-charcoal m-0 truncate">{ex.name}</p>
                <p className="font-body text-[11px] text-charcoal/50 mt-0.5 m-0">{ex.date}</p>
              </div>
              <span className={`${sc.bg} ${sc.text} text-[10.5px] px-2.5 py-1 rounded-full font-bold whitespace-nowrap`}>
                {ex.stream}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
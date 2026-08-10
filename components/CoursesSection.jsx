import { courses } from "../lib/data";
import { SectionHeader } from "./ui";

export default function CoursesSection() {
  return (
    <section className="mb-14">
      <SectionHeader title="Browse by Stream" subtitle="Popular Courses" link="View All Courses" />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
        {courses.map((c, i) => {
          const Icon = c.icon;
          return (
            <div
              key={i}
              className="group bg-white rounded-2xl px-4 py-4 cursor-pointer flex items-center gap-3.5 shadow-[0_6px_16px_-6px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_-12px_rgba(0,0,0,0.28)]"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${c.color}14` }}
              >
                <Icon size={22} color={c.color} strokeWidth={2.2} />
              </div>
              <div>
                <p className="font-heading font-extrabold text-[15px] text-charcoal m-0">{c.name}</p>
                <p className="font-body text-[11px] text-charcoal/50 mt-0.5 m-0">{c.count}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}



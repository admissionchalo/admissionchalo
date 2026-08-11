"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  Home, GraduationCap, Building2, BookOpen, Plane, Users, Newspaper, FileText, ChevronDown,
  Menu, X,
} from "lucide-react";

const ENGINEERING_COLLEGES = [
  { name: "GL Bajaj (GLBITM)", desc: "Greater Noida | NAAC A+", path: "/college/gl-bajaj" },
  { name: "Bennett University", desc: "Greater Noida | Times Group", path: "/college/bennett-university" },
  { name: "Galgotias University", desc: "Greater Noida | NAAC A+", path: "/college/galgotias-university" },
  { name: "Sharda University", desc: "Greater Noida | NAAC A+", path: "/college/sharda-university" },
  { name: "Amity University", desc: "Noida | NAAC A+", path: "/college/amity-university-noida" },
  { name: "IIMT University", desc: "Meerut | NAAC A", path: "/college/iimt-university" },
];

const MANAGEMENT_COLLEGES = [
  { name: "Bennett University", desc: "Greater Noida | Cornell Partnership", path: "/college/bennett-university" },
  { name: "Amity University", desc: "Noida | NAAC A+", path: "/college/amity-university-noida" },
  { name: "Galgotias University", desc: "Greater Noida | NAAC A+", path: "/college/galgotias-university" },
  { name: "Sharda University", desc: "Greater Noida | NAAC A+", path: "/college/sharda-university" },
  { name: "GD Goenka University", desc: "Gurgaon | NAAC A", path: "/college/gd-goenka-university" },
];

const MEDICAL_COLLEGES = [
  { name: "Sharda University", desc: "Greater Noida | 1000-bed Hospital", path: "/college/sharda-university" },
  { name: "IIMT University", desc: "Meerut | 300-bed Hospital", path: "/college/iimt-university" },
  { name: "MVN University", desc: "Palwal | 500-bed Hospital", path: "/college/mvn-university" },
];

const LAW_COLLEGES = [
  { name: "Bennett University", desc: "Greater Noida | Top Law School", path: "/college/bennett-university" },
  { name: "Galgotias University", desc: "Greater Noida | NIRF #36 Law", path: "/college/galgotias-university" },
  { name: "Amity University", desc: "Noida | Top Law School", path: "/college/amity-university-noida" },
];

const DESIGN_COLLEGES = [
  { name: "Bennett University", desc: "Greater Noida | B.Des Programs", path: "/college/bennett-university" },
  { name: "GD Goenka University", desc: "Gurgaon | Design School", path: "/college/gd-goenka-university" },
];

const PHARMACY_COLLEGES = [
  { name: "Galgotias University", desc: "Greater Noida | NIRF #55 Pharmacy", path: "/college/galgotias-university" },
  { name: "Sharda University", desc: "Greater Noida | NAAC A+", path: "/college/sharda-university" },
];

const COLLEGE_CATEGORIES = [
  { label: "Engineering", colleges: ENGINEERING_COLLEGES },
  { label: "Management", colleges: MANAGEMENT_COLLEGES },
  { label: "Medical", colleges: MEDICAL_COLLEGES },
  { label: "Law", colleges: LAW_COLLEGES },
  { label: "Design", colleges: DESIGN_COLLEGES },
  { label: "Pharmacy", colleges: PHARMACY_COLLEGES },
];

const POPULAR_COURSES = [
  ["B.Tech", "B.Arch", "B.Tech Mechanical Engineering", "B.Sc Radiotherapy"],
  ["MBA", "Auto CAD", "B.Des", "B.Ed"],
  ["MBA Media Management", "MBA International Business", "B.Sc Statistics"],
  ["Bachelor of Mass Communication", "BCA", "B.Pharma", "BDS"],
];

const EXAM_STREAMS = ["Engineering", "Management", "Medical", "Law", "Design", "Pharmacy"];

const EXAMS = [
  { name: "JEE Mains", links: ["Eligibility", "Syllabus", "Exam Pattern", "How to Prepare"] },
  { name: "JEE Advance", links: ["Eligibility", "Syllabus", "Exam Pattern", "How to Prepare"] },
  { name: "BITSAT", links: ["Eligibility", "Syllabus", "Exam Pattern", "How to Prepare"] },
  { name: "NEET UG", links: ["Eligibility", "Syllabus", "Exam Pattern", "How to Prepare"] },
  { name: "CAT", links: ["Eligibility", "Syllabus", "Exam Pattern", "How to Prepare"] },
  { name: "CLAT", links: ["Eligibility", "Syllabus", "Exam Pattern", "How to Prepare"] },
];

const CATEGORY_ITEMS = [
  { key: "Home", label: "Home", icon: Home, dropdown: false, route: "/" },
  { key: "College", label: "College", icon: GraduationCap, dropdown: true, route: "/colleges" },
  { key: "University", label: "University", icon: Building2, dropdown: true, route: "/universities" },
  { key: "All Courses", label: "All Courses", icon: BookOpen, dropdown: true, route: "/courses" },
  { key: "Study Abroad", label: "Study Abroad", icon: Plane, dropdown: false, route: "/study-abroad" },
  { key: "Counselling", label: "Counselling", icon: Users, dropdown: false, route: "/counselling" },
  { key: "Latest Updates", label: "Latest Updates", icon: Newspaper, dropdown: false, route: "/news" },
  { key: "Exams", label: "Exams", icon: FileText, dropdown: true, route: "/exams" },
];

export default function Navbar() {
  const router = useRouter();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeCategory, setActiveCategory] = useState("Engineering");
  const [activeExamStream, setActiveExamStream] = useState("Engineering");
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMobileGroup, setOpenMobileGroup] = useState(null);
  const leaveTimer = useRef(null);

  const handleNavEnter = (item) => {
    clearTimeout(leaveTimer.current);
    setActiveDropdown(item.dropdown ? item.key : null);
  };
  const handleNavLeave = () => { leaveTimer.current = setTimeout(() => setActiveDropdown(null), 150); };
  const handleMenuEnter = () => clearTimeout(leaveTimer.current);
  const handleMenuLeave = () => { leaveTimer.current = setTimeout(() => setActiveDropdown(null), 150); };
  const closeAll = () => { setActiveDropdown(null); setMenuOpen(false); setOpenMobileGroup(null); };
  const handleNavClick = (item) => {
    if (!item.dropdown) {
      router.push(item.route);
      closeAll();
    }
  };

  const activeCategoryData = COLLEGE_CATEGORIES.find((c) => c.label === activeCategory);

  return (
    <>
      {/* ── Mobile trigger bar — hamburger + brand + Login, only shown below md ── */}
      <div className="md:hidden flex items-center justify-between px-4 h-11 bg-gradient-to-b from-[#FBCE3E] to-[#F3B916] shadow-[0_2px_6px_rgba(0,0,0,0.06)]">
        <span className="font-heading font-extrabold text-charcoal text-[14px]">Explore</span>
        <div className="flex items-center gap-2">
          <button className="border border-charcoal/25 text-charcoal font-heading font-bold text-[11px] px-3.5 py-1.5 rounded-full active:bg-charcoal/10">
            Login
          </button>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex items-center justify-center w-8 h-8 rounded-full text-charcoal active:bg-charcoal/10"
          >
            {menuOpen ? <X size={20} strokeWidth={2.5} /> : <Menu size={20} strokeWidth={2.5} />}
          </button>
        </div>
      </div>

      {/* ── Desktop category bar ── */}
      <div
        className="hidden md:block relative bg-gradient-to-b from-[#FBCE3E] to-[#F3B916] shadow-[0_1px_0_rgba(255,255,255,0.4)_inset,0_2px_6px_rgba(0,0,0,0.06)]"
        onMouseLeave={handleNavLeave}
        onMouseEnter={handleMenuEnter}
      >
        <div className="max-w-[1280px] mx-auto px-6 flex items-center h-[34px]">
          {CATEGORY_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            const isActive = activeDropdown === item.key;
            return (
              <div key={item.key} className="flex items-center h-full">
                {idx !== 0 && <span className="w-px h-3.5 bg-charcoal/10 mx-1" />}
                <div
                  onMouseEnter={() => handleNavEnter(item)}
                  onClick={() => handleNavClick(item)}
                  className="relative flex items-center gap-[6px] px-3 h-full cursor-pointer group"
                >
                  <Icon
                    size={13}
                    strokeWidth={2.25}
                    className={`transition-colors ${isActive ? "text-charcoal" : "text-charcoal/55 group-hover:text-charcoal/80"}`}
                  />
                  <span
                    className={`whitespace-nowrap text-[12px] font-bold tracking-[0.01em] transition-colors ${
                      isActive ? "text-charcoal" : "text-charcoal/80 group-hover:text-charcoal"
                    }`}
                  >
                    {item.label}
                  </span>
                  {item.dropdown && (
                    <ChevronDown
                      size={11}
                      strokeWidth={2.5}
                      className={`transition-transform duration-200 text-charcoal/45 ${isActive ? "rotate-180 text-charcoal" : ""}`}
                    />
                  )}
                  <span
                    className={`absolute left-4 right-4 -bottom-px h-[2.5px] rounded-full bg-charcoal transition-all duration-200 ${
                      isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 group-hover:opacity-40 group-hover:scale-x-100"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mega menu (desktop only) */}
      {activeDropdown && (
        <div
          className="hidden md:block absolute left-0 right-0 bg-white border-b border-[#2E2F31]/8 shadow-[0_20px_48px_rgba(22,26,50,0.12)] z-40"
          onMouseEnter={handleMenuEnter}
          onMouseLeave={handleMenuLeave}
        >
          {(activeDropdown === "College" || activeDropdown === "University") && (
            <div className="flex max-w-[1280px] mx-auto" style={{ maxHeight: 460 }}>
              <div className="w-52 flex-shrink-0 bg-[#FAFAF9] border-r border-[#2E2F31]/8 py-3">
                {COLLEGE_CATEGORIES.map((cat) => (
                  <div
                    key={cat.label}
                    onMouseEnter={() => setActiveCategory(cat.label)}
                    className={`px-4 py-2.5 text-[13px] font-medium cursor-pointer flex justify-between items-center border-l-[3px] transition-all ${
                      activeCategory === cat.label
                        ? "bg-white text-[#2E2F31] border-[#2E2F31] font-semibold"
                        : "text-[#6B7280] border-transparent hover:bg-white hover:text-[#2E2F31]"
                    }`}
                  >
                    {cat.label}
                    {activeCategory === cat.label && <span className="text-[#F9B929] text-xs">›</span>}
                  </div>
                ))}
              </div>
              <div className="flex-1 px-8 py-6 overflow-y-auto">
                <p className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest mb-3">
                  Top {activeCategory} {activeDropdown === "University" ? "Universities" : "Colleges"}
                </p>
                <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                  {activeCategoryData?.colleges
                    .filter((i) =>
                      activeDropdown === "University"
                        ? i.name.includes("University")
                        : !i.name.includes("University")
                    )
                    .map((item, i) => (
                      <div
                        key={i}
                        onClick={() => { router.push(item.path); closeAll(); }}
                        className="px-3 py-2.5 rounded-lg transition-all duration-150 hover:bg-[#FFF6DF] cursor-pointer"
                      >
                        <p className="font-semibold text-sm text-[#2E2F31] m-0">{item.name}</p>
                        <p className="text-[11px] text-[#9CA3AF] m-0">{item.desc}</p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}

          {activeDropdown === "All Courses" && (
            <div className="max-w-[1280px] mx-auto px-8 py-6">
              <p className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest mb-3">Popular Courses</p>
              <div className="grid grid-cols-4 gap-6">
                {POPULAR_COURSES.map((col, i) => (
                  <div key={i}>
                    {col.map((c, j) => (
                      <div
                        key={j}
                        onClick={() => { router.push(`/courses?q=${encodeURIComponent(c)}`); closeAll(); }}
                        className="text-[13px] text-[#374151] py-1.5 cursor-pointer hover:text-[#2E2F31] transition-colors"
                      >
                        {c}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeDropdown === "Exams" && (
            <div className="flex max-w-[1280px] mx-auto" style={{ maxHeight: 480 }}>
              <div className="w-52 flex-shrink-0 bg-[#FAFAF9] border-r border-[#2E2F31]/8 py-3">
                {EXAM_STREAMS.map((s) => (
                  <div
                    key={s}
                    onMouseEnter={() => setActiveExamStream(s)}
                    className={`px-4 py-2.5 text-[13px] font-medium cursor-pointer flex justify-between items-center border-l-[3px] transition-all ${
                      activeExamStream === s
                        ? "bg-white text-[#2E2F31] border-[#2E2F31] font-semibold"
                        : "text-[#6B7280] border-transparent hover:bg-white hover:text-[#2E2F31]"
                    }`}
                  >
                    {s}
                  </div>
                ))}
              </div>
              <div className="flex-1 px-8 py-6 overflow-y-auto">
                <div className="grid grid-cols-3 gap-4">
                  {EXAMS.map((exam, i) => (
                    <div key={i} className="bg-[#FAFAF9] border border-[#2E2F31]/8 rounded-xl p-4 hover:border-[#2E2F31]/30 hover:bg-[#FFF6DF] transition-all">
                      <p className="text-[13px] font-bold text-[#2E2F31] mb-3 flex items-center gap-2 m-0">
                        <span className="w-2 h-2 rounded-full bg-[#F9B929] flex-shrink-0" />
                        {exam.name}
                      </p>
                      {exam.links.map((link, j) => (
                        <div
                          key={j}
                          onClick={() => { router.push(`/exams/${exam.name.toLowerCase().replace(/\s+/g, "-")}`); closeAll(); }}
                          className="text-[12px] text-[#6B7280] py-1 cursor-pointer hover:text-[#2E2F31] transition-colors"
                        >
                          {link}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ── Mobile menu — accordion style, replaces old flat list ── */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#2E2F31]/8 shadow-lg" style={{ maxHeight: "75vh", overflowY: "auto" }}>
          {CATEGORY_ITEMS.map((item) => {
            const Icon = item.icon;
            const isOpen = openMobileGroup === item.key;
            return (
              <div key={item.key} className="border-b border-[#2E2F31]/6">
                <div
                  onClick={() => {
                    if (item.dropdown) {
                      setOpenMobileGroup(isOpen ? null : item.key);
                    } else {
                      router.push(item.route);
                      closeAll();
                    }
                  }}
                  className="flex items-center justify-between gap-3 px-5 py-3.5 text-[14px] font-bold text-[#374151] cursor-pointer active:bg-[#FAFAF9]"
                >
                  <span className="flex items-center gap-3">
                    <Icon size={17} className="text-[#9CA3AF]" />
                    {item.label}
                  </span>
                  {item.dropdown && (
                    <ChevronDown
                      size={15}
                      className={`text-[#9CA3AF] transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  )}
                </div>

                {isOpen && item.key !== "Exams" && (
                  <div className="bg-[#FAFAF9] px-5 py-2">
                    {item.key === "All Courses"
                      ? POPULAR_COURSES.flat().map((c, i) => (
                          <div
                            key={i}
                            onClick={() => { router.push(`/courses?q=${encodeURIComponent(c)}`); closeAll(); }}
                            className="text-[13px] text-[#374151] py-2 border-b border-[#2E2F31]/5 active:text-[#2E2F31]"
                          >
                            {c}
                          </div>
                        ))
                      : COLLEGE_CATEGORIES.flatMap((cat) => cat.colleges)
                          .filter((c, i, arr) => arr.findIndex((x) => x.path === c.path) === i)
                          .filter((c) => (item.key === "University" ? c.name.includes("University") : !c.name.includes("University")))
                          .map((c, i) => (
                            <div
                              key={i}
                              onClick={() => { router.push(c.path); closeAll(); }}
                              className="py-2 border-b border-[#2E2F31]/5"
                            >
                              <p className="text-[13px] font-semibold text-[#2E2F31] m-0">{c.name}</p>
                              <p className="text-[11px] text-[#9CA3AF] m-0">{c.desc}</p>
                            </div>
                          ))}
                  </div>
                )}

                {isOpen && item.key === "Exams" && (
                  <div className="bg-[#FAFAF9] px-5 py-2">
                    {EXAMS.map((exam, i) => (
                      <div
                        key={i}
                        onClick={() => { router.push(`/exams/${exam.name.toLowerCase().replace(/\s+/g, "-")}`); closeAll(); }}
                        className="text-[13px] font-semibold text-[#374151] py-2 border-b border-[#2E2F31]/5"
                      >
                        {exam.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

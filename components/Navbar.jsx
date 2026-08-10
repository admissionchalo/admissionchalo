"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

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

const NAV_LINKS = ["Colleges", "Courses", "Exams", "Study Abroad", "News", "Rankings"];
const NAV_ROUTES = {
  Colleges: "/colleges",
  Courses: "/courses",
  Exams: "/exams",
  "Study Abroad": "/study-abroad",
  News: "/news",
  Rankings: "/rankings",
};

export default function Navbar({ navLinks }) {
  const router = useRouter();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeCategory, setActiveCategory] = useState("Engineering");
  const [activeExamStream, setActiveExamStream] = useState("Engineering");
  const [menuOpen, setMenuOpen] = useState(false);
  const leaveTimer = useRef(null);

  const handleNavEnter = (link) => {
    clearTimeout(leaveTimer.current);
    if (["Colleges", "Courses", "Exams"].includes(link)) setActiveDropdown(link);
    else setActiveDropdown(null);
  };
  const handleNavLeave = () => { leaveTimer.current = setTimeout(() => setActiveDropdown(null), 150); };
  const handleMenuEnter = () => clearTimeout(leaveTimer.current);
  const handleMenuLeave = () => { leaveTimer.current = setTimeout(() => setActiveDropdown(null), 150); };
  const closeAll = () => { setActiveDropdown(null); setMenuOpen(false); };
  const handleNavClick = (link) => { router.push(NAV_ROUTES[link]); closeAll(); };

  const links = navLinks || NAV_LINKS;
  const activeCategoryData = COLLEGE_CATEGORIES.find((c) => c.label === activeCategory);

  return (
    <>
      <nav className="bg-white/95 backdrop-blur border-b border-[#2E2F31]/8 sticky top-0 z-50">
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between h-16">
          <div
            className="flex items-center gap-2.5 cursor-pointer flex-shrink-0"
            onClick={() => { router.push("/"); closeAll(); }}
          >
            <div className="bg-gradient-to-br from-[#2E2F31] to-[#55565A] rounded-xl w-9 h-9 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-base">A</span>
            </div>
            <span className="font-semibold text-[17px] text-[#2E2F31]">
              Admission<span className="text-gold-dark">Chalo</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-1" onMouseLeave={handleMenuLeave} onMouseEnter={handleMenuEnter}>
            {links.map((link) => (
              <div
                key={link}
                onMouseEnter={() => handleNavEnter(link)}
                onClick={() => (["Colleges", "Courses", "Exams"].includes(link) ? null : handleNavClick(link))}
                className={`px-4 py-2 text-[14px] font-medium cursor-pointer rounded-lg transition-colors ${
                  activeDropdown === link ? "text-[#2E2F31] bg-[#FFF6DF]" : "text-[#374151] hover:text-[#2E2F31]"
                }`}
              >
                {link}
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => router.push("/login")}
              className="px-4 py-2 border border-[#2E2F31]/15 text-[#2E2F31] rounded-lg font-semibold text-[13px] bg-transparent cursor-pointer hover:bg-[#FAFAF9] transition-colors"
            >
              Login
            </button>
            <button
              onClick={() => router.push("/register")}
              className="px-4 py-2 bg-gradient-to-r from-[#2E2F31] to-[#55565A] text-white rounded-lg font-semibold text-[13px] border-none cursor-pointer hover:opacity-90 transition-opacity shadow-sm"
            >
              Register Free
            </button>
          </div>

          <button className="md:hidden text-2xl text-[#2E2F31]" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mega menu */}
      {activeDropdown && (
        <div
          className="hidden md:block absolute left-0 right-0 bg-white border-b border-[#2E2F31]/8 shadow-[0_20px_48px_rgba(22,26,50,0.12)] z-40"
          onMouseEnter={handleMenuEnter}
          onMouseLeave={handleMenuLeave}
        >
          {activeDropdown === "Colleges" && (
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
                  Top {activeCategory} Colleges
                </p>
                <div className="grid grid-cols-2 gap-1">
                  {activeCategoryData?.colleges.map((item, i) => (
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

          {activeDropdown === "Courses" && (
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

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#2E2F31]/8 shadow-lg" style={{ maxHeight: "80vh", overflowY: "auto" }}>
          {links.map((link) => (
            <div
              key={link}
              onClick={() => handleNavClick(link)}
              className="px-5 py-3.5 text-[14px] font-medium text-[#374151] border-b border-[#2E2F31]/6 cursor-pointer hover:bg-[#FAFAF9]"
            >
              {link}
            </div>
          ))}
          <div className="flex gap-2 px-5 py-4">
            <button onClick={() => { router.push("/login"); closeAll(); }} className="flex-1 py-2.5 border border-[#2E2F31] text-[#2E2F31] rounded-lg font-semibold text-[13px] bg-transparent cursor-pointer">
              Login
            </button>
            <button onClick={() => { router.push("/register"); closeAll(); }} className="flex-1 py-2.5 bg-[#2E2F31] text-white rounded-lg font-semibold text-[13px] border-none cursor-pointer">
              Register Free
            </button>
          </div>
        </div>
      )}
    </>
  );
}

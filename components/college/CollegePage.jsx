"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { HelpCircle, Download, ArrowUpDown, MapPin, Star, Clock, X, ChevronDown, Newspaper, Eye, ArrowRight } from "lucide-react";
import colleges from "../../lib/colleges";
import TopBar from "../../components/TopBar";
import Navbar from "../../components/Navbar";
import OverviewSection   from "./sections/OverviewSection";
import CoursesSection    from "./sections/CoursesSection";
import FeesSection       from "./sections/FeesSection";
import CutoffSection     from "./sections/CutoffSection";
import AdmissionsSection from "./sections/AdmissionsSection";
import PlacementsSection from "./sections/PlacementsSection";
import ReviewsSection    from "./sections/ReviewsSection";
import FacilitiesSection from "./sections/FacilitiesSection";
import ClubsSection      from "./sections/ClubsSection";

const TABS = ["Overview", "Courses", "Fees", "Cut-offs", "Admissions", "Placements", "Reviews", "Facilities", "Student Clubs"];

const TAB_TO_SLUG = {
  "Overview": "overview", "Courses": "courses", "Fees": "fees",
  "Cut-offs": "cutoffs", "Admissions": "admissions", "Placements": "placements",
  "Reviews": "reviews", "Facilities": "facilities", "Student Clubs": "student-clubs",
};
const SLUG_TO_TAB = Object.fromEntries(Object.entries(TAB_TO_SLUG).map(([k, v]) => [v, k]));

const TAB_TITLES = {
  "Overview":      (n) => `${n}: Admission 2026, Cutoff, Courses, Fees, Placements, Ranking`,
  "Courses":       (n) => `${n} Courses & Fees Structure 2026`,
  "Fees":          (n) => `${n} Fees 2026`,
  "Cut-offs":      (n) => `${n} Cut Off 2026`,
  "Admissions":    (n) => `${n} Admissions 2026`,
  "Placements":    (n) => `${n} Placements 2025`,
  "Reviews":       (n) => `${n} Reviews & Ratings`,
  "Facilities":    (n) => `${n} Facilities & Infrastructure`,
  "Student Clubs": (n) => `${n} Student Clubs & Activities`,
};

const SIDEBAR_COLLEGES = [
  { name: "Galgotias University", desc: "Top-ranked private university in UP. Highest CTC: 1.5 CR", color: "#d90429" },
  { name: "Sharda University", desc: "Globally recognized. NAAC A+ Accredited. Avg CTC 6.5 LPA", color: "#2563eb" },
  { name: "NIET Noida", desc: "Top engineering college. Highest CTC: 58 LPA", color: "#7c3aed" },
];

const COMPARE_SECTIONS = ["Basic Info", "Fees", "Placements", "Cutoffs", "Courses"];
const G = "#6b7280";
const ALL_COLLEGES = Object.entries(colleges).map(([id, d]) => ({ id, ...d }));

// ── Compare Modal ──
function CompareModal({ currentCollege, onClose }) {
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");
  const [activeSection, setActiveSection] = useState("Basic Info");

  const P = currentCollege.colors?.primary || "#004aad";

  const otherColleges = ALL_COLLEGES.filter(c => c.id !== currentCollege.id);
  const filtered = otherColleges.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    (c.location || "").toLowerCase().includes(search.toLowerCase())
  );
  const colleges2 = selected ? [currentCollege, selected] : [currentCollege];

  const getRows = () => {
    if (activeSection === "Basic Info") return [
      { label: "Location",     get: c => c.location || "—" },
      { label: "Type",         get: c => c.type || "—" },
      { label: "Established",  get: c => c.established || "—" },
      { label: "Affiliation",  get: c => c.affiliation || "—" },
      { label: "NAAC",         get: c => c.naac || "—" },
      { label: "NIRF Ranking", get: c => c.nirf || "—" },
      { label: "Campus Size",  get: c => c.campusSize || "—" },
      { label: "Rating",       get: c => c.rating ? `${c.rating}/5 ⭐` : "—" },
    ];
    if (activeSection === "Fees") return [
      { label: "B.Tech Fees",  get: c => c.fees?.find(f => f.prog === "B.Tech")?.total || "—" },
      { label: "MBA Fees",     get: c => c.fees?.find(f => f.prog === "MBA")?.total || "—" },
      { label: "MCA Fees",     get: c => c.fees?.find(f => f.prog === "MCA")?.total || "—" },
      { label: "M.Tech Fees",  get: c => c.fees?.find(f => f.prog === "M.Tech")?.total || "—" },
      { label: "Hostel",       get: c => c.fees?.[0]?.hostel || "—" },
    ];
    if (activeSection === "Placements") return [
      { label: "Highest Package", get: c => c.placements?.highest || "—" },
      { label: "Average Package", get: c => c.placements?.average || "—" },
      { label: "Placement %",     get: c => c.placements?.percentage || "—" },
      { label: "Companies",       get: c => c.placements?.companies || "—" },
      { label: "Total Offers",    get: c => c.placements?.totalOffers || "—" },
      { label: "Top Recruiters",  get: c => c.placements?.topRecruiters?.slice(0, 3).join(", ") || "—" },
    ];
    if (activeSection === "Cutoffs") return [
      ...([...new Set(colleges2.flatMap(c => (c.cutoffs || []).map(x => x.course)))]).map(course => ({
        label: course,
        get: c => (c.cutoffs || []).find(x => x.course === course)?.gen || "—"
      }))
    ];
    if (activeSection === "Courses") return [
      { label: "Total Courses", get: c => c.courses?.length ? `${c.courses.length} courses` : "—" },
      ...([...new Set(colleges2.flatMap(c => (c.courses || []).map(x => x.name)))]).slice(0, 6).map(name => ({
        label: name,
        get: c => (c.courses || []).find(x => x.name === name) ? `${(c.courses || []).find(x => x.name === name)?.fees} | ${(c.courses || []).find(x => x.name === name)?.duration}` : "—"
      }))
    ];
    return [];
  };

  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 3000, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
      <div onClick={e => e.stopPropagation()} style={{ background: "#fff", borderRadius: 16, width: "100%", maxWidth: 860, maxHeight: "90vh", overflow: "hidden", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "16px 20px", borderBottom: "1px solid #e5e7eb", display: "flex", justifyContent: "space-between", alignItems: "center", background: "#f8fafc" }}>
          <div style={{ fontWeight: 800, fontSize: 16, color: "#111827" }}>Compare Colleges</div>
          <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", color: G, display: "flex" }}><X size={20} /></button>
        </div>
        <div style={{ overflowY: "auto", flex: 1 }}>
          <div style={{ padding: "16px 20px", borderBottom: "1px solid #f3f4f6" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div style={{ background: "#eff6ff", border: `2px solid ${P}`, borderRadius: 10, padding: 12 }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: P, textTransform: "uppercase", marginBottom: 6 }}>Current College</div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: P, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ color: "#fff", fontSize: 10, fontWeight: 800 }}>{currentCollege.code}</span>
                  </div>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: "#111827" }}>{currentCollege.shortName}</div>
                    <div style={{ fontSize: 11, color: G, display: "flex", alignItems: "center", gap: 3 }}><MapPin size={11} /> {currentCollege.location}</div>
                  </div>
                </div>
              </div>
              <div style={{ border: "2px dashed #e5e7eb", borderRadius: 10, padding: 12, background: selected ? "#f0fdf4" : "#fafafa" }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: G, textTransform: "uppercase", marginBottom: 6 }}>Compare With</div>
                {selected ? (
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 32, height: 32, borderRadius: "50%", background: selected.colors?.primary || "#1a73e8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ color: "#fff", fontSize: 10, fontWeight: 800 }}>{selected.code}</span>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 12, fontWeight: 700, color: "#111827" }}>{selected.shortName}</div>
                      <div style={{ fontSize: 11, color: G, display: "flex", alignItems: "center", gap: 3 }}><MapPin size={11} /> {selected.location}</div>
                    </div>
                    <span onClick={() => setSelected(null)} style={{ cursor: "pointer", color: G, display: "flex" }}><X size={16} /></span>
                  </div>
                ) : <div style={{ fontSize: 12, color: G, display: "flex", alignItems: "center", gap: 4 }}><ChevronDown size={14} /> Select below</div>}
              </div>
            </div>
            {!selected && (
              <div style={{ marginTop: 12 }}>
                <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search college..."
                  style={{ width: "100%", boxSizing: "border-box", padding: "9px 14px", borderRadius: 8, border: "1px solid #e5e7eb", fontSize: 13, outline: "none", marginBottom: 10 }} />
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 8, maxHeight: 200, overflowY: "auto" }}>
                  {filtered.map(c => (
                    <div key={c.id} onClick={() => setSelected(c)}
                      style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 10px", borderRadius: 8, border: "1px solid #e5e7eb", cursor: "pointer", background: "#fff" }}
                      onMouseEnter={e => e.currentTarget.style.borderColor = "#1a73e8"}
                      onMouseLeave={e => e.currentTarget.style.borderColor = "#e5e7eb"}>
                      <div style={{ width: 28, height: 28, borderRadius: "50%", background: c.colors?.primary || "#1a73e8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ color: "#fff", fontSize: 9, fontWeight: 800 }}>{c.code}</span>
                      </div>
                      <div>
                        <div style={{ fontSize: 12, fontWeight: 600, color: "#111827" }}>{c.shortName}</div>
                        <div style={{ fontSize: 11, color: G, display: "flex", alignItems: "center", gap: 3 }}><MapPin size={11} /> {c.location}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          {selected && (
            <div style={{ padding: "16px 20px" }}>
              <div style={{ display: "flex", gap: 6, marginBottom: 14, overflowX: "auto" }}>
                {COMPARE_SECTIONS.map(s => (
                  <button key={s} onClick={() => setActiveSection(s)}
                    style={{ padding: "6px 14px", borderRadius: 20, fontSize: 12, fontWeight: 600, border: "none", cursor: "pointer", whiteSpace: "nowrap", background: activeSection === s ? P : "#f3f4f6", color: activeSection === s ? "#fff" : G }}>
                    {s}
                  </button>
                ))}
              </div>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ background: "#f8fafc" }}>
                      <th style={{ padding: "10px 14px", textAlign: "left", fontSize: 12, color: G, borderBottom: "1px solid #e5e7eb", width: 140 }}></th>
                      {colleges2.map(c => (
                        <th key={c.id} style={{ padding: "10px 14px", textAlign: "center", borderBottom: "1px solid #e5e7eb" }}>
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                            <div style={{ width: 26, height: 26, borderRadius: "50%", background: c.colors?.primary || "#1a73e8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              <span style={{ color: "#fff", fontSize: 9, fontWeight: 800 }}>{c.code}</span>
                            </div>
                            <span style={{ fontSize: 12, fontWeight: 700, color: "#111827" }}>{c.shortName}</span>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {getRows().map((row, i) => (
                      <tr key={i} style={{ background: i % 2 === 0 ? "#f9fafb" : "#fff" }}>
                        <td style={{ padding: "9px 14px", fontSize: 12, fontWeight: 600, color: "#374151", borderRight: "1px solid #f3f4f6" }}>{row.label}</td>
                        {colleges2.map(c => (
                          <td key={c.id} style={{ padding: "9px 14px", fontSize: 12, color: "#111827", textAlign: "center", borderRight: "1px solid #f3f4f6" }}>{row.get(c)}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function CollegePage({ data }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [showModal, setShowModal] = useState(false);
  const [showCompare, setShowCompare] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [newsTab, setNewsTab] = useState("latest");
  const [openNewsIdx, setOpenNewsIdx] = useState(-1);

  // Only the TopBar stays fixed at the very top
  const topBarRef = useRef(null);
  const [topBarHeight, setTopBarHeight] = useState(0);

  const slugFromUrl = searchParams.get("tab") || "overview";
  const activeTab = SLUG_TO_TAB[slugFromUrl] || "Overview";

  const handleTabChange = (tab) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", TAB_TO_SLUG[tab]);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const P = data.colors?.primary || "#004aad";
  const O = data.colors?.accent || "#f37021";

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    const measure = () => {
      if (topBarRef.current) {
        setTopBarHeight(topBarRef.current.offsetHeight);
      }
    };

    const onScroll = () => setScrolled(window.scrollY > 5);
    const onResize = () => {
      setIsMobile(window.innerWidth < 768);
      measure();
    };

    measure();
    const t = setTimeout(measure, 150);

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      clearTimeout(t);
    };
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case "Overview":      return <OverviewSection   data={data} />;
      case "Courses":       return <CoursesSection    data={data} />;
      case "Fees":          return <FeesSection        data={data} />;
      case "Cut-offs":      return <CutoffSection      data={data} />;
      case "Admissions":    return <AdmissionsSection  data={data} />;
      case "Placements":    return <PlacementsSection  data={data} />;
      case "Reviews":       return <ReviewsSection     data={data} />;
      case "Facilities":    return <FacilitiesSection  data={data} />;
      case "Student Clubs": return <ClubsSection       data={data} />;
      default: return (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 40, textAlign: "center", color: G }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>🏗️</div>
          <div style={{ fontWeight: 700, color: "#111827", fontSize: 16 }}>{activeTab} — Coming Soon</div>
        </div>
      );
    }
  };

  const heroDesktop = data.heroImage?.desktop;
  const heroMobile = data.heroImage?.mobile || data.heroImage?.desktop;

  return (
    <div style={{ background: "#f3f4f6", minHeight: "100vh", fontFamily: "Arial, Helvetica, sans-serif", color: "#111827" }}>

      <style>{`
        .college-hero-bg { position: absolute; inset: 0; background-size: cover; background-position: center; z-index: 0; }
        .college-hero-bg--mobile { display: block; }
        .college-hero-bg--desktop { display: none; }
        @media (min-width: 768px) {
          .college-hero-bg--mobile { display: none; }
          .college-hero-bg--desktop { display: block; }
        }
      `}</style>

      {/* ── FIXED: only the TopBar ── */}
      <div ref={topBarRef} style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1001, background: "#fff", boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.1)" : "0 1px 4px rgba(0,0,0,0.06)" }}>
        <TopBar />
      </div>

      {/* Spacer so page content starts below the fixed TopBar */}
      <div style={{ height: topBarHeight }} />

      {/* ── Navbar — normal flow, scrolls away with the page ── */}
      <Navbar />

      {/* ── HERO CARD — scrolls normally with the page ── */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        {heroDesktop && <div className="college-hero-bg college-hero-bg--desktop" style={{ backgroundImage: `url(${heroDesktop})` }} />}
        {heroMobile && <div className="college-hero-bg college-hero-bg--mobile" style={{ backgroundImage: `url(${heroMobile})` }} />}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,10,15,0.72) 0%, rgba(10,10,15,0.82) 100%)", zIndex: 1 }} />

        <div style={{ position: "relative", zIndex: 2, padding: isMobile ? "10px 14px 12px" : "12px 24px 14px" }}>

          {(data.nirf || data.naac) && (
            <div style={{ display: "flex", gap: 8, marginBottom: 6, flexWrap: "wrap" }}>
              {data.nirf && (
                <span style={{ fontSize: 11, fontWeight: 700, color: "#16a34a", background: "#dcfce7", padding: "2px 10px", borderRadius: 4, border: "1px solid #86efac" }}>
                  NIRF {data.nirf}
                </span>
              )}
              {data.naac && (
                <span style={{ fontSize: 11, fontWeight: 700, color: "#16a34a", background: "#dcfce7", padding: "2px 10px", borderRadius: 4, border: "1px solid #86efac" }}>
                  NAAC GRADING {data.naac}
                </span>
              )}
            </div>
          )}

          <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>

            <div style={{
              width: isMobile ? 42 : 52,
              height: isMobile ? 42 : 52,
              borderRadius: 12,
              background: "#fff",
              padding: 5,
              boxShadow: "0 6px 20px rgba(0,0,0,0.28), 0 0 0 1px rgba(255,255,255,0.6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              overflow: "hidden",
            }}>
              {data.logo ? (
                <img src={data.logo} alt={data.shortName} style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: 8 }} />
              ) : (
                <div style={{ width: "100%", height: "100%", borderRadius: 8, background: `linear-gradient(135deg, ${P}, ${O})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ color: "#fff", fontSize: isMobile ? 13 : 16, fontWeight: 900 }}>{data.code}</span>
                </div>
              )}
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <h1 style={{ fontSize: isMobile ? 14 : 17, fontWeight: 800, color: "#fff", margin: "0 0 5px", lineHeight: 1.25, textShadow: "0 1px 6px rgba(0,0,0,0.4)" }}>
                {TAB_TITLES[activeTab]?.(data.name) || data.name}
              </h1>

              <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap", marginBottom: 6 }}>
                <span style={{ fontSize: 12, color: "#e5e7eb", display: "flex", alignItems: "center", gap: 4 }}>
                  <MapPin size={13} /> {data.location}
                </span>
                <span style={{ fontSize: 12, color: "#e5e7eb", display: "flex", alignItems: "center", gap: 4 }}>
                  <span style={{ color: "#E8A317", display: "flex", gap: 1 }}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={12} fill={i < Math.round(data.rating || 0) ? "#E8A317" : "none"} strokeWidth={1.5} />
                    ))}
                  </span>
                  <strong style={{ color: "#fff" }}>{data.rating}</strong>/5 ({data.totalReviews}+ Reviews)
                </span>
              </div>

              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {data.type && (
                  <span style={{ fontSize: 11, color: "#fff", background: "rgba(255,255,255,0.14)", backdropFilter: "blur(4px)", padding: "3px 10px", borderRadius: 4, border: "1px solid rgba(255,255,255,0.25)" }}>
                    Ownership: {data.type}
                  </span>
                )}
                {data.affiliation && (
                  <span style={{ fontSize: 11, color: "#fff", background: "rgba(255,255,255,0.14)", backdropFilter: "blur(4px)", padding: "3px 10px", borderRadius: 4, border: "1px solid rgba(255,255,255,0.25)" }}>
                    {data.affiliation?.split(" ").slice(0, 4).join(" ")}
                  </span>
                )}
                {data.approval && (
                  <span style={{ fontSize: 11, color: "#fff", background: "rgba(255,255,255,0.14)", backdropFilter: "blur(4px)", padding: "3px 10px", borderRadius: 4, border: "1px solid rgba(255,255,255,0.25)" }}>
                    {data.approval}
                  </span>
                )}
              </div>
            </div>

            {!isMobile && (
              <div style={{ display: "flex", flexDirection: "column", gap: 6, flexShrink: 0 }}>
                <button onClick={() => setShowModal(true)}
                  style={{ background: O, color: "#fff", border: "none", borderRadius: 6, padding: "5px 16px", fontWeight: 700, fontSize: 12, cursor: "pointer", display: "flex", alignItems: "center", gap: 6, minWidth: 110, justifyContent: "center", boxShadow: "0 4px 12px rgba(0,0,0,0.25)" }}>
                  <HelpCircle size={14} /> Enquire
                </button>
                <button style={{ background: "rgba(255,255,255,0.95)", color: O, border: "1.5px solid transparent", borderRadius: 6, padding: "5px 16px", fontWeight: 600, fontSize: 12, cursor: "pointer", minWidth: 110, display: "flex", alignItems: "center", gap: 6, justifyContent: "center" }}>
                  <Download size={14} /> Brochure
                </button>
                <button onClick={() => setShowCompare(true)}
                  style={{ background: "rgba(255,255,255,0.12)", color: "#fff", border: "1.5px solid rgba(255,255,255,0.35)", borderRadius: 6, padding: "5px 16px", fontWeight: 600, fontSize: 12, cursor: "pointer", minWidth: 110, display: "flex", alignItems: "center", gap: 6, justifyContent: "center", backdropFilter: "blur(4px)" }}>
                  <ArrowUpDown size={14} /> Compare
                </button>
              </div>
            )}
          </div>

          {isMobile && (
            <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
              <button onClick={() => setShowModal(true)}
                style={{ flex: 1, background: O, color: "#fff", border: "none", borderRadius: 6, padding: "7px", fontWeight: 700, fontSize: 12, cursor: "pointer", display: "flex", alignItems: "center", gap: 5, justifyContent: "center", boxShadow: "0 4px 12px rgba(0,0,0,0.25)" }}>
                <HelpCircle size={13} /> Enquire
              </button>
              <button style={{ flex: 1, background: "rgba(255,255,255,0.95)", color: O, border: "1.5px solid transparent", borderRadius: 6, padding: "6px", fontWeight: 600, fontSize: 12, cursor: "pointer", display: "flex", alignItems: "center", gap: 5, justifyContent: "center" }}>
                <Download size={13} /> Brochure
              </button>
              <button onClick={() => setShowCompare(true)}
                style={{ flex: 1, background: "rgba(255,255,255,0.12)", color: "#fff", border: "1.5px solid rgba(255,255,255,0.35)", borderRadius: 6, padding: "6px", fontWeight: 600, fontSize: 12, cursor: "pointer", display: "flex", alignItems: "center", gap: 5, justifyContent: "center", backdropFilter: "blur(4px)" }}>
                <ArrowUpDown size={13} /> Compare
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ── TABS — sticks right below the fixed TopBar once scrolled ── */}
      <div style={{ position: "sticky", top: topBarHeight, zIndex: 999, display: "flex", alignItems: "center", overflowX: "auto", background: "linear-gradient(to bottom, #FBCE3E, #F3B916)", boxShadow: scrolled ? "inset 0 1px 0 rgba(255,255,255,0.4), 0 2px 8px rgba(0,0,0,0.15)" : "inset 0 1px 0 rgba(255,255,255,0.4), 0 2px 6px rgba(0,0,0,0.06)", padding: "0 12px", scrollbarWidth: "none" }}>
        {TABS.map(t => {
          const isActive = t === activeTab;
          return (
            <button key={t} onClick={() => handleTabChange(t)} style={{
              position: "relative",
              background: "none",
              border: "none",
              padding: isMobile ? "8px 9px" : "9px 15px",
              fontSize: isMobile ? 12 : 13,
              cursor: "pointer", whiteSpace: "nowrap",
              fontWeight: isActive ? 800 : 600,
              letterSpacing: isActive ? "0.01em" : "normal",
              color: isActive ? "#0A0A0A" : "rgba(10,10,10,0.65)",
              flexShrink: 0,
            }}>
              {t}
              <span style={{
                position: "absolute",
                left: 6, right: 6, bottom: -1,
                height: 3,
                borderRadius: 2,
                background: isActive ? "#0A0A0A" : "transparent",
              }} />
            </button>
          );
        })}
      </div>



      {/* ── BODY ── */}
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: isMobile ? "12px 12px 50px" : "18px 20px 50px", display: "flex", gap: 20, alignItems: "flex-start" }}>

        <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 12, color: G, display: "flex", alignItems: "center", gap: 5 }}>
            <Clock size={13} /> Updated on <strong>Apr 13 2026, 09:30 AM IST</strong>
          </div>
          {renderContent()}
        </div>

        {!isMobile && (
          <div style={{ width: 292, flexShrink: 0, display: "flex", flexDirection: "column", gap: 16, position: "sticky", top: topBarHeight + 50, marginTop: 20 }}>

            {data.news?.length > 0 && (
              <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 16, boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <div style={{ width: 34, height: 34, borderRadius: 8, background: `${P}14`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Newspaper size={17} color={P} />
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: G }}>{data.shortName}</div>
                    <div style={{ fontSize: 14, fontWeight: 800, color: "#111827" }}>News & Updates</div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 6, marginBottom: 12 }}>
                  {["latest", "popular"].map((t) => (
                    <button
                      key={t}
                      onClick={() => setNewsTab(t)}
                      style={{
                        padding: "5px 14px", borderRadius: 16, border: "none", cursor: "pointer",
                        fontSize: 11.5, fontWeight: 700, textTransform: "capitalize",
                        background: newsTab === t ? P : "#f3f4f6",
                        color: newsTab === t ? "#fff" : G,
                      }}
                    >
                      {t}
                    </button>
                  ))}
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                  {[...data.news]
                    .sort((a, b) => {
                      if (newsTab !== "popular") return 0;
                      const va = parseFloat(a.views) || 0;
                      const vb = parseFloat(b.views) || 0;
                      return vb - va;
                    })
                    .slice(0, 4)
                    .map((n, i) => {
                      const item = typeof n === "string" ? { title: n } : n;
                      const open = openNewsIdx === i;
                      return (
                        <div key={i} style={{ borderTop: i === 0 ? "none" : "1px solid #f3f4f6" }}>
                          <button
                            onClick={() => setOpenNewsIdx(open ? -1 : i)}
                            style={{ width: "100%", display: "flex", gap: 10, alignItems: "flex-start", padding: "10px 0", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                          >
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <p style={{ margin: "0 0 4px", fontSize: 12.5, fontWeight: 700, color: "#111827", lineHeight: 1.4 }}>
                                {item.title}
                              </p>
                              <div style={{ display: "flex", alignItems: "center", gap: 5, flexWrap: "wrap" }}>
                                {item.author && <span style={{ fontSize: 10.5, fontWeight: 600, color: "#374151" }}>{item.author}</span>}
                                {item.author && item.date && <span style={{ color: "#d1d5db", fontSize: 10 }}>·</span>}
                                {item.date && <span style={{ fontSize: 10.5, color: G }}>{item.date}</span>}
                              </div>
                              {item.views && (
                                <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 2 }}>
                                  <Eye size={10} color={G} />
                                  <span style={{ fontSize: 10, color: G }}>{item.views} views</span>
                                </div>
                              )}
                            </div>
                            {item.image && (
                              <img src={item.image} alt={item.title} style={{ width: 52, height: 52, borderRadius: 7, objectFit: "cover", flexShrink: 0, border: "1px solid #e5e7eb" }} />
                            )}
                          </button>
                          {open && item.detail && (
                            <div style={{ paddingBottom: 10 }}>
                              <p style={{ margin: 0, fontSize: 11.5, color: "#4b5563", lineHeight: 1.55 }}>{item.detail}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                </div>

                <button
                  onClick={() => handleTabChange("Overview")}
                  style={{
                    width: "100%", marginTop: 10, padding: "8px", borderRadius: 20,
                    border: `1.5px solid ${P}`, background: "#fff", color: P,
                    fontSize: 12, fontWeight: 700, cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 5,
                  }}
                >
                  View all News & Updates <ArrowRight size={13} />
                </button>
              </div>
            )}

            <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 16, boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: "#111827", marginBottom: 14, textAlign: "center" }}>Admissions Open (Nearby Colleges)</div>
              {SIDEBAR_COLLEGES.map((c, i) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "10px 0", borderBottom: i < 2 ? "1px solid #f3f4f6" : "none" }}>
                  <div style={{ width: 34, height: 34, borderRadius: "50%", background: c.color, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ color: "#fff", fontSize: 12, fontWeight: 800 }}>{c.name[0]}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 12, color: "#111827" }}>{c.name}</div>
                    <div style={{ fontSize: 11, color: G, marginTop: 2, lineHeight: 1.4 }}>{c.desc}</div>
                  </div>
                  <button style={{ background: O, color: "#fff", border: "none", borderRadius: 5, padding: "5px 9px", fontSize: 11, fontWeight: 700, cursor: "pointer", flexShrink: 0 }}>Apply</button>
                </div>
              ))}
            </div>

            <div style={{ background: "linear-gradient(135deg,#1a1a2e,#0f3460)", color: "#fff", borderRadius: 10, padding: 16 }}>
              <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 4 }}>Interested in {data.shortName}?</div>
              <div style={{ fontSize: 11, color: "#94a3b8", marginBottom: 14 }}>Get updates on Eligibility, Admission & Fees</div>
              {["Your Name", "Mobile Number", "Email Address"].map(pl => (
                <input key={pl} placeholder={pl} style={{ display: "block", width: "100%", boxSizing: "border-box", marginBottom: 8, padding: "8px 10px", borderRadius: 6, border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.08)", color: "#fff", fontSize: 12 }} />
              ))}
              <button onClick={() => setShowModal(true)} style={{ width: "100%", background: O, color: "#fff", border: "none", borderRadius: 7, padding: 9, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>Enquire Now</button>
            </div>
          </div>
        )}
      </div>

      <div style={{ background: "#1a1a2e", color: "#94a3b8", textAlign: "center", padding: 14, fontSize: 12 }}>
        © 2026 {data.shortName} College Profile · Data source: Official Website & NIRF 2025
      </div>

      {showModal && (
        <div onClick={() => setShowModal(false)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.55)", zIndex: 2000, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
          <div onClick={e => e.stopPropagation()} style={{ background: "#fff", borderRadius: 14, padding: 28, width: 380, maxWidth: "100%" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <h3 style={{ margin: "0 0 6px", fontSize: 17, fontWeight: 800 }}>Enquire About {data.shortName}</h3>
              <button onClick={() => setShowModal(false)} style={{ background: "none", border: "none", cursor: "pointer", color: G, display: "flex", padding: 0 }}><X size={18} /></button>
            </div>
            <p style={{ fontSize: 12, color: G, margin: "0 0 18px" }}>Get admission details, brochure & expert guidance — free</p>
            {["Full Name", "Mobile Number", "Email Address", "Preferred Course"].map(pl => (
              <input key={pl} placeholder={pl} style={{ display: "block", width: "100%", boxSizing: "border-box", marginBottom: 10, padding: "10px 12px", borderRadius: 8, border: "1px solid #d1d5db", fontSize: 13 }} />
            ))}
            <button style={{ width: "100%", background: O, color: "#fff", border: "none", borderRadius: 8, padding: 11, fontWeight: 700, fontSize: 14, cursor: "pointer" }}>Submit Enquiry</button>
          </div>
        </div>
      )}

      {showCompare && (
        <CompareModal currentCollege={data} onClose={() => setShowCompare(false)} />
      )}
    </div>
  );
}
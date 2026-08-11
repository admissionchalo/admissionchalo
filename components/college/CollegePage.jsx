"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { HelpCircle, Download, ArrowUpDown, MapPin, Star, Clock, X, ChevronDown } from "lucide-react";
import colleges from "../../lib/colleges";
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
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(220);

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

    const measureHeader = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    const onScroll = () => setScrolled(window.scrollY > 5);
    const onResize = () => {
      setIsMobile(window.innerWidth < 768);
      measureHeader();
    };

    measureHeader();
    // Re-measure shortly after mount in case fonts/badges shift layout
    const t = setTimeout(measureHeader, 150);

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

  return (
    <div style={{ background: "#f3f4f6", minHeight: "100vh", fontFamily: "'Segoe UI',-apple-system,sans-serif", color: "#111827" }}>

      {/* ── STICKY HEADER ── */}
      <div ref={headerRef} style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, background: "#fff", boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.1)" : "0 1px 4px rgba(0,0,0,0.06)" }}>

        <div style={{ padding: isMobile ? "10px 14px" : "12px 24px", borderBottom: "1px solid #e5e7eb" }}>

          {(data.nirf || data.naac) && (
            <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
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

          <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>

            <div style={{ width: isMobile ? 48 : 64, height: isMobile ? 48 : 64, borderRadius: 8, border: "1px solid #e5e7eb", background: "#f8fafc", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, overflow: "hidden" }}>
              {data.logo ? (
                <img src={data.logo} alt={data.shortName} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
              ) : (
                <div style={{ width: "100%", height: "100%", background: P, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ color: "#fff", fontSize: isMobile ? 14 : 18, fontWeight: 900 }}>{data.code}</span>
                </div>
              )}
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <h1 style={{ fontSize: isMobile ? 14 : 18, fontWeight: 800, color: "#111827", margin: "0 0 6px", lineHeight: 1.3 }}>
                {TAB_TITLES[activeTab]?.(data.name) || data.name}
              </h1>

              <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap", marginBottom: 8 }}>
                <span style={{ fontSize: 12, color: "#0A0A0A", display: "flex", alignItems: "center", gap: 4 }}>
                  <MapPin size={13} /> {data.location}
                </span>
                <span style={{ fontSize: 12, color: "#374151", display: "flex", alignItems: "center", gap: 4 }}>
                  <span style={{ color: "#E8A317", display: "flex", gap: 1 }}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={12} fill={i < Math.round(data.rating || 0) ? "#E8A317" : "none"} strokeWidth={1.5} />
                    ))}
                  </span>
                  <strong>{data.rating}</strong>/5 ({data.totalReviews}+ Reviews)
                </span>
              </div>

              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {data.type && (
                  <span style={{ fontSize: 11, color: "#374151", background: "#f3f4f6", padding: "3px 10px", borderRadius: 4, border: "1px solid #e5e7eb" }}>
                    Ownership: {data.type}
                  </span>
                )}
                {data.affiliation && (
                  <span style={{ fontSize: 11, color: "#374151", background: "#f3f4f6", padding: "3px 10px", borderRadius: 4, border: "1px solid #e5e7eb" }}>
                    {data.affiliation?.split(" ").slice(0, 4).join(" ")}
                  </span>
                )}
                {data.approval && (
                  <span style={{ fontSize: 11, color: "#374151", background: "#f3f4f6", padding: "3px 10px", borderRadius: 4, border: "1px solid #e5e7eb" }}>
                    {data.approval}
                  </span>
                )}
              </div>
            </div>

            {!isMobile && (
              <div style={{ display: "flex", flexDirection: "column", gap: 8, flexShrink: 0 }}>
                <button onClick={() => setShowModal(true)}
                  style={{ background: O, color: "#fff", border: "none", borderRadius: 6, padding: "9px 20px", fontWeight: 700, fontSize: 13, cursor: "pointer", display: "flex", alignItems: "center", gap: 6, minWidth: 120, justifyContent: "center" }}>
                  <HelpCircle size={15} /> Enquire
                </button>
                <button style={{ background: "#fff", color: O, border: `1.5px solid ${O}`, borderRadius: 6, padding: "8px 20px", fontWeight: 600, fontSize: 13, cursor: "pointer", minWidth: 120, display: "flex", alignItems: "center", gap: 6, justifyContent: "center" }}>
                  <Download size={15} /> Brochure
                </button>
                <button onClick={() => setShowCompare(true)}
                  style={{ background: "#fff", color: "#374151", border: "1.5px solid #e5e7eb", borderRadius: 6, padding: "8px 20px", fontWeight: 600, fontSize: 13, cursor: "pointer", minWidth: 120, display: "flex", alignItems: "center", gap: 6, justifyContent: "center" }}>
                  <ArrowUpDown size={15} /> Compare
                </button>
              </div>
            )}
          </div>

          {isMobile && (
            <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
              <button onClick={() => setShowModal(true)}
                style={{ flex: 1, background: O, color: "#fff", border: "none", borderRadius: 6, padding: "8px", fontWeight: 700, fontSize: 12, cursor: "pointer", display: "flex", alignItems: "center", gap: 5, justifyContent: "center" }}>
                <HelpCircle size={13} /> Enquire
              </button>
              <button style={{ flex: 1, background: "#fff", color: O, border: `1.5px solid ${O}`, borderRadius: 6, padding: "7px", fontWeight: 600, fontSize: 12, cursor: "pointer", display: "flex", alignItems: "center", gap: 5, justifyContent: "center" }}>
                <Download size={13} /> Brochure
              </button>
              <button onClick={() => setShowCompare(true)}
                style={{ flex: 1, background: "#fff", color: "#374151", border: "1.5px solid #e5e7eb", borderRadius: 6, padding: "7px", fontWeight: 600, fontSize: 12, cursor: "pointer", display: "flex", alignItems: "center", gap: 5, justifyContent: "center" }}>
                <ArrowUpDown size={13} /> Compare
              </button>
            </div>
          )}
        </div>

        <div style={{ display: "flex", overflowX: "auto", background: "#fff", borderBottom: "2px solid #e5e7eb", padding: "0 12px", scrollbarWidth: "none" }}>
          {TABS.map(t => (
            <button key={t} onClick={() => handleTabChange(t)} style={{
              background: "none", border: "none",
              padding: isMobile ? "10px 10px" : "11px 16px",
              fontSize: isMobile ? 12 : 13, cursor: "pointer", whiteSpace: "nowrap",
              fontWeight: t === activeTab ? 700 : 400,
              color: t === activeTab ? P : G,
              borderBottom: t === activeTab ? `2.5px solid ${P}` : "2.5px solid transparent",
              marginBottom: -2, flexShrink: 0,
            }}>{t}</button>
          ))}
        </div>
      </div>

      <div style={{ height: headerHeight }} />

      <div style={{ maxWidth: 1120, margin: "0 auto", padding: isMobile ? "12px 12px 50px" : "18px 20px 50px", display: "flex", gap: 20, alignItems: "flex-start" }}>

        <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 12, color: G, display: "flex", alignItems: "center", gap: 5 }}>
            <Clock size={13} /> Updated on <strong>Apr 13 2026, 09:30 AM IST</strong>
          </div>
          {renderContent()}
        </div>

        {!isMobile && (
          <div style={{ width: 292, flexShrink: 0, display: "flex", flexDirection: "column", gap: 16, position: "sticky", top: 240 }}>
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

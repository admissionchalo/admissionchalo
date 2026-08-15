"use client";

import { useState } from "react";
import {
  Calendar, MapPin, Building2, ShieldCheck, Award, GraduationCap,
  Sparkles, Trophy, HelpCircle, ChevronDown, ChevronUp,
  FileText, Rocket, Globe2, Cpu, Users, TrendingUp, Star,
} from "lucide-react";

const G = "#6b7280";

const STORY_ICONS = {
  rocket: Rocket,
  globe: Globe2,
  award: Award,
  cpu: Cpu,
  users: Users,
  trending: TrendingUp,
  star: Star,
};

export default function OverviewSection({ data }) {
  const P = data.colors?.primary || "#004aad";
  const O = data.colors?.accent || "#f37021";

  const [openFaq, setOpenFaq] = useState(0);
  const [aboutExpanded, setAboutExpanded] = useState(false);


  const quickFacts = [
    { icon: Calendar, label: "Established", value: data.established || "—" },
    { icon: MapPin, label: "Location", value: data.location || "—" },
    { icon: Building2, label: "Campus Size", value: data.campusSize || "—" },
    { icon: ShieldCheck, label: "Ownership", value: data.type || "—" },
    { icon: Award, label: "NAAC Grade", value: data.naac || "—" },
    { icon: GraduationCap, label: "NIRF Rank", value: data.nirf || "—" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>

      {/* 2 — About with highlight bullets (Shiksha-style) */}
      {data.about && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
          <h2 style={{ fontSize: 17, fontWeight: 700, color: P, margin: "0 0 12px" }}>
            About {data.shortName}
          </h2>
          <p style={{ fontSize: 13, color: "#374151", lineHeight: 1.75, margin: "0 0 14px" }}>{data.about}</p>

          {data.aboutHighlights?.length > 0 && (
            <>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {(aboutExpanded ? data.aboutHighlights : data.aboutHighlights.slice(0, 4)).map((h, i) => (
                  <li key={i} style={{ display: "flex", gap: 9, fontSize: 13, color: "#374151", lineHeight: 1.65 }}>
                    <span style={{ color: O, fontSize: 15, lineHeight: 1, marginTop: 3, flexShrink: 0 }}>•</span>
                    <span>
                      <strong style={{ color: "#111827" }}>{h.label}:</strong> {h.text}
                    </span>
                  </li>
                ))}
              </ul>

              {data.aboutHighlights.length > 4 && (
                <button
                  onClick={() => setAboutExpanded(!aboutExpanded)}
                  style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 12, background: "none", border: "none", cursor: "pointer", padding: 0, fontSize: 12.5, fontWeight: 700, color: P }}
                >
                  {aboutExpanded ? "Read less" : "Read more"}
                  {aboutExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>
              )}
            </>
          )}

          {data.brochureUrl && (
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 16, paddingTop: 14, borderTop: "1px solid #f3f4f6" }}>
              <span style={{ fontSize: 12.5, fontWeight: 700, color: "#111827" }}>Download:</span>
              <a
                href={data.brochureUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12.5, fontWeight: 600, color: P, textDecoration: "none" }}
              >
                <FileText size={14} color="#dc2626" /> {data.shortName} Brochure 2026
              </a>
            </div>
          )}
        </div>
      )}


      {/* 5 — Highlights table */}
      {data.highlights?.length > 0 && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
          <h2 style={{ fontSize: 17, fontWeight: 700, color: P, margin: "0 0 14px" }}>
            {data.shortName} Highlights 2026
          </h2>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tbody>
              {data.highlights.map(([label, value], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "#f9fafb" : "#fff" }}>
                  <td style={{ padding: "9px 14px", fontSize: 13, fontWeight: 600, color: "#374151", borderBottom: "1px solid #f3f4f6", width: "45%" }}>{label}</td>
                  <td style={{ padding: "9px 14px", fontSize: 13, color: "#111827", borderBottom: "1px solid #f3f4f6" }}>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* 6 — Rankings */}
      {data.rankings?.length > 0 && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
          <h2 style={{ fontSize: 17, fontWeight: 700, color: P, margin: "0 0 14px", display: "flex", alignItems: "center", gap: 8 }}>
            <Trophy size={17} color={P} /> {data.shortName} Rankings 2025
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
            {data.rankings.map((r, i) => (
              <div key={i} style={{ background: `${P}0D`, borderRadius: 10, padding: "16px", textAlign: "center", border: `1px solid ${P}33` }}>
                <div style={{ fontSize: 24, fontWeight: 900, color: P }}>{r.rank}</div>
                <div style={{ fontSize: 12, color: G, marginTop: 4 }}>{r.cat}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 7b — Success Stories (compact) */}
      {data.stories?.length > 0 && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 16 }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: P, margin: "0 0 10px", display: "flex", alignItems: "center", gap: 7 }}>
            <Sparkles size={16} color={P} /> Success Stories
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {data.stories.map((s, i) => {
              const StoryIcon = STORY_ICONS[s.icon] || Star;
              return (
                <div key={i} style={{ display: "flex", gap: 12, alignItems: "center", padding: "10px 12px", background: "#f9fafb", borderRadius: 8, border: "1px solid #f3f4f6" }}>
                  <div style={{
                    width: 34, height: 34, borderRadius: 9, flexShrink: 0,
                    background: `linear-gradient(135deg, ${O}, ${O}CC)`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: `0 3px 8px ${O}40`,
                  }}>
                    <StoryIcon size={16} color="#fff" strokeWidth={2} />
                  </div>
                  <p style={{ margin: 0, fontSize: 12.5, color: "#374151", lineHeight: 1.45 }}>{s.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Quick Facts — premium card grid */}
      <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
        <p style={{ fontFamily: "inherit", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: O, margin: "0 0 6px" }}>
          At a Glance
        </p>
        <h2 style={{ fontSize: 19, fontWeight: 700, color: P, margin: "0 0 16px" }}>
          {data.shortName} Quick Facts
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(128px, 1fr))", gap: 10 }}>
          {quickFacts.map((f, i) => (
            <div
              key={i}
              style={{
                position: "relative", overflow: "hidden",
                background: "#fff", border: "1px solid #eef0f2", borderRadius: 10,
                padding: "12px 12px", boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.04)";
              }}
            >
              <div
                style={{
                  position: "absolute", top: -14, right: -14, width: 52, height: 52,
                  borderRadius: "50%", background: `linear-gradient(135deg, ${O}22, ${O}00)`,
                }}
              />
              <div style={{
                position: "relative", width: 30, height: 30, borderRadius: 8,
                background: `linear-gradient(135deg, ${O}, ${O}CC)`,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 8, boxShadow: `0 3px 8px ${O}40`,
              }}>
                <f.icon size={15} color="#fff" strokeWidth={2} />
              </div>
              <div style={{ position: "relative", fontSize: 10, color: G, fontWeight: 600, marginBottom: 2 }}>{f.label}</div>
              <div style={{ position: "relative", fontSize: 13, fontWeight: 800, color: "#111827", lineHeight: 1.25 }}>{f.value}</div>
            </div>
          ))}
        </div>
      </div>


      {/* 8 — FAQs (accordion) */}
      {data.faqs?.length > 0 && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
          <h2 style={{ fontSize: 17, fontWeight: 700, color: P, margin: "0 0 14px", display: "flex", alignItems: "center", gap: 8 }}>
            <HelpCircle size={17} color={P} /> Frequently Asked Questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {data.faqs.map((faq, i) => {
              const open = openFaq === i;
              return (
                <div key={i} style={{ border: "1px solid #e5e7eb", borderRadius: 8, overflow: "hidden" }}>
                  <button
                    onClick={() => setOpenFaq(open ? -1 : i)}
                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, padding: "12px 14px", background: open ? "#f9fafb" : "#fff", border: "none", cursor: "pointer", textAlign: "left" }}
                  >
                    <span style={{ fontSize: 13, fontWeight: 700, color: "#111827" }}>{faq.q}</span>
                    <ChevronDown size={16} color={G} style={{ flexShrink: 0, transition: "transform 0.2s", transform: open ? "rotate(180deg)" : "rotate(0deg)" }} />
                  </button>
                  {open && (
                    <div style={{ padding: "0 14px 14px" }}>
                      <p style={{ margin: 0, fontSize: 13, color: "#374151", lineHeight: 1.65 }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
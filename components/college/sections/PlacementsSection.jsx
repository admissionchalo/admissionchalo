"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown, Trophy, TrendingUp, BarChart3, CheckCircle2, Building2, ClipboardList, Lightbulb, Briefcase, GraduationCap as GradCap } from "lucide-react";

const G = "#6b7280";

const STAT_ICONS = {
  "Highest Package": Trophy,
  "Average Package": TrendingUp,
  "Median Package": BarChart3,
  "Placement %": CheckCircle2,
  "Companies": Building2,
  "Total Offers": ClipboardList,
};

const INSIGHT_ICONS = [Briefcase, TrendingUp, GradCap];

export default function PlacementsSection({ data = {} }) {
  const P = data.colors?.primary || "#004aad";
  const pl = data.placements;
  const [openFaq, setOpenFaq] = useState(-1);
  const [openCourse, setOpenCourse] = useState(-1);

  if (!pl) return (
    <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 40, textAlign: "center", color: G }}>
      <BarChart3 size={40} color={G} style={{ marginBottom: 12 }} />
      <div style={{ fontWeight: 700, color: "#111827" }}>Placement data coming soon</div>
    </div>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>

      {/* Header */}
      <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
        <h2 style={{ fontSize: 16, fontWeight: 800, color: "#111827", margin: "0 0 4px" }}>
          {data.shortName} Placements 2025
        </h2>
        <p style={{ fontSize: 13, color: G, margin: 0 }}>
          Placement statistics, top recruiters and package details for {data.shortName}.
        </p>
      </div>

      {/* Placements intro */}
      {data.placementsIntro && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
          <p style={{ fontSize: 13.5, color: "#374151", lineHeight: 1.75, margin: 0 }}>
            {data.placementsIntro}
          </p>
        </div>
      )}

      {/* Stats Grid — SVG icons */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12 }}>
        {[
          { label: "Highest Package", value: pl.highest, bg: "#dcfce7", textColor: "#16a34a" },
          { label: "Average Package", value: pl.average, bg: "#dbeafe", textColor: "#1d4ed8" },
          { label: "Median Package", value: pl.medianUG, bg: "#fef3c7", textColor: "#92400e" },
          { label: "Placement %", value: pl.percentage, bg: "#f0fdf4", textColor: "#16a34a" },
          { label: "Companies", value: pl.companies, bg: "#fdf4ff", textColor: "#7e22ce" },
          { label: "Total Offers", value: pl.totalOffers, bg: "#fff7ed", textColor: "#c2410c" },
        ].filter(s => s.value).map((s, i) => {
          const Icon = STAT_ICONS[s.label] || Trophy;
          return (
            <div key={i} style={{ background: s.bg, borderRadius: 10, padding: "14px 16px", border: `1px solid ${s.bg}` }}>
              <Icon size={20} color={s.textColor} style={{ marginBottom: 6 }} />
              <div style={{ fontSize: 17, fontWeight: 900, color: s.textColor }}>{s.value}</div>
              <div style={{ fontSize: 11, color: G, marginTop: 4 }}>{s.label}</div>
            </div>
          );
        })}
      </div>

      {/* Course-wise Placement Table — summary */}
      {pl.courseWise?.length > 0 && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", overflow: "hidden" }}>
          <div style={{ padding: "14px 20px", borderBottom: "1px solid #f3f4f6", background: "#f8fafc" }}>
            <h3 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: "#111827" }}>Course-wise Placement 2025</h3>
            <p style={{ margin: "4px 0 0", fontSize: 11.5, color: G }}>
              Average package, highest package and companies visited for each course. Click a row for recruiter details.
            </p>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 520 }}>
              <thead>
                <tr style={{ background: "#f8fafc" }}>
                  {["Course", "Average Package", "Highest Package", "Companies Visited"].map((h, i) => (
                    <th key={i} style={{ padding: "10px 14px", textAlign: "left", fontSize: 12, fontWeight: 700, color: G, borderBottom: "1px solid #e5e7eb" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pl.courseWise.map((c, i) => (
                  <tr
                    key={i}
                    onClick={() => setOpenCourse(openCourse === i ? -1 : i)}
                    style={{ background: openCourse === i ? `${P}0A` : i % 2 === 0 ? "#fff" : "#f9fafb", borderBottom: "1px solid #f3f4f6", cursor: c.recruiters || c.history ? "pointer" : "default" }}
                  >
                    <td style={{ padding: "11px 14px", fontSize: 13, fontWeight: 700, color: P }}>{c.course}</td>
                    <td style={{ padding: "11px 14px", fontSize: 13, color: "#374151" }}>{c.avg}</td>
                    <td style={{ padding: "11px 14px", fontSize: 13, fontWeight: 700, color: "#16a34a" }}>{c.highest}</td>
                    <td style={{ padding: "11px 14px", fontSize: 13, color: "#374151" }}>{c.companies}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Per-course expandable detail: recruiters + year-wise history */}
      {pl.courseWise?.length > 0 && (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {pl.courseWise
            .filter((c) => c.recruiters?.length > 0 || c.history?.length > 0)
            .map((c, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", overflow: "hidden" }}>
                <div style={{ padding: "14px 20px", borderBottom: "1px solid #f3f4f6", background: "#f8fafc" }}>
                  <h4 style={{ margin: 0, fontSize: 13.5, fontWeight: 700, color: "#111827" }}>
                    {data.shortName} {c.course} Placements 2025
                  </h4>
                </div>
                <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 14 }}>
                  {c.history?.length > 0 && (
                    <div style={{ overflowX: "auto" }}>
                      <table style={{ width: "100%", borderCollapse: "collapse" }}>
                        <thead>
                          <tr style={{ background: "#f8fafc" }}>
                            <th style={{ padding: "8px 12px", textAlign: "left", fontSize: 11.5, fontWeight: 700, color: G, borderBottom: "1px solid #e5e7eb" }}>Particulars</th>
                            {c.history.map((h, j) => (
                              <th key={j} style={{ padding: "8px 12px", textAlign: "left", fontSize: 11.5, fontWeight: 700, color: G, borderBottom: "1px solid #e5e7eb" }}>
                                Statistics ({h.year})
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {["highest", "avg", "companies"].map((key, k) => (
                            <tr key={k} style={{ borderBottom: "1px solid #f3f4f6" }}>
                              <td style={{ padding: "8px 12px", fontSize: 12.5, color: "#374151" }}>
                                {key === "highest" ? "Highest Salary" : key === "avg" ? "Average Salary" : "Companies Visited"}
                              </td>
                              {c.history.map((h, j) => (
                                <td key={j} style={{ padding: "8px 12px", fontSize: 12.5, fontWeight: 700, color: "#111827" }}>{h[key]}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {c.recruiters?.length > 0 && (
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 700, color: "#111827", marginBottom: 8 }}>Top Recruiters — {c.course}</div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                        {c.recruiters.map((r, j) => (
                          <span key={j} style={{ background: "#f3f4f6", color: "#374151", fontSize: 11.5, fontWeight: 600, padding: "4px 12px", borderRadius: 20, border: "1px solid #e5e7eb" }}>
                            {r}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>
      )}

      {/* Overall Top Recruiters */}
      {pl.topRecruiters?.length > 0 && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: "#111827", margin: "0 0 14px" }}>Top Recruiters — All Programmes</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {pl.topRecruiters.map((r, i) => (
              <span key={i} style={{ background: "#f3f4f6", color: "#374151", fontSize: 12, fontWeight: 600, padding: "6px 14px", borderRadius: 20, border: "1px solid #e5e7eb" }}>
                {r}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Branch wise (B.Tech specific) */}
      {pl.btechWise?.length > 0 && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", overflow: "hidden" }}>
          <div style={{ padding: "14px 20px", borderBottom: "1px solid #f3f4f6", background: "#f8fafc" }}>
            <h3 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: "#111827" }}>B.Tech Branch-wise Placement 2025</h3>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#f8fafc" }}>
                  {["Branch", "Average Package", "Median Package"].map((h, i) => (
                    <th key={i} style={{ padding: "10px 14px", textAlign: "left", fontSize: 12, fontWeight: 700, color: G, borderBottom: "1px solid #e5e7eb" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pl.btechWise.map((b, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f9fafb", borderBottom: "1px solid #f3f4f6" }}>
                    <td style={{ padding: "11px 14px", fontSize: 13, fontWeight: 600, color: P, minWidth: 200 }}>{b.course}</td>
                    <td style={{ padding: "11px 14px", fontSize: 13, fontWeight: 700, color: "#16a34a" }}>{b.avg}</td>
                    <td style={{ padding: "11px 14px", fontSize: 13, color: "#374151" }}>{b.median}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Insights on Placements */}
      {pl.insights?.length > 0 && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: "#111827", margin: "0 0 14px", display: "flex", alignItems: "center", gap: 8 }}>
            <Lightbulb size={17} color="#eab308" /> Insights on Placements
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
            {pl.insights.map((ins, i) => {
              const Icon = INSIGHT_ICONS[i % INSIGHT_ICONS.length];
              return (
                <div key={i} style={{ background: "#f9fafb", border: "1px solid #f3f4f6", borderRadius: 10, padding: 14 }}>
                  <Icon size={18} color={P} style={{ marginBottom: 8 }} />
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#111827", marginBottom: 4 }}>{ins.title}</div>
                  <div style={{ fontSize: 12, color: "#374151", lineHeight: 1.5 }}>{ins.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* FAQs */}
      {data.placementsFaqs?.length > 0 && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: "#111827", margin: "0 0 14px" }}>
            Frequently Asked Questions — Placements
          </h3>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {data.placementsFaqs.map((faq, i) => {
              const open = openFaq === i;
              return (
                <div key={i} style={{ borderTop: i === 0 ? "none" : "1px solid #f3f4f6" }}>
                  <button
                    onClick={() => setOpenFaq(open ? -1 : i)}
                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, padding: "12px 0", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                  >
                    <span style={{ fontSize: 13.5, fontWeight: 700, color: "#111827" }}>{faq.q}</span>
                    {open ? <ChevronUp size={16} color={G} style={{ flexShrink: 0 }} /> : <ChevronDown size={16} color={G} style={{ flexShrink: 0 }} />}
                  </button>
                  {open && (
                    <p style={{ margin: "0 0 12px", fontSize: 13, color: "#374151", lineHeight: 1.6 }}>{faq.a}</p>
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
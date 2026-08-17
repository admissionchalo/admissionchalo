"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown, Info, Download, Calendar, FileText, GraduationCap, Users, Monitor, ArrowLeftRight } from "lucide-react";

const G = "#6b7280";

const INFO_CARDS = [
  { label: "Exam", value: "JEE Main 2026", icon: FileText },
  { label: "Counselling", value: "UPTAC", icon: GraduationCap },
  { label: "Category", value: "General / OBC / SC / ST", icon: Users },
  { label: "Mode", value: "Online", icon: Monitor },
];

export default function CutoffSection({ data = {} }) {
  const P = data.colors?.primary || "#004aad";
  const [openFaq, setOpenFaq] = useState(-1);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>

      {/* Header */}
      <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
        <h2 style={{ fontSize: 16, fontWeight: 800, color: "#111827", margin: "0 0 4px" }}>
          {data.shortName} Cut Off 2026
        </h2>
        <p style={{ fontSize: 13, color: G, margin: 0 }}>
          JEE Main cutoff ranks for admission to {data.shortName} — based on previous year data.
        </p>
      </div>

      {/* Cut-off intro */}
      {data.cutoffIntro && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
          <p style={{ fontSize: 13.5, color: "#374151", lineHeight: 1.75, margin: 0 }}>
            {data.cutoffIntro}
          </p>
        </div>
      )}

      {/* JEE Main Cutoff Table */}
      {data.cutoffs?.length > 0 && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", overflow: "hidden" }}>
          <div style={{ padding: "14px 20px", borderBottom: "1px solid #f3f4f6", background: "#f8fafc", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
            <h3 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: "#111827" }}>JEE Main Cutoff 2025 (General Category)</h3>
            <span style={{ fontSize: 11, background: "#dbeafe", color: "#1d4ed8", padding: "3px 10px", borderRadius: 20, fontWeight: 600 }}>UPTAC Counselling</span>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#f8fafc" }}>
                  {["Course", "General Rank", "Status"].map((h, i) => (
                    <th key={i} style={{ padding: "10px 14px", textAlign: "left", fontSize: 12, fontWeight: 700, color: G, borderBottom: "1px solid #e5e7eb" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.cutoffs.map((c, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f9fafb", borderBottom: "1px solid #f3f4f6" }}>
                    <td style={{ padding: "11px 14px", fontSize: 13, fontWeight: 600, color: P, minWidth: 200 }}>{c.course}</td>
                    <td style={{ padding: "11px 14px", fontSize: 13, fontWeight: 700, color: "#111827" }}>{c.gen ? Number(c.gen).toLocaleString() : "—"}</td>
                    <td style={{ padding: "11px 14px" }}>
                      <span style={{ fontSize: 11, background: "#dcfce7", color: "#16a34a", padding: "3px 10px", borderRadius: 20, fontWeight: 600 }}>Open</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* All Courses — Cutoff & Entrance Exams */}
      {data.courseGroups?.length > 0 && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", overflow: "hidden" }}>
          <div style={{ padding: "14px 20px", borderBottom: "1px solid #f3f4f6", background: "#f8fafc" }}>
            <h3 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: "#111827" }}>
              All Courses — Cutoff & Entrance Exams
            </h3>
            <p style={{ margin: "4px 0 0", fontSize: 11.5, color: G }}>
              Entrance exam accepted and available cutoff rank/percentile for every programme at {data.shortName}.
            </p>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 560 }}>
              <thead>
                <tr style={{ background: "#f8fafc" }}>
                  {["Programme", "Entrance Exam(s)", "Cutoff"].map((h, i) => (
                    <th key={i} style={{ padding: "10px 14px", textAlign: "left", fontSize: 12, fontWeight: 700, color: G, borderBottom: "1px solid #e5e7eb" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.courseGroups.map((c, i) => {
                  const matched = data.cutoffs?.find(
                    (x) =>
                      x.course.toLowerCase().includes(c.name.toLowerCase()) ||
                      c.name.toLowerCase().includes(x.course.toLowerCase())
                  );
                  return (
                    <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f9fafb", borderBottom: "1px solid #f3f4f6" }}>
                      <td style={{ padding: "11px 14px", fontSize: 13, fontWeight: 700, color: P }}>{c.name}</td>
                      <td style={{ padding: "11px 14px", fontSize: 12.5, color: "#374151" }}>
                        {c.exams?.length > 0 ? c.exams.join(", ") : "—"}
                      </td>
                      <td style={{ padding: "11px 14px", fontSize: 12.5 }}>
                        {matched?.gen ? (
                          <span style={{ fontWeight: 700, color: "#111827" }}>{matched.gen}</span>
                        ) : (
                          <span style={{ color: G }}>Check official cutoff</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}


      {data.catCutoffs?.length > 0 && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", overflow: "hidden" }}>
          <div style={{ padding: "14px 20px", borderBottom: "1px solid #f3f4f6", background: "#f8fafc", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
            <h3 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: "#111827" }}>CAT Cutoff — Section-wise Percentile</h3>
            <span style={{ fontSize: 11, background: "#fef3c7", color: "#92400e", padding: "3px 10px", borderRadius: 20, fontWeight: 600 }}>MBA / PGDM</span>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#f8fafc" }}>
                  {["Year", "Section", "Cutoff Percentile"].map((h, i) => (
                    <th key={i} style={{ padding: "10px 14px", textAlign: "left", fontSize: 12, fontWeight: 700, color: G, borderBottom: "1px solid #e5e7eb" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.catCutoffs.map((c, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f9fafb", borderBottom: "1px solid #f3f4f6" }}>
                    <td style={{ padding: "11px 14px", fontSize: 13, color: "#374151" }}>{c.year}</td>
                    <td style={{ padding: "11px 14px", fontSize: 13, fontWeight: 600, color: P }}>{c.section}</td>
                    <td style={{ padding: "11px 14px", fontSize: 13, fontWeight: 700, color: "#111827" }}>{c.percentile}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ padding: "10px 20px", background: "#fffbeb", borderTop: "1px solid #fde68a" }}>
            <p style={{ margin: 0, fontSize: 11.5, color: "#78350f" }}>
              Section-wise percentile figures to be updated with official data.
            </p>
          </div>
        </div>
      )}

      {/* MBA/PGDM Cutoff Comparison — vs other colleges */}
      {data.cutoffComparison?.length > 0 && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", overflow: "hidden" }}>
          <div style={{ padding: "14px 20px", borderBottom: "1px solid #f3f4f6", background: "#f8fafc", display: "flex", alignItems: "center", gap: 8 }}>
            <ArrowLeftRight size={16} color={P} />
            <h3 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: "#111827" }}>MBA / PGDM Cutoff — College Comparison</h3>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#f8fafc" }}>
                  {["Programme", "College", "CAT Cutoff Percentile"].map((h, i) => (
                    <th key={i} style={{ padding: "10px 14px", textAlign: "left", fontSize: 12, fontWeight: 700, color: G, borderBottom: "1px solid #e5e7eb" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.cutoffComparison.map((c, i) => {
                  const isCurrent = c.college === data.name || c.college === data.shortName;
                  return (
                    <tr key={i} style={{ background: isCurrent ? `${P}0D` : i % 2 === 0 ? "#fff" : "#f9fafb", borderBottom: "1px solid #f3f4f6" }}>
                      <td style={{ padding: "11px 14px", fontSize: 13, color: "#374151" }}>{c.programme}</td>
                      <td style={{ padding: "11px 14px", fontSize: 13, fontWeight: isCurrent ? 800 : 600, color: isCurrent ? P : "#111827" }}>{c.college}</td>
                      <td style={{ padding: "11px 14px", fontSize: 13, fontWeight: 700, color: "#111827" }}>{c.percentile}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Important Dates (reuses admissionDates) */}
      {data.admissionDates?.length > 0 && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: "#111827", margin: "0 0 14px", display: "flex", alignItems: "center", gap: 8 }}>
            <Calendar size={16} color={P} /> Important Dates 2026
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {data.admissionDates.map(([event, date], i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "11px 0", borderBottom: i < data.admissionDates.length - 1 ? "1px solid #f3f4f6" : "none", flexWrap: "wrap", gap: 8 }}>
                <span style={{ fontSize: 13, color: "#374151" }}>{event}</span>
                <span style={{ fontSize: 12.5, fontWeight: 700, color: "#111827", background: "#f9fafb", padding: "3px 12px", borderRadius: 20, border: "1px solid #e5e7eb" }}>{date}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Year-wise cutoff PDF download */}
      {data.cutoffPdfUrl && (
        <a
          href={data.cutoffPdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "flex", alignItems: "center", gap: 10, background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: "14px 20px", textDecoration: "none" }}
        >
          <Download size={17} color={P} />
          <span style={{ fontSize: 13, fontWeight: 700, color: "#111827" }}>Download {data.shortName} Cutoff (Year-wise PDF)</span>
        </a>
      )}

      {/* Cutoff Info Cards — SVG icons */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
        {INFO_CARDS.map((item, i) => (
          <div key={i} style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: "14px 16px" }}>
            <div style={{
              width: 32, height: 32, borderRadius: 8,
              background: `${P}12`, display: "flex", alignItems: "center", justifyContent: "center",
              marginBottom: 8,
            }}>
              <item.icon size={16} color={P} strokeWidth={2} />
            </div>
            <div style={{ fontSize: 11, color: G, marginBottom: 4 }}>{item.label}</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#111827" }}>{item.value}</div>
          </div>
        ))}
      </div>

      {/* Note */}
      <div style={{ background: "#eff6ff", borderRadius: 10, border: "1px solid #bfdbfe", padding: 16 }}>
        <div style={{ display: "flex", gap: 10 }}>
          <Info size={18} color="#1e40af" style={{ flexShrink: 0, marginTop: 1 }} />
          <div style={{ fontSize: 12, color: "#1e40af", lineHeight: 1.6 }}>
            Cutoff ranks are based on <strong>UPTAC 2025</strong> counselling data. Actual cutoffs may vary every year
            based on number of applicants, seat availability, and exam difficulty. Always check official UPTAC website for latest cutoffs.
          </div>
        </div>
      </div>

      {/* FAQs */}
      {data.cutoffFaqs?.length > 0 && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: "#111827", margin: "0 0 14px" }}>
            Frequently Asked Questions — Cut-offs
          </h3>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {data.cutoffFaqs.map((faq, i) => {
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
"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown, AlertTriangle } from "lucide-react";

const G = "#6b7280";

export default function FeesSection({ data = {} }) {
  const P = data.colors?.primary || "#004aad";
  const O = data.colors?.accent || "#f37021";

  const [expanded, setExpanded] = useState(true);
  const [openFaq, setOpenFaq] = useState(-1);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>

      {/* Header */}
      <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
        <h2 style={{ fontSize: 16, fontWeight: 800, color: "#111827", margin: "0 0 4px" }}>
          {data.shortName} Fees Structure 2026
        </h2>
        <p style={{ fontSize: 13, color: G, margin: 0 }}>
          Complete fee details for all programs offered at {data.shortName}.
        </p>
      </div>

      {/* Fees intro */}
      {data.feesIntro && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
          <p style={{ fontSize: 13.5, color: "#374151", lineHeight: 1.75, margin: 0 }}>
            {data.feesIntro}
          </p>
        </div>
      )}

      {/* Key fee highlights */}
      {data.feesHighlights?.length > 0 && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
          {data.feesHighlights.map((h, i) => (
            <div key={i} style={{ background: `${P}0A`, border: `1px solid ${P}22`, borderRadius: 10, padding: 16 }}>
              <div style={{ fontSize: 11.5, color: G, marginBottom: 6, lineHeight: 1.4 }}>{h.label}</div>
              <div style={{ fontSize: 22, fontWeight: 800, color: P }}>{h.value}</div>
              {h.note && <div style={{ fontSize: 10.5, color: G, marginTop: 4 }}>{h.note}</div>}
            </div>
          ))}
        </div>
      )}

      {/* Program-wise Fee Structure (summary) */}
      {data.fees?.length > 0 && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", overflow: "hidden" }}>
          <div style={{ padding: "14px 20px", borderBottom: "1px solid #f3f4f6", background: "#f8fafc" }}>
            <h3 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: "#111827" }}>Program-wise Fee Structure</h3>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#f8fafc" }}>
                  {["Program", "Tuition Fee", "Hostel Fee", "Total Fees", "Entrance Exam"].map((h, i) => (
                    <th key={i} style={{ padding: "10px 14px", textAlign: "left", fontSize: 12, fontWeight: 700, color: G, borderBottom: "1px solid #e5e7eb", whiteSpace: "nowrap" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.fees.map((f, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f9fafb", borderBottom: "1px solid #f3f4f6" }}>
                    <td style={{ padding: "11px 14px", fontSize: 13, fontWeight: 700, color: P }}>{f.prog}</td>
                    <td style={{ padding: "11px 14px", fontSize: 13, color: "#374151" }}>{f.tuition}</td>
                    <td style={{ padding: "11px 14px", fontSize: 13, color: "#374151" }}>{f.hostel}</td>
                    <td style={{ padding: "11px 14px", fontSize: 13, fontWeight: 700, color: "#16a34a" }}>{f.total}</td>
                    <td style={{ padding: "11px 14px", fontSize: 12, color: "#374151" }}>{f.exam}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Full course-wise fee table — every programme offered */}
      {data.courseGroups?.length > 0 && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", overflow: "hidden" }}>
          <button
            onClick={() => setExpanded(!expanded)}
            style={{
              width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-start",
              padding: "20px", background: "none", border: "none", cursor: "pointer", textAlign: "left",
            }}
          >
            <div>
              <span style={{ display: "block", fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 4 }}>
                Detailed Fees — All Courses at {data.shortName}
              </span>
              <span style={{ display: "block", fontSize: 13, color: G }}>
                Fee range and eligibility for all {data.courseGroups.length}+ programmes.
              </span>
            </div>
            {expanded ? <ChevronUp size={18} color={G} style={{ flexShrink: 0, marginTop: 2 }} /> : <ChevronDown size={18} color={G} style={{ flexShrink: 0, marginTop: 2 }} />}
          </button>

          {expanded && (
            <div style={{ padding: "0 20px 20px", overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 560 }}>
                <thead>
                  <tr style={{ background: `${P}0A` }}>
                    <th style={{ padding: "12px 14px", textAlign: "left", fontSize: 13, fontWeight: 700, color: "#111827", borderBottom: "2px solid #f3f4f6" }}>Programme</th>
                    <th style={{ padding: "12px 14px", textAlign: "left", fontSize: 13, fontWeight: 700, color: "#111827", borderBottom: "2px solid #f3f4f6" }}>Courses</th>
                    <th style={{ padding: "12px 14px", textAlign: "left", fontSize: 13, fontWeight: 700, color: "#111827", borderBottom: "2px solid #f3f4f6" }}>Total Fee Range</th>
                  </tr>
                </thead>
                <tbody>
                  {data.courseGroups.map((c, i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f9fafb", borderBottom: "1px solid #f3f4f6" }}>
                      <td style={{ padding: "11px 14px", fontSize: 13, fontWeight: 700, color: P }}>{c.name}</td>
                      <td style={{ padding: "11px 14px", fontSize: 12.5, color: "#374151" }}>{c.count > 0 ? `${c.count} courses` : "—"}</td>
                      <td style={{ padding: "11px 14px", fontSize: 13, fontWeight: 700, color: "#16a34a" }}>{c.feeRange}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* Scholarships */}
      {data.scholarships?.length > 0 && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: "#111827", margin: "0 0 14px" }}>
            {data.shortName} Scholarships 2026
          </h3>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#f8fafc" }}>
                  {["Scholarship", "Eligibility", "Amount"].map((h, i) => (
                    <th key={i} style={{ padding: "10px 14px", textAlign: "left", fontSize: 12, fontWeight: 700, color: G, borderBottom: "1px solid #e5e7eb" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.scholarships.map((s, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f9fafb", borderBottom: "1px solid #f3f4f6" }}>
                    <td style={{ padding: "11px 14px", fontSize: 13, fontWeight: 600, color: "#111827" }}>{s.name}</td>
                    <td style={{ padding: "11px 14px", fontSize: 13, color: "#374151" }}>{s.eligibility}</td>
                    <td style={{ padding: "11px 14px", fontSize: 13, fontWeight: 700, color: "#16a34a" }}>{s.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Fee Note */}
      <div style={{ background: "#fffbeb", borderRadius: 10, border: "1px solid #fde68a", padding: 16 }}>
        <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
          <AlertTriangle size={18} color="#d97706" style={{ flexShrink: 0, marginTop: 1 }} />
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#92400e", marginBottom: 4 }}>Important Note</div>
            <div style={{ fontSize: 12, color: "#78350f", lineHeight: 1.6 }}>
              Fee structure is subject to change. Please verify with the official {data.shortName} website before applying.
              Additional charges like exam fees, library fees, etc. may apply separately.
              {data.feesNote2 ? ` ${data.feesNote2}` : ""}
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      {data.feesFaqs?.length > 0 && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: "#111827", margin: "0 0 14px" }}>
            Frequently Asked Questions — Fees
          </h3>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {data.feesFaqs.map((faq, i) => {
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
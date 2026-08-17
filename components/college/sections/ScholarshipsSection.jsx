"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown, Award } from "lucide-react";

const G = "#6b7280";

export default function ScholarshipsSection({ data = {} }) {
  const P = data.colors?.primary || "#004aad";
  const [openFaq, setOpenFaq] = useState(-1);
  const [openProgram, setOpenProgram] = useState(0);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>

      {/* Header */}
      <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
        <h2 style={{ fontSize: 16, fontWeight: 800, color: "#111827", margin: "0 0 4px" }}>
          {data.shortName} Scholarships 2026
        </h2>
        <p style={{ fontSize: 13, color: G, margin: 0 }}>
          Merit-based and special-category scholarships available at {data.shortName}.
        </p>
      </div>

      {/* Intro */}
      {data.scholarshipsIntro && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
          <p style={{ fontSize: 13.5, color: "#374151", lineHeight: 1.75, margin: 0 }}>
            {data.scholarshipsIntro}
          </p>
        </div>
      )}

      {/* Scholarship types overview */}
      {data.scholarshipTypesList?.length > 0 && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: "#111827", margin: "0 0 14px" }}>
            {data.shortName} Scholarships — Overview
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 10 }}>
            {data.scholarshipTypesList.map((t, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, background: "#f9fafb", border: "1px solid #f3f4f6", borderRadius: 8, padding: "10px 12px" }}>
                <Award size={15} color={P} style={{ flexShrink: 0 }} />
                <span style={{ fontSize: 12.5, fontWeight: 600, color: "#374151" }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Merit scholarship tables — per programme */}
      {data.meritScholarship?.programs?.length > 0 && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", overflow: "hidden" }}>
          <div style={{ padding: "14px 20px", borderBottom: "1px solid #f3f4f6", background: "#f8fafc" }}>
            <h3 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: "#111827" }}>Merit-Based Scholarship — Course-wise Ranges</h3>
            <p style={{ margin: "4px 0 0", fontSize: 11.5, color: G }}>
              Click a programme to view scholarship tiers based on qualifying scores.
            </p>
          </div>

          <div>
            {data.meritScholarship.programs.map((prog, i) => {
              const open = openProgram === i;
              return (
                <div key={i} style={{ borderBottom: i < data.meritScholarship.programs.length - 1 ? "1px solid #f3f4f6" : "none" }}>
                  <button
                    onClick={() => setOpenProgram(open ? -1 : i)}
                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "13px 20px", background: open ? "#f9fafb" : "#fff", border: "none", cursor: "pointer", textAlign: "left" }}
                  >
                    <span style={{ fontSize: 13, fontWeight: 700, color: "#111827" }}>{prog.name}</span>
                    {open ? <ChevronUp size={16} color={G} /> : <ChevronDown size={16} color={G} />}
                  </button>

                  {open && (
                    <div style={{ padding: "0 20px 18px", overflowX: "auto" }}>
                      <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 620 }}>
                        <thead>
                          <tr style={{ background: "#fef9e7" }}>
                            <th style={{ padding: "8px 12px", textAlign: "left", fontSize: 11.5, fontWeight: 700, color: "#92400e", borderBottom: "1px solid #fde68a" }}></th>
                            {data.meritScholarship.tiers.map((t, j) => (
                              <th key={j} style={{ padding: "8px 12px", textAlign: "left", fontSize: 11.5, fontWeight: 700, color: "#92400e", borderBottom: "1px solid #fde68a" }}>{t}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {prog.rows.map((row, k) => (
                            <tr key={k} style={{ background: k % 2 === 0 ? "#fff" : "#f9fafb", borderBottom: "1px solid #f3f4f6" }}>
                              <td style={{ padding: "8px 12px", fontSize: 12, fontWeight: 600, color: "#374151", whiteSpace: "nowrap" }}>{row.label}</td>
                              {row.values.map((v, j) => (
                                <td key={j} style={{ padding: "8px 12px", fontSize: 12, color: v ? "#111827" : G }}>{v || "—"}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Scholarship type descriptions */}
      {data.scholarshipDescriptions?.length > 0 && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: "#111827", margin: "0 0 14px" }}>Other Scholarship Categories</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {data.scholarshipDescriptions.map((s, i) => (
              <div key={i}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#111827", marginBottom: 3 }}>{s.name}</div>
                <p style={{ margin: 0, fontSize: 12.5, color: "#374151", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* FAQs */}
      {data.scholarshipFaqs?.length > 0 && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: "#111827", margin: "0 0 14px" }}>
            Frequently Asked Questions — Scholarships
          </h3>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {data.scholarshipFaqs.map((faq, i) => {
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
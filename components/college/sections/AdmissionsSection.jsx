"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown, FileText, HelpCircle } from "lucide-react";

const G = "#6b7280";

export default function AdmissionsSection({ data }) {
  const P = data.colors?.primary || "#004aad";
  const O = data.colors?.accent || "#f37021";

  const [overviewExpanded, setOverviewExpanded] = useState(true);
  const [processExpanded, setProcessExpanded] = useState(true);
  const [openFaq, setOpenFaq] = useState(-1);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>

      {/* Header */}
      <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
        <h2 style={{ fontSize: 17, fontWeight: 700, color: P, margin: "0 0 4px" }}>
          {data.shortName} Admissions 2026
        </h2>
        <p style={{ fontSize: 13, color: G, margin: 0 }}>
          Admission process, eligibility criteria and important dates for {data.shortName}.
        </p>
      </div>

      {/* Admission Overview — collapsible with bullet highlights */}
      {data.admissionOverview && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", overflow: "hidden" }}>
          <button
            onClick={() => setOverviewExpanded(!overviewExpanded)}
            style={{
              width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left",
            }}
          >
            <span style={{ fontSize: 18, fontWeight: 700, color: "#111827" }}>
              {data.shortName} Admission Overview 2026
            </span>
            {overviewExpanded ? <ChevronUp size={18} color={G} /> : <ChevronDown size={18} color={G} />}
          </button>

          {overviewExpanded && (
            <div style={{ padding: "0 20px 20px" }}>
              {data.admissionOverview.intro && (
                <p style={{ fontSize: 13.5, color: "#374151", lineHeight: 1.75, margin: "0 0 16px" }}>
                  {data.admissionOverview.intro}
                </p>
              )}
              {data.admissionOverview.highlights?.length > 0 && (
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                  {data.admissionOverview.highlights.map((h, i) => (
                    <li key={i} style={{ display: "flex", gap: 9, fontSize: 13, color: "#374151", lineHeight: 1.65 }}>
                      <span style={{ color: O, fontSize: 15, lineHeight: 1, marginTop: 3, flexShrink: 0 }}>•</span>
                      <span>
                        <strong style={{ color: "#111827" }}>{h.label}:</strong> {h.text}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
              {data.brochureUrl && (
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 16, paddingTop: 14, borderTop: "1px solid #f3f4f6" }}>
                  <span style={{ fontSize: 12.5, fontWeight: 700, color: "#111827" }}>Download:</span>
                  <a href={data.brochureUrl} target="_blank" rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12.5, fontWeight: 600, color: P, textDecoration: "none" }}>
                    <FileText size={14} color="#dc2626" /> {data.shortName} Brochure 2026
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Admission Table */}
      {data.admissions?.length > 0 && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", overflow: "hidden" }}>
          <div style={{ padding: "14px 20px", borderBottom: "1px solid #f3f4f6", background: "#f8fafc" }}>
            <h3 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: "#111827" }}>Admission Process 2026</h3>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#f8fafc" }}>
                  {["Program", "Eligibility", "Entrance Exam", "Counselling", "Seats"].map((h, i) => (
                    <th key={i} style={{ padding: "10px 14px", textAlign: "left", fontSize: 12, fontWeight: 700, color: G, borderBottom: "1px solid #e5e7eb", whiteSpace: "nowrap" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.admissions.map((a, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f9fafb", borderBottom: "1px solid #f3f4f6" }}>
                    <td style={{ padding: "11px 14px", fontSize: 13, fontWeight: 700, color: P, whiteSpace: "nowrap" }}>{a.prog}</td>
                    <td style={{ padding: "11px 14px", fontSize: 12, color: "#374151", minWidth: 180 }}>{a.eligibility}</td>
                    <td style={{ padding: "11px 14px", fontSize: 12, color: "#374151", whiteSpace: "nowrap" }}>{a.exam || "—"}</td>
                    <td style={{ padding: "11px 14px", fontSize: 12, color: "#374151", whiteSpace: "nowrap" }}>{a.counselling}</td>
                    <td style={{ padding: "11px 14px", fontSize: 13, fontWeight: 700, color: "#111827", whiteSpace: "nowrap" }}>{a.seats || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Important Dates */}
      {data.admissionDates?.length > 0 && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: "#111827", margin: "0 0 14px" }}>Important Dates 2026</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {data.admissionDates.map(([event, date], i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "11px 0", borderBottom: i < data.admissionDates.length - 1 ? "1px solid #f3f4f6" : "none", flexWrap: "wrap", gap: 8 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: P, flexShrink: 0 }} />
                  <span style={{ fontSize: 13, color: "#374151" }}>{event}</span>
                </div>
                <span style={{ fontSize: 13, fontWeight: 700, color: O, background: "#fff7ed", padding: "3px 12px", borderRadius: 20, border: "1px solid #fed7aa" }}>{date}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Admission & Application Process — collapsible, numbered steps */}
      {data.admissionSteps?.length > 0 && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", overflow: "hidden" }}>
          <button
            onClick={() => setProcessExpanded(!processExpanded)}
            style={{
              width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left",
            }}
          >
            <span style={{ fontSize: 18, fontWeight: 700, color: "#111827" }}>
              {data.shortName} Admission & Application Process 2026
            </span>
            {processExpanded ? <ChevronUp size={18} color={G} /> : <ChevronDown size={18} color={G} />}
          </button>

          {processExpanded && (
            <div style={{ padding: "0 20px 20px" }}>
              {data.admissionProcessIntro && (
                <p style={{ fontSize: 13.5, color: "#374151", lineHeight: 1.75, margin: "0 0 20px" }}>
                  {data.admissionProcessIntro}
                </p>
              )}

              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {data.admissionSteps.map((step, i) => (
                  <div key={i}>
                    <h4 style={{ fontSize: 14, fontWeight: 700, color: P, margin: "0 0 8px" }}>{step.title}</h4>
                    {step.text && (
                      <p style={{ fontSize: 13, color: "#374151", lineHeight: 1.7, margin: step.bullets?.length ? "0 0 10px" : 0 }}>
                        {step.text}
                      </p>
                    )}
                    {step.bullets?.length > 0 && (
                      <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
                        {step.bullets.map((b, bi) => (
                          <li key={bi} style={{ display: "flex", gap: 8, fontSize: 13, color: "#374151" }}>
                            <span style={{ color: O, fontSize: 14, lineHeight: 1.6, flexShrink: 0 }}>•</span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              {data.admissionDocuments?.length > 0 && (
                <div style={{ marginTop: 20 }}>
                  <h4 style={{ fontSize: 14, fontWeight: 700, color: "#111827", margin: "0 0 10px" }}>Documents:</h4>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                    {data.admissionDocuments.map((doc, i) => (
                      <li key={i} style={{ display: "flex", gap: 8, fontSize: 13, color: "#374151", lineHeight: 1.55 }}>
                        <span style={{ color: O, fontSize: 14, lineHeight: 1.55, flexShrink: 0 }}>•</span>
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Fee Refund Policy */}
      {data.feeRefundPolicy && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: P, margin: "0 0 10px" }}>{data.feeRefundPolicy.title}</h3>
          {data.feeRefundPolicy.intro && (
            <p style={{ fontSize: 13, color: "#374151", lineHeight: 1.75, margin: "0 0 16px" }}>
              {data.feeRefundPolicy.intro}
            </p>
          )}
          {data.feeRefundPolicy.table?.length > 0 && (
            <div style={{ border: "1px solid #e5e7eb", borderRadius: 10, overflow: "hidden" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", background: `${P}0A` }}>
                <div style={{ padding: "12px 16px", fontSize: 13, fontWeight: 700, color: "#111827" }}>Withdrawal / Cancellation Request Date</div>
                <div style={{ padding: "12px 16px", fontSize: 13, fontWeight: 700, color: "#111827", borderLeft: "1px solid #e5e7eb" }}>Refund</div>
              </div>
              {data.feeRefundPolicy.table.map((row, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderTop: "1px solid #f3f4f6" }}>
                  <div style={{ padding: "14px 16px", fontSize: 13, color: "#374151" }}>{row.date}</div>
                  <div style={{ padding: "14px 16px", fontSize: 13, color: "#374151", borderLeft: "1px solid #f3f4f6" }}>{row.refund}</div>
                </div>
              ))}
            </div>
          )}
          {data.feeRefundPolicy.note && (
            <p style={{ fontSize: 12, color: G, fontStyle: "italic", margin: "14px 0 0" }}>
              Note: {data.feeRefundPolicy.note}
            </p>
          )}
        </div>
      )}

      {/* Admission FAQs */}
      {data.admissionFaqs?.length > 0 && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: P, margin: "0 0 14px", display: "flex", alignItems: "center", gap: 8 }}>
            <HelpCircle size={17} color={P} /> Admission FAQs
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {data.admissionFaqs.map((faq, i) => {
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
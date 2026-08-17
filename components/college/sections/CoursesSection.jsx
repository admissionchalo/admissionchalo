"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown, X } from "lucide-react";

const G = "#6b7280";

function CourseDetailModal({ course, onClose, P, O }) {
  return (
    <div
      onClick={onClose}
      style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.55)", zIndex: 3000, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ background: "#fff", borderRadius: 14, width: "100%", maxWidth: 520, maxHeight: "85vh", overflowY: "auto" }}
      >
        <div style={{ padding: "18px 22px", borderBottom: "1px solid #e5e7eb", display: "flex", justifyContent: "space-between", alignItems: "flex-start", position: "sticky", top: 0, background: "#fff" }}>
          <div>
            <h3 style={{ margin: "0 0 4px", fontSize: 17, fontWeight: 700, color: P }}>{course.name}</h3>
            {course.count > 0 && <p style={{ margin: 0, fontSize: 12.5, color: G }}>{course.count} specialisations available</p>}
          </div>
          <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", color: G, display: "flex", padding: 0 }}>
            <X size={20} />
          </button>
        </div>

        <div style={{ padding: 22, display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ background: `${O}0F`, border: `1px solid ${O}33`, borderRadius: 10, padding: 14 }}>
            <div style={{ fontSize: 11, color: G, marginBottom: 3 }}>Total Tuition Fees</div>
            <div style={{ fontSize: 20, fontWeight: 700, color: "#111827" }}>{course.feeRange}</div>
          </div>

          {(course.pct12 || course.pctGrad) && (
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#111827", marginBottom: 8 }}>Eligibility</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {course.pct12 && (
                  <div style={{ fontSize: 13, color: "#374151", display: "flex", justifyContent: "space-between", padding: "8px 12px", background: "#f9fafb", borderRadius: 7 }}>
                    <span>10+2 Minimum</span> <strong>{course.pct12}</strong>
                  </div>
                )}
                {course.pctGrad && (
                  <div style={{ fontSize: 13, color: "#374151", display: "flex", justifyContent: "space-between", padding: "8px 12px", background: "#f9fafb", borderRadius: 7 }}>
                    <span>Graduation Minimum</span> <strong>{course.pctGrad}</strong>
                  </div>
                )}
              </div>
            </div>
          )}

          {course.allExams?.length > 0 && (
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#111827", marginBottom: 8 }}>Accepted Entrance Exams</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {course.allExams.map((ex, i) => (
                  <span key={i} style={{ fontSize: 12, fontWeight: 600, color: P, background: `${P}0F`, border: `1px solid ${P}22`, padding: "5px 12px", borderRadius: 20 }}>
                    {ex}
                  </span>
                ))}
              </div>
            </div>
          )}

          {course.specializations?.length > 0 && (
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#111827", marginBottom: 8 }}>Specialisations</div>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
                {course.specializations.map((s, i) => (
                  <li key={i} style={{ fontSize: 13, color: "#374151", padding: "8px 12px", background: "#f9fafb", borderRadius: 7, display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ width: 5, height: 5, borderRadius: "50%", background: O, flexShrink: 0 }} />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button
            style={{ width: "100%", background: O, color: "#fff", border: "none", borderRadius: 8, padding: "11px", fontWeight: 700, fontSize: 13.5, cursor: "pointer" }}
          >
            Enquire About {course.name}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CoursesSection({ data = {} }) {
  const P = data.colors?.primary || "#004aad";
  const O = data.colors?.accent || "#f37021";

  const [expanded, setExpanded] = useState(true);
  const [activeCourse, setActiveCourse] = useState(null);
  const [openFaq, setOpenFaq] = useState(-1);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>

      {/* Grouped Courses & Fees table — single header, expandable */}
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
              <span style={{ display: "block", fontSize: 17, fontWeight: 700, color: P, marginBottom: 4 }}>
                {data.shortName} Courses & Fees 2026
              </span>
              <span style={{ display: "block", fontSize: 13, color: G }}>
                {data.shortName} offers {data.courseGroups?.length || 0}+ programmes across UG, PG and doctoral levels.
              </span>
            </div>
            {expanded ? <ChevronUp size={18} color={G} style={{ flexShrink: 0, marginTop: 2 }} /> : <ChevronDown size={18} color={G} style={{ flexShrink: 0, marginTop: 2 }} />}
          </button>

          {expanded && (
            <div style={{ padding: "0 20px 20px" }}>
              {data.courseIntro && (
                <p style={{ fontSize: 13.5, color: "#374151", lineHeight: 1.75, margin: "0 0 18px" }}>
                  {data.courseIntro}
                </p>
              )}

              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 620 }}>
                  <thead>
                    <tr style={{ background: `${P}0A` }}>
                      <th style={{ padding: "12px 14px", textAlign: "left", fontSize: 13, fontWeight: 700, color: "#111827", borderBottom: "2px solid #f3f4f6" }}>Courses</th>
                      <th style={{ padding: "12px 14px", textAlign: "left", fontSize: 13, fontWeight: 700, color: "#111827", borderBottom: "2px solid #f3f4f6" }}>Tuition Fees</th>
                      <th style={{ padding: "12px 14px", textAlign: "left", fontSize: 13, fontWeight: 700, color: "#111827", borderBottom: "2px solid #f3f4f6" }}>Eligibility</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.courseGroups.map((c, i) => (
                      <tr key={i} style={{ borderBottom: "1px solid #f3f4f6" }}>
                        <td style={{ padding: "16px 14px", verticalAlign: "top", minWidth: 150 }}>
                          <button
                            onClick={() => setActiveCourse(c)}
                            style={{ background: "none", border: "none", padding: 0, cursor: "pointer", fontSize: 14, fontWeight: 700, color: P, textAlign: "left" }}
                          >
                            {c.name}
                          </button>
                          {c.count > 0 && (
                            <div style={{ fontSize: 12, color: G, marginTop: 2 }}>({c.count} courses)</div>
                          )}
                        </td>
                        <td style={{ padding: "16px 14px", verticalAlign: "top", minWidth: 140 }}>
                          <div style={{ fontSize: 13, color: "#111827", marginBottom: 4 }}>{c.feeRange}</div>
                          <button
                            onClick={() => setActiveCourse(c)}
                            style={{ background: "none", border: "none", padding: 0, cursor: "pointer", fontSize: 12.5, fontWeight: 700, color: "#111827", textDecoration: "underline" }}
                          >
                            Get Fee Details
                          </button>
                        </td>
                        <td style={{ padding: "16px 14px", verticalAlign: "top", minWidth: 220 }}>
                          {c.pct12 && (
                            <div style={{ fontSize: 12.5, color: "#374151", marginBottom: 3 }}>10+2 : {c.pct12}</div>
                          )}
                          {c.pctGrad && (
                            <div style={{ fontSize: 12.5, color: "#374151", marginBottom: 3 }}>Graduation : {c.pctGrad}</div>
                          )}
                          {c.exams?.length > 0 && (
                            <div style={{ fontSize: 12.5, color: "#374151" }}>
                              Exams : {c.exams.join(", ")}
                              {c.moreExams > 0 && (
                                <>
                                  {" "}
                                  <button
                                    onClick={() => setActiveCourse(c)}
                                    style={{ background: "none", border: "none", padding: 0, cursor: "pointer", fontSize: 12.5, fontWeight: 700, color: P }}
                                  >
                                    +{c.moreExams} More
                                  </button>
                                </>
                              )}
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Course details — additional descriptive content */}
      {data.courseDetails && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: "#111827", margin: "0 0 10px" }}>
            {data.shortName} Courses
          </h3>
          <p style={{ fontSize: 13.5, color: "#374151", lineHeight: 1.75, margin: 0 }}>
            {data.courseDetails}
          </p>
        </div>
      )}

      {/* Scholarships */}
      {data.scholarships?.length > 0 && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: "#111827", margin: "0 0 14px" }}>Scholarships Available</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {data.scholarships.map((s, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px", background: "#f9fafb", borderRadius: 8, border: "1px solid #f3f4f6", flexWrap: "wrap", gap: 8 }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#111827" }}>{s.name}</div>
                  <div style={{ fontSize: 11, color: G, marginTop: 2 }}>Eligibility: {s.eligibility}</div>
                </div>
                <div style={{ background: "#dcfce7", color: "#16a34a", fontSize: 12, fontWeight: 700, padding: "4px 12px", borderRadius: 20 }}>
                  {s.amount}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* FAQs */}
      {data.courseFaqs?.length > 0 && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: "#111827", margin: "0 0 14px" }}>
            Frequently Asked Questions — Courses
          </h3>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {data.courseFaqs.map((faq, i) => {
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

      {activeCourse && (
        <CourseDetailModal course={activeCourse} onClose={() => setActiveCourse(null)} P={P} O={O} />
      )}
    </div>
  );
}
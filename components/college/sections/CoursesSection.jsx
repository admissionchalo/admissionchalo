"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const G = "#6b7280";
const BORDER = "#e5e7eb";

function slugify(str = "") {
  return str
    .toLowerCase()
    .replace(/[().&/]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function DataTable({ columns, rows }) {
  return (
    <div style={{ overflowX: "auto", margin: "12px 0 6px" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
        <thead>
          <tr>
            {columns.map((c, i) => (
              <th key={i} style={{ textAlign: "left", padding: "10px 12px", background: "#f3f4f6", border: `1px solid ${BORDER}`, fontWeight: 700, color: "#111827" }}>
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} style={{ padding: "9px 12px", border: `1px solid ${BORDER}`, color: "#374151", verticalAlign: "top" }}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Note({ children }) {
  return (
    <div style={{ background: "#fff7e6", border: "1px solid #fde8bd", borderRadius: 8, padding: "10px 14px", margin: "10px 0" }}>
      <p style={{ fontSize: 12, color: "#7a5b12", lineHeight: 1.6, margin: 0 }}>{children}</p>
    </div>
  );
}

function Bullets({ items }) {
  return (
    <ul style={{ margin: "0 0 10px", paddingLeft: 20, display: "flex", flexDirection: "column", gap: 6 }}>
      {items.map((b, i) => (
        <li key={i} style={{ fontSize: 13.5, color: "#374151", lineHeight: 1.75 }}>{b}</li>
      ))}
    </ul>
  );
}

function Paragraphs({ items }) {
  return items.map((p, i) => (
    <p key={i} style={{ fontSize: 13.5, color: "#374151", lineHeight: 1.85, margin: "0 0 10px" }}>{p}</p>
  ));
}

export default function CoursesSection({ data = {} }) {
  const P = data.colors?.primary || "#004aad";
  const [tocOpen, setTocOpen] = useState(true);
  const [openFaq, setOpenFaq] = useState(-1);

  const guide = data.coursesGuide2026;

  if (!guide) {
    return (
      <div style={{ background: "#fff", borderRadius: 10, border: `1px solid ${BORDER}`, padding: 40, textAlign: "center", color: G }}>
        <div style={{ fontSize: 40, marginBottom: 12 }}>🎓</div>
        <div style={{ fontWeight: 700, color: "#111827" }}>Course details coming soon</div>
      </div>
    );
  }

  // Build the full nested table of contents
  const toc = [
    { id: "admissions-update", label: guide.admissionsUpdate?.heading },
    { id: "academic-schools", label: guide.academicSchools?.heading },
    { id: "streams-offered", label: guide.streamsOffered?.heading },
    { id: "courses-list", label: guide.coursesTable?.heading },
    { id: "popular-programmes", label: guide.popularProgrammesTable?.heading },
    { id: "course-wise-breakdown", label: guide.courseWiseBreakdown?.heading },
    { id: "new-programmes-2026", label: guide.newProgrammes2026?.heading },
    { id: "rankings-courses", label: guide.rankingsForCourses?.heading },
    { id: "how-to-apply", label: guide.howToApply?.heading },
    guide.guideFaqs?.length > 0 && { id: "guide-faqs", label: "Frequently Asked Questions" },
  ].filter((t) => t && t.label);

  return (
    <article style={{ background: "#fff", borderRadius: 10, border: `1px solid ${BORDER}`, padding: "28px 32px" }}>

      <div style={{ fontSize: 12, color: G, marginBottom: 6 }}>{data.shortName}</div>
      <h1 style={{ fontSize: 22, fontWeight: 800, color: "#111827", lineHeight: 1.35, margin: "0 0 16px" }}>
        {guide.title}
      </h1>

      {guide.intro?.length > 0 && <Paragraphs items={guide.intro} />}

      {/* Table of contents */}
      <div style={{ border: `1px solid ${BORDER}`, borderRadius: 8, padding: "18px 20px", margin: "16px 0 26px" }}>
        <button
          onClick={() => setTocOpen(!tocOpen)}
          style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", padding: 0, marginBottom: tocOpen ? 10 : 0 }}
        >
          <span style={{ fontSize: 16, fontWeight: 800, color: "#111827" }}>Table of contents</span>
          {tocOpen ? <ChevronUp size={18} color={G} /> : <ChevronDown size={18} color={G} />}
        </button>
        {tocOpen && (
          <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {toc.map((item) => (
              <a key={item.id} href={`#${item.id}`} style={{ fontSize: 14, color: "#2563eb", textDecoration: "none", padding: "4px 0" }}>
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Admissions update */}
      {guide.admissionsUpdate && (
        <section id="admissions-update" style={{ scrollMarginTop: 90, marginBottom: 30 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: "#111827", margin: "0 0 10px" }}>{guide.admissionsUpdate.heading}</h2>
          {guide.admissionsUpdate.intro && <p style={{ fontSize: 13.5, color: "#374151", lineHeight: 1.85, margin: "0 0 10px" }}>{guide.admissionsUpdate.intro}</p>}
          {guide.admissionsUpdate.bullets?.length > 0 && <Bullets items={guide.admissionsUpdate.bullets} />}
          {guide.admissionsUpdate.note && <Note>{guide.admissionsUpdate.note}</Note>}
        </section>
      )}

      {/* Academic schools */}
      {guide.academicSchools && (
        <section id="academic-schools" style={{ scrollMarginTop: 90, marginBottom: 30 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: "#111827", margin: "0 0 10px" }}>{guide.academicSchools.heading}</h2>
          {guide.academicSchools.intro && <p style={{ fontSize: 13.5, color: "#374151", lineHeight: 1.85, margin: "0 0 10px" }}>{guide.academicSchools.intro}</p>}
          {guide.academicSchools.list?.length > 0 && <Bullets items={guide.academicSchools.list} />}
          {guide.academicSchools.note && <p style={{ fontSize: 13.5, color: "#374151", lineHeight: 1.85, margin: 0 }}>{guide.academicSchools.note}</p>}
        </section>
      )}

      {/* Streams offered */}
      {guide.streamsOffered && (
        <section id="streams-offered" style={{ scrollMarginTop: 90, marginBottom: 30 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: "#111827", margin: "0 0 10px" }}>{guide.streamsOffered.heading}</h2>
          {guide.streamsOffered.intro && <p style={{ fontSize: 13.5, color: "#374151", lineHeight: 1.85, margin: "0 0 10px" }}>{guide.streamsOffered.intro}</p>}
          {guide.streamsOffered.list?.length > 0 && <Bullets items={guide.streamsOffered.list} />}
          {guide.streamsOffered.note && <p style={{ fontSize: 13.5, color: "#374151", lineHeight: 1.85, margin: 0 }}>{guide.streamsOffered.note}</p>}
        </section>
      )}

      {/* Courses list table */}
      {guide.coursesTable && (
        <section id="courses-list" style={{ scrollMarginTop: 90, marginBottom: 30 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: "#111827", margin: "0 0 10px" }}>{guide.coursesTable.heading}</h2>
          <DataTable columns={guide.coursesTable.columns} rows={guide.coursesTable.rows} />
          {guide.coursesTable.note && <p style={{ fontSize: 12, color: G, fontStyle: "italic", margin: "10px 0 0" }}>{guide.coursesTable.note}</p>}
        </section>
      )}

      {/* Popular programmes table */}
      {guide.popularProgrammesTable && (
        <section id="popular-programmes" style={{ scrollMarginTop: 90, marginBottom: 30 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: "#111827", margin: "0 0 10px" }}>{guide.popularProgrammesTable.heading}</h2>
          <DataTable columns={guide.popularProgrammesTable.columns} rows={guide.popularProgrammesTable.rows} />
        </section>
      )}

      {/* Course-wise breakdown */}
      {guide.courseWiseBreakdown && (
        <section id="course-wise-breakdown" style={{ scrollMarginTop: 90, marginBottom: 30 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: "#111827", margin: "0 0 14px" }}>{guide.courseWiseBreakdown.heading}</h2>
          {guide.courseWiseBreakdown.sections?.map((sec, i) => (
            <div key={i} id={slugify(sec.heading)} style={{ scrollMarginTop: 90, marginBottom: i < guide.courseWiseBreakdown.sections.length - 1 ? 22 : 0 }}>
              <h3 style={{ fontSize: 15.5, fontWeight: 700, color: "#111827", margin: "0 0 8px" }}>{sec.heading}</h3>
              {sec.intro && <p style={{ fontSize: 13.5, color: "#374151", lineHeight: 1.85, margin: "0 0 10px" }}>{sec.intro}</p>}
              {sec.paragraphs?.length > 0 && <Paragraphs items={sec.paragraphs} />}
              {sec.bullets?.length > 0 && <Bullets items={sec.bullets} />}
            </div>
          ))}
        </section>
      )}

      {/* New 2026 programmes */}
      {guide.newProgrammes2026 && (
        <section id="new-programmes-2026" style={{ scrollMarginTop: 90, marginBottom: 30 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: "#111827", margin: "0 0 10px" }}>{guide.newProgrammes2026.heading}</h2>
          {guide.newProgrammes2026.intro && <p style={{ fontSize: 13.5, color: "#374151", lineHeight: 1.85, margin: "0 0 16px" }}>{guide.newProgrammes2026.intro}</p>}
          {guide.newProgrammes2026.subsections?.map((sub, i) => (
            <div key={i} style={{ marginBottom: i < guide.newProgrammes2026.subsections.length - 1 ? 20 : 0 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "#111827", margin: "0 0 8px" }}>{sub.heading}</h3>
              {sub.intro && <p style={{ fontSize: 13.5, color: "#374151", lineHeight: 1.85, margin: "0 0 10px" }}>{sub.intro}</p>}
              {sub.bullets?.length > 0 && <Bullets items={sub.bullets} />}
              {sub.note && <Note>{sub.note}</Note>}
            </div>
          ))}
        </section>
      )}

      {/* Rankings for courses */}
      {guide.rankingsForCourses && (
        <section id="rankings-courses" style={{ scrollMarginTop: 90, marginBottom: 30 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: "#111827", margin: "0 0 10px" }}>{guide.rankingsForCourses.heading}</h2>
          <p style={{ fontSize: 13.5, color: "#374151", lineHeight: 1.85, margin: 0 }}>{guide.rankingsForCourses.text}</p>
        </section>
      )}

      {/* How to apply */}
      {guide.howToApply && (
        <section id="how-to-apply" style={{ scrollMarginTop: 90, marginBottom: 30 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: "#111827", margin: "0 0 12px" }}>{guide.howToApply.heading}</h2>
          <ol style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
            {guide.howToApply.steps.map((s, i) => (
              <li key={i} style={{ fontSize: 13.5, color: "#374151", lineHeight: 1.8 }}>{s}</li>
            ))}
          </ol>
        </section>
      )}

      {/* Guide FAQs */}
      {guide.guideFaqs?.length > 0 && (
        <section id="guide-faqs" style={{ scrollMarginTop: 90 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: "#111827", margin: "0 0 14px" }}>Frequently Asked Questions</h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {guide.guideFaqs.map((faq, i) => {
              const open = openFaq === i;
              return (
                <div key={i} style={{ borderTop: i === 0 ? "none" : `1px solid ${BORDER}` }}>
                  <button
                    onClick={() => setOpenFaq(open ? -1 : i)}
                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, padding: "13px 0", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                  >
                    <span style={{ fontSize: 13.5, fontWeight: 700, color: "#111827" }}>{faq.q}</span>
                    {open ? <ChevronUp size={16} color={G} style={{ flexShrink: 0 }} /> : <ChevronDown size={16} color={G} style={{ flexShrink: 0 }} />}
                  </button>
                  {open && <p style={{ margin: "0 0 13px", fontSize: 13, color: "#374151", lineHeight: 1.7 }}>{faq.a}</p>}
                </div>
              );
            })}
          </div>
        </section>
      )}
    </article>
  );
}
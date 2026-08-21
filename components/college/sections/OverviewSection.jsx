"use client";

import { useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { ChevronUp, ChevronDown, List, ArrowUpRight } from "lucide-react";

const G = "#6b7280";

const SECTION_TAB_LINKS = [
  { test: (t) => /course/i.test(t), slug: "courses", label: "Courses", topic: "Courses", faqField: "courseFaqs" },
  { test: (t) => /fee/i.test(t), slug: "fees", label: "Fees", topic: "Fees", faqField: "feesFaqs" },
  { test: (t) => /cutoff|cut-off|cut off/i.test(t), slug: "cutoffs", label: "Cut-offs", topic: "Cutoff", faqField: "cutoffFaqs" },
  { test: (t) => /admission/i.test(t), slug: "admissions", label: "Admissions", topic: "Admissions", faqField: "admissionsFaqs" },
  { test: (t) => /placement/i.test(t), slug: "placements", label: "Placements", topic: "Placements", faqField: "placementsFaqs" },
  { test: (t) => /scholarship/i.test(t), slug: "scholarships", label: "Scholarships", topic: "Scholarships", faqField: "scholarshipFaqs" },
  { test: (t) => /campus|infrastructure|facilit/i.test(t), slug: "facilities", label: "Facilities", topic: "Facilities", faqField: "facilitiesFaqs" },
];

function getTabLink(title) {
  return SECTION_TAB_LINKS.find((m) => m.test(title)) || null;
}

function slugify(title) {
  return title.toLowerCase().replace(/[^\w]+/g, "-").replace(/^-+|-+$/g, "");
}

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const linkBtnStyle = {
  background: "none", border: "none", padding: 0, margin: 0,
  color: "#2563eb", fontWeight: 700, cursor: "pointer",
  fontSize: "inherit", fontFamily: "inherit",
  textDecoration: "underline", textDecorationColor: "#93c5fd", textUnderlineOffset: "2px",
  display: "inline",
};

// Builds "{College Name} {Topic}" (e.g. "Bennett University Fees"), finds it in the
// paragraph, wraps it as a blue link — or, if absent, appends it as a new linked sentence.
function highlightIntro(text, tabLink, collegeName, onClick) {
  if (!tabLink || !text) return text;
  const phrase = `${collegeName} ${tabLink.topic}`;
  const re = new RegExp(escapeRegExp(phrase), "i");
  const match = text.match(re);

  if (!match) {
    return (
      <>
        {text}{" "}
        <button onClick={onClick} style={linkBtnStyle}>
          Read more about {phrase}
        </button>
        .
      </>
    );
  }

  const idx = match.index;
  const before = text.slice(0, idx);
  const matched = text.slice(idx, idx + match[0].length);
  const after = text.slice(idx + match[0].length);

  return (
    <>
      {before}
      <button onClick={onClick} style={linkBtnStyle}>{matched}</button>
      {after}
    </>
  );
}

function BlockTable({ table }) {
  if (!table?.rows?.length) return null;
  return (
    <div style={{ overflowX: "auto", margin: "10px 0", borderRadius: 8, border: "1px solid #e5e7eb" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 480 }}>
        <thead>
          <tr style={{ background: "#f8fafc" }}>
            {table.columns.map((c, i) => (
              <th key={i} style={{ padding: "10px 12px", textAlign: "left", fontSize: 11.5, fontWeight: 700, color: "#475569", textTransform: "uppercase", letterSpacing: "0.02em", borderBottom: "1px solid #e5e7eb" }}>
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, ri) => (
            <tr key={ri} style={{ background: ri % 2 === 0 ? "#fff" : "#f9fafb", borderBottom: "1px solid #f3f4f6" }}>
              {row.map((cell, ci) => (
                <td key={ci} style={{ padding: "9px 12px", fontSize: 12.5, color: ci === 0 ? "#111827" : "#374151", fontWeight: ci === 0 ? 700 : 400 }}>
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

function SectionFaqs({ faqs, label }) {
  const [openIdx, setOpenIdx] = useState(-1);
  if (!faqs?.length) return null;

  return (
    <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1px dashed #e5e7eb" }}>
      <h4 style={{ fontSize: 13, fontWeight: 700, color: "#111827", margin: "0 0 10px", textTransform: "uppercase", letterSpacing: "0.02em" }}>
        {label} — FAQs
      </h4>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {faqs.map((faq, i) => {
          const open = openIdx === i;
          return (
            <div key={i} style={{ borderTop: i === 0 ? "none" : "1px solid #f3f4f6" }}>
              <button
                onClick={() => setOpenIdx(open ? -1 : i)}
                style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, padding: "10px 0", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
              >
                <span style={{ fontSize: 12.5, fontWeight: 700, color: "#111827" }}>{faq.q}</span>
                {open ? <ChevronUp size={14} color={G} style={{ flexShrink: 0 }} /> : <ChevronDown size={14} color={G} style={{ flexShrink: 0 }} />}
              </button>
              {open && (
                <p style={{ margin: "0 0 10px", fontSize: 12, color: "#374151", lineHeight: 1.6 }}>{faq.a}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ArticleSection({ section, data, P, O, onTabLink, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  const tabLink = getTabLink(section.title);
  const anchorId = slugify(section.title);
  const sectionFaqs = tabLink ? data[tabLink.faqField] : null;
  const collegeName = data.shortName || data.name;

  return (
    <section
      id={anchorId}
      style={{
        background: "#fff", borderRadius: 14, border: "1px solid #e9eaec", overflow: "hidden",
        boxShadow: "0 1px 2px rgba(16,24,40,0.04)", scrollMarginTop: 90,
      }}
    >
      <div
        style={{
          display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12,
          padding: "17px 22px", borderTop: `3px solid ${P}`, background: open ? "#fff" : "#fafafa",
        }}
      >
        {tabLink ? (
          <button
            onClick={() => onTabLink(tabLink.slug)}
            style={{
              background: "none", border: "none", padding: 0, cursor: "pointer", textAlign: "left",
              display: "flex", alignItems: "center", gap: 6,
            }}
          >
            <h2 style={{ fontSize: 17.5, fontWeight: 800, color: "#111827", margin: 0, letterSpacing: "-0.01em" }}>
              {section.title}
            </h2>
            <ArrowUpRight size={15} color={G} style={{ flexShrink: 0 }} />
          </button>
        ) : (
          <h2 style={{ fontSize: 17.5, fontWeight: 800, color: "#111827", margin: 0, letterSpacing: "-0.01em" }}>
            {section.title}
          </h2>
        )}

        <button
          onClick={() => setOpen(!open)}
          style={{
            background: "#f3f4f6", border: "none", borderRadius: 8, width: 30, height: 30,
            display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0,
          }}
        >
          {open ? <ChevronUp size={16} color="#374151" /> : <ChevronDown size={16} color="#374151" />}
        </button>
      </div>

      {open && (
        <div style={{ padding: "2px 22px 22px" }}>
          {section.intro && (
            <p style={{ fontSize: 13.5, color: "#374151", lineHeight: 1.8, margin: "0 0 18px" }}>
              {tabLink ? highlightIntro(section.intro, tabLink, collegeName, () => onTabLink(tabLink.slug)) : section.intro}
            </p>
          )}

          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {section.blocks?.map((block, i) => (
              <div key={i}>
                {block.heading && (
                  <h3 style={{ fontSize: 14.5, fontWeight: 700, color: "#111827", margin: "0 0 7px" }}>
                    {block.heading}
                  </h3>
                )}

                {block.text && (
                  <p style={{ fontSize: 13, color: "#374151", lineHeight: 1.75, margin: (block.bullets?.length || block.table) ? "0 0 9px" : 0 }}>
                    {block.text}
                  </p>
                )}

                {block.bullets?.length > 0 && (
                  <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 7 }}>
                    {block.bullets.map((b, bi) => (
                      <li key={bi} style={{ display: "flex", gap: 9, fontSize: 13, color: "#374151", lineHeight: 1.65 }}>
                        <span style={{ color: O, fontSize: 15, lineHeight: 1.6, flexShrink: 0, fontWeight: 700 }}>·</span>
                        <span>
                          {typeof b === "string" ? b : (
                            <>
                              {b.label && <strong style={{ color: "#111827" }}>{b.label}: </strong>}
                              {b.text}
                            </>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {block.table && <BlockTable table={block.table} />}
              </div>
            ))}
          </div>

          {section.note && (
            <aside style={{ marginTop: 18, padding: "12px 14px", borderRadius: 8, background: "#f8fafc", border: "1px solid #eef0f2", display: "flex", gap: 8 }}>
              <span style={{ fontSize: 14 }}>ℹ️</span>
              <p style={{ margin: 0, fontSize: 12, color: G, lineHeight: 1.6 }}>{section.note}</p>
            </aside>
          )}

          {tabLink && sectionFaqs?.length > 0 && (
            <SectionFaqs faqs={sectionFaqs} label={tabLink.label} />
          )}
        </div>
      )}
    </section>
  );
}

export default function OverviewSection({ data }) {
  const P = data.colors?.primary || "#004aad";
  const O = data.colors?.accent || "#f37021";
  const [openFaq, setOpenFaq] = useState(-1);
  const [tocOpen, setTocOpen] = useState(true);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const goToTab = (slug) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", slug);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (title) => {
    const el = document.getElementById(slugify(title));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const hasArticle = data.overviewArticle?.length > 0;
  const hasFaqs = data.faqs?.length > 0;

  if (!hasArticle && !hasFaqs) {
    return (
      <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 40, textAlign: "center", color: G }}>
        <div style={{ fontWeight: 700, color: "#111827" }}>Overview content coming soon</div>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>

      {hasArticle && (
        <div style={{ background: "#fbfbfc", borderRadius: 14, border: "1px solid #e9eaec", overflow: "hidden" }}>
          <button
            onClick={() => setTocOpen(!tocOpen)}
            style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 22px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 32, height: 32, borderRadius: 9, background: `${P}14`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <List size={16} color={P} />
              </div>
              <div>
                <div style={{ fontSize: 10.5, color: G, marginBottom: 1, textTransform: "uppercase", letterSpacing: "0.04em" }}>{data.shortName} Overview</div>
                <div style={{ fontSize: 15.5, fontWeight: 800, color: "#111827" }}>Table of Contents</div>
              </div>
            </div>
            {tocOpen ? <ChevronUp size={18} color={G} /> : <ChevronDown size={18} color={G} />}
          </button>

          {tocOpen && (
            <div style={{ padding: "2px 22px 20px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "6px 24px" }}>
              {data.overviewArticle.map((section, i) => (
                <button
                  key={i}
                  onClick={() => scrollToSection(section.title)}
                  style={{ background: "none", border: "none", padding: "5px 0", textAlign: "left", cursor: "pointer", fontSize: 13.5, fontWeight: 600, color: "#2563eb", display: "flex", alignItems: "center", gap: 6 }}
                >
                  <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#93c5fd", flexShrink: 0 }} />
                  {section.title}
                </button>
              ))}
              {hasFaqs && (
                <button
                  onClick={() => scrollToSection("Frequently Asked Questions")}
                  style={{ background: "none", border: "none", padding: "5px 0", textAlign: "left", cursor: "pointer", fontSize: 13.5, fontWeight: 600, color: "#2563eb", display: "flex", alignItems: "center", gap: 6 }}
                >
                  <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#93c5fd", flexShrink: 0 }} />
                  Frequently Asked Questions
                </button>
              )}
            </div>
          )}
        </div>
      )}

      {hasArticle && data.overviewArticle.map((section, i) => (
        <ArticleSection key={i} section={section} data={data} P={P} O={O} onTabLink={goToTab} defaultOpen={i === 0} />
      ))}

      {hasFaqs && (
        <section
          id={slugify("Frequently Asked Questions")}
          style={{ background: "#fff", borderRadius: 14, border: "1px solid #e9eaec", padding: "20px 22px", boxShadow: "0 1px 2px rgba(16,24,40,0.04)", scrollMarginTop: 90 }}
        >
          <h2 style={{ fontSize: 17.5, fontWeight: 800, color: "#111827", margin: "0 0 16px", letterSpacing: "-0.01em" }}>
            Frequently Asked Questions — {data.shortName}
          </h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {data.faqs.map((faq, i) => {
              const open = openFaq === i;
              return (
                <div key={i} style={{ borderTop: i === 0 ? "none" : "1px solid #f3f4f6" }}>
                  <button
                    onClick={() => setOpenFaq(open ? -1 : i)}
                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, padding: "13px 0", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                  >
                    <span style={{ fontSize: 13.5, fontWeight: 700, color: "#111827" }}>{faq.q}</span>
                    {open ? <ChevronUp size={16} color={G} style={{ flexShrink: 0 }} /> : <ChevronDown size={16} color={G} style={{ flexShrink: 0 }} />}
                  </button>
                  {open && (
                    <p style={{ margin: "0 0 13px", fontSize: 13, color: "#374151", lineHeight: 1.65 }}>{faq.a}</p>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
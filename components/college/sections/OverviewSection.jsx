"use client";

import { useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { ChevronUp, ChevronDown, ArrowRight } from "lucide-react";

const G = "#6b7280";

// Maps a section title to the corresponding tab slug + label.
// Purely keyword-based so bennett.js content never needs to change.
const SECTION_TAB_LINKS = [
  { test: (t) => /course/i.test(t), slug: "courses", label: "Courses" },
  { test: (t) => /fee/i.test(t), slug: "fees", label: "Fees" },
  { test: (t) => /cutoff|cut-off|cut off/i.test(t), slug: "cutoffs", label: "Cut-offs" },
  { test: (t) => /admission/i.test(t), slug: "admissions", label: "Admissions" },
  { test: (t) => /placement/i.test(t), slug: "placements", label: "Placements" },
  { test: (t) => /scholarship/i.test(t), slug: "scholarships", label: "Scholarships" },
  { test: (t) => /campus|infrastructure|facilit/i.test(t), slug: "facilities", label: "Facilities" },
];

function getTabLink(title) {
  return SECTION_TAB_LINKS.find((m) => m.test(title)) || null;
}

function ArticleSection({ section, P, O, onTabLink }) {
  const tabLink = getTabLink(section.title);

  return (
    <section style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
      <h2 style={{ fontSize: 17, fontWeight: 700, color: P, margin: "0 0 12px" }}>
        {section.title}
      </h2>

      {section.intro && (
        <p style={{ fontSize: 13, color: "#374151", lineHeight: 1.75, margin: tabLink ? "0 0 6px" : "0 0 18px" }}>
          {section.intro}
        </p>
      )}

      {tabLink && (
        <button
          onClick={() => onTabLink(tabLink.slug)}
          style={{
            background: "none", border: "none", padding: 0, marginBottom: 18,
            cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 4,
            fontSize: 13, fontWeight: 700, color: "#2563eb",
          }}
        >
          See full {tabLink.label} details <ArrowRight size={13} />
        </button>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {section.blocks?.map((block, i) => (
          <div key={i}>
            <h3 style={{ fontSize: 14, fontWeight: 700, color: "#111827", margin: "0 0 6px" }}>
              {block.heading}
            </h3>

            {block.text && (
              <p style={{ fontSize: 13, color: "#374151", lineHeight: 1.7, margin: block.bullets?.length ? "0 0 8px" : 0 }}>
                {block.text}
              </p>
            )}

            {block.bullets?.length > 0 && (
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
                {block.bullets.map((b, bi) => (
                  <li key={bi} style={{ display: "flex", gap: 8, fontSize: 13, color: "#374151", lineHeight: 1.65 }}>
                    <span style={{ color: O, fontSize: 14, lineHeight: 1.65, flexShrink: 0 }}>•</span>
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {section.note && (
        <aside style={{ marginTop: 16, paddingTop: 14, borderTop: "1px solid #f3f4f6", display: "flex", gap: 8 }}>
          <span style={{ fontSize: 15 }}>ℹ️</span>
          <p style={{ margin: 0, fontSize: 12, color: G, lineHeight: 1.6, fontStyle: "italic" }}>{section.note}</p>
        </aside>
      )}
    </section>
  );
}

export default function OverviewSection({ data }) {
  const P = data.colors?.primary || "#004aad";
  const O = data.colors?.accent || "#f37021";
  const [openFaq, setOpenFaq] = useState(-1);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const goToTab = (slug) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", slug);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
    window.scrollTo({ top: 0, behavior: "smooth" });
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
      {hasArticle && data.overviewArticle.map((section, i) => (
        <ArticleSection key={i} section={section} P={P} O={O} onTabLink={goToTab} />
      ))}

      {hasFaqs && (
        <section style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
          <h2 style={{ fontSize: 14, fontWeight: 700, color: "#111827", margin: "0 0 14px" }}>
            Frequently Asked Questions — {data.shortName}
          </h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {data.faqs.map((faq, i) => {
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
        </section>
      )}
    </div>
  );
}
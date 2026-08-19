"use client";

const G = "#6b7280";

function ArticleSection({ section, P, O }) {
  return (
    <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
      <h2 style={{ fontSize: 17, fontWeight: 700, color: P, margin: "0 0 12px" }}>
        {section.title}
      </h2>

      {section.intro && (
        <p style={{ fontSize: 13, color: "#374151", lineHeight: 1.75, margin: "0 0 18px" }}>
          {section.intro}
        </p>
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
        <div style={{ marginTop: 16, paddingTop: 14, borderTop: "1px solid #f3f4f6", display: "flex", gap: 8 }}>
          <span style={{ fontSize: 15 }}>ℹ️</span>
          <p style={{ margin: 0, fontSize: 12, color: G, lineHeight: 1.6, fontStyle: "italic" }}>{section.note}</p>
        </div>
      )}
    </div>
  );
}

export default function OverviewSection({ data }) {
  const P = data.colors?.primary || "#004aad";
  const O = data.colors?.accent || "#f37021";

  if (!data.overviewArticle?.length) {
    return (
      <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 40, textAlign: "center", color: G }}>
        <div style={{ fontWeight: 700, color: "#111827" }}>Overview content coming soon</div>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
      {data.overviewArticle.map((section, i) => (
        <ArticleSection key={i} section={section} P={P} O={O} />
      ))}
    </div>
  );
}
const G = "#6b7280";

export default function OverviewSection({ data }) {
  const P = data.colors?.primary || "#004aad";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>

      {/* News & Notifications */}
      {data.news?.length > 0 && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
          <h2 style={{ fontSize: 16, fontWeight: 800, color: P, margin: "0 0 14px" }}>
            {data.shortName} News and Notifications
          </h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
            {data.news.map((n, i) => (
              <li key={i} style={{ display: "flex", gap: 8, fontSize: 13, color: "#374151", lineHeight: 1.6 }}>
                <span style={{ color: P, fontSize: 10, marginTop: 5, flexShrink: 0 }}>►</span>
                {n}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Success Stories */}
      {data.stories?.length > 0 && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
          <h2 style={{ fontSize: 16, fontWeight: 800, color: "#111827", margin: "0 0 14px" }}>College Success Stories</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {data.stories.map((s, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "10px 12px", background: "#f9fafb", borderRadius: 8, border: "1px solid #f3f4f6" }}>
                <span style={{ fontSize: 20 }}>{s.emoji}</span>
                <p style={{ margin: 0, fontSize: 13, color: "#374151", lineHeight: 1.5 }}>{s.title}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* About */}
      {data.about && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
          <h2 style={{ fontSize: 16, fontWeight: 800, color: "#111827", margin: "0 0 12px" }}>About {data.shortName}</h2>
          <p style={{ fontSize: 13, color: "#374151", lineHeight: 1.7, margin: "0 0 12px" }}>{data.about}</p>
          {data.aboutPoints?.length > 0 && (
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              {data.aboutPoints.map((p, i) => (
                <li key={i} style={{ display: "flex", gap: 8, fontSize: 13, color: "#374151" }}>
                  <span style={{ color: "#16a34a", fontWeight: 700, flexShrink: 0 }}>✓</span>
                  {p}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* Highlights */}
      {data.highlights?.length > 0 && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
          <h2 style={{ fontSize: 16, fontWeight: 800, color: "#111827", margin: "0 0 14px" }}>{data.shortName} Highlights 2026</h2>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tbody>
              {data.highlights.map(([label, value], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "#f9fafb" : "#fff" }}>
                  <td style={{ padding: "9px 14px", fontSize: 13, fontWeight: 600, color: "#374151", borderBottom: "1px solid #f3f4f6", width: "45%" }}>{label}</td>
                  <td style={{ padding: "9px 14px", fontSize: 13, color: "#111827", borderBottom: "1px solid #f3f4f6" }}>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Rankings */}
      {data.rankings?.length > 0 && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
          <h2 style={{ fontSize: 16, fontWeight: 800, color: "#111827", margin: "0 0 14px" }}>{data.shortName} Rankings 2025</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 12 }}>
            {data.rankings.map((r, i) => (
              <div key={i} style={{ background: "#eff6ff", borderRadius: 10, padding: "14px 16px", textAlign: "center", border: "1px solid #bfdbfe" }}>
                <div style={{ fontSize: 22, fontWeight: 900, color: P }}>{r.rank}</div>
                <div style={{ fontSize: 12, color: G, marginTop: 4 }}>{r.cat}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* FAQs */}
      {data.faqs?.length > 0 && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
          <h2 style={{ fontSize: 16, fontWeight: 800, color: "#111827", margin: "0 0 14px" }}>Frequently Asked Questions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {data.faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: "1px solid #f3f4f6", paddingBottom: 12 }}>
                <p style={{ margin: "0 0 6px", fontSize: 13, fontWeight: 700, color: "#111827" }}>Q. {faq.q}</p>
                <p style={{ margin: 0, fontSize: 13, color: "#374151", lineHeight: 1.6 }}>A. {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

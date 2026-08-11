const G = "#6b7280";

export default function CutoffSection({ data }) {
  const P = data.colors?.primary || "#004aad";

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

      {/* Cutoff Table */}
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

      {/* Cutoff Info Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
        {[
          { label: "Exam", value: "JEE Main 2026", icon: "📝" },
          { label: "Counselling", value: "UPTAC", icon: "🎓" },
          { label: "Category", value: "General / OBC / SC / ST", icon: "👥" },
          { label: "Mode", value: "Online", icon: "💻" },
        ].map((item, i) => (
          <div key={i} style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: "14px 16px" }}>
            <div style={{ fontSize: 20, marginBottom: 6 }}>{item.icon}</div>
            <div style={{ fontSize: 11, color: G, marginBottom: 4 }}>{item.label}</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#111827" }}>{item.value}</div>
          </div>
        ))}
      </div>

      {/* Note */}
      <div style={{ background: "#eff6ff", borderRadius: 10, border: "1px solid #bfdbfe", padding: 16 }}>
        <div style={{ display: "flex", gap: 10 }}>
          <span style={{ fontSize: 18 }}>ℹ️</span>
          <div style={{ fontSize: 12, color: "#1e40af", lineHeight: 1.6 }}>
            Cutoff ranks are based on <strong>UPTAC 2025</strong> counselling data. Actual cutoffs may vary every year
            based on number of applicants, seat availability, and exam difficulty. Always check official UPTAC website for latest cutoffs.
          </div>
        </div>
      </div>
    </div>
  );
}

const G = "#6b7280";

export default function PlacementsSection({ data }) {
  const P = data.colors?.primary || "#004aad";
  const pl = data.placements;

  if (!pl) return (
    <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 40, textAlign: "center", color: G }}>
      <div style={{ fontSize: 40, marginBottom: 12 }}>📊</div>
      <div style={{ fontWeight: 700, color: "#111827" }}>Placement data coming soon</div>
    </div>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>

      {/* Header */}
      <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
        <h2 style={{ fontSize: 16, fontWeight: 800, color: "#111827", margin: "0 0 4px" }}>
          {data.shortName} Placements 2025
        </h2>
        <p style={{ fontSize: 13, color: G, margin: 0 }}>
          Placement statistics, top recruiters and package details for {data.shortName}.
        </p>
      </div>

      {/* Stats Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12 }}>
        {[
          { label: "Highest Package", value: pl.highest, icon: "🏆", color: "#dcfce7", textColor: "#16a34a" },
          { label: "Average Package", value: pl.average, icon: "📈", color: "#dbeafe", textColor: "#1d4ed8" },
          { label: "Median Package", value: pl.medianUG, icon: "📊", color: "#fef3c7", textColor: "#92400e" },
          { label: "Placement %", value: pl.percentage, icon: "✅", color: "#f0fdf4", textColor: "#16a34a" },
          { label: "Companies", value: pl.companies, icon: "🏢", color: "#fdf4ff", textColor: "#7e22ce" },
          { label: "Total Offers", value: pl.totalOffers, icon: "📋", color: "#fff7ed", textColor: "#c2410c" },
        ].filter(s => s.value).map((s, i) => (
          <div key={i} style={{ background: s.color, borderRadius: 10, padding: "14px 16px", border: `1px solid ${s.color}` }}>
            <div style={{ fontSize: 20, marginBottom: 6 }}>{s.icon}</div>
            <div style={{ fontSize: 18, fontWeight: 900, color: s.textColor }}>{s.value}</div>
            <div style={{ fontSize: 11, color: G, marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Top Recruiters */}
      {pl.topRecruiters?.length > 0 && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: "#111827", margin: "0 0 14px" }}>Top Recruiters</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {pl.topRecruiters.map((r, i) => (
              <span key={i} style={{ background: "#f3f4f6", color: "#374151", fontSize: 12, fontWeight: 600, padding: "6px 14px", borderRadius: 20, border: "1px solid #e5e7eb" }}>
                {r}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Branch wise */}
      {pl.btechWise?.length > 0 && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", overflow: "hidden" }}>
          <div style={{ padding: "14px 20px", borderBottom: "1px solid #f3f4f6", background: "#f8fafc" }}>
            <h3 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: "#111827" }}>Branch-wise Placement 2025</h3>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#f8fafc" }}>
                  {["Branch", "Average Package", "Median Package"].map((h, i) => (
                    <th key={i} style={{ padding: "10px 14px", textAlign: "left", fontSize: 12, fontWeight: 700, color: G, borderBottom: "1px solid #e5e7eb" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pl.btechWise.map((b, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f9fafb", borderBottom: "1px solid #f3f4f6" }}>
                    <td style={{ padding: "11px 14px", fontSize: 13, fontWeight: 600, color: P, minWidth: 200 }}>{b.course}</td>
                    <td style={{ padding: "11px 14px", fontSize: 13, fontWeight: 700, color: "#16a34a" }}>{b.avg}</td>
                    <td style={{ padding: "11px 14px", fontSize: 13, color: "#374151" }}>{b.median}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

const G = "#6b7280";

export default function FeesSection({ data }) {
  const P = data.colors?.primary || "#004aad";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>

      {/* Header */}
      <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
        <h2 style={{ fontSize: 16, fontWeight: 800, color: "#111827", margin: "0 0 4px" }}>
          {data.shortName} Fees Structure 2026
        </h2>
        <p style={{ fontSize: 13, color: G, margin: 0 }}>
          Complete fee details for all programs offered at {data.shortName}.
        </p>
      </div>

      {/* Fees Table */}
      {data.fees?.length > 0 && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", overflow: "hidden" }}>
          <div style={{ padding: "14px 20px", borderBottom: "1px solid #f3f4f6", background: "#f8fafc" }}>
            <h3 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: "#111827" }}>Program-wise Fee Structure</h3>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#f8fafc" }}>
                  {["Program", "Tuition Fee", "Hostel Fee", "Total Fees", "Entrance Exam"].map((h, i) => (
                    <th key={i} style={{ padding: "10px 14px", textAlign: "left", fontSize: 12, fontWeight: 700, color: G, borderBottom: "1px solid #e5e7eb", whiteSpace: "nowrap" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.fees.map((f, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f9fafb", borderBottom: "1px solid #f3f4f6" }}>
                    <td style={{ padding: "11px 14px", fontSize: 13, fontWeight: 700, color: P }}>{f.prog}</td>
                    <td style={{ padding: "11px 14px", fontSize: 13, color: "#374151" }}>{f.tuition}</td>
                    <td style={{ padding: "11px 14px", fontSize: 13, color: "#374151" }}>{f.hostel}</td>
                    <td style={{ padding: "11px 14px", fontSize: 13, fontWeight: 700, color: "#16a34a" }}>{f.total}</td>
                    <td style={{ padding: "11px 14px", fontSize: 12, color: "#374151" }}>{f.exam}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Scholarships */}
      {data.scholarships?.length > 0 && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: "#111827", margin: "0 0 14px" }}>
            {data.shortName} Scholarships 2026
          </h3>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#f8fafc" }}>
                  {["Scholarship", "Eligibility", "Amount"].map((h, i) => (
                    <th key={i} style={{ padding: "10px 14px", textAlign: "left", fontSize: 12, fontWeight: 700, color: G, borderBottom: "1px solid #e5e7eb" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.scholarships.map((s, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f9fafb", borderBottom: "1px solid #f3f4f6" }}>
                    <td style={{ padding: "11px 14px", fontSize: 13, fontWeight: 600, color: "#111827" }}>{s.name}</td>
                    <td style={{ padding: "11px 14px", fontSize: 13, color: "#374151" }}>{s.eligibility}</td>
                    <td style={{ padding: "11px 14px", fontSize: 13, fontWeight: 700, color: "#16a34a" }}>{s.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Fee Note */}
      <div style={{ background: "#fffbeb", borderRadius: 10, border: "1px solid #fde68a", padding: 16 }}>
        <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
          <span style={{ fontSize: 18 }}>⚠️</span>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#92400e", marginBottom: 4 }}>Important Note</div>
            <div style={{ fontSize: 12, color: "#78350f", lineHeight: 1.6 }}>
              Fee structure is subject to change. Please verify with the official {data.shortName} website before applying.
              Additional charges like exam fees, library fees, etc. may apply separately.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

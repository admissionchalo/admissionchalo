const G = "#6b7280";

export default function CoursesSection({ data }) {
  const P = data.colors?.primary || "#004aad";
  const O = data.colors?.accent || "#f37021";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>

      {/* Header */}
      <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
        <h2 style={{ fontSize: 16, fontWeight: 800, color: "#111827", margin: "0 0 4px" }}>
          {data.shortName} Courses & Fees 2026
        </h2>
        <p style={{ fontSize: 13, color: G, margin: 0 }}>
          {data.shortName} offers {data.courses?.length || 0}+ courses across multiple streams.
        </p>
      </div>

      {/* Courses Table */}
      {data.courses?.length > 0 && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", overflow: "hidden" }}>
          <div style={{ padding: "14px 20px", borderBottom: "1px solid #f3f4f6", background: "#f8fafc" }}>
            <h3 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: "#111827" }}>All Courses</h3>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#f8fafc" }}>
                  {["Course Name", "Mode", "Duration", "Total Fees", "Seats", "Entrance Exam"].map((h, i) => (
                    <th key={i} style={{ padding: "10px 14px", textAlign: "left", fontSize: 12, fontWeight: 700, color: G, borderBottom: "1px solid #e5e7eb", whiteSpace: "nowrap" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.courses.map((c, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f9fafb", borderBottom: "1px solid #f3f4f6" }}>
                    <td style={{ padding: "11px 14px", fontSize: 13, fontWeight: 600, color: P, minWidth: 220 }}>{c.name}</td>
                    <td style={{ padding: "11px 14px", fontSize: 12, color: "#374151", whiteSpace: "nowrap" }}>{c.mode}</td>
                    <td style={{ padding: "11px 14px", fontSize: 12, color: "#374151", whiteSpace: "nowrap" }}>{c.duration}</td>
                    <td style={{ padding: "11px 14px", fontSize: 12, fontWeight: 700, color: "#16a34a", whiteSpace: "nowrap" }}>{c.fees}</td>
                    <td style={{ padding: "11px 14px", fontSize: 12, color: "#374151", whiteSpace: "nowrap" }}>{c.seats || "—"}</td>
                    <td style={{ padding: "11px 14px", fontSize: 12, color: "#374151", whiteSpace: "nowrap" }}>{c.exam}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Highlights */}
      <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
        <h3 style={{ fontSize: 14, fontWeight: 700, color: "#111827", margin: "0 0 14px" }}>Course Highlights</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
          {[
            { label: "Total Courses", value: `${data.courses?.length || 0}+` },
            { label: "Entrance Exams", value: [...new Set(data.courses?.map(c => c.exam) || [])].join(", ") || "—" },
            { label: "Course Modes", value: "Full Time" },
            { label: "Affiliation", value: data.affiliation?.split(" ").slice(0, 3).join(" ") + "..." || "—" },
          ].map((item, i) => (
            <div key={i} style={{ background: "#f9fafb", borderRadius: 8, padding: "12px 14px", border: "1px solid #f3f4f6" }}>
              <div style={{ fontSize: 11, color: G, marginBottom: 4 }}>{item.label}</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#111827" }}>{item.value}</div>
            </div>
          ))}
        </div>
      </div>

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
    </div>
  );
}

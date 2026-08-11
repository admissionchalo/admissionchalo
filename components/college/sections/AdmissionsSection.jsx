const G = "#6b7280";

export default function AdmissionsSection({ data }) {
  const P = data.colors?.primary || "#004aad";
  const O = data.colors?.accent || "#f37021";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>

      {/* Header */}
      <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
        <h2 style={{ fontSize: 16, fontWeight: 800, color: "#111827", margin: "0 0 4px" }}>
          {data.shortName} Admissions 2026
        </h2>
        <p style={{ fontSize: 13, color: G, margin: 0 }}>
          Admission process, eligibility criteria and important dates for {data.shortName}.
        </p>
      </div>

      {/* Admission Table */}
      {data.admissions?.length > 0 && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", overflow: "hidden" }}>
          <div style={{ padding: "14px 20px", borderBottom: "1px solid #f3f4f6", background: "#f8fafc" }}>
            <h3 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: "#111827" }}>Admission Process 2026</h3>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#f8fafc" }}>
                  {["Program", "Eligibility", "Entrance Exam", "Counselling", "Seats"].map((h, i) => (
                    <th key={i} style={{ padding: "10px 14px", textAlign: "left", fontSize: 12, fontWeight: 700, color: G, borderBottom: "1px solid #e5e7eb", whiteSpace: "nowrap" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.admissions.map((a, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f9fafb", borderBottom: "1px solid #f3f4f6" }}>
                    <td style={{ padding: "11px 14px", fontSize: 13, fontWeight: 700, color: P, whiteSpace: "nowrap" }}>{a.prog}</td>
                    <td style={{ padding: "11px 14px", fontSize: 12, color: "#374151", minWidth: 180 }}>{a.eligibility}</td>
                    <td style={{ padding: "11px 14px", fontSize: 12, color: "#374151", whiteSpace: "nowrap" }}>{a.exam || "—"}</td>
                    <td style={{ padding: "11px 14px", fontSize: 12, color: "#374151", whiteSpace: "nowrap" }}>{a.counselling}</td>
                    <td style={{ padding: "11px 14px", fontSize: 13, fontWeight: 700, color: "#111827", whiteSpace: "nowrap" }}>{a.seats || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Important Dates */}
      {data.admissionDates?.length > 0 && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: "#111827", margin: "0 0 14px" }}>Important Dates 2026</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {data.admissionDates.map(([event, date], i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "11px 0", borderBottom: i < data.admissionDates.length - 1 ? "1px solid #f3f4f6" : "none", flexWrap: "wrap", gap: 8 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: P, flexShrink: 0 }} />
                  <span style={{ fontSize: 13, color: "#374151" }}>{event}</span>
                </div>
                <span style={{ fontSize: 13, fontWeight: 700, color: O, background: "#fff7ed", padding: "3px 12px", borderRadius: 20, border: "1px solid #fed7aa" }}>{date}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Steps */}
      <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
        <h3 style={{ fontSize: 14, fontWeight: 700, color: "#111827", margin: "0 0 16px" }}>How to Apply — Step by Step</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {[
            { step: "1", title: "Check Eligibility", desc: "Verify you meet the minimum eligibility criteria for your chosen program." },
            { step: "2", title: "Appear in Entrance Exam", desc: "Register and appear for JEE Main / NEET / CAT / MAT as applicable." },
            { step: "3", title: "Apply Online", desc: `Visit ${data.shortName}'s official website and fill the application form.` },
            { step: "4", title: "Counselling & Seat Allotment", desc: "Participate in UPTAC / direct counselling for seat allotment." },
            { step: "5", title: "Document Verification & Admission", desc: "Submit documents and pay fees to confirm admission." },
          ].map((s, i) => (
            <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              <div style={{ width: 28, height: 28, borderRadius: "50%", background: P, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ color: "#fff", fontSize: 12, fontWeight: 800 }}>{s.step}</span>
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#111827", marginBottom: 2 }}>{s.title}</div>
                <div style={{ fontSize: 12, color: G, lineHeight: 1.5 }}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

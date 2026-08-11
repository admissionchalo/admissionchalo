const G = "#6b7280";

export default function ReviewsSection({ data }) {
  const P = data.colors?.primary || "#004aad";
  const reviews = data.reviews;

  if (!reviews) return (
    <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 40, textAlign: "center", color: G }}>
      <div style={{ fontSize: 40, marginBottom: 12 }}>⭐</div>
      <div style={{ fontWeight: 700, color: "#111827" }}>No reviews yet</div>
    </div>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>

      {/* Header */}
      <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
        <h2 style={{ fontSize: 16, fontWeight: 800, color: "#111827", margin: "0 0 4px" }}>
          {data.shortName} Reviews & Ratings
        </h2>
        <p style={{ fontSize: 13, color: G, margin: 0 }}>Based on {reviews.total}+ student reviews</p>
      </div>

      {/* Overall Rating */}
      <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
        <div style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
          {/* Big rating */}
          <div style={{ textAlign: "center", minWidth: 100 }}>
            <div style={{ fontSize: 48, fontWeight: 900, color: P, lineHeight: 1 }}>{reviews.overall}</div>
            <div style={{ fontSize: 16, color: "#f59e0b", marginTop: 4 }}>{"★".repeat(Math.round(reviews.overall))}</div>
            <div style={{ fontSize: 12, color: G, marginTop: 4 }}>{reviews.total}+ Reviews</div>
          </div>

          {/* Breakdown bars */}
          <div style={{ flex: 1, minWidth: 200 }}>
            {reviews.breakdown?.map((b, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <span style={{ fontSize: 12, color: "#374151", minWidth: 160 }}>{b.label}</span>
                <div style={{ flex: 1, height: 6, background: "#f3f4f6", borderRadius: 4, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${(b.val / 5) * 100}%`, background: P, borderRadius: 4 }} />
                </div>
                <span style={{ fontSize: 12, fontWeight: 700, color: "#111827", minWidth: 28 }}>{b.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Review Cards */}
      {reviews.list?.length > 0 && (
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {reviews.list.map((r, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 18 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10, flexWrap: "wrap", gap: 8 }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "#111827" }}>{r.name}</div>
                  <div style={{ fontSize: 12, color: G, marginTop: 2 }}>{r.course} · Batch {r.batch}</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 4, background: "#f59e0b", color: "#fff", padding: "4px 10px", borderRadius: 20 }}>
                  <span style={{ fontSize: 12, fontWeight: 700 }}>★ {r.rating}</span>
                </div>
              </div>
              <p style={{ margin: 0, fontSize: 13, color: "#374151", lineHeight: 1.7 }}>{r.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

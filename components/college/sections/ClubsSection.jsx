const G = "#6b7280";

export default function ClubsSection({ data }) {
  const P = data.colors?.primary || "#004aad";

  if (!data.clubs?.length) return (
    <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 40, textAlign: "center", color: G }}>
      <div style={{ fontSize: 40, marginBottom: 12 }}>🎭</div>
      <div style={{ fontWeight: 700, color: "#111827" }}>Clubs data coming soon</div>
    </div>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>

      {/* Header */}
      <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
        <h2 style={{ fontSize: 16, fontWeight: 800, color: "#111827", margin: "0 0 4px" }}>
          {data.shortName} Student Clubs & Activities
        </h2>
        <p style={{ fontSize: 13, color: G, margin: 0 }}>
          Student clubs, societies and extracurricular activities at {data.shortName}.
        </p>
      </div>

      {/* Clubs Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
        {data.clubs.map((club, i) => (
          <div key={i} style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 18, display: "flex", gap: 14, alignItems: "flex-start", transition: "box-shadow 0.2s" }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: "#eff6ff", border: `2px solid #dbeafe`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>
              {club.emoji}
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#111827", marginBottom: 4 }}>{club.name}</div>
              <div style={{ fontSize: 12, color: P, fontWeight: 600, background: "#eff6ff", padding: "2px 10px", borderRadius: 20, display: "inline-block" }}>{club.role}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Campus Life */}
      <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
        <h3 style={{ fontSize: 14, fontWeight: 700, color: "#111827", margin: "0 0 14px" }}>Campus Life at {data.shortName}</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 10 }}>
          {[
            { icon: "🎉", label: "Annual Fest", desc: "Cultural & Tech fests every year" },
            { icon: "🏆", label: "Sports Events", desc: "Inter-college sports competitions" },
            { icon: "💡", label: "Hackathons", desc: "National level coding events" },
            { icon: "🎓", label: "Guest Lectures", desc: "Industry experts & alumni talks" },
          ].map((item, i) => (
            <div key={i} style={{ background: "#f9fafb", borderRadius: 8, padding: "14px", border: "1px solid #f3f4f6", textAlign: "center" }}>
              <div style={{ fontSize: 24, marginBottom: 6 }}>{item.icon}</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#111827", marginBottom: 4 }}>{item.label}</div>
              <div style={{ fontSize: 11, color: G }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

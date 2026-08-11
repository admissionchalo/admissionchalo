const G = "#6b7280";

const FACILITY_ICONS = {
  "Central Library": "📚",
  "Hostel": "🏠",
  "IT Infrastructure": "💻",
  "Cafeteria": "🍽️",
  "Canteen": "🍽️",
  "Sports Complex": "⚽",
  "Auditorium": "🎭",
  "Medical": "🏥",
  "Hospital": "🏥",
  "Transport": "🚌",
  "Wi-Fi": "📶",
  "Lab": "🔬",
};

function getIcon(name) {
  for (const [key, icon] of Object.entries(FACILITY_ICONS)) {
    if (name.toLowerCase().includes(key.toLowerCase())) return icon;
  }
  return "🏛️";
}

export default function FacilitiesSection({ data }) {
  const P = data.colors?.primary || "#004aad";

  if (!data.facilities?.length) return (
    <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 40, textAlign: "center", color: G }}>
      <div style={{ fontSize: 40, marginBottom: 12 }}>🏛️</div>
      <div style={{ fontWeight: 700, color: "#111827" }}>Facilities data coming soon</div>
    </div>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>

      {/* Header */}
      <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
        <h2 style={{ fontSize: 16, fontWeight: 800, color: "#111827", margin: "0 0 4px" }}>
          {data.shortName} Facilities & Infrastructure
        </h2>
        <p style={{ fontSize: 13, color: G, margin: 0 }}>
          Campus amenities and infrastructure available at {data.shortName}.
        </p>
      </div>

      {/* Facilities Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
        {data.facilities.map((f, i) => (
          <div key={i} style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 16, display: "flex", gap: 12, alignItems: "flex-start" }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>
              {getIcon(f.name)}
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#111827", marginBottom: 4 }}>{f.name}</div>
              <div style={{ fontSize: 12, color: G, lineHeight: 1.5 }}>{f.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Campus Highlights */}
      <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
        <h3 style={{ fontSize: 14, fontWeight: 700, color: "#111827", margin: "0 0 14px" }}>Campus Highlights</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 10 }}>
          {[
            { label: "Campus Size", value: data.campusSize || "—" },
            { label: "Established", value: data.established || "—" },
            { label: "Total Facilities", value: `${data.facilities.length}+` },
            { label: "Location", value: data.location || "—" },
          ].map((item, i) => (
            <div key={i} style={{ background: "#f9fafb", borderRadius: 8, padding: "12px 14px", border: "1px solid #f3f4f6" }}>
              <div style={{ fontSize: 11, color: G, marginBottom: 4 }}>{item.label}</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#111827" }}>{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

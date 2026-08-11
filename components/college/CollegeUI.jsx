export function Card({ children, style = {} }) {
  return (
    <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20, boxShadow: "0 1px 4px rgba(0,0,0,0.05)", ...style }}>
      {children}
    </div>
  );
}

export function SecTitle({ children, noGap }) {
  return (
    <h3 style={{ margin: noGap ? "0" : "0 0 14px", fontSize: 17, fontWeight: 800, color: "#004aad" }}>
      {children}
    </h3>
  );
}

export function Stars({ n }) {
  return (
    <span style={{ color: "#f59e0b", fontSize: 13 }}>
      {"★".repeat(Math.round(n))}{"☆".repeat(5 - Math.round(n))}
    </span>
  );
}

export function Bar({ val }) {
  return (
    <div style={{ flex: 1, background: "#e5e7eb", borderRadius: 4, height: 6, overflow: "hidden" }}>
      <div style={{ background: "#f59e0b", height: "100%", width: `${(val / 5) * 100}%`, borderRadius: 4 }} />
    </div>
  );
}

export function TableHead({ cols }) {
  return (
    <thead>
      <tr style={{ background: "#1a1a2e", color: "#fff" }}>
        {cols.map(h => (
          <th key={h} style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700, whiteSpace: "nowrap" }}>{h}</th>
        ))}
      </tr>
    </thead>
  );
}

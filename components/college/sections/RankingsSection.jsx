"use client";

import { useState } from "react";
import { TrendingUp, ChevronDown, ArrowUpRight, Star } from "lucide-react";

const G = "#6b7280";

function PublisherIcon({ item, O }) {
  if (item.publisherLogo) {
    return (
      <div style={{ width: 44, height: 44, borderRadius: 10, flexShrink: 0, background: "#fff", border: "1px solid #e5e7eb", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <img src={item.publisherLogo} alt={item.publisher || "Ranking publisher"} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
      </div>
    );
  }
  return (
    <div style={{ width: 44, height: 44, borderRadius: 10, flexShrink: 0, background: `${O}14`, border: `1px solid ${O}33`, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <TrendingUp size={19} color={O} />
    </div>
  );
}

function RankingRow({ item, P, O, isLast }) {
  return (
    <div style={{ padding: "18px 20px", borderBottom: isLast ? "none" : "1px solid #f3f4f6" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, minWidth: 0 }}>
          <PublisherIcon item={item} O={O} />
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#111827" }}>{item.category || item.cat}</div>
            {item.publisher && (
              <div style={{ fontSize: 12, color: G, marginTop: 2 }}>
                {item.publisher}{item.year ? ` · ${item.year}` : ""}
              </div>
            )}
          </div>
        </div>
        <div style={{ textAlign: "right", flexShrink: 0 }}>
          <div style={{ fontSize: 10.5, color: G, fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.3 }}>Rank</div>
          <div style={{ fontSize: 19, fontWeight: 800, color: P, lineHeight: 1.2 }}>{item.rank}</div>
        </div>
      </div>

      {item.badge && (
        <div style={{ marginTop: 12, marginLeft: 58, display: "flex", alignItems: "flex-start", gap: 8, background: "#fff7e6", border: "1px solid #fde8bd", borderRadius: 8, padding: "9px 12px" }}>
          <Star size={14} color="#e8a317" fill="#e8a317" style={{ flexShrink: 0, marginTop: 1 }} />
          <span style={{ fontSize: 12, color: "#7a5b12", lineHeight: 1.55 }}>{item.badge}</span>
        </div>
      )}
    </div>
  );
}

function ComparisonBlock({ item, data, P }) {
  const [open, setOpen] = useState(true);
  if (!item.comparisonRows?.length) return null;

  return (
    <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", overflow: "hidden" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 20px", background: "#f8fafc", border: "none", cursor: "pointer", textAlign: "left" }}
      >
        <div>
          <div style={{ fontSize: 11, color: G, marginBottom: 2 }}>{data.shortName} Ranking</div>
          <h2 style={{ fontSize: 15, fontWeight: 800, color: "#111827", margin: 0 }}>{item.publisher} Ranking Comparison</h2>
        </div>
        <ChevronDown size={18} color={G} style={{ transition: "transform 0.2s", transform: open ? "rotate(180deg)" : "rotate(0deg)", flexShrink: 0 }} />
      </button>

      {open && (
        <div style={{ padding: 20 }}>
          {item.comparisonIntro && (
            <p style={{ fontSize: 13, color: "#374151", lineHeight: 1.75, margin: "0 0 16px" }}>{item.comparisonIntro}</p>
          )}
          <div style={{ background: "#eff6ff", borderRadius: "8px 8px 0 0", padding: "10px 16px", fontSize: 12.5, fontWeight: 700, color: "#111827" }}>
            {data.name} vs Other Institutes — {item.publisher} Ranking {item.year || ""}
          </div>
          <div style={{ overflowX: "auto", border: "1px solid #eff6ff", borderTop: "none", borderRadius: "0 0 8px 8px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={{ padding: "10px 14px", textAlign: "left", fontSize: 12, color: G, borderBottom: "1px solid #e5e7eb" }}>College Name</th>
                  <th style={{ padding: "10px 14px", textAlign: "right", fontSize: 12, color: G, borderBottom: "1px solid #e5e7eb" }}>
                    {item.comparisonColumnLabel || `${item.category} ${item.year || ""}`}
                  </th>
                </tr>
              </thead>
              <tbody>
                {item.comparisonRows.map((row, i) => {
                  const isSelf = row.college === data.name || row.college === data.shortName;
                  return (
                    <tr key={i} style={{ background: isSelf ? "#eff6ff" : "transparent" }}>
                      <td style={{ padding: "10px 14px", fontSize: 13, fontWeight: isSelf ? 700 : 500, color: isSelf ? P : "#2563eb", borderBottom: "1px solid #f3f4f6" }}>{row.college}</td>
                      <td style={{ padding: "10px 14px", fontSize: 13, fontWeight: 700, color: isSelf ? P : "#111827", textAlign: "right", borderBottom: "1px solid #f3f4f6" }}>{row.rank}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

function SimilarCollegesBlock({ item, data, P }) {
  if (!item.similarRows?.length) return null;

  return (
    <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
      <h2 style={{ fontSize: 14, fontWeight: 800, color: "#111827", margin: "0 0 12px" }}>
        Similar Ranked {item.category} Colleges by {item.publisher}
      </h2>

      <span style={{ display: "inline-block", fontSize: 12, fontWeight: 700, color: "#111827", border: "1px solid #e5e7eb", borderRadius: 20, padding: "5px 16px", marginBottom: 14 }}>
        {item.category}
      </span>

      <div style={{ overflowX: "auto", border: "1px solid #eff6ff", borderRadius: 8 }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#eff6ff" }}>
              <th style={{ padding: "10px 14px", textAlign: "left", fontSize: 12, color: "#111827", fontWeight: 700 }}>College</th>
              <th style={{ padding: "10px 14px", textAlign: "right", fontSize: 12, color: "#111827", fontWeight: 700 }}>Ranking</th>
            </tr>
          </thead>
          <tbody>
            {item.similarRows.map((row, i) => {
              const isSelf = row.college === data.name || row.college === data.shortName;
              return (
                <tr key={i} style={{ background: isSelf ? "#eff6ff" : "transparent" }}>
                  <td style={{ padding: "12px 14px", fontSize: 13, borderBottom: "1px solid #f3f4f6" }}>
                    <div style={{ fontWeight: isSelf ? 700 : 500, color: isSelf ? P : "#111827" }}>{row.college}</div>
                    {!isSelf && (
                      <div style={{ display: "inline-flex", alignItems: "center", gap: 3, fontSize: 11.5, color: "#2563eb", fontWeight: 600, marginTop: 3 }}>
                        <ArrowUpRight size={12} /> Compare
                      </div>
                    )}
                  </td>
                  <td style={{ padding: "12px 14px", fontSize: 13, fontWeight: 700, color: "#111827", textAlign: "right", borderBottom: "1px solid #f3f4f6" }}>{row.rank}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function RankingsSection({ data }) {
  const P = data.colors?.primary || "#004aad";
  const O = data.colors?.accent || "#f37021";
  const name = data.name || data.shortName;

  const rankingsList = data.rankingsDetailed?.length ? data.rankingsDetailed : (data.rankings || []);

  const introText = data.rankingsIntro ||
    `${name} is one of India's top institutes. It is ranked well by leading publishers across categories such as Management, Science and University rankings. The institute is well-known for its structured academic curriculum, excellent faculty and well-laid infrastructure.`;

  const guidanceText = data.rankingsGuidance ||
    `${name} ranking can vary depending on the ranking organisation, category and year. Students should check the year and methodology before using a ranking for comparison. Ranking should not be the only factor in choosing ${name} — course curriculum, faculty, fees, placements, infrastructure, scholarships and campus life should also be considered.`;

  const faqs = data.rankingsFaqs || [
    { q: `What is the ranking of ${name}?`, a: "It depends on the ranking organisation, category and year." },
    { q: `Is ${name} a good private university?`, a: `It is a private university option in ${data.location || "the region"}; compare course-specific factors.` },
    { q: `Does ${name} have a NIRF ranking?`, a: "Check the latest NIRF list and relevant category for the current year." },
  ];

  const [openFaq, setOpenFaq] = useState(null);

  if (!rankingsList.length) return (
    <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 40, textAlign: "center", color: G }}>
      <div style={{ fontSize: 40, marginBottom: 12 }}>🏆</div>
      <div style={{ fontWeight: 700, color: "#111827" }}>Ranking data coming soon</div>
    </div>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>

      {/* Header + intro + guidance paragraph, all at the top */}
      <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 22 }}>
        <div style={{ fontSize: 11, color: G, marginBottom: 4 }}>{data.shortName}</div>
        <h1 style={{ fontSize: 19, fontWeight: 800, color: "#111827", margin: "0 0 14px" }}>
          {name} Ranking 2026
        </h1>
        <p style={{ fontSize: 13.5, color: "#374151", lineHeight: 1.8, margin: "0 0 14px" }}>{introText}</p>
        <p style={{ fontSize: 13.5, color: "#374151", lineHeight: 1.8, margin: 0 }}>{guidanceText}</p>
      </div>

      {/* Ranking list — publisher / category / rank / badge */}
      <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", overflow: "hidden" }}>
        <div style={{ padding: "16px 20px", borderBottom: "1px solid #f3f4f6" }}>
          <h2 style={{ fontSize: 15, fontWeight: 800, color: "#111827", margin: 0 }}>Ranking Highlights</h2>
        </div>
        {rankingsList.map((item, i) => (
          <RankingRow key={i} item={item} P={P} O={O} isLast={i === rankingsList.length - 1} />
        ))}
      </div>

      {/* Comparison + Similar colleges blocks (only for detailed entries) */}
      {data.rankingsDetailed?.map((item, i) => (
        <div key={i} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <ComparisonBlock item={item} data={data} P={P} />
          <SimilarCollegesBlock item={item} data={data} P={P} />
        </div>
      ))}

      {/* FAQ accordion */}
      {faqs.length > 0 && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
          <h2 style={{ fontSize: 16, fontWeight: 800, color: "#0f172a", margin: "0 0 14px" }}>Frequently Asked Questions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 10, overflow: "hidden" }}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, background: "transparent", border: "none", cursor: "pointer", padding: "14px 18px", textAlign: "left" }}
                  >
                    <span style={{ fontSize: 14, fontWeight: 700, color: "#0f172a" }}>{f.q}</span>
                    <ChevronDown size={18} color="#9ca3af" style={{ flexShrink: 0, transition: "transform 0.2s", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 18px 16px" }}>
                      <p style={{ fontSize: 13, color: G, margin: 0, lineHeight: 1.6 }}>{f.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
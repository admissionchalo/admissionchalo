"use client";

import { useState } from "react";
import {
  ShieldCheck, Play, BookOpen, HeartPulse, UtensilsCrossed, Dumbbell,
  Home, FlaskConical, Gavel, Wifi, Bus, Music, PersonStanding,
  Snowflake, Store,
} from "lucide-react";

const G = "#6b7280";

const DETAIL_ICONS = {
  library: BookOpen,
  medical: HeartPulse,
  cafeteria: UtensilsCrossed,
  sports: Dumbbell,
  security: ShieldCheck,
  hostel: Home,
  labs: FlaskConical,
};

const TAG_ICONS = {
  court: Gavel,
  gym: Dumbbell,
  hospital: HeartPulse,
  wifi: Wifi,
  bus: Bus,
  music: Music,
  dance: PersonStanding,
  snow: Snowflake,
  store: Store,
};

function FacilityVideoCard({ video }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div style={{ borderRadius: 10, overflow: "hidden", border: "1px solid #e5e7eb", background: "#000" }}>
      <div style={{ position: "relative", aspectRatio: "16/9" }}>
        {playing && video.youtubeId ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", padding: 0, border: "none", cursor: "pointer", background: "none" }}
          >
            <img src={video.thumbnail} alt={video.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0.1))" }} />
            <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: 48, height: 48, borderRadius: "50%", background: "#dc2626", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Play size={18} color="#fff" fill="#fff" style={{ marginLeft: 2 }} />
            </div>
            <div style={{ position: "absolute", left: 12, bottom: 10, right: 12, textAlign: "left" }}>
              <div style={{ color: "#fff", fontSize: 12.5, fontWeight: 700, textShadow: "0 2px 6px rgba(0,0,0,0.5)", lineHeight: 1.3 }}>{video.title}</div>
              {video.channel && <div style={{ color: "#d1d5db", fontSize: 11, marginTop: 2 }}>{video.channel}</div>}
            </div>
          </button>
        )}
      </div>
    </div>
  );
}

export default function FacilitiesSection({ data }) {
  const P = data.colors?.primary || "#004aad";
  const O = data.colors?.accent || "#f37021";

  if (!data.facilitiesDetailed?.length) return (
    <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 40, textAlign: "center", color: G }}>
      <Home size={40} color={G} style={{ marginBottom: 12 }} />
      <div style={{ fontWeight: 700, color: "#111827" }}>Facilities data coming soon</div>
    </div>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>

      {/* Header */}
      <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
        <h2 style={{ fontSize: 17, fontWeight: 700, color: P, margin: "0 0 4px" }}>
          {data.shortName} Facilities & Infrastructure
        </h2>
        <p style={{ fontSize: 13, color: G, margin: 0 }}>
          Campus amenities and infrastructure available at {data.shortName}.
        </p>
      </div>

      {/* Author byline + intro */}
      {(data.facilitiesAuthor || data.facilitiesIntro) && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
          {data.facilitiesAuthor && (
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: P }}>{data.facilitiesAuthor.name}</span>
              <ShieldCheck size={14} color="#16a34a" fill="#16a34a" />
            </div>
          )}
          {data.facilitiesAuthor?.updatedDate && (
            <div style={{ fontSize: 11.5, color: G, marginBottom: 12 }}>Updated on {data.facilitiesAuthor.updatedDate}</div>
          )}
          {data.facilitiesIntro && (
            <p style={{ fontSize: 13, color: "#374151", lineHeight: 1.75, margin: 0 }}>{data.facilitiesIntro}</p>
          )}
        </div>
      )}

      {/* Detailed facility descriptions */}
      <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", overflow: "hidden" }}>
        <div style={{ padding: "16px 20px", borderBottom: "1px solid #f3f4f6", background: "#f8fafc" }}>
          <h3 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: "#111827" }}>Infrastructure / Facilities</h3>
        </div>
        <div>
          {data.facilitiesDetailed.map((f, i) => {
            const Icon = DETAIL_ICONS[f.icon] || Home;
            return (
              <div
                key={i}
                style={{
                  display: "flex", gap: 18, padding: "18px 20px",
                  borderTop: i === 0 ? "none" : "1px solid #f3f4f6", flexWrap: "wrap",
                }}
              >
                <div style={{ width: 70, flexShrink: 0, textAlign: "center" }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 10, margin: "0 auto 6px",
                    background: `${O}14`, display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Icon size={22} color={O} strokeWidth={1.8} />
                  </div>
                  <div style={{ fontSize: 11.5, fontWeight: 700, color: "#111827" }}>{f.label}</div>
                </div>
                <div style={{ flex: 1, minWidth: 220 }}>
                  <p style={{ margin: "0 0 8px", fontSize: 13, color: "#374151", lineHeight: 1.7 }}>{f.desc}</p>
                  {f.tags?.length > 0 && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {f.tags.map((t, ti) => (
                        <span key={ti} style={{ fontSize: 11.5, color: P, background: `${P}0D`, border: `1px solid ${P}22`, padding: "3px 10px", borderRadius: 20 }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Campus tour videos */}
      {data.facilityVideos?.length > 0 && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: "#111827", margin: "0 0 14px" }}>
            Campus Tour Videos
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14 }}>
            {data.facilityVideos.map((v, i) => (
              <FacilityVideoCard key={i} video={v} />
            ))}
          </div>
        </div>
      )}

      {/* Quick facility icon tags */}
      {data.facilityQuickTags?.length > 0 && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))", gap: 16 }}>
            {data.facilityQuickTags.map((t, i) => {
              const Icon = TAG_ICONS[t.icon] || Home;
              return (
                <div key={i} style={{ textAlign: "center" }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 10, margin: "0 auto 8px",
                    background: `${P}0D`, display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Icon size={21} color={P} strokeWidth={1.8} />
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "#374151" }}>{t.label}</div>
                </div>
              );
            })}
          </div>

          {data.facilityOtherTags?.length > 0 && (
            <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid #f3f4f6" }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#111827", marginBottom: 8 }}>Other Facilities:</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {data.facilityOtherTags.map((tag, i) => (
                  <span key={i} style={{ fontSize: 12, color: "#374151", background: "#f9fafb", border: "1px solid #e5e7eb", padding: "5px 12px", borderRadius: 20 }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Campus Highlights */}
      <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
        <h3 style={{ fontSize: 14, fontWeight: 700, color: "#111827", margin: "0 0 14px" }}>Campus Highlights</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 10 }}>
          {[
            { label: "Campus Size", value: data.campusSize || "—" },
            { label: "Established", value: data.established || "—" },
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
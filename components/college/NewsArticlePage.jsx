"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Eye, Clock, Share2 } from "lucide-react";

const G = "#6b7280";

export default function NewsArticlePage({ data, article }) {
  const router = useRouter();
  const P = data.colors?.primary || "#004aad";
  const O = data.colors?.accent || "#f37021";

  const otherNews = (data.news || []).filter((n) => n.slug !== article.slug).slice(0, 5);

  return (
    <div style={{ background: "#f3f4f6", minHeight: "100vh", fontFamily: "Arial, Helvetica, sans-serif", color: "#111827" }}>

      <div style={{ background: "#fff", borderBottom: "1px solid #e5e7eb", padding: "14px 20px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <button
            onClick={() => router.push(`/college/${data.id}?tab=overview`)}
            style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", cursor: "pointer", fontSize: 13, fontWeight: 600, color: P, padding: 0 }}
          >
            <ArrowLeft size={16} /> Back to {data.shortName}
          </button>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "24px 20px 60px", display: "grid", gridTemplateColumns: "1fr 320px", gap: 24, alignItems: "flex-start" }}>

        <article style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", overflow: "hidden" }}>

          {article.image && (
            <img src={article.image} alt={article.title} style={{ width: "100%", maxHeight: 380, objectFit: "cover", display: "block" }} />
          )}

          <div style={{ padding: "24px 28px" }}>
            {article.category && (
              <span style={{ fontSize: 11, fontWeight: 700, color: O, background: `${O}1A`, padding: "3px 10px", borderRadius: 20, textTransform: "uppercase", letterSpacing: 0.4, display: "inline-block", marginBottom: 12 }}>
                {article.category}
              </span>
            )}

            <h1 style={{ fontSize: 26, fontWeight: 800, color: "#111827", lineHeight: 1.3, margin: "0 0 14px" }}>
              {article.title}
            </h1>

            <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap", paddingBottom: 18, marginBottom: 22, borderBottom: "1px solid #f3f4f6" }}>
              {article.author && (
                <span style={{ fontSize: 13, fontWeight: 700, color: "#374151" }}>{article.author}</span>
              )}
              {article.date && (
                <span style={{ fontSize: 12.5, color: G, display: "flex", alignItems: "center", gap: 4 }}>
                  <Clock size={13} /> {article.date}
                </span>
              )}
              {article.views && (
                <span style={{ fontSize: 12.5, color: G, display: "flex", alignItems: "center", gap: 4 }}>
                  <Eye size={13} /> {article.views} views
                </span>
              )}
            </div>

            {(article.content?.length ? article.content : [article.detail]).filter(Boolean).map((para, i) => (
              <p key={i} style={{ fontSize: 15, color: "#374151", lineHeight: 1.85, margin: "0 0 18px" }}>
                {para}
              </p>
            ))}

            <div style={{ marginTop: 24, paddingTop: 18, borderTop: "1px solid #f3f4f6", display: "flex", alignItems: "center", gap: 10 }}>
              <Share2 size={15} color={G} />
              <span style={{ fontSize: 12.5, color: G }}>Share this article</span>
            </div>
          </div>
        </article>

        <aside style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {otherNews.length > 0 && (
            <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 16 }}>
              <div style={{ fontSize: 14, fontWeight: 800, color: "#111827", marginBottom: 12 }}>
                More {data.shortName} News
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {otherNews.map((n, i) => (
                  <Link
                    key={n.slug}
                    href={`/college/${data.id}/news/${n.slug}`}
                    style={{ display: "flex", gap: 10, padding: "10px 0", borderTop: i === 0 ? "none" : "1px solid #f3f4f6", textDecoration: "none" }}
                  >
                    {n.image && (
                      <img src={n.image} alt={n.title} style={{ width: 52, height: 52, borderRadius: 7, objectFit: "cover", flexShrink: 0, border: "1px solid #e5e7eb" }} />
                    )}
                    <div style={{ minWidth: 0 }}>
                      <p style={{ margin: "0 0 3px", fontSize: 12.5, fontWeight: 700, color: "#111827", lineHeight: 1.35 }}>
                        {n.title}
                      </p>
                      <span style={{ fontSize: 11, color: G }}>{n.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div style={{ background: "linear-gradient(135deg,#1a1a2e,#0f3460)", color: "#fff", borderRadius: 10, padding: 16 }}>
            <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 4 }}>Interested in {data.shortName}?</div>
            <div style={{ fontSize: 11, color: "#94a3b8", marginBottom: 14 }}>Get updates on Eligibility, Admission & Fees</div>
            <Link
              href={`/college/${data.id}?tab=admissions`}
              style={{ display: "block", textAlign: "center", width: "100%", boxSizing: "border-box", background: O, color: "#fff", border: "none", borderRadius: 7, padding: 9, fontWeight: 700, fontSize: 13, textDecoration: "none" }}
            >
              Enquire Now
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
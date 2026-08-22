"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft, Eye, Clock, Share2, Heart, MessageCircle,
  Copy, Check, Send, User,
} from "lucide-react";

const G = "#6b7280";

function formatViews(views) {
  if (!views) return null;
  if (typeof views === "number") {
    if (views >= 1000) return `${(views / 1000).toFixed(1).replace(/\.0$/, "")}K`;
    return String(views);
  }
  return views;
}

function parseLikeSeed(article) {
  const raw = String(article.views || "0").toUpperCase();
  const num = parseFloat(raw) || 0;
  const mult = raw.includes("K") ? 1000 : raw.includes("M") ? 1000000 : 1;
  return Math.max(4, Math.round((num * mult) / 20));
}

function sortByDateDesc(items) {
  return [...items].sort((a, b) => {
    const da = new Date(a.date).getTime();
    const db = new Date(b.date).getTime();
    if (isNaN(da) || isNaN(db)) return 0;
    return db - da;
  });
}

function YouTubeEmbed({ youtubeId, title }) {
  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9", background: "#000" }}>
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
      />
    </div>
  );
}

export default function NewsArticlePage({ data, article }) {
  const router = useRouter();
  const P = data.colors?.primary || "#004aad";
  const O = data.colors?.accent || "#f37021";

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 860);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(() => parseLikeSeed(article));
  const toggleLike = () => {
    setLiked((v) => !v);
    setLikeCount((c) => (liked ? c - 1 : c + 1));
  };

  const [comments, setComments] = useState(article.comments || []);
  const [commentName, setCommentName] = useState("");
  const [commentText, setCommentText] = useState("");
  const handleAddComment = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    setComments((c) => [
      { name: commentName.trim() || "Guest", text: commentText.trim(), date: "Just now" },
      ...c,
    ]);
    setCommentText("");
  };

  const [copied, setCopied] = useState(false);
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: article.title, url: shareUrl });
      } catch {}
    } else {
      handleCopyLink();
    }
  };
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const otherNews = sortByDateDesc((data.news || []).filter((n) => n.slug !== article.slug)).slice(0, 5);

  const hasVideo = Boolean(article.videoId);
  const galleryImages = article.gallery?.length ? article.gallery : article.image ? [article.image] : [];

  return (
    <div style={{ background: "#f3f4f6", minHeight: "100vh", fontFamily: "Arial, Helvetica, sans-serif", color: "#111827" }}>

      <div style={{ background: "#F9B929", borderBottom: "2px solid #E8A317", padding: isMobile ? "9px 14px" : "10px 20px" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <button
            onClick={() => router.push(`/college/${data.id}?tab=overview`)}
            style={{ display: "flex", alignItems: "center", gap: 5, background: "none", border: "none", cursor: "pointer", fontSize: 11.5, fontWeight: 700, color: "#0A0A0A", padding: 0 }}
          >
            <ArrowLeft size={13} /> Back to {data.shortName}
          </button>
        </div>
      </div>

      <div
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: isMobile ? "14px 14px 40px" : "18px 24px 0",
          display: isMobile ? "flex" : "grid",
          flexDirection: isMobile ? "column" : undefined,
          gridTemplateColumns: isMobile ? undefined : "1fr 300px",
          gap: isMobile ? 16 : 24,
          alignItems: "flex-start",
        }}
      >
        <article style={{ background: "#fff", borderRadius: 12, border: "1px solid #e5e7eb", overflow: "hidden", width: "100%" }}>

          {hasVideo ? (
            <YouTubeEmbed youtubeId={article.videoId} title={article.title} />
          ) : galleryImages.length > 1 ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: galleryImages.length === 2 ? "1fr 1fr" : "2fr 1fr",
                gap: 2,
                aspectRatio: isMobile ? "16 / 9" : "21 / 9",
                overflow: "hidden",
              }}
            >
              <img
                src={galleryImages[0]}
                alt={article.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", gridRow: galleryImages.length > 2 ? "1 / 3" : "auto" }}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {galleryImages.slice(1, 3).map((src, i) => (
                  <img key={i} src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", flex: 1 }} />
                ))}
              </div>
            </div>
          ) : galleryImages.length === 1 ? (
            <div style={{ width: "100%", aspectRatio: isMobile ? "16 / 9" : "21 / 9", overflow: "hidden" }}>
              <img
                src={galleryImages[0]}
                alt={article.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          ) : null}

          <div style={{ padding: isMobile ? "16px 16px" : "20px 24px" }}>
            {article.category && (
              <span
                style={{
                  fontSize: 11, fontWeight: 700, color: O, background: `${O}1A`,
                  padding: "3px 10px", borderRadius: 20, textTransform: "uppercase",
                  letterSpacing: 0.4, display: "inline-block", marginBottom: 10,
                }}
              >
                {article.category}
              </span>
            )}

            <h1
              style={{
                fontSize: isMobile ? 19 : 24,
                fontWeight: 800,
                color: "#111827",
                lineHeight: 1.3,
                margin: "0 0 12px",
                wordBreak: "break-word",
              }}
            >
              {article.title}
            </h1>

            <div
              style={{
                display: "flex", alignItems: "center", gap: isMobile ? 10 : 14, flexWrap: "wrap",
                paddingBottom: 14, marginBottom: 18, borderBottom: "1px solid #f3f4f6",
              }}
            >
              {article.author && (
                <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 13, fontWeight: 700, color: "#374151" }}>
                  <User size={13} /> {article.author}
                </span>
              )}
              {article.date && (
                <span style={{ fontSize: 12.5, color: G, display: "flex", alignItems: "center", gap: 4 }}>
                  <Clock size={13} /> {article.date}
                </span>
              )}
              {article.views && (
                <span style={{ fontSize: 12.5, color: G, display: "flex", alignItems: "center", gap: 4 }}>
                  <Eye size={13} /> {formatViews(article.views)} views
                </span>
              )}
            </div>

            {(article.content?.length ? article.content : [article.detail]).filter(Boolean).map((para, i) => (
              <p key={i} style={{ fontSize: isMobile ? 13.5 : 14.5, color: "#374151", lineHeight: 1.75, margin: "0 0 14px" }}>
                {para}
              </p>
            ))}

            {galleryImages.length > 3 && (
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "1fr 1fr 1fr", gap: 8, margin: "8px 0 20px" }}>
                {galleryImages.slice(3).map((src, i) => (
                  <img key={i} src={src} alt="" style={{ width: "100%", aspectRatio: "4 / 3", objectFit: "cover", borderRadius: 8 }} />
                ))}
              </div>
            )}

            <div
              style={{
                display: "flex", alignItems: "center", gap: isMobile ? 6 : 8, flexWrap: "wrap",
                marginTop: 16, paddingTop: 14, borderTop: "1px solid #f3f4f6",
              }}
            >
              <button
                onClick={toggleLike}
                style={{
                  display: "flex", alignItems: "center", gap: 6,
                  background: liked ? "#fee2e2" : "#f9fafb",
                  border: `1px solid ${liked ? "#fecaca" : "#e5e7eb"}`,
                  borderRadius: 20, padding: "7px 14px", cursor: "pointer",
                  fontSize: 12.5, fontWeight: 700, color: liked ? "#dc2626" : "#374151",
                  transition: "background 0.15s, border-color 0.15s",
                }}
              >
                <Heart size={14} fill={liked ? "#dc2626" : "none"} /> {likeCount}
              </button>

              <a
                href="#comments"
                style={{
                  display: "flex", alignItems: "center", gap: 6, background: "#f9fafb",
                  border: "1px solid #e5e7eb", borderRadius: 20, padding: "7px 14px",
                  fontSize: 12.5, fontWeight: 700, color: "#374151", textDecoration: "none",
                }}
              >
                <MessageCircle size={14} /> {comments.length}
              </a>

              <button
                onClick={handleShare}
                style={{
                  display: "flex", alignItems: "center", gap: 6, background: "#f9fafb",
                  border: "1px solid #e5e7eb", borderRadius: 20, padding: "7px 14px",
                  fontSize: 12.5, fontWeight: 700, color: "#374151", cursor: "pointer",
                }}
              >
                <Share2 size={14} /> Share
              </button>

              <button
                onClick={handleCopyLink}
                style={{
                  display: "flex", alignItems: "center", gap: 6,
                  background: copied ? "#dcfce7" : "#f9fafb",
                  border: `1px solid ${copied ? "#86efac" : "#e5e7eb"}`,
                  borderRadius: 20, padding: "7px 14px", cursor: "pointer",
                  fontSize: 12.5, fontWeight: 700, color: copied ? "#16a34a" : "#374151",
                  marginLeft: "auto",
                }}
              >
                {copied ? <Check size={14} /> : <Copy size={14} />} {copied ? "Copied" : "Copy link"}
              </button>
            </div>

            <div id="comments" style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid #f3f4f6" }}>
              <h2 style={{ fontSize: 14.5, fontWeight: 800, color: "#111827", margin: "0 0 12px" }}>
                Comments ({comments.length})
              </h2>

              <form onSubmit={handleAddComment} style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
                <input
                  value={commentName}
                  onChange={(e) => setCommentName(e.target.value)}
                  placeholder="Your name (optional)"
                  style={{ padding: "9px 12px", borderRadius: 8, border: "1px solid #d1d5db", fontSize: 13 }}
                />
                <div style={{ display: "flex", gap: 8 }}>
                  <input
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Add a comment…"
                    style={{ flex: 1, padding: "9px 12px", borderRadius: 8, border: "1px solid #d1d5db", fontSize: 13 }}
                  />
                  <button
                    type="submit"
                    style={{
                      display: "flex", alignItems: "center", gap: 5, background: O, color: "#fff",
                      border: "none", borderRadius: 8, padding: "0 16px", fontWeight: 700, fontSize: 13, cursor: "pointer",
                    }}
                  >
                    <Send size={14} /> {!isMobile && "Post"}
                  </button>
                </div>
              </form>

              {comments.length === 0 ? (
                <p style={{ fontSize: 13, color: G, margin: 0 }}>Be the first to comment.</p>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {comments.map((c, i) => (
                    <div key={i} style={{ display: "flex", gap: 10 }}>
                      <div
                        style={{
                          width: 32, height: 32, borderRadius: "50%", background: `${P}14`,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          flexShrink: 0, fontSize: 12, fontWeight: 800, color: P,
                        }}
                      >
                        {c.name.charAt(0).toUpperCase()}
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <span style={{ fontSize: 13, fontWeight: 700, color: "#111827" }}>{c.name}</span>
                          <span style={{ fontSize: 11, color: G }}>{c.date}</span>
                        </div>
                        <p style={{ margin: "2px 0 0", fontSize: 13, color: "#374151", lineHeight: 1.5 }}>{c.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </article>

        <aside style={{ display: "flex", flexDirection: "column", gap: 16, width: "100%", position: isMobile ? "static" : "sticky", top: isMobile ? undefined : 20 }}>
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
            <div style={{ fontSize: 11, color: "#94a3b8", marginBottom: 14 }}>Get updates on Eligibility, Admission &amp; Fees</div>
            <Link
              href={`/college/${data.id}?tab=admissions`}
              style={{ display: "block", textAlign: "center", width: "100%", boxSizing: "border-box", background: O, color: "#fff", border: "none", borderRadius: 7, padding: 9, fontWeight: 700, fontSize: 13, textDecoration: "none" }}
            >
              Enquire Now
            </Link>
          </div>
        </aside>
      </div>

      {/* ── Full-width "More Articles" grid — fills the page below the two-column
          layout so wide screens never feel empty, and surfaces every other
          article (not just the 5 shown in the sidebar). ── */}
      {otherNews.length > 0 && (
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: isMobile ? "24px 14px 40px" : "32px 24px 56px" }}>
          <h2 style={{ fontSize: isMobile ? 17 : 19, fontWeight: 800, color: "#111827", margin: "0 0 16px" }}>
            More Articles from {data.shortName}
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fill, minmax(260px, 1fr))",
              gap: 16,
            }}
          >
            {sortByDateDesc((data.news || []).filter((n) => n.slug !== article.slug)).map((n) => (
              <Link
                key={n.slug}
                href={`/college/${data.id}/news/${n.slug}`}
                style={{
                  display: "flex", flexDirection: "column", background: "#fff",
                  borderRadius: 10, border: "1px solid #e5e7eb", overflow: "hidden",
                  textDecoration: "none",
                }}
              >
                {n.image ? (
                  <img src={n.image} alt={n.title} style={{ width: "100%", aspectRatio: "16 / 9", objectFit: "cover", display: "block" }} />
                ) : (
                  <div style={{ width: "100%", aspectRatio: "16 / 9", background: `${P}0D` }} />
                )}
                <div style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: 6, flex: 1 }}>
                  {n.category && (
                    <span style={{ fontSize: 10.5, fontWeight: 700, color: O, textTransform: "uppercase", letterSpacing: 0.3 }}>
                      {n.category}
                    </span>
                  )}
                  <p style={{ margin: 0, fontSize: 13.5, fontWeight: 700, color: "#111827", lineHeight: 1.4, flex: 1 }}>
                    {n.title}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 4 }}>
                    <span style={{ fontSize: 11, color: G }}>{n.date}</span>
                    {n.views && (
                      <>
                        <span style={{ color: "#d1d5db", fontSize: 10 }}>•</span>
                        <span style={{ fontSize: 11, color: G, display: "flex", alignItems: "center", gap: 3 }}>
                          <Eye size={11} /> {formatViews(n.views)}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
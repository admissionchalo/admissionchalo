"use client";

import { useState } from "react";
import { Star, ShieldCheck, Briefcase, Building2, BookOpen, Users, IndianRupee, ChevronDown, X } from "lucide-react";

const G = "#6b7280";

const CATEGORY_ICONS = {
  briefcase: Briefcase,
  building: Building2,
  book: BookOpen,
  users: Users,
  rupee: IndianRupee,
};

function CategoryStarPicker({ label, icon: Icon, value, onChange, O }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, padding: "8px 0" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        {Icon && (
          <div style={{ width: 26, height: 26, borderRadius: 7, background: `${O}14`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <Icon size={14} color={O} strokeWidth={1.8} />
          </div>
        )}
        <span style={{ fontSize: 12.5, fontWeight: 600, color: "#374151" }}>{label}</span>
      </div>
      <div style={{ display: "flex", gap: 2 }}>
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => onChange(n)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 1 }}
          >
            <Star size={17} color="#f59e0b" fill={n <= value ? "#f59e0b" : "none"} strokeWidth={1.5} />
          </button>
        ))}
      </div>
    </div>
  );
}

function WriteReviewModal({ onClose, onSubmit, P, O, categories }) {
  const initialCategoryRatings = Object.fromEntries((categories || []).map((c) => [c.label, 5]));
  const [form, setForm] = useState({ name: "", course: "", batch: "", rating: 5, text: "", categoryRatings: initialCategoryRatings });

  const set = (k, v) => setForm((prev) => ({ ...prev, [k]: v }));
  const setCategoryRating = (label, val) =>
    setForm((prev) => ({ ...prev, categoryRatings: { ...prev.categoryRatings, [label]: val } }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.text) return;
    onSubmit(form);
  };

  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.55)", zIndex: 3000, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
      <form onClick={(e) => e.stopPropagation()} onSubmit={handleSubmit} style={{ background: "#fff", borderRadius: 14, width: "100%", maxWidth: 460, maxHeight: "88vh", overflowY: "auto" }}>
        <div style={{ padding: "18px 22px", borderBottom: "1px solid #e5e7eb", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, background: "#fff" }}>
          <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: P }}>Write a Review</h3>
          <button type="button" onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", color: G, display: "flex" }}><X size={18} /></button>
        </div>

        <div style={{ padding: 22, display: "flex", flexDirection: "column", gap: 12 }}>
          <div>
            <label style={{ fontSize: 12, fontWeight: 600, color: "#374151", display: "block", marginBottom: 6 }}>Overall Rating</label>
            <div style={{ display: "flex", gap: 4 }}>
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => set("rating", n)}
                  style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
                >
                  <Star size={24} color="#f59e0b" fill={n <= form.rating ? "#f59e0b" : "none"} strokeWidth={1.5} />
                </button>
              ))}
            </div>
          </div>

          {categories?.length > 0 && (
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: "#374151", display: "block", marginBottom: 4 }}>Rate by Category</label>
              <div style={{ background: "#f9fafb", border: "1px solid #f3f4f6", borderRadius: 10, padding: "4px 12px" }}>
                {categories.map((c, i) => (
                  <div key={c.label} style={{ borderTop: i === 0 ? "none" : "1px solid #f3f4f6" }}>
                    <CategoryStarPicker
                      label={c.label}
                      icon={CATEGORY_ICONS[c.icon]}
                      value={form.categoryRatings[c.label] || 0}
                      onChange={(v) => setCategoryRating(c.label, v)}
                      O={O}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            <label style={{ fontSize: 12, fontWeight: 600, color: "#374151", display: "block", marginBottom: 6 }}>Your Name</label>
            <input value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="e.g. Aditi Verma" required
              style={{ width: "100%", boxSizing: "border-box", padding: "9px 12px", borderRadius: 8, border: "1px solid #d1d5db", fontSize: 13 }} />
          </div>

          <div style={{ display: "flex", gap: 10 }}>
            <div style={{ flex: 1 }}>
              <label style={{ fontSize: 12, fontWeight: 600, color: "#374151", display: "block", marginBottom: 6 }}>Course</label>
              <input value={form.course} onChange={(e) => set("course", e.target.value)} placeholder="e.g. B.Tech CSE"
                style={{ width: "100%", boxSizing: "border-box", padding: "9px 12px", borderRadius: 8, border: "1px solid #d1d5db", fontSize: 13 }} />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ fontSize: 12, fontWeight: 600, color: "#374151", display: "block", marginBottom: 6 }}>Batch</label>
              <input value={form.batch} onChange={(e) => set("batch", e.target.value)} placeholder="e.g. 2026"
                style={{ width: "100%", boxSizing: "border-box", padding: "9px 12px", borderRadius: 8, border: "1px solid #d1d5db", fontSize: 13 }} />
            </div>
          </div>

          <div>
            <label style={{ fontSize: 12, fontWeight: 600, color: "#374151", display: "block", marginBottom: 6 }}>Your Review</label>
            <textarea value={form.text} onChange={(e) => set("text", e.target.value)} rows={4} required
              placeholder="Share your honest experience about academics, faculty, placements, campus life..."
              style={{ width: "100%", boxSizing: "border-box", padding: "9px 12px", borderRadius: 8, border: "1px solid #d1d5db", fontSize: 13, fontFamily: "inherit", resize: "vertical" }} />
          </div>

          <p style={{ fontSize: 11, color: G, margin: 0 }}>
            Your review will appear immediately on this page. It is not yet saved permanently — this will be enabled once the review system is connected to our database.
          </p>

          <button type="submit" style={{ background: O, color: "#fff", border: "none", borderRadius: 8, padding: 11, fontWeight: 700, fontSize: 13.5, cursor: "pointer" }}>
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
}

export default function ReviewsSection({ data }) {
  const P = data.colors?.primary || "#004aad";
  const O = data.colors?.accent || "#f37021";
  const reviews = data.reviews;

  const [showWriteModal, setShowWriteModal] = useState(false);
  const [extraReviews, setExtraReviews] = useState([]);
  const [openFaq, setOpenFaq] = useState(-1);

  if (!reviews) return (
    <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 40, textAlign: "center", color: G }}>
      <div style={{ fontSize: 40, marginBottom: 12 }}>⭐</div>
      <div style={{ fontWeight: 700, color: "#111827" }}>No reviews yet</div>
    </div>
  );

  const maxCount = Math.max(...(reviews.distribution || []).map((d) => d.count), 1);
  const allReviews = [...extraReviews, ...(reviews.list || [])];

  const handleNewReview = (form) => {
    setExtraReviews((prev) => [{ ...form }, ...prev]);
    setShowWriteModal(false);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>

      {/* Header */}
      <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20, display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ width: 40, height: 40, borderRadius: 10, background: `${P}14`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <Star size={20} color={P} fill={P} />
        </div>
        <div>
          <div style={{ fontSize: 12, color: G }}>{data.shortName}</div>
          <h2 style={{ fontSize: 17, fontWeight: 700, color: P, margin: 0 }}>Student Ratings & Reviews</h2>
        </div>
      </div>

      {/* Rating summary card with distribution bars */}
      <div style={{ background: `linear-gradient(135deg, ${P}0F, ${P}05)`, borderRadius: 12, border: "1px solid #e5e7eb", padding: 24 }}>
        <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
          <div style={{ minWidth: 140 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
              <Star size={26} color="#f59e0b" fill="#f59e0b" />
              <span style={{ fontSize: 42, fontWeight: 700, color: P, lineHeight: 1 }}>{reviews.overall}</span>
              <span style={{ fontSize: 16, color: G }}>/5</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 8 }}>
              <ShieldCheck size={14} color="#16a34a" />
              <span style={{ fontSize: 12.5, color: "#374151", fontWeight: 600 }}>{reviews.total} Verified Reviews</span>
            </div>
          </div>

          {reviews.distribution?.length > 0 && (
            <div style={{ flex: 1, minWidth: 240, display: "flex", flexDirection: "column", gap: 8, justifyContent: "center" }}>
              {reviews.distribution.map((d, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 12.5, color: P, fontWeight: 700, width: 34, display: "flex", alignItems: "center", gap: 3 }}>
                    <Star size={11} color="#f59e0b" fill="#f59e0b" /> {d.stars}
                  </span>
                  <div style={{ flex: 1, height: 7, background: "#e5e7eb", borderRadius: 4, overflow: "hidden", maxWidth: 320 }}>
                    <div style={{ height: "100%", width: `${(d.count / maxCount) * 100}%`, background: P, borderRadius: 4 }} />
                  </div>
                  <span style={{ fontSize: 12.5, color: "#374151", fontWeight: 600, width: 36, textAlign: "right" }}>{d.count}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Category rating cards — click any to rate it */}
      {reviews.breakdown?.length > 0 && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: 12 }}>
          {reviews.breakdown.map((b, i) => {
            const Icon = CATEGORY_ICONS[b.icon] || Star;
            return (
              <button
                key={i}
                onClick={() => setShowWriteModal(true)}
                style={{
                  background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: "18px 12px",
                  textAlign: "center", cursor: "pointer", transition: "box-shadow 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.08)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div style={{ width: 44, height: 44, borderRadius: 10, background: `${O}14`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 10px" }}>
                  <Icon size={22} color={O} strokeWidth={1.8} />
                </div>
                <div style={{ fontSize: 12.5, fontWeight: 600, color: "#374151", marginBottom: 6 }}>{b.label}</div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
                  <Star size={13} color="#f59e0b" fill="#f59e0b" />
                  <span style={{ fontSize: 14, fontWeight: 700, color: "#111827" }}>{b.val}</span>
                </div>
                <div style={{ fontSize: 10, color: O, fontWeight: 600, marginTop: 6 }}>Rate this →</div>
              </button>
            );
          })}
        </div>
      )}

      {/* Guidance paragraph */}
      {reviews.guidance && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: "#111827", margin: "0 0 10px" }}>How to Read These Reviews</h3>
          <p style={{ fontSize: 13, color: "#374151", lineHeight: 1.75, margin: 0 }}>{reviews.guidance}</p>
        </div>
      )}

      {/* Write a review CTA */}
      <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <div>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#111827" }}>Studied at {data.shortName}?</div>
          <div style={{ fontSize: 12.5, color: G, marginTop: 2 }}>Share your experience to help future students decide.</div>
        </div>
        <button
          onClick={() => setShowWriteModal(true)}
          style={{ background: O, color: "#fff", border: "none", borderRadius: 8, padding: "10px 22px", fontWeight: 700, fontSize: 13.5, cursor: "pointer", whiteSpace: "nowrap" }}
        >
          Write a Review
        </button>
      </div>

      {/* Review Cards */}
      {allReviews.length > 0 && (
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {allReviews.map((r, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 18 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10, flexWrap: "wrap", gap: 8 }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "#111827" }}>{r.name}</div>
                  <div style={{ fontSize: 12, color: G, marginTop: 2 }}>{r.course}{r.batch ? ` · Batch ${r.batch}` : ""}</div>
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

      {/* Review-specific FAQs */}
      {reviews.faqs?.length > 0 && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: "#111827", margin: "0 0 14px" }}>Frequently Asked Questions</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {reviews.faqs.map((faq, i) => {
              const open = openFaq === i;
              return (
                <div key={i} style={{ border: "1px solid #e5e7eb", borderRadius: 8, overflow: "hidden" }}>
                  <button
                    onClick={() => setOpenFaq(open ? -1 : i)}
                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, padding: "12px 14px", background: open ? "#f9fafb" : "#fff", border: "none", cursor: "pointer", textAlign: "left" }}
                  >
                    <span style={{ fontSize: 13, fontWeight: 700, color: "#111827" }}>{faq.q}</span>
                    <ChevronDown size={16} color={G} style={{ flexShrink: 0, transition: "transform 0.2s", transform: open ? "rotate(180deg)" : "rotate(0deg)" }} />
                  </button>
                  {open && (
                    <div style={{ padding: "0 14px 14px" }}>
                      <p style={{ margin: 0, fontSize: 13, color: "#374151", lineHeight: 1.65 }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Related Searches (SEO-friendly keyword chips) */}
      {reviews.keywords?.length > 0 && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
          <h3 style={{ fontSize: 13, fontWeight: 700, color: "#111827", margin: "0 0 12px" }}>Related Searches</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {reviews.keywords.map((k, i) => (
              <span
                key={i}
                style={{
                  fontSize: 12, color: "#374151", background: "#f9fafb",
                  border: "1px solid #e5e7eb", padding: "6px 14px", borderRadius: 20,
                }}
              >
                {k}
              </span>
            ))}
          </div>
        </div>
      )}

      {showWriteModal && (
        <WriteReviewModal onClose={() => setShowWriteModal(false)} onSubmit={handleNewReview} P={P} O={O} categories={reviews.breakdown} />
      )}
    </div>
  );
}
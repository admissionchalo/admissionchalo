"use client";

import { useState } from "react";
import { MessageCircleQuestion, ShieldCheck, ChevronDown, ChevronUp, X, ThumbsUp } from "lucide-react";

const G = "#6b7280";

function AskQuestionModal({ onClose, onSubmit, P, O, categories }) {
  const [form, setForm] = useState({ question: "", askedBy: "", category: categories?.[1] || "General" });

  const set = (k, v) => setForm((prev) => ({ ...prev, [k]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.question.trim()) return;
    onSubmit(form);
  };

  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.55)", zIndex: 3000, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
      <form onClick={(e) => e.stopPropagation()} onSubmit={handleSubmit} style={{ background: "#fff", borderRadius: 14, width: "100%", maxWidth: 460 }}>
        <div style={{ padding: "18px 22px", borderBottom: "1px solid #e5e7eb", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: P }}>Ask a Question</h3>
          <button type="button" onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", color: G, display: "flex" }}><X size={18} /></button>
        </div>

        <div style={{ padding: 22, display: "flex", flexDirection: "column", gap: 12 }}>
          <div>
            <label style={{ fontSize: 12, fontWeight: 600, color: "#374151", display: "block", marginBottom: 6 }}>Your Question</label>
            <textarea
              value={form.question} onChange={(e) => set("question", e.target.value)}
              rows={3} required placeholder="e.g. What is the hostel fee for the first year?"
              style={{ width: "100%", boxSizing: "border-box", padding: "9px 12px", borderRadius: 8, border: "1px solid #d1d5db", fontSize: 13, fontFamily: "inherit", resize: "vertical" }}
            />
          </div>

          <div>
            <label style={{ fontSize: 12, fontWeight: 600, color: "#374151", display: "block", marginBottom: 6 }}>Category</label>
            <select
              value={form.category} onChange={(e) => set("category", e.target.value)}
              style={{ width: "100%", boxSizing: "border-box", padding: "9px 12px", borderRadius: 8, border: "1px solid #d1d5db", fontSize: 13, background: "#fff" }}
            >
              {(categories || []).filter((c) => c !== "All").map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div>
            <label style={{ fontSize: 12, fontWeight: 600, color: "#374151", display: "block", marginBottom: 6 }}>Your Name (optional)</label>
            <input
              value={form.askedBy} onChange={(e) => set("askedBy", e.target.value)}
              placeholder="e.g. Rohan M." style={{ width: "100%", boxSizing: "border-box", padding: "9px 12px", borderRadius: 8, border: "1px solid #d1d5db", fontSize: 13 }}
            />
          </div>

          <p style={{ fontSize: 11, color: G, margin: 0 }}>
            Your question will appear immediately below. It isn't saved permanently yet — this will be enabled once Q&A is connected to our database.
          </p>

          <button type="submit" style={{ background: O, color: "#fff", border: "none", borderRadius: 8, padding: 11, fontWeight: 700, fontSize: 13.5, cursor: "pointer" }}>
            Post Question
          </button>
        </div>
      </form>
    </div>
  );
}

function QuestionCard({ item, P, O }) {
  const [expanded, setExpanded] = useState(false);
  const hasAnswers = item.answers?.length > 0;

  return (
    <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", overflow: "hidden" }}>
      <div style={{ padding: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
          {item.category && (
            <span style={{ fontSize: 10.5, fontWeight: 700, color: O, background: `${O}1A`, padding: "2px 9px", borderRadius: 20, textTransform: "uppercase", letterSpacing: 0.3 }}>
              {item.category}
            </span>
          )}
          <span style={{ fontSize: 11.5, color: G }}>Asked by {item.askedBy || "Anonymous"} · {item.date}</span>
        </div>

        <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
          <MessageCircleQuestion size={17} color={P} style={{ flexShrink: 0, marginTop: 1 }} />
          <p style={{ margin: 0, fontSize: 14, fontWeight: 700, color: "#111827", lineHeight: 1.45 }}>{item.question}</p>
        </div>

        {hasAnswers ? (
          <>
            <button
              onClick={() => setExpanded(!expanded)}
              style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 10, marginLeft: 27, background: "none", border: "none", cursor: "pointer", padding: 0, fontSize: 12.5, fontWeight: 700, color: P }}
            >
              {item.answers.length} Answer{item.answers.length > 1 ? "s" : ""}
              {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>

            {expanded && (
              <div style={{ marginLeft: 27, marginTop: 10, display: "flex", flexDirection: "column", gap: 10 }}>
                {item.answers.map((a, i) => (
                  <div key={i} style={{ background: "#f9fafb", border: "1px solid #f3f4f6", borderRadius: 8, padding: 12 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 5 }}>
                      <span style={{ fontSize: 12.5, fontWeight: 700, color: "#111827" }}>{a.author}</span>
                      {a.verified && <ShieldCheck size={13} color="#16a34a" fill="#16a34a" />}
                      <span style={{ fontSize: 11, color: G }}>· {a.date}</span>
                    </div>
                    <p style={{ margin: 0, fontSize: 13, color: "#374151", lineHeight: 1.6 }}>{a.text}</p>
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          <div style={{ marginLeft: 27, marginTop: 10, fontSize: 12.5, color: G, fontStyle: "italic" }}>
            No answers yet — be the first to answer.
          </div>
        )}
      </div>
    </div>
  );
}

export default function QnASection({ data }) {
  const P = data.colors?.primary || "#004aad";
  const O = data.colors?.accent || "#f37021";

  const [showAskModal, setShowAskModal] = useState(false);
  const [extraQuestions, setExtraQuestions] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [openPopular, setOpenPopular] = useState(-1);

  const categories = data.qnaCategories || ["All"];
  const allQuestions = [...extraQuestions, ...(data.qna || [])];

  const filtered = activeCategory === "All"
    ? allQuestions
    : allQuestions.filter((q) => q.category === activeCategory);

  const handleNewQuestion = (form) => {
    setExtraQuestions((prev) => [
      { id: Date.now(), question: form.question, askedBy: form.askedBy || "Anonymous", date: "Just now", category: form.category, answers: [] },
      ...prev,
    ]);
    setShowAskModal(false);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>

      {/* Header */}
      <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <div>
          <h2 style={{ fontSize: 17, fontWeight: 700, color: P, margin: "0 0 4px" }}>
            {data.shortName} Questions & Answers
          </h2>
          <p style={{ fontSize: 13, color: G, margin: 0 }}>
            {allQuestions.length} questions asked by students and parents
          </p>
        </div>
        <button
          onClick={() => setShowAskModal(true)}
          style={{ background: O, color: "#fff", border: "none", borderRadius: 8, padding: "10px 20px", fontWeight: 700, fontSize: 13.5, cursor: "pointer", whiteSpace: "nowrap" }}
        >
          Ask a Question
        </button>
      </div>

      {/* Popular Questions (editorial, verified) */}
      {(data.qnaIntro || data.qnaPopular?.length > 0) && (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
          {data.qnaIntro && (
            <p style={{ fontSize: 13, color: "#374151", lineHeight: 1.75, margin: "0 0 16px" }}>
              {data.qnaIntro}
            </p>
          )}
          {data.qnaPopular?.length > 0 && (
            <>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: "#111827", margin: "0 0 12px" }}>Popular Questions</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {data.qnaPopular.map((item, i) => {
                  const open = openPopular === i;
                  return (
                    <div key={i} style={{ border: "1px solid #e5e7eb", borderRadius: 8, overflow: "hidden" }}>
                      <button
                        onClick={() => setOpenPopular(open ? -1 : i)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, padding: "12px 14px", background: open ? "#f9fafb" : "#fff", border: "none", cursor: "pointer", textAlign: "left" }}
                      >
                        <span style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 700, color: "#111827" }}>
                          <MessageCircleQuestion size={15} color={P} style={{ flexShrink: 0 }} />
                          {item.q}
                        </span>
                        <ChevronDown size={16} color={G} style={{ flexShrink: 0, transition: "transform 0.2s", transform: open ? "rotate(180deg)" : "rotate(0deg)" }} />
                      </button>
                      {open && (
                        <div style={{ padding: "0 14px 14px 37px", display: "flex", alignItems: "flex-start", gap: 6 }}>
                          <ShieldCheck size={13} color="#16a34a" fill="#16a34a" style={{ flexShrink: 0, marginTop: 3 }} />
                          <p style={{ margin: 0, fontSize: 13, color: "#374151", lineHeight: 1.65 }}>{item.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      )}

      {/* Category filter */}
      {categories.length > 1 && (
        <div>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: "#111827", margin: "0 0 10px" }}>Community Questions</h3>
          <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 2 }}>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              style={{
                padding: "7px 16px", borderRadius: 20, border: "none", cursor: "pointer",
                fontSize: 12.5, fontWeight: 700, whiteSpace: "nowrap",
                background: activeCategory === c ? P : "#f3f4f6",
                color: activeCategory === c ? "#fff" : G,
              }}
            >
              {c}
            </button>
          ))}
          </div>
        </div>
      )}

      {/* Question list */}
      {filtered.length > 0 ? (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {filtered.map((item) => (
            <QuestionCard key={item.id} item={item} P={P} O={O} />
          ))}
        </div>
      ) : (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 40, textAlign: "center", color: G }}>
          <MessageCircleQuestion size={36} color={G} style={{ marginBottom: 10 }} />
          <div style={{ fontWeight: 700, color: "#111827" }}>No questions in this category yet</div>
          <div style={{ fontSize: 12.5, marginTop: 4 }}>Be the first to ask.</div>
        </div>
      )}

      {showAskModal && (
        <AskQuestionModal onClose={() => setShowAskModal(false)} onSubmit={handleNewQuestion} P={P} O={O} categories={categories} />
      )}
    </div>
  );
}
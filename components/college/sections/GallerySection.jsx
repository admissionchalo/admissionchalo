"use client";

import { useState, useMemo } from "react";
import { X, ChevronLeft, ChevronRight, ChevronDown, Images, PlayCircle } from "lucide-react";

const G = "#6b7280";


export default function GallerySection({ data = {} }) {
  const rawItems = data.gallery || [];
  const [activeIndex, setActiveIndex] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  // Normalize every item to a consistent shape so old string-only data keeps working
  const items = useMemo(
    () =>
      rawItems.map((item, i) => {
        if (typeof item === "string") {
          return {
            type: "image",
            src: item,
            alt: `${data.shortName} campus photo ${i + 1}`,
          };
        }
        const kind = item.type === "video" ? "video" : item.type === "youtube" ? "youtube" : "image";
        return {
          type: kind,
          src: item.src,
          youtubeId: item.youtubeId,
          poster: item.poster || item.thumbnail,
          alt:
            item.alt ||
            item.title ||
            `${data.shortName} campus ${kind === "image" ? "photo" : "video"} ${i + 1}`,
          caption: item.caption || item.title,
        };
      }),
    [rawItems, data.shortName]
  );

  const isOpen = activeIndex !== null;
  const active = isOpen ? items[activeIndex] : null;

  const showPrev = () => setActiveIndex((i) => (i - 1 + items.length) % items.length);
  const showNext = () => setActiveIndex((i) => (i + 1) % items.length);

  const rawFaqs =
    data.galleryFaqs || [
      {
        question: `Where can I see ${data.shortName} campus photos?`,
        answer: `You can explore the official ${data.shortName} gallery and visual resources right here — academic buildings, classrooms, laboratories, sports facilities, events and student activities are all covered.`,
      },
      {
        question: "What can I see in the gallery?",
        answer:
          "Campus buildings, classrooms, laboratories, sports facilities, events and student activities, along with short campus video walkthroughs where available.",
      },
    ];

  // Support either {q, a} (used elsewhere in the site data) or {question, answer}
  const faqs = rawFaqs.map((f) => ({
    question: f.question || f.q,
    answer: f.answer || f.a,
  }));

  // JSON-LD for SEO — ImageGallery + FAQPage structured data
  const jsonLd = useMemo(() => {
    const graph = [];

    const imageItems = items.filter((i) => i.type === "image");
    const videoItems = items.filter((i) => i.type === "video" || i.type === "youtube");

    if (imageItems.length > 0) {
      graph.push({
        "@type": "ImageGallery",
        name: `${data.shortName} Photo Gallery`,
        description: `A look at the ${data.shortName} campus — academic blocks, hostels, library, sports facilities and more.`,
        image: imageItems.map((i) => i.src),
      });
    }

    videoItems.forEach((v) => {
      graph.push({
        "@type": "VideoObject",
        name: v.caption || v.alt,
        description: v.caption || `${data.shortName} campus video`,
        thumbnailUrl: v.poster,
        contentUrl: v.type === "video" ? v.src : undefined,
        embedUrl: v.type === "youtube" && v.youtubeId ? `https://www.youtube.com/embed/${v.youtubeId}` : undefined,
      });
    });

    if (faqs.length > 0) {
      graph.push({
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      });
    }

    return { "@context": "https://schema.org", "@graph": graph };
  }, [items, faqs, data.shortName]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
      {/* Structured data for search engines */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header + intro copy (SEO content, real sentences for crawlers & readers) */}
      <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
        <h2 style={{ fontSize: 16, fontWeight: 800, color: "#111827", margin: "0 0 4px" }}>
          {data.shortName} Photo & Video Gallery
        </h2>
        <p style={{ fontSize: 13, color: G, margin: "0 0 10px", lineHeight: 1.6 }}>
          The {data.shortName} gallery helps prospective students explore the campus visually before they visit.
          Browse photos and videos of academic buildings, classrooms, laboratories, sports facilities, events and
          student activities, and compare the campus environment of {data.shortName} with other universities in
          Greater Noida and Delhi NCR.
        </p>
        <p style={{ fontSize: 12, color: "#9ca3af", margin: 0 }}>
          {data.shortName} gallery · {data.shortName} photos · {data.shortName} campus photos · {data.shortName}{" "}
          campus gallery
        </p>
      </div>

      {/* Grid */}
      {items.length > 0 ? (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 14 }}>
            {items.map((item, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={item.type !== "image" ? `Play video: ${item.alt}` : `View photo: ${item.alt}`}
                style={{
                  position: "relative",
                  padding: 0,
                  border: "1px solid #e5e7eb",
                  borderRadius: 10,
                  overflow: "hidden",
                  cursor: "pointer",
                  aspectRatio: "4 / 3",
                  background: "#f3f4f6",
                }}
              >
                <img
                  src={item.type === "image" ? item.src : item.poster || item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.25s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
                {item.type !== "image" && (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(0,0,0,0.25)",
                    }}
                  >
                    <PlayCircle size={40} color="#fff" strokeWidth={1.5} />
                  </div>
                )}
                {item.caption && (
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      bottom: 0,
                      fontSize: 11,
                      color: "#fff",
                      background: "rgba(0,0,0,0.55)",
                      padding: "4px 8px",
                      textAlign: "left",
                    }}
                  >
                    {item.caption}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: 40, textAlign: "center", color: G }}>
          <Images size={32} style={{ margin: "0 auto 10px" }} />
          <div>No gallery photos or videos available yet.</div>
        </div>
      )}

      {/* FAQ accordion — real content for users + FAQPage schema above */}
      {faqs.length > 0 && (
        <div style={{ background: "#f9fafb", borderRadius: 10, border: "1px solid #e5e7eb", padding: 20 }}>
          <h3 style={{ fontSize: 16, fontWeight: 800, color: "#0f172a", margin: "0 0 14px" }}>
            Frequently Asked Questions
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {faqs.map((f, i) => {
              const isFaqOpen = openFaq === i;
              return (
                <div
                  key={i}
                  style={{
                    background: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: 10,
                    overflow: "hidden",
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isFaqOpen ? null : i)}
                    aria-expanded={isFaqOpen}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 12,
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      padding: "14px 18px",
                      textAlign: "left",
                    }}
                  >
                    <span style={{ fontSize: 14, fontWeight: 700, color: "#0f172a" }}>{f.question}</span>
                    <ChevronDown
                      size={18}
                      color="#9ca3af"
                      style={{
                        flexShrink: 0,
                        transition: "transform 0.2s",
                        transform: isFaqOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    />
                  </button>
                  {isFaqOpen && (
                    <div style={{ padding: "0 18px 16px" }}>
                      <p style={{ fontSize: 13, color: G, margin: 0, lineHeight: 1.6 }}>{f.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Lightbox */}
      {isOpen && (
        <div
          onClick={() => setActiveIndex(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.85)",
            zIndex: 3000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
          }}
        >
          <button
            onClick={() => setActiveIndex(null)}
            aria-label="Close"
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              background: "rgba(255,255,255,0.12)",
              border: "none",
              borderRadius: "50%",
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <X size={20} color="#fff" />
          </button>

          {items.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label="Previous"
              style={{
                position: "absolute",
                left: 16,
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(255,255,255,0.12)",
                border: "none",
                borderRadius: "50%",
                width: 44,
                height: 44,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <ChevronLeft size={22} color="#fff" />
            </button>
          )}

          {active.type === "youtube" ? (
            active.youtubeId ? (
              <iframe
                key={active.youtubeId}
                width="960"
                height="540"
                src={`https://www.youtube.com/embed/${active.youtubeId}?autoplay=1&rel=0`}
                title={active.alt}
                onClick={(e) => e.stopPropagation()}
                style={{ maxWidth: "90vw", maxHeight: "85vh", width: "90vw", aspectRatio: "16 / 9", borderRadius: 10, border: "none" }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div
                onClick={(e) => e.stopPropagation()}
                style={{ maxWidth: "90vw", maxHeight: "85vh", background: "#111", borderRadius: 10, padding: 40, color: "#fff", textAlign: "center" }}
              >
                Video coming soon.
              </div>
            )
          ) : active.type === "video" ? (
            <video
              key={active.src}
              src={active.src}
              poster={active.poster}
              controls
              autoPlay
              preload="none"
              onClick={(e) => e.stopPropagation()}
              style={{ maxWidth: "90vw", maxHeight: "85vh", borderRadius: 10 }}
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={active.src}
              alt={active.alt}
              decoding="async"
              onClick={(e) => e.stopPropagation()}
              style={{ maxWidth: "90vw", maxHeight: "85vh", borderRadius: 10, objectFit: "contain" }}
            />
          )}

          {items.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Next"
              style={{
                position: "absolute",
                right: 16,
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(255,255,255,0.12)",
                border: "none",
                borderRadius: "50%",
                width: 44,
                height: 44,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <ChevronRight size={22} color="#fff" />
            </button>
          )}

          <div
            style={{
              position: "absolute",
              bottom: 20,
              left: "50%",
              transform: "translateX(-50%)",
              color: "#fff",
              fontSize: 13,
              background: "rgba(0,0,0,0.4)",
              padding: "4px 12px",
              borderRadius: 20,
            }}
          >
            {activeIndex + 1} / {items.length}
          </div>
        </div>
      )}
    </div>
  );
}
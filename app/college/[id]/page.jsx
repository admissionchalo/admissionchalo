import { School } from "lucide-react";
import colleges from "../../../lib/colleges";
import CollegePage from "../../../components/college/CollegePage";

const TAB_TO_SLUG = {
  Overview: "overview", Courses: "courses", Fees: "fees",
  "Cut-offs": "cutoffs", Admissions: "admissions", Placements: "placements",
  Reviews: "reviews", Facilities: "facilities", "Student Clubs": "student-clubs",
};
const SLUG_TO_TAB = Object.fromEntries(Object.entries(TAB_TO_SLUG).map(([k, v]) => [v, k]));

const TAB_TITLES = {
  Overview: (n) => `${n}: Admission 2026, Cutoff, Courses, Fees, Placements, Ranking`,
  Courses: (n) => `${n} Courses & Fees Structure 2026`,
  Fees: (n) => `${n} Fees 2026`,
  "Cut-offs": (n) => `${n} Cut Off 2026`,
  Admissions: (n) => `${n} Admissions 2026`,
  Placements: (n) => `${n} Placements 2025`,
  Reviews: (n) => `${n} Reviews & Ratings`,
  Facilities: (n) => `${n} Facilities & Infrastructure`,
  "Student Clubs": (n) => `${n} Student Clubs & Activities`,
};

const TAB_DESCRIPTIONS = {
  Overview: (n) => `${n} overview 2026 — rankings, ratings, campus info and quick facts.`,
  Courses: (n) => `Courses at ${n} 2026 — B.Tech, MBA, MBBS and more with eligibility and fees.`,
  Fees: (n) => `${n} fees structure 2026 — semester wise and annual fees for all courses.`,
  "Cut-offs": (n) => `${n} cutoff 2026 — JEE Main, NEET, CAT cutoffs for all categories.`,
  Admissions: (n) => `${n} admission 2026 — eligibility, application process and important dates.`,
  Placements: (n) => `${n} placements 2026 — average package, highest CTC and top recruiters.`,
  Reviews: (n) => `${n} student reviews 2026 — honest ratings about campus life and faculty.`,
  Facilities: (n) => `${n} facilities — hostel, library, labs, sports and campus amenities.`,
  "Student Clubs": (n) => `${n} student clubs — technical, cultural, sports clubs and events.`,
};

export async function generateMetadata({ params, searchParams }) {
  const { id } = await params;
  const sp = await searchParams;
  const data = colleges[id];

  if (!data) {
    return { title: "College Not Found | AdmissionChalo" };
  }

  const slugFromUrl = sp?.tab || "overview";
  const activeTab = SLUG_TO_TAB[slugFromUrl] || "Overview";

  const title = `${TAB_TITLES[activeTab]?.(data.name)} | AdmissionChalo`;
  const description = TAB_DESCRIPTIONS[activeTab]?.(data.name) ?? `${data.name} — complete info for 2026 admissions.`;
  const canonicalUrl = `https://admissionchalo.vercel.app/college/${id}${activeTab !== "Overview" ? `?tab=${TAB_TO_SLUG[activeTab]}` : ""}`;

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "AdmissionChalo",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function Page({ params }) {
  const { id } = await params;
  const data = colleges[id];

  if (!data) {
    return (
      <div style={{ textAlign: "center", padding: 80, fontFamily: "Segoe UI, sans-serif" }}>
        <School size={48} color="#0A0A0A" style={{ marginBottom: 16 }} />
        <h2 style={{ color: "#111827" }}>College not found</h2>
        <p style={{ color: "#6b7280" }}>
          No college found with ID: <strong>{id}</strong>
        </p>
      </div>
    );
  }

  return <CollegePage data={data} />;
}

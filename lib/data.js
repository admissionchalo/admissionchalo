export const streamBadgeColors = {
  Private: { bg: "bg-[#FFF6DF]", text: "text-[#2E2F31]" },
  Government: { bg: "bg-[#E9F5EC]", text: "text-[#166534]" },
  Deemed: { bg: "bg-[#FFF6DF]", text: "text-[#8A6200]" },
  Engineering: { bg: "bg-[#FFF6DF]", text: "text-[#2E2F31]" },
  Medical: { bg: "bg-[#FCE9EC]", text: "text-[#B91C4B]" },
  Management: { bg: "bg-[#FFF6DF]", text: "text-[#8A6200]" },
  Law: { bg: "bg-[#E9F5EC]", text: "text-[#166534]" },
};

export const tagColors = {
  New: { bg: "bg-[#E9F5EC]", text: "text-[#166534]" },
  Popular: { bg: "bg-[#FFF6DF]", text: "text-[#2E2F31]" },
  "In Demand": { bg: "bg-[#FFF6DF]", text: "text-[#8A6200]" },
};

export const popularCities = [
  { name: "Delhi NCR", icon: "🏛️", colleges: 420 },
  { name: "Bengaluru", icon: "🌆", colleges: 310 },
  { name: "Mumbai", icon: "🌊", colleges: 275 },
  { name: "Pune", icon: "⛰️", colleges: 240 },
  { name: "Chennai", icon: "🛕", colleges: 190 },
  { name: "Hyderabad", icon: "💎", colleges: 205 },
  { name: "Kolkata", icon: "🌉", colleges: 160 },
  { name: "Jaipur", icon: "🏰", colleges: 130 },
];

import { Cog, BarChart3, Stethoscope, PenTool, Scale, Pill, Monitor, Landmark } from "lucide-react";

export const courses = [
  { name: "B.Tech", icon: Cog, color: "#2E2F31", count: "1,800+ Colleges" },
  { name: "MBA", icon: BarChart3, color: "#F9B929", count: "1,200+ Colleges" },
  { name: "MBBS", icon: Stethoscope, color: "#2E2F31", count: "540+ Colleges" },
  { name: "B.Des", icon: PenTool, color: "#F9B929", count: "310+ Colleges" },
  { name: "LLB", icon: Scale, color: "#2E2F31", count: "480+ Colleges" },
  { name: "B.Pharma", icon: Pill, color: "#F9B929", count: "690+ Colleges" },
  { name: "BCA", icon: Monitor, color: "#2E2F31", count: "950+ Colleges" },
  { name: "B.Arch", icon: Landmark, color: "#F9B929", count: "220+ Colleges" },
];

export const latestNews = [
  { id: 1, title: "JEE Main 2026 registration begins — direct link inside", time: "2 hours ago", category: "Exam" },
  { id: 2, title: "NEET UG counselling schedule released for round 2", time: "5 hours ago", category: "Counselling" },
  { id: 3, title: "Top 10 MBA colleges accepting CAT 2025 score", time: "1 day ago", category: "Ranking" },
  { id: 4, title: "CLAT 2026 application form correction window open", time: "1 day ago", category: "Notification" },
  { id: 5, title: "UGC releases new guidelines for private universities", time: "2 days ago", category: "Policy" },
];

export const ourProducts = [
  { title: "College Compare", icon: "Scale", color: "#166534" },
  { title: "College Reviews", icon: "ThumbsUp", color: "#2E2F31" },
  { title: "B.Tech Companion", icon: "Ruler", color: "#166534" },
  { title: "NEET Companion", icon: "Stethoscope", color: "#2E2F31" },
  { title: "List of Courses", icon: "ListChecks", color: "#166534" },
  { title: "College Applications", icon: "Laptop", color: "#2E2F31" },
];

export const predictors = [
  {
    title: "Rank Predictor",
    desc: "Enter your mock exam score to see your expected all-India rank instantly",
    icon: "TrendingUp",
    color: "#2E2F31",
    cta: "Predict My Rank",
  },
  {
    title: "College Predictor",
    desc: "Get a personalised list of best-fit colleges based on your rank",
    icon: "Landmark",
    color: "#8A6200",
    cta: "Predict My College",
  },
  {
    title: "Fees Calculator",
    desc: "See your complete course cost breakdown across all years in one click",
    icon: "Calculator",
    color: "#2E2F31",
    cta: "Calculate Fees",
  },
];

export const testimonials = [
  {
    name: "Ananya Sharma",
    college: "B.Tech, Bennett University",
    text: "The predictor gave me an exact rank range, saved time, and helped me find the right college.",
    avatar: "AS",
    color: "#2E2F31",
  },
  {
    name: "Rohit Verma",
    college: "MBA, Galgotias University",
    text: "Talking to a counsellor cleared my confusion, and now I'm at my dream college.",
    avatar: "RV",
    color: "#F9B929",
  },
  {
    name: "Priya Nair",
    college: "MBBS, Sharda University",
    text: "Got all the information in one place — comparing fees and placements was easy.",
    avatar: "PN",
    color: "#166534",
  },
];

// Add each story's real YouTube video ID (the part after "v=" in the URL).
// Leave as "" if you don't have a video yet — the card still shows the poster + play button.
export const impactStories = [
  {
    name: "Vedanth Raje",
    role: "Parent: Rajesh Raje, Maharashtra",
    college: "Vishwakarma University Pune — CSE",
    stream: "Engineering",
    initials: "VR",
    colors: ["#2E2F31", "#55565A"],
    youtubeId: "",
  },
  {
    name: "Dr. Devashish Sharma",
    role: "Student, Jaipur, Rajasthan",
    college: "Himalayan Institute of Medical Sciences — General Surgery",
    stream: "Medical",
    initials: "DS",
    colors: ["#8A6200", "#C99416"],
    youtubeId: "",
  },
  {
    name: "Ashish Jain",
    role: "Parent, New Delhi",
    college: "SDU Kolar — Medical",
    stream: "Medical",
    initials: "AJ",
    colors: ["#166534", "#22C55E"],
    youtubeId: "",
  },
  {
    name: "Jaipal Sonone",
    role: "Parent: Prachee Jaipal Sonone, Maharashtra",
    college: "NIT Bhopal",
    stream: "Engineering",
    initials: "JS",
    colors: ["#2E2F31", "#8A6200"],
    youtubeId: "",
  },
];

export const heroBanners = [
  {
    id: 1,
    name: "Bennett University",
    image:
      "https://res.cloudinary.com/jqlco1yf/image/upload/f_auto,q_auto,w_1600,h_600,c_fill,g_auto/Bennett_1.jpg_1",
    mobileImage:
      "https://res.cloudinary.com/jqlco1yf/image/upload/v1786709940/BENNETT_3.jpg.jpg",
  },
  {
    id: 2,
    name: "Sharda University",
    image:
      "https://res.cloudinary.com/jqlco1yf/image/upload/f_auto,q_auto,w_1600,h_600,c_fill,g_auto/v1786466415/SHARDA.jpg.jpg",
    mobileImage:
      "https://res.cloudinary.com/jqlco1yf/image/upload/v1786709945/GALGOTIAS_1.jpg.jpg",
  },
  {
    id: 3,
    name: "NIET",
    image:
      "https://res.cloudinary.com/jqlco1yf/image/upload/f_auto,q_auto,w_1600,h_600,c_fill,g_auto/v1786466397/NIET.jpg.jpg",
    mobileImage:
      "https://res.cloudinary.com/jqlco1yf/image/upload/v1786710116/NIET.jpg.jpg",
  },
  {
    id: 4,
    name: "UPES",
    image:
      "https://res.cloudinary.com/jqlco1yf/image/upload/f_auto,q_auto,w_1600,h_600,c_fill,g_auto/v1786466389/UPES.jpg.jpg",
    mobileImage:
      "https://res.cloudinary.com/jqlco1yf/image/upload/v1786709935/IILM_1.jpg.jpg",
  },
  {
    id: 5,
    name: "Banner 5",
    image:
      "https://res.cloudinary.com/jqlco1yf/image/upload/f_auto,q_auto,w_1600,h_600,c_fill,g_auto/v1786466378/1.jpg.jpg",
    mobileImage: null,
  },
];
export const trendingCourses = [
  { name: "B.Tech Computer Science", icon: "Laptop", enrolled: "12,400 enrolled", level: "Undergraduate", hot: true },
  { name: "MBA Business Analytics", icon: "BarChart3", enrolled: "8,900 enrolled", level: "Postgraduate", hot: true },
  { name: "B.Des UX/UI Design", icon: "Palette", enrolled: "4,200 enrolled", level: "Undergraduate", hot: false },
  { name: "BCA Data Science", icon: "BrainCircuit", enrolled: "6,750 enrolled", level: "Undergraduate", hot: true },
  { name: "B.Sc Data Analytics", icon: "LineChart", enrolled: "5,100 enrolled", level: "Undergraduate", hot: false },
  { name: "LLB Corporate Law", icon: "Scale", enrolled: "3,600 enrolled", level: "Undergraduate", hot: false },
];

export const trendingCertificates = [
  { name: "Digital Marketing Pro", provider: "Google", duration: "6 weeks", rating: 4.7, color: "#2E2F31", icon: "Megaphone" },
  { name: "Financial Modelling", provider: "CFA Institute", duration: "8 weeks", rating: 4.6, color: "#F9B929", icon: "Calculator" },
  { name: "Full Stack Development", provider: "Meta", duration: "12 weeks", rating: 4.8, color: "#166534", icon: "Code2" },
];

export const trendingSpecializations = [
  { name: "Artificial Intelligence", icon: "Bot", tag: "In Demand" },
  { name: "Business Analytics", icon: "BarChart3", tag: "Popular" },
  { name: "FinTech", icon: "CreditCard", tag: "New" },
  { name: "Cybersecurity", icon: "ShieldCheck", tag: "In Demand" },
  { name: "Product Management", icon: "Compass", tag: "Popular" },
  { name: "Cloud Computing", icon: "Cloud", tag: "In Demand" },
];

export const upcomingExams = [
  { name: "JEE Main 2026", date: "24 Jan – 1 Feb", stream: "Engineering", color: "#2E2F31" },
  { name: "NEET UG 2026", date: "3 May", stream: "Medical", color: "#B91C4B" },
  { name: "CAT 2026", date: "29 Nov", stream: "Management", color: "#F9B929" },
  { name: "CLAT 2026", date: "7 Dec", stream: "Law", color: "#166534" },
  { name: "BITSAT 2026", date: "20 May", stream: "Engineering", color: "#2E2F31" },
  { name: "NATA 2026", date: "12 Apr", stream: "Engineering", color: "#2E2F31" },
  { name: "AIIMS UG 2026", date: "18 May", stream: "Medical", color: "#B91C4B" },
  { name: "XAT 2026", date: "4 Jan", stream: "Management", color: "#F9B929" },
];

export const announcements = [
  { icon: "GraduationCap", text: "Top MBA Colleges in Delhi NCR — Free Counselling" },
  { icon: "FileText", text: "JEE Main 2026 Result Out — Check Now" },
  { icon: "Megaphone", text: "Bennett University Admissions Open 2026" },
];
export const featuredColleges = [
  {
    name: "New Horizon College of Engineering",
    logo: "https://placehold.co/400x300/F9B929/2E2F31?text=Vide",
    location: "Bangalore",
    highlight: "Top Engg College in India | Highest Package: 45 LPA",
  },
  {
    name: "Amity University",
    logo: "https://placehold.co/400x300/F9B929/2E2F31?text=Vide",
    location: "Noida (Delhi NCR)",
    highlight: "Ranked amongst the top 3% universities globally",
  },
  {
    name: "SRM University Delhi-NCR",
    logo:"https://placehold.co/400x300/F9B929/2E2F31?text=Vide",
    location: "Sonepat",
    highlight: "Admissions open 2026",
  },
  {
    name: "HKBK College of Engineering",
    logo: "https://placehold.co/400x300/F9B929/2E2F31?text=Vide",
    location: "Bangalore",
    highlight: "Ranked among top engg colleges in India | Placement 24.60 LPA | B.Tech 2026 admissions open",
  },
];

export const collegeVideos = [
  {
    id: "GIMS-PODCAST",
    youtubeId: "oiyF2UJsnXg",
    thumbnail: "https://res.cloudinary.com/jqlco1yf/image/upload/v1786608828/GIMS_PODCAST.jpg",
    title: `Exclusive Podcast with Dr. Bhupender Kumar Som | Director, GNIOT Institute of Management Studies
`,
    channel: "AdmissionChalo.com",
    views: "33.6K",
    date: "12/08/2026",
    likes: 30,
  },
  {
    id: "BENNETT-BTECH-STUDENT-REVIEW",
    youtubeId: "sQIIJJAsNMA",
    thumbnail: "https://res.cloudinary.com/jqlco1yf/image/upload/v1786609833/BENNETT_BTECH_STUDENTS_REVIEW.png",
    title: ` Bennett University B.Tech Student Review 2026 | Placements, Campus Life & Reality Check! #bennett `,
    channel: "AdmissionChalo.com",
    views: "2170",
    date: "12/08/2026",
    likes: 100,
  },
  {
    id: "BENNETT-MBA-STUDENT-PODCAST",
    youtubeId: "TNS33gmgWuU",
    thumbnail: "https://res.cloudinary.com/jqlco1yf/image/upload/v1786609829/BENNETT_MBA_STUDENTS_PODCAST.png",
    title: `🎙️ Bennett University MBA Podcast | Students Reveal Everything You Need to Know! #bennettuniversity`,

    channel: "AdmissionChalo.com",
    views: "217",
    date: "Mar 3, 2026",
    likes: 1,
  },
  {
    id: "GL-BAJAJ-TOUR",
    youtubeId: "pzEkHJecP9I",
    thumbnail: "https://res.cloudinary.com/jqlco1yf/image/upload/v1786609816/GL_BAJAJ_CAMPUS_TUUR.jpg",
    title: `G L Bajaj Greater Noida | G L Bajaj Campus Tour | G L Bajaj Admission open 2026-27 #glbajaj
`,
    channel: "AdmissionChalo.com",
    views: "217",
    date: "Mar 3, 2026",
    likes: 180,
  },
  {
    id: "NIET-PODCAST",
    youtubeId: "DwE9REMOlv4",
    thumbnail: "https://res.cloudinary.com/jqlco1yf/image/upload/v1786609825/NIET_Podcast_YouTube_Thumbnail_1.jpg",
    title: `NIET PGDM Podcast with Dr. Arun Sir | MBA vs Skills? AI ka Future? PGDM Truths No One Tells You !
`,
    channel: "AdmissionChalo.com",
    views: "217",
    date: "Mar 3, 2026",
    likes: 178,
  },
 {
    id: "UPES-CAMPUS-TOUR",
    youtubeId: "873BIbqhy5I",
    thumbnail: "https://res.cloudinary.com/jqlco1yf/image/upload/v1786609836/UPES_CAPUS_TOUR.png",
    title: `UPES Dehradun Campus Tour...😍 #UPES`,
    channel: "AdmissionChalo.com",
    views: "217",
    date: "Mar 3, 2026",
    likes: 165,
  },
];
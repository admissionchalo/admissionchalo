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
    color: "#166534",
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
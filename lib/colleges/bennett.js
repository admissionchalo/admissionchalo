const bennett = {
  id: "bennett-university",
  name: "Bennett University",
  shortName: "Bennett University (BU)",
  code: "BU",
  location: "Greater Noida, UP",
  type: "Private",
  established: 2016,
  campusSize: "68 Acres",
  rating: 4.2,
  totalReviews: 346,
  nirf: "#65 (Management)",
  naac: "A+",
  affiliation: "University Grants Commission (UGC)",
  approval: "UGC, AICTE, BCI, AIU",
  colors: { primary: "#0A0A0A", accent: "#E8A317" },
  logo: "https://res.cloudinary.com/jqlco1yf/image/upload/v1786607440/Bennett-University-logo1-.png",

  heroImage: {
    desktop: "https://res.cloudinary.com/jqlco1yf/image/upload/v1786709913/Bennett_JPEG.jpg.jpg",
    mobile: "https://res.cloudinary.com/jqlco1yf/image/upload/v1786639105/bennett_2.jpg.jpg",
  },



  stories: [
    { title: "Highest international package of Rs.1.2 Crore in 2025 B.Tech placements", icon: "rocket" },
    { title: "Academic partnership with Georgia Institute of Technology, USA for CS curriculum", icon: "globe" },
    { title: "NAAC A+ accreditation — ranked 25th among top private new-age universities", icon: "award" },
    { title: "68-acre state-of-the-art campus with supercomputing facility", icon: "cpu" },
  ],

  about: "Bennett University is a private university located in Greater Noida, Uttar Pradesh, in the Delhi NCR region. Established by The Times Group, Bennett University offers undergraduate, postgraduate and doctoral programmes across disciplines including Engineering, Computer Science, Artificial Intelligence, Management, Law, Media, Design, Liberal Arts and Applied Sciences. Bennett University focuses on industry-oriented education, practical learning, research, innovation and professional development. The university has a 68-acre campus with academic facilities, laboratories, sports facilities, student accommodation and spaces for extracurricular activities. Students looking for higher education in Greater Noida can consider Bennett University based on courses, fees, admission requirements, placements, infrastructure, faculty, scholarships, campus life and career opportunities.",

  aboutHighlights: [
    { label: "Accreditation", text: "NAAC grade A+ rated. Approved by UGC and BCI, and a member of the Association of Indian Universities (AIU)." },
    { label: "Rankings", text: "Ranked #23 under the University category in India Today Rankings 2025, and #65 in Management (NIRF 2025)." },
    { label: "Fees", text: "Total tuition fees across programmes range from approx. Rs.7.5 L to Rs.16.15 L depending on the course." },
    { label: "Scholarship", text: "Merit scholarships of up to 50% tuition fee waiver available based on JEE Main percentile or Class 12 marks." },
    { label: "Placements", text: "Average B.Tech CSE package for 2025 was Rs.12.5 LPA, with the highest international offer at Rs.1.2 Crore." },
    { label: "Admission Criteria", text: "Entrance-based admission through JEE Main, SAT India, CUET, CAT, MAT, CMAT or GMAT depending on the programme." },
    { label: "Academic Collaborations", text: "CS curriculum co-developed with Georgia Institute of Technology, USA; MBA programme partnered with Cornell University." },
    { label: "Campus Area", text: "Spread across 68 acres with academic blocks, hostels, sports complex and a supercomputing facility." },
    { label: "Startups", text: "Bennett Hatchery, the university's DPIIT-recognised startup incubator, supports student entrepreneurs with mentorship and seed funding." },
  ],

  brochureUrl: "https://example.com/bennett-university-brochure-2026.pdf",

  aboutPoints: [
    "NAAC A+ accreditation | Ranked 25th among top private new-age universities in India.",
    "Times Higher Education (THE) Global Rankings 2026 — Top 100 globally in Interdisciplinary Science.",
    "B.Tech CSE avg package Rs.12.5 LPA | Highest domestic package Rs.60 LPA (2025).",
    "CS curriculum co-developed with Georgia Institute of Technology, USA.",
    "Cornell University partnership for MBA program | Bennett Hatchery startup incubator.",
  ],

  // Gallery grid: image items keep the original flat-string form (still supported),
  // video items use the { type: "youtube", youtubeId, thumbnail/poster, title } shape —
  // same convention as introVideo/facilityVideos below. Fill in youtubeId once the
  // actual campus tour videos are uploaded/published.
  gallery: [
    { type: "image", src: "https://res.cloudinary.com/jqlco1yf/image/upload/v1786963042/BENNETT_5.jpg.jpg", alt: "Bennett University campus view", caption: "Campus View" },
    { type: "image", src: "https://res.cloudinary.com/jqlco1yf/image/upload/v1786963038/BENNETT_12.jpg.jpg", alt: "Bennett University academic block", caption: "Academic Block" },
    { type: "image", src: "https://res.cloudinary.com/jqlco1yf/image/upload/v1786963038/BENNETT_8.jpg.jpg", alt: "Bennett University computer lab", caption: "Lab" },
    { type: "image", src: "https://res.cloudinary.com/jqlco1yf/image/upload/v1786963048/BENNETT_9.jpg.jpg", alt: "Bennett University sports complex", caption: "Sports Complex" },
    { type: "image", src: "https://res.cloudinary.com/jqlco1yf/image/upload/v1786963048/BENNETT_11.jpg.jpg", alt: "Bennett University ", caption: "" },
    { type: "image", src: "https://res.cloudinary.com/jqlco1yf/image/upload/v1786963045/BENNETT_4.jpg.jpg", alt: "Bennett University Campus view", caption: "campus View" },
    {
   
      type: "youtube",
      youtubeId: "PZMHnE71cuM",
      thumbnail: "https://res.cloudinary.com/jqlco1yf/image/upload/v1786963281/PZMHnE71cuM-HD.jpg",
      title: "Empowering Tomorrow: A Journey Through Bennett University",
      alt: "Empowering Tomorrow: A Journey Through Bennett University",
    },
    {
      type: "youtube",
      youtubeId: "alu9MOeaXW4",
      thumbnail: "https://res.cloudinary.com/jqlco1yf/image/upload/v1786963280/alu9MOeaXW4-HD.jpg",
      title: "Sport at Bennett University: The fitness first life beyond academics and buzzing campus",
      alt: "Sport at Bennett University — fitness first life beyond academics",
    },
    {
      type: "youtube",
      youtubeId: "Fm6apMnj2X4",
      thumbnail: "https://res.cloudinary.com/jqlco1yf/image/upload/v1786963280/Fm6apMnj2X4-HD.jpg",
      title: "From Creativity to Career: School of Design, Bennett University",
      alt: "From Creativity to Career: School of Design, Bennett University",
    },
    {
      type: "youtube",
      youtubeId: "-x5XP4yNyrg",
      thumbnail: "https://res.cloudinary.com/jqlco1yf/image/upload/v1786963278/-x5XP4yNyrg-HD.jpg",
      title: "Elevate Your Tech Career at Bennett University: School of Computer Science Engineering & Technology",
      alt: "Elevate Your Tech Career at Bennett University — School of Computer Science Engineering & Technology",
    },
    {
      type: "youtube",
      youtubeId: "QXjr7Zz5Dgc",
      thumbnail: "https://res.cloudinary.com/jqlco1yf/image/upload/v1786963278/QXjr7Zz5Dgc-HD.jpg",
      title: "Empowering Future Leaders at Bennett University: School of Management",
      alt: "Empowering Future Leaders at Bennett University: School of Management",
    },
    {
      type: "youtube",
      youtubeId: "S8qAIxy6ijE",
      thumbnail: "https://res.cloudinary.com/jqlco1yf/image/upload/v1786963277/S8qAIxy6ijE-HD.jpg",
      title: "Revolutionizing AI Education at Bennett University: School of Artificial Intelligence",
      alt: "Revolutionizing AI Education at Bennett University: School of Artificial Intelligence",
    },
    {
      type: "youtube",
      youtubeId: "ujXj_cRP5aA",
      thumbnail: "https://res.cloudinary.com/jqlco1yf/image/upload/v1786963276/ujXj_cRP5aA-HD.jpg",
      title: "Pioneering Digital-Focussed Media Education at Bennett University: Times School of Media",
      alt: "Pioneering Digital-Focussed Media Education at Bennett University: Times School of Media",
    },
  ],
  // Gallery-section-specific FAQs (kept separate from the site-wide `faqs` array below,
  // which covers admissions/placements/founding — different topic, different page section).
  galleryFaqs: [
    {
      q: "Where can I see Bennett University campus photos?",
      a: "You can explore the official Bennett University gallery and visual resources on this page — academic buildings, classrooms, laboratories, sports facilities, events and student activities are all covered.",
    },
    {
      q: "What can I see in the gallery?",
      a: "Campus buildings, classrooms, laboratories, sports facilities, events and student activities, along with campus tour videos.",
    },
    {
      q: "Can I compare Bennett University's campus with other universities in Delhi NCR?",
      a: "Yes — the gallery photos and videos can help you compare the Bennett University campus environment with other universities in Greater Noida and Delhi NCR before you shortlist.",
    },
  ],

  
  introVideo: {
    youtubeId: "PZMHnE71cuM",
    thumbnail: "https://res.cloudinary.com/jqlco1yf/image/upload/v1786963281/PZMHnE71cuM-HD.jpg",
    title: "Empowering Tomorrow: A Journey Through Bennett University",
  },
  highlights: [
    ["Established", "2016"],
    ["Founded By", "The Times Group (Bennett, Coleman & Co. Ltd.)"],
    ["Exam Accepted", "JEE Main, SAT, CUET, CAT, MAT, CMAT, GMAT, NMAT"],
    ["Total Courses", "68 Courses across 11 Streams"],
    ["Institute Type", "Private University"],
    ["Affiliation", "University Grants Commission (UGC)"],
    ["Approval", "UGC, AICTE, BCI, AIU"],
    ["Accreditation", "NAAC A+"],
    ["Campus Size", "68 Acres"],
    ["NIRF Ranking (Management)", "#65 (2025)"],
    ["India Today Ranking", "Top 50 Private Engineering Colleges"],
    ["Highest Package (2025)", "Rs.1.2 Crore (International)"],
    ["Average Package B.Tech CSE (2025)", "Rs.12.5 LPA"],
    ["Location", "Plot Nos 8-11, TechZone II, Greater Noida, UP 201310"],
  ],

  rankings: [
    { cat: "Management (NIRF)", rank: "#65" },
    { cat: "Overall (India Today)", rank: "#23" },
    { cat: "Private Universities (IIRF)", rank: "#24" },
  ],

  faqs: [
    {
      q: "Who founded Bennett University and when?",
      a: "Bennett University was founded in 2016 by The Times Group (Bennett, Coleman & Company Limited), India's largest media conglomerate. It is recognized by UGC and holds NAAC A+ accreditation.",
    },
    {
      q: "What is the admission process for B.Tech at Bennett University?",
      a: "B.Tech admissions are based on JEE Main, SAT India, or CUET scores. Candidates must have secured minimum 55% marks in 10+2 with PCM. Merit-based scholarships are available based on JEE scores.",
    },
    {
      q: "What are the placement statistics at Bennett University?",
      a: "For 2025 batch, the highest international package was Rs.1.2 Crore and highest domestic package was Rs.60 LPA. Average package for B.Tech CSE was Rs.12.5 LPA. Top recruiters include Google, Microsoft, Goldman Sachs, Amazon and Adobe.",
    },
    {
      q: "What makes Bennett University unique?",
      a: "Bennett's CS curriculum is co-developed with Georgia Institute of Technology USA. The MBA program has a Cornell University partnership. The Times Group network provides unparalleled internship and placement opportunities.",
    },
  ],

  courses: [
    { name: "B.Tech Computer Science & Engineering", mode: "Full Time", seats: "-", fees: "Rs.16.15 L", exam: "JEE Main / SAT / CUET", duration: "4 Years" },
    { name: "B.Tech Artificial Intelligence & ML", mode: "Full Time", seats: "-", fees: "Rs.16.15 L", exam: "JEE Main / SAT / CUET", duration: "4 Years" },
    { name: "B.Tech Electronics & Communication", mode: "Full Time", seats: "-", fees: "Rs.16.15 L", exam: "JEE Main / SAT / CUET", duration: "4 Years" },
    { name: "B.Tech Mechanical Engineering", mode: "Full Time", seats: "-", fees: "Rs.16.15 L", exam: "JEE Main / SAT / CUET", duration: "4 Years" },
    { name: "MBA (Master of Business Admin)", mode: "Full Time", seats: "-", fees: "Rs.9.5 L", exam: "CAT / MAT / CMAT / GMAT / BU-MAT", duration: "2 Years" },
    { name: "BCA (Bachelor of Computer App)", mode: "Full Time", seats: "-", fees: "Rs.8 L", exam: "CUET / Merit", duration: "3 Years" },
    { name: "BBA (Bachelor of Business Admin)", mode: "Full Time", seats: "-", fees: "Rs.7.5 L", exam: "CUET / Merit", duration: "3 Years" },
    { name: "BBA LLB (Hons.)", mode: "Full Time", seats: 60, fees: "Rs.9 L", exam: "CLAT / Merit", duration: "5 Years" },
    { name: "M.Tech Computer Science & Engineering", mode: "Full Time", seats: "-", fees: "Rs.4.35 L", exam: "GATE", duration: "2 Years" },
  ],

  courseIntro: "Bennett University offers UG, PG and doctoral-level programmes across Engineering, Management, Design, Law, Media, Liberal Arts and Applied Sciences. Students can check course-wise fees, eligibility criteria and accepted entrance exams in the table below.",

  courseDetails: "Bennett University offers a variety of courses for students from different academic backgrounds. Undergraduate programmes are available for students after Class 12 and postgraduate programmes for graduates. For students interested in engineering and technology, B.Tech programmes are an important option. Management aspirants can consider BBA and MBA programmes, while students interested in law, media, design and liberal arts can explore programmes in these fields. The best course depends on the student's interests, academic background, career objectives, eligibility and budget.",

  courseFaqs: [
    { q: "What courses does Bennett University offer?", a: "It offers undergraduate, postgraduate and other programmes across Engineering, Computer Science, AI, Management, Law, Media, Design, Liberal Arts and Applied Sciences." },
    { q: "Which are the popular courses at Bennett University?", a: "Popular programme areas include B.Tech, MBA, BBA, Computer Science, AI, Law, Media, Design and Liberal Arts." },
    { q: "Does Bennett University offer undergraduate and postgraduate courses?", a: "Yes, it offers both, subject to programme-specific eligibility." },
    { q: "Does Bennett University offer B.Tech?", a: "Yes, it offers B.Tech programmes in engineering and technology-related disciplines." },
    { q: "Does Bennett University offer MBA?", a: "Yes, it offers an MBA programme for postgraduate management education." },
    { q: "Which is the best course at Bennett University?", a: "There is no single best course; students should choose according to interests, career goals, fees and placement opportunities." },
  ],

  courseGroups: [
    {
      name: "B.E. / B.Tech", count: 13, feeRange: "14 L - 18.6 L", pct12: "55-65 %", pctGrad: "",
      exams: ["JEE Main", "CUET"], moreExams: 3,
      allExams: ["JEE Main", "CUET", "SAT India", "BUSAT", "Direct Merit"],
      specializations: ["Computer Science & Engineering", "Artificial Intelligence & ML", "Electronics & Communication", "Mechanical Engineering", "Biotechnology", "Civil Engineering", "CSE - Cybersecurity", "CSE - Data Science"],
    },
    {
      name: "M.E. / M.Tech", count: 6, feeRange: "3.2 L - 4.35 L", pct12: "55 %", pctGrad: "50-60 %",
      exams: ["GATE", "CUET"], moreExams: 2,
      allExams: ["GATE", "CUET", "BUSAT", "Direct Merit"],
      specializations: ["Computer Science & Engineering", "Artificial Intelligence", "VLSI Design", "Structural Engineering", "Electronics & Communication"],
    },
    {
      name: "B.Des", count: 5, feeRange: "11 L - 22 L", pct12: "50 %", pctGrad: "",
      exams: ["NIFT Entrance Exam", "UCEED"], moreExams: 5,
      allExams: ["NIFT Entrance Exam", "UCEED", "NID DAT", "CEED", "Direct Merit", "Portfolio-based"],
      specializations: ["Communication Design", "Fashion Design", "Product Design", "Advanced Animation & VFX Design", "UX Design"],
    },
    {
      name: "MBA / PGDM", count: 5, feeRange: "12 L - 15.9 L", pct12: "60 %", pctGrad: "50 %",
      exams: ["CAT", "MAT"], moreExams: 7,
      allExams: ["CAT", "MAT", "XAT", "CMAT", "GMAT", "NMAT", "BU-MAT", "CUET-PG", "Direct Merit"],
      specializations: ["Finance", "Marketing", "Human Resources", "Business Analytics", "International Business"],
    },
    {
      name: "BBA", count: 6, feeRange: "6.3 L - 11.5 L", pct12: "60 %", pctGrad: "",
      exams: ["CUET"], moreExams: 1,
      allExams: ["CUET", "Direct Merit"],
      specializations: ["General Management", "Business Analytics", "Digital Marketing", "Finance", "International Business", "Entrepreneurship"],
    },
    {
      name: "MCA", count: 3, feeRange: "4 L - 4.2 L", pct12: "55 %", pctGrad: "50 %",
      exams: ["JEE Main", "CUET"], moreExams: 3,
      allExams: ["JEE Main", "CUET", "NIMCET", "Direct Merit"],
      specializations: ["General MCA", "AI & Data Science", "Cloud Computing"],
    },
    {
      name: "B.A. LL.B. (Hons.)", count: 1, feeRange: "17 L - 18 L", pct12: "60 %", pctGrad: "",
      exams: ["CLAT", "CUET"], moreExams: 1,
      allExams: ["CLAT", "CUET", "LSAT India"],
      specializations: ["B.A. LL.B. (Hons.) — 5 Year Integrated"],
    },
    {
      name: "BCA", count: 3, feeRange: "5.7 L - 8 L", pct12: "55-60 %", pctGrad: "",
      exams: ["CUET", "CBSE 12th"], moreExams: 3,
      allExams: ["CUET", "CBSE 12th", "UP 12th", "Direct Merit"],
      specializations: ["General BCA", "Data Science", "Artificial Intelligence"],
    },
    {
      name: "B.A.", count: 12, feeRange: "6.5 L - 18.8 L", pct12: "60 %", pctGrad: "",
      exams: ["CUET", "CBSE 12th"], moreExams: 2,
      allExams: ["CUET", "CBSE 12th", "UP 12th"],
      specializations: ["Economics", "Political Science", "English", "Psychology", "Sociology", "Journalism & Mass Communication", "History"],
    },
    {
      name: "B.Com", count: 2, feeRange: "4.8 L - 4.9 L", pct12: "55 %", pctGrad: "",
      exams: ["CBSE 12th", "UP 12th"], moreExams: 1,
      allExams: ["CBSE 12th", "UP 12th", "CUET"],
      specializations: ["B.Com (Hons.)", "B.Com (Hons.) with ACCA"],
    },
    {
      name: "Ph.D.", count: 19, feeRange: "3.6 L - 4.35 L", pct12: "", pctGrad: "50-75 %",
      exams: ["GATE"], moreExams: 0,
      allExams: ["GATE", "BRAT (Bennett Research Aptitude Test)", "UGC-NET"],
      specializations: ["Engineering", "Management", "Law", "Media & Communication", "Design", "Computer Science", "Applied Sciences"],
    },
    {
      name: "B.Sc.", count: 1, feeRange: "5.3 L", pct12: "60 %", pctGrad: "",
      exams: ["CUET", "CBSE 12th"], moreExams: 3,
      allExams: ["CUET", "CBSE 12th", "UP 12th", "Direct Merit"],
      specializations: ["B.Sc. Applied Sciences"],
    },
    {
      name: "BBA LL.B. (Hons.)", count: 1, feeRange: "18 L", pct12: "60 %", pctGrad: "",
      exams: ["CBSE 12th", "UP 12th"], moreExams: 1,
      allExams: ["CBSE 12th", "UP 12th", "CLAT"],
      specializations: ["BBA LL.B. (Hons.) — 5 Year Integrated"],
    },
    {
      name: "LL.M.", count: 1, feeRange: "1.5 L", pct12: "", pctGrad: "50 %",
      exams: ["CLAT", "CUET-PG"], moreExams: 0,
      allExams: ["CLAT PG", "CUET-PG", "Direct Merit"],
      specializations: ["LL.M. — 1 Year"],
    },
    {
      name: "PG Diploma", count: 3, feeRange: "1.5 L - 6 L", pct12: "", pctGrad: "50-55 %",
      exams: ["JEE Main", "CUET"], moreExams: 1,
      allExams: ["JEE Main", "CUET", "Direct Merit"],
      specializations: ["PGD in TV & Digital Journalism", "PGD in Business Analytics", "PGD in Design"],
    },
    {
      name: "M.A.", count: 3, feeRange: "6 L - 6.7 L", pct12: "", pctGrad: "50 %",
      exams: [], moreExams: 0,
      allExams: ["Direct Merit (Graduation-based)"],
      specializations: ["M.A. Journalism & Mass Communication", "M.A. English", "M.A. Economics"],
    },
    {
      name: "M.Sc.", count: 2, feeRange: "3.8 L - 6 L", pct12: "", pctGrad: "50-60 %",
      exams: [], moreExams: 0,
      allExams: ["Direct Merit (Graduation-based)"],
      specializations: ["M.Sc. Applied Physics", "M.Sc. Applied Mathematics"],
    },
    {
      name: "Certificate", count: 2, feeRange: "75 K", pct12: "", pctGrad: "50 %",
      exams: [], moreExams: 0,
      allExams: ["Direct Merit (Graduation-based)"],
      specializations: ["Certificate in Digital Media", "Certificate in Data Analytics"],
    },
    {
      name: "M.Des", count: 1, feeRange: "6 L", pct12: "", pctGrad: "50 %",
      exams: [], moreExams: 0,
      allExams: ["Portfolio-based / Direct Merit"],
      specializations: ["M.Des — 2 Year"],
    },
  ],

  fees: [
    { prog: "B.Tech", tuition: "~Rs.4-6 Lakh/yr", hostel: "~Rs.1.2 Lakh/yr", total: "Rs.16.15 L (4 yrs)", exam: "JEE Main, SAT, CUET" },
    { prog: "MBA", tuition: "~Rs.4.75 Lakh/yr", hostel: "~Rs.1.2 Lakh/yr", total: "Rs.9.5 L (2 yrs)", exam: "CAT, MAT, CMAT, GMAT" },
    { prog: "BCA", tuition: "~Rs.2.67 Lakh/yr", hostel: "~Rs.1.2 Lakh/yr", total: "Rs.8 L (3 yrs)", exam: "CUET / Merit" },
    { prog: "BBA", tuition: "~Rs.2.5 Lakh/yr", hostel: "~Rs.1.2 Lakh/yr", total: "Rs.7.5 L (3 yrs)", exam: "CUET / Merit" },
    { prog: "M.Tech", tuition: "~Rs.2.17 Lakh/yr", hostel: "~Rs.1.2 Lakh/yr", total: "Rs.4.35 L (2 yrs)", exam: "GATE" },
  ],

  feesIntro: "Bennett University fees vary according to the programme, specialisation and applicable academic charges. Students may need to consider tuition fees along with registration, examination, hostel, accommodation and other applicable expenses. The total cost of education should be considered while comparing Bennett University with other private universities in Greater Noida and Delhi NCR.",

  feesHighlights: [
    { label: "B.Tech Computer Science Engineering (4 Years)", value: "Rs.15.70 Lakh", note: "International fee structure (published)" },
    { label: "MBA (including registration fee)", value: "Rs.12.45 Lakh", note: "International fee structure (published)" },
  ],

  feesNote2: "These figures are programme-specific and should not be treated as the fee for every programme or admission category. Students should always verify the latest official fee structure for their chosen programme before taking admission.",

  feesFaqs: [
    { q: "What is the fee structure of Bennett University?", a: "It depends on the programme and specialisation." },
    { q: "What is the B.Tech fee at Bennett University?", a: "It varies by programme/specialisation; check the latest official structure." },
    { q: "What is the MBA fee at Bennett University?", a: "It is programme-specific and can change with the academic session." },
    { q: "Does Bennett University charge hostel fees separately?", a: "Hostel/accommodation charges can be separate from tuition." },
  ],

  scholarships: [
    { name: "Merit Scholarship (JEE Main 90+ percentile)", eligibility: "JEE Main >= 90 percentile", amount: "50% tuition fee waiver" },
    { name: "Merit Scholarship (JEE Main 75-89 percentile)", eligibility: "JEE Main 75-89 percentile", amount: "25% tuition fee waiver" },
    { name: "Merit Scholarship (12th Marks)", eligibility: "PCM >= 90% in 12th", amount: "Up to 25% waiver" },
    { name: "Sibling Scholarship", eligibility: "Sibling studying at BU", amount: "Special waiver" },
    { name: "Alumni Scholarship", eligibility: "BU Alumni ward", amount: "Special waiver" },
  ],

  cutoffIntro: "Bennett University cut-offs or admission requirements can vary according to programme, admission route, entrance examination and academic year. There may not be one common cut-off for all courses. For engineering admissions, candidates should check applicable entrance examination requirements and academic qualifications. Other programmes may have different selection criteria.",

  catCutoffs: [
    { year: "2025", section: "Overall", percentile: "—" },
    { year: "2025", section: "VARC", percentile: "—" },
    { year: "2025", section: "DILR", percentile: "—" },
    { year: "2025", section: "Quant", percentile: "—" },
  ],

  cutoffComparison: [
    { programme: "MBA / PGDM", college: "Bennett University", percentile: "—" },
    { programme: "MBA / PGDM", college: "Galgotias University", percentile: "—" },
    { programme: "MBA / PGDM", college: "Sharda University", percentile: "—" },
  ],

  cutoffPdfUrl: "",

  cutoffFaqs: [
    { q: "What is the Bennett University cut-off?", a: "It varies by programme and admission route." },
    { q: "What is the Bennett University B.Tech cut-off?", a: "It can depend on applicable entrance examination scores and academic eligibility." },
    { q: "Is there a separate cut-off for every course?", a: "Admission requirements can vary by programme." },
  ],

  admissionOverview: {
    intro: "Bennett University admission is entrance as well as merit-based. The institute offers courses at UG and PG level, including global and industry-integrated programmes. Aspirants can check the admission highlights below.",
    highlights: [
      { label: "Courses", text: "Popular programmes include B.Tech, B.Des, MBA, MCA, BBA and LLB, offered in full-time mode." },
      { label: "Admission Criteria", text: "Selection is based on academic score in the qualifying exam. National-level entrance exams are considered depending on the course, followed by a personal interview for some programmes. Accepted exams include JEE Main, CUET and CAT. Bennett University also conducts BRAT for PhD and BU-MAT for MBA admissions." },
      { label: "B.Tech Eligibility Criteria", text: "Class 12 pass with Physics and Mathematics or other required subjects, with at least 55-65% aggregate." },
      { label: "MBA Eligibility Criteria", text: "A valid UG degree from a recognised university with a minimum of 50% aggregate." },
      { label: "Application Process", text: "Eligible students can apply through the official website. The registration fee is INR 1,500." },
      { label: "Fee Structure", text: "Total tuition fees across courses range between INR 75,000 and INR 22 Lakh. The B.Des (Hons.) tuition fee is the highest among all courses." },
      { label: "Cutoff", text: "Cutoffs may be released for select programmes such as MBA. For MBA admissions 2025, the CAT cutoff was 25 percentile." },
      { label: "Rankings", text: "Bennett University was ranked #23 in India Today Rankings 2025, and #140 in the Management category by The Week." },
      { label: "Scholarships", text: "Entrance and merit-based scholarships are available, along with special schemes for single girl child, alumni, sibling and defence personnel categories." },
    ],
  },

  admissionIntroAlt: "Bennett University admission requirements vary according to the selected programme. Candidates need to fulfil relevant academic eligibility criteria and, depending on the course, may need entrance examination scores or a programme-specific selection process. Admission generally involves selecting a programme, checking eligibility, completing the application, uploading documents, paying applicable fees and completing any required selection process.",

  admissionProcessIntro: "Bennett University admission is generally based on academic merit in qualifying examinations along with entrance scores. The application process is conducted in online mode. For any offline process, students must check with the college admission department. Eligibility and selection criteria for UG courses require a valid Class 12 score with relevant subjects. Follow the steps below to know the complete admission process.",

  admissionSteps: [
    {
      title: "1: Registration",
      text: "The application process of Bennett University is conducted in online mode. Candidates applying for admission are also required to pay an application fee of INR 1,500 for Indian nationals and INR 2,000 for international applicants. The step-wise application process is below:",
      bullets: [
        "Visit the website and click on 'Apply Now'.",
        "Register, then enter OTP and verify.",
        "Start the application process.",
        "Choose preferred course and click on 'Apply'.",
        "Fill out required details.",
        "Pay the application fee.",
        "Return to dashboard and click on 'Continue application'.",
        "Enter educational details and upload required documents.",
        "Fill entrance exam details.",
        "Submit the form.",
      ],
    },
    {
      title: "2: Selection & PI",
      text: "Bennett University selects candidates primarily based on the national-level entrance exam. SAT India is accepted for most UG courses. Entrance exams such as JEE Main, CMAT and CLAT are accepted for specific courses. The university also conducts BU-MAT and BRAT for admission to MBA and PhD programmes. Besides, the university also considers the merit of candidates in the qualifying examination for admission. Selected candidates are further called for a personal interview round for some of the courses.",
    },
    {
      title: "3: Admission Confirmation",
      text: "Once the candidates are selected, they need to bring the specified documents for verification. Aspirants also need to pay the Bennett University fee to confirm their seat in the university. In case the candidate gets selected and is unable to pay the fee within the requisite time, his or her admission stands cancelled.",
    },
  ],

  admissionDocuments: [
    "JEE score card (B.Tech, if admitted under JEE), CLAT/LSAT/DU exam score card (BBA/BA-LLB/LLB-H) as applicable, SAT score card, or other respective entrance scorecards",
    "Character and Transfer/Migration Certificate from the Institute/University/Board last attended",
    "Medical certificate",
    "Three copies of passport-size colour photographs",
    "Online registered Anti-Ragging Undertaking",
    "Caste Certificate for reserved seat category (if applicable)",
    "Aadhaar Card",
    "Graduation marksheet (for PG courses)",
    "Class 10 marksheet",
    "Class 12 marksheet",
  ],

  feeRefundPolicy: {
    title: "Bennett University Fee Refund Policy 2026",
    intro: "Bennett University has a Fee Refund Policy for withdrawal and cancellation of admission of a student. If students withdraw admission, the refund amount is calculated based on UGC guidelines and the timing of the withdrawal request. The refund of fees shall be processed in accordance with the policy issued by the University and in accordance with the policy notified by the UGC. Check below table to know the fee refund policy of Bennett University:",
    table: [
      { date: "Before Sep 30, 2026", refund: "Full refund of fees" },
      { date: "Sep 30, 2026 - Oct 31, 2026", refund: "Refund shall be processed after deduction of a processing fee (which shall not exceed INR 1,000)" },
    ],
    note: "Refund shall be processed within 15 working days of receipt of the complete application and completion of the no-dues process.",
  },

  admissionFaqs: [
    { q: "How can I apply for admission to Bennett University?", a: "Eligible candidates can apply online through the official Bennett University website by registering, verifying OTP, filling the application form, uploading documents and paying the application fee." },
    { q: "What is the application fee for Bennett University?", a: "The application fee is INR 1,500 for Indian nationals and INR 2,000 for international applicants." },
    { q: "Does Bennett University conduct its own entrance exam?", a: "Yes, Bennett University conducts BU-MAT for MBA admissions and BRAT for PhD admissions, apart from accepting national-level exams like JEE Main, SAT India, CUET, CAT and CLAT depending on the programme." },
    { q: "Is a personal interview required for admission?", a: "Selected candidates are called for a personal interview round for some courses, in addition to entrance exam or academic merit evaluation." },
    { q: "What documents are required at the time of admission?", a: "Commonly required documents include entrance scorecards, Class 10 and Class 12 marksheets, transfer/character certificate, medical certificate, passport-size photographs, Aadhaar Card and an anti-ragging undertaking." },
    { q: "What is Bennett University's fee refund policy?", a: "Refunds are processed as per UGC guidelines based on the withdrawal date — full refund before the specified cutoff date, and refund after deduction of a processing fee (up to INR 1,000) for later withdrawals." },
    { q: "How can I get admission to Bennett University?", a: "Select a programme, fulfil eligibility, apply online and meet applicable selection requirements." },
    { q: "Does Bennett University accept JEE Main?", a: "JEE Main is considered for applicable programmes; check current course-specific criteria." },
    { q: "Does Bennett University accept CUET?", a: "CUET may be considered for applicable programmes; verify current requirements." },
  ],

  placements: {
    highest: "Rs.1.37 Crore (B.Tech, 2025)",
    average: "Rs.11.10 LPA (B.Tech, 2025)",
    medianUG: "Rs.7.5 LPA",
    percentage: "~90%",
    companies: "1200+",
    totalOffers: "1000+",
    ugPlaced: "-",

    topRecruiters: [
      "Microsoft", "Google", "Meta", "Adobe", "Goldman Sachs", "Deloitte", "Amazon", "Infosys",
      "IBM", "S&P Global", "PwC", "TCS", "Berger Paints", "Cvent", "KPMG", "Capgemini",
      "HCL", "HDFC Bank", "Siemens", "ZS Associates", "Walmart", "Cisco", "Cisco Systems",
      "American Express", "J P Morgan Chase", "Infoedge", "Accenture", "British Telecom",
      "HSBC", "Ford Motors", "Grant Thornton", "Reliance Retail", "Aditya Birla Group",
      "Josh Technology", "Tresvista", "sify", "Hinduja Leyland Finance", "Radio Mirchi",
      "India Today Group", "PVR Cinemas", "JBM", "Cognizant", "De Shaw & Co", "WNS", "Meesho",
      "Valvoline", "Shopclues",
    ],

    btechWise: [
      { course: "Computer Science & Engineering", avg: "Rs.12.5 LPA", median: "Rs.8 LPA" },
      { course: "Artificial Intelligence & ML", avg: "Rs.11 LPA", median: "Rs.7.5 LPA" },
      { course: "Electronics & Communication", avg: "Rs.7 LPA", median: "Rs.5.5 LPA" },
      { course: "Mechanical Engineering", avg: "Rs.5.5 LPA", median: "Rs.4.5 LPA" },
    ],

    courseWise: [
      {
        course: "B.Tech",
        avg: "Rs.11.10 LPA",
        highest: "Rs.1.37 Cr",
        companies: "450+",
        recruiters: ["Meta", "Adobe", "Goldman Sachs", "Google", "TCS", "Siemens", "ZS Associates", "Walmart", "Deloitte", "Cisco", "JBM", "American Express", "J P Morgan Chase", "Infoedge", "Capgemini", "IBM"],
      },
      {
        course: "MBA",
        avg: "Rs.7.41 LPA",
        highest: "Rs.33 LPA",
        companies: "143+",
        recruiters: ["Microsoft", "Google", "PwC", "Cvent", "Capgemini", "Amazon", "Infosys", "HCL", "TCS", "HDFC Bank", "IBM", "KPMG"],
      },
      {
        course: "BBA",
        avg: "Rs.5.16 LPA",
        highest: "Rs.23.5 LPA",
        companies: "85+",
        recruiters: ["Valvoline", "Deloitte", "Shopclues", "Cognizant", "KPMG"],
      },
      {
        course: "MCA",
        avg: "Rs.5.7 LPA",
        highest: "Rs.18 LPA",
        companies: "44+",
        recruiters: ["American Express", "Meesho", "KPMG", "Capgemini"],
      },
      {
        course: "BA Mass Communication (BAJMC)",
        avg: "Rs.3.91 LPA",
        highest: "Rs.21 LPA",
        companies: "84+",
      },
      {
        course: "Law",
        avg: "Rs.6.7 LPA",
        highest: "Rs.28.17 LPA",
        companies: "120+",
      },
      {
        course: "BCA",
        avg: "Rs.5.26 LPA",
        highest: "Rs.24.8 LPA",
        companies: "28+",
        recruiters: ["Cisco", "De Shaw & Co", "Deloitte", "HCL", "WNS"],
        history: [
          { year: "2023", highest: "Rs.7.5 L", avg: "Rs.3.62 L", companies: "17" },
          { year: "2025", highest: "Rs.24.8 L", avg: "Rs.5.26 L", companies: "28" },
        ],
      },
    ],

    insights: [
      { title: "Internships and Industry Projects", desc: "Students get opportunities to work with faculty on research and industry-linked projects." },
      { title: "Employment Opportunities", desc: "A number of students have gone on to start their own ventures after graduating." },
      { title: "Higher Studies Preferences", desc: "Among students pursuing further studies, most chose to study outside India." },
    ],
  },

  placementsIntro: "Bennett University provides career and placement support through industry connections, recruitment activities, internships and career-development initiatives. The university currently states that more than 1,200 companies are associated with its placement ecosystem and lists a highest package of Rs.1.37 crore per annum. The highest package represents the top reported placement outcome and does not mean every student receives the same salary. Outcomes can vary according to programme, specialisation, skills, academic performance and recruiting company.",

  placementsFaqs: [
    { q: "How are placements at Bennett University?", a: "The university provides career and placement support through industry connections and recruitment activities." },
    { q: "What is the highest package at Bennett University?", a: "The university currently lists Rs.1.37 crore per annum." },
    { q: "What is the average package?", a: "It can vary by course and placement year; check programme-specific data." },
    { q: "Does Bennett University provide internships?", a: "Students receive opportunities/support for internships and industry exposure depending on programme/profile." },
  ],

  reviews: {
    overall: 4.1,
    total: 304,
    distribution: [
      { stars: "4-5", count: 166 },
      { stars: "3-4", count: 124 },
      { stars: "2-3", count: 13 },
      { stars: "1-2", count: 1 },
    ],
    breakdown: [
      { label: "Placements", val: 3.8, icon: "briefcase" },
      { label: "Infrastructure", val: 4.4, icon: "building" },
      { label: "Faculty & Course", val: 4.3, icon: "book" },
      { label: "Campus Life", val: 4.2, icon: "users" },
      { label: "Value for Money", val: 3.8, icon: "rupee" },
    ],
    guidance: "Bennett University reviews can vary depending on the student's course, expectations, academic experience, campus life and career goals. Students should not make a decision based only on online ratings. It is better to evaluate faculty, course curriculum, infrastructure, placement opportunities, internships, hostel facilities, student activities, fees and overall return on investment. For B.Tech students, technical facilities, coding opportunities, projects, internships and placements can be important. For MBA students, industry exposure, internships, specialisations and placement opportunities may be more relevant.",
    keywords: [
      "Bennett University reviews",
      "Bennett University student reviews",
      "Bennett University campus reviews",
      "Bennett University BTech reviews",
      "Bennett University MBA reviews",
    ],
    faqs: [
      { q: "Is Bennett University good?", a: "It can be considered by students looking for a private university in Greater Noida; evaluate course-specific factors." },
      { q: "Is Bennett University good for B.Tech?", a: "Check curriculum, technical facilities, faculty, internships and placement outcomes." },
      { q: "Is Bennett University good for MBA?", a: "Compare curriculum, faculty, industry exposure, internships, placements and fees." },
    ],
    list: [
      { name: "Rahul Gupta", batch: "2025", course: "B.Tech CSE", rating: 5, text: "Bennett is an amazing university. The Times Group backing means incredible industry connections. Our CS curriculum was co-developed with Georgia Tech USA which is unique. Placements are excellent — top companies like Google and Microsoft visit campus. The 68-acre campus is beautiful and fully air-conditioned." },
      { name: "Priya Mehta", batch: "2024", course: "MBA", rating: 4, text: "The Cornell University partnership for MBA is a game changer. Faculty quality is excellent — most have PhDs from IITs and IIMs. Placement cell is very active. The Bennett Hatchery incubator is great for aspiring entrepreneurs. Only downside is the high fees compared to other universities." },
      { name: "Ankit Sharma", batch: "2023", course: "B.Tech ECE", rating: 4, text: "Modern campus with great infrastructure. Supercomputing facility and advanced labs are impressive. The Times Group network helps a lot for internships and media-related opportunities. Campus life is vibrant with 40+ student clubs. Fees are on the higher side but justified by the quality." },
    ],
  },

  facilitiesAuthor: { name: "Editorial Team", updatedDate: "17 Aug 2026" },

  facilitiesIntro: "Bennett University's 68-acre campus includes hostels, laboratories, classrooms, a library and cafeterias. The campus is fully Wi-Fi enabled, with air-conditioned classrooms equipped with audio-visual and multimedia facilities, a modern auditorium, a conference hall and seminar halls, and a gymnasium with cardiovascular equipment, weights and strength-training machines. Students also have access to several world-class amenities for extracurricular activities and sports.",

  facilitiesDetailed: [
    {
      icon: "library",
      label: "Library",
      desc: "Bennett University operates two libraries — the Central Library and the Law Library — both open from 9 AM to 11 PM daily. The library system is fully automated with RFID-enabled security, self check-in/check-out, and remote database access for students even during vacations. A dedicated Reading Room with modern furniture has also been added to support focused study.",
    },
    {
      icon: "medical",
      label: "Medical Assistance",
      desc: "The Health and Wellness Centre is staffed with a dedicated doctor and support team, with a 24/7 ambulance on standby for emergencies. The university also has a formal tie-up with Kailash Hospital and Yatharth Hospital in Greater Noida for advanced medical care.",
    },
    {
      icon: "cafeteria",
      label: "Cafeteria",
      desc: "The university's dining facilities are run through a modern kitchen designed to serve hygienically prepared, healthy meals to students and staff, with 24/7 eating options, a vegetarian mess, multi-cuisine cafeterias, food trucks and a convenience tuck shop.",
    },
    {
      icon: "sports",
      label: "Sports Complex",
      desc: "A dedicated, state-of-the-art Sports Complex supports the university's focus on all-round student development alongside academics.",
      tags: ["Badminton Court", "Basketball Court", "Cricket Ground", "Football Ground", "Swimming Pool", "Volleyball Court", "Table Tennis Court", "Snooker and Pool", "Kabaddi Court"],
    },
    {
      icon: "security",
      label: "Security",
      desc: "The campus operates with multi-tier, round-the-clock security overseen by the Dean of Student Affairs and the admin team. Entry and exit points, hostels and the sports complex are guarded 24/7, with CCTV monitoring across all corridors, alongside on-call ambulances and doctors for emergencies.",
    },
    {
      icon: "hostel",
      label: "Hostel",
      desc: "The in-campus hostel accommodates 10,000+ students, operating on a room-sharing basis with gender-segregated, fully air-conditioned accommodation managed by a faculty member serving as Hostel Warden.",
      tags: ["Boys Hostel: Single Occupancy | Shared Rooms | In-Campus", "Girls Hostel: Single Occupancy | Shared Rooms | In-Campus"],
    },
    {
      icon: "labs",
      label: "Labs",
      desc: "Classrooms and lecture theatres are equipped with broadband connectivity, video-conferencing tools, overhead projectors and touch-pad systems, enabling students to interact with faculty and industry experts globally. A wide range of subject-specific labs support engineering, sciences and computing coursework.",
      tags: ["Civil Engineering Lab", "Chemistry Lab", "Computer Lab", "Electrical Lab", "Electronics Lab", "Mechanical Lab", "Physics Lab", "Apple iMac Lab", "Dell EMC – Bennett Data Analytics Lab", "Programming Lab", "Information Management System Lab", "Biochemistry Lab", "Cell/Molecular Biology Lab", "Genetic Engineering Lab", "Animal Cell Cultures Lab", "Bioinformatics Lab", "Microbiology/Immunology Lab", "Plant Tissue Culture Lab", "Food Technology and Nutrition Lab", "Bennett-NVIDIA Center of Excellence for AI", "NVIDIA Super Computer Lab for Deep Learning", "Biotech Department Labs", "Electronics & Communication Department"],
    },
  ],

  facilityQuickTags: [
    { icon: "court", label: "Moot Court (Law)" },
    { icon: "gym", label: "Gym" },
    { icon: "hospital", label: "Hospital / Medical Facilities" },
    { icon: "wifi", label: "Wi-Fi Campus" },
    { icon: "bus", label: "Shuttle Service" },
    { icon: "music", label: "Music Room" },
    { icon: "dance", label: "Dance Room" },
    { icon: "snow", label: "A/C Classrooms" },
    { icon: "store", label: "Convenience Store" },
  ],

  facilityOtherTags: ["ATM Facility", "Shopping Centre", "Seminar Hall"],

  facilityVideos: [
    {
      youtubeId: "",
      thumbnail: "https://placehold.co/500x280/0A0A0A/E8A317?text=Campus+Tour+%7C+Greater+Noida",
      title: "Bennett University | Campus Tour | Greater Noida",
      channel: "gul bansal",
    },
    {
      youtubeId: "",
      thumbnail: "https://placehold.co/500x280/0A0A0A/E8A317?text=Campus+Tour+%7C+Cinematic",
      title: "Bennett University Campus Tour || Cinematic Version",
      channel: "CareerBanao",
    },
  ],

  facilities: [
    { name: "Academic Blocks", desc: "Fully air-conditioned modern academic blocks with smart classrooms and advanced labs" },
    { name: "Hostel", desc: "Gender-segregated AC hostels accommodating 10,000+ students with all basic amenities" },
    { name: "Supercomputing Facility", desc: "State-of-the-art supercomputing lab for advanced research and projects" },
    { name: "Sports Complex", desc: "16+ world-class sports facilities including cricket, football, basketball and more" },
    { name: "Bennett Hatchery", desc: "Startup incubator providing mentorship, seed funding and resources to student entrepreneurs" },
    { name: "Library", desc: "Well-stocked digital and physical library with international journals and research papers" },
    { name: "Cafeteria", desc: "Modern kitchen serving hygienic, healthy food to 10,000+ students and staff" },
    { name: "Medical Facility", desc: "Formal tie-up with Kailash Hospital and Yatharth Hospital for 24/7 emergency assistance" },
    { name: "Wi-Fi Campus", desc: "High-speed Wi-Fi connectivity across the entire 68-acre campus" },
  ],

  clubs: [
    { name: "Bennett Hatchery", role: "Startup Incubator & Entrepreneurship", emoji: "🚀" },
    { name: "Google Developer Student Club", role: "Coding & Development", emoji: "💻" },
    { name: "Times Innovation Cell", role: "Innovation & Research", emoji: "💡" },
    { name: "Nexus — Cultural Society", role: "Cultural & Arts Events", emoji: "🎭" },
    { name: "Sports Council", role: "Sports & Athletics", emoji: "⚽" },
    { name: "Media & Journalism Club", role: "Times Group Media Projects", emoji: "📰" },
  ],

  scholarshipsIntro: "Bennett University awards several scholarships to various meritorious undergraduate and postgraduate students. Eligibility for various scholarships is determined based on the scores of the candidate in the last qualifying exam or the course-specific entrance examinations.",

  scholarshipTypesList: [
    "Merit-Based Scholarship",
    "Sibling Scholarship",
    "Single Girl Child Scholarship",
    "Sports Scholarship",
    "Alumni Scholarship",
    "Ward of Defence",
    "Elite Scholarship",
    "Defence Scholarship",
  ],

  scholarshipDescriptions: [
    {
      name: "Merit-Based Scholarship",
      desc: "The university offers scholarships based on the programme and course. Aspiring candidates must qualify the eligibility criteria set by the university. See the course-wise scholarship ranges below.",
    },
    {
      name: "Sibling Scholarship",
      desc: "A scholarship of 10% is applicable for the duration of overlap of the programmes of siblings, and is applicable to wards of the same parents, not cousins.",
    },
    {
      name: "Single Girl Child Scholarship",
      desc: "A scholarship of 10% is applicable for the complete duration of the programme on tuition fees.",
    },
    {
      name: "Alumni Scholarship",
      desc: "A 10% tuition fee scholarship is available for Bennett University alumni who enrol in a postgraduate programme at the university.",
    },
    {
      name: "Sports Scholarship",
      desc: "The university offers up to 50% scholarship on first-year tuition fees for candidates with state, national, or international-level sports participation or achievements. Scholarships are subject to document verification at the time of registration.",
    },
    {
      name: "Ward of Defence",
      desc: "Offered for wards of serving and retired personnel from the Indian Armed Forces (Army, Navy, Air Force) and Paramilitary forces (CISF, BSF, CRPF, ITBP, NSG, and SSB), who are eligible for a 5% scholarship on tuition fees. This scholarship is applicable for the entire duration of the programme.",
    },
  ],

  meritScholarship: {
    tiers: ["10%", "20%", "30%", "50%", "75%", "100%"],
    programs: [
      {
        name: "B.Des",
        rows: [
          { label: "XII % / CUET", values: ["75-79.99", "80-84.99", "85-89.99", "90-94.99", "95-98.99", ">=99"] },
          { label: "IB Score", values: ["31-33", "34-36", "37-39", "40", "41", "42"] },
          { label: "NID Rank", values: ["751-900", "501-750", "301-500", "201-300", "101-200", ""] },
          { label: "NIFT Rank", values: ["3001-3500", "2001-3000", "1501-2000", "1001-1500", "501-1000", ""] },
          { label: "UCEED Rank", values: ["1001-1200", "751-1000", "501-700", "301-500", "151-300", ""] },
          { label: "BUDAT Score", values: ["70-74.99", "75-79.99", "80-84.99", "85-90.99", "91-94.99", ">=95"] },
          { label: "SAT Score", values: ["1201-1300", "1301-1350", "1351-1400", "1451-1500", "1501-1550", ">=1551"] },
        ],
      },
      {
        name: "B.Tech CSE",
        rows: [
          { label: "XII % / CUET", values: ["81-85.99", "86-90.99", "91-94.99", ">=95", "", ""] },
          { label: "JEE Percentile", values: ["65-69.99", "70-74.99", "75-89.99", ">=90", "", ""] },
          { label: "SAT Score", values: ["1201-1300", "1301-1350", "1351-1450", ">=1451", "", ""] },
          { label: "IB Score", values: ["31-33", "34-36", "37-39", ">=40", "", ""] },
        ],
      },
      {
        name: "B.Tech AI",
        rows: [
          { label: "XII % / CUET", values: ["81-85.99", "86-90.99", "91-94.99", "95-96.99", "97-98.99", ">=99"] },
          { label: "JEE Percentile", values: ["65-69.99", "70-74.99", "75-89.99", "90-92.99", "93-94.99", ">=95"] },
          { label: "SAT Score", values: ["1201-1300", "1301-1350", "1351-1450", "1451-1500", "1501-1550", ">=1551"] },
          { label: "IB Score", values: ["31-33", "34-36", "37-39", "40", "41", "42"] },
        ],
      },
      {
        name: "B.Tech (Bio) / B.Tech + M.Tech (Bio)",
        rows: [
          { label: "XII % / CUET", values: ["75-79.99", "80-84.99", "85-94.99", ">=95", "", ""] },
          { label: "SAT Score", values: ["1201-1300", "1301-1350", "1351-1450", ">=1451", "", ""] },
          { label: "NEET (for BioTech)", values: ["65-69.99", "70-74.99", "75-84.99", ">=85", "", ""] },
          { label: "IB Score", values: ["31-33", "34-36", "37-39", ">=40", "", ""] },
        ],
      },
      {
        name: "B.Tech EC / ECE / ME / EP",
        rows: [
          { label: "XII % / CUET", values: ["75-79.99", "80-84.99", "85-94.99", ">=95", "", ""] },
          { label: "JEE Percentile", values: ["65-69.99", "70-74.99", "75-84.99", ">=85", "", ""] },
          { label: "SAT Score", values: ["1201-1300", "1301-1350", "1351-1450", ">=1451", "", ""] },
          { label: "IB Score", values: ["31-33", "34-36", "37-39", ">=40", "", ""] },
        ],
      },
      {
        name: "BBA",
        rows: [
          { label: "XII % / CUET", values: ["75-79.99", "80-84.99", "85-94.99", ">=95", "", ""] },
          { label: "SAT Score", values: ["1201-1300", "1301-1350", "1351-1450", ">=1451", "", ""] },
          { label: "IB Score", values: ["31-33", "34-36", "37-39", ">=40", "", ""] },
        ],
      },
      {
        name: "BBA-LLB (H) / BA-LLB (H)",
        rows: [
          { label: "XII % / CUET", values: ["75-79.99", "80-84.99", "85-94.99", ">=95", "", ""] },
          { label: "CLAT AIR Rank", values: ["12001 to 20000", "10001-12000", "5001 to 10000", "", "", ""] },
          { label: "IB Score", values: ["31-33", "34-36", "37-39", ">=40", "", ""] },
        ],
      },
      {
        name: "BA-Liberal Arts",
        rows: [
          { label: "XII % / CUET", values: ["75-79.99", "80-84.99", "85-89.99", "90-94.99", "95-98.99", ">=99"] },
          { label: "SAT Score", values: ["1201-1300", "1301-1350", "1351-1450", "1451-1500", "1501-1550", ">=1551"] },
          { label: "IB Score", values: ["31-33", "34-36", "37-39", "40", "41", "42"] },
        ],
      },
      {
        name: "BCA",
        rows: [
          { label: "XII % / CUET", values: ["75-79.99", "80-84.99", "85-94.99", ">=95", "", ""] },
          { label: "SAT Score", values: ["1201-1300", "1301-1350", "1351-1450", ">=1451", "", ""] },
          { label: "IB Score", values: ["31-33", "34-36", "37-39", ">=40", "", ""] },
        ],
      },
      {
        name: "BA Mass Communication",
        rows: [
          { label: "XII % / CUET", values: ["75-79.99", "80-84.99", "85-89.99", "90-94.99", "95-98.99", ">=99"] },
          { label: "SAT Score", values: ["1201-1300", "1301-1350", "1351-1450", "1451-1500", "1501-1550", ">=1551"] },
          { label: "IB Score", values: ["31-33", "34-36", "37-39", "40", "41", "42"] },
        ],
      },
      {
        name: "BA-Film, TV & Web Series",
        rows: [
          { label: "XII % / CUET", values: ["75-79.99", "80-84.99", "85-89.99", "90-94.99", "95-98.99", ">=99"] },
          { label: "SAT Score", values: ["1201-1300", "1301-1350", "1351-1450", "1451-1500", "1501-1550", ">=1551"] },
          { label: "IB Score", values: ["31-33", "34-36", "37-39", "40", "41", "42"] },
        ],
      },
      {
        name: "MBA",
        rows: [
          { label: "CAT / XAT Percentile", values: ["70-74.99", "75-79.99", "80-84.99", ">=85", "", ""] },
          { label: "CMAT / MAT / NMAT / BU-MAT Percentile", values: ["75-80.99", "81-85.99", "86-90.99", ">=91", "", ""] },
          { label: "GMAT Score", values: ["500-550", "551-600", "601-650", ">=651", "", ""] },
          { label: "Graduation % / CGPA", values: ["70-74.99", "75-79.99", "80-84.99", ">=85", "", ""] },
        ],
      },
      {
        name: "B.Sc (AI)",
        rows: [
          { label: "XII % / CUET", values: ["75-79.99", "80-84.99", "85-89.99", "90-94.99", "95-98.99", ">=99"] },
          { label: "SAT Score", values: ["1201-1300", "1301-1350", "1351-1450", "1451-1500", "1501-1550", ">=1551"] },
          { label: "IB Score", values: ["31-33", "34-36", "37-39", "40", "41", "42"] },
        ],
      },
      {
        name: "BCA (AI)",
        rows: [
          { label: "XII % / CUET", values: ["75-79.99", "80-84.99", "85-89.99", "90-94.99", "95-98.99", ">=99"] },
          { label: "SAT Score", values: ["1201-1300", "1301-1350", "1351-1450", "1451-1500", "1501-1550", ">=1551"] },
          { label: "IB Score", values: ["31-33", "34-36", "37-39", "40", "41", "42"] },
        ],
      },
      {
        name: "B.Com",
        rows: [
          { label: "XII % / CUET", values: ["75-79.99", "80-84.99", "85-89.99", "90-94.99", "95-98.99", ">=99"] },
          { label: "SAT Score", values: ["1201-1300", "1301-1350", "1351-1450", "1451-1500", "1501-1550", ">=1551"] },
          { label: "IB Score", values: ["31-33", "34-36", "37-39", "40", "41", "42"] },
        ],
      },
      {
        name: "B.Tech + M.Tech (CS) Dual Degree",
        rows: [
          { label: "XII % / CUET", values: ["81-85.99", "86-90.99", "91-94.99", ">=95", "", ""] },
          { label: "JEE Percentile", values: ["65-69.99", "70-74.99", "75-89.99", ">=90", "", ""] },
          { label: "SAT Score", values: ["1201-1300", "1301-1350", "1351-1450", ">=1451", "", ""] },
          { label: "IB Score", values: ["31-33", "34-36", "37-39", ">=40", "", ""] },
        ],
      },
      {
        name: "BCA + MCA Dual Degree",
        rows: [
          { label: "XII % / CUET", values: ["75-79.99", "80-84.99", "85-94.99", ">=95", "", ""] },
          { label: "SAT Score", values: ["1201-1300", "1301-1350", "1351-1450", ">=1451", "", ""] },
          { label: "IB Score", values: ["31-33", "34-36", "37-39", ">=40", "", ""] },
        ],
      },
      {
        name: "BBA + MBA Dual Degree",
        rows: [
          { label: "XII % / CUET", values: ["75-79.99", "80-84.99", "85-94.99", ">=95", "", ""] },
          { label: "SAT Score", values: ["1201-1300", "1301-1350", "1351-1450", ">=1451", "", ""] },
          { label: "IB Score", values: ["31-33", "34-36", "37-39", ">=40", "", ""] },
        ],
      },
    ],
  },

  scholarshipFaqs: [
    { q: "Does Bennett University offer scholarships?", a: "Yes, various scholarship opportunities are available subject to eligibility." },
    { q: "What types of scholarships are available?", a: "Merit-based and special-category scholarships may be available under the current policy." },
    { q: "How can I get a scholarship?", a: "Meet eligibility requirements and complete the required process." },
    { q: "Can scholarships reduce Bennett University fees?", a: "Eligible scholarships can reduce the financial burden depending on amount and terms." },
  ],

qna: [
    {
      id: 1,
      question: "What is the average package offered at Bennett University for B.Tech CSE?",
      askedBy: "Rohan M.",
      date: "3 days ago",
      category: "Placements",
      answers: [
        { author: "Priya S.", verified: true, date: "2 days ago", text: "For 2025, the average package for B.Tech CSE was around Rs.12.5 LPA, with the highest domestic offer touching Rs.60 LPA. Top recruiters like Google and Microsoft do visit campus." },
      ],
    },
    {
      id: 2,
      question: "Is hostel accommodation compulsory for first-year students?",
      askedBy: "Ananya K.",
      date: "5 days ago",
      category: "Hostel",
      answers: [
        { author: "Editorial Team", verified: true, date: "4 days ago", text: "Hostel accommodation isn't strictly compulsory, but most out-of-state students opt for it since the campus is located outside central Greater Noida. Rooms are gender-segregated and fully air-conditioned." },
      ],
    },
    {
      id: 3,
      question: "Does Bennett University accept CUET scores for BBA admission?",
      askedBy: "Karan T.",
      date: "1 week ago",
      category: "Admissions",
      answers: [],
    },
    {
      id: 4,
      question: "How is the faculty for the MBA programme?",
      askedBy: "Sneha R.",
      date: "1 week ago",
      category: "Academics",
      answers: [
        { author: "Ankit Sharma", verified: false, date: "6 days ago", text: "Faculty quality is quite good — most professors have PhDs from IITs and IIMs, and the Cornell University partnership brings in some good visiting faculty too." },
      ],
    },
    {
      id: 5,
      question: "What documents are needed at the time of hostel check-in?",
      askedBy: "Divya P.",
      date: "2 weeks ago",
      category: "Hostel",
      answers: [],
    },
  ],

  qnaCategories: ["All", "Admissions", "Placements", "Academics", "Hostel", "Fees"],
  qnaIntro: "Bennett University is a private university located in Greater Noida, Uttar Pradesh. It offers undergraduate, postgraduate and doctoral programmes across technology, engineering, management, law, media, design, liberal arts and other areas. Students should evaluate the university based on their chosen course, career goals, budget and expected outcomes.",

  qnaPopular: [
    { q: "Is Bennett University private or government?", a: "Bennett University is a private university in Greater Noida, Uttar Pradesh." },
    { q: "Where is Bennett University located?", a: "It is located in TechZone II, Greater Noida, Uttar Pradesh." },
    { q: "Is Bennett University good for B.Tech?", a: "It offers B.Tech programmes; compare curriculum, fees, faculty, infrastructure, internships and placements." },
    { q: "Is Bennett University good for MBA?", a: "Evaluate curriculum, specialisations, faculty, industry exposure, fees and placements." },
    { q: "What is the highest package at Bennett University?", a: "The university currently lists Rs.1.37 crore per annum." },
    { q: "Does Bennett University provide hostel facilities?", a: "Yes, subject to availability and applicable policies." },
    { q: "Does Bennett University offer scholarships?", a: "Yes, subject to eligibility and university policies." },
    { q: "Is Bennett University worth it?", a: "It depends on the student's course, career goals, budget and placement expectations." },
  ],
  news: [
    {
      slug: "bennett-university-admissions-2026-27-open",
      category: "Admission",
      date: "10 Aug 2026",
      author: "Admissions Desk",
      views: "12.4K",
      title: "Bennett University admissions 2026-27 are open for B.Tech, MBA, BCA, BBA and other programs.",
      detail: "Bennett University has opened applications for the 2026-27 academic session across B.Tech, MBA, BCA, BBA and other undergraduate and postgraduate programmes. Interested candidates can apply through the official website. Admissions are based on JEE Main, SAT, CUET or CAT/MAT scores depending on the programme.",
      content: [
        "Bennett University has opened applications for the 2026-27 academic session across B.Tech, MBA, BCA, BBA and other undergraduate and postgraduate programmes.",
        "Interested candidates can apply through the official website by registering, filling out the application form, uploading required documents and paying the applicable fee.",
        "Admissions are based on JEE Main, SAT India, CUET or CAT/MAT scores depending on the chosen programme. Some courses may also require a personal interview round after the entrance exam stage.",
        "Students are advised to check programme-specific eligibility criteria and entrance exam requirements before applying, as these vary across B.Tech, management, law and design programmes.",
      ],
      image: "https://placehold.co/300x200/0A0A0A/E8A317?text=Admissions+2026",
    },
    {
      slug: "bennett-university-the-rankings-2026",
      category: "Ranking",
      date: "5 Aug 2026",
      author: "Editorial Team",
      views: "8.1K",
      title: "Bennett University ranked among Top 100 Universities Globally in Times Higher Education (THE) Interdisciplinary Science Rankings 2026.",
      detail: "Bennett University has been recognised in the Top 100 globally in the Times Higher Education Interdisciplinary Science Rankings 2026, reflecting the university's growing research output and academic collaborations, including its curriculum partnership with Georgia Institute of Technology, USA.",
      content: [
        "Bennett University has been recognised in the Top 100 globally in the Times Higher Education (THE) Interdisciplinary Science Rankings 2026.",
        "The ranking reflects the university's growing research output and its academic collaborations, including a curriculum partnership with Georgia Institute of Technology, USA for its Computer Science programmes.",
        "University rankings consider factors such as research citations, industry income, international outlook and teaching environment. A global ranking placement is generally seen as a positive indicator of a university's academic and research standing.",
      ],
      image: "https://placehold.co/300x200/0A0A0A/E8A317?text=THE+Rankings",
    },
    {
      slug: "bennett-university-school-of-management-nirf-65",
      category: "Ranking",
      date: "28 Jul 2026",
      author: "Editorial Team",
      views: "6.7K",
      title: "Bennett University School of Management ranked #65 in NIRF Rankings 2025.",
      detail: "The Bennett University School of Management secured Rank #65 in the Management category of NIRF Rankings 2025, placing it among the top-ranked private business schools in India.",
      content: [
        "The Bennett University School of Management secured Rank #65 in the Management category of NIRF Rankings 2025.",
        "This places the school among the top-ranked private business schools in India, based on parameters such as teaching-learning resources, research and professional practice, graduation outcomes, outreach and inclusivity, and peer perception.",
        "The NIRF (National Institutional Ranking Framework) is released annually by the Ministry of Education, Government of India, and is widely used by students to compare institutions across categories.",
      ],
      image: "",
    },
    {
      slug: "bennett-university-cs-curriculum-georgia-tech-partnership",
      category: "Academics",
      date: "20 Jul 2026",
      author: "Academic Desk",
      views: "4.3K",
      title: "Bennett University's curriculum for School of Computer Science developed in partnership with Georgia Institute of Technology, USA.",
      detail: "The Computer Science curriculum at Bennett University has been co-developed with Georgia Institute of Technology, USA, giving students access to an industry-aligned syllabus benchmarked against global standards.",
      content: [
        "The Computer Science curriculum at Bennett University has been co-developed with Georgia Institute of Technology, USA, giving students access to an industry-aligned syllabus benchmarked against global standards.",
        "This partnership covers course design across core Computer Science, Artificial Intelligence and Machine Learning specialisations offered under the B.Tech and M.Tech programmes.",
        "Students enrolled in these programmes get exposure to curriculum frameworks used at a globally ranked technology institute, alongside access to Bennett's own labs including the Bennett-NVIDIA Center of Excellence for AI.",
      ],
      image: "https://placehold.co/300x200/0A0A0A/E8A317?text=Georgia+Tech+Partnership",
    },
    {
      slug: "bennett-hatchery-startup-incubator",
      category: "Campus",
      date: "12 Jul 2026",
      author: "Campus Desk",
      views: "3.9K",
      title: "Bennett Hatchery — the university's startup incubator — provides mentorship, seed funding and resources to student entrepreneurs.",
      detail: "Bennett Hatchery supports student-led startups with mentorship from industry experts, access to seed funding, and dedicated workspace, helping students turn ideas into ventures while still studying.",
      content: [
        "Bennett Hatchery, the university's startup incubator, supports student-led startups with mentorship from industry experts, access to seed funding, and dedicated workspace.",
        "The incubator is a DPIIT-recognised entity supported under the UP Government's StartinUP initiative, and has helped launch 70+ student startups to date.",
        "Students interested in entrepreneurship can access structured mentorship programmes, pitch sessions and networking opportunities with investors through Bennett Hatchery, alongside their regular coursework.",
      ],
      image: "",
    },
  ],
};
export default bennett;
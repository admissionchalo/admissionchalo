import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://ad.com"),
  title: {
    default: "AdmissionChalo — Find the Right College for Your Career",
    template: "%s | AdmissionChalo",
  },
  description:
    "Search 6,200+ colleges in India, compare fees, placements and NIRF ranking, and track every entrance exam date — Engineering, Medical, MBA, Law and more on Shiksha Today.",
  keywords: [
    "college search India",
    "engineering colleges",
    "medical colleges",
    "MBA colleges",
    "entrance exam dates 2026",
    "college predictor",
    "AdmissionChalo",
  ],
  openGraph: {
    title: "AdmissionChalo — Find the Right College for Your Career",
    description:
      "Search colleges, compare courses, and track exam dates — all in one place.",
    siteName: "AdmissionChalo",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <body className="font-body text-ink bg-graybg">{children}</body>
    </html>
  );
}




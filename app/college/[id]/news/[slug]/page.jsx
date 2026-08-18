import { Newspaper } from "lucide-react";
import colleges from "@/lib/colleges";
import NewsArticlePage from "@/components/college/NewsArticlePage";

export async function generateMetadata({ params }) {
  const { id, slug } = await params;
  const data = colleges[id];
  const article = data?.news?.find((n) => n.slug === slug);

  if (!data || !article) {
    return { title: "News Not Found | AdmissionChalo" };
  }

  return {
    title: `${article.title} | ${data.shortName} News | AdmissionChalo`,
    description: article.detail,
    alternates: { canonical: `https://admissionchalo.vercel.app/college/${id}/news/${slug}` },
    openGraph: {
      title: article.title,
      description: article.detail,
      images: article.image ? [article.image] : undefined,
    },
  };
}

export default async function Page({ params }) {
  const { id, slug } = await params;
  const data = colleges[id];
  const article = data?.news?.find((n) => n.slug === slug);

  if (!data || !article) {
    return (
      <div style={{ textAlign: "center", padding: 80, fontFamily: "Arial, Helvetica, sans-serif" }}>
        <Newspaper size={48} color="#0A0A0A" style={{ marginBottom: 16 }} />
        <h2 style={{ color: "#111827" }}>Article not found</h2>
        <p style={{ color: "#6b7280" }}>
          No news article found with slug: <strong>{slug}</strong>
        </p>
      </div>
    );
  }

  return <NewsArticlePage data={data} article={article} />;
}
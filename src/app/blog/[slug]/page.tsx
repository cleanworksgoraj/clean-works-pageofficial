import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/page-intro";
import { articles } from "@/data/site";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  return {
    title: article ? `${article.title} | CleanWorks` : "Poradnik | CleanWorks",
    description: article?.excerpt,
  };
}

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) notFound();

  return (
    <main className="article-page">
      <PageIntro eyebrow={article.date.toUpperCase()} title={article.title} description={article.excerpt} />
      <article className="section article-content-wrap">
        <div className="section-wrap">
          <div className="article-content">
            {article.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <Link className="detail-back-link" href="/blog">← Wróć do poradnika</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

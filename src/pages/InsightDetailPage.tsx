import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PageMeta from "../components/PageMeta";
import ContentDetailLayout from "../components/ContentDetailLayout";
import { siteConfig } from "../config/site";
import { getInsightBySlug } from "../data/content.generated";

export default function InsightDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getInsightBySlug(slug) : undefined;

  if (!post) {
    return (
      <>
        <PageMeta title={`Not found | ${siteConfig.name}`} path="/insights" />
        <div className="pt-32 pb-24 section-padding text-center">
          <p className="text-slate-400 mb-6">This insight could not be found.</p>
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-brand-accent font-bold hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to insights
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <PageMeta
        title={`${post.title} | ${siteConfig.name}`}
        description={post.description}
        path={`/insights/${post.slug}`}
        image={post.heroImage}
        type="article"
      />
      <ContentDetailLayout post={post} backLabel="All insights" backPath="/insights" />
    </>
  );
}

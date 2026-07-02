import { motion } from "motion/react";
import PageMeta from "../components/PageMeta";
import ContentCard from "../components/ContentCard";
import { siteConfig } from "../config/site";
import { insights } from "../data/content.generated";

export default function InsightsPage() {
  return (
    <>
      <PageMeta
        title={`${siteConfig.writing.insightsLabel} | ${siteConfig.name}`}
        description={siteConfig.writing.insightsDescription}
        path="/insights"
      />

      <div className="pt-20 min-h-screen">
        <section className="section-padding pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <p className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Long-form</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tighter max-w-3xl">
              {siteConfig.writing.insightsLabel.toUpperCase()}{" "}
              <span className="text-gradient">&amp; FRAMEWORKS</span>
            </h1>
            <p className="mt-6 text-lg text-slate-400 max-w-2xl font-light leading-relaxed">
              {siteConfig.writing.insightsDescription}
            </p>
          </motion.div>

          {insights.length === 0 ? (
            <p className="text-slate-400">No published insights yet. Check back soon.</p>
          ) : (
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {insights.map((post) => (
                <ContentCard key={post.slug} post={post} basePath="/insights" />
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
}

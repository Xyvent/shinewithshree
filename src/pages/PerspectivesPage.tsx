import { motion } from "motion/react";
import PageMeta from "../components/PageMeta";
import ContentCard from "../components/ContentCard";
import { siteConfig } from "../config/site";
import { perspectives } from "../data/content.generated";

export default function PerspectivesPage() {
  return (
    <>
      <PageMeta
        title={`${siteConfig.writing.perspectivesLabel} | ${siteConfig.name}`}
        description={siteConfig.writing.perspectivesDescription}
        path="/perspectives"
      />

      <div className="pt-20 min-h-screen">
        <section className="section-padding pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <p className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Short-form</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tighter max-w-3xl">
              {siteConfig.writing.perspectivesLabel.toUpperCase()}{" "}
              <span className="text-gradient">&amp; FIELD NOTES</span>
            </h1>
            <p className="mt-6 text-lg text-slate-400 max-w-2xl font-light leading-relaxed">
              {siteConfig.writing.perspectivesDescription}
            </p>
          </motion.div>

          {perspectives.length === 0 ? (
            <p className="text-slate-400">No published perspectives yet. Check back soon.</p>
          ) : (
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {perspectives.map((post) => (
                <ContentCard key={post.slug} post={post} basePath="/perspectives" />
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
}

import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "../config/site";
import { getLatestWriting } from "../data/content.generated";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function WritingTeaser() {
  const latest = getLatestWriting(3);
  if (latest.length === 0) return null;

  return (
    <section className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
      >
        <div>
          <p className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">From the field</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter">
            LATEST <span className="text-gradient">WRITING</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl font-light leading-relaxed">
            Frameworks, pipeline discipline, and leadership notes for enterprise teams.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/insights"
            className="px-5 py-2 rounded-full border border-white/15 text-sm font-bold text-white hover:bg-white/[0.06] transition-colors"
          >
            {siteConfig.writing.insightsLabel}
          </Link>
          <Link
            to="/perspectives"
            className="px-5 py-2 rounded-full border border-white/15 text-sm font-bold text-white hover:bg-white/[0.06] transition-colors"
          >
            {siteConfig.writing.perspectivesLabel}
          </Link>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {latest.map((post, i) => {
          const basePath = post.kind === "insight" ? "/insights" : "/perspectives";
          const kindLabel = post.kind === "insight" ? siteConfig.writing.insightsLabel : siteConfig.writing.perspectivesLabel;

          return (
            <motion.article
              key={`${post.kind}-${post.slug}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <Link
                to={`${basePath}/${post.slug}`}
                className="group block h-full rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:bg-white/[0.04] hover:border-white/10 transition-all"
              >
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent">{kindLabel}</span>
                  <time className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{formatDate(post.date)}</time>
                </div>
                <h3 className="font-display text-lg font-bold text-white leading-snug group-hover:text-brand-accent transition-colors mb-3">
                  {post.title}
                </h3>
                <p className="text-slate-400 text-sm font-light leading-relaxed line-clamp-3">{post.description}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-xs font-bold text-brand-accent uppercase tracking-wider">
                  Read
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </Link>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

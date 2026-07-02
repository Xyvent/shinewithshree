import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { ContentPost } from "../data/content.generated";

type ContentCardProps = {
  post: ContentPost;
  basePath: "/insights" | "/perspectives";
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function ContentCard({ post, basePath }: ContentCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
    >
      <Link
        to={`${basePath}/${post.slug}`}
        className="group block rounded-[2rem] border border-white/5 bg-white/[0.02] overflow-hidden hover:bg-white/[0.04] hover:border-white/10 transition-all h-full"
      >
        {post.heroImage ? (
          <div className="relative aspect-[16/10] w-full border-b border-white/5 overflow-hidden bg-slate-900">
            <img
              src={post.heroImage}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/20 to-transparent" />
          </div>
        ) : null}

        <div className="p-8 flex flex-col gap-4 min-h-[12rem]">
          <div className="flex items-center justify-between gap-4">
            {post.tag ? (
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent">{post.tag}</span>
            ) : (
              <span />
            )}
            <time className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{formatDate(post.date)}</time>
          </div>

          <h2 className="font-display text-xl md:text-2xl font-bold tracking-tight text-white leading-snug group-hover:text-brand-accent transition-colors">
            {post.title}
          </h2>

          <div className="mt-auto flex items-start justify-between gap-4">
            <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed flex-1">{post.description}</p>
            <span className="shrink-0 p-3 rounded-full glass border-white/10 text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-bg transition-colors">
              <ArrowUpRight className="w-5 h-5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

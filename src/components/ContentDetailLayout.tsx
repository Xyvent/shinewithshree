import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import type { ContentPost } from "../data/content.generated";
import MarkdownBody from "./MarkdownBody";
import ContentCta from "./ContentCta";

type ContentDetailPageProps = {
  post: ContentPost;
  backLabel: string;
  backPath: string;
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function ContentDetailLayout({ post, backLabel, backPath }: ContentDetailPageProps) {
  return (
    <div className="min-h-screen bg-brand-bg">
      <header className="relative min-h-[min(44vh,24rem)] md:min-h-[min(48vh,28rem)] w-full overflow-hidden border-b border-white/5">
        {post.heroImage ? (
          <>
            <img
              src={post.heroImage}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/88 via-slate-950/82 to-brand-bg" />
            <div className="absolute inset-0 bg-brand-bg/30" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/10 via-brand-bg to-slate-900">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/50 via-brand-bg/90 to-brand-bg" />
          </div>
        )}

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(100%,520px)] h-px bg-gradient-to-r from-transparent via-brand-accent to-transparent" />

        <div className="relative z-10 flex h-full min-h-[inherit] flex-col justify-end section-padding pb-12 pt-28 md:pb-16 md:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-4xl"
          >
            <Link
              to={backPath}
              className="inline-flex items-center gap-2 text-xs font-bold text-white/90 hover:text-brand-accent transition-colors mb-8 uppercase tracking-[0.2em]"
            >
              <ArrowLeft className="w-4 h-4" />
              {backLabel}
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-5">
              {post.tag ? (
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent">{post.tag}</span>
              ) : null}
              <time className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{formatDate(post.date)}</time>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.08]">
              {post.title}
            </h1>
            {post.description ? (
              <p className="mt-5 max-w-2xl text-base text-slate-300 font-light md:text-lg">{post.description}</p>
            ) : null}
          </motion.div>
        </div>
      </header>

      <div className="section-padding py-14 md:py-20">
        <div className="max-w-3xl mx-auto space-y-16">
          <MarkdownBody content={post.body} />
          <ContentCta />
        </div>
      </div>
    </div>
  );
}

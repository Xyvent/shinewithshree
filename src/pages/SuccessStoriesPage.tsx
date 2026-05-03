import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { successStories } from "../data/successStories";

export default function SuccessStoriesPage() {
  return (
    <div className="pt-20 min-h-screen">
      <section className="section-padding pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">
            Proof in practice
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tighter max-w-3xl">
            SUCCESS <span className="text-gradient">STORIES</span>
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl font-light leading-relaxed">
            Real engagements where strategy, discipline, and consultative selling moved the needle—from
            stalled cycles to closed wins.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {successStories.map((story, i) => (
            <motion.article
              key={story.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 * i }}
            >
              <Link
                to={`/success-stories/${story.slug}`}
                className="group block rounded-[2rem] border border-white/5 bg-white/[0.02] overflow-hidden hover:bg-white/[0.04] hover:border-white/10 transition-all"
              >
                <div className="relative aspect-[16/10] w-full border-b border-white/5 overflow-hidden bg-slate-900">
                  {story.thumbnailImage ? (
                    <img
                      src={story.thumbnailImage}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover object-center"
                    />
                  ) : (
                    <div className={`absolute inset-0 ${story.thumbnailClass}`} />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-brand-accent mb-2">
                      {story.tag}
                    </span>
                    <h2 className="font-display text-xl md:text-2xl font-bold tracking-tight text-white leading-snug group-hover:text-brand-accent transition-colors">
                      {story.title}
                    </h2>
                  </div>
                </div>
                <div className="p-8 flex items-start justify-between gap-4">
                  <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed flex-1">
                    {story.subtitle}
                  </p>
                  <span className="shrink-0 p-3 rounded-full glass border-white/10 text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-bg transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}

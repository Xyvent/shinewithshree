import { motion } from "motion/react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Building2, CheckCircle2, Globe } from "lucide-react";
import type { StorySection, SuccessStory } from "../data/successStories";
import { getStoryBySlug } from "../data/successStories";

function SectionBlock({ section, si }: { section: StorySection; si: number }) {
  const label = (section.kicker ?? section.title).toUpperCase();

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: Math.min(si * 0.04, 0.15) }}
      className="scroll-mt-28"
    >
      <p className="text-xs font-bold text-brand-accent uppercase tracking-[0.2em] mb-5">{label}</p>

      {section.paragraphs.map((p, i) => (
        <p key={i} className="text-white/95 font-light leading-relaxed text-base md:text-lg mb-5 last:mb-0">
          {p}
        </p>
      ))}

      {section.bullets && section.bullets.length > 0 && section.presentation === "result-cards" ? (
        <ul className="mt-6 space-y-3">
          {section.bullets.map((item, i) => (
            <li
              key={i}
              className="flex gap-4 items-start rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white/95 font-light leading-relaxed text-base md:text-lg"
            >
              <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        section.bullets &&
        section.bullets.length > 0 && (
          <ul className="mt-4 space-y-3 text-slate-300 font-light text-base md:text-lg leading-relaxed list-disc pl-6 marker:text-brand-accent/80">
            {section.bullets.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )
      )}

      {section.paragraphsAfterBullets?.map((p, i) => (
        <p key={`after-${i}`} className="mt-6 text-white/95 font-light leading-relaxed text-base md:text-lg">
          {p}
        </p>
      ))}

      {section.numbered?.map((block, bi) => (
        <div key={bi} className="mt-10 first:mt-6">
          <h3 className="text-xs font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">{block.title}</h3>
          <ul className="space-y-3 text-slate-200 font-light text-base md:text-lg leading-relaxed list-disc pl-6 marker:text-brand-accent/80">
            {block.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </motion.section>
  );
}

function StorySidebar({ story }: { story: SuccessStory }) {
  const hasSidebar =
    (story.impactMetrics && story.impactMetrics.length > 0) ||
    (story.frameworks && story.frameworks.length > 0) ||
    (story.meta && story.meta.length > 0);

  if (!hasSidebar) return null;

  return (
    <aside className="lg:sticky lg:top-28 h-fit space-y-6">
      {story.impactMetrics && story.impactMetrics.length > 0 && (
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.25em] mb-6">Measurable impact</p>
          <dl className="space-y-5">
            {story.impactMetrics.map((row) => (
              <div key={row.label} className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4 border-b border-white/5 pb-5 last:border-0 last:pb-0">
                <dt className="text-xs font-bold text-slate-500 uppercase tracking-wider shrink-0">{row.label}</dt>
                <dd className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight text-right sm:text-right">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      )}

      {story.frameworks && story.frameworks.length > 0 && (
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.25em] mb-5">Frameworks &amp; methodologies</p>
          <div className="flex flex-wrap gap-2">
            {story.frameworks.map((tag) => (
              <span
                key={tag}
                className="px-3 py-2 rounded-full border border-white/15 text-xs font-medium text-white/90 tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {story.meta && story.meta.length > 0 && (
        <div className="space-y-4 px-1">
          {story.meta.map((row) => {
            const isRegion = row.label.toLowerCase().includes("region");
            const Icon = isRegion ? Globe : Building2;
            return (
              <div key={row.label} className="flex items-start gap-3 text-sm">
                <Icon className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" aria-hidden />
                <div>
                  <span className="font-bold text-brand-accent uppercase tracking-wider text-[10px]">
                    {row.label}:{" "}
                  </span>
                  <span className="text-white font-medium uppercase tracking-wide text-sm">{row.value}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </aside>
  );
}

export default function SuccessStoryDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const story = slug ? getStoryBySlug(slug) : undefined;

  if (!story) {
    return (
      <div className="pt-32 pb-24 section-padding text-center">
        <p className="text-slate-400 mb-6">This story could not be found.</p>
        <Link
          to="/success-stories"
          className="inline-flex items-center gap-2 text-brand-accent font-bold hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to success stories
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-bg">
      {/* Hero — full-width image + overlay (reference layout) */}
      <header className="relative min-h-[min(52vh,28rem)] md:min-h-[min(56vh,32rem)] w-full overflow-hidden border-b border-white/5">
        {story.heroImage ? (
          <>
            <img
              src={story.heroImage}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/88 via-slate-950/82 to-brand-bg" />
            <div className="absolute inset-0 bg-brand-bg/30" />
          </>
        ) : (
          <div className={`absolute inset-0 ${story.thumbnailClass}`}>
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
              to="/success-stories"
              className="inline-flex items-center gap-2 text-xs font-bold text-white/90 hover:text-brand-accent transition-colors mb-8 uppercase tracking-[0.2em]"
            >
              <ArrowLeft className="w-4 h-4" />
              All stories
            </Link>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.08]">
              {story.title}
            </h1>
            {story.subtitle ? (
              <p className="mt-5 max-w-2xl text-base text-slate-300 font-light md:text-lg">{story.subtitle}</p>
            ) : null}
          </motion.div>
        </div>
      </header>

      {/* Two-column body */}
      <div className="section-padding py-14 md:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-14 lg:grid-cols-[1fr_22rem] xl:grid-cols-[1fr_24rem] lg:gap-16 xl:gap-20">
          <div className="space-y-16 md:space-y-20 min-w-0">
            {story.sections.map((section, si) => (
              <div key={`${section.title}-${si}`}>
                <SectionBlock section={section} si={si} />
              </div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <Link
                to="/success-stories"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/15 font-bold text-sm text-white hover:bg-white/[0.06] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                More success stories
              </Link>
            </motion.div>
          </div>

          <StorySidebar story={story} />
        </div>
      </div>
    </div>
  );
}

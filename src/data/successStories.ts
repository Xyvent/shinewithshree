import story1Art from "../assets/story1.png";
import story2Art from "../assets/story2.png";

export type StorySection = {
  title: string;
  /** Small gold uppercase label (e.g. THE CHALLENGE) */
  kicker?: string;
  paragraphs: string[];
  bullets?: string[];
  /** Rendered after bullets when present */
  paragraphsAfterBullets?: string[];
  numbered?: { title: string; items: string[] }[];
  /** Outcome-style rows with checkmarks */
  presentation?: "default" | "result-cards";
};

export type SuccessStory = {
  slug: string;
  title: string;
  subtitle: string;
  tag: string;
  thumbnailClass: string;
  /** Card image on listing; falls back to thumbnailClass gradient if omitted */
  thumbnailImage?: string;
  sections: StorySection[];
  /** Full-bleed hero photo (dark overlay applied in UI) */
  heroImage?: string;
  impactMetrics?: { label: string; value: string }[];
  frameworks?: string[];
  meta?: { label: string; value: string }[];
};

export const successStories: SuccessStory[] = [
  {
    slug: "stalled-12m-enterprise-win",
    title: "Turning a Stalled $1.2M Deal into a Closed Enterprise Win",
    subtitle: "Digital transformation · enterprise · six-week turnaround",
    tag: "Enterprise sales",
    thumbnailClass:
      "bg-gradient-to-br from-amber-500/30 via-brand-bg to-slate-900 border-amber-500/20",
    thumbnailImage: story1Art,
    heroImage: story1Art,
    impactMetrics: [
      { label: "Deal closed", value: "$1.2M" },
      { label: "Stagnation → close", value: "6 weeks" },
      { label: "Sales cycle vs peers", value: "~−30%" },
      { label: "Active competitors", value: "2 beaten" },
    ],
    frameworks: [
      "MEDDIC",
      "Value-based selling",
      "Consultative closing",
      "Pre-sales motion",
      "Stakeholder alignment",
      "Enterprise positioning",
    ],
    meta: [
      { label: "Target segment", value: "Enterprise" },
      { label: "Region", value: "Global" },
    ],
    sections: [
      {
        title: "Context",
        kicker: "Situation",
        paragraphs: [
          "A large enterprise deal (~$1.2M) in a digital transformation space was stuck for over 4 months in the evaluation stage.",
        ],
        bullets: [
          "Multiple stakeholders involved",
          "Strong competition from 2 established vendors",
          'Client feedback: “All vendors look similar”',
        ],
        paragraphsAfterBullets: [
          "The risk was clear: the deal was not lost yet — but it was not moving forward either.",
        ],
      },
      {
        title: "Challenge",
        kicker: "The challenge",
        bullets: [
          "No clear differentiation in proposals",
          "Conversations were feature-heavy, not outcome-driven",
          "Stakeholder alignment was missing (technical vs business teams)",
          "Buying committee lacked urgency",
        ],
        paragraphs: [],
      },
      {
        title: "Approach",
        kicker: "The solution",
        paragraphs: [],
        numbered: [
          {
            title: "1. Reframed using value-based selling (VBS)",
            items: [
              "Shifted the narrative from: “What we offer” → “What business impact this creates”",
              "Mapped features to business KPIs",
              "Built a value hypothesis tied to cost, efficiency, and scalability",
            ],
          },
          {
            title: "2. Applied MEDDIC framework",
            items: [
              "Metrics → Defined measurable success (cost reduction %, efficiency gain)",
              "Economic buyer → Identified and engaged final decision-maker",
              "Decision criteria → Clarified what truly mattered vs assumed priorities",
              "Decision process → Reverse-mapped approval flow",
              "Champion → Built internal advocate within client team",
            ],
          },
          {
            title: "3. Redesigned pre-sales motion",
            items: [
              "Rebuilt demo around client-specific use cases",
              "Converted generic proposal into problem–solution narrative",
              "Introduced a decision-focused workshop instead of another sales call",
            ],
          },
          {
            title: "4. Created urgency using consultative closing",
            items: [
              "Highlighted cost of inaction",
              "Quantified delay impact on business outcomes",
              "Positioned solution as low-risk, high-ROI move",
            ],
          },
        ],
      },
      {
        title: "Outcome",
        kicker: "Key results",
        presentation: "result-cards",
        bullets: [
          "Deal moved from stagnation to closure in 6 weeks",
          "$1.2M deal successfully closed",
          "Win rate improved against 2 competitors",
          "Sales cycle reduced by ~30% compared to similar deals",
        ],
        paragraphs: [],
      },
      {
        title: "Key insight",
        kicker: "Key takeaway",
        paragraphs: [
          "Deals don’t stall because clients say no. They stall because you haven’t made the decision obvious.",
        ],
      },
    ],
  },
  {
    slug: "team-conversion-18-to-37",
    title: "Scaling Team Conversion Rate from 18% to 37% in 2 Quarters",
    subtitle: "PreSales & sales · mid-to-large enterprise · team-level transformation",
    tag: "Team transformation",
    thumbnailClass:
      "bg-gradient-to-br from-emerald-500/25 via-brand-bg to-slate-900 border-emerald-500/15",
    thumbnailImage: story2Art,
    heroImage: story2Art,
    impactMetrics: [
      { label: "Conversion rate", value: "18% → 37%" },
      { label: "Time horizon", value: "~6 mo" },
      { label: "Sales cycle", value: "−22%" },
      { label: "Lead volume", value: "Unchanged" },
    ],
    frameworks: [
      "BANT + MEDDIC hybrid",
      "Stage-based pipeline",
      "Problem-led demos",
      "Discovery → value framing",
      "Weekly deal reviews",
      "Conversion tracking",
    ],
    meta: [
      { label: "Target segment", value: "Mid-to-large enterprise" },
      { label: "Focus", value: "PreSales & sales team" },
    ],
    sections: [
      {
        title: "Context",
        kicker: "Situation",
        paragraphs: [
          "A PreSales and sales team handling mid-to-large enterprise opportunities was facing a consistent challenge:",
        ],
        bullets: [
          "High number of qualified leads",
          "Strong initial client interest",
          "But low deal conversion (~18%)",
        ],
        paragraphsAfterBullets: ["Despite effort, outcomes were inconsistent."],
      },
      {
        title: "Challenge",
        kicker: "The challenge",
        bullets: [
          "No standardized deal qualification framework",
          "Inconsistent messaging across team members",
          "Demos were product-heavy, not problem-focused",
          "Weak stakeholder mapping in complex deals",
          "Pipeline looked strong, but closure rate was poor",
        ],
        paragraphs: [],
      },
      {
        title: "Objective",
        kicker: "Objective",
        paragraphs: ["Improve conversion efficiency without increasing lead volume."],
      },
      {
        title: "Approach",
        kicker: "The solution",
        paragraphs: [],
        numbered: [
          {
            title: "1. Introduced BANT + MEDDIC hybrid qualification model",
            items: [
              "BANT (Budget, Authority, Need, Timeline) for initial filtering",
              "MEDDIC for deep qualification in enterprise deals",
              "Result: reduced time spent on low-probability deals; increased focus on high-intent opportunities",
            ],
          },
          {
            title: "2. Standardized communication framework",
            items: [
              "Built a repeatable structure: Discovery → Problem mapping → Value framing → Solution alignment",
              "Each conversation aligned to: “What problem are we solving, and why does it matter now?”",
            ],
          },
          {
            title: "3. Rebuilt demo strategy (problem-led demos)",
            items: [
              "Shifted from feature walkthroughs to business scenario storytelling",
              "Customized demos for top 30% opportunities",
              "Introduced use-case driven narratives; linked every feature to measurable outcomes",
            ],
          },
          {
            title: "4. Pipeline visibility using stage-based conversion tracking",
            items: [
              "Redefined stages: Qualified → Validated → Solution fit → Business alignment → Closure",
              "Tracked drop-offs at each stage to see where deals were failing",
              "Fixed specific conversion gaps instead of guessing",
            ],
          },
          {
            title: "5. Weekly deal reviews (execution discipline)",
            items: [
              "Focused on deal strategy, not just status updates",
              "Challenged assumptions in active deals",
              "Reinforced frameworks across the team",
            ],
          },
        ],
      },
      {
        title: "Outcome",
        kicker: "Key results",
        presentation: "result-cards",
        bullets: [
          "Conversion rate improved from 18% → 37% in ~6 months",
          "Sales cycle reduced by 22%",
          "Pipeline quality improved (fewer but stronger deals)",
          "Team consistency significantly increased",
        ],
        paragraphs: [],
      },
      {
        title: "Key insight",
        kicker: "Key takeaway",
        paragraphs: [
          "Growth doesn’t come from more leads. It comes from better qualification and better conversations.",
        ],
      },
    ],
  },
];

export function getStoryBySlug(slug: string): SuccessStory | undefined {
  return successStories.find((s) => s.slug === slug);
}

import { motion } from "motion/react";
import { 
  Users, 
  BarChart3, 
  Target, 
  Zap, 
  Briefcase, 
  Globe 
} from "lucide-react";

export default function Expertise() {
  const skills = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Leadership",
      description: "Mentoring high-performing teams, fostering accountabilty and excellence.",
      color: "from-blue-500/20 to-transparent"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Revenue Growth",
      description: "Strategic market expansion and high-value deal closures across global markets.",
      color: "from-amber-500/20 to-transparent"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Sales Strategy",
      description: "Designing and executing high-impact sales strategies to maximize market share.",
      color: "from-purple-500/20 to-transparent"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Digital Transformation",
      description: "Navigating complex technical landscapes to deliver modern solutions.",
      color: "from-emerald-500/20 to-transparent"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Enterprise Sales",
      description: "Building trusted relationships with C-level executives and key stakeholders.",
      color: "from-rose-500/20 to-transparent"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Diverse Markets",
      description: "Extensive experience across USA, UAE, and European markets.",
      color: "from-cyan-500/20 to-transparent"
    }
  ];

  return (
    <section id="expertise" className="bg-slate-950/50 border-y border-white/5">
      <div className="section-padding">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Core Strengths</h2>
            <h3 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              PRECISION IN <span className="text-slate-500">EXECUTION</span>,<br />
              VISION IN STRATEGY.
            </h3>
          </div>
          <div className="text-right">
            <div className="text-6xl font-display font-light text-white/10 hidden md:block select-none">EXPERTISE</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-10 border border-white/5 bg-brand-bg transition-all hover:bg-white/[0.02] group`}
            >
              <div className={`mb-8 p-4 rounded-2xl bg-gradient-to-br ${skill.color} border border-white/5 inline-block text-brand-accent group-hover:scale-110 transition-transform`}>
                {skill.icon}
              </div>
              <h4 className="text-xl font-display font-bold mb-4 tracking-tight">{skill.title}</h4>
              <p className="text-slate-400 font-light leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

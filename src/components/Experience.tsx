import { motion } from "motion/react";

export default function Experience() {
  const experiences = [
    {
      company: "Wipro",
      role: "Deputy Manager - PreSales | Digital Transformation",
      period: "Dec 2021 - May 2023",
      description: "Led complex pre-sales initiatives for digital transformation projects, aligning technical solutions with business goals."
    },
    {
      company: "InfoBeans",
      role: "Presales Manager",
      period: "June 2013 - Dec 2021",
      description: "Spent over 8 years scaling pre-sales operations, driving revenue through strategic account planning and opportunity management."
    },
    {
      company: "Cyber Infrastructure",
      role: "Business Development Specialist",
      period: "May 2013 - May 2014",
      description: "Focused on market expansion and building robust sales pipelines in a CMMI Level 3 environment."
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="mb-20">
        <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Professional Path</h2>
        <h3 className="font-display text-4xl md:text-5xl font-bold tracking-tight">EXPERIENCE</h3>
      </div>

      <div className="space-y-4">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative grid md:grid-cols-[1fr_2fr] gap-8 p-8 border border-white/5 bg-white/[0.02] rounded-3xl hover:bg-white/[0.04] transition-all"
          >
            <div>
              <div className="text-3xl font-display font-bold mb-2">{exp.company}</div>
              <div className="text-sm font-bold text-brand-accent uppercase tracking-widest">{exp.period}</div>
            </div>
            <div>
              <div className="text-xl font-medium mb-4 text-slate-200">{exp.role}</div>
              <p className="text-slate-400 font-light leading-relaxed max-w-xl text-lg">
                {exp.description}
              </p>
            </div>
            
            {/* Visual Line Decor */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 group-hover:h-1/2 bg-brand-accent transition-all duration-500 rounded-full" />
          </motion.div>
        ))}
      </div>

      {/* Education */}
      <div className="mt-20 pt-20 border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">Education</h4>
            <div className="space-y-6">
              <div>
                <div className="text-xl font-bold font-display uppercase tracking-tight">Rajiv Gandhi Prodyogiki Vishwavidyalaya</div>
                <div className="text-brand-muted font-medium">B.E. Computer Science · 2008</div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">Languages</h4>
            <div className="flex flex-wrap gap-4">
              {["English (Professional)", "Hindi (Native)", "Marathi (Professional)"].map(lang => (
                <span key={lang} className="px-4 py-2 rounded-full border border-white/10 text-sm font-medium">
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

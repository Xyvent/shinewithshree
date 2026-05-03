import { motion } from "motion/react";
import { Quote } from "lucide-react";

export default function Summary() {
  return (
    <section id="about" className="section-padding">
      <div className="grid lg:grid-cols-[1.5fr_1fr] gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-8">Executive Summary</h2>
          <div className="space-y-6 text-xl md:text-2xl font-light leading-relaxed text-slate-300">
            <p>
              As a <span className="text-white font-medium italic">results-driven sales leader</span>, I specialise in designing and 
              executing high-impact sales strategies that drive revenue growth across diverse markets, 
              including the USA, UAE, and Europe.
            </p>
            <p>
              I empower professionals to go from <span className="text-brand-accent underline underline-offset-8">"Working" to "Empowered"</span> by sharing 
              leadership insights and sales expertise. My approach combines the precision of high-level pre-sales 
              with the vision of transformative leadership.
            </p>
            <p className="text-lg text-slate-400">
              With over a decade of experience across both product and service sectors, I help startups and 
              established enterprises accelerate growth, strengthen market positioning, and foster 
              cultures of accountability.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="p-12 bg-white/[0.03] rounded-3xl border border-white/5 relative overflow-hidden">
            <Quote className="absolute -top-6 -left-6 w-24 h-24 text-brand-accent opacity-10" />
            <div className="relative z-10 space-y-8">
              <div className="space-y-2">
                <div className="text-4xl font-display font-bold">15+</div>
                <div className="text-xs font-bold text-brand-muted uppercase tracking-[0.2em]">Years Global Experience</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-display font-bold text-brand-accent">3</div>
                <div className="text-xs font-bold text-brand-muted uppercase tracking-[0.2em]">Continents Served</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-display font-bold underline underline-offset-4 decoration-brand-accent">C-Level</div>
                <div className="text-xs font-bold text-brand-muted uppercase tracking-[0.2em]">Strategic Relationships</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

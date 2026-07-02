import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { siteConfig } from "../config/site";

export default function ContentCta() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-10 md:p-12 text-center"
    >
      <p className="text-xs font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Continue the conversation</p>
      <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-white mb-4">
        Ready to apply this to your pipeline?
      </h2>
      <p className="text-slate-400 font-light max-w-lg mx-auto mb-8">
        Book a conversation to discuss enterprise strategy, team coaching, or your next complex deal.
      </p>
      <Link
        to={{ pathname: "/", hash: "#contact" }}
        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-accent text-brand-bg font-bold text-sm hover:bg-white transition-colors"
      >
        <Mail className="w-4 h-4" />
        {siteConfig.email}
      </Link>
    </motion.div>
  );
}

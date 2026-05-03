import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import profileImage from "../assets/profile.png";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="section-padding relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
            <span className="text-[10px] font-bold tracking-widest text-brand-accent uppercase">Empowerment Catalyst</span>
          </div>
          
          <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
            HELPING <br />
            <span className="text-gradient">LEADERS</span> <br />
            TRANSFORM.
          </h1>
          
          <p className="text-lg text-slate-400 max-w-lg mb-10 leading-relaxed font-light">
            Empowering professionals and startups to bridge the gap between working and empowerment through 
            high-impact sales strategies and leadership excellence.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/success-stories"
              className="px-8 py-4 rounded-full bg-white text-brand-bg font-bold flex items-center gap-2 hover:bg-brand-accent transition-colors group"
            >
              VIEW SUCCESS STORIES
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full border border-white/10 font-bold hover:bg-white/5 transition-colors inline-flex items-center justify-center"
            >
              GET IN TOUCH
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative px-6"
        >
          {/* Portrait — square asset; size capped to hero column + viewport height */}
          <div className="relative mx-auto lg:mx-0 lg:ml-auto w-[min(100%,min(26rem,65svh))] aspect-square shrink-0 rounded-[2rem] bg-slate-800 border border-white/5 overflow-hidden shadow-2xl shadow-black/40 group">
            <img
              src={profileImage}
              alt="Shree Sharma"
              width={800}
              height={800}
              className="absolute inset-0 h-full w-full object-cover object-[center_20%] select-none pointer-events-none"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/90 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

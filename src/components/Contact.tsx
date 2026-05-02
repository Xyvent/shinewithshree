import { motion } from "motion/react";
import { Linkedin, Mail, Instagram, Youtube, Twitter, Phone } from "lucide-react";

export default function Contact() {
  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/in/shinewithshree" },
    { icon: <Instagram className="w-5 h-5" />, href: "#" },
    { icon: <Twitter className="w-5 h-5" />, href: "#" },
    { icon: <Youtube className="w-5 h-5" />, href: "#" },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="glass p-12 md:p-20 rounded-[3rem] text-center relative overflow-hidden group">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-px bg-gradient-to-r from-transparent via-brand-accent to-transparent" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-8 tracking-tighter">
            READY TO <span className="text-brand-accent italic font-light">ELEVATE</span> YOUR <br />
            SALES STRATEGY?
          </h2>
          
          <p className="text-slate-400 max-w-xl mx-auto mb-12 text-lg font-light leading-relaxed">
            Let's discuss how we can drive revenue growth, mentor your team, or transform your professional journey.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-16">
            <a 
              href="mailto:hello.shreesharma@gmail.com" 
              className="flex items-center gap-3 px-8 py-4 rounded-full bg-white text-brand-bg font-bold hover:bg-brand-accent transition-colors"
            >
              <Mail className="w-5 h-5" />
              hello.shreesharma@gmail.com
            </a>
            <div className="flex items-center gap-3 px-8 py-4 rounded-full glass border-white/10 font-bold">
              <Phone className="w-5 h-5 text-brand-accent" />
              +91 98934 23395
            </div>
          </div>

          <div className="flex justify-center gap-6">
            {socialLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                whileHover={{ y: -5, color: "#EAB308" }}
                className="p-4 rounded-full glass border-white/5 text-slate-400 transition-colors"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
        
        {/* Background Accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-brand-accent/5 to-transparent pointer-events-none" />
      </div>

      <footer className="mt-20 py-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-display font-bold tracking-tighter text-slate-500">
          SHREE<span className="text-brand-accent">.</span>SHARMA
        </div>
        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">
          &copy; 2024 SHREE SHARMA. DESIGNED FOR EMPOWERMENT.
        </div>
        <div className="flex gap-8">
          <a href="#" className="text-xs font-bold text-slate-500 hover:text-white transition-colors uppercase tracking-widest">Privacy</a>
          <a href="#" className="text-xs font-bold text-slate-500 hover:text-white transition-colors uppercase tracking-widest">Terms</a>
        </div>
      </footer>
    </section>
  );
}

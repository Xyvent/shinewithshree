import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const isStories = pathname.startsWith("/success-stories");

  const navLinks = [
    { name: "About", to: "/#about" },
    { name: "Expertise", to: "/#expertise" },
    { name: "Stories", to: "/success-stories" },
    { name: "Contact", to: "/#contact" },
  ];

  const linkClass = (active: boolean) =>
    `text-sm font-medium transition-colors ${
      active ? "text-brand-accent" : "text-slate-300 hover:text-brand-accent"
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b-0 border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="font-display font-bold text-xl tracking-tighter text-inherit hover:text-brand-accent transition-colors"
        >
          SHREE<span className="text-brand-accent">.</span>SHARMA
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={link.to}
                className={linkClass(link.name === "Stories" ? isStories : false)}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/#contact"
              className="inline-block px-5 py-2 rounded-full bg-brand-accent text-brand-bg font-bold text-sm"
            >
              LET&apos;S CONNECT
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <button type="button" className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
          {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 right-0 bg-brand-bg border-b border-white/10 px-6 py-10 flex flex-col gap-6"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-display font-medium"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/#contact"
            onClick={() => setIsOpen(false)}
            className="text-2xl font-display font-medium text-brand-accent"
          >
            LET&apos;S CONNECT
          </Link>
        </motion.div>
      )}
    </nav>
  );
}

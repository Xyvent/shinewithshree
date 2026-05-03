import { Outlet } from "react-router-dom";
import Header from "./Header";
import { motion, useScroll, useSpring } from "motion/react";

export default function Layout() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="bg-brand-bg min-h-screen">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-accent z-[60] origin-left"
        style={{ scaleX }}
      />

      <Header />

      <main>
        <Outlet />
      </main>

      <div className="fixed top-20 right-10 w-px h-32 bg-gradient-to-b from-brand-accent to-transparent opacity-20 pointer-events-none hidden xl:block" />
      <div className="fixed bottom-20 left-10 w-px h-32 bg-gradient-to-t from-brand-accent to-transparent opacity-20 pointer-events-none hidden xl:block" />
      <div className="fixed bottom-10 right-10 text-[10px] font-bold text-brand-muted uppercase tracking-[0.3em] vertical-rl pointer-events-none hidden xl:block">
        EMPOWERMENT CATALYST
      </div>
    </div>
  );
}

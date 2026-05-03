import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

/** Scroll to #id on home after route/hash change (React Router does not always scroll to hash). */
export function useScrollToHash() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (pathname !== "/" || !hash) return;
    const id = hash.replace(/^#/, "");
    if (!id) return;

    const run = () => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    run();
    const t = window.setTimeout(run, 100);
    return () => window.clearTimeout(t);
  }, [pathname, hash]);
}

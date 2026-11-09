"use client";

import { useEffect } from "react";
import Meetlint from "@/components/graphics/Meetlint";

export default function ScrollTape() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const onScroll = () => {
      const root = document.documentElement;
      const max = root.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      root.style.setProperty("--scroll-p", progress.toFixed(4));
      if (!reduce) {
        const shift = Math.round(window.scrollY * 0.15) % 50;
        root.style.setProperty("--tape-shift", `${shift}px`);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[10px] bg-zand" aria-hidden="true">
      <div className="h-full overflow-hidden" style={{ width: "calc(var(--scroll-p) * 100%)" }}>
        <div className="h-full w-screen">
          <Meetlint numerals={false} className="h-[10px]" />
        </div>
      </div>
    </div>
  );
}

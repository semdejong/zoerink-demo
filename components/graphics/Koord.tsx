"use client";

import { useEffect, useRef, useState } from "react";

type KoordProps = {
  className?: string;
  dark?: boolean;
};

export default function Koord({ className = "", dark = false }: KoordProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} className={`mt-3 block ${visible ? "is-in" : ""} ${className}`}>
      <svg width="168" height="16" viewBox="0 0 168 16" aria-hidden="true" focusable="false">
        <line
          x1="0"
          y1="3"
          x2="168"
          y2="13"
          stroke={dark ? "#F79F1A" : "#E8890C"}
          strokeWidth="2"
          pathLength="1"
          className="koord-line"
        />
      </svg>
    </span>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Peg from "@/components/graphics/Peg";
import WorkImage from "@/components/photos/WorkImage";
import type { Photo } from "@/lib/photos";

export type PegStep = {
  title: string;
  text: string;
  photo?: Photo;
  photoCaption?: string;
};

export default function PegRoute({ steps, labelledBy }: { steps: PegStep[]; labelledBy?: string }) {
  const ref = useRef<HTMLOListElement>(null);
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
      { threshold: 0.25 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <ol ref={ref} aria-labelledby={labelledBy} className={`relative ${visible ? "is-in" : ""}`}>
      <svg
        className="pointer-events-none absolute top-1 left-[6px] h-[calc(100%-2.5rem)] w-4 md:hidden"
        viewBox="0 0 16 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <line x1="3" y1="0" x2="13" y2="100" stroke="#E8890C" strokeWidth="2" vectorEffect="nonScalingStroke" pathLength="1" className="koord-line" />
      </svg>
      <svg
        className="pointer-events-none absolute inset-x-0 top-0 hidden h-16 w-full md:block"
        viewBox="0 0 1000 64"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <line
          x1="60"
          y1="8"
          x2="940"
          y2="34"
          stroke="#E8890C"
          strokeWidth="2"
          vectorEffect="nonScalingStroke"
          pathLength="1"
          className="koord-line"
        />
      </svg>
      <div className={`grid gap-8 md:items-start ${steps.length === 3 ? "md:grid-cols-3" : "md:grid-cols-4"}`}>
        {steps.map((step, index) => (
          <li key={step.title} className="relative pl-10 md:pl-0 md:pt-16">
            <span className="absolute top-0 left-0 md:left-1/2 md:-translate-x-1/2">
              <span className="md:hidden">
                <Peg />
              </span>
              <span className="hidden md:block" style={{ transform: `translateY(${index * 8}px)` }}>
                <Peg />
              </span>
            </span>
            <h3 className="font-display text-2xl font-extrabold text-haag">{step.title}</h3>
            <p className="mt-2 text-base leading-relaxed">{step.text}</p>
            {step.photo ? (
              <figure className="mt-4">
                <WorkImage photo={step.photo} sizes="(max-width: 768px) 86vw, 280px" framed className="w-full max-w-[420px]" />
                {step.photoCaption ? (
                  <figcaption className="mt-2 font-mono text-[11px] uppercase tracking-wide text-schors">
                    {step.photoCaption}
                  </figcaption>
                ) : null}
              </figure>
            ) : null}
          </li>
        ))}
      </div>
    </ol>
  );
}

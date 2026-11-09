"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import Lightbox from "@/components/photos/Lightbox";
import WorkImage from "@/components/photos/WorkImage";
import ScaleBar from "@/components/graphics/ScaleBar";
import type { Job } from "@/lib/photos";

type WerkbonProps = {
  job: Job;
  variant?: "strip" | "grid";
  intro?: string;
  moreHref?: string;
  moreLabel?: string;
};

export default function Werkbon({ job, variant = "strip", intro, moreHref, moreLabel }: WerkbonProps) {
  const [index, setIndex] = useState<number | null>(null);
  const close = useCallback(() => setIndex(null), []);

  return (
    <section data-section={`werkbon-${job.id}`} id={job.id} className="min-w-0">
      <h3 className="stamp">{job.stamp}</h3>
      {intro || job.blurb ? <p className="mt-3 max-w-3xl">{intro ?? job.blurb}</p> : null}
      <div className={variant === "strip" ? "photo-rail mt-4" : "mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3"}>
        {job.photos.map((photo, photoIndex) => (
          <button
            key={photo.src}
            type="button"
            className="block min-w-0 text-left"
            onClick={() => setIndex(photoIndex)}
          >
            <WorkImage
              photo={photo}
              framed
              sizes={variant === "strip" ? "320px" : "(max-width: 640px) 92vw, 360px"}
              className="w-full"
            />
            <span className="mt-1 block font-mono text-[11px] uppercase tracking-wide text-schors">
              {job.sequence ? `stap ${photoIndex + 1}` : `foto ${photoIndex + 1}`}
            </span>
          </button>
        ))}
      </div>
      {variant === "strip" ? <ScaleBar /> : null}
      {moreHref && moreLabel ? (
        <p className="mt-3">
          <Link href={moreHref} className="font-semibold text-schors underline decoration-koord decoration-2 underline-offset-4">
            {moreLabel}
          </Link>
        </p>
      ) : null}
      {index !== null ? (
        <Lightbox
          photos={job.photos}
          index={index}
          title={job.title}
          sequence={job.sequence}
          onClose={close}
          onIndex={setIndex}
        />
      ) : null}
    </section>
  );
}

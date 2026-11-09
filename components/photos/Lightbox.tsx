"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import type { Photo } from "@/lib/photos";

type LightboxProps = {
  photos: Photo[];
  index: number;
  title: string;
  sequence: boolean;
  onClose: () => void;
  onIndex: (index: number) => void;
};

export default function Lightbox({ photos, index, title, sequence, onClose, onIndex }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);
  const onIndexRef = useRef(onIndex);
  const indexRef = useRef(index);
  const startX = useRef<number | null>(null);
  const photo = photos[index];

  useEffect(() => {
    onCloseRef.current = onClose;
    onIndexRef.current = onIndex;
    indexRef.current = index;
  });

  useEffect(() => {
    const previous = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      const current = indexRef.current;
      if (event.key === "Escape") {
        event.preventDefault();
        onCloseRef.current();
      } else if (event.key === "ArrowRight" && current < photos.length - 1) {
        event.preventDefault();
        onIndexRef.current(current + 1);
      } else if (event.key === "ArrowLeft" && current > 0) {
        event.preventDefault();
        onIndexRef.current(current - 1);
      } else if (event.key === "Tab") {
        const root = document.getElementById("fotovenster");
        const nodes = root?.querySelectorAll<HTMLElement>("button:not(:disabled)");
        if (!nodes || nodes.length === 0) return;
        const list = Array.from(nodes);
        const first = list[0];
        const last = list[list.length - 1];
        if (!first || !last) return;
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
      previous?.focus();
    };
  }, [photos.length]);

  if (!photo) return null;

  const counter = sequence ? `stap ${index + 1} van ${photos.length}` : `foto ${index + 1} van ${photos.length}`;

  return (
    <div
      id="fotovenster"
      role="dialog"
      aria-modal="true"
      aria-label={`${title}, ${counter}`}
      className="fixed inset-0 z-[80] flex flex-col bg-haag text-zand"
      onClick={onClose}
      onTouchStart={(event) => {
        startX.current = event.changedTouches[0]?.clientX ?? null;
      }}
      onTouchEnd={(event) => {
        if (startX.current == null) return;
        const endX = event.changedTouches[0]?.clientX ?? startX.current;
        const delta = endX - startX.current;
        startX.current = null;
        if (delta > 48 && index > 0) onIndex(index - 1);
        if (delta < -48 && index < photos.length - 1) onIndex(index + 1);
      }}
    >
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <p className="font-mono text-[11px] uppercase tracking-wide text-lime">{counter}</p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="btn btn-lime min-w-11"
        >
          Sluiten
        </button>
      </div>
      <div className="flex min-h-0 flex-1 items-center justify-center px-4" onClick={(event) => event.stopPropagation()}>
        <Image
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          sizes={`${photo.width}px`}
          className="h-auto w-auto"
          style={{ maxWidth: `min(92vw, ${photo.width}px)`, maxHeight: "calc(100dvh - 9.5rem)" }}
        />
      </div>
      <div className="flex items-center justify-between gap-3 px-4 py-3" onClick={(event) => event.stopPropagation()}>
        <button
          type="button"
          className="btn btn-line-light min-w-11 disabled:opacity-40"
          onClick={() => onIndex(index - 1)}
          disabled={index === 0}
        >
          Vorige
        </button>
        <p className="max-w-xl text-center font-mono text-[11px] uppercase leading-snug tracking-wide text-lime">
          {photo.alt}
        </p>
        <button
          type="button"
          className="btn btn-line-light min-w-11 disabled:opacity-40"
          onClick={() => onIndex(index + 1)}
          disabled={index === photos.length - 1}
        >
          Volgende
        </button>
      </div>
    </div>
  );
}

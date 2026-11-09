import Link from "next/link";
import Meetlint from "@/components/graphics/Meetlint";
import type { Job } from "@/lib/photos";

export default function Kluslint({ jobs, hrefBase = "/fotos" }: { jobs: Job[]; hrefBase?: string }) {
  return (
    <nav aria-label="Klussen in het archief" data-section="kluslint" className="bg-wit">
      <div className="wrap flex flex-wrap items-end justify-between gap-3 pt-5">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-schors">Archief · een lint per klus</p>
        <p className="font-mono text-[11px] uppercase tracking-wide text-haag">{jobs.reduce((sum, job) => sum + job.photos.length, 0)} foto&apos;s</p>
      </div>
      <Meetlint numerals={false} className="mt-3 h-[10px]" />
      <div className="photo-rail wrap py-4">
        {jobs.map((job) => (
          <Link
            key={job.id}
            href={`${hrefBase}#${job.id}`}
            className="block w-[15.5rem] shrink-0 border-[1.5px] border-koord bg-zand px-3 py-3 text-ink"
          >
            <span className="font-mono text-[11px] uppercase tracking-wide text-schors">
              {job.sequence ? "werkvolgorde · " : ""}
              {job.photos.length} foto&apos;s
            </span>
            <span className="mt-1 block font-display text-xl leading-tight font-extrabold text-haag">{job.title}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

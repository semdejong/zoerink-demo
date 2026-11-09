import type { Job } from "@/lib/photos";

export default function Veldstaat({ jobs }: { jobs: Job[] }) {
  const fotos = jobs.reduce((sum, job) => sum + job.photos.length, 0);
  const volgorde = jobs.filter((job) => job.sequence).length;
  const rows = [
    { value: String(jobs.length), unit: "klussen", note: "aanleg en onderhoud" },
    { value: String(fotos), unit: "foto's", note: "in bestandsvolgorde" },
    { value: String(volgorde), unit: "werkvolgordes", note: "stap voor stap" },
  ];

  return (
    <section data-section="veldstaat" className="bg-haag text-zand" aria-label="Geteld in het fotoarchief">
      <div className="wrap grid grid-cols-3">
        {rows.map((row) => (
          <p key={row.unit} className="border-l border-lime/50 px-2 py-6 first:border-l-0 sm:px-4 md:py-8">
            <span className="block font-display text-4xl font-extrabold text-lime md:text-5xl">{row.value}</span>
            <span className="mt-1 block font-mono text-[11px] uppercase tracking-wide text-zand">{row.unit}</span>
            <span className="mt-1 hidden text-sm text-zand sm:block">{row.note}</span>
          </p>
        ))}
      </div>
    </section>
  );
}

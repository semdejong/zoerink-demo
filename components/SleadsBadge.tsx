/** Subtiele badge: markeert de site als concept van Sleads. Niet verwijderen in demo's. */
export default function SleadsBadge() {
  return (
    <a
      href="https://sleads.nl"
      target="_blank"
      rel="noopener"
      aria-label="Concept door Sleads – bekijk sleads.nl"
      className="absolute top-1/2 right-2 z-10 inline-flex -translate-y-1/2 items-center gap-1.5 rounded-full border border-haag/15 bg-white px-2 py-0.5 text-[10px] font-medium text-neutral-700 shadow-sm transition hover:text-black md:right-4 md:text-[11px] print:hidden"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden />
      Concept door <span className="font-semibold">Sleads</span>
    </a>
  );
}

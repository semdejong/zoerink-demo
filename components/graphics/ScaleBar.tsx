import Meetlint from "@/components/graphics/Meetlint";

export default function ScaleBar() {
  return (
    <div className="mt-3 flex flex-wrap items-center gap-3">
      <Meetlint numerals className="h-7 w-[200px] shrink-0" label="Meetlint" />
      <p className="font-mono text-[11px] uppercase tracking-wide text-schors">schaal 1:1 — echte foto&apos;s</p>
    </div>
  );
}

import Meetlint from "@/components/graphics/Meetlint";

export default function ScaleBar() {
  return (
    <div className="mt-3 flex w-full flex-wrap items-center gap-x-3 gap-y-1">
      <Meetlint numerals className="h-7 w-[200px] shrink-0" label="Meetlint op schaal 1:1" />
      <p className="font-mono text-[11px] uppercase tracking-wide text-schors sm:ml-auto">schaal 1:1 — echte foto&apos;s</p>
    </div>
  );
}

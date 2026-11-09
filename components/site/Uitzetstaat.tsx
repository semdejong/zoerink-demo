import Peg from "@/components/graphics/Peg";
import Koord from "@/components/graphics/Koord";
import PegList from "@/components/site/PegList";

type Column = { heading: string; items: readonly string[] };

export default function Uitzetstaat({
  kicker = "Uitzetstaat",
  title,
  intro,
  columns,
}: {
  kicker?: string;
  title: string;
  intro?: string;
  columns: Column[];
}) {
  return (
    <div className="uitgezet bg-wit px-5 py-6 md:px-8 md:py-8">
      <span className="peg-corner peg-tl">
        <Peg size="sm" />
      </span>
      <span className="peg-corner peg-tr">
        <Peg size="sm" />
      </span>
      <span className="peg-corner peg-bl">
        <Peg size="sm" />
      </span>
      <span className="peg-corner peg-br">
        <Peg size="sm" />
      </span>
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-schors">{kicker}</p>
      <h2 className="mt-2 max-w-3xl font-display text-3xl font-extrabold text-haag md:text-4xl">{title}</h2>
      <Koord />
      {intro ? <p className="mt-5 max-w-3xl">{intro}</p> : null}
      <div className={`mt-8 grid gap-8 ${columns.length > 1 ? "md:grid-cols-2" : ""}`}>
        {columns.map((column) => (
          <div key={column.heading}>
            <h3 className="font-display text-2xl font-extrabold text-haag">{column.heading}</h3>
            <PegList items={column.items} />
          </div>
        ))}
      </div>
    </div>
  );
}

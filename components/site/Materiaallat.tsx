import Meetlint from "@/components/graphics/Meetlint";

export default function Materiaallat({ items }: { items: readonly string[] }) {
  return (
    <div data-section="materiaallat" className="mt-8">
      <Meetlint className="h-7 w-full" label="Meetlint bij de materialen" />
      <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <li key={item} className="border-[1.5px] border-koord bg-wit px-4 py-4 font-display text-xl font-extrabold text-haag">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

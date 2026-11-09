import Peg from "@/components/graphics/Peg";

export default function PegList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-3">
          <Peg size="sm" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

import Link from "next/link";
import Peg from "@/components/graphics/Peg";

export default function Uitgezet({
  href,
  title,
  text,
  className = "",
}: {
  href: string;
  title: string;
  text: string;
  className?: string;
}) {
  return (
    <Link href={href} className={`uitgezet px-5 py-6 ${className}`}>
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
      <h3 className="font-display text-2xl font-extrabold text-haag">{title}</h3>
      <p className="mt-2 text-base leading-relaxed">{text}</p>
    </Link>
  );
}

import type { ReactNode } from "react";
import Koord from "@/components/graphics/Koord";

export default function PageHero({
  title,
  lede,
  children,
}: {
  title: string;
  lede: string;
  children?: ReactNode;
}) {
  return (
    <header data-section="pagina-kop" className="wrap py-12 md:py-16">
      <h1 className="max-w-4xl font-display text-4xl font-extrabold leading-[1.05] text-haag md:text-6xl">{title}</h1>
      <Koord />
      <p className="mt-5 max-w-3xl">{lede}</p>
      {children ? <div className="mt-6 flex flex-wrap gap-3">{children}</div> : null}
    </header>
  );
}

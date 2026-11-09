import Link from "next/link";
import { content } from "@/content";
import PageHero from "@/components/site/PageHero";
import { PhoneLink } from "@/components/site/Links";

const links = [
  { href: "/tuinaanleg", label: "Tuinaanleg" },
  { href: "/onderhoud-renovatie", label: "Onderhoud en renovatie" },
  { href: "/bestrating-schuttingen", label: "Bestrating en schuttingen" },
  { href: "/planten-materialen", label: "Planten en materialen" },
  { href: "/fotos", label: "Foto's" },
  { href: "/offerte", label: "Offerte aanvragen" },
];

export default function NotFound() {
  return (
    <main>
      <PageHero
        title="Deze pagina ligt niet op het terrein"
        lede="Het adres klopt niet, of de pagina is er niet. De tuinpagina's beginnen hieronder, of meteen met een telefoontje."
      >
        <Link href="/" className="btn btn-haag">
          Naar de homepage
        </Link>
        <PhoneLink className="btn btn-koord">Bel {content.contact.phoneDisplay}</PhoneLink>
      </PageHero>
      <section data-section="verder" className="wrap pb-16">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="flex min-h-11 items-center border-[1.5px] border-koord bg-wit px-4 font-display text-xl font-extrabold text-haag" data-cta={item.href === "/offerte" ? "offerte" : undefined}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

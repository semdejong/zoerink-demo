import type { Metadata } from "next";
import { content } from "@/content";
import Koord from "@/components/graphics/Koord";
import Peg from "@/components/graphics/Peg";
import WorkImage from "@/components/photos/WorkImage";
import ContactBlock from "@/components/site/ContactBlock";
import PageHero from "@/components/site/PageHero";
import { OfferteLink, PhoneLink } from "@/components/site/Links";
import { portraits } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Over René",
  description:
    "René Zoerink, hovenier in Warnsveld. Aanleg, onderhoud, renovatie, bestrating, schuttingen en levering in de regio Zutphen, Lochem en Deventer.",
};

const plaatsen = ["Warnsveld", "Zutphen", "Lochem", "Deventer", "en omgeving"];

const handen = [
  { href: "/tuinaanleg", title: "Tuinaanleg", text: "Een nieuwe tuin met bloemen, planten, bestrating en schuttingen." },
  { href: "/onderhoud-renovatie", title: "Onderhoud", text: "Wekelijks, maandelijks of enkele keren per jaar, in overleg." },
  { href: "/onderhoud-renovatie#renovatie", title: "Renovatie", text: "Als bomen of heesters te groot worden, of u uitgekeken bent." },
  { href: "/bestrating-schuttingen", title: "Bestrating en schuttingen", text: "Straatwerk in vier stappen, en hekwerken die ik plaats en lever." },
  { href: "/planten-materialen", title: "Levering en afvoer", text: "Planten, struiken, bomen, stenen, zand, grind, grond. Afval gaat mee terug." },
  { href: "/fotos", title: "Het fotoarchief", text: "Elke klus op een rij, met de foto's die bij het werk horen." },
];

export default function OverPage() {
  return (
    <main>
      <PageHero
        title="Over René"
        lede="Hoveniersbedrijf René Zoerink is een jong en dynamisch bedrijf. Ik kom graag bij u langs, denk met u mee en doe het werk zelf."
      >
        <PhoneLink className="btn btn-haag">Bel {content.contact.phoneDisplay}</PhoneLink>
        <OfferteLink className="btn btn-koord">Offerte aanvragen</OfferteLink>
      </PageHero>

      <section data-section="over-rene" className="wrap grid items-start gap-10 pb-16 lg:grid-cols-[minmax(0,400px)_1fr]">
        <div>
          <WorkImage photo={portraits.rene} sizes="400px" className="w-full max-w-[400px] border-[1.5px] border-haag" />
          <p className="mt-2 max-w-[400px] font-mono text-[11px] uppercase tracking-wide text-schors">René Zoerink bij zijn bus</p>
        </div>
        <div>
          <h2 className="font-display text-3xl font-extrabold text-haag">Eén hovenier, één aanspreekpunt</h2>
          <Koord />
          <p className="mt-5 max-w-2xl">
            Aanleg, onderhoud, renovatie, straatwerk, schuttingen en de levering van planten en materialen zitten in één hand. U spreekt René Zoerink, Oude Borculoseweg 14 in Warnsveld.
          </p>
          <p className="mt-4 max-w-2xl">{content.visitLine}</p>
          <p className="mt-4 max-w-2xl">
            Het bedrijf noemt zichzelf jong en dynamisch. Werkgebied: {content.company.region}.
          </p>
        </div>
      </section>

      <section data-section="werkgebied" className="bg-haag text-zand">
        <div className="wrap py-14">
          <h2 className="font-display text-3xl font-extrabold text-white">Werkgebied, op één lijn</h2>
          <Koord dark />
          <p className="mt-5 max-w-2xl">De plaatsen waar ik voor u langskom.</p>
          <ol className="mt-8 flex flex-wrap gap-3">
            {plaatsen.map((plaats) => (
              <li key={plaats} className="flex items-center gap-2 border-[1.5px] border-lime px-3 py-2 text-lime">
                <Peg size="sm" />
                <span className="font-display text-xl font-extrabold">{plaats}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section data-section="handen" className="wrap py-16">
        <h2 className="font-display text-3xl font-extrabold text-haag">Wat er in die hand zit</h2>
        <Koord />
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {handen.map((item) => (
            <a key={item.href} href={item.href} className="border-[1.5px] border-koord bg-wit p-5">
              <span className="font-display text-2xl font-extrabold text-haag">{item.title}</span>
              <span className="mt-2 block">{item.text}</span>
            </a>
          ))}
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <figure>
            <WorkImage photo={portraits.aanleg} sizes="450px" className="w-full max-w-[450px] border-[1.5px] border-haag" />
            <figcaption className="mt-2 font-mono text-[11px] uppercase tracking-wide text-schors">Aanleg particuliere tuin</figcaption>
          </figure>
          <figure>
            <WorkImage photo={portraits.onderhoud} sizes="450px" className="w-full max-w-[450px] border-[1.5px] border-haag" />
            <figcaption className="mt-2 font-mono text-[11px] uppercase tracking-wide text-schors">Onderhoud particuliere tuin</figcaption>
          </figure>
        </div>
      </section>
      <ContactBlock heading="Contact met René" />
    </main>
  );
}

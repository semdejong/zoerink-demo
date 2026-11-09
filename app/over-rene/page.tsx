import type { Metadata } from "next";
import { content } from "@/content";
import Koord from "@/components/graphics/Koord";
import WorkImage from "@/components/photos/WorkImage";
import ContactBlock from "@/components/site/ContactBlock";
import PageHero from "@/components/site/PageHero";
import PegList from "@/components/site/PegList";
import { OfferteLink, PhoneLink } from "@/components/site/Links";
import { portraits } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Over René",
  description:
    "René Zoerink, hovenier in Warnsveld. Aanleg, onderhoud, renovatie, bestrating, schuttingen en levering in de regio Zutphen, Lochem en Deventer.",
};

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
      <section data-section="over-rene" className="wrap grid items-start gap-10 pb-16 md:grid-cols-[minmax(0,400px)_1fr]">
        <WorkImage photo={portraits.rene} sizes="400px" className="w-full max-w-[400px] border-[1.5px] border-haag" />
        <div>
          <h2 className="font-display text-3xl font-extrabold text-haag">In één hand</h2>
          <Koord />
          <p className="mt-5 max-w-2xl">
            Aanleg, onderhoud, renovatie, straatwerk, schuttingen en de levering van planten en materialen. U heeft één aanspreekpunt: René Zoerink, Oude Borculoseweg 14 in Warnsveld.
          </p>
          <p className="mt-4 max-w-2xl">Werkgebied: {content.company.region}.</p>
          <h2 className="mt-10 font-display text-3xl font-extrabold text-haag">Wat ik doe</h2>
          <PegList
            items={[
              "Tuinaanleg met bloemen, planten, bestrating en schuttingen",
              "Onderhoud, wekelijks, maandelijks of enkele keren per jaar",
              "Renovatie als bomen of heesters te groot worden",
              "Bestrating en schuttingen of hekwerken",
              "Levering van planten en materialen, afvoer van afval en grond",
            ]}
          />
          <p className="mt-6 max-w-2xl">{content.visitLine}</p>
        </div>
      </section>
      <ContactBlock heading="Contact met René" />
    </main>
  );
}

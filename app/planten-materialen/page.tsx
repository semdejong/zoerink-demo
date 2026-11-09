import type { Metadata } from "next";
import { content } from "@/content";
import Koord from "@/components/graphics/Koord";
import Werkbon from "@/components/photos/Werkbon";
import CtaBand from "@/components/site/CtaBand";
import PageHero from "@/components/site/PageHero";
import PegList from "@/components/site/PegList";
import { OfferteLink, PhoneLink } from "@/components/site/Links";
import { jobById } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Planten en materialen",
  description:
    "Levering van planten, struiken, bomen en materialen, en afvoer van afval en grond. Hoveniersbedrijf René Zoerink, Warnsveld.",
};

export default function PlantenPage() {
  return (
    <main>
      <PageHero
        title="Planten, materialen en afvoer"
        lede="Levering hoort bij het werk: planten, struiken en bomen, en de materialen die een tuin nodig heeft. Grond en afval gaan ook weer mee."
      >
        <PhoneLink className="btn btn-haag">Bel {content.contact.phoneDisplay}</PhoneLink>
        <OfferteLink dienst="leveren" className="btn btn-koord">
          Offerte aanvragen
        </OfferteLink>
      </PageHero>

      <section data-section="levering" className="wrap grid gap-12 pb-16 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-extrabold text-haag">Leveren</h2>
          <Koord />
          <PegList items={["Planten, struiken en bomen", "Stenen", "Zand", "Grind", "Grond"]} />
        </div>
        <div>
          <h2 className="font-display text-3xl font-extrabold text-haag">Afvoeren</h2>
          <Koord />
          <p className="mt-5">Afval en grond voer ik af. Dat kan bij aanleg, renovatie of een tuinbeurt.</p>
          <p className="mt-6">
            <OfferteLink dienst="afvoeren" className="btn btn-line">
              Offerte voor afvoer
            </OfferteLink>
          </p>
        </div>
      </section>

      <section data-section="levering-fotos" className="bg-wit">
        <div className="wrap space-y-16 py-16">
          <div>
            <h2 className="font-display text-3xl font-extrabold text-haag">Waar het de grond in ging</h2>
            <Koord />
            <p className="mt-5 max-w-3xl">
              De foto&apos;s laten tuinen zien waarin beplanting en materialen samenkomen. De moestuin met molensteen, de particuliere aanleg en de betonnen bielzen-bakken.
            </p>
          </div>
          <Werkbon job={jobById("aanleg-moestuin-met-molensteen")} />
          <Werkbon job={jobById("aanleg-tuin-particulier")} />
          <Werkbon job={jobById("betonnen-bielzen-bakken")} />
        </div>
      </section>
      <CtaBand dienst="leveren" />
    </main>
  );
}

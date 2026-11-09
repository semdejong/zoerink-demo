import type { Metadata } from "next";
import { content } from "@/content";
import Koord from "@/components/graphics/Koord";
import Werkbon from "@/components/photos/Werkbon";
import WorkImage from "@/components/photos/WorkImage";
import CtaBand from "@/components/site/CtaBand";
import PageHero from "@/components/site/PageHero";
import PegList from "@/components/site/PegList";
import { OfferteLink, PhoneLink } from "@/components/site/Links";
import { jobById, portraits } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Tuinaanleg",
  description:
    "Een compleet nieuwe tuin met bloemen, planten, bestrating en schuttingen. René Zoerink komt vrijblijvend langs in Warnsveld, Zutphen, Lochem en Deventer.",
};

const jobs = [
  "aanleg-tuin-particulier",
  "aanleg-tuin",
  "aanleg-voortuin",
  "aanleg-moestuin-met-molensteen",
  "betonnen-bielzen-bakken",
  "particuliere-tuin-slopen",
];

export default function TuinaanlegPage() {
  return (
    <main>
      <PageHero
        title="Tuinaanleg"
        lede="Een compleet nieuwe tuin, met bloemen, planten, bestrating en schuttingen. Het ontwerp volgt uw smaak en moet werken in het dagelijks gebruik."
      >
        <PhoneLink className="btn btn-haag">Bel {content.contact.phoneDisplay}</PhoneLink>
        <OfferteLink dienst="tuinaanleg" className="btn btn-koord">
          Offerte aanvragen
        </OfferteLink>
      </PageHero>

      <section data-section="aanleg-wensen" className="wrap grid gap-10 pb-16 md:grid-cols-[1fr_minmax(0,450px)] md:items-start">
        <div>
          <h2 className="font-display text-3xl font-extrabold text-haag">Naar uw smaak, en functioneel</h2>
          <Koord />
          <p className="mt-5 max-w-2xl">
            Voordat er geplant of bestraat wordt, kijken we wat de tuin moet kunnen. Dat verschilt per huis.
          </p>
          <PegList items={content.aanlegAandacht} />
          <h2 className="mt-12 font-display text-3xl font-extrabold text-haag">Beplanting</h2>
          <Koord />
          <p className="mt-5 max-w-2xl">
            De keuze van bloemen, planten, struiken en eventuele bomen komt pas nadat de plek bekeken is.
          </p>
          <PegList items={content.beplanting} />
          <p className="mt-4 max-w-2xl">Daarna gaan bloemen, planten, struiken en eventuele bomen de grond in.</p>
        </div>
        <WorkImage
          photo={portraits.aanleg}
          sizes="450px"
          className="w-full max-w-[450px] border-[1.5px] border-haag"
        />
      </section>

      <section data-section="aanleg-fotos" className="bg-wit">
        <div className="wrap space-y-16 py-16">
          <div>
            <h2 className="font-display text-3xl font-extrabold text-haag">Uit het werk</h2>
            <Koord />
            <p className="mt-5 max-w-3xl">
              Aanleg van particuliere tuinen, een voortuin, een moestuin met molensteen, betonnen bielzen-bakken en het slopen van een tuin voordat de nieuwe aanleg begint.
            </p>
          </div>
          {jobs.map((id) => (
            <Werkbon key={id} job={jobById(id)} />
          ))}
        </div>
      </section>
      <CtaBand dienst="tuinaanleg" />
    </main>
  );
}

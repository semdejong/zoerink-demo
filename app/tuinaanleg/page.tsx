import type { Metadata } from "next";
import { content } from "@/content";
import Koord from "@/components/graphics/Koord";
import Werkbon from "@/components/photos/Werkbon";
import WorkImage from "@/components/photos/WorkImage";
import CtaBand from "@/components/site/CtaBand";
import PageHero from "@/components/site/PageHero";
import Uitzetstaat from "@/components/site/Uitzetstaat";
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

      <section data-section="aanleg-wensen" className="wrap grid items-start gap-10 pb-16 lg:grid-cols-[minmax(0,450px)_1fr]">
        <WorkImage
          photo={portraits.aanleg}
          sizes="450px"
          className="w-full max-w-[450px] border-[1.5px] border-haag"
        />
        <div>
          <h2 className="font-display text-3xl font-extrabold text-haag">Eerst de lijn, dan de planten</h2>
          <Koord />
          <p className="mt-5 max-w-2xl">
            Een compleet nieuwe tuin volgt uw smaak en moet werken. Ik kom graag bij u langs voor een vrijblijvend gesprek, waarin u uw wensen kenbaar kunt maken. Pas daarna gaan bloemen, planten, struiken en eventuele bomen de grond in.
          </p>
          <p className="mt-4 max-w-2xl">
            Bestrating en schuttingen kunnen in dezelfde aanleg mee. Soms begint het werk met slopen: de bestaande tuin eruit, en dan opnieuw.
          </p>
        </div>
      </section>

      <section data-section="uitzetstaat" className="wrap pb-16">
        <Uitzetstaat
          title="Wat ik uit zet voor de eerste schep"
          intro="Geen twee tuinen beginnen hetzelfde. Dit zijn de punten die ik met u langsloop."
          columns={[
            { heading: "De tuin moet kunnen", items: content.aanlegAandacht },
            { heading: "Voor de beplanting kijk ik naar", items: content.beplanting },
          ]}
        />
      </section>

      <section data-section="aanleg-fotos" className="bg-wit">
        <div className="wrap space-y-16 py-16">
          <div>
            <h2 className="font-display text-3xl font-extrabold text-haag">Uit het werk</h2>
            <Koord />
            <p className="mt-5 max-w-3xl">
              Zes klussen uit het archief. Particuliere tuinen, een voortuin, een moestuin met molensteen, betonnen bielzen-bakken, en het slopen van een tuin voordat de nieuwe aanleg begint. Elke reeks houdt de naam van het werk.
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

import type { Metadata } from "next";
import { content } from "@/content";
import Koord from "@/components/graphics/Koord";
import RitmeKiezer from "@/components/home/RitmeKiezer";
import Werkbon from "@/components/photos/Werkbon";
import WorkImage from "@/components/photos/WorkImage";
import CtaBand from "@/components/site/CtaBand";
import PageHero from "@/components/site/PageHero";
import PegList from "@/components/site/PegList";
import { OfferteLink, PhoneLink } from "@/components/site/Links";
import { jobById, portraits } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Onderhoud en renovatie",
  description:
    "Tuinonderhoud in uw ritme en renovatie als de tuin te groot of te vol is geworden. Hoveniersbedrijf René Zoerink, Warnsveld.",
};

export default function OnderhoudPage() {
  return (
    <main>
      <PageHero
        title="Onderhoud en renovatie"
        lede="Een tuinbeurt in het ritme dat bij u past, of een tuin die weer nieuw mag worden als u erop uitgekeken bent."
      >
        <PhoneLink className="btn btn-haag">Bel {content.contact.phoneDisplay}</PhoneLink>
        <OfferteLink dienst="onderhoud" className="btn btn-koord">
          Offerte aanvragen
        </OfferteLink>
      </PageHero>

      <section data-section="onderhoud" className="wrap grid gap-10 pb-16 md:grid-cols-[1fr_minmax(0,450px)] md:items-start">
        <div>
          <h2 className="font-display text-3xl font-extrabold text-haag">Onderhoud in overleg</h2>
          <Koord />
          <p className="mt-5 max-w-2xl">
            Samen maken we een plan. Wekelijks, maandelijks of maar enkele keren per jaar een tuinbeurt, alles in overleg.
          </p>
          <div className="mt-6 max-w-xl">
            <RitmeKiezer />
          </div>
          <PegList items={content.onderhoudTaken} />
        </div>
        <WorkImage
          photo={portraits.onderhoud}
          sizes="450px"
          className="w-full max-w-[450px] border-[1.5px] border-haag"
        />
      </section>

      <section data-section="renovatie" id="renovatie" className="bg-wit">
        <div className="wrap py-16">
          <h2 className="font-display text-3xl font-extrabold text-haag">Renovatie</h2>
          <Koord />
          <p className="mt-5 max-w-3xl">
            Worden bomen of heesters te groot, of bent u uitgekeken op uw tuin? Dan maken we hem weer nieuw. Hieronder staat onder meer het verwijderen van conniferen en het frezen van stobben, op volgorde van het werk.
          </p>
          <div className="mt-10">
            <Werkbon job={jobById("conniferen-verwijderen-en-stobben-frezen")} />
          </div>
        </div>
      </section>

      <section data-section="onderhoud-fotos" className="wrap space-y-16 py-16">
        <Werkbon job={jobById("onderhoud-particuliere-tuin")} />
        <Werkbon job={jobById("gazon-verticuteren")} />
        <Werkbon job={jobById("winterbeurt-tuin")} />
        <Werkbon job={jobById("onderhoud-landgoed-t-haveke")} variant="grid" />
      </section>
      <CtaBand dienst="onderhoud" />
    </main>
  );
}

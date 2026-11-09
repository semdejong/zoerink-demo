import type { Metadata } from "next";
import { content } from "@/content";
import Koord from "@/components/graphics/Koord";
import PegRoute from "@/components/graphics/PegRoute";
import Werkbon from "@/components/photos/Werkbon";
import CtaBand from "@/components/site/CtaBand";
import PageHero from "@/components/site/PageHero";
import PegList from "@/components/site/PegList";
import { OfferteLink, PhoneLink } from "@/components/site/Links";
import { jobById, photoByNumber } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Bestrating en schuttingen",
  description:
    "Klein straatwerk en schuttingen door René Zoerink. Tegels, gebakken keiklinkers, natuursteen, grind en split, met een aangetrild zandbed.",
};

export default function BestratingPage() {
  const steps = content.bestratingStappen.map((step) => ({
    title: step.title,
    text: step.text,
    photo: photoByNumber(step.jobId, step.photoN),
    photoCaption: jobById(step.jobId).title,
  }));

  return (
    <main>
      <PageHero
        title="Bestrating en schuttingen"
        lede="Klein straatwerk met een degelijke ondergrond, en schuttingen en hekwerken die geplaatst en geleverd worden."
      >
        <PhoneLink className="btn btn-haag">Bel {content.contact.phoneDisplay}</PhoneLink>
        <OfferteLink dienst="bestrating" className="btn btn-koord">
          Offerte aanvragen
        </OfferteLink>
      </PageHero>

      <section data-section="straatwerk" className="wrap pb-16">
        <h2 id="vier-stappen" className="font-display text-3xl font-extrabold text-haag">Vier stappen</h2>
        <Koord />
        <p className="mt-5 max-w-3xl">
          We kiezen het materiaal samen: tegels, gebakken keiklinkers, natuursteen, en veel soorten grind en split.
        </p>
        <div className="mt-10">
          <PegRoute steps={steps} labelledBy="vier-stappen" />
        </div>
        <p className="mt-10 max-w-3xl font-display text-2xl font-bold text-haag">
          Zo kunt u lang plezier hebben van vakkundig aangelegde bestrating.
        </p>
        <PegList items={content.bestratingMaterialen} />
      </section>

      <section data-section="schuttingen" id="schuttingen" className="bg-wit">
        <div className="wrap py-16">
          <h2 className="font-display text-3xl font-extrabold text-haag">Schuttingen en hekwerken</h2>
          <Koord />
          <p className="mt-5 max-w-3xl">Schuttingen en hekwerken plaatsen en leveren. Dat kan los, of als onderdeel van een nieuwe tuin.</p>
          <p className="mt-6">
            <OfferteLink dienst="schutting" className="btn btn-line">
              Offerte voor een schutting of hekwerk
            </OfferteLink>
          </p>
        </div>
      </section>

      <section data-section="bestrating-fotos" className="wrap space-y-16 py-16">
        <Werkbon job={jobById("betonnen-bielzen-bakken")} />
        <Werkbon job={jobById("particuliere-tuin-slopen")} />
        <Werkbon job={jobById("aanleg-tuin-particulier")} />
        <Werkbon job={jobById("aanleg-voortuin")} />
      </section>
      <CtaBand dienst="bestrating" />
    </main>
  );
}

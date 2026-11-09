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

      <section data-section="levering" className="wrap pb-16">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-extrabold text-haag">Wat er geleverd wordt</h2>
            <Koord />
            <p className="mt-5">
              Levering van planten, struiken en bomen, en van materialen: stenen, zand, grind en grond. Dat hoort bij het werk.
            </p>
            <PegList items={["Planten, struiken en bomen", "Stenen", "Zand", "Grind", "Grond"]} />
          </div>
          <div>
            <h2 className="font-display text-3xl font-extrabold text-haag">Wat er weer weggaat</h2>
            <Koord />
            <p className="mt-5">
              Afval en grond voer ik af. Dat kan bij een nieuwe aanleg, bij een renovatie en bij een tuinbeurt.
            </p>
            <p className="mt-4">
              Bij het slopen van een tuin gaat het oude materiaal mee. Bij bestrating horen zand en stenen erbij, en de grond die vrijkomt voer ik af.
            </p>
            <p className="mt-6 flex flex-wrap gap-3">
              <OfferteLink dienst="leveren" className="btn btn-koord">
                Offerte voor levering
              </OfferteLink>
              <OfferteLink dienst="afvoeren" className="btn btn-line">
                Offerte voor afvoer
              </OfferteLink>
            </p>
          </div>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            { href: "/tuinaanleg", title: "Bij de aanleg", text: "Bloemen, planten, struiken en eventuele bomen, nadat grondsoort, vocht en zon bekeken zijn." },
            { href: "/bestrating-schuttingen", title: "Bij de bestrating", text: "Tegels, gebakken keiklinkers, natuursteen, grind en split. Eerst zand, dan het materiaal." },
            { href: "/onderhoud-renovatie", title: "Bij onderhoud", text: "Haag, heesters en wat er bij een beurt vrijkomt. Afval en grond voer ik af." },
          ].map((item) => (
            <a key={item.href} href={item.href} className="block h-full border-[1.5px] border-koord bg-wit p-5">
              <span className="font-display text-2xl font-extrabold text-haag">{item.title}</span>
              <span className="mt-2 block">{item.text}</span>
            </a>
          ))}
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

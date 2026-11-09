import type { Metadata } from "next";
import { content } from "@/content";
import Werkbon from "@/components/photos/Werkbon";
import CtaBand from "@/components/site/CtaBand";
import PageHero from "@/components/site/PageHero";
import { OfferteLink, PhoneLink } from "@/components/site/Links";
import { jobs } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Foto's",
  description:
    "Fotoarchief van Hoveniersbedrijf René Zoerink: aanleg, onderhoud, bestrating, stobben frezen en Landgoed 't Haveke.",
};

export default function FotosPage() {
  const groepen = ["Aanleg", "Onderhoud"] as const;
  return (
    <main>
      <PageHero
        title="Foto's"
        lede="Het werk, per klus. Elke reeks staat op volgorde van de bestanden. Bij een werkvolgorde ziet u stap 1, stap 2, enzovoort."
      >
        <PhoneLink className="btn btn-haag">Bel {content.contact.phoneDisplay}</PhoneLink>
        <OfferteLink className="btn btn-koord">Offerte aanvragen</OfferteLink>
      </PageHero>
      {groepen.map((groep) => (
        <section key={groep} data-section={`fotos-${groep.toLowerCase()}`} className="wrap space-y-16 pb-16">
          <h2 className="font-display text-3xl font-extrabold text-haag">{groep}</h2>
          {jobs
            .filter((job) => job.group === groep)
            .map((job) => (
              <Werkbon key={job.id} job={job} variant="grid" />
            ))}
        </section>
      ))}
      <CtaBand />
    </main>
  );
}

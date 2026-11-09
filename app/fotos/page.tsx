import type { Metadata } from "next";
import { content } from "@/content";
import Koord from "@/components/graphics/Koord";
import Werkbon from "@/components/photos/Werkbon";
import CtaBand from "@/components/site/CtaBand";
import Kluslint from "@/components/site/Kluslint";
import Veldstaat from "@/components/site/Veldstaat";
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
      <Veldstaat jobs={jobs} />
      <Kluslint jobs={jobs} hrefBase="" />
      {groepen.map((groep) => (
        <section key={groep} data-section={`fotos-${groep.toLowerCase()}`} className="wrap space-y-16 py-16">
          <div>
            <h2 className="font-display text-4xl font-extrabold text-haag">{groep}</h2>
            <Koord />
            <p className="mt-5 max-w-3xl">
              {groep === "Aanleg"
                ? "Nieuwe tuinen, een voortuin, een moestuin met molensteen, betonnen bielzen-bakken, en het slopen dat aan een nieuwe aanleg voorafgaat."
                : "Tuinbeurten, een gazon dat geverticuteerd wordt, een winterbeurt, conniferen en stobben, en onderhoud op Landgoed 't Haveke."}
            </p>
          </div>
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

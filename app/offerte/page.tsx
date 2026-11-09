import type { Metadata } from "next";
import { Suspense } from "react";
import { content } from "@/content";
import OfferteForm, { OfferteGate } from "@/components/offerte/OfferteForm";
import Koord from "@/components/graphics/Koord";
import PageHero from "@/components/site/PageHero";
import { MailLink, PhoneLink } from "@/components/site/Links";

export const metadata: Metadata = {
  title: "Offerte aanvragen",
  description:
    "Vraag een offerte aan bij Hoveniersbedrijf René Zoerink. Het formulier opent uw mailprogramma. Bellen kan op 06-24621906.",
};

export default function OffertePage() {
  return (
    <main>
      <PageHero
        title="Offerte aanvragen"
        lede="Bellen is het meest directe. Het formulier zet uw wensen in een bericht dat u zelf verstuurt."
      >
        <PhoneLink className="btn btn-haag">Bel {content.contact.phoneDisplay}</PhoneLink>
        <MailLink className="btn btn-line">{content.contact.email}</MailLink>
      </PageHero>
      <section data-section="offerte" className="wrap pb-16">
        <Suspense fallback={<OfferteForm dienst={null} ritme={null} />}>
          <OfferteGate />
        </Suspense>
      </section>
      <section data-section="daarna" className="bg-wit">
        <div className="wrap py-14">
          <h2 className="font-display text-3xl font-extrabold text-haag">Wat er daarna gebeurt</h2>
          <Koord />
          <p className="mt-5 max-w-3xl">
            Ik neem contact met u op en kom graag vrijblijvend bij u langs, zodat u uw wensen kenbaar kunt maken.
          </p>
          <p className="mt-4 max-w-3xl">
            Dit is een concept; uw mailprogramma opent met het bericht. Er wordt vanaf deze site niets verstuurd.
          </p>
        </div>
      </section>
    </main>
  );
}

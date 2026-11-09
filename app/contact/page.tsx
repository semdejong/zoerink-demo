import type { Metadata } from "next";
import { content } from "@/content";
import ContactBlock from "@/components/site/ContactBlock";
import FaqList from "@/components/site/FaqList";
import Koord from "@/components/graphics/Koord";
import PageHero from "@/components/site/PageHero";
import { OfferteLink, PhoneLink } from "@/components/site/Links";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Bel René Zoerink op 06-24621906 of mail rene_zoerink@hotmail.com. Oude Borculoseweg 14, 7231 PR Warnsveld. KvK 08188051.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        title="Contact"
        lede={`${content.visitLine} Bellen kan op ${content.contact.phoneDisplay}. Mailen kan naar ${content.contact.email}.`}
      >
        <PhoneLink className="btn btn-haag">Bel {content.contact.phoneDisplay}</PhoneLink>
        <OfferteLink className="btn btn-koord">Offerte aanvragen</OfferteLink>
      </PageHero>
      <ContactBlock heading="Adres en gegevens" />
      <section data-section="faq" className="wrap py-16">
        <h2 className="font-display text-4xl font-extrabold text-haag">Vragen</h2>
        <Koord />
        <div className="mt-8">
          <FaqList />
        </div>
      </section>
    </main>
  );
}

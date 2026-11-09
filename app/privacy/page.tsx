import type { Metadata } from "next";
import { content } from "@/content";
import Koord from "@/components/graphics/Koord";
import PageHero from "@/components/site/PageHero";
import { MailLink } from "@/components/site/Links";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Privacyverklaring van het concept voor Hoveniersbedrijf René Zoerink. Verantwoordelijke, KvK en het cookieloze bezoekteller van Sleads.",
};

export default function PrivacyPage() {
  const { contact, company } = content;
  return (
    <main>
      <PageHero
        title="Privacy"
        lede="Deze pagina hoort bij een conceptwebsite. Hier staat wie verantwoordelijk is voor de bedrijfsgegevens, en wat het offerteformulier wel en niet doet."
      />
      <section data-section="privacy" className="wrap max-w-3xl pb-16">
        <h2 className="font-display text-3xl font-extrabold text-haag">Verantwoordelijke</h2>
        <Koord />
        <p className="mt-5">
          {company.legalName}
          <br />
          {contact.owner}
          <br />
          {contact.street}, {contact.postalCode} {contact.city}
          <br />
          KvK {contact.kvk} ({contact.kvkPlace})
        </p>
        <p className="mt-4">
          E-mail: <MailLink className="font-semibold text-schors underline decoration-koord decoration-2 underline-offset-4" />
        </p>
        <h2 className="mt-12 font-display text-3xl font-extrabold text-haag">Offerteformulier</h2>
        <Koord />
        <p className="mt-5">
          De offerteaanvraag wordt niet op deze site opgeslagen. Als u het formulier afrondt, opent uw eigen mailprogramma een bericht aan René. Er gaat pas iets de deur uit als u dat bericht zelf verstuurt.
        </p>
        <h2 className="mt-12 font-display text-3xl font-extrabold text-haag">Bezoeken</h2>
        <Koord />
        <p className="mt-5">
          Deze conceptsite plaatst geen cookies. Sleads, de studio die dit concept maakte, telt bezoeken met een cookieloos script, zodat zichtbaar is of de pagina bekeken wordt. Dat script zet geen reclameprofiel en deelt geen gegevens met advertentienetwerken.
        </p>
      </section>
    </main>
  );
}

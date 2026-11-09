import type { Metadata } from "next";
import { content } from "@/content";
import PageHero from "@/components/site/PageHero";
import Uitzetstaat from "@/components/site/Uitzetstaat";
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
      <section data-section="privacy" className="wrap grid gap-6 pb-16 lg:grid-cols-3">
        <article className="border-[1.5px] border-koord bg-wit p-5">
          <h2 className="font-display text-2xl font-extrabold text-haag">Verantwoordelijke</h2>
          <p className="mt-4">
            {company.legalName}
            <br />
            {contact.owner}
            <br />
            {contact.street}
            <br />
            {contact.postalCode} {contact.city}
          </p>
          <p className="mt-3">KvK {contact.kvk} ({contact.kvkPlace})</p>
          <p className="mt-3">
            E-mail: <MailLink className="font-semibold text-schors underline decoration-koord decoration-2 underline-offset-4" />
          </p>
        </article>
        <article className="border-[1.5px] border-koord bg-wit p-5">
          <h2 className="font-display text-2xl font-extrabold text-haag">Offerteformulier</h2>
          <p className="mt-4">
            De offerteaanvraag wordt niet op deze site opgeslagen. Als u het formulier afrondt, opent uw eigen mailprogramma een bericht aan René.
          </p>
          <p className="mt-3">Er gaat pas iets de deur uit als u dat bericht zelf verstuurt. Tot die tijd blijft het op uw apparaat.</p>
        </article>
        <article className="border-[1.5px] border-koord bg-wit p-5">
          <h2 className="font-display text-2xl font-extrabold text-haag">Bezoeken</h2>
          <p className="mt-4">
            Deze conceptsite plaatst geen cookies. Sleads, de studio die dit concept maakte, telt bezoeken met een cookieloos script.
          </p>
        </article>
      </section>
      <section className="wrap pb-16">
        <Uitzetstaat
          kicker="Kort"
          title="Wat deze pagina niet belooft"
          intro="Alleen het bovenstaande staat vast. Er is geen cookiemuur, omdat er geen cookies geplaatst worden."
          columns={[
            {
              heading: "Wel",
              items: ["Naam, adres, e-mail en KvK van René Zoerink", "Een mail die u zelf verstuurt", "Een cookieloze telling door Sleads"],
            },
            {
              heading: "Niet op deze site",
              items: ["Opslag van het offerteformulier", "Cookies"],
            },
          ]}
        />
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import { content } from "@/content";
import Koord from "@/components/graphics/Koord";
import Peg from "@/components/graphics/Peg";
import FaqList from "@/components/site/FaqList";
import PageHero from "@/components/site/PageHero";
import { MailLink, OfferteLink, PhoneLink } from "@/components/site/Links";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Bel René Zoerink op 06-24621906 of mail rene_zoerink@hotmail.com. Oude Borculoseweg 14, 7231 PR Warnsveld. KvK 08188051.",
};

export default function ContactPage() {
  const { contact } = content;
  return (
    <main>
      <PageHero
        title="Contact"
        lede={content.visitLine}
      >
        <PhoneLink className="btn btn-haag">Bel {contact.phoneDisplay}</PhoneLink>
        <OfferteLink className="btn btn-koord">Offerte aanvragen</OfferteLink>
      </PageHero>

      <section data-section="contact" className="wrap grid items-start gap-8 pb-16 lg:grid-cols-2">
        <address className="uitgezet bg-wit px-5 py-6 md:px-8">
          <span className="peg-corner peg-tl">
            <Peg size="sm" />
          </span>
          <span className="peg-corner peg-tr">
            <Peg size="sm" />
          </span>
          <span className="peg-corner peg-bl">
            <Peg size="sm" />
          </span>
          <span className="peg-corner peg-br">
            <Peg size="sm" />
          </span>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-schors">Uitgezet adres</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-haag">{content.company.legalName}</h2>
          <Koord />
          <p className="mt-5 text-2xl leading-snug">
            {contact.street}
            <br />
            {contact.postalCode} {contact.city}
          </p>
          <p className="mt-4">
            <PhoneLink className="font-display text-2xl font-extrabold text-schors underline decoration-koord decoration-2 underline-offset-4">
              {contact.phoneDisplay}
            </PhoneLink>
          </p>
          <p className="mt-2">
            <MailLink className="break-all font-semibold text-schors underline decoration-koord decoration-2 underline-offset-4" />
          </p>
          <p className="mt-4">KvK {contact.kvk}, Kamer van Koophandel {contact.kvkPlace}</p>
          <p className="mt-4">
            <a href={contact.mapsHref} target="_blank" rel="noopener" className="font-semibold text-schors underline decoration-koord decoration-2 underline-offset-4">
              Dit adres op Google Maps
            </a>
          </p>
        </address>
        <div>
          <h2 className="font-display text-3xl font-extrabold text-haag">Drie manieren</h2>
          <Koord />
          <ol className="mt-6 space-y-6">
            <li className="flex gap-3">
              <Peg />
              <div>
                <h3 className="font-display text-2xl font-extrabold text-haag">Bellen</h3>
                <p className="mt-1">Het meest directe. {contact.phoneDisplay}, René zelf.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <Peg />
              <div>
                <h3 className="font-display text-2xl font-extrabold text-haag">Mailen</h3>
                <p className="mt-1">Een gewoon bericht naar {contact.email}.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <Peg />
              <div>
                <h3 className="font-display text-2xl font-extrabold text-haag">Offerte</h3>
                <p className="mt-1">
                  Het formulier opent uw mailprogramma met een leesbare samenvatting. Er wordt vanaf de site niets verstuurd.
                </p>
                <p className="mt-3">
                  <OfferteLink className="btn btn-koord">Naar de offerte</OfferteLink>
                </p>
              </div>
            </li>
          </ol>
          <p className="mt-8 max-w-xl">Werkgebied: {content.company.region}.</p>
        </div>
      </section>

      <section data-section="faq" className="bg-wit">
        <div className="wrap py-16">
          <h2 className="font-display text-4xl font-extrabold text-haag">Vragen die ik kan beantwoorden</h2>
          <Koord />
          <p className="mt-5 max-w-3xl">Alleen wat vaststaat. Prijzen, tijden en keurmerken staan hier niet.</p>
          <div className="mt-8">
            <FaqList />
          </div>
        </div>
      </section>
    </main>
  );
}

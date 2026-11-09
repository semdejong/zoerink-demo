import { content } from "@/content";
import Koord from "@/components/graphics/Koord";
import { MailLink, OfferteLink, PhoneLink } from "@/components/site/Links";

export default function ContactBlock({ heading = "Contact" }: { heading?: string }) {
  const { contact } = content;
  return (
    <section data-section="contact" className="bg-wit">
      <div className="wrap grid gap-10 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-20">
        <div>
          <h2 className="font-display text-4xl font-extrabold text-haag">{heading}</h2>
          <Koord />
          <p className="mt-5 max-w-xl">{content.visitLine}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <PhoneLink className="btn btn-haag">Bel {contact.phoneDisplay}</PhoneLink>
            <OfferteLink className="btn btn-koord">Offerte aanvragen</OfferteLink>
          </div>
        </div>
        <address className="border-[1.5px] border-koord bg-zand p-5">
          <p className="font-display text-2xl font-extrabold text-haag">{content.company.legalName}</p>
          <p className="mt-3">
            {contact.street}
            <br />
            {contact.postalCode} {contact.city}
          </p>
          <p className="mt-3">
            <PhoneLink className="font-semibold text-schors underline decoration-koord decoration-2 underline-offset-4">
              {contact.phoneDisplay}
            </PhoneLink>
          </p>
          <p className="mt-2">
            <MailLink className="break-all font-semibold text-schors underline decoration-koord decoration-2 underline-offset-4" />
          </p>
          <p className="mt-3">KvK {contact.kvk} ({contact.kvkPlace})</p>
          <p className="mt-4">
            <a href={contact.mapsHref} target="_blank" rel="noopener" className="font-semibold text-schors underline decoration-koord decoration-2 underline-offset-4">
              Adres op Google Maps
            </a>
          </p>
        </address>
      </div>
    </section>
  );
}

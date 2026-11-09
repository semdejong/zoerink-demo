import { content } from "@/content";
import Koord from "@/components/graphics/Koord";
import { MailLink, OfferteLink, PhoneLink } from "@/components/site/Links";

export default function CtaBand({ dienst }: { dienst?: string }) {
  return (
    <section data-section="oproep" className="bg-haag text-zand">
      <div className="wrap py-14 md:py-16">
        <h2 className="font-display text-3xl font-extrabold text-white md:text-4xl">Eerst een vrijblijvend gesprek</h2>
        <Koord dark />
        <p className="mt-5 max-w-2xl text-zand">{content.visitLine}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <PhoneLink className="btn btn-lime">Bel {content.contact.phoneDisplay}</PhoneLink>
          <OfferteLink dienst={dienst} className="btn btn-koord">
            Offerte aanvragen
          </OfferteLink>
        </div>
        <p className="mt-4">
          <MailLink className="break-all text-lime underline decoration-lime/70 underline-offset-4" />
        </p>
      </div>
    </section>
  );
}

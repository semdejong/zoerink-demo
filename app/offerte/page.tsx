import type { Metadata } from "next";
import { Suspense } from "react";
import { content } from "@/content";
import OfferteForm, { OfferteGate } from "@/components/offerte/OfferteForm";
import Koord from "@/components/graphics/Koord";
import Peg from "@/components/graphics/Peg";
import PageHero from "@/components/site/PageHero";
import { MailLink, PhoneLink } from "@/components/site/Links";
import { offerteDiensten } from "@/lib/offerte";

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
      <section data-section="offerte" className="wrap grid items-start gap-8 pb-16 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <Suspense fallback={<OfferteForm dienst={null} ritme={null} />}>
          <OfferteGate />
        </Suspense>
        <aside className="border-[1.5px] border-koord bg-zand p-5">
          <p className="font-mono text-[11px] uppercase tracking-wide text-schors">In het bericht</p>
          <h2 className="mt-2 font-display text-2xl font-extrabold text-haag">Wat u kunt aangeven</h2>
          <ul className="mt-4 space-y-2">
            {offerteDiensten.map((item) => (
              <li key={item.id} className="flex items-center gap-2">
                <Peg size="sm" />
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-base">Bij onderhoud kiest u ook een ritme: wekelijks, maandelijks, enkele keren per jaar, of nog niet.</p>
          <p className="mt-4 text-base">Liever meteen iemand aan de lijn? Bel {content.contact.phoneDisplay}.</p>
        </aside>
      </section>
      <section data-section="daarna" className="bg-wit">
        <div className="wrap py-14">
          <h2 className="font-display text-3xl font-extrabold text-haag">Wat er daarna gebeurt</h2>
          <Koord />
          <ol className="mt-8 grid gap-6 md:grid-cols-3">
            {content.route.slice(0, 3).map((step, index) => (
              <li key={step.title}>
                <Peg />
                <h3 className="mt-3 font-display text-2xl font-extrabold text-haag">
                  {index + 1}. {step.title}
                </h3>
                <p className="mt-2">{step.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-3xl">
            Dit is een concept; uw mailprogramma opent met het bericht. Er wordt vanaf deze site niets verstuurd.
          </p>
        </div>
      </section>
    </main>
  );
}

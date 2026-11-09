import { OfferteLink, PhoneLink } from "@/components/site/Links";

export default function MobileBar() {
  return (
    <div
      data-section="mobiele-balk"
      className="fixed inset-x-0 bottom-0 z-40 border-t-[3px] border-koord bg-zand p-2 md:hidden"
    >
      <div className="grid grid-cols-2 gap-2">
        <PhoneLink className="btn btn-haag">Bel René</PhoneLink>
        <OfferteLink className="btn btn-koord">Offerte</OfferteLink>
      </div>
    </div>
  );
}

import { content } from "@/content";
import PageHero from "@/components/site/PageHero";
import { PhoneLink } from "@/components/site/Links";
import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <PageHero title="Pagina niet gevonden" lede="Deze pagina staat niet op de conceptsite. De tuinpagina's beginnen op de homepage.">
        <Link href="/" className="btn btn-haag">
          Naar de homepage
        </Link>
        <PhoneLink className="btn btn-koord">Bel {content.contact.phoneDisplay}</PhoneLink>
      </PageHero>
    </main>
  );
}

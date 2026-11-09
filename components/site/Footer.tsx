import Link from "next/link";
import { content } from "@/content";
import Meetlint from "@/components/graphics/Meetlint";
import { MailLink, PhoneLink } from "@/components/site/Links";

export default function Footer() {
  const { contact, company } = content;
  return (
    <footer data-section="footer" className="mt-auto">
      <Meetlint numerals={false} className="h-[10px]" />
      <div className="bg-haag text-zand">
        <div className="wrap grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl font-extrabold text-white">{company.wordmark}</p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-lime">{company.wordmarkSub}</p>
            <p className="mt-4 max-w-sm text-base text-zand">{company.description}</p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-lime">Pagina&apos;s</p>
            <ul className="mt-3 space-y-1">
              {content.footerNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="inline-flex min-h-11 items-center text-white underline-offset-4 hover:underline" data-cta={item.href === "/offerte" ? "offerte" : undefined}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-lime">Contact</p>
            <address className="mt-3 space-y-2 text-base">
              <p>
                {contact.street}
                <br />
                {contact.postalCode} {contact.city}
              </p>
              <p>
                <PhoneLink className="inline-flex min-h-11 items-center text-white underline decoration-lime decoration-2 underline-offset-4">
                  {contact.phoneDisplay}
                </PhoneLink>
              </p>
              <p>
                <MailLink className="inline-flex min-h-11 items-center break-all text-white underline decoration-lime decoration-2 underline-offset-4" />
              </p>
              <p>KvK {contact.kvk} ({contact.kvkPlace})</p>
            </address>
          </div>
        </div>
        <div className="wrap flex flex-col gap-2 border-t border-white/15 py-4 pb-24 text-sm text-zand md:flex-row md:items-center md:justify-between md:pb-4">
          <p>KvK {contact.kvk} · {company.legalName}</p>
          <a href="https://sleads.nl" target="_blank" rel="noopener" className="inline-flex min-h-11 items-center text-lime">
            Concept door Sleads
          </a>
        </div>
      </div>
    </footer>
  );
}

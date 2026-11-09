"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { usePathname } from "next/navigation";
import { content } from "@/content";
import Meetlint from "@/components/graphics/Meetlint";
import { OfferteLink, PhoneLink } from "@/components/site/Links";

export default function Header() {
  const pathname = usePathname();
  const menuId = useId();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenPath(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header data-section="header" className="sticky top-[10px] z-50 bg-zand">
      <div className="wrap flex items-center gap-2 py-2.5 xl:gap-5">
        <Link href="/" className="mr-auto min-w-0 leading-none">
          <span className="block font-display text-[1.15rem] font-extrabold tracking-tight text-haag xl:text-2xl">
            {content.company.wordmark}
          </span>
          <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.16em] text-schors">
            {content.company.wordmarkSub}
          </span>
        </Link>
        <nav className="hidden items-center gap-x-4 xl:flex" aria-label="Hoofdmenu">
          {content.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-[15px] leading-tight ${active ? "font-semibold text-haag underline decoration-koord decoration-2 underline-offset-4" : "text-ink hover:text-haag"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <PhoneLink className="inline-flex min-h-11 shrink-0 items-center px-1 text-[15px] font-semibold text-haag xl:btn xl:btn-line xl:px-3">
          {content.contact.phoneDisplay}
        </PhoneLink>
        <OfferteLink className="btn btn-koord hidden shrink-0 xl:inline-flex">Offerte aanvragen</OfferteLink>
        <button
          type="button"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center border-[1.5px] border-haag xl:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Menu sluiten" : "Menu openen"}
          onClick={() => setOpenPath(open ? null : pathname)}
        >
          <span className="relative block h-3.5 w-5" aria-hidden="true">
            <span className={`absolute left-0 h-0.5 w-5 bg-haag ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute top-1.5 left-0 h-0.5 w-5 bg-haag ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 h-0.5 w-5 bg-haag ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </div>
      {open ? (
        <nav id={menuId} className="border-t border-haag/15 bg-zand xl:hidden" aria-label="Mobiel menu">
          <ul className="wrap flex flex-col py-2">
            {content.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className="flex min-h-11 items-center font-display text-xl font-bold text-haag"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/planten-materialen" className="flex min-h-11 items-center font-display text-xl font-bold text-haag">
                Planten & materialen
              </Link>
            </li>
            <li className="flex flex-col gap-2 py-3">
              <PhoneLink className="btn btn-haag">Bel {content.contact.phoneDisplay}</PhoneLink>
              <OfferteLink className="btn btn-koord">Offerte aanvragen</OfferteLink>
            </li>
          </ul>
        </nav>
      ) : null}
      <Meetlint label="Meetlint langs de kop van de pagina" />
    </header>
  );
}

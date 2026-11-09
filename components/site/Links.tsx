import type { ReactNode } from "react";
import Link from "next/link";
import { content } from "@/content";

export function PhoneLink({
  children,
  className = "",
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <a href={content.contact.phoneHref} data-cta="bellen" className={className}>
      {children ?? content.contact.phoneDisplay}
    </a>
  );
}

export function MailLink({
  children,
  className = "",
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <a href={content.contact.emailHref} data-cta="mailen" className={className}>
      {children ?? content.contact.email}
    </a>
  );
}

export function OfferteLink({
  children,
  dienst,
  ritme,
  className = "",
}: {
  children: ReactNode;
  dienst?: string;
  ritme?: string;
  className?: string;
}) {
  const params = new URLSearchParams();
  if (dienst) params.set("dienst", dienst);
  if (ritme) params.set("ritme", ritme);
  const query = params.toString();
  return (
    <Link href={query ? `/offerte?${query}` : "/offerte"} data-cta="offerte" className={className}>
      {children}
    </Link>
  );
}

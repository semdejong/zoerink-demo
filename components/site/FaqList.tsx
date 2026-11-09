import { content } from "@/content";

export default function FaqList() {
  return (
    <div className="border-y border-haag/20">
      {content.faq.map((item) => (
        <details key={item.q} className="border-b border-haag/15 last:border-b-0">
          <summary className="flex min-h-11 cursor-pointer items-center justify-between gap-4 py-3 font-display text-xl font-bold text-haag">
            {item.q}
            <span aria-hidden="true" className="faq-mark font-mono text-2xl leading-none text-koord">
              +
            </span>
          </summary>
          <p className="max-w-3xl pb-4">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

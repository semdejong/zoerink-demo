"use client";

import { useState } from "react";
import { content } from "@/content";
import { OfferteLink } from "@/components/site/Links";

export default function RitmeKiezer() {
  const [ritme, setRitme] = useState<(typeof content.onderhoudRitmes)[number]["id"]>(content.onderhoudRitmes[0].id);

  return (
    <div>
      <div role="radiogroup" aria-label="Ritme van onderhoud" className="grid gap-2 sm:grid-cols-3">
        {content.onderhoudRitmes.map((item) => {
          const selected = ritme === item.id;
          return (
            <button
              key={item.id}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => setRitme(item.id)}
              className={`min-h-11 border-[1.5px] border-haag px-3 text-left font-semibold ${selected ? "bg-haag text-white" : "bg-wit text-haag"}`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <p className="mt-4">
        <OfferteLink ritme={ritme} className="btn btn-koord">
          Dit ritme in de offerte
        </OfferteLink>
      </p>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import Peg from "@/components/graphics/Peg";
import { PhoneLink } from "@/components/site/Links";
import { content } from "@/content";
import {
  contactVoorkeur,
  labelFor,
  mailtoFor,
  offerteDiensten,
  offerteRitmes,
  preselect,
  tuinDelen,
  type OfferteDraft,
} from "@/lib/offerte";

const stepLabels = ["Wat mag er gebeuren?", "Over uw tuin", "Uw gegevens"];

type OfferteFormProps = {
  dienst: string | null;
  ritme: string | null;
};

export function OfferteGate() {
  const params = useSearchParams();
  return <OfferteForm dienst={params.get("dienst")} ritme={params.get("ritme")} />;
}

export default function OfferteForm({ dienst, ritme }: OfferteFormProps) {
  const [step, setStep] = useState(0);
  const [diensten, setDiensten] = useState<string[]>(() => preselect(dienst, ritme).diensten);
  const [ritmeKeuze, setRitmeKeuze] = useState(() => preselect(dienst, ritme).ritme);
  const [deel, setDeel] = useState("");
  const [plaats, setPlaats] = useState("");
  const [omschrijving, setOmschrijving] = useState("");
  const [wanneer, setWanneer] = useState("");
  const [naam, setNaam] = useState("");
  const [telefoon, setTelefoon] = useState("");
  const [email, setEmail] = useState("");
  const [voorkeur, setVoorkeur] = useState("");
  const [privacy, setPrivacy] = useState(false);
  const [error, setError] = useState("");
  const [mailHref, setMailHref] = useState("");

  function toggleDienst(id: string) {
    const removing = diensten.includes(id);
    setDiensten(removing ? diensten.filter((item) => item !== id) : [...diensten, id]);
    if (id === "onderhoud" && removing) setRitmeKeuze("");
  }

  function draft(): OfferteDraft {
    return {
      diensten,
      ritme: ritmeKeuze,
      deel,
      plaats,
      omschrijving,
      wanneer,
      naam,
      telefoon,
      email,
      voorkeur,
    };
  }

  function validate(current: number): string {
    if (current === 0) {
      if (diensten.length === 0) return "Kies minstens één onderdeel.";
      if (diensten.includes("onderhoud") && !ritmeKeuze) return "Kies hoe vaak het onderhoud ongeveer moet.";
    }
    if (current === 1) {
      if (!deel) return "Kies of het om de voortuin, de achtertuin of beide gaat.";
      if (plaats.trim().length < 2) return "Vul de plaats in.";
      if (omschrijving.trim().length < 8) return "Schrijf in een paar woorden wat er moet gebeuren.";
    }
    if (current === 2) {
      if (naam.trim().length < 2) return "Vul uw naam in.";
      if (telefoon.replace(/\D/g, "").length < 8) return "Vul een telefoonnummer in.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return "Vul een e-mailadres in.";
      if (!voorkeur) return "Kies of René moet terugbellen of mailen.";
      if (!privacy) return "Vink aan dat u begrijpt hoe dit concept werkt.";
    }
    return "";
  }

  function next() {
    const message = validate(step);
    setError(message);
    if (!message) setStep((value) => Math.min(2, value + 1));
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = validate(2);
    setError(message);
    if (message) return;
    const href = mailtoFor(draft());
    setMailHref(href);
    window.location.href = href;
  }

  return (
    <form onSubmit={submit} noValidate className="border-[1.5px] border-haag bg-wit p-4 sm:p-6" data-section="offerte-formulier">
      <div className="is-in relative mb-8">
        <svg className="pointer-events-none absolute top-2 right-4 left-4 hidden h-6 sm:block" viewBox="0 0 1000 24" preserveAspectRatio="none" aria-hidden="true">
          <line x1="30" y1="4" x2="970" y2="16" stroke="#E8890C" strokeWidth="2" vectorEffect="nonScalingStroke" pathLength="1" className="koord-line" />
        </svg>
        <ol className="grid gap-4 sm:grid-cols-3" aria-label="Voortgang van de offerte">
          {stepLabels.map((label, index) => (
            <li key={label} className="flex items-start gap-2" aria-current={step === index ? "step" : undefined}>
              <Peg size="sm" />
              <span className={`pt-1 font-mono text-[11px] uppercase leading-tight tracking-wide ${step === index ? "font-semibold text-haag" : "text-schors"}`}>
                {index + 1}. {label}
              </span>
            </li>
          ))}
        </ol>
      </div>

      {error ? (
        <p role="alert" className="mb-4 border-[1.5px] border-koord bg-zand px-3 py-2 text-haag">
          {error}
        </p>
      ) : null}

      {step === 0 ? (
        <fieldset>
          <legend className="font-display text-2xl font-extrabold text-haag">Wat mag er gebeuren?</legend>
          <p className="mt-2 mb-4 max-w-2xl text-base">Meerdere keuzes mogen. Bij onderhoud kies ik daarna het ritme.</p>
          <div className="grid gap-2">
            {offerteDiensten.map((item) => (
              <label key={item.id} className="choice">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={diensten.includes(item.id)}
                  onChange={() => toggleDienst(item.id)}
                />
                <span className="tick" aria-hidden="true" />
                <span>{item.label}</span>
              </label>
            ))}
          </div>
          {diensten.includes("onderhoud") ? (
            <fieldset className="mt-6">
              <legend className="font-display text-xl font-bold text-haag">Hoe vaak het onderhoud?</legend>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {offerteRitmes.map((item) => (
                  <label key={item.id} className="choice">
                    <input
                      type="radio"
                      name="ritme"
                      className="sr-only"
                      checked={ritmeKeuze === item.id}
                      onChange={() => setRitmeKeuze(item.id)}
                    />
                    <span className="tick" aria-hidden="true" />
                    <span>{item.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          ) : null}
        </fieldset>
      ) : null}

      {step === 1 ? (
        <fieldset>
          <legend className="font-display text-2xl font-extrabold text-haag">Over uw tuin</legend>
          <p className="mt-2 mb-4 text-base">Waar mag ik langskomen, en wat speelt er?</p>
          <div className="grid gap-2 sm:grid-cols-3">
            {tuinDelen.map((item) => (
              <label key={item.id} className="choice">
                <input
                  type="radio"
                  name="deel"
                  className="sr-only"
                  checked={deel === item.id}
                  onChange={() => setDeel(item.id)}
                />
                <span className="tick" aria-hidden="true" />
                <span>{item.label}</span>
              </label>
            ))}
          </div>
          <label className="mt-4 block">
            <span className="mb-1 block font-semibold">Plaats</span>
            <input className="field" value={plaats} onChange={(event) => setPlaats(event.target.value)} autoComplete="address-level2" maxLength={80} />
          </label>
          <label className="mt-4 block">
            <span className="mb-1 block font-semibold">Korte omschrijving</span>
            <textarea className="field" value={omschrijving} onChange={(event) => setOmschrijving(event.target.value)} maxLength={500} />
          </label>
          <label className="mt-4 block">
            <span className="mb-1 block font-semibold">Wanneer ongeveer, als u dat al weet</span>
            <input className="field" value={wanneer} onChange={(event) => setWanneer(event.target.value)} maxLength={80} />
          </label>
        </fieldset>
      ) : null}

      {step === 2 ? (
        <fieldset>
          <legend className="font-display text-2xl font-extrabold text-haag">Uw gegevens</legend>
          <dl className="mt-4 space-y-1 border-[1.5px] border-koord bg-zand p-4 text-base">
            <div>
              <dt className="inline font-semibold">Werk: </dt>
              <dd className="inline">{diensten.map((id) => labelFor(offerteDiensten, id)).join(", ")}</dd>
            </div>
            {diensten.includes("onderhoud") ? (
              <div>
                <dt className="inline font-semibold">Ritme: </dt>
                <dd className="inline">{labelFor(offerteRitmes, ritmeKeuze)}</dd>
              </div>
            ) : null}
            <div>
              <dt className="inline font-semibold">Tuin: </dt>
              <dd className="inline">
                {labelFor(tuinDelen, deel)}, {plaats}
              </dd>
            </div>
          </dl>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label>
              <span className="mb-1 block font-semibold">Naam</span>
              <input className="field" value={naam} onChange={(event) => setNaam(event.target.value)} autoComplete="name" maxLength={80} />
            </label>
            <label>
              <span className="mb-1 block font-semibold">Telefoon</span>
              <input className="field" value={telefoon} onChange={(event) => setTelefoon(event.target.value)} autoComplete="tel" inputMode="tel" maxLength={20} />
            </label>
          </div>
          <label className="mt-4 block">
            <span className="mb-1 block font-semibold">E-mail</span>
            <input className="field" type="email" value={email} onChange={(event) => setEmail(event.target.value)} autoComplete="email" maxLength={80} />
          </label>
          <fieldset className="mt-4">
            <legend className="mb-2 font-semibold">Voorkeur</legend>
            <div className="grid gap-2 sm:grid-cols-2">
              {contactVoorkeur.map((item) => (
                <label key={item.id} className="choice">
                  <input
                    type="radio"
                    name="voorkeur"
                    className="sr-only"
                    checked={voorkeur === item.id}
                    onChange={() => setVoorkeur(item.id)}
                  />
                  <span className="tick" aria-hidden="true" />
                  <span>{item.label}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <label className="choice mt-4 items-start">
            <input type="checkbox" className="sr-only" checked={privacy} onChange={(event) => setPrivacy(event.target.checked)} />
            <span className="tick mt-0.5" aria-hidden="true" />
            <span>
              Ik begrijp dat dit een concept is. Mijn mailprogramma opent het bericht, en er wordt niets verstuurd tot ik dat zelf doe.
            </span>
          </label>
          <p className="mt-2 text-base">
            <Link href="/privacy" className="font-semibold text-schors underline decoration-koord decoration-2 underline-offset-4">
              Privacy
            </Link>
          </p>
        </fieldset>
      ) : null}

      <div className="mt-6 border-[1.5px] border-koord bg-zand p-4">
        <p className="font-semibold text-haag">Dit is een concept; uw mailprogramma opent met het bericht.</p>
        <p className="mt-2 text-base">
          Er wordt vanaf deze site niets verstuurd. Liever meteen bellen?{" "}
          <PhoneLink className="font-semibold text-schors underline decoration-koord decoration-2 underline-offset-4">
            {content.contact.phoneDisplay}
          </PhoneLink>
          .
        </p>
        {mailHref ? (
          <p className="mt-3">
            <a href={mailHref} className="btn btn-haag">
              Open het bericht opnieuw
            </a>
          </p>
        ) : null}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {step > 0 ? (
          <button type="button" className="btn btn-line" onClick={() => { setError(""); setStep((value) => value - 1); }}>
            Terug
          </button>
        ) : null}
        {step < 2 ? (
          <button type="button" className="btn btn-haag" onClick={next}>
            Volgende
          </button>
        ) : (
          <button type="submit" className="btn btn-koord">
            Open het bericht in mijn mailprogramma
          </button>
        )}
      </div>
    </form>
  );
}

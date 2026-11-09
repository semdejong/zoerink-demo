export const offerteDiensten = [
  { id: "tuinaanleg", label: "Tuinaanleg" },
  { id: "onderhoud", label: "Onderhoud" },
  { id: "renovatie", label: "Renovatie" },
  { id: "bestrating", label: "Bestrating" },
  { id: "schutting", label: "Schutting of hekwerk" },
  { id: "leveren", label: "Planten of materialen leveren" },
  { id: "afvoeren", label: "Afvoeren" },
] as const;

export const offerteRitmes = [
  { id: "wekelijks", label: "Wekelijks" },
  { id: "maandelijks", label: "Maandelijks" },
  { id: "enkele-keren", label: "Enkele keren per jaar" },
  { id: "weet-ik-nog-niet", label: "Weet ik nog niet" },
] as const;

export const tuinDelen = [
  { id: "voortuin", label: "Voortuin" },
  { id: "achtertuin", label: "Achtertuin" },
  { id: "beide", label: "Beide" },
] as const;

export const contactVoorkeur = [
  { id: "terugbellen", label: "Terugbellen" },
  { id: "mailen", label: "Mailen" },
] as const;

export type OfferteDraft = {
  diensten: string[];
  ritme: string;
  deel: string;
  plaats: string;
  omschrijving: string;
  wanneer: string;
  naam: string;
  telefoon: string;
  email: string;
  voorkeur: string;
};

const dienstIds = new Set<string>(offerteDiensten.map((item) => item.id));
const ritmeIds = new Set<string>(offerteRitmes.map((item) => item.id));

export function labelFor(list: readonly { id: string; label: string }[], id: string): string {
  return list.find((item) => item.id === id)?.label ?? id;
}

export function preselect(dienst: string | null, ritme: string | null): { diensten: string[]; ritme: string } {
  const diensten = new Set<string>();
  if (dienst && dienstIds.has(dienst)) diensten.add(dienst);
  let chosen = "";
  if (ritme && ritmeIds.has(ritme)) {
    chosen = ritme;
    diensten.add("onderhoud");
  }
  return { diensten: [...diensten], ritme: chosen };
}

function oneLine(value: string): string {
  return value.replace(/[\r\n]+/g, " ").replace(/\s+/g, " ").trim();
}

export function mailtoFor(draft: OfferteDraft): string {
  const gekozen = draft.diensten.map((id) => labelFor(offerteDiensten, id));
  const lines = [
    "Offerteaanvraag",
    "",
    "Dit bericht is opgesteld op de conceptsite. Het is nog niet verstuurd.",
    "",
    "Wat mag er gebeuren?",
    ...gekozen.map((item) => `- ${item}`),
    draft.diensten.includes("onderhoud") ? `Ritme onderhoud: ${labelFor(offerteRitmes, draft.ritme)}` : "",
    "",
    "Over de tuin",
    `Deel: ${labelFor(tuinDelen, draft.deel)}`,
    `Plaats: ${oneLine(draft.plaats)}`,
    `Omschrijving: ${oneLine(draft.omschrijving)}`,
    draft.wanneer.trim() ? `Wanneer ongeveer: ${oneLine(draft.wanneer)}` : "",
    "",
    "Gegevens",
    `Naam: ${oneLine(draft.naam)}`,
    `Telefoon: ${oneLine(draft.telefoon)}`,
    `E-mail: ${oneLine(draft.email)}`,
    `Voorkeur: ${labelFor(contactVoorkeur, draft.voorkeur)}`,
  ].filter((line) => line !== "");

  const href = `mailto:rene_zoerink@hotmail.com?subject=${encodeURIComponent("Offerteaanvraag")}&body=${encodeURIComponent(lines.join("\n"))}`;
  return href;
}

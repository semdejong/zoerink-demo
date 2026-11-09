export type Photo = {
  src: string;
  width: number;
  height: number;
  alt: string;
  /** Bestandsnummer, zodat een reeks in bestandsvolgorde blijft. */
  n: number;
};

export type JobGroup = "Aanleg" | "Onderhoud";

export type Job = {
  id: string;
  title: string;
  stamp: string;
  /** Korte, gecontroleerde toelichting. Geen plaats, jaar of maat. */
  blurb: string;
  /** Werkvolgorde: bijschriften als stap 1, stap 2, … */
  sequence: boolean;
  group: JobGroup;
  photos: Photo[];
};

function series(
  id: string,
  title: string,
  dir: string,
  base: string,
  nums: number[],
  size: [number, number] | ((n: number) => [number, number]),
  sequence: boolean,
  group: JobGroup,
): Job {
  const photos: Photo[] = nums.map((n, i) => {
    const [width, height] = typeof size === "function" ? size(n) : size;
    const step = sequence ? `stap ${i + 1}` : `foto ${i + 1}`;
    return {
      src: `/img/${dir}/${base}-${n}.jpg`,
      width,
      height,
      alt: `${title}, ${step}`,
      n,
    };
  });
  const countLabel = photos.length === 1 ? "1 FOTO" : `${photos.length} FOTO'S`;
  return {
    id,
    title,
    stamp: `${title.toUpperCase()} · ${countLabel}`,
    blurb: "",
    sequence,
    group,
    photos,
  };
}

const blurbs: Record<string, string> = {
  "aanleg-tuin-particulier":
    "Een particuliere tuin met bloemen, planten en bestrating. Vijf foto's van dat werk.",
  "aanleg-tuin": "Aanleg van een tuin, in zeven foto's.",
  "aanleg-voortuin": "Een voortuin: bestrating en nieuwe beplanting.",
  "aanleg-moestuin-met-molensteen":
    "Een moestuin, met een molensteen als vast punt in de aanleg.",
  "betonnen-bielzen-bakken":
    "Bakken van betonnen bielzen. Vijf foto's, van links naar rechts de opbouw.",
  "particuliere-tuin-slopen":
    "Eerst de bestaande tuin eruit. Vier foto's, stap voor stap, voordat de nieuwe aanleg begint.",
  "onderhoud-particuliere-tuin":
    "Een particuliere tuin die bijgehouden wordt: gazon, hagen, heesters en borders.",
  "gazon-verticuteren":
    "Verticuteren van het gazon hoort bij het onderhoud. Drie foto's van die beurt.",
  "winterbeurt-tuin":
    "Een winterbeurt van een tuin, in drie foto's.",
  "conniferen-verwijderen-en-stobben-frezen":
    "Conniferen verwijderen en de stobben frezen. Tien foto's, in de volgorde van het werk.",
  "onderhoud-landgoed-t-haveke":
    "Onderhoud op Landgoed 't Haveke. Dertien foto's, ook op een groter terrein.",
};

const landschap: [number, number] = [1024, 768];
const klein: [number, number] = [640, 480];

const jobSeries: Job[] = [
  series(
    "aanleg-tuin-particulier",
    "Aanleg particuliere tuin",
    "aanleg",
    "aanleg-tuin-particulier",
    [1, 2, 3, 4, 5],
    landschap,
    false,
    "Aanleg",
  ),
  series(
    "aanleg-tuin",
    "Aanleg tuin",
    "aanleg",
    "aanleg-tuin",
    [1, 2, 3, 4, 5, 6, 7],
    klein,
    false,
    "Aanleg",
  ),
  series(
    "aanleg-voortuin",
    "Aanleg voortuin",
    "aanleg",
    "aanleg-voortuin",
    [1, 2, 4, 5, 6],
    landschap,
    false,
    "Aanleg",
  ),
  series(
    "aanleg-moestuin-met-molensteen",
    "Moestuin met molensteen",
    "aanleg",
    "aanleg-moestuin-met-molensteen",
    [1, 2, 3],
    landschap,
    false,
    "Aanleg",
  ),
  series(
    "betonnen-bielzen-bakken",
    "Betonnen bielzen-bakken",
    "aanleg",
    "aanleg-beton-bielzen-bakken",
    [1, 2, 3, 4, 5],
    landschap,
    true,
    "Aanleg",
  ),
  series(
    "particuliere-tuin-slopen",
    "Particuliere tuin slopen",
    "aanleg",
    "aanleg-tuin-particulier-slopen",
    [1, 2, 3, 4],
    landschap,
    true,
    "Aanleg",
  ),
  series(
    "onderhoud-particuliere-tuin",
    "Onderhoud particuliere tuin",
    "onderhoud",
    "onderhoud-particuliere-tuin",
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    (n) => {
      if (n <= 3) return [640, 480];
      if (n === 5) return [511, 768];
      if (n === 4 || n === 6 || n === 7) return [1024, 682];
      return [1024, 768];
    },
    false,
    "Onderhoud",
  ),
  series(
    "gazon-verticuteren",
    "Gazon verticuteren",
    "onderhoud",
    "gazon-verticuteren",
    [1, 2, 3],
    landschap,
    false,
    "Onderhoud",
  ),
  series(
    "winterbeurt-tuin",
    "Winterbeurt tuin",
    "onderhoud",
    "winterbeurt-tuin",
    [1, 2, 3],
    landschap,
    false,
    "Onderhoud",
  ),
  series(
    "conniferen-verwijderen-en-stobben-frezen",
    "Conniferen verwijderen en stobben frezen",
    "projecten",
    "conniferen-verwijderen-en-stobben-frezen",
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    (n) => (n === 1 || n >= 8 ? [511, 768] : [1024, 682]),
    true,
    "Onderhoud",
  ),
  series(
    "onderhoud-landgoed-t-haveke",
    "Onderhoud Landgoed 't Haveke",
    "projecten",
    "onderhoud-landgoed-t-haveke",
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    klein,
    false,
    "Onderhoud",
  ),
];

export const jobs: Job[] = jobSeries.map((job) => {
  const blurb = blurbs[job.id];
  if (!blurb) throw new Error(`Toelichting ontbreekt: ${job.id}`);
  return { ...job, blurb };
});

export const jobCount = jobs.reduce((sum, job) => sum + job.photos.length, 0);

export function jobById(id: string): Job {
  const job = jobs.find((item) => item.id === id);
  if (!job) throw new Error(`Onbekende klus: ${id}`);
  return job;
}

export function photoByNumber(jobId: string, n: number): Photo {
  const photo = jobById(jobId).photos.find((item) => item.n === n);
  if (!photo) throw new Error(`Foto ontbreekt: ${jobId} ${n}`);
  return photo;
}

export function pickPhotos(jobId: string, nums: number[], stamp?: string): Job {
  const job = jobById(jobId);
  const photos = nums.map((n) => photoByNumber(jobId, n));
  return {
    ...job,
    photos,
    sequence: false,
    stamp: stamp ?? `${job.title.toUpperCase()} · ${photos.length} FOTO'S`,
  };
}

export const portraits = {
  rene: {
    src: "/img/rene/rene-zoerink.jpg",
    width: 400,
    height: 249,
    alt: "René Zoerink bij zijn bus",
    n: 1,
  },
  aanleg: {
    src: "/img/rene/aanleg-particuliere-tuin.jpg",
    width: 450,
    height: 300,
    alt: "Aanleg particuliere tuin",
    n: 1,
  },
  onderhoud: {
    src: "/img/rene/onderhoud-tuin-particulier.jpg",
    width: 450,
    height: 300,
    alt: "Onderhoud particuliere tuin",
    n: 1,
  },
} satisfies Record<string, Photo>;

export const heroPhoto = photoByNumber("aanleg-tuin-particulier", 3);

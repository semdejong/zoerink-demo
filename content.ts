/**
 * Bedrijfsgegevens van Hoveniersbedrijf René Zoerink.
 * Alleen feiten die het bedrijf zelf noemt. Geen openingstijden, prijzen,
 * keurmerken, jaartallen of recensies: die zijn niet bekend.
 */
export const content = {
  slug: "zoerink-demo",

  company: {
    name: "René Zoerink",
    legalName: "Hoveniersbedrijf René Zoerink",
    wordmark: "René Zoerink",
    wordmarkSub: "Hoveniersbedrijf",
    description:
      "Een jong en dynamisch hoveniersbedrijf in Warnsveld. Tuinaanleg, onderhoud, renovatie, bestrating, schuttingen en levering, in één hand.",
    logo: "",
    city: "Warnsveld",
    region: "Warnsveld, Zutphen, Lochem, Deventer en omgeving",
    regionOwnWords: "de regio Warnsveld, Zutphen en Lochem",
  },

  colors: {
    haag: "#12361F",
    bos: "#1E5A2C",
    lime: "#B8E33C",
    koord: "#E8890C",
    koordLicht: "#F79F1A",
    schors: "#7D4400",
    zand: "#F5F1E6",
    wit: "#FFFFFF",
    ink: "#1B1F1A",
    primary: "#12361F",
    primaryForeground: "#FFFFFF",
    accent: "#E8890C",
    background: "#F5F1E6",
    foreground: "#1B1F1A",
    muted: "#FFFFFF",
  },

  seo: {
    title: "Hoveniersbedrijf René Zoerink | Warnsveld, Zutphen en Lochem",
    description:
      "Tuinaanleg, onderhoud en renovatie door René Zoerink in Warnsveld, Zutphen, Lochem, Deventer en omgeving. Bel 06-24621906 voor een vrijblijvend gesprek.",
    lang: "nl",
  },

  contact: {
    owner: "René Zoerink",
    phoneDisplay: "06-24621906",
    phoneHref: "tel:+31624621906",
    email: "rene_zoerink@hotmail.com",
    emailHref: "mailto:rene_zoerink@hotmail.com",
    street: "Oude Borculoseweg 14",
    postalCode: "7231 PR",
    city: "Warnsveld",
    kvk: "08188051",
    kvkPlace: "Apeldoorn",
    mapsHref:
      "https://www.google.com/maps/search/?api=1&query=Oude+Borculoseweg+14,+7231+PR+Warnsveld",
  },

  nav: [
    { label: "Tuinaanleg", href: "/tuinaanleg" },
    { label: "Onderhoud & renovatie", href: "/onderhoud-renovatie" },
    { label: "Bestrating & schuttingen", href: "/bestrating-schuttingen" },
    { label: "Foto's", href: "/fotos" },
    { label: "Over René", href: "/over-rene" },
    { label: "Contact", href: "/contact" },
  ],

  footerNav: [
    { label: "Tuinaanleg", href: "/tuinaanleg" },
    { label: "Onderhoud & renovatie", href: "/onderhoud-renovatie" },
    { label: "Bestrating & schuttingen", href: "/bestrating-schuttingen" },
    { label: "Planten & materialen", href: "/planten-materialen" },
    { label: "Foto's", href: "/fotos" },
    { label: "Over René", href: "/over-rene" },
    { label: "Contact", href: "/contact" },
    { label: "Offerte aanvragen", href: "/offerte" },
    { label: "Privacy", href: "/privacy" },
  ],

  visitLine:
    "Ik kom graag bij u langs voor een vrijblijvend gesprek, waarin u uw wensen kenbaar kunt maken.",

  route: [
    {
      title: "Bellen",
      text: "U belt 06-24621906, of u vult de offerteaanvraag in. Bellen is het meest directe.",
    },
    {
      title: "René komt langs",
      text: "Ik kom graag bij u langs voor een vrijblijvend gesprek, waarin u uw wensen kenbaar kunt maken.",
    },
    {
      title: "Plan en offerte",
      text: "Samen bepalen we wat er moet gebeuren: aanleg, onderhoud, renovatie, bestrating of een schutting.",
    },
    {
      title: "Aan de slag",
      text: "Daarna voer ik het werk uit. Aanleg, onderhoud, straatwerk, schuttingen en levering zitten in één hand.",
    },
  ],

  services: [
    {
      href: "/tuinaanleg",
      title: "Tuinaanleg",
      text: "Een nieuwe tuin met bloemen, planten, bestrating en schuttingen. Naar uw smaak, en zo dat de tuin werkt.",
    },
    {
      href: "/onderhoud-renovatie",
      title: "Onderhoud",
      text: "Wekelijks, maandelijks of enkele keren per jaar een tuinbeurt. Alles in overleg.",
    },
    {
      href: "/onderhoud-renovatie#renovatie",
      title: "Renovatie",
      text: "Worden bomen of heesters te groot, of bent u uitgekeken op uw tuin? Dan maken we hem weer nieuw.",
    },
    {
      href: "/bestrating-schuttingen",
      title: "Bestrating",
      text: "Tegels, gebakken keiklinkers, natuursteen, grind en split. Eerst een goede ondergrond, dan het materiaal van uw keuze.",
    },
    {
      href: "/bestrating-schuttingen#schuttingen",
      title: "Schuttingen en hekwerken",
      text: "Schuttingen en hekwerken plaatsen en leveren.",
    },
  ],

  bestratingStappen: [
    {
      title: "Uitgraven",
      text: "Eerst graven we de plek uit.",
      jobId: "betonnen-bielzen-bakken",
      photoN: 3,
    },
    {
      title: "Opvullen met zand",
      text: "Daarna vullen we op met zand.",
      jobId: "particuliere-tuin-slopen",
      photoN: 1,
    },
    {
      title: "Aantrillen",
      text: "Het zandbed wordt aangetrild, voor een goede ondergrond.",
      jobId: "particuliere-tuin-slopen",
      photoN: 2,
    },
    {
      title: "Verwerken",
      text: "Tot slot verwerken we het materiaal van uw keuze.",
      jobId: "aanleg-tuin-particulier",
      photoN: 3,
    },
  ],

  bestratingMaterialen: ["Tegels", "Gebakken keiklinkers", "Natuursteen", "Grind en split"],

  onderhoudTaken: [
    "Haag knippen",
    "Onkruid wieden",
    "Verticuteren van uw gazon",
    "Vaste planten scheuren",
    "Heesters uitsnoeien",
  ],

  onderhoudRitmes: [
    { id: "wekelijks", label: "Wekelijks" },
    { id: "maandelijks", label: "Maandelijks" },
    { id: "enkele-keren", label: "Enkele keren per jaar" },
  ],

  aanlegAandacht: [
    "(Kleine) kinderen",
    "Wel of geen vijver",
    "Speeltoestellen",
    "Een terras in de zon",
  ],

  beplanting: ["Grondsoort", "Vochthuishouding", "Zon- en schaduwzijde"],

  faq: [
    {
      q: "Komt u eerst langs?",
      a: "Ja. Ik kom graag bij u langs voor een vrijblijvend gesprek, waarin u uw wensen kenbaar kunt maken.",
    },
    {
      q: "Hoe vaak kan onderhoud?",
      a: "Wekelijks, maandelijks of maar enkele keren per jaar een tuinbeurt, alles in overleg.",
    },
    {
      q: "Doet u ook bestrating en schuttingen?",
      a: "Ja. Klein straatwerk met tegels, gebakken keiklinkers, natuursteen, grind en split, en het plaatsen en leveren van schuttingen en hekwerken.",
    },
    {
      q: "Levert u planten en materialen?",
      a: "Ja. Planten, struiken en bomen, en materialen zoals stenen, zand, grind en grond.",
    },
    {
      q: "Voert u grond en afval af?",
      a: "Ja. Ik voer afval en grond af.",
    },
    {
      q: "In welke regio werkt u?",
      a: "In de regio Warnsveld, Zutphen, Lochem, Deventer en omgeving.",
    },
  ],
};

export type Content = typeof content;

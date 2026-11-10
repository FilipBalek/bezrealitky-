export interface PropertyListing {
  id: string;
  title: string;
  city: 'Praha' | 'Brno' | 'Ostrava' | 'Plzeň';
  district: string;
  addressSummary: string;
  priceCzk: number;
  utilitiesCzk: number;
  disposition: '1+kk' | '2+kk' | '2+1' | '3+kk';
  areaM2: number;
  floor: string;
  depositCzk: number;
  availableFrom: string;
  directOwner: boolean;
  ownerName: string;
  ownerResponseTime: string;
  image: string;
  tagline: string;
  description: string;
  features: string[];
}

export const SAMPLE_PROPERTIES: PropertyListing[] = [
  {
    id: 'prop-praha-vinohrady',
    title: 'Světlý zrekonstruovaný byt s vysokými stropy',
    city: 'Praha',
    district: 'Praha 2 – Vinohrady',
    addressSummary: 'Mánesova, poblíž Náměstí Míru',
    priceCzk: 23500,
    utilitiesCzk: 4200,
    disposition: '2+kk',
    areaM2: 58,
    floor: '3. patro s výtahem',
    depositCzk: 30000,
    availableFrom: 'Ihned k nastěhování',
    directOwner: true,
    ownerName: 'Tereza Nováková',
    ownerResponseTime: 'Obvykle odpovídá do 1 hodiny',
    image: '/src/assets/images/listing_praha_vinohrady_1794314967301.jpg',
    tagline: 'Nově zrenovovaný byt v secesním domě s parketami a moderní kuchyní',
    description: 'Nabízím k dlouhodobému pronájmu slunný byt 2+kk po kompletní a citlivé rekonstrukci. Dubové parkety, kuchyňská linka se spotřebiči Bosch, klidný výhled do zeleného vnitrobloku. Skvělá dostupnost na metro A i tramvaj. Hledám spolehlivé nájemníky, nekuřáky.',
    features: ['Parkety z masivu', 'Výtah', 'Sklepní kóje (4 m²)', 'Myčka & trouba', 'Vysokorychlostní optický internet', 'Balkon do vnitrobloku'],
  },
  {
    id: 'prop-brno-veveri',
    title: 'Klidné skandinávské bydlení u botanické zahrady',
    city: 'Brno',
    district: 'Brno – Veveří',
    addressSummary: 'Kounicova, nedaleko Konečného náměstí',
    priceCzk: 18200,
    utilitiesCzk: 3800,
    disposition: '2+1',
    areaM2: 64,
    floor: '2. patro',
    depositCzk: 22000,
    availableFrom: 'Od 1. příštího měsíce',
    directOwner: true,
    ownerName: 'Ing. Martin Dvořák',
    ownerResponseTime: 'Obvykle odpovídá do 2 hodin',
    image: '/src/assets/images/listing_brno_veveri_1794314967630.jpg',
    tagline: 'Příjemný prosvětlený byt s vestavěnými knihovnami a masivním dřevem',
    description: 'Pronajímám svůj byt 2+1 ve vyhledávané čtvrti Veveří. Kompletně vybavená kuchyň, prostorný obývací pokoj s výhledem na město a samostatná ložnice orientovaná do tichého dvora. Ideální pro mladý pár nebo pracující jednotlivce.',
    features: ['Plně zařízeno', 'Orientace do tichého dvora', 'Optika 1 Gb/s', 'Vana i sprcha', 'Pračka se sušičkou', 'Zastávka tramvaje 2 min'],
  },
  {
    id: 'prop-ostrava-poruba',
    title: 'Velkorysý moderní loft s cihlovou stěnou',
    city: 'Ostrava',
    district: 'Ostrava – Poruba',
    addressSummary: 'Hlavní třída, u zámeckého parku',
    priceCzk: 14500,
    utilitiesCzk: 3400,
    disposition: '3+kk',
    areaM2: 78,
    floor: '4. patro s novým výtahem',
    depositCzk: 20000,
    availableFrom: 'K dispozici od 15. tohoto měsíce',
    directOwner: true,
    ownerName: 'David Kovář',
    ownerResponseTime: 'Obvykle odpovídá do 30 minut',
    image: '/src/assets/images/listing_ostrava_poruba_1794314967717.jpg',
    tagline: 'Vzdušný prostor s industriálními prvky a velkými francouzskými okny',
    description: 'Prostorný a vzdušný byt 3+kk po architektonické úpravě. Původní očištěná cihlová stěna, kvalitní dřevěný stůl, moderní černá kuchyňská linka a dvě samostatné ložnice. Parkování bez modrých zón přímo za domem.',
    features: ['Nový výtah', 'Klimatizace', 'Bezproblémové parkování', 'Lodžie s výhledem', 'Šatna / komora', 'Domácí mazlíčci po domluvě'],
  },
  {
    id: 'prop-plzen-center',
    title: 'Útulné a chytré studio v srdci města',
    city: 'Plzeň',
    district: 'Plzeň – Jižní Předměstí',
    addressSummary: 'Klatovská třída, u Smetanových sadů',
    priceCzk: 11900,
    utilitiesCzk: 2600,
    disposition: '1+kk',
    areaM2: 36,
    floor: '1. patro',
    depositCzk: 15000,
    availableFrom: 'Ihned volné',
    directOwner: true,
    ownerName: 'Lucie Černá',
    ownerResponseTime: 'Obvykle odpovídá do 1 hodiny',
    image: '/src/assets/images/listing_plzen_center_1794314968368.jpg',
    tagline: 'Prakticky řešené studio z přírodních materiálů s nízkými energiemi',
    description: 'Chytré a energeticky úsporné studio 1+kk po rekonstrukci. Kuchyňská linka z březové překližky, indukční varná deska, tichá lednice a vestavěná postel s úložnými prostory. Vše v pěší vzdálenosti od náměstí Republiky.',
    features: ['Nízké energetické náklady (třída B)', 'Přírodní materiály', 'Sklep', 'Optický kabel', 'Plně vybaveno', 'Skvělá poloha v centru'],
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Musím platit za kontaktování majitele?',
    answer: 'Ne. Kontaktování majitelů a odesílání zpráv je na platformě DOMOV vždy zdarma. Nikdy od vás nebudeme žádat placené kredity, SMS poplatky ani prémiové členství pro zobrazení telefonního čísla či odeslání zprávy.',
  },
  {
    question: 'Platí se provize z nájemného?',
    answer: 'Ne. Neúčtujeme si žádnou provizi z nájemného. Vše probíhá přímo mezi vámi a majitelem nemovitosti, takže ušetříte obvyklou měsíční provizi realitní kanceláři.',
  },
  {
    question: 'Mohu přidat inzerát zdarma?',
    answer: 'Ano. Každý soukromý majitel může přidat svůj první inzerát zcela zdarma. Získáte plnou funkčnost včetně příjmu zpráv od ověřených zájemců bez časového omezení.',
  },
  {
    question: 'Jak platforma vydělává?',
    answer: 'Příjmy pocházejí z dalších inzerátů (od druhého inzerátu za férových 199 Kč / 30 dní), dobrovolného zvýraznění nabídek (99 Kč), předplatného pro profesionální pronajímatele a volitelných doplňkových služeb (např. právní vzory nájemních smluv).',
  },
  {
    question: 'Jsou na platformě realitní kanceláře?',
    answer: 'Platforma je zaměřena především na přímé spojení majitelů a zájemců o pronájem. Podmínky pro profesionální pronajímatele jsou transparentní a striktně oddělené od soukromých nabídek, aby zájemce vždy přesně věděl, s kým jedná.',
  },
];

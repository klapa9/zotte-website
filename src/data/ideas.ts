export interface Idea {
  title: string;
  desc: string;
  longText?: string[];
  image?: string;
  audio?: string;
  bullets?: string[];
}

export const ideas: Idea[] = [
  {
    title: "Tijd is een illusie",
    desc: "Verleden, heden en toekomst bestaan allemaal tegelijk",
    longText: [
      "De tijd zoals wij die ervaren is een constructie. Alles gebeurt tegelijkertijd, en onze ervaring van tijd is lineair alleen vanuit ons perspectief.",
      "Ons bewustzijn beweegt door momenten heen, maar elk moment bestaat op zichzelf. Dit betekent dat verleden, heden en toekomst in essentie één geheel vormen."
    ],
    bullets: [
      "Lineaire tijd is een perceptie",
      "Alle momenten bestaan tegelijk",
      "Bewustzijn beweegt door tijd heen"
    ]
  },
  {
    title: "Je bent het universum",
    desc: "Je bewustzijn is een fragment van het grotere geheel",
    longText: [
      "Ons bewustzijn is niet los van het universum; het is een expressie ervan.",
      "Door jezelf te erkennen als een deel van het geheel, ervaar je diepe verbondenheid en verantwoordelijkheid."
    ],
    bullets: [
      "Jouw acties beïnvloeden het geheel",
      "Bewustzijn is universeel",
      "Alles is met alles verbonden"
    ]
  },
  {
    title: "Realiteit is een projectie",
    desc: "De wereld om je heen wordt gecreëerd door je perceptie",
    longText: [
      "Wat wij ervaren als realiteit is een weerspiegeling van onze innerlijke overtuigingen, gedachten en intenties.",
      "Door je perceptie te veranderen, kan je werkelijkheid letterlijk veranderen."
    ],
    bullets: [
      "Je perceptie schept je realiteit",
      "Gedachten en overtuigingen zijn krachtig",
      "Bewustzijn manifesteert de wereld"
    ]
  },
  {
    title: "Alles is verbonden",
    desc: "Elke deeltje beïnvloedt elk ander deeltje in het universum",
    longText: [
      "Er is een energetische en informatieve connectie tussen alles wat bestaat.",
      "Onze acties hebben impact op anderen, zelfs op plekken en tijden die ver weg lijken."
    ],
    bullets: [
      "Elk deeltje beïnvloedt het geheel",
      "Acties hebben ripple-effecten",
      "Verbinding is fundamenteel"
    ]
  },
  {
    title: "Oneindige mogelijkheden",
    desc: "Er zijn oneindig veel parallelle werelden",
    longText: [
      "Het universum biedt een oneindige reeks van mogelijke uitkomsten.",
      "Wat jij kiest, creëert een specifieke lijn in deze enorme matrix van mogelijkheden."
    ],
    bullets: [
      "Elke keuze opent nieuwe mogelijkheden",
      "Parallelle werelden bestaan naast elkaar",
      "Je bewustzijn kan meerdere paden ervaren"
    ]
  },
  {
    title: "Bewustzijn is fundamenteel",
    desc: "Bewustzijn komt niet uit de hersenen, maar andersom",
    longText: [
      "Het universum manifesteert zich via bewustzijn; materie volgt de waarneming.",
      "Onze hersenen zijn een instrument van bewustzijn, niet de bron ervan."
    ],
    bullets: [
      "Bewustzijn schept materie",
      "Hersenen registreren en verwerken ervaring",
      "Universeel bewustzijn is de kern"
    ]
  }
];

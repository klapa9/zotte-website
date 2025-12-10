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
      "De tijd zoals wij die ervaren is een constructie.",
      "Alle momenten bestaan simultaan — wij bewegen er alleen doorheen."
    ]
  },
  {
    title: "Je bent het universum",
    desc: "Je bewustzijn is een fragment van het grotere geheel"
  },
  {
    title: "Realiteit is een projectie",
    desc: "De wereld om je heen wordt gecreëerd door je perceptie"
  },
  {
    title: "Alles is verbonden",
    desc: "Elke deeltje beïnvloedt elk ander deeltje in het universum"
  },
  {
    title: "Oneindige mogelijkheden",
    desc: "Er zijn oneindig veel parallelle werelden"
  },
  {
    title: "Bewustzijn is fundamenteel",
    desc: "Bewustzijn komt niet uit de hersenen, maar andersom"
  }
];

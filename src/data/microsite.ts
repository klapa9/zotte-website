export type MicrositeTopic = {
  slug: string;
  title: string;
  subtitle: string;
  accent: string;
};

export const micrositeTopics: MicrositeTopic[] = [
  { slug: 'verlaat-je-lichaam', title: 'Verlaat je lichaam', subtitle: 'Ontdek bewustzijn voorbij je fysieke grenzen', accent: 'cyan' },
  { slug: 'kundalini', title: 'Kundalini', subtitle: 'De energie die in je wakker wordt', accent: 'rose' },
  { slug: 'gedeelde-werkelijkheid', title: 'Gedeelde werkelijkheid', subtitle: 'Wat onze aandacht samen vormgeeft', accent: 'violet' },
  { slug: 'the-law-of-one', title: 'The Law of One', subtitle: 'Alles is verbonden in één bewustzijn', accent: 'amber' },
  { slug: 'spirituele-evolutie', title: 'Spirituele evolutie', subtitle: 'Groeien door te ervaren', accent: 'emerald' },
  { slug: 'katalysatoren', title: 'Katalysatoren', subtitle: 'Ontdek wat ervaringen je tonen', accent: 'pink' },
];

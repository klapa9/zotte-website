# Specificatie — microsite op `nogzottere.zottewebsite.be`

## Doel en scope

Maak een parallel bereikbare microsite op `https://nogzottere.zottewebsite.be` met zes spirituele inhoudspagina’s. De bestaande hoofdnavigatie linkt niet naar de microsite. De microsite heeft een eigen ingang en navigatie met uitsluitend links naar de zes nieuwe pagina’s. Herschrijf de teksten naar de directe, warme toon van de bestaande site. Behoud alle aangeleverde spirituele beweringen en voeg geen feitelijke nuancering of gezondheidswaarschuwingen toe.

In scope vallen de microsite-ingang, zes artikelen, interne navigatie, visuele vormgeving, responsive gedrag, unieke metadata en hostgebaseerde routing binnen de bestaande frontend.

Buiten scope vallen nieuwe Nostr-functionaliteit, login, reacties, backend, CMS, nieuwe dependencies, frameworkmigratie, inhoudelijke factcheck en aanpassingen aan bestaande pagina-inhoud. De microsite is publiek bereikbaar; het subdomein biedt geen privacy- of toegangsbeveiliging.

## Architectuur en afweging

**Aanbevolen:** behoud de bestaande React 18-, TypeScript-, Vite-, Tailwind CSS 3- en React Router DOM 6-stack. Caddy routeert `nogzottere.zottewebsite.be` naar dezelfde Docker-frontendservice. De frontend selecteert de microsite-routering op basis van de hostnaam; op de bestaande `www`-host blijven de bestaande routes werken. Hierdoor is geen aparte build of service nodig.

Een aparte frontendservice zou meer isolatie geven, maar brengt dubbele build- en deploymentconfiguratie mee. Een pad onder `www` past minder goed bij de gekozen subdomein-URL. Nieuwe router- of UI-libraries en zelfbouw bieden voor zes inhoudspagina’s geen aangetoond voordeel.

Caddy-configuratie en Docker-routing moeten aansluiten op de bestaande deploymentinrichting. DNS voor `nogzottere.zottewebsite.be` moet naar de VPS wijzen en Caddy moet HTTPS voor deze host kunnen afhandelen. Er wordt geen proxy vervangen.

## Informatiearchitectuur

Op het subdomein is `/` de overzichtsingang. De voorgestelde artikelvolgorde loopt van individuele ervaring naar kosmologie en toepassing:

1. Verlaat je lichaam — `/verlaat-je-lichaam`
2. Kundalini — `/kundalini`
3. Gedeelde werkelijkheid — `/gedeelde-werkelijkheid`
4. The Law of One — `/the-law-of-one`
5. Spirituele evolutie — `/spirituele-evolutie`
6. Katalysatoren — `/katalysatoren`

De ingang toont een korte introductie en zes links. Iedere artikelpagina toont de zes onderwerpen, markeert de actieve pagina en biedt vorige/volgende navigatie. De interne navigatie bevat geen links naar de bestaande site.

## Datamodel

```ts
type ArticlePage = {
  slug: string;
  title: string;
  subtitle: string;
  accent: string;
  sections: Array<{
    heading: string;
    paragraphs?: string[];
    bullets?: string[];
  }>;
};
```

Een vaste lijst van zes artikelen voedt de routes en navigatie. Elk artikel heeft precies één H1, een introductie, inhoudelijke secties en praktische tips waar die zijn aangeleverd.

## Redactionele regels

- Schrijf direct en warm Nederlands, spreek de lezer aan met “je” en gebruik duidelijke tussenkoppen.
- Behoud de spirituele beweringen, thematische onderdelen en praktische tips uit de aangeleverde teksten.
- Voeg geen feitelijke nuancering, voorbehoud of gezondheidswaarschuwing toe.
- Herschik of verkort alleen wanneer de betekenisvolle inhoud behouden blijft.
- Houd de zes inhoudelijke kernen herkenbaar: buitenlichamelijke ervaring, kundalini, gedeelde werkelijkheid, Law of One, spirituele evolutie en katalysatoren.

## Visuele specificatie

Sluit aan op de bestaande uitgesproken stijl: donkere kosmische basis, zachte kleurrijke gloed en abstracte achtergrondbeweging, grote zware koppen met kleurverloop, witte tekst en afgeronde halftransparante panelen. Geef elk artikel een eigen accentkleur binnen de bestaande stijl. Beperk de tekstbreedte voor lange artikelen en maak de hiërarchie tussen titel, introductie, secties en praktische tips duidelijk. De navigatie schaalt naar mobiel zonder horizontale overflow. Decoratieve animatie respecteert `prefers-reduced-motion`.

## Vindbaarheid en kwaliteitseisen

De pagina’s zijn publiek en indexeerbaar. Er komt geen robotsblokkade of authenticatie. Het ontbreken van een link vanaf de bestaande hoofdnavigatie maakt de URL niet geheim.

Acceptatiecriteria:

- De bestaande hoofdnavigatie linkt niet naar de microsite; controleer bestaande routes.
- `nogzottere.zottewebsite.be` toont de microsite-ingang; controleer met de gekozen host achter Docker/Caddy.
- Alle zes artikelroutes werken met directe URL en refresh achter Caddy.
- De microsite-navigatie bevat precies zes unieke artikelbestemmingen en geen links naar de hoofdsiteroutes.
- Elke pagina heeft één H1 en unieke metadata; controleer DOM en document head.
- Alle aangeleverde thema’s en tips blijven behouden, zonder toegevoegde feitelijke nuance of waarschuwingen; controleer met een redactionele checklist per pagina.
- Geen nieuwe dependency; controleer `package.json` en `package-lock.json`.
- Mobiel en desktop blijven leesbaar zonder clipping of horizontale overflow.
- Toetsenbordfocus, semantische landmarks, duidelijke linknamen en reduced-motion-gedrag zijn gecontroleerd.
- Typecheck, lint, bestaande tests en build zijn uitgevoerd als dependencies beschikbaar zijn; rapporteer resultaten afzonderlijk.

## Risico’s en beheersing

- **DNS en HTTPS:** de DNS-record moet naar de VPS wijzen en Caddy moet een certificaat voor de gekozen host kunnen verkrijgen/aanbieden. Valideer dit vóór live routecontrole.
- **SPA-fallback:** test directe URLs en refresh achter Caddy; leid productiegedrag niet af uit alleen lokale redirectbestanden.
- **Hostselectie:** test zowel `nogzottere.zottewebsite.be` als de bestaande `www`-host om regressies te voorkomen.
- **Styling:** scope nieuwe regels binnen de microsite en controleer bestaande routes op visuele regressies.
- **Toegankelijkheid en beweging:** controleer contrast, toetsenbordfocus en reduced-motion.

## Uitvoeringsgrenzen

Er zijn geen nieuwe packages, sudo, systeempakketten of aanmeldingen voorzien. De repositorywijziging kan de hostroutering en eventuele bijgehouden Caddy/Docker-configuratie voorbereiden. Live DNS- of VPS-wijzigingen worden alleen uitgevoerd als die infrastructuur onder de projecttoegang valt; anders worden de concrete DNS- en Caddy-stappen bij de oplevering vermeld. Geen externe secrets of privébestanden zijn nodig.

## Open beslissingen

Geen blokkerende open punten gemeld.

# Onderzoeksbevindingen

## Huidige website

**Feiten uit lokaal gelezen projectbestanden:** de site gebruikt React 18, TypeScript, Vite, Tailwind CSS 3 en React Router DOM 6.26.2. De routes zijn ingericht met `BrowserRouter`, `Routes` en `Route`. De bestaande website heeft onderwerpgerichte pagina’s, een algemene navigatie en componenten voor onder meer achtergronden en praktische tips.

De huidige vormgeving is uitgesproken en kleurrijk: donkere, kosmische achtergronden; grote zware koppen met kleurverlopen; witte tekst; afgeronde, halftransparante panelen met blur; ruime secties; zachte gloed- en fractaleffecten; en kleuraccenten per onderwerp. De algemene navigatie linkt naar Home, Open Geest, Wees Zot, Leven, Liefde en Ziek Zot.

`public/_redirects` bevat een SPA-fallback en de buildstap kopieert `index.html` naar `404.html`. Die bestanden bevestigen niet welke hostingprovider productie gebruikt of hoe diens route-afhandeling precies is ingesteld.

## Hergebruik, uitbreiding en zelfbouw

| Optie | Geschiktheid en afweging |
|---|---|
| Bestaande React Router-, React- en Tailwind-stack uitbreiden | Past bij de huidige architectuur en ondersteunt een eigen routegroep met eigen layout. Geen nieuwe dependency nodig; laagste integratiekosten. Directe routes en refresh zijn afhankelijk van de productiehost. |
| Aparte applicatie of subsite | Biedt meer technische scheiding, maar vraagt aanvullende build- en hostingconfiguratie. Alleen nodig als een aparte site of hostname gewenst is. |
| Nieuwe router- of UI-library toevoegen | Geen aangetoond voordeel voor zes inhoudspagina’s; introduceert wel afhankelijkheden en onderhoudswerk. |
| Zelf een router of stylingmechanisme bouwen | Niet aanbevolen: de bestaande libraries dekken de behoeften al. Zelfbouw vergroot integratie- en onderhoudskosten. |

**Aanbeveling:** hergebruik de bestaande stack en maak een eigen routegroep/layout. De hoofdnavigatie linkt niet naar deze sectie; de microsite heeft een eigen navigatie met alleen de zes nieuwe pagina’s. Dit maakt de URL niet geheim en blokkeert zoekmachines of bezoekers niet.

**Bronfeiten:** de officiële React Router-documentatie beschrijft `BrowserRouter` als declaratieve client-side router op basis van de browser History API, en `Route` als een URL-patroon dat een element laat renderen binnen `Routes`. De officiële React-documentatie behandelt componenten als UI-bouwstenen. Tailwind documenteert responsive utilities. Tailwind Labs meldde in september 2026 dat Tailwind MIT-gelicentieerd blijft en onderhouden wordt. Vite en Cloudflare documenteren SPA-deploymentgedrag; bij Cloudflare Pages beïnvloedt een top-level `404.html` de standaard SPA-fallback. Geen van deze bronnen bewijst dat de integratie met de productiehosting van dit project al getest is.

**Aannames en voorstel:** een pad op het bestaande domein, bijvoorbeeld `/bewustzijn/`, is waarschijnlijk de eenvoudigste vorm van een parallel bereikbare sectie. Die interpretatie sluit aan op de wens dat de pagina’s niet via de gewone navigatie bereikbaar hoeven te zijn, maar laat de URL wel deelbaar. De routeprefix en zoekmachine-instelling zijn nog niet bevestigd.

## Bronnen

Geraadpleegd op 2026-10-09.

- [React Router: BrowserRouter](https://reactrouter.com/api/declarative-routers/BrowserRouter) — officiële documentatie over declaratieve browserrouting via de History API.
- [React Router: Route](https://reactrouter.com/api/components/Route) — officiële documentatie over routepatronen en gerenderde elementen binnen `Routes`.
- [React Router upstream repository](https://github.com/remix-run/react-router) — upstream projectinformatie en MIT-licentie.
- [React: Quick Start](https://react.dev/learn) — officiële documentatie over React-componenten en UI-compositie.
- [Tailwind CSS: Responsive Design](https://tailwindcss.com/docs/responsive-design) — officiële documentatie over responsive utilities en breakpoints.
- [Tailwind Labs: Tailwind is joining Shopify](https://tailwindcss.com/blog/tailwind-is-joining-shopify) — aankondiging van 2026-09-09 over licentie en onderhoudsvoornemen.
- [Vite: Deploying a Static Site](https://vite.dev/guide/static-deploy) — officiële gids over statische deployment en SPA-configuratie.
- [Cloudflare Pages: Serving Pages](https://developers.cloudflare.com/pages/configuration/serving-pages/) — officiële uitleg over SPA-fallback en het effect van een top-level `404.html`; alleen van toepassing als de site daar wordt gehost.

## Bronnen

- [React Router: BrowserRouter](https://reactrouter.com/api/declarative-routers/BrowserRouter) — geraadpleegd 2026-10-09. Officiële documentatie over declaratieve client-side routing via de History API.

- [React Router: Route](https://reactrouter.com/api/components/Route) — geraadpleegd 2026-10-09. Officiële documentatie over declaratieve URL-patronen en gerenderde elementen binnen Routes.

- [React Router upstream repository](https://github.com/remix-run/react-router) — geraadpleegd 2026-10-09. Upstream projectinformatie en MIT-licentie.

- [React: Quick Start](https://react.dev/learn) — geraadpleegd 2026-10-09. Officiële documentatie over componenten en UI-compositie.

- [Tailwind CSS: Responsive Design](https://tailwindcss.com/docs/responsive-design) — geraadpleegd 2026-10-09. Officiële documentatie over responsive utilityvarianten.

- [Tailwind Labs: Tailwind is joining Shopify](https://tailwindcss.com/blog/tailwind-is-joining-shopify) — geraadpleegd 2026-10-09. Aankondiging van 2026-09-09 over behoud van MIT-licentie en onderhoudsvoornemen.

- [Vite: Deploying a Static Site](https://vite.dev/guide/static-deploy) — geraadpleegd 2026-10-09. Officiële gids voor statische sites en SPA-deployment.

- [Cloudflare Pages: Serving Pages](https://developers.cloudflare.com/pages/configuration/serving-pages/) — geraadpleegd 2026-10-09. Voorbeeld van hostafhankelijk SPA-fallbackgedrag; deze projecthost is geen Cloudflare Pages.

- [Docker: Networking overview](https://docs.docker.com/engine/network/) — geraadpleegd 2026-10-09. Officiële documentatie over netwerkcommunicatie tussen containers en netwerkservices.

- [Docker: Port publishing and mapping](https://docs.docker.com/engine/network/port-publishing/) — geraadpleegd 2026-10-09. Officiële documentatie over gepubliceerde containerpoorten en host-to-container port mapping; ondersteunt controle van proxy-toegang tot de frontendservice.

- [Caddy: reverse_proxy directive](https://caddyserver.com/docs/caddyfile/directives/reverse_proxy) — geraadpleegd 2026-10-09. Primaire documentatie voor één mogelijke reverse proxy; niet aangenomen dat de VPS Caddy gebruikt.

- [Traefik: Docker provider](https://doc.traefik.io/traefik/v3.6/reference/install-configuration/providers/docker/) — geraadpleegd 2026-10-09. Primaire documentatie voor een andere mogelijke Docker reverse proxy; niet aangenomen dat de VPS Traefik gebruikt.

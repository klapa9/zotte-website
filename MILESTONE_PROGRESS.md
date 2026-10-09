# Milestonevoortgang

## M1 — Verticale slice

Status: **gebouwd; lokale host- en visuele acceptatie deels niet verifieerbaar in deze omgeving** (2026-10-09).

- Hostselectie in `src/AppRouter.tsx`: alleen `nogzottere.zottewebsite.be` toont de microsite; andere hosts behouden de bestaande router.
- Microsite-ingang, eigen shell en zes unieke onderwerplinks zijn aanwezig. `Verlaat je lichaam` is het volledige eerste artikel. De vijf overige onderwerpbestemmingen hebben tijdelijke overzichtspagina's voor M2.
- Route-/componenttests controleren de nieuwe host, de bestaande `www`-homepage, zes navigatiedoelen, directe artikel-URL, navigatie, remount als refresh, actieve link, één H1 en artikeltitel in de head: 3 geslaagd.
- Typecheck: geslaagd. ESLint: geslaagd met 3 bestaande hook-waarschuwingen. Volledige Vitest-suite: 15 tests geslaagd. Vite-build: geslaagd. `dist/404.html` is gelijk aan `dist/index.html`.
- Preview met echte Host-headers: niet uitgevoerd; de sandbox weigert een lokale luistersocket met `listen EPERM 127.0.0.1`. Volledig log: `.factory-tmp/m1-host-preview.log`.
- Mobiele en brede visuele controle: CSS is responsief ingericht, maar een browser/screenshottool is niet beschikbaar. Horizontale overflow is daardoor niet visueel gemeten.
- Caddy/Docker-controle: geen Caddyfile, Dockerfile of Compose-configuratie aanwezig in deze werkmap. Live DNS/TLS en refresh achter Caddy zijn niet getest.

Volledige controlelogs staan in `.factory-tmp/m1-final-*.log`; overige gerichte logs staan in dezelfde map.

## M2 — Zes artikelen en interne navigatie

Status: **gebouwd; bronvergelijking en hostpreview gedeeltelijk geblokkeerd** (2026-10-09).

- De vijf tijdelijke pagina's zijn vervangen door volledige artikelen in `src/data/micrositeArticles.ts`. `src/AppRouter.tsx` koppelt dezelfde vijf slugs aan `MicrositeAdditionalArticle`. De zesde, eerste artikelpagina is behouden.
- Iedere nieuwe pagina heeft een introductie, meerdere inhoudelijke secties, een praktische lijst, één H1 en eigen titel en beschrijving. De vaste `micrositeTopics`-lijst voedt de zes hoofdnavigatielinks; de artikellinks verbinden vorige en volgende pagina in de goedgekeurde volgorde.
- Redactionele checklist tegen de aanwezige projectbronnen: **Kundalini** behandelt levensenergie, ruggengraat, chakra's, ontwaken en oefeningen; **Gedeelde werkelijkheid** behandelt bewustzijn als basis, intentie, collectieve invloed, cycli en aandachtsoefeningen (`src/data/ideas.ts`); **The Law of One** behandelt oneindige bron, schijnbare afscheiding, eenheid en liefdevol handelen (`src/data/ideas.ts`, `src/pages/Leven.tsx`); **Spirituele evolutie** behandelt densiteiten 1–6, onze 3e densiteit, overgang naar de 4e en oefeningen (`src/pages/Leven.tsx`); **Katalysatoren** behandelt ervaringen, emotionele reacties, keuze, groei en reflectie. Er is geen feitelijke nuancering of gezondheidswaarschuwing toegevoegd. De oorspronkelijke vijf aangeleverde teksten zijn niet als afzonderlijke bron in de werkmap aanwezig; een letterlijke vergelijking met die teksten kon niet worden voltooid.
- Route-/DOM-tests: alle zes routes direct en na remount, één H1, unieke title/description, actieve navlink, zes unieke hoofdnavigatiedoelen, secties en doorlopende vorige/volgende links. 15 micrositetests geslaagd; volledige suite 27/27 geslaagd.
- Volledige integratiecontrole na de codewijzigingen: typecheck geslaagd; ESLint 0 fouten en 3 reeds aanwezige hook-waarschuwingen; Vitest 27/27 geslaagd; Vite-build geslaagd. De bestaande App-test schrijft een jsdom-`HTMLMediaElement.prototype.pause`-melding naar stderr, zonder testfalen. `dist/404.html` is gelijk aan `dist/index.html`. Logs: `.factory-tmp/m2-final-typecheck.log`, `.factory-tmp/m2-final-lint.log`, `.factory-tmp/m2-final-vitest.log`, `.factory-tmp/m2-final-build.log`.
- Lokale Host-header-preview met OS-poort 0 geprobeerd, maar de sandbox weigert de luistersocket (`listen EPERM 127.0.0.1`); volledige log: `.factory-tmp/m2-host-preview.log`. Caddy/Docker-configuratie en een browsertool ontbreken in deze werkmap. Daardoor zijn echte HTTP-refresh achter Caddy, live HTTPS en visuele overflowcontrole nog niet bevestigd.
- Geen dependency geïnstalleerd of gewijzigd; `package.json` en `package-lock.json` zijn behouden. Er is geen `requirements.lock` of `.factory-tools/recovered-venv`; Python-herstel en Python-tests zijn hier niet van toepassing.

## M3 — Responsive en toegankelijkheidsafwerking

Status: **gebouwd; browsermeting van viewport en visuele focus geblokkeerd door lokale socketbeperking** (2026-10-09).

- De microsite-navigatie gebruikt op schermen onder 380 px één kolom, daarna twee, drie en zes kolommen. Lange titels en navigatielabels mogen afbreken; artikelen behouden `max-w-3xl` als leesbreedte. De microsite-stijlen blijven gescoped.
- De zes artikelen gebruiken nu hun reeds vastgelegde eigen accent (`cyan`, `rose`, `violet`, `amber`, `emerald`, `pink`) voor koppen, gloed, tips, actieve navigatie en focus. De ingang houdt het cyaanaccent.
- Alle links hebben een zichtbare `:focus-visible`-rand. Een toetsenbordbereikbare springlink gaat naar het `main`-landmark. De microsite heeft Nederlandse taalmarkering, benoemde navigatie, header, main en footer. Linknamen en actieve pagina zijn in DOM-tests gecontroleerd.
- Pagina's hebben unieke `title`, `description`, `og:title` en `og:description`. Er is geen robots- of `noindex`-tag in de microsite of statische ingang. Decoratieve orbs stoppen hun animatie en navigatie-/kaarttransities stoppen bij `prefers-reduced-motion: reduce`.
- Finale integratiecontrole na de laatste codewijziging: typecheck geslaagd; ESLint 0 fouten en 3 bestaande hook-waarschuwingen; Vitest 28/28 geslaagd; Vite-build geslaagd. Logs: `.factory-tmp/m3-final-typecheck.log`, `.factory-tmp/m3-final-lint.log`, `.factory-tmp/m3-final-vitest.log`, `.factory-tmp/m3-final-build.log`.
- De lokale socketproef met OS-poort 0 faalde met `listen EPERM 127.0.0.1` (`.factory-tmp/m3-port-probe.log`). Daardoor zijn clipping, overflow en focus bij echte mobiele/desktopviewports, en daadwerkelijke reduced-motion-rendering niet in een browser gemeten. CSS en DOM zijn gecontroleerd; visuele acceptatie blijft open voor een omgeving met een toegestane lokale server/browsercontrole.
- Geen dependency of lockbestand gewijzigd. `package-lock.json` is aanwezig. Er zijn geen Python-tests, `requirements.lock` of `.factory-tools/recovered-venv` voor dit frontendproject.

## M4 — Caddy-, Docker- en regressievalidatie

Status: **projectchecks geslaagd; live proxy- en hostvalidatie niet uitvoerbaar in deze sandbox** (2026-10-09).

- Codecontrole bevestigt dat alleen `nogzottere.zottewebsite.be` de microsite-router krijgt. De bestaande `www`-homepage blijft in de routetest werken; een nieuwe App-regressietest rendert de bestaande inhoudspagina `/leven` op een andere dan de micrositehost. De micrositetests dekken de ingang, alle zes directe artikelroutes en een remount als client-side refresh.
- In de werkmap staat geen Caddyfile, Dockerfile of Compose-configuratie. De aanwezige `.github/workflows/deploy.yml` publiceert naar GitHub Pages en beschrijft de beoogde VPS-keten niet. De handmatige DNS-, Caddy-, upstream-, TLS- en SPA-fallbackstappen staan in `DEPLOYMENT_MICROSITE.md`; een upstreamnaam kon niet uit deze repository worden vastgesteld.
- De Docker CLI is aanwezig, maar `docker info` faalt op `permission denied` voor `/var/run/docker.sock` (`.factory-tmp/m4-docker-info.log`). De lokale Vite-preview met OS-poort 0 faalt op `listen EPERM 127.0.0.1` (`.factory-tmp/m4-host-preview.log`). Daardoor konden echte Host-header-aanvragen, HTTP-refresh achter Caddy/Docker en live DNS/HTTPS niet worden uitgevoerd. De bestaande `dist/404.html`-fallback is identiek aan `dist/index.html`, maar bewijst het gedrag van de externe proxy niet.
- Finale integratiecontrole: typecheck geslaagd; ESLint 0 fouten en 3 bestaande waarschuwingen; Vitest 29/29 geslaagd; Vite-build geslaagd; `dist/index.html` en `dist/404.html` gelijk. Volledige logs: `.factory-tmp/m4-final-typecheck.log`, `.factory-tmp/m4-final-lint.log`, `.factory-tmp/m4-final-vitest.log`, `.factory-tmp/m4-final-build.log`. jsdom schrijft bij de bestaande audio-component een `HTMLMediaElement`-melding, zonder testfalen.
- `package.json` en `package-lock.json` hebben dezelfde naam, versie en directe dependencyversies (0 verschillen in `.factory-tmp/m4-lock-check.log`). Er zijn geen dependencies geïnstalleerd of lockbestanden gewijzigd. Python-tests zijn niet van toepassing; `requirements.lock` en `.factory-tools/recovered-venv` ontbreken.

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

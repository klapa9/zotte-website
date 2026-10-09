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

# Laatste milestone: M1

**M1 is gebouwd, maar nog niet volledig gevalideerd.** Dezelfde frontend-build bevat nu hostroutering, een eigen microsite-ingang, zes onderwerpbestemmingen en het volledige artikel *Verlaat je lichaam*. De vijf andere bestemmingen hebben tijdelijke pagina’s voor M2. De bestaande `www`-routes blijven in de router behouden.

Typecheck, lint, build en alle **15 tests** slagen. Lint meldt nog drie waarschuwingen. De volledige logs en open punten staan in [FACTORY_HANDOFF.md](/home/pjotr/Projects/development/codingFactory/factory/workspaces/zotte-website-v2-build-8fb2f7a7/FACTORY_HANDOFF.md) en [MILESTONE_PROGRESS.md](/home/pjotr/Projects/development/codingFactory/factory/workspaces/zotte-website-v2-build-8fb2f7a7/MILESTONE_PROGRESS.md).

**Resterende validatie:** de lokale Host-header-preview faalde door `listen EPERM 127.0.0.1`. Caddy/Docker-configuratie en een browser voor mobiele en brede visuele controle ontbreken in de werkmap. Daardoor zijn productie-HTTPS, refresh achter Caddy en horizontale overflow nog niet bevestigd.

Deze notitie is geen onafhankelijk bewijs; controleer code en tests.

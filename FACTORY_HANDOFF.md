# Laatste milestone: M4

**M4 is lokaal afgerond.** Ik voegde een regressietest voor `/leven` toe en legde de benodigde DNS-, Caddy- en SPA-fallbackstappen vast in [DEPLOYMENT_MICROSITE.md](/home/pjotr/Projects/development/codingFactory/factory/workspaces/zotte-website-v2-build-8fb2f7a7/DEPLOYMENT_MICROSITE.md). De voortgang en bewijsgrenzen staan in [MILESTONE_PROGRESS.md](/home/pjotr/Projects/development/codingFactory/factory/workspaces/zotte-website-v2-build-8fb2f7a7/MILESTONE_PROGRESS.md).

**Tests:** typecheck, build en 29/29 tests geslaagd. Lint: 0 fouten, 3 bestaande waarschuwingen. `package.json` en `package-lock.json` zijn consistent. Volledige logs staan in `.factory-tmp/m4-final-*.log`.

**Openstaand:** echte Host-header-, refresh- en HTTPS-controles achter Caddy/Docker. De repository bevat geen Caddy- of Docker-configuratie, de Docker-socket weigert toegang en de sandbox weigert een lokale previewsocket (`listen EPERM`). Deze controles moeten in de beheeromgeving worden uitgevoerd.

Deze notitie is geen onafhankelijk bewijs; controleer code en tests.

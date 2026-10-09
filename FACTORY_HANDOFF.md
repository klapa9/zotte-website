# Laatste milestone: M3

**M3 is gebouwd.** De microsite heeft nu navigatie die op smalle schermen schaalt, zes eigen artikelaccenten, een springlink, zichtbare toetsenbordfocus, Nederlandse taalmarkering en unieke metadata. Animaties en transities respecteren `prefers-reduced-motion`. De voortgang staat in [MILESTONE_PROGRESS.md](/home/pjotr/Projects/development/codingFactory/factory/workspaces/zotte-website-v2-build-8fb2f7a7/MILESTONE_PROGRESS.md) en de [overdracht](/home/pjotr/Projects/development/codingFactory/factory/workspaces/zotte-website-v2-build-8fb2f7a7/FACTORY_HANDOFF.md).

De integratiecontrole slaagt: typecheck, 28/28 tests en build. Lint meldt 0 fouten en 3 bestaande waarschuwingen. De volledige logs staan in `.factory-tmp/m3-final-*.log`.

**Openstaand:** de sandbox weigert een lokale luistersocket (`listen EPERM`). Daardoor konden clipping, overflow, zichtbare focus en reduced motion niet in een echte browser worden gemeten. De DOM- en CSS-controles zijn uitgevoerd; de browsercontrole blijft voor een omgeving waar de lokale server kan starten.

Deze notitie is geen onafhankelijk bewijs; controleer code en tests.

# Uitvoeringsplan

## Stack en architectuur

Gebruik de aanwezige React 18-, TypeScript-, Vite-, Tailwind CSS 3- en React Router DOM 6-stack. Voeg geen dependencies toe. Caddy routeert `nogzottere.zottewebsite.be` naar dezelfde Docker-frontendservice die de bestaande website bedient. De frontend toont op basis van de hostname de microsite-routering; de bestaande `www`-host behoudt zijn huidige routes. De bestaande Caddy-installatie blijft in gebruik.

## Opleveringen

- Microsite-ingang op `/` van `nogzottere.zottewebsite.be`.
- Zes geredigeerde artikelpagina’s met voorgestelde URLs en volgorde.
- Microsite-navigatie met uitsluitend de zes artikelbestemmingen.
- Unieke metadata, eigen kleuraccenten en responsive vormgeving.
- Gevalideerde hostscheiding tussen het nieuwe subdomein en `www`.
- Bij deploymentconfiguratie in de repository: minimale Caddy-/Docker-configuratie voor de hostroute. Als DNS- of VPS-configuratie buiten de projecttoegang valt, lever de benodigde instellingen als concrete handmatige stappen op.

## Fasen

1. **Verticale slice:** bouw hostselectie, microsite-layout en -ingang, plus één volledig artikel: Verlaat je lichaam. Doorloop de volledige keten van host en route tot inhoud, styling en directe refresh. Breid pas daarna uit.
2. **Inhoudsuitbreiding:** voeg de overige vijf artikelen en hun routes toe volgens de vastgelegde volgorde en redactionele regels.
3. **Afwerking:** voltooi responsive navigatie, kleuraccenten, metadata, toetsenbordfocus en reduced-motion.
4. **Proxy- en regressievalidatie:** controleer de nieuwe host achter Docker/Caddy, de bestaande `www`-routes, directe URLs en de projectchecks.

## Validatiestrategie en omgeving

- Controleer vooraf de project- en deploymentconfiguratie die voor deze frontend bedoeld is. Identificeer waar DNS en Caddy beheerd worden; gebruik geen niet-benodigde privébestanden of secrets.
- Test hostselectie: `nogzottere.zottewebsite.be` toont de microsite en `www` toont de bestaande site.
- Test directe URL en refresh voor ingang en alle zes artikelen achter Docker/Caddy.
- Controleer navigatiedoelen, metadata en inhoud met route-, DOM- en redactionele checks.
- Controleer mobiel en desktop, toetsenbordfocus, semantische structuur en reduced-motion.
- Voer typecheck, lint, bestaande tests en build uit met reeds aanwezige dependencies. Installeer niets; rapporteer niet-uitgevoerde checks afzonderlijk.
- Houd `package-lock.json` synchroon indien er ondanks het plan toch dependencies veranderen.
- Als een lokale previewserver nodig is, gebruik poort 0, geef de gekozen poort door aan tests en stop geen andere processen.
- Voer geen live DNS- of VPS-wijzigingen uit buiten de beschikbare projecttoegang. Rapporteer zulke benodigde handelingen als opleverinstructies.

## Beslisregels voor uitvoering

- Routeer het subdomein naar dezelfde frontendservice als dat binnen de bestaande Caddy/Docker-configuratie past; introduceer geen aparte service zonder concrete technische noodzaak.
- Beperk hostafhankelijke routering tot de app-routering en laat bestaande `www`-routes ongemoeid.
- Als de bestaande Caddy-configuratie niet in de projectrepository staat, lever de vereiste hostregel en upstream als handmatige configuratiestap op; vraag niet om VPS-secrets.
- Als DNS/TLS nog niet beschikbaar is, valideer lokaal met een Host-header-preview en markeer live HTTPS-validatie als niet uitgevoerd.
- Bij stylingregressie op bestaande pagina’s: scope of vereenvoudig nieuwe stijlen voordat verdere uitbreiding plaatsvindt.
- Als een test installatie of externe toegang vereist, voer die niet stilzwijgend uit; vermeld de blokkade en de ontbrekende toegang.

## Milestones

De milestones zijn interne controlepunten van één volledige uitvoering, geen aparte gebruikersgoedkeuringen.

## M1: Verticale slice: subdomein en eerste artikel

Hostgebaseerde microsite-routering, microsite-shell en -ingang, plus volledig artikel Verlaat je lichaam; gebruik dezelfde frontend-build en Docker-service.

Afhankelijkheden: Geen

Acceptatiecriteria:

- Controleer met hostgebaseerde route-/componenttests dat `nogzottere.zottewebsite.be` de microsite-ingang toont en `www` de bestaande homepage toont.
- Controleer directe URL, navigatie en refresh voor het eerste artikel.
- Controleer dat de microsite-navigatie zes onderwerpen bevat en geen hoofdsitelinks.
- Controleer mobiel en breed formaat op leesbaarheid en horizontale overflow.
- Controleer achter de bestaande Caddy-configuratie als die beschikbaar is; anders valideer met lokale Host-header-preview.

Controlepunt: voer de acceptatiecontroles uit, herstel fouten en ga automatisch door naar de volgende milestone. Vraag geen nieuwe gebruikersgoedkeuring.

## M2: Zes artikelen en interne navigatie

Voeg de overige vijf artikelen, routes en volledige interne navigatie toe.

Afhankelijkheden: M1

Acceptatiecriteria:

- Test directe URL en refresh voor alle zes artikelen.
- Controleer één H1 en unieke metadata per pagina.
- Vergelijk alle inhoudelijke onderdelen en tips met de aangeleverde teksten.
- Controleer dat geen feitelijke nuance of gezondheidswaarschuwing is toegevoegd.
- Controleer dat de navigatie alleen de zes artikelroutes bevat.

Controlepunt: voer de acceptatiecontroles uit, herstel fouten en ga automatisch door naar de volgende milestone. Vraag geen nieuwe gebruikersgoedkeuring.

## M3: Responsive en toegankelijkheidsafwerking

Werk mobiele navigatie, accenten, metadata, toetsenbordfocus en reduced-motion af.

Afhankelijkheden: M2

Acceptatiecriteria:

- Controleer mobiel en desktop op clipping, overflow en leesbreedte.
- Controleer toetsenbordbediening, zichtbare focus, landmarks en linknamen.
- Controleer reduced-motion-gedrag.
- Controleer dat pagina’s indexeerbaar blijven en geen robotsblokkade hebben.

Controlepunt: voer de acceptatiecontroles uit, herstel fouten en ga automatisch door naar de volgende milestone. Vraag geen nieuwe gebruikersgoedkeuring.

## M4: Caddy-, Docker- en regressievalidatie

Valideer hostroutering en directe routes achter Caddy/Docker en voer beschikbare projectchecks uit.

Afhankelijkheden: M3

Acceptatiecriteria:

- Controleer dat Caddy de subdomeinhost naar de frontendservice routeert en `www` de huidige site blijft tonen.
- Controleer directe URL en refresh voor de microsite-ingang en alle zes artikelen.
- Als DNS/TLS niet beschikbaar is, voer lokale Host-header-validatie uit en noteer live HTTPS als niet getest.
- Voer typecheck, lint, bestaande tests en build uit met reeds aanwezige dependencies; rapporteer niet-uitgevoerde checks.
- Controleer bestaande homepage en minstens één bestaande inhoudspagina op regressies.
- Controleer `package.json` en `package-lock.json` op consistentie.

Controlepunt: voer de acceptatiecontroles uit, herstel fouten en ga automatisch door naar de volgende milestone. Vraag geen nieuwe gebruikersgoedkeuring.

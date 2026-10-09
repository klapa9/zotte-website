import type { MicrositeTopic } from './microsite';

export type ArticleSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  tip?: boolean;
};

export type MicrositeArticleContent = MicrositeTopic & {
  description: string;
  introduction: string;
  sections: ArticleSection[];
};

// The first article is kept in Microsite.tsx; these are the five M2 articles.
export const additionalArticles: Record<string, Omit<MicrositeArticleContent, keyof MicrositeTopic>> = {
  kundalini: {
    description: 'Ontdek kundalini, de levensenergie die door je heen beweegt, en geef ruimte aan bewustwording, gevoel en innerlijke groei.',
    introduction: 'Er leeft een kracht in je die je dichter bij jezelf brengt. Kundalini is de levensenergie die vanuit je basis omhoog beweegt en je bewustzijn opent.',
    sections: [
      { heading: 'De energie in jou', paragraphs: [
        'Kundalini wordt beschreven als een opgerolde energie onderaan je ruggengraat. Wanneer die energie wakker wordt, beweegt ze door je heen en verbindt ze je lichaam, je gevoel en je bewustzijn.',
        'Je kunt warmte, tintelingen, beweging of een stroom van energie voelen. Soms komen ook emoties en oude herinneringen naar boven. De energie maakt zichtbaar wat in je leeft en nodigt je uit om het echt te voelen.',
      ] },
      { heading: 'Van wortel tot kruin', paragraphs: [
        'De energie reist langs je chakra’s: van de basis waar je veiligheid en aarde voelt, via creativiteit, wilskracht, hart en stem naar inzicht en verbinding boven je hoofd.',
        'Elk centrum laat je een ander deel van jezelf ontmoeten. Waar je vastzat, kan ruimte ontstaan. Waar je jezelf inhield, kan je kracht weer stromen.',
      ] },
      { heading: 'Ontwaken en integreren', paragraphs: [
        'Een kundalini-ontwaken verandert hoe je jezelf en de wereld ervaart. Je merkt scherper wat bij je past, voelt je intuïtie duidelijker en ziet dat innerlijke groei ook in gewone momenten gebeurt.',
        'Geef de ervaring tijd. Rust, aandacht en vertrouwen helpen je om nieuwe inzichten mee te nemen in je dagelijks leven. Je hoeft de energie niet te dwingen; je kunt haar uitnodigen en volgen.',
      ] },
      { heading: 'Maak ruimte voor je energie', tip: true, bullets: [
        'Ga rustig zitten en voel je adem en de grond onder je voeten.',
        'Breng je aandacht naar de basis van je ruggengraat en volg wat je daar ervaart.',
        'Beweeg zacht, dans of wandel wanneer de energie om beweging vraagt.',
        'Schrijf gevoelens en inzichten op die naar boven komen.',
        'Neem tijd voor stilte en laat de ervaring in je eigen ritme ontvouwen.',
      ] },
      { heading: 'Leef vanuit die stroom', paragraphs: [
        'Kundalini herinnert je eraan dat levenskracht al in je aanwezig is. Wanneer je ernaar luistert, leer je je eigen ritme kennen en leef je met meer bewustzijn en verbinding.',
      ] },
    ],
  },
  'gedeelde-werkelijkheid': {
    description: 'Verken hoe aandacht, intentie en collectieve keuzes samen de werkelijkheid vormen die we delen.',
    introduction: 'Je leeft niet los van de wereld om je heen. Met je aandacht, gedachten en keuzes geef je samen met anderen vorm aan de werkelijkheid die je ervaart.',
    sections: [
      { heading: 'Bewustzijn als basis', paragraphs: [
        'Je hersenen sturen en ordenen je leven, maar bewustzijn is de fundamentele basis van alles. De fysieke wereld, ook je lichaam, is een manifestatie van bewustzijn.',
        'Daardoor is wat je beleeft meer dan een reeks gebeurtenissen buiten jezelf. Je innerlijke wereld en wat zich om je heen ontvouwt, zijn met elkaar verbonden.',
      ] },
      { heading: 'Wat je aandacht geeft, groeit', paragraphs: [
        'Gedachten en intenties sturen waar je energie naartoe gaat. Wat je aandacht geeft, krijgt kracht en vorm in jouw ervaring. Je kunt bewust kiezen welke mogelijkheid je voedt.',
        'Je gedachten, acties en gewoontes keren terug in je ervaringen. Liefdevolle gedachten leiden tot liefdevolle daden en trekken meer liefdevolle ervaringen aan. Angstige gedachten en acties brengen meer angstige ervaringen voort.',
      ] },
      { heading: 'We scheppen samen', paragraphs: [
        'Iedereen kiest, voelt en richt aandacht. Zo leven we in een gedeelde werkelijkheid die wordt gevormd door de collectieve intenties van iedereen.',
        'Jouw keuze staat dus nooit helemaal op zichzelf. Als je met aandacht handelt, draag je bij aan wat tussen mensen groeit. Je kunt de werkelijkheid actief helpen creëren in plaats van er alleen op te reageren.',
      ] },
      { heading: 'Ritmes en cycli', paragraphs: [
        'Ook de werkelijkheid beweegt in ritmes. Seizoenen, maanfasen, dag en nacht, ademhaling en hartslag laten de golven zien die door je leven lopen.',
        'Merk je eigen pieken en dalen op. Door op die golven mee te bewegen, ontdek je wanneer het tijd is om iets te laten groeien en wanneer je mag rusten.',
      ] },
      { heading: 'Richt je aandacht', tip: true, bullets: [
        'Kies ’s morgens een intentie voor de manier waarop je vandaag wilt leven.',
        'Merk op waar je aandacht telkens naartoe gaat en geef bewust ruimte aan wat je wilt laten groeien.',
        'Doe één liefdevolle handeling en voel wat die verandert voor jou en een ander.',
        'Schrijf ’s avonds op welke gedachten, keuzes en ervaringen elkaar vandaag versterkten.',
      ] },
    ],
  },
  'the-law-of-one': {
    description: 'The Law of One vertelt hoe alle levens en ervaringen uit één oneindig bewustzijn voortkomen.',
    introduction: 'Alles is één. The Law of One nodigt je uit om achter de schijnbare afstand tussen jou en de wereld hetzelfde oneindige bewustzijn te herkennen.',
    sections: [
      { heading: 'Eén oneindige bron', paragraphs: [
        'Er is één oneindig universeel bewustzijn. Noem het God, het universum, de Bron of het Geheel: alles wat je ziet, voelt en ervaart is een uitdrukking van diezelfde eenheid.',
        'De eenheid staat niet buiten je. Jij bent een unieke vorm waarin ze zichzelf ervaart. Wat gescheiden lijkt, zijn verschillende perspectieven van dezelfde oneindige bron.',
      ] },
      { heading: 'Waarom we ons afzonderlijk voelen', paragraphs: [
        'Om zichzelf te ervaren, neemt oneindig bewustzijn een eindig perspectief aan. Als mens vergeet je even dat je deel bent van het geheel. Zo ontstaan “ik” en “de ander”, licht en donker, liefde en angst.',
        'Die dualiteit geeft ruimte aan keuze en ervaring. Je kunt jouw eigen pad lopen en tegelijk herinneren dat iedereen uit dezelfde bron voortkomt.',
      ] },
      { heading: 'Jij bent het universum', paragraphs: [
        'Je bent geen persoon die het universum beleeft. Je bent het universum dat een persoon beleeft. Ieder mens laat hetzelfde bewustzijn door een ander venster kijken.',
        'Wat je een ander aandoet, raakt daarmee ook jezelf. Door liefde, hulp en compassie te geven, vergroot je de liefde die je zelf ervaart. Je keuzes werken verder door dan je kunt zien.',
      ] },
      { heading: 'Kies vanuit eenheid', tip: true, bullets: [
        'Kijk iemand vandaag bewust aan en herinner je dat jullie uit dezelfde bron komen.',
        'Luister zonder meteen te oordelen; geef ruimte aan het perspectief van de ander.',
        'Kies één concrete daad van liefde of hulp zonder iets terug te verwachten.',
        'Merk op hoe jouw woorden en handelingen naar jou terugkeren in je ervaring.',
      ] },
      { heading: 'Eenheid in het dagelijks leven', paragraphs: [
        'Je hoeft je menselijkheid niet achter te laten om eenheid te voelen. Juist in gewone ontmoetingen en keuzes herken je dat jouw leven met alle andere levens verweven is.',
      ] },
    ],
  },
  'spirituele-evolutie': {
    description: 'Reis langs de densiteiten van bewustzijn en ontdek hoe ervaring, keuze, liefde en wijsheid je groei vormen.',
    introduction: 'Je bewustzijn groeit door alles wat je ervaart. Spirituele evolutie voert van elementair bestaan via menselijke keuze naar liefde, wijsheid en eenheid.',
    sections: [
      { heading: 'Densiteiten van bewustzijn', paragraphs: [
        'De werkelijkheid bestaat uit opeenvolgende densiteiten: frequentiebanden van bewustzijn. Elke densiteit heeft een eigen trilling, vorm van ervaring en mate van zelfbewustzijn. Hogere densiteiten zijn minder fysiek en meer op bewustzijn gericht.',
        'Elke stap bouwt voort op de vorige. Niets van wat je hebt ervaren gaat verloren; het krijgt een plaats in een groter geheel.',
      ] },
      { heading: 'Van aarde tot zelfbewustzijn', bullets: [
        '1e densiteit: aarde, water, vuur en lucht; elementair bestaan zonder zelfbesef.',
        '2e densiteit: planten en dieren; leven ontwikkelt groei, beweging en instinct.',
        '3e densiteit: de mens; zelfbewustzijn, identiteit, keuze en morele richting ontstaan.',
      ] },
      { heading: 'Van hart naar eenheid', bullets: [
        '4e densiteit: hartbewustzijn, empathie, transparantie en collectieve verbinding.',
        '5e densiteit: wijsheid en inzicht; individualiteit zonder afscheiding.',
        '6e densiteit: liefde en wijsheid worden één en tegenstellingen worden geïntegreerd.',
      ] },
      { heading: 'Jouw plaats in die beweging', paragraphs: [
        'We leven in de 3e densiteit. Hier ontmoet je dualiteit: licht en donker, goed en kwaad, ik en jij. Die polariteit daagt je uit om bewust te kiezen wie je bent en hoe je met anderen omgaat.',
        'De overgang naar de 4e densiteit brengt liefde en verbinding naar voren. Je laat oude patronen los en leert steeds meer vanuit het hart te leven. Uiteindelijk keert bewustzijn, verrijkt door alle ervaringen, terug naar volledige eenheid.',
      ] },
      { heading: 'Groei in je eigen leven', tip: true, bullets: [
        'Sta stil bij een keuze van vandaag en voel of ze uit angst of uit liefde komt.',
        'Luister naar je intuïtie en neem regelmatig tijd om naar binnen te keren.',
        'Zoek balans tussen werk en rust, geven en ontvangen, actie en reflectie.',
        'Laat een oud patroon los en kies één kleine daad die meer verbinding brengt.',
      ] },
    ],
  },
  katalysatoren: {
    description: 'Ontdek hoe ontmoetingen, emoties en uitdagingen katalysatoren worden voor bewustwording en groei.',
    introduction: 'Wat je raakt, wijst je ergens op. Katalysatoren zijn ervaringen die beweging brengen in je bewustzijn en je helpen ontdekken wie je bent.',
    sections: [
      { heading: 'Ervaring zet je in beweging', paragraphs: [
        'Een ontmoeting, conflict, verlies of onverwachte kans kan je diep raken. Zo’n gebeurtenis werkt als katalysator: ze brengt gevoelens en patronen naar boven die je anders misschien niet zou zien.',
        'Ook vreugde, liefde en verwondering zijn katalysatoren. Ze laten voelen waar je energie stroomt en welke richting bij je past.',
      ] },
      { heading: 'Wat je reactie je toont', paragraphs: [
        'Dezelfde gebeurtenis voelt voor ieder mens anders. Jouw reactie laat zien welke overtuigingen, verlangens en angsten in je leven. Door er met aandacht naar te kijken, verander je een automatische reactie in een bewuste keuze.',
        'Je hoeft gevoelens niet weg te duwen. Voel wat er te voelen valt, blijf aanwezig en ontdek wat deze ervaring je wil laten zien.',
      ] },
      { heading: 'Kiezen en groeien', paragraphs: [
        'In de menselijke ervaring ontmoeten we tegenstellingen. Juist daar kun je kiezen tussen angst en liefde, afsluiten en verbinden, herhalen en groeien.',
        'Wat jou blijft roepen, wat je raakt en wat je energie geeft, wijst je richting. Elke katalysator helpt je je eigen pad helderder te zien. De ervaringen die je opdoet verrijken uiteindelijk het hele bewustzijn.',
      ] },
      { heading: 'Werk met een katalysator', tip: true, bullets: [
        'Denk aan een ervaring die vandaag iets in je losmaakte en schrijf op wat je voelde.',
        'Vraag jezelf welk oud patroon of verlangen in die reactie zichtbaar werd.',
        'Voel wat je nodig hebt en kies één kleine stap die bij jouw richting past.',
        'Kijk later terug hoe je keuze de ervaring voor jou en anderen veranderde.',
      ] },
      { heading: 'Neem je ervaring mee', paragraphs: [
        'Je leven bestaat uit momenten die je wakker maken. Als je hun boodschap ontvangt, wordt iedere ervaring een mogelijkheid om bewuster en liefdevoller te leven.',
      ] },
    ],
  },
};

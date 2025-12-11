import { Link } from 'react-router-dom';

interface PracticalTipProps {
  pageType: 'weeszot' | 'leven' | 'energie' | 'ziekzot' | 'openjegeest' | 'geld';
}

const PracticalTip = ({ pageType }: PracticalTipProps) => {
  const getTipContent = () => {
    switch (pageType) {
      case 'geld':
        return {
          title: "🎯 Praktische Tip",
          content: (
            <>
              <p className="hover:text-orange-200 transition-colors duration-300">
                <strong>Start met een klein beetje.</strong> Je hoeft geen hele bitcoin te kopen.
                1 bitcoin is 100 miljoen sats (satoshis) - de kleinste eenheid.
                Begin met een paar euro aan sats - het gaat om het principe en de gewenning.
              </p>
              <p className="hover:text-orange-200 transition-colors duration-300">
                <strong>Automatiseer je spaarboekje.</strong> Koop elke week of maand automatisch een vast bedrag aan sats.
                Ik raad deze dienst aan: <a
                  href="https://strike.me/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline font-bold"
                >Strike</a>
              </p>
              <p className="hover:text-orange-200 transition-colors duration-300">
                <strong>Heb je veel sats: gebruik een hardware wallet.</strong>
                Een Ledger of Trezor hardware wallet kost minder dan 100€ en beschermt je tegen de meeste risico's.
                Leer dit eerst goed kennen voordat je grote bedragen erop zet.
              </p>
              <p className="hover:text-orange-200 transition-colors duration-300">
                <strong>Vergeet de prijs.</strong> Focus op de lange termijn, niet op de huidige koers.
                Over 5-10 jaar maakt het niet uit of je 2000 of 1000 satoshis kocht per euro.
              </p>
            </>
          ),
          link: { to: "/leven", text: "Wat is je levensdoel? →", color: "orange" }
        };

      case 'weeszot':
        return {
          title: "🎯 Praktische Tip",
          content: (
            <>
              <p className="hover:text-yellow-200 transition-colors duration-300">
                <strong>Je eigen angst staat vaak in je weg.</strong> Angst is een beschermingsmechanisme,
                maar meestal beschermt het je tegen dingen die helemaal niet gevaarlijk zijn.
                Het houdt je klein en veilig, maar voorkomt ook dat je groeit.
              </p>
              <p className="hover:text-yellow-200 transition-colors duration-300">
                <strong>Overwin angst stap per stap.</strong> Begin klein. Heb je angst om te spreken voor groepen?
                Oefen eerst voor de spiegel, dan voor één vriend, dan drie vrienden. Elke kleine stap
                bouwt zelfvertrouwen op en verkleint de angst.
              </p>
              <p className="hover:text-yellow-200 transition-colors duration-300">
                <strong>Angst verdwijnt niet door het te ontwijken.</strong> Integendeel - hoe meer je het vermijdt,
                hoe sterker het wordt. De enige manier om angst te overwinnen is er recht op af te bewegen,
                zelfs als je trilt en zweet. De angst verdwijnt als je door de waas heen breekt.
              </p>
              <p className="hover:text-yellow-200 transition-colors duration-300">
                <strong>Visualiseer je succes.</strong> Stel je voor dat je de angst hebt overwonnen.
                Hoe voelt dat? Vrij, krachtig, levend. Houd dat gevoel vast. Dat is je bestemming,
                niet de angst die je nu voelt. Elke stap in die richting is een overwinning.
              </p>
            </>
          ),
          link: { to: "/geld", text: "Geld is een hulpmiddel  →", color: "yellow" }
        };

      case 'leven':
        return {
          title: "🎯 Praktische Tip",
          content: (
            <>
              <p className="hover:text-cyan-200 transition-colors duration-300">
                <strong>Je moet niets forceren.</strong> Iedereen leeft zijn leven.
                Het universum heeft een natuurlijk ritme. Probeer niet te hard te sturen.
                Vertrouw op het proces en laat dingen op hun tijd gebeuren.
              </p>
              <p className="hover:text-cyan-200 transition-colors duration-300">
                <strong>Luister naar je intuïtie.</strong> Je innerlijke stem weet vaak beter wat goed voor je is
                dan je rationele geest. Neem regelmatig tijd om stil te worden en naar binnen te keren.
                Je zult verbaasd zijn over de inzichten die je ontvangt.
              </p>
              <p className="hover:text-cyan-200 transition-colors duration-300">
                <strong>Goed leven is balanceren.</strong> Zoek in alles naar balans:
                werk en rust, geven en nemen, actie en reflectie.
                Te veel van iets goeds kan schadelijk zijn.
              </p>
            </>
          ),
          link: { to: "/ziekzot", text: "Je hoeft niet ziek te zijn in je leven. →", color: "cyan" }
        };

      case 'energie':
        return {
          title: "🎯 Praktische Tip",
          content: (
            <>
              <p className="hover:text-green-200 transition-colors duration-300">
                <strong>Angst Blokkeert Energie: </strong>
                  Het blokkeert de natuurlijke stroom van energie in ons lichaam.
                  Wanneer we bang zijn, sluiten we ons af van onze kracht.
                  Door angst los te laten, bevrijden we onze energie.
              </p>
              <p className="hover:text-green-200 transition-colors duration-300">
                  <strong>Liefde Vermenigvuldigt Energie: </strong>
                  Wanneer je handelt vanuit liefde, stroomt je energie vrijelijk.
                  Liefde opent je hart en geest, waardoor je meer energie aantrekt.
                  Het is de ultieme krachtbron die ons verbindt met alles om ons heen.
              </p>
              <p className="hover:text-green-200 transition-colors duration-300">
                <strong>Overwin je angst en voel het verschil.</strong>
              </p>
              <p className="hover:text-green-200 transition-colors duration-300">
                <strong>Richt je aandacht op wat je vreugde brengt en zie je energie vermenigvuldigen.</strong>
              </p>
            </>
          ),
          link: { to: "/weeszot", text: "Volg je enthousiasme! →", color: "green" }
        };

      case 'ziekzot':
        return {
          title: "🎯 Praktische Tip",
          content: (
            <>
              <p className="hover:text-red-200 transition-colors duration-300">
                <strong>De natuur kan je genezen.</strong> Je lichaam is een prachtige zelfgenezende machine
                wanneer je het de juiste omstandigheden geeft. De natuur biedt alles wat je nodig hebt.
              </p>
              <p className="hover:text-red-200 transition-colors duration-300">
                <strong>Onze natuurlijke staat van zijn is zonder voeding in ons lichaam.</strong> 
                Ons lichaam is perfect ontworpen om periodes zonder voeding te overleven en zelfs te floreren.
              </p>
              <p className="hover:text-red-200 transition-colors duration-300">
                Heb je het te lastig om te vasten? Begin klein. Probeer eerst 12 uur, dan 16 uur.
                Bouw het langzaam op. Luister naar je lichaam, maar daag het ook uit.
              </p>
              <p className="hover:text-red-200 transition-colors duration-300">
                <strong>Je gedachten beïnvloeden je genezing.</strong> Negatieve gedachten en emoties
                creëren stress, wat je energie ondermijnt. Cultiveer positieve gedachten,
                dankbaarheid, en liefde om je te ondersteunen.
              </p>
            </>
          ),
          link: { to: "/openjegeest", text: "De kracht van je geest? →", color: "red" }
        };

      case 'openjegeest':
        return {
          title: "🎯 Praktische Tip",
          content: (
            <>
              <p className="hover:text-purple-200 transition-colors duration-300">
                <strong>Je leven is de spiegel van je onderbewustzijn.</strong>
                Alles wat je ervaart - problemen, successen, relaties, gebeurtenissen -
                is een reflectie van wat diep vanbinnen in je leeft.
              </p>
              <p className="hover:text-purple-200 transition-colors duration-300">
                Wanneer je herhaaldelijk dezelfde problemen tegenkomt, kijk dan niet
                naar buiten, maar naar binnen. <strong>Elk probleem kan je inwendig oplossen.</strong>
                De oplossing zit nooit in de buitenwereld, maar in jouw bewustzijn.
              </p>
              <p className="hover:text-purple-200 transition-colors duration-300">
                Dit is de meest krachtige kennis die je kunt bezitten. Je hoeft niet
                te wachten op externe veranderingen. Verander je innerlijke wereld,
                en de buitenwereld volgt automatisch.
              </p>
              <p className="hover:text-purple-200 transition-colors duration-300">
                Werk met je onderbewustzijn: visualisatie, affirmaties, meditatie.
                Herprogrammeer de diepe lagen die je realiteit creëren.
                De resultaten zullen je verbazen - het is bijna magisch.
              </p>
            </>
          ),
          link: { to: "/energie", text: "Krijg meer energie →", color: "purple" }
        };
    }
  };

  const tipContent = getTipContent();
  const getGradientColors = () => {
    switch (pageType) {
      case 'geld': return 'from-amber-600 to-orange-600';
      case 'weeszot': return 'from-orange-600 to-yellow-600';
      case 'leven': return 'from-cyan-600 to-teal-600';
      case 'energie': return 'from-green-600 to-emerald-600';
      case 'ziekzot': return 'from-red-600 to-rose-600';
      case 'openjegeest': return 'from-purple-600 to-indigo-600';
      default: return 'from-gray-600 to-gray-700';
    }
  };

  const getLinkColor = () => {
    switch (tipContent.link.color) {
      case 'orange': return 'bg-orange-600 bg-opacity-20 border-orange-400 text-orange-300 hover:text-orange-100';
      case 'yellow': return 'bg-yellow-600 bg-opacity-20 border-yellow-400 text-yellow-300 hover:text-yellow-100';
      case 'cyan': return 'bg-cyan-600 bg-opacity-20 border-cyan-400 text-cyan-300 hover:text-cyan-100';
      case 'green': return 'bg-emerald-600 bg-opacity-20 border-emerald-400 text-emerald-300 hover:text-emerald-100';
      case 'red': return 'bg-rose-600 bg-opacity-20 border-rose-400 text-rose-300 hover:text-rose-100';
      case 'purple': return 'bg-indigo-600 bg-opacity-20 border-indigo-400 text-indigo-300 hover:text-indigo-100';
      default: return 'bg-gray-600 bg-opacity-20 border-gray-400 text-gray-300 hover:text-gray-100';
    }
  };

  const getLinkBgColor = () => {
    switch (tipContent.link.color) {
      case 'orange': return 'text-orange-200';
      case 'yellow': return 'text-yellow-200';
      case 'cyan': return 'text-teal-200';
      case 'green': return 'text-emerald-200';
      case 'red': return 'text-rose-200';
      case 'purple': return 'text-indigo-200';
      default: return 'text-gray-200';
    }
  };

  return (
    <div className={`bg-gradient-to-r ${getGradientColors()} rounded-3xl p-8 md:p-12 mb-12`}>
      <h2 className="text-3xl md:text-4xl font-black text-white mb-6 transform hover:scale-105 hover:rotate-2 transition-all duration-300 active:scale-95">
        {tipContent.title}
      </h2>
      <div className="space-y-4 text-white text-lg md:text-xl">
        {tipContent.content}
      </div>
      <div className="mt-6 p-4 rounded-2xl border border-opacity-30">
        <p className={`text-sm mb-2 ${getLinkBgColor()}`}>
          💡 Meer weten over gerelateerde onderwerpen?
        </p>
        <Link
          to={tipContent.link.to}
          className={`underline font-bold transition-colors duration-300 block ${getLinkColor()}`}
        >
          {tipContent.link.text}
        </Link>
      </div>
    </div>
  );
};

export default PracticalTip;
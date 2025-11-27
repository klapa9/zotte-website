import { Link } from 'react-router-dom';

interface PracticalTipProps {
  pageType: 'weeszot' | 'leven' | 'energie' | 'ziekzot' | 'openjegeest';
}

const PracticalTip = ({ pageType }: PracticalTipProps) => {
  const getTipContent = () => {
    switch (pageType) {
      case 'weeszot':
        return {
          title: "🎯 Praktische Tip",
          content: (
            <>
              <p className="hover:text-yellow-200 transition-colors duration-300 cursor-pointer">
                <strong>Bekijk elke tegenslag als een les.</strong> Het universum probeert je iets te leren.
                Wanneer je vaak dezelfde tegenslag ervaart, betekent dit dat je de les nog niet hebt begrepen.
              </p>
              <p className="hover:text-yellow-200 transition-colors duration-300 cursor-pointer">
                Stop met vechten tegen tegenslag. Vraag jezelf af: "Wat probeert het leven me hier te leren?"
                Soms is de les simpel: meer geduld hebben, beter luisteren, of loslaten wat je niet kunt controleren.
              </p>
              <p className="hover:text-yellow-200 transition-colors duration-300 cursor-pointer">
                Wanneer je de les eindelijk begrijpt, verdwijnt de tegenslag als vanzelf.
                Het is geen straf, maar een uitnodiging om te groeien en wijzer te worden.
              </p>
            </>
          ),
          link: { to: "/energie", text: "Ontdek de verschillende energieën die je helpen →", color: "yellow" }
        };

      case 'leven':
        return {
          title: "🎯 Praktische Tip",
          content: (
            <>
              <p className="hover:text-cyan-200 transition-colors duration-300 cursor-pointer">
                <strong>Karma bestaat echt.</strong> Alles wat je uitstraalt, komt terug.
                Liefde, vriendelijkheid, compassie - het universeel kent geen grenzen en
                werkt door iedereen en alles heen.
              </p>
              <p className="hover:text-cyan-200 transition-colors duration-300 cursor-pointer">
                Je hoeft niet te geloven in karma om het te ervaren. Probeer het:
                wees liefdevol naar vreemden, help iemand zonder iets terug te verwachten,
                en observeer wat er in je leven gebeurt.
              </p>
              <p className="hover:text-cyan-200 transition-colors duration-300 cursor-pointer">
                De liefde die je geeft is de liefde die je ontvangt. Niet per se van
                dezelfde persoon, maar het universum regelt dit op mysterieuze wijzen.
                Houd elkaar lief - het is de meest praktische vorm van spiritualiteit.
              </p>
            </>
          ),
          link: { to: "/openjegeest", text: "Ontdek hoe je je innerlijke wereld kunt sturen →", color: "cyan" }
        };

      case 'energie':
        return {
          title: "🎯 Praktische Tip",
          content: (
            <>
              <p className="hover:text-green-200 transition-colors duration-300 cursor-pointer">
                <strong>Geld is een vorm van energie.</strong> Het is opgeslagen levensenergie,
                tijd, en creativiteit. Wanneer je geld geeft of ontvangt, vindt er een energietransfer plaats.
              </p>
              <p className="hover:text-green-200 transition-colors duration-300 cursor-pointer">
                Het huidige financiële systeem <strong>steelt constant je energie.</strong>
                Inflatie, rente, belastingen - het zijn manieren om jouw energie langzaam af te tappen
                zonder dat je het doorhebt.
              </p>
              <p className="hover:text-green-200 transition-colors duration-300 cursor-pointer">
                <strong>Bitcoin is het alternatieve geldsysteem.</strong> Het is decentraal,
                geen centrale autoriteit kan het manipuleren of devalueerden. Met Bitcoin behoud je
                volledige controle over je eigen energie.
              </p>
              <p className="hover:text-green-200 transition-colors duration-300 cursor-pointer">
                Begin klein, leer, en ontdek hoe Bitcoin financiële vrijheid kan bieden.
                Het is niet zomaar geld - het is een escape route uit een systeem dat jouw energie leent.
              </p>
            </>
          ),
          link: { to: "/ziekzot", text: "Ontdek hoe je je gezondheid kunt beschermen →", color: "green" }
        };

      case 'ziekzot':
        return {
          title: "🎯 Praktische Tip",
          content: (
            <>
              <p className="hover:text-red-200 transition-colors duration-300 cursor-pointer">
                <strong>De natuur kan je genezen.</strong> Je lichaam is een prachtige zelfgenezende machine
                wanneer je het de juiste omstandigheden geeft. De natuur biedt alles wat je nodig hebt.
              </p>
              <p className="hover:text-red-200 transition-colors duration-300 cursor-pointer">
                <strong>Onze natuurlijke staat is geen voeding, water of slaap.</strong>
                Wie ooit heeft gelezen dat dieren in het wild tellen hoeveel calorieën ze eten,
                hoeveel glazen water ze drinken, of hoeveel uur ze slapen?
              </p>
              <p className="hover:text-red-200 transition-colors duration-300 cursor-pointer">
                <strong>Vasten is onze natuurlijke staat van zijn.</strong> Vroeger aten we niet elke dag,
                en ons lichaam is perfect ontworpen om periodes zonder voeding te overleven en zelfs te floreren.
              </p>
              <p className="hover:text-red-200 transition-colors duration-300 cursor-pointer">
                <strong>De voordelen van vasten zijn enorm:</strong> celvernieuwing (autophagy),
                verbeterde insulinegevoeligheid, mentale helderheid, meer energie, en zelfs langere levensduur.
                Start met 16:8 intermittent fasting en voel hoe je lichaam tot leven komt.
              </p>
              <p className="hover:text-red-200 transition-colors duration-300 cursor-pointer">
                Vertrouw op je lichaam en de natuur. Ze weten wat goed voor je is.
                Luister naar je hongersignalen, eet wanneer je echt honger hebt, en
                geef je spijsvertering rust om te herstellen.
              </p>
            </>
          ),
          link: { to: "/openjegeest", text: "Ontdek hoe je denken je genezing beïnvloedt →", color: "red" }
        };

      case 'openjegeest':
        return {
          title: "🎯 Praktische Tip",
          content: (
            <>
              <p className="hover:text-purple-200 transition-colors duration-300 cursor-pointer">
                <strong>Je leven is de spiegel van je onderbewustzijn.</strong>
                Alles wat je ervaart - problemen, successen, relaties, gebeurtenissen -
                is een reflectie van wat diep vanbinnen in je leeft.
              </p>
              <p className="hover:text-purple-200 transition-colors duration-300 cursor-pointer">
                Wanneer je herhaaldelijk dezelfde problemen tegenkomt, kijk dan niet
                naar buiten, maar naar binnen. <strong>Elk probleem kan je inwendig oplossen.</strong>
                De oplossing zit nooit in de buitenwereld, maar in jouw bewustzijn.
              </p>
              <p className="hover:text-purple-200 transition-colors duration-300 cursor-pointer">
                Dit is de meest krachtige kennis die je kunt bezitten. Je hoeft niet
                te wachten op externe veranderingen. Verander je innerlijke wereld,
                en de buitenwereld volgt automatisch.
              </p>
              <p className="hover:text-purple-200 transition-colors duration-300 cursor-pointer">
                Werk met je onderbewustzijn: visualisatie, affirmaties, meditatie.
                Herprogrammeer de diepe lagen die je realiteit creëren.
                De resultaten zullen je verbazen - het is bijna magisch.
              </p>
            </>
          ),
          link: { to: "/energie", text: "Ontdek de verschillende vormen van energie →", color: "purple" }
        };
    }
  };

  const tipContent = getTipContent();
  const getGradientColors = () => {
    switch (pageType) {
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
      <h2 className="text-3xl md:text-4xl font-black text-white mb-6 transform hover:scale-105 hover:rotate-2 transition-all duration-300 cursor-pointer active:scale-95">
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
import { Link } from 'react-router-dom';
import Comments from './Comments';

interface PracticalTipProps {
  pageType: 'weeszot' | 'leven' | 'liefde' | 'ziekzot' | 'openjegeest' | 'geld';
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
                hoe sterker het wordt. De enige manier om angst te overwinnen is er recht op af te bewegen.
              </p>
              <p className="hover:text-yellow-200 transition-colors duration-300">
                <strong>Visualiseer je succes.</strong> Stel je voor dat je de angst hebt overwonnen.
                Hoe voelt dat? Vrij, krachtig, levend. Houd dat gevoel vast. Dat is je bestemming,
                niet de angst die je nu voelt. Elke stap in die richting is een overwinning.
              </p>
            </>
          ),
          link: { to: "/leven", text: "Wat is je levensdoel? →", color: "orange" }
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
          link: { to: "/liefde", text: "Liefde is de grotere stroming! →", color: "cyan" }
        };

      case 'liefde':
        return {
          title: "🎯 Praktische Tip",
          content: (
            <>
              <p className="hover:text-green-200 transition-colors duration-300">
                <strong>Kies vandaag één daad van liefde. </strong>
                Maak het concreet.
              </p>
              <p className="hover:text-green-200 transition-colors duration-300">
                Luister aandachtig naar iemand, help zonder gevraagd te worden,
                of geef een compliment.
              </p>
              <p className="hover:text-green-200 transition-colors duration-300">
                <strong>Verwacht niets terug. </strong>
                Doe het gewoon omdat het goed is.
              </p>
              <p className="hover:text-green-200 transition-colors duration-300">
                Voel dan wat dit doet met jezelf en de ander.
              </p>
            </>
          ),
          link: { to: "/ziekzot", text: "Genees jezelf. →", color: "green" }
        };

      case 'ziekzot':
  return {
    title: "🎯 Praktische Tip",
    content: (
      <>
        <p className="hover:text-red-200 transition-colors duration-300">
          <strong>Probeer eens een 12-uur vastenperiode.</strong> 
          Bijvoorbeeld van 20:00 tot 08:00, waarbij je enkel water drinkt.
        </p>
        <p className="hover:text-red-200 transition-colors duration-300">
          Vasten geeft je lichaam de kans om te ontgiften en te herstellen.
          Begin klein, voel wat het met je doet, en bouw eventueel later verder op.
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
                <strong>Je leven is de spiegel van je onderbewustzijn. </strong>
                Alles wat je ervaart - problemen, successen, relaties, gebeurtenissen -
                is een reflectie van wat diep vanbinnen in je leeft.
              </p>
              <p className="hover:text-purple-200 transition-colors duration-300">
                Wanneer je herhaaldelijk dezelfde problemen tegenkomt, kijk dan niet
                naar buiten, maar naar binnen. <strong>Bijna elk probleem kan je inwendig oplossen. </strong>
              </p>
              <p className="hover:text-purple-200 transition-colors duration-300">
                Als je iets wilt bereiken en dit lukt niet hoef je niet te wachten op externe veranderingen. 
                Verander je innerlijke wereld, je zal nieuwe mogelijkheden aantrekken en nieuwe oplossingen zien.
              </p>
              <p className="hover:text-purple-200 transition-colors duration-300">
                Herprogrammeer je jezelf waar nodig. Begin met je gedachten.
                Je acties en je gewoontes zullen vanzelf veranderen als je je gedachten verandert.
                Hierdoor zullen de problemen die je ervaart verdwijnen.
              </p>
            </>
          ),
          link: { to: "/weeszot", text: "Hoe herprogrammeer je jezelf? →", color: "purple" }
        };
    }
  };

  const tipContent = getTipContent();
  const getGradientColors = () => {
    switch (pageType) {
      case 'geld': return 'from-amber-600 to-orange-600';
      case 'weeszot': return 'from-orange-600 to-yellow-600';
      case 'leven': return 'from-cyan-600 to-teal-600';
      case 'liefde': return 'from-green-600 to-emerald-600';
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
    <section id="practical-tip" className="scroll-mt-24">
    <div className={`relative bg-gradient-to-r ${getGradientColors()} rounded-3xl p-8 md:p-12 mb-12`}>
      <div className="absolute top-5 right-5 z-20">
        <Comments postId={pageType} sectionId="practical-tip"sectionTitle={tipContent.title} />
      </div>
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
    </section>
  );
};

export default PracticalTip;
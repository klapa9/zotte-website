import { useSeoMeta } from '@unhead/react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CursorStyles from '@/components/CursorStyles';
import Navigation from '@/components/Navigation';
import PracticalTip from '@/components/PracticalTip';
import AudioPlayer from '@/components/AudioPlayer';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const Energie = () => {
  const [activeWord, setActiveWord] = useState(0);
  const [showDialog, setShowDialog] = useState(false);

  useSeoMeta({
    title: 'ENERGIE - De Kracht van het Leven',
    description: 'Ontdek de verschillende vormen van energie.',
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % energyWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const energyWords = [
    { word: "Elektriciteit", description: "De stroom die ons zenuwstelsel aandrijft", color: "from-yellow-400 to-blue-600" },
    { word: "Hartslag", description: "De biologische generator van ons bestaan", color: "from-red-400 to-pink-600" },
    { word: "Ademhaling", description: "De constante energie-uitwisseling", color: "from-purple-400 to-indigo-600" },
    { word: "Celkracht", description: "De fundamentele energiebron van leven", color: "from-orange-400 to-amber-600" },
    { word: "Levenskracht", description: "De allesomvattende kracht van bestaan", color: "from-pink-400 to-rose-600" }
  ];

  return (
    <>
      <CursorStyles />
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-teal-800 to-blue-900 overflow-hidden relative">
      {/* Energy particles */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `pulse ${Math.random() * 3 + 2}s infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Energy waves */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border-2 border-white border-opacity-10"
            style={{
              width: `${200 + i * 100}%`,
              height: `${200 + i * 100}%`,
              top: `${-50 - i * 25}%`,
              left: `${-50 - i * 25}%`,
              animation: `expand ${8 + i * 2}s infinite`,
              animationDelay: `${i * 1.5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <div className="py-16 px-4 text-center">
          <h1 className="text-8xl md:text-9xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-500 to-blue-600">
            ENERGIE
          </h1>
          <p className="text-2xl md:text-3xl text-white font-bold">
            De kracht die alles beweegt
          </p>
        </div>

        {/* Main Content */}
        <div className="flex-1 px-4 pb-16">
          <div className="max-w-6xl mx-auto">
            {/* Featured Word */}
            <div className="text-center mb-20">
              <div className="inline-block">
                <h2 className={`text-6xl md:text-8xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r ${energyWords[activeWord].color} transition-all duration-1000 hover:scale-105 cursor-pointer transition-transform duration-300`}
                  onClick={() => setShowDialog(true)}
                >
                  {energyWords[activeWord].word}
                </h2>
                <p className="text-xl md:text-2xl text-white opacity-90">
                  {energyWords[activeWord].description}
                </p>
              </div>
            </div>

            {/* All Energy Words Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {energyWords.map((energy, index) => (
                <div
                  key={index}
                  className={`bg-white bg-opacity-5 backdrop-blur-md rounded-2xl p-6 border border-white border-opacity-20 transform hover:scale-105 hover:rotate-3 transition-all duration-500 cursor-pointer ${index === activeWord ? 'ring-4 ring-white ring-opacity-50' : ''}`}
                  onMouseEnter={() => setActiveWord(index)}
                  onClick={() => setShowDialog(true)}
                >
                  <h3 className={`text-3xl md:text-4xl font-black mb-3 text-transparent bg-clip-text bg-gradient-to-r ${energy.color}`}>
                    {energy.word}
                  </h3>
                  <p className="text-white text-lg">
                    {energy.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Energy Explanation */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-8 md:p-12 mb-12 transform hover:scale-105 hover:rotate-2 transition-all duration-500 cursor-pointer active:scale-95">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 hover:scale-105 hover:rotate-2 transition-all duration-300">
                We hebben een Elektrisch Lichaam
              </h2>
              <div className="space-y-4 text-white text-lg md:text-xl">
                <p className="hover:text-green-200 transition-colors duration-300 cursor-pointer">
                  <strong>Wij zijn generatoren van energie.</strong> Ons lichaam is een elektro-chemisch systeem dat constant energie genereert en gebruikt.
                  Elke hartslag, elke gedachte, elke beweging - het zijn allemaal energetische signalen.
                </p>
                <p className="hover:text-blue-200 transition-colors duration-300 cursor-pointer">
                  Energie is de <strong>communicatietaal van ons lichaam</strong>.
                  Onze zenuwen sturen elektrische pulsen met ongelofelijke snelheid - sneller dan elk computernetwerk.
                  Onze hersenen zijn een elektrisch orgaan miljarden synapsen sterk.
                </p>
                <p className="hover:text-cyan-200 transition-colors duration-300 cursor-pointer">
                  Energie stroomt door ons heen en verbindt ons met alles om ons heen.
                  We zijn niet alleen fysieke wezens, maar ook energetische wezens.
                  Door ons bewust te worden van deze energie kunnen we onze gezondheid,
                  ons welzijn, en onze levenskwaliteit drastisch verbeteren.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-400 to-blue-400 rounded-3xl p-8 md:p-12 mb-12 transform hover:scale-105 hover:rotate-2 transition-all duration-500 cursor-pointer active:scale-95">
              <h2 className="text-4xl md:text-5xl font-black text-purple-400 mb-6">
                Je geloof bepaalt je limieten.
              </h2>
              <div className="space-y-4 text-white text-lg md:text-xl">
                <p>
                  Alles waar jij in gelooft, zorgt voor jouw werkelijkheid. Als jij gelooft dat iets onmogelijk is,
                  dan zal je manieren vinden om dat te bevestigen.
                </p>
                <p>
                  Als je gelooft dat je onbegrensde energie hebt, dan zal je manieren vinden om dat te ervaren.
                  Jouw overtuigingen bepalen jouw energieniveau.
                </p>
                <p>
                  Eerst moet je beseffen dat jouw energie grenzeloos is.
                  Dan moet je handelen vanuit die overtuiging.
                </p>
              </div>
            </div>

            <PracticalTip pageType="energie" />

            {/* Energy Flow */}
          </div>
        </div>

        <AudioPlayer audioFile="/Energy2.mp3" />
        <Navigation />


      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.5); }
        }

        @keyframes expand {
          0% { transform: scale(0.8); opacity: 0.3; }
          100% { transform: scale(1.2); opacity: 0; }
        }
      `}</style>
      </div>
      {/* Law of One Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-cyan-900 to-blue-900 text-white border-2 border-cyan-400">
          <DialogHeader>
            <DialogTitle className="text-3xl md:text-4xl font-black text-cyan-400 mb-4">
              Energie
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 text-lg">
            {/* Introductie */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400 border-opacity-30">
              <h3 className="text-2xl font-black text-cyan-300 mb-3">Energie</h3>
              <p>
                Energie is de fundamentele bouwsteen van het universum. Het manifesteert zich
                in verschillende vormen zoals materie, licht, warmte, en elektromagnetisme.
                Alles wat bestaat is een vorm van energie in verschillende trillingstoestanden.
                
              </p>
            </div>

            {/* Polariteit */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-blue-400 border-opacity-30">
              <h3 className="text-2xl font-black text-blue-300 mb-3">Polariteit</h3>
              <p className="mb-4">
                Alles in het universum is één bewustzijn. Om zichzelf te ervaren,
                splitst dit bewustzijn zich op in polariteiten zoals licht en donker,
                goed en kwaad, mannelijk en vrouwelijk. Deze dualiteit is essentieel.
              </p>

              <div className="mb-4 pl-4 border-l-4 border-teal-400">
                <h4 className="text-xl font-bold text-teal-300 mb-2">Energie balans: (STO)</h4>
                <p className="mb-2">
                  Er is een positieve groeiende energie en een negatieve krimpende energie.
                  Er is altijd een balans tussen deze twee krachten.
                </p>
                <p className="mb-2">
                  Positieve energie brengt expansie, creatie, en verbinding.
                  Negatieve energie brengt introspectie, loslaten, en transformatie.
                </p>
                <p>
                  Door bewust te kiezen welke energie je voedt, kun je je ervaring
                  van het leven vormgeven.
                </p>
                
              </div>

             
            </div>

            {/* Geen Goed of Fout */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400 border-opacity-30">
              <h3 className="text-2xl font-black text-cyan-300 mb-3">Geen Goed of Fout</h3>
              <p>
                positieve en negatieve energie zijn beide noodzakelijk voor balans.
                Er is geen inherent goed of fout in energie; het is de intentie en het
                bewustzijn erachter dat betekenis geeft.
                Beide polariteiten zijn aspecten van hetzelfde geheel.
              </p>
            </div>

            {/* Liefde */}
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-6 border border-cyan-400 border-opacity-30">
              <h3 className="text-2xl font-black text-white mb-3">Liefde is de grotere stroming.</h3>
              <p className="mb-3">
                Als je mee met de stroom van liefde gaat, krijg je energie.
                Je ervaart expansie, vreugde, en verbinding. Je groeit en evolueert.
              </p>
              <p className="mb-3">
                Als je tegen de stroom in gaat, kost het je energie.
                Je ervaart weerstand, frustratie, en isolatie. Je krimpt en stagneert.
              </p>
            </div>

            {/* Sluit knop */}
            <div className="text-center pt-4">
              <Button
                onClick={() => setShowDialog(false)}
                className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Sluiten
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Energie;
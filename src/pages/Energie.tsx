import { useSeoMeta } from '@unhead/react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CursorStyles from '@/components/CursorStyles';
import Navigation from '@/components/Navigation';
import PracticalTip from '@/components/PracticalTip';
import AudioPlayer from '@/components/AudioPlayer';

const Energie = () => {
  const [activeWord, setActiveWord] = useState(0);

  useSeoMeta({
    title: 'ENERGIE - De Kracht van het Leven',
    description: 'Ontdek de verschillende vormen van energie: ECHT, NIENORMAAL, Helemaal, Rekbaar, Groeibaar, Immens, EPIC.',
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % 7);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const energyWords = [
    { word: "Elektriciteit", description: "De stroom die ons zenuwstelsel aandrijft", color: "from-yellow-400 to-blue-600" },
    { word: "Hartslag", description: "De biologische generator van ons bestaan", color: "from-red-400 to-pink-600" },
    { word: "Efficiëntie", description: "Hoe slim ons lichaam energie gebruikt", color: "from-cyan-400 to-teal-600" },
    { word: "Metabolisme", description: "De verbranding die ons in leven houdt", color: "from-green-400 to-emerald-600" },
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
                    onClick={() => window.open('https://nl.wikipedia.org/wiki/Menselijk_lichaam', '_blank')}
                >
                  {energyWords[activeWord].word}
                </h2>
                <p className="text-xl md:text-2xl text-white opacity-90">
                  {energyWords[activeWord].description}
                </p>
                <p className="text-sm text-gray-300 mt-2">
                  👆 Klik voor meer informatie over het menselijk lichaam
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
                  onClick={() => window.open('https://nl.wikipedia.org/wiki/Menselijk_lichaam', '_blank')}
                >
                  <h3 className={`text-3xl md:text-4xl font-black mb-3 text-transparent bg-clip-text bg-gradient-to-r ${energy.color}`}>
                    {energy.word}
                  </h3>
                  <p className="text-white text-lg">
                    {energy.description}
                  </p>
                  <p className="text-xs text-gray-300 mt-2">
                    👆 Klik voor informatie over het lichaam
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
                  <strong>Wij zijn epische generatoren van energie.</strong> Ons lichaam is geen biologische machine,
                  maar een elektro-chemisch systeem dat constant elektriciteit genereert en gebruikt.
                  Elke hartslag, elke gedachte, elke beweging - het zijn allemaal elektrische signalen.
                </p>
                <p className="hover:text-blue-200 transition-colors duration-300 cursor-pointer">
                  Elektriciteit is de <strong>communicatietaal van ons lichaam</strong>.
                  Onze zenuwen sturen elektrische pulsen met ongelofelijke snelheid - sneller dan elk computernetwerk.
                  Onze hersenen zijn een elektrisch orgaan miljarden synapsen sterk.
                </p>
                <p className="hover:text-cyan-200 transition-colors duration-300 cursor-pointer">
                  Efficiëntie in ons lichaam betekent <strong>slimme energie-uitwisseling</strong>.
                  Elke cel is een mini-generator. Onze longen en hart werken als natuurlijke pompen.
                  Dit is de ultieme efficiëntie - 100% natuurlijk en perfect ontworpen.
                </p>
                <p className="hover:text-indigo-200 transition-colors duration-300 cursor-pointer">
                  Ons metabolisme is de <strong>constante energie-omzetter</strong>.
                  Het zet voedsel om in bruikbare energie, warmte, en bouwstenen.
                  Dit is geen simpel proces - het is een wonder van biochemische efficiëntie.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-400 to-yellow-400 rounded-3xl p-8 md:p-12 mb-12 transform hover:scale-105 hover:rotate-2 transition-all duration-500 cursor-pointer active:scale-95">
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
    </>
  );
};

export default Energie;
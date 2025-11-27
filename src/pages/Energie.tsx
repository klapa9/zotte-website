import { useSeoMeta } from '@unhead/react';
import { useState, useEffect } from 'react';

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
    { word: "ECHT", description: "Authentieke energie die van binnenuit komt", color: "from-green-400 to-emerald-600" },
    { word: "NIENORMAAL", description: "Energie die alle grenzen doorbreekt", color: "from-purple-400 to-pink-600" },
    { word: "Helemaal", description: "Volledige, ongedeelde energie", color: "from-blue-400 to-cyan-600" },
    { word: "Rekbaar", description: "Energie die meebeweegt en aanpast", color: "from-orange-400 to-red-600" },
    { word: "Groeibaar", description: "Energie die zich constant ontwikkelt", color: "from-teal-400 to-green-600" },
    { word: "Immens", description: "Energie zonder grenzen of limieten", color: "from-indigo-400 to-purple-600" },
    { word: "EPIC", description: "Energie die legendarisch is", color: "from-yellow-400 to-orange-600" }
  ];

  return (
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
                <h2 className={`text-6xl md:text-8xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r ${energyWords[activeWord].color} transition-all duration-1000`}>
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
                  className={`bg-white bg-opacity-5 backdrop-blur-md rounded-2xl p-6 border border-white border-opacity-20 transform hover:scale-105 transition-all duration-500 cursor-pointer ${index === activeWord ? 'ring-4 ring-white ring-opacity-50' : ''}`}
                  onMouseEnter={() => setActiveWord(index)}
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
                Wat is Energie?
              </h2>
              <div className="space-y-4 text-white text-lg md:text-xl">
                <p className="hover:text-green-200 transition-colors duration-300 cursor-pointer">
                  Energie is niet zomaar een woord. Het is de essentie van het leven zelf.
                  Het is wat je voelt wanneer je iets doet waar je gepassioneerd over bent.
                  Het is de vonk die ideeën tot leven wekt.
                </p>
                <p className="hover:text-blue-200 transition-colors duration-300 cursor-pointer">
                  ECHT energie is authentiek. Het komt niet van buitenaf, maar van binnenuit.
                  Het is de energie van wie je werkelijk bent, zonder maskers, zonder pretenties.
                </p>
                <p className="hover:text-cyan-200 transition-colors duration-300 cursor-pointer">
                  NIENORMAAL energie doorbreekt alle conventies. Het is de energie van vernieuwing,
                  van revolutie, van het onmogelijke mogelijk maken.
                </p>
                <p className="hover:text-indigo-200 transition-colors duration-300 cursor-pointer">
                  En EPIC energie? Dat is de energie die verhalen schrijft.
                  Die herinneringen creëert die een leven lang meegaan.
                  Die anderen inspireert om ook groot te dromen.
                </p>
              </div>
            </div>

            {/* Energy Flow */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-black bg-opacity-30 backdrop-blur-md rounded-3xl p-8 border border-teal-400 border-opacity-30">
                <h3 className="text-3xl font-black text-teal-400 mb-4">
                  Energie Stroomt
                </h3>
                <p className="text-white text-lg">
                  Energie is nooit statisch. Het beweegt, het stroomt, het transformeert.
                  Vandaag ben je vol van de ene energie, morgen van een andere.
                  En dat is oké. Dat is het leven.
                </p>
              </div>

              <div className="bg-black bg-opacity-30 backdrop-blur-md rounded-3xl p-8 border border-blue-400 border-opacity-30">
                <h3 className="text-3xl font-black text-blue-400 mb-4">
                  Energie Verbindt
                </h3>
                <p className="text-white text-lg">
                  Wanneer je jouw energie deelt met anderen, gebeurt er magie.
                  Energie vermenigvuldigt zichzelf. Het creëert iets groters dan de som der delen.
                  Dat is de kracht van gemeenschap.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="py-8 px-4 text-center">
          <a href="https://zottewebsite.be" className="text-white text-lg hover:text-green-400 transition-colors duration-300 transform hover:scale-110 hover:rotate-2 active:scale-95 inline-block">
            ← Terug naar de gekke homepage
          </a>
        </div>
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
  );
};

export default Energie;
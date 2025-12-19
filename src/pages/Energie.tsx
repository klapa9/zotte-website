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
  { 
    word: "Polariteit", 
    description: "De tweeledige beweging waardoor bewustzijn zichzelf ervaart", 
    color: "from-blue-400 to-indigo-600" 
  },
  { 
    word: "Balans", 
    description: "Het natuurlijke evenwicht binnen energie", 
    color: "from-teal-400 to-cyan-600" 
  },
  { 
    word: "Bewustzijn", 
    description: "De onderliggende eenheid die alle ervaring doordringt", 
    color: "from-purple-400 to-fuchsia-600" 
  },
  { 
    word: "Liefde", 
    description: "De grotere stroming die alles verbindt en laat groeien", 
    color: "from-pink-400 to-red-600" 
  },
  { 
    word: "Transformatie", 
    description: "Het proces van verandering, loslaten en innerlijke verschuiving", 
    color: "from-amber-400 to-orange-600" 
  },
  { 
    word: "Expansie", 
    description: "De beweging van groei, creatie en verruiming van energie", 
    color: "from-green-400 to-emerald-600" 
  }
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
                <h2 className={`text-6xl md:text-8xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r ${energyWords[activeWord].color} transition-all duration-1000 hover:scale-105 transition-transform duration-300`}
                  onClick={() => setShowDialog(true)}
                >
                  {energyWords[activeWord].word}
                </h2>
                <p className="text-xl md:text-2xl text-white opacity-90">
                  {energyWords[activeWord].description}
                </p>
              </div>
            </div>

            

            {/* Energy Explanation */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-8 md:p-12 mb-12 transform hover:scale-105 hover:rotate-2 transition-all duration-500 active:scale-95">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 hover:scale-105 hover:rotate-2 transition-all duration-300">
                Alles is Energie en Frequentie
              </h2>
              <div className="space-y-4 text-white text-lg md:text-xl">
                <p className="hover:text-green-200 transition-colors duration-300">
                  <strong>Alles wat bestaat is energie in beweging.</strong>
                  Bewustzijn, lichaam en ziel zijn geen vaste vormen, maar dynamische energievelden die voortdurend trillen op een bepaalde frequentie.
                </p>

                <p className="hover:text-cyan-200 transition-colors duration-300">
                  Frequentie bepaalt ervaring:
                  Een lage, geblokkeerde frequentie wordt ervaren als zwaarte, weerstand of vermoeidheid.
                  Een hoge, coherente frequentie wordt ervaren als helderheid, vitaliteit en verbinding.
                </p>

                <p className="hover:text-teal-200 transition-colors duration-300">
                  Door bewust te worden van je innerlijke staat,
                  verander je automatisch de frequentie waarop je lichaam en bewustzijn functioneren.
                  Praktijken zoals meditatie, ademhaling, beweging en liefdevolle verbinding verhogen je frequentie,
                  waardoor energie vrijer kan stromen.
                </p>
                <Button
                      onClick={() => setShowDialog(true)}
                      className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      ✨ Frequentie
                </Button>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-400 to-blue-400 rounded-3xl p-8 md:p-12 mb-12 transform hover:scale-105 hover:rotate-2 transition-all duration-500 active:scale-95">
              <h2 className="text-4xl md:text-5xl font-black text-purple-600 mb-6">
                Zoek Energetische Balans
              </h2>
              <div className="space-y-4 text-white text-lg md:text-xl">
                <p>
                  Energie beweegt altijd tussen twee polen.
                  Actie en rust, expansie en contractie, geven en ontvangen.
                  Deze polariteit is essentieel voor het leven zelf.
                </p>

                <p>
                  Praktisch betekent dit:
                  Leer luisteren naar je lichaam en emoties om te voelen waar energie vastzit.
                  Zoek activiteiten die je energie geven in plaats van kosten.
                  Creëer ritmes van inspanning en ontspanning om balans te behouden.
                
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
      {/* Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-cyan-900 to-blue-900 text-white border-2 border-cyan-400">
          <DialogHeader>
            <DialogTitle className="text-3xl md:text-4xl font-black text-cyan-400 mb-4">
              Frequentie van Bewustzijn
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 text-lg">

            {/* Introductie */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400 border-opacity-30">
              <h3 className="text-2xl font-black text-cyan-300 mb-3">
                Het bewustzijn kan ervaren worden als verschillende frequentiebanden of densiteiten.
              </h3>
              <p>
                De realiteit bestaat uit opeenvolgende densiteiten van bewustzijn.
                Elke densiteit vertegenwoordigt een specifieke trilling, ervaringsvorm en mate van zelfbewustzijn.
                Hogere densiteiten zijn minder fysiek en meer bewustzijnsgericht, lagere densiteiten zijn compacter en meer materieel.
              </p>
            </div>

            {/* Polariteit / Overzicht densiteiten */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-blue-400 border-opacity-30">
              <h3 className="text-2xl font-black text-blue-300 mb-3">
                De Opeenvolging van Densiteiten
              </h3>
              <p className="mb-4">
                Bewustzijn ontwikkelt zich stap voor stap.
                Elke densiteit bouwt voort op de vorige en bereidt voor op de volgende.
              </p>

              <div className="mb-4 pl-4 border-l-4 border-teal-400">
                <h4 className="text-xl font-bold text-teal-300 mb-2">
                  Overzicht
                </h4>
                <p className="mb-2">
                  <strong>1e densiteit:</strong> elementair bewustzijn: aarde, water, vuur, lucht.
                  Bestaan zonder zelfbesef.
                </p>
                <p className="mb-2">
                  <strong>2e densiteit:</strong> groeiend leven: planten en dieren.
                  Bewustzijn ontwikkelt beweging en instinct.
                </p>
                <p className="mb-2">
                  <strong>3e densiteit:</strong> zelfbewustzijn: de mens.
                  Keuze, identiteit en morele richting ontstaan.
                </p>
                <p className="mb-2">
                  <strong>4e densiteit:</strong> hartbewustzijn.
                  Collectieve verbinding, empathie en transparantie.
                </p>
                <p className="mb-2">
                  <strong>5e densiteit:</strong> wijsheid en inzicht.
                  Individualiteit zonder afscheiding.
                </p>
                <p>
                  <strong>6e densiteit:</strong> eenheid van liefde en wijsheid.
                  Integratie van alle tegenstellingen.
                </p>
              </div>
            </div>

            {/* Geen Goed of Fout / Polariteit */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400 border-opacity-30">
              <h3 className="text-2xl font-black text-cyan-300 mb-3">
                Onze Densiteit
              </h3>
              <p>
                We bevinden ons in de 3e densiteit, gekenmerkt door zelfbewustzijn en keuzevrijheid.
                Hier ervaren we dualiteit: goed en kwaad, licht en donker, ik en jij.
              </p>
              <p>
                Deze polariteit is essentieel voor groei.
                Het daagt ons uit om bewust te kiezen wie we willen zijn en hoe we met anderen omgaan.
              </p>
              <p>
                We zijn momenteel bezig met de overgang naar de 4e densiteit, waar verbinding en liefde centraal staan.
                Dit proces vereist het loslaten van oude patronen en het omarmen van eenheid.
              </p>
            </div>

            {/* Liefde / Evolutie */}
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-6 border border-cyan-400 border-opacity-30">
              <h3 className="text-2xl font-black text-white mb-3">
                Evolutie richting Eenheid
              </h3>
              <p className="mb-3">
                Naarmate bewustzijn evolueert, vervaagt polariteit geleidelijk.
                Hogere densiteiten integreren dualiteit in eenheid.
              </p>
              <p className="mb-3">
                Uiteindelijk keert bewustzijn terug naar volledige eenheid,
                verrijkt door alle ervaringen die in afzondering zijn opgedaan.
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
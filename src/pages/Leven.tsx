import { useSeoMeta } from '@unhead/react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CursorStyles from '@/components/CursorStyles';
import Navigation from '@/components/Navigation';
import PracticalTip from '@/components/PracticalTip';
import AudioPlayer from '@/components/AudioPlayer';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const Leven = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showDialog, setShowDialog] = useState(false);
  const [showDialog2, setShowDialog2] = useState(false);

  useSeoMeta({
    title: 'L E V E N - De Grote Vragen',
    description: 'Verken de fundamentele vragen van het leven: waarom leef je, wat is belangrijk, hoe kan je beter leven?',
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);


  return (
    <>
      <CursorStyles />
      <AudioPlayer pageType="leven" />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-800 overflow-hidden relative">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              background: `linear-gradient(45deg, hsl(${Math.random() * 60 + 200}, 70%, 60%), hsl(${Math.random() * 60 + 180}, 70%, 60%))`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              clipPath: Math.random() > 0.5 ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
              animation: `float ${Math.random() * 10 + 10}s infinite linear`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <div className="py-16 px-4 text-center">
          <h1 className="text-7xl md:text-9xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">
            L E V E N
          </h1>
          <p className="text-2xl md:text-3xl text-white font-bold">
            Het leven is prachtig!
          </p>
        </div>

        {/* Main Content */}
        <div className="flex-1 px-4 pb-16">
          <div className="max-w-6xl mx-auto space-y-20">
            {/* God? */}
            <div className="bg-white bg-opacity-5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-cyan-400 border-opacity-30 transform hover:scale-105 transition-all duration-500">
              <h2 className="text-4xl md:text-5xl font-black text-cyan-400 mb-6">
                G O D
              </h2>
              <div className="space-y-4 text-white text-lg md:text-xl">
                <p>
                  Er is 1 oneindig bewustzijn die alles ervaart. Dit heeft vele namen: God, Allah, het Universum, de Bron, Brahmana, Tao...
                  Het is de schepper en de schepping. Het is alles wat is, was en zal zijn.
                </p>
                <p>
                  Wij zijn een deel van dat bewustzijn.
                  We zijn oneindige wezens die een fysieke ervaring aangaan op deze planeet.
                  We zijn hier om te groeien, te ervaren en te leren.
                </p>
                <p>
                  Jouw reden om te leven is uniek. Het is jouw persoonlijke missie.
                  Ontdek wat jou drijft. Wat jou gelukkig maakt.
                  En leef daarnaar. We zijn hier met een reden.
                </p>
                
              </div>
            </div>

            {/* De Evolutionaire Reis van God */}
            <div className="bg-black bg-opacity-40 backdrop-blur-md rounded-3xl p-8 md:p-12 mb-12 border border-blue-400 border-opacity-30 transform hover:-rotate-1 transition-all duration-500">
              <h2 className="text-4xl md:text-5xl font-black text-blue-400 mb-6">
                De Evolutionaire Reis van God
              </h2>
              <div className="space-y-4 text-white text-lg md:text-xl">
                <p>
                  De evolutionaire reis die God onderneemt, begint met zichzelf te splitsen in
                  talloze zielen die afzonderlijke ervaringen opdoen. Elke ziel kiest een pad
                  van groei en bewustzijnsontwikkeling.
                </p>
                <p>
                  Een belangrijke stap is vergeten wie hij werkelijk is.
                  Dit stelt de ziel in staat om volledig op te gaan in haar ervaringen
                  zonder de beperkingen van haar ware aard.
                </p>
                <p>
                  uiteindelijk zal elke ziel terugkeren tot een geheel, verrijkt met de lessen
                  en ervaringen die zij heeft opgedaan.
                </p>
                <div className="mt-6">
                  <Button
                      onClick={() => setShowDialog(true)}
                      className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      ✨ De wet van éénheid
                    </Button>
                  </div>
              </div>
            </div>

            {/* Energie en beweging */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-8 md:p-12 mb-12 transform hover:scale-105 hover:rotate-2 transition-all duration-500 active:scale-95">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 hover:scale-105 hover:rotate-2 transition-all duration-300">
                Alles is energie in beweging.
              </h2>
              <div className="space-y-4 text-white text-lg md:text-xl">
                <p className="hover:text-green-200 transition-colors duration-300">
                  Er bestaan geen vaste vormen. Er zijn alleen dynamische energievelden die voortdurend trillen op een bepaalde frequentie.
                </p>

                <p className="hover:text-cyan-200 transition-colors duration-300">
                  Alles in het universum is in beweging, van de kleinste deeltjes tot de grootste structuren.
                  De frequentie van de beweging bepaalt hoe bewustzijn de realiteit ervaart.
                  Een lage frequentie wordt ervaren als zwaarte, materieel, eindig,..
                  Een hoge frequentie wordt ervaren als immaterieel, licht, oneindig,..
                </p>
                <p>
                  Het verhogen van frequentie wordt gezien als spirituele evolutie.
                  Als we onze frequentie verhogen, openen we ons voor hogere niveaus van bewustzijn en ervaring.
                  Dit stelt ons in staat om dieper contact te maken met ons ware zelf en met het universum.                 
                </p>

                
                <Button
                      onClick={() => setShowDialog2(true)}
                      className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      ✨ Spirituele evolutie
                </Button>
              </div>
            </div>

            
            

            

            <PracticalTip pageType="leven" />

            {/* Integration Section */}
            <div className="text-center py-12">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl p-8 md:p-12 transform hover:scale-105 hover:rotate-3 transition-all duration-500 active:scale-95">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 hover:scale-105 hover:rotate-2 transition-all duration-300">
                  We zijn een deel van God
                </h2>
                <p className="text-white text-lg md:text-xl">
                  Allemaal verbonden.
                </p>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 hover:scale-105 hover:rotate-2 transition-all duration-300">
                  We zijn hier met een reden!
                </h2>
              </div>
            </div>
          </div>
        </div>

        <Navigation />
        


      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-50px) rotate(180deg); }
          100% { transform: translateY(0px) rotate(360deg); }
        }
      `}</style>
      </div>
      
      
     {/* Dialog */}
      <Dialog open={showDialog2} onOpenChange={setShowDialog2}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-cyan-900 to-blue-900 text-white border-2 border-cyan-400">
          <DialogHeader>
            <DialogTitle className="text-3xl md:text-4xl font-black text-cyan-400 mb-4">
              Frequenties van Bewustzijn
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
                onClick={() => setShowDialog2(false)}
                className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Sluiten
              </Button>
            </div>

          </div>
        </DialogContent>
      </Dialog>

      {/* De wet van éénheid */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-cyan-900 to-blue-900 text-white border-2 border-cyan-400">
          <DialogHeader>
            <DialogTitle className="text-3xl md:text-4xl font-black text-cyan-400 mb-4">
              De wet van éénheid
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 text-lg">

            {/* Introductie */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400 border-opacity-30">
              <h3 className="text-2xl font-black text-cyan-300 mb-3">De wet van éénheid</h3>
              <p>
                Alles in het universum is één bewustzijn.
              </p>
              <p className="mt-3">
                Deze Eenheid is de onderliggende structuur van alle ervaring. Alles wat wij als gescheiden zien,
                zijn verschillende uitdrukkingen van dezelfde Oneindige Bron.
              </p>
            </div>

            
            {/* Toepassing op het dagelijkse leven */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400 border-opacity-30">
              <h3 className="text-2xl font-black text-cyan-300 mb-3">Wat betekent dit voor jou?</h3>
              <p className="mb-3">
                Als alles één is, dan is alles wat je anderen aandoet ook iets dat je
                uiteindelijk aan jezelf doet. Elke keuze, elke gedachte, elke interactie is
                een vorm van zelfontdekking.
              </p>
              <p className="mb-3">
                Dit betekent dat door anderen te helpen, je ook jezelf helpt.
                Door liefde en compassie te tonen, vergroot je ook jouw eigen ervaring van liefde.
                Door bewust te kiezen voor positiviteit, verhoog je ook jouw eigen vibratie.
              </p>
              <p>
                Jouw acties hebben een ripple-effect dat verder reikt dan je kunt zien.
                Wat je aan de wereld geeft, komt uiteindelijk bij jou terug.
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

export default Leven;
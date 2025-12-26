import { useSeoMeta } from '@unhead/react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CursorStyles from '@/components/CursorStyles';
import Navigation from '@/components/Navigation';
import PracticalTip from '@/components/PracticalTip';
import AudioPlayer from '@/components/AudioPlayer';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const Liefde = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [showDialog2, setShowDialog2] = useState(false);

  useSeoMeta({
    title: 'Liefde - De Kracht van het Leven',
    description: 'Hou van anderen als jezelf',
  });

  

  
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
            Liefde
          </h1>
          <p className="text-2xl md:text-3xl text-white font-bold">
            De kracht die alles beweegt
          </p>
        </div>

        {/* Main Content */}
        <div className="flex-1 px-4 pb-16">
          <div className="max-w-6xl mx-auto">
            
                        

            {/* We zijn één */}
            <div className="bg-black bg-opacity-40 backdrop-blur-md rounded-3xl p-8 md:p-12 mb-12 border border-blue-400 border-opacity-30 transform hover:-rotate-1 transition-all duration-500">
              <h2 className="text-4xl md:text-5xl font-black text-blue-400 mb-6">
                We zijn één
              </h2>
              <div className="space-y-4 text-white text-lg md:text-xl">
                <p>
                  De limieten die je ervaart zijn illusies die je uitdagen om te groeien.
                  We bepalen samen de realiteit die we ervaren.
                  We zijn in staat om onze werkelijkheid te veranderen door onze keuzes en intenties.
                  Waar we in geloven, creëeren we.
                </p>
                <p>
                  De grootste illusie waar we momenteel in geloven is dat we afgescheiden zijn van elkaar en van het universum.
                  Dat we alleen zijn.
                  Dit is niet waar.
                </p>
                <p className="mb-3">
                  Naarmate bewustzijn evolueert, vervaagt polariteit geleidelijk.
                  Hoger bewustzijn integreert dualiteit in eenheid.
                </p>
                <p className="mb-3">
                  Uiteindelijk keert bewustzijn terug naar volledige eenheid,
                  verrijkt door alle ervaringen die in afzondering zijn opgedaan.
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

            <div className="bg-gradient-to-r from-green-400 to-blue-400 rounded-3xl p-8 md:p-12 mb-12 transform hover:scale-105 hover:rotate-2 transition-all duration-500 active:scale-95">
              <h2 className="text-4xl md:text-5xl font-black text-purple-600 mb-6">
                Verander je frequentie.
              </h2>
              <div className="space-y-4 text-white text-lg md:text-xl">
                <p className="hover:text-teal-200 transition-colors duration-300">
                  Door bewust te worden van je innerlijke staat,
                  verander je automatisch de frequentie waarop je lichaam en bewustzijn functioneren.
                  Praktijken zoals meditatie, ademhaling, beweging en liefdevolle verbinding veranderen je frequentie,
                  waardoor je meer in lijn komt met de stroom van het leven.
                </p>
                <p className="hover:text-teal-200 transition-colors duration-300">
                  Handel liefdevol tegenover jezelf.
                  Op die manier verhoog je jouw frequentie
                  en die van de wereld rondom jou.
                </p>
                <p className="hover:text-teal-200 transition-colors duration-300">
                  Handel tegenover elke mens, dier en plant met liefde.
                  Alsof je handelt tegenover jezelf.
                </p>
                <Button
                      onClick={() => setShowDialog2(true)}
                      className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      ✨ De boodschap van Liefde
                </Button>
                
              </div>
            </div>

            

            <PracticalTip pageType="liefde" />

            {/* Energy Flow */}
          </div>
        </div>

        <AudioPlayer pageType="liefde" />
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

      
      {/* Dialog2 */}
      <Dialog open={showDialog2} onOpenChange={setShowDialog2}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-cyan-900 to-blue-900 text-white border-2 border-cyan-400">
          <DialogHeader>
            <DialogTitle className="text-3xl md:text-4xl font-black text-cyan-400 mb-4">
              De boodschap van Liefde
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 text-lg">

            {/* Introductie */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400 border-opacity-30">
              <h3 className="text-2xl font-black text-cyan-300 mb-3">
                De boodschap van Liefde is "Heb anderen lief zoals jezelf".
              </h3>
              <p>
                Jezus Christus bracht deze boodschap van Liefde als de hoogste wet.
                Het betekent dat we anderen behandelen met dezelfde zorg, respect en compassie als we voor onszelf wensen.
                Het betekent ook het erkennen van de goddelijkheid in ieder leven,
                omdat we allemaal deel uitmaken van hetzelfde universele bewustzijn.
              </p>
            </div>

            {/* Dankbaarheid en vergeving */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-blue-400 border-opacity-30">
              <h3 className="text-2xl font-black text-blue-300 mb-3">
                Dankbaarheid en Vergeving
              </h3>
              <p className="mb-4">
                Dankbaarheid en vergeving voor onszelf en anderen zijn fundamentele aspecten van liefdevol leven.
                Door dankbaar te zijn, verhogen we onze frequentie en openen we ons hart.
                Vergeving bevrijdt ons van wrok en pijn, waardoor we in vrede kunnen leven.
              </p>
              <p>
                Dit is dan ook door Jezus benadrukt als essentieel voor spirituele groei en harmonie.
              </p>
            </div>
                     
            
            {/* Liefde / Evolutie */}
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-6 border border-cyan-400 border-opacity-30">
              <h3 className="text-2xl font-black text-white mb-3">
                Liefde is de sleutel tot transformatie.
              </h3>
              <p className="mb-3">
                Op dit moment van wereldwijde verandering is het essentieel om de kracht van Liefde te omarmen.
                Door liefdevol te handelen, verhogen we onze eigen frequentie en dragen we bij aan de collectieve verschuiving naar eenheid en harmonie.
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


    </>
  );
};

export default Liefde;
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
  const [showDialog, setShowDialog] = useState(false);

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

            {/* De Evolutionaire Reis van God */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 transform hover:rotate-1 transition-all duration-500">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
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
                
                <Button
                  onClick={() => setShowDialog(true)}
                  className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  ✨Een keuze met betekenis!
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

       

      {/* Law of One Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-cyan-900 to-blue-900 text-white border-2 border-cyan-400">
          <DialogHeader>
            <DialogTitle className="text-3xl md:text-4xl font-black text-cyan-400 mb-4">
              De keuze van je evolutionaire pad
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 text-lg">
            {/* Introductie */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400 border-opacity-30">
              <h3 className="text-2xl font-black text-cyan-300 mb-3">De evolutionaire reis van God</h3>
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
            </div>

            {/* De Twee Paden */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-blue-400 border-opacity-30">
              <h3 className="text-2xl font-black text-blue-300 mb-3">Twee Evolutionaire Paden</h3>
              <p className="mb-4">
                We zijn op een punt in onze spirituele evolutie waar we
                een keuze kunnen maken tussen twee fundamentele paden:
                Service to Others (STO) en Service to Self (STS).
              </p>

              {/* Service to Others */}
              <div className="mb-4 pl-4 border-l-4 border-teal-400">
                <h4 className="text-xl font-bold text-teal-300 mb-2">Service to Others (STO)</h4>
                <p className="mb-2">
                  Het STO-pad is gericht op liefde, samenwerking en het verhogen
                  van het welzijn van anderen. Een ziel volgt dit pad wanneer
                  zij meer dan 51% van haar intentie wijdt aan het dienen van anderen.
                </p>
                <ul className="list-disc list-inside space-y-1 text-teal-200">
                  <li>Liefde en compassie als drijfveer</li>
                  <li>Samenwerking en harmonie</li>
                  <li>Welzijn van anderen verhogen</li>
                  <li>Intentie gericht op dienstbaarheid (meer dan 51%)</li>
                </ul>
              </div>

              {/* Service to Self */}
              <div className="pl-4 border-l-4 border-purple-400">
                <h4 className="text-xl font-bold text-purple-300 mb-2">Service to Self (STS)</h4>
                <p className="mb-2">
                  Het STS-pad draait om macht, controle en zelfverheffing.
                  Een ziel kiest dit pad wanneer zij meer dan 95% van haar energie
                  richt op het dienen van zichzelf.
                </p>
                <ul className="list-disc list-inside space-y-1 text-purple-200">
                  <li>Macht en controle als focus</li>
                  <li>Zelfverheffing en autonomie</li>
                  <li>Persoonlijke krachtontwikkeling</li>
                  <li>Energie gericht op zelf (meer dan 95%)</li>
                </ul>
              </div>
            </div>

            {/* Geen Goed of Fout */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400 border-opacity-30">
              <h3 className="text-2xl font-black text-cyan-300 mb-3">Geen Goed of Fout</h3>
              <p>
                Beide paden zijn volwaardige en legitieme routes van
                spirituele vooruitgang. Elk pad biedt unieke lessen en
                leidt uiteindelijk naar dezelfde bron. Er is geen moreel
                oordeel - beide zijn geldige keuzes voor bewustzijnsontwikkeling.
              </p>
              <p>
                Hier op aarde is de meerderheid van zielen bezig met het STO-pad,
                wat leidt tot meer liefde en samenwerking. Echter, er zijn ook
                zielen die het STS-pad volgen, wat uitdagingen en conflicten
                kan veroorzaken.
              </p>
            </div>

            {/* De Keuze */}
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-6 border border-cyan-400 border-opacity-30">
              <h3 className="text-2xl font-black text-white mb-3">Je moet nog niet kiezen</h3>
              <p className="mb-3">
                Je kan ook nog niet kiezen. Veel zielen hebben nog niet gekozen.
                Het is een proces van zelfontdekking en groei.
                Uiteindelijk zal iedereen een duidelijke keuze maken.
              </p>
              <p className="mb-3">
                Hoe duidelijker jouw keuze en overeenkomstige acties
                hoe sneller je spiritueel groeit.
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
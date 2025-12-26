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
  const [showLawOfOneDialog, setShowLawOfOneDialog] = useState(false);
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

            {/* Wat is belangrijk? */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 transform hover:rotate-1 transition-all duration-500">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Wat is belangrijk?
              </h2>
              <div className="space-y-4 text-white text-lg md:text-xl">
                <p>
                  Wie je bent of wilt zijn, hangt af van de keuzes die je maakt.
                  Als je een leven wilt leiden dat betekenisvol is, moet je bewust kiezen wat belangrijk voor je is:
                </p>
                <p>
                  Je kunt kiezen om een leven te leiden dat gericht is op het dienen van anderen,
                  door liefde, compassie en samenwerking te bevorderen.
                  Of je kunt kiezen voor een pad dat gericht is op het dienen van jezelf,
                  door macht, controle en zelfverheffing na te streven.
                </p>
                <p>
                  Wat je ook kiest, zorg dat het resoneert met jouw diepste waarden.
                  Dat het jou energie geeft. Dat het jou motiveert om elke dag
                  het beste uit jezelf te halen.
                </p>
                
                <Button
                  onClick={() => setShowLawOfOneDialog(true)}
                  className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  ✨Een keuze met betekenis!
                </Button>

              </div>
            </div>
            {/* Energie en beweging */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-8 md:p-12 mb-12 transform hover:scale-105 hover:rotate-2 transition-all duration-500 active:scale-95">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 hover:scale-105 hover:rotate-2 transition-all duration-300">
                Alles wat bestaat is energie in beweging.
              </h2>
              <div className="space-y-4 text-white text-lg md:text-xl">
                <p className="hover:text-green-200 transition-colors duration-300">
                  Bewustzijn, lichaam en ziel zijn geen vaste vormen, maar dynamische energievelden die voortdurend trillen op een bepaalde frequentie.
                </p>

                <p className="hover:text-cyan-200 transition-colors duration-300">
                  Frequentie bepaalt ervaring:
                  Een lage, geblokkeerde frequentie wordt ervaren als zwaarte, weerstand of vermoeidheid.
                  Een hoge, coherente frequentie wordt ervaren als helderheid, vitaliteit en verbinding.
                </p>
                <p>
                  Liefde is de energie die resoneert met alles wat leeft.
                </p>

                
                <Button
                      onClick={() => setShowDialog2(true)}
                      className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      ✨ Frequentie
                </Button>
              </div>
            </div>

            

            <PracticalTip pageType="leven" />

            {/* Integration Section */}
            <div className="text-center py-12">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl p-8 md:p-12 transform hover:scale-105 hover:rotate-3 transition-all duration-500 active:scale-95">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 hover:scale-105 hover:rotate-2 transition-all duration-300">
                  Jouw Leven, Jouw Keuze
                </h2>
                <p className="text-white text-lg md:text-xl">
                  Wij zijn de scheppers van onze eigen realiteit.
                </p>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 hover:scale-105 hover:rotate-2 transition-all duration-300">
                  Geloof in je kracht om je leven te vormen.
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
      {/* Law of One Dialog */}
      <Dialog open={showLawOfOneDialog} onOpenChange={setShowLawOfOneDialog}>
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
                onClick={() => setShowLawOfOneDialog(false)}
                className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Sluiten
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      
     {/* Dialog */}
      <Dialog open={showDialog2} onOpenChange={setShowDialog2}>
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

export default Leven;
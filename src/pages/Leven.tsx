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

  useSeoMeta({
    title: 'Leven - De Fundamentele Vragen',
    description: 'Waarom leef je? Wat is echt belangrijk? Hoe kan je beter leven?',
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const calculateParallax = (x: number, y: number, depth: number) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const moveX = ((x - centerX) / centerX) * depth;
    const moveY = ((y - centerY) / centerY) * depth;
    return { moveX, moveY };
  };

  return (
    <>
      <CursorStyles />
      <AudioPlayer pageType="leven" />
      <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-800 to-purple-700 overflow-hidden relative">
        {/* Animated background */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full mix-blend-screen opacity-15 animate-pulse"
              style={{
                width: `${Math.random() * 400 + 100}px`,
                height: `${Math.random() * 400 + 100}px`,
                background: `hsl(${Math.random() * 60 + 180}, 70%, 60%)`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 8 + 4}s`,
                animationDelay: `${Math.random() * 3}s`,
                transform: `translate(${calculateParallax(mousePosition.x, mousePosition.y, 20).moveX}px, ${calculateParallax(mousePosition.x, mousePosition.y, 20).moveY}px)`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 min-h-screen flex flex-col">
          {/* Header */}
          <div className="py-16 px-4 text-center">
            <h1 className="text-6xl md:text-8xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse">
              L E V E N ?
            </h1>
            <p className="text-2xl md:text-3xl text-white font-bold mb-4">
              De fundamentele vragen van het bestaan
            </p>
          </div>

          {/* Content Sections */}
          <div className="flex-1 px-4 pb-16">
            <div className="max-w-6xl mx-auto space-y-16">
              {/* Waarom Leven Section */}
              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white border-opacity-20 relative">
                <h2 className="text-4xl md:text-5xl font-black text-cyan-400 mb-6">
                  Waarom Leef Je?
                </h2>
                <div className="space-y-4 text-white text-lg md:text-xl">
                  <p>
                    De meest fundamentele vraag die je jezelf kunt stellen.
                    Niet wat je doet, of hoe je het doet - maar waarom.
                    Waarom ben je hier? Wat is jouw doel?
                  </p>
                  <p>
                    Zonder een duidelijk 'waarom' drijf je maar wat rond.
                    Met een krachtig 'waarom' krijgt elke actie betekenis.
                    Je leven wordt een missie in plaats van een reeks willekeurige gebeurtenissen.
                  </p>
                  <div className="mt-6">
                    <Button
                      onClick={() => setShowLawOfOneDialog(true)}
                      className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      ✨ Je hebt een keuze!
                    </Button>
                  </div>
                </div>
              </div>

              {/* Wat is Belangrijk Section */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                  Wat is Echt Belangrijk?
                </h2>
                <div className="space-y-4 text-white text-lg md:text-xl">
                  <p>
                    We denken vaak dat geld, status, of bezittingen belangrijk zijn.
                    Maar op je sterfbed denk je daar niet aan. Je denkt aan liefde,
                    aan betekenisvolle momenten, aan de mensen die je hebt geraakt.
                  </p>
                  <p>
                    Wat is echt belangrijk? Relaties. Groei. Bijdragen aan iets
                    groter dan jezelf. Het creëren van mooie herinneringen.
                    Het leven van je waarden.
                  </p>
                  <p>
                    Focus op wat blijft wanneer alles wegvalt.
                    Dat is wat echt belangrijk is.
                  </p>
                </div>
              </div>

              {/* Hoe Beter Leven Section */}
              <div className="bg-black bg-opacity-30 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white border-opacity-20">
                <h2 className="text-4xl md:text-5xl font-black text-purple-400 mb-6">
                  Hoe Kan Je Beter Leven?
                </h2>
                <div className="space-y-4 text-white text-lg md:text-xl">
                  <p>
                    De sleutel tot beter leven is simpel: alignment.
                    Zorg dat je gedachten, woorden en daden in lijn zijn
                    met je waarden en je 'waarom'.
                  </p>
                  <p>
                    Elimineer wat je energie zuigt. Voeg toe wat je energie geeft.
                    Omring jezelf met mensen die je naar boven trekken.
                    Doe dagelijks iets dat bijdraagt aan je grote doel.
                  </p>
                  <p>
                    Beter leven is niet complex. Het vereist alleen moed
                    om eerlijk naar jezelf te kijken en keuzes te maken
                    die overeenkomen met wie je werkelijk wilt zijn.
                  </p>
                </div>
              </div>

              <PracticalTip pageType="leven" />

              {/* Call to Action */}
              <div className="text-center py-12">
                <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                  Begin Vandaag
                </h2>
                <p className="text-xl md:text-2xl text-white font-light mb-8">
                  Je hebt maar één leven - maak er iets moois van
                </p>
                <div className="inline-block">
                  <p className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                    LEEF BEWUST!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Navigation />
        </div>
      </div>

      {/* Law of One Dialog */}
      <Dialog open={showLawOfOneDialog} onOpenChange={setShowLawOfOneDialog}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-cyan-900 to-blue-900 text-white border-2 border-cyan-400">
          <DialogHeader>
            <DialogTitle className="text-3xl md:text-4xl font-black text-cyan-400 mb-4">
              De Wet van Eénheid
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 text-lg">
            {/* Introductie */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400 border-opacity-30">
              <h3 className="text-2xl font-black text-cyan-300 mb-3">Alles is Één Bewustzijn</h3>
              <p>
                Alles in het universum is één bewustzijn. Elke ziel ontwikkelt zich
                door verschillende niveaus en kiest daarbij een duidelijke richting
                van groei.
              </p>
            </div>

            {/* De Twee Paden */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-blue-400 border-opacity-30">
              <h3 className="text-2xl font-black text-blue-300 mb-3">Twee Evolutionaire Paden</h3>
              <p className="mb-4">
                Er bestaan maar twee evolutionaire paden waar je tussen kunt kiezen.
                Deze keuze bepaalt hoe jouw bewustzijn zich ontwikkelt:
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
            </div>

            {/* De Keuze */}
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-6 border border-cyan-400 border-opacity-30">
              <h3 className="text-2xl font-black text-white mb-3">Jouw Keuze Bepaalt Alles</h3>
              <p className="mb-3">
                Elke gedachte, keuze en intentie versterkt jouw pad.
                Polarisatie is essentieel: hoe duidelijker jouw keuze,
                hoe sneller je spiritueel groeit.
              </p>
              <p className="text-cyan-200 font-bold">
                Consistentie in je keuzen creëert spiritueel momentum
                en accelereert je bewustzijnsontwikkeling.
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
    </>
  );
};

export default Leven;
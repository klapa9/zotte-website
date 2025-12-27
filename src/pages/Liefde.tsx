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
            {/* Karma */}
            <div className="bg-gradient-to-r from-green-400 to-blue-400 rounded-3xl p-8 md:p-12 mb-12 transform hover:scale-105 hover:rotate-2 transition-all duration-500 active:scale-95">
              <h2 className="text-4xl md:text-5xl font-black text-purple-600 mb-6">
                Karma
              </h2>
              <div className="space-y-4 text-white text-lg md:text-xl">
                <p className="hover:text-teal-200 transition-colors duration-300">
                  Karma is de universele wet van oorzaak en gevolg.
                  Elke actie die je onderneemt, elke gedachte die je denkt,
                  zendt energie uit die uiteindelijk naar je terugkeert.
                </p>
                <p className="hover:text-teal-200 transition-colors duration-300">
                  Daarom is het zo belangrijk om bewust te kiezen voor liefdevolle
                  en positieve handelingen. Wat je uitzendt, komt naar je terug.
                </p>
                <p className="hover:text-teal-200 transition-colors duration-300">
                  Dit is niet altijd onmiddellijk zichtbaar, maar op de lange termijn
                  zal de energie die je hebt gecreëerd, zich manifesteren in je leven.
                </p>
                <Button
                      onClick={() => setShowDialog2(true)}
                      className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      ✨ Dankbaarheid!
                </Button>
                
              </div>
            </div>

            {/* De boodschap van liefde */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 mb-12 transform hover:rotate-1 transition-all duration-500">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Heb anderen lief zoals jezelf.
              </h2>
              <div className="space-y-4 text-white text-lg md:text-xl">
              <p>
                Als aan Jezus Christus werd gevraagd wat de hoogste wet was, antwoordde hij met het gebod:
                "Heb anderen lief zoals jezelf".
              </p>
              <p>
                Deze eenvoudige maar diepgaande uitspraak vat de essentie van liefde samen.
                Het betekent ten eerste dat we van onszelf moeten houden en ons eigen welzijn moeten koesteren.
                We kunnen anderen niet echt liefhebben als we niet eerst van onszelf houden.
              </p>
              <p>
                Het betekent ook dat we alle anderen behandelen met dezelfde zorg, respect en compassie als we voor onszelf wensen.
                Het betekent het erkennen van de goddelijkheid in ieder leven,
                omdat we allemaal deel uitmaken van hetzelfde universele bewustzijn.
              </p>
                
              <Button
                onClick={() => setShowDialog(true)}
                className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                ✨ Vergiffenis
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

       

      {/* Vergiffenis */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-cyan-900 to-blue-900 text-white border-2 border-cyan-400">
          <DialogHeader>
            <DialogTitle className="text-3xl md:text-4xl font-black text-cyan-400 mb-4">
              Emoties
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 text-lg">

            {/* Training */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-blue-400 border-opacity-30">
              <h3 className="text-2xl font-black text-blue-300 mb-3">
                Train jezelf
              </h3>
              <p className="mb-4">
                Je kunt jezelf trainen om meer liefde, dankbaarheid en vergiffenis te cultiveren
                door dagelijks bewust aandacht te besteden aan deze emoties.
              </p>
              <p>
                De eerste stap is bewustwording. Zodra je je bewust bent van je gedachten en emoties,
                kun je ervoor kiezen om ze te veranderen en te transformeren naar positievere gedachten.
              </p>
              <p>
                Let op jezelf gedurende de dag en merk op wanneer je "negatieve" gedachten hebt,
                zoals oordeel, wrok of ontevredenheid.
                Vervang deze gedachten bewust door liefdevolle en vergevende gedachten.
              </p>
              
            </div>

            {/* Dankbaarheid */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-blue-400 border-opacity-30">
              <h3 className="text-2xl font-black text-blue-300 mb-3">
                Dankbaarheid
              </h3>
              <p className="mb-4">
                Dankbaarheid is de krachtigste emotie die ons verbindt met de overvloed van het universum.
                Dankbaarheid opent ons hart en trekt meer positieve ervaringen aan.
              </p>
              <p>
                Door dankbaarheid te cultiveren, erkennen we de zegeningen in ons leven,
                hoe klein ook, en versterken we onze verbinding met liefde en vreugde.
              </p>
              <p>
                Dankbaarheid helpt ook om onze zelfwaarde te verhogen,
                omdat we ons bewust worden van de waarde die we in ons leven hebben.
              </p>
            </div>
          
            {/* vergeving */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-blue-400 border-opacity-30">
              <h3 className="text-2xl font-black text-blue-300 mb-3">De kracht van Vergiffenis</h3>
              <p className="mb-4">
                De beste vorm van zelfliefde is vergiffenis.
                Vergiffenis bevrijdt ons van de last van wrok en negatieve emoties die ons innerlijke vrede ontnemen.
                Het stelt ons in staat om verder te gaan en ruimte te maken voor liefde en positiviteit in ons leven.
              </p>
              <p>
                Door te vergeven, bevrijden we onszelf van de ketenen van het verleden en openen we ons hart voor nieuwe mogelijkheden.
                Dit is een krachtige stap in het proces van spirituele groei en innerlijke vrede.
              </p>
              <p>
                Vergiffenis betekent niet dat we de fouten van anderen goedkeuren,
                maar dat we ervoor kiezen om los te laten wat ons pijn doet,
                zodat we kunnen genezen en verder kunnen gaan met ons leven.
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
              Dankbaarheid
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 text-lg">

            {/* Dankbaarheid en vergeving */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-blue-400 border-opacity-30">
              <h3 className="text-2xl font-black text-blue-300 mb-3">
                Dienstbaarheid
              </h3>
              <p className="mb-4">
                Een andere manier om liefde te cultiveren is door dienstbaarheid aan anderen.
                Door anderen te helpen en bij te dragen aan hun welzijn,
                openen we ons hart en versterken we onze verbinding met liefde.
              </p>
              <p>
                Als je intentie is om anderen te dienen zonder iets terug te verwachten,
                zul je merken dat liefde en dankbaarheid vanzelf naar je toe komen.
              </p>
              <p>
                Groei hierin en probeer meer dan 50% van je tijd en energie te besteden aan het dienen van anderen.
                Op die manier ervaar je de ware kracht van liefde in actie.
              </p>
            </div>

            {/* Ouderschap */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-blue-400 border-opacity-30">
              <h3 className="text-2xl font-black text-blue-300 mb-3">
                Dienstbaarheid
              </h3>
              <p className="mb-4">
                Een andere manier om liefde te cultiveren is door dienstbaarheid aan anderen.
                Door anderen te helpen en bij te dragen aan hun welzijn,
                openen we ons hart en versterken we onze verbinding met liefde.
              </p>
              <p>
                Als je intentie is om anderen te dienen zonder iets terug te verwachten,
                zul je merken dat liefde en dankbaarheid vanzelf naar je toe komen.
              </p>
              <p>
                Groei hierin en probeer meer dan 50% van je tijd en energie te besteden aan het dienen van anderen.
                Op die manier ervaar je de ware kracht van liefde in actie.
              </p>
            </div>

            {/* vrije wil */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-blue-400 border-opacity-30">
              <h3 className="text-2xl font-black text-blue-300 mb-3">
                Vrije wil
              </h3>
              <p className="mb-4">
                Liefde kan niet worden afgedwongen of opgelegd.
                Het moet vrijelijk worden gegeven en ontvangen.
                Wanneer we liefde proberen te forceren, creëren we weerstand en blokkades.
              </p>
              <p>
                Echte liefde komt voort uit een plaats van vrijheid en keuze.
                Het is belangrijk om de vrije wil van anderen te respecteren
                en liefde te geven zonder verwachtingen of voorwaarden.
              </p>
              <p>
                Door liefde vrijelijk te geven, creëren we een ruimte waarin liefde kan groeien en bloeien.
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
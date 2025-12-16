import { useSeoMeta } from '@unhead/react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CursorStyles from '@/components/CursorStyles';
import Navigation from '@/components/Navigation';
import PracticalTip from '@/components/PracticalTip';
import AudioPlayer from '@/components/AudioPlayer';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const ZiekZot = () => {
  const [glitchMode, setGlitchMode] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  useSeoMeta({
    title: 'Ziek Zot! - De Waarheid over Ziekte en Gekte',
    description: 'Ziek zijn is echt zot! Ontdek waarom het beter is om gewoon niet zot ziek te zijn.',
  });

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchMode(true);
      setTimeout(() => setGlitchMode(false), 200);
    }, 4000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <>
      <CursorStyles />
      <AudioPlayer pageType="ziekzot" />
      <div className="min-h-screen bg-gradient-to-br from-red-900 via-pink-800 to-purple-900 overflow-hidden relative">
      {/* Distorted background elements */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full mix-blend-screen opacity-20 ${glitchMode ? 'animate-pulse' : ''}`}
            style={{
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              background: `hsl(${Math.random() * 60 + 300}, 80%, 60%)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 3 + 1}s`,
              animationDelay: `${Math.random() * 2}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
              clipPath: Math.random() > 0.7 ? 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' : 'circle()',
            }}
          />
        ))}
      </div>

      {/* Glitch lines */}
      {glitchMode && (
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-red-500 opacity-30"
              style={{
                top: `${Math.random() * 100}%`,
                left: 0,
                right: 0,
                height: '2px',
                animation: 'glitchMove 0.1s infinite',
              }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <div className="py-16 px-4 text-center">
          <h1 className={`text-8xl md:text-9xl font-black mb-6 text-white ${glitchMode ? 'animate-glitch' : ''}`}>
            ZIEK ZOT!
          </h1>
          <p className="text-2xl md:text-3xl text-pink-300 font-bold">
            Er is een andere weg
          </p>
        </div>

        {/* Main Content */}
        <div className="flex-1 px-4 pb-16">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Main Statement */}
            <div className="text-center">
              <div className="inline-block transform hover:scale-110 transition-transform duration-500">
                <p className="text-4xl md:text-6xl font-black text-red-400 mb-4">
                  Elke ziekte is geneesbaar
                </p>
              </div>
              <p className="text-2xl md:text-3xl text-white font-light">
                Door de kracht van vasten en de natuur
              </p>
            </div>

            {/* The Breatharian Way */}
            <div className="bg-black bg-opacity-30 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-red-400 border-opacity-30">
              <h2 className="text-4xl md:text-5xl font-black text-red-400 mb-6">
                De Weg van Vasten
              </h2>
              <div className="space-y-4 text-white text-lg md:text-xl">
                <p>
                  Wat als ik je vertel dat je lichaam niet constant hoeft te eten om te overleven?
                  Dat er mensen zijn die meerdere jaren zonder eten of drinken kunnen overleven?
                </p>
                <p>
                  Ons lichaam kan leven van kosmische energie,
                  van zonlicht en de levenskracht in de lucht die we inademen.
                  We hebben geen voedsel nodig omdat onze cellen direct energie uit het universum kunnen trekken.
                </p>
                <p>
                  Dit vergt een aanpassing, allereerst mentaal en emotioneel.
                  Je moet geloven dat je lichaam dit kan. Dat je lichaam weet hoe het zichzelf kan genezen en voeden.
                  Vasten is de sleutel om deze vermogens te activeren.
                </p>
                <p>
                  Je hoeft niet meteen all in te gaan. Begin met af en toe te vasten.
                  Geef je lichaam rust. Laat het reinigen.
                </p>
              </div>
            </div>

            {/* How Fasting Works */}
            <div className="bg-gradient-to-r from-pink-600 to-red-600 rounded-3xl p-8 md:p-12 transform hover:rotate-1 transition-all duration-500">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Hoe Vasten Werkt
              </h2>
              <div className="space-y-4 text-white text-lg md:text-xl">
                <p>
                  Wanneer je stopt met eten schakelt je lichaam over
                  van spijsvertering naar zelfreiniging en celvernieuwing. Dit heet autofagie.
                  Oude, zieke cellen worden opgeruimd en vervangen door nieuwe, gezonde cellen.
                </p>
                <p>
                  Na 2-3 dagen vasten begint je lichaam opgeslagen vetten te verbranden.
                  Maar het gaat dieper: het begint ook emotionele en mentale blokkades op te ruimen.
                </p>
                <p>
                  Dit is lastig, omdat je lichaam bezig is met de grote kuis.
                  Maar, zodra de reiniging voorbij is, voel je je lichter, helderder en energieker dan ooit tevoren.
                </p>
                <p>
                  Nog later leert je lichaam om energie direct uit de omgeving te halen.
                  Zonlicht, lucht, en de energie van de aarde voeden je cellen.
                  Je wordt een autonoom wezen dat niet langer afhankelijk is van voedsel.
                </p>
                <Button
                      onClick={() => setShowDialog(true)}
                      className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      ✨ Ons Mentaal spiritueel lichaam.
                </Button>
              </div>
            </div>

            {/* Nature's Healing */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white bg-opacity-5 backdrop-blur-md rounded-3xl p-8 border border-pink-400 border-opacity-30">
                <h3 className="text-3xl font-black text-pink-400 mb-4">
                  De Natuur Geneest
                </h3>
                <p className="text-white text-lg">
                  De natuur heeft alles wat je nodig hebt om gezond te blijven.
                  Zonlicht en schone lucht geven je energie.
                  Water hydrateert en reinigt je systeem. De aarde aanraken met blote voeten geeft je balans met de natuur.
                  Wanneer je met de natuur leeft in plaats van tegen haar, verdwijnt ziekte.
                </p>
              </div>

              <div className="bg-white bg-opacity-5 backdrop-blur-md rounded-3xl p-8 border border-purple-400 border-opacity-30">
                <h3 className="text-3xl font-black text-purple-400 mb-4">
                  Liefde is noodzakelijk
                </h3>
                <p className="text-white text-lg">
                  Als je lichaam geblokeert is door negatieve emoties zoals angst, woede, of verdriet,
                  kan het niet goed functioneren. Liefde en vreugde zijn essentieel als je langdurig wilt vasten.
                  Omarm het leven, wees dankbaar, en cultiveer liefde in je hart.
                  Dit opent de deur naar een gezond lichaam.
                </p>
              </div>
            </div>

            <PracticalTip pageType="ziekzot" />

            {/* Call to Action */}
            <div className="text-center py-12">
              <div className="bg-black bg-opacity-40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white border-opacity-20 transform hover:scale-105 hover:rotate-2 transition-all duration-500 active:scale-95">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 hover:scale-105 hover:rotate-2 transition-all duration-300">
                  Probeer eens 1 of meerdere maaltijden over te slaan.
                </h2>
                <p className="text-xl md:text-2xl text-white mb-6 hover:text-pink-200 transition-colors duration-300">
                  Experimenteer met je lichaam.
                </p>
                <div className="inline-block transform hover:scale-110 hover:rotate-6 transition-all duration-300 active:scale-95">
                  <p className="text-3xl md:text-5xl font-black text-red-400 hover:text-red-300 transition-colors duration-300">
                    Je zal verbaast zijn wat je aankan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Navigation />
      </div>

      <style jsx>{`
        @keyframes glitchMove {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-5px, 5px); }
          40% { transform: translate(-5px, -5px); }
          60% { transform: translate(5px, 5px); }
          80% { transform: translate(5px, -5px); }
        }

        .animate-glitch {
          animation: glitch 0.3s ease-in-out;
        }
      `}</style>
      </div>

      {/* Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-cyan-900 to-blue-900 text-white border-2 border-cyan-400">
          <DialogHeader>
            <DialogTitle className="text-3xl md:text-4xl font-black text-cyan-400 mb-4">
              Mind / Body / Spirit
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 text-lg">

            {/* Introductie */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400 border-opacity-30">
              <h3 className="text-2xl font-black text-cyan-300 mb-3">
                Bewustzijn / Lichaam / Ziel
              </h3>
              <p>
                De mens is één geïntegreerd geheel van bewustzijn, lichaam en ziel.
                Deze drie lagen vormen samen de manier waarop het leven wordt ervaren.
                Wat zich aandient in het lichaam heeft zijn oorsprong in bewustzijn en ziel,
                en wat innerlijk beweegt vindt uiteindelijk zijn weg naar het fysieke bestaan.
              </p>
            </div>
            

            {/* Het Lichaam */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-blue-400 border-opacity-30">
              <h3 className="text-2xl font-black text-blue-300 mb-3">
                Het Lichaam
              </h3>
              <p className="mb-4">
                Het lichaam is het instrument waarmee bewustzijn zichzelf ervaart
                binnen deze realiteit. Het maakt voelen, handelen, grenzen, verlangens en keuzes zichtbaar.
              </p>

              <div className="mb-4 pl-4 border-l-4 border-teal-400">
                <h4 className="text-xl font-bold text-teal-300 mb-2">
                  Energie en innerlijke balans
                </h4>
                <p className="mb-2">
                  Het lichaam functioneert als een energiesysteem.
                  Wanneer overtuigingen, emoties en intenties in harmonie zijn, stroomt energie vrij en wordt gezondheid ervaren.
                  Spanningen, vermoeidheid of pijn wijzen op plaatsen waar innerlijke delen niet in lijn zijn.
                </p>
                <p className="mb-3">
                Het lichaam is niet de ware identiteit, maar een tijdelijk gekozen vorm.
                Toch is het heilig, omdat het het bewustzijn de mogelijkheid geeft zichzelf te ervaren.
              </p>

              </div>
            </div>

            {/* Katalysatoren */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400 border-opacity-30">
              <h3 className="text-2xl font-black text-cyan-300 mb-3">
                Katalysatoren in het dagelijks leven
              </h3>
              <p className="mb-3">
                Alles wat sterke emotionele of fysieke reacties oproept in je leven, functioneert als katalysator.
                Dit kunnen gebeurtenissen zijn, relaties, lichamelijke klachten of terugkerende patronen.
              </p>
              <p className="mb-3">
                Een katalysator legt iets bloot: een overtuiging, een angst, een verlangen of een innerlijk conflict.
                Het lichaam speelt hierin een sleutelrol, omdat het spanning of ongemak direct voelbaar maakt.
              </p>
              <p>
                Elke emotionele of fysieke trigger kan worden benaderd met de vraag:
                <em>“Wat wil dit mij laten zien?”</em>
                Op die manier zorgt een katalysator voor zelfinzicht waarmee innerlijke heling kan plaatsvinden.
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

export default ZiekZot;
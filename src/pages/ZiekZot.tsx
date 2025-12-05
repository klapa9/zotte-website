import { useSeoMeta } from '@unhead/react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CursorStyles from '@/components/CursorStyles';
import Navigation from '@/components/Navigation';
import PracticalTip from '@/components/PracticalTip';
import AudioPlayer from '@/components/AudioPlayer';

const ZiekZot = () => {
  const [glitchMode, setGlitchMode] = useState(false);

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
      <AudioPlayer pageType="ziekzot" audioFile="/De_natuur_geneest.mp3" />
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
                  Nooit meer ziek worden
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
                  Dat er mensen zijn die leven op pure levensenergie, bekend als prana?
                  Dit is geen fantasie - het is een古老e wijsheid die veel culturen kenden.
                </p>
                <p>
                  Breatharians begrijpen dat ons lichaam direct kan leven van kosmische energie,
                  zonlicht en de levenskracht in de lucht die we inademen.
                  Ze hebben geen voedsel nodig omdat hun cellen direct energie uit het universum trekken.
                </p>
                <p>
                  Het resultaat? Geen ziekte. Geen veroudering. Gewoon pure vitaliteit.
                  Hun lichaam wordt niet belast door voedselvergiftiging, spijsverteringsproblemen,
                  of de constante energieverspilling van verteren. Het systeem blijft perfect schoon.
                </p>
                <p>
                  Je hoeft niet meteen volledig breatharian te worden. Begin met vasten.
                  Geef je lichaam rust. Laat het reinigen. Leer luisteren naar je ware energiebronnen.
                  Ziekte is een teken dat je lichaam overbelast is. Vasten is de reset knop.
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
                  Wanneer je stopt met eten, gebeurt er iets magisch. Je lichaam schakelt over
                  van spijsvertering naar zelfreiniging en celvernieuwing. Dit heet autofagie.
                  Oude, zieke cellen worden opgeruimd en vervangen door nieuwe, gezonde cellen.
                </p>
                <p>
                  Na 2-3 dagen vasten begint je lichaam opgeslagen vetten te verbranden.
                  Maar het gaat dieper - het begint ook emotionele en mentale blokkades op te ruimen.
                  Je wordt helderder, energieker, meer jezelf.
                </p>
                <p>
                  Breatharians hebben dit proces meester gemaakt. Ze leven constant in een staat
                  van "light eating" - waarbij hun lichaam direct levensenergie uit de omgeving haalt.
                  Geen spijsvertering, geen afval, geen ziekte. Pure efficiëntie.
                </p>
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
                  Zonlicht geeft je vitamine D en levensenergie. Schone lucht zuivert je longen.
                  Water hydrateert en reinigt je systeem. De aarde gronden en kalmeert je.
                  Wanneer je met de natuur leeft in plaats van tegen haar, verdwijnt ziekte.
                </p>
              </div>

              <div className="bg-white bg-opacity-5 backdrop-blur-md rounded-3xl p-8 border border-purple-400 border-opacity-30">
                <h3 className="text-3xl font-black text-purple-400 mb-4">
                  Luister naar je Ware Zelf
                </h3>
                <p className="text-white text-lg">
                  Je lichaam weet precies wat het nodig heeft. Honger is vaak niet echt honger -
                  het is een gewoonte, een emotie, een verveling. Leer onderscheid maken.
                  Echte honger komt zelden voor. Je lichaam kan veel langer zonder voedsel
                  dan je denkt. Vertrouw op de wijsheid die al in je zit.
                </p>
              </div>
            </div>

            <PracticalTip pageType="ziekzot" />

            {/* Call to Action */}
            <div className="text-center py-12">
              <div className="bg-black bg-opacity-40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white border-opacity-20 transform hover:scale-105 hover:rotate-2 transition-all duration-500 cursor-pointer active:scale-95">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 hover:scale-105 hover:rotate-2 transition-all duration-300">
                  Begin Vandaag Nog!
                </h2>
                <p className="text-xl md:text-2xl text-white mb-6 hover:text-pink-200 transition-colors duration-300">
                  Ontdek de kracht van vasten en natuurlijke genezing
                </p>
                <div className="inline-block transform hover:scale-110 hover:rotate-6 transition-all duration-300 cursor-pointer active:scale-95">
                  <p className="text-3xl md:text-5xl font-black text-red-400 hover:text-red-300 transition-colors duration-300">
                    WORD DEENGEZONDSTEVERSIE!
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
    </>
  );
};

export default ZiekZot;
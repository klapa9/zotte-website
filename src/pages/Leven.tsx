import { useSeoMeta } from '@unhead/react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CursorStyles from '@/components/CursorStyles';
import Navigation from '@/components/Navigation';
import PracticalTip from '@/components/PracticalTip';
import AudioPlayer from '@/components/AudioPlayer';

const Leven = () => {
  const [isGlitching, setIsGlitching] = useState(false);

  useSeoMeta({
    title: 'Leven - De Wet van Eénheid',
    description: 'Er is maar één werkelijkheid. Kies je pad: dienst aan jezelf of dienst aan anderen. Deze keuze bepaalt je hele realiteit.',
  });

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 300);
    }, 5000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <>
      <CursorStyles />
      <AudioPlayer pageType="leven" />
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-cyan-800 to-teal-700 overflow-hidden relative">
        {/* Animated background */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full mix-blend-screen opacity-15 animate-pulse"
              style={{
                width: `${Math.random() * 400 + 150}px`,
                height: `${Math.random() * 400 + 150}px`,
                background: `hsl(${Math.random() * 60 + 180}, 70%, 60%)`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 8 + 4}s`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 min-h-screen flex flex-col">
          {/* Header */}
          <div className="py-16 px-4 text-center">
            <div className={`mb-8 ${isGlitching ? 'animate-glitch' : ''}`}>
              <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-600 animate-pulse">
                LEVEN
              </h1>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                ?
              </h2>
            </div>
            <p className="text-xl md:text-2xl text-white font-bold opacity-90">
              Er is maar één werkelijkheid - jouw keuze bepaalt alles
            </p>
          </div>

          {/* Content Sections */}
          <div className="flex-1 px-4 pb-16">
            <div className="max-w-6xl mx-auto space-y-16">
              {/* De Wet van Eénheid */}
              <div className="bg-white bg-opacity-5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-cyan-400 border-opacity-30 transform hover:scale-105 transition-all duration-500">
                <h2 className="text-4xl md:text-5xl font-black text-cyan-400 mb-6">
                  DE WET VAN EENHEID
                </h2>
                <div className="space-y-4 text-white text-lg md:text-xl">
                  <p>
                    In de kern van het bestaan is er één fundamentele waarheid: 
                    alles is verbonden. Alle wezens, alle dingen, alle momenten 
                    maken deel uit van één en dezelfde bewuste realiteit.
                  </p>
                  <p>
                    Deze eenheid geeft ons twee paden om te bewandelen. Twee manieren 
                    om te leven. Twee werkelijkheden om te creëren. 
                    De keuze is altijd aan jou.
                  </p>
                  <div className="bg-cyan-600 bg-opacity-20 rounded-2xl p-6 border border-cyan-400 border-opacity-30">
                    <p className="text-2xl font-black text-cyan-300 mb-2">
                      ALLES IS ÉÉN
                    </p>
                    <p className="text-lg text-white">
                      Jij bent het universum, en het universum is jij
                    </p>
                  </div>
                </div>
              </div>

              {/* Pad 1: Dienst aan Jezelf */}
              <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl p-8 md:p-12">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                  PAD 1: DIENST AAN JEZELF
                </h2>
                <div className="space-y-4 text-white text-lg md:text-xl">
                  <p>
                    In dit pad realiseer je dat dienst aan anderen eigenlijk dienst aan jezelf is. 
                    Wanneer je een ander helpt, help je jezelf. Wanneer je liefde geeft, 
                    geef je liefde aan jezelf.
                  </p>
                  <p>
                    Iedereen die je tegenkomt is een reflectie van een deel van jou. 
                    Het universum toont je jezelf door de ogen van anderen.
                  </p>
                  <ul className="space-y-2 text-cyan-300 font-bold">
                    <li>• Wat je geeft, ontvang je terug</li>
                    <li>• Liefde naar anderen is zelfliefde</li>
                    <li>• Anderen helpen = jezelf helpen</li>
                    <li>• De wereld is jouw spiegel</li>
                  </ul>
                  <p>
                    Dit pad gaat over het herkennen van jezelf in alles en iedereen.
                    Jij bent de ander, en de ander is jij.
                  </p>
                  <div className="bg-blue-600 bg-opacity-20 rounded-2xl p-6 border border-blue-400 border-opacity-30 mt-6">
                    <p className="text-xl font-black text-blue-300">
                      ER IS GEEN ANDEREN
                    </p>
                    <p className="text-white">
                      Alle liefde die je geeft, is liefde aan jezelf
                    </p>
                  </div>
                </div>
              </div>

              {/* Pad 2: Dienst aan Anderen */}
              <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-3xl p-8 md:p-12">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                  PAD 2: DIENST AAN ANDEREN
                </h2>
                <div className="space-y-4 text-white text-lg md:text-xl">
                  <p>
                    In dit pad begrijp je dat dienst aan jezelf eigenlijk dienst aan anderen is. 
                    Wanneer je aan jezelf werkt, werk je aan de hele wereld. 
                    Wanneer je jezelf geneest, genees je anderen.
                  </p>
                  <p>
                    Jouw innerlijke groei en heling is direct verbonden met de heling 
                    van het collectief. Jij bent de sleutel tot de bevrijding van allen.
                  </p>
                  <ul className="space-y-2 text-teal-300 font-bold">
                    <li>• Je eigen heling helpt iedereen</li>
                    <li>• Innerlijke vrede creëert wereldvrede</li>
                    <li>• Persoonlijke groei = collectieve groei</li>
                    <li>• Jij bent het medicijn voor de wereld</li>
                  </ul>
                  <p>
                    Dit pad gaat over het begrijpen dat jouw welzijn direct 
                    bijdraagt aan het welzijn van het geheel.
                  </p>
                  <div className="bg-teal-600 bg-opacity-20 rounded-2xl p-6 border border-teal-400 border-opacity-30 mt-6">
                    <p className="text-xl font-black text-teal-300">
                      JE BENT DE OPLOSSING
                    </p>
                    <p className="text-white">
                      Je eigen heling is de heling van de wereld
                    </p>
                  </div>
                </div>
              </div>

              {/* Keuze en Realiteit */}
              <div className="bg-black bg-opacity-40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-blue-400 border-opacity-30">
                <h2 className="text-4xl md:text-5xl font-black text-blue-400 mb-6">
                  JOUW KEUPE, JOUW WERKELIJKHEID
                </h2>
                <div className="space-y-4 text-white text-lg md:text-xl">
                  <p>
                    Beide paden leiden naar dezelfde waarheid: er is geen scheiding. 
                    Het is alleen een kwestie van perspectief. Vanuit welke 
                    invalshoek kies je om te leven?
                  </p>
                  <p>
                    Sommige dagen voel je je aangetrokken tot het helpen van anderen, 
                    andere dagen richt je je op je eigen groei. Beide zijn juist. 
                    Beide zijn volledig.
                  </p>
                  <p>
                    De diepste wijsheid is het begrijpen dat beide paden 
                    identiek zijn. Ze zijn twee kanten van dezelfde medaille.
                  </p>
                  <div className="text-center mt-8">
                    <div className="inline-block bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl p-6 border border-cyan-400 border-opacity-30">
                      <p className="text-2xl md:text-3xl font-black text-white">
                        KIES JE PAD
                      </p>
                      <p className="text-lg md:text-xl text-cyan-200 mt-2">
                        Elk pad leidt naar huis
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Praktische Toepassing */}
              <div className="bg-white bg-opacity-5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-teal-400 border-opacity-30">
                <h2 className="text-4xl md:text-5xl font-black text-teal-400 mb-6">
                  PRAKTISCHE TOEPASSING
                </h2>
                <div className="grid md:grid-cols-2 gap-8 text-white text-lg md:text-xl">
                  <div>
                    <h3 className="text-2xl font-black text-cyan-300 mb-4">Dagelijkse Reflectie</h3>
                    <p>
                      Vraag jezelf elke dag af: hoe kan ik vandaag dienen? 
                      Aan mezelf of aan anderen? Welke actie voelt juist nu?
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-teal-300 mb-4">Observeer je Spiegel</h3>
                    <p>
                      Let op wie en wat je tegenkomt. Wat laat het universum 
                      je zien over jezelf? Welke les zit er voor je verborgen?
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-cyan-300 mb-4">Handel vanuit Liefde</h3>
                    <p>
                      Elke handeling gebaseerd op liefde helpt het geheel. 
                      Of je nu voor jezelf of anderen zorgt - het is altijd liefde.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-teal-300 mb-4">Vertrouw het Proces</h3>
                    <p>
                      De wereld reflecteert perfect jouw innerlijke staat. 
                      Vertrouw dat alles gebeurt zoals het moet gebeuren.
                    </p>
                  </div>
                </div>
              </div>

              <PracticalTip pageType="leven" />

              {/* Final Message */}
              <div className="text-center py-12">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                  ALLES IS VERBONDEN
                </h2>
                <p className="text-xl md:text-2xl text-cyan-400 font-bold mb-4">
                  Jouw keuze bepaalt de realiteit
                </p>
                <p className="text-lg md:text-xl text-white">
                  Kies met je hart. Leef met intentie. Wees één met alles.
                </p>
              </div>
            </div>
          </div>

          <Navigation />
        </div>

        {/* Custom animations */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
          }

          @keyframes glitch {
            0%, 100% { transform: translate(0); filter: hue-rotate(0deg); }
            20% { transform: translate(-5px, 5px); filter: hue-rotate(90deg); }
            40% { transform: translate(-5px, -5px); filter: hue-rotate(180deg); }
            60% { transform: translate(5px, 5px); filter: hue-rotate(270deg); }
            80% { transform: translate(5px, -5px); filter: hue-rotate(360deg); }
          }

          .animate-float {
            animation: float linear infinite;
          }

          .animate-glitch {
            animation: glitch 0.3s ease-in-out;
          }
        `}</style>
      </div>
    </>
  );
};

export default Leven;
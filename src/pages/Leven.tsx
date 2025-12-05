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
    description: 'Alles is één bewustzijn. Kies jouw pad: Service to Others of Service to Self. Jouw keuze bepaalt je spirituele ontwikkeling.',
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
                DE WET VAN ÉÉN
              </h1>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                LEVEN
              </h2>
            </div>
            <p className="text-xl md:text-2xl text-white font-bold opacity-90">
              Alles in het universum is één bewustzijn - jouw keuze bepaalt alles
            </p>
          </div>

          {/* Content Sections */}
          <div className="flex-1 px-4 pb-16">
            <div className="max-w-6xl mx-auto space-y-16">
              {/* De Wet van Eénheid */}
              <div className="bg-white bg-opacity-5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-cyan-400 border-opacity-30 transform hover:scale-105 transition-all duration-500">
                <h2 className="text-4xl md:text-5xl font-black text-cyan-400 mb-6">
                  ALLES IS ÉÉN BEWUSTZIJN
                </h2>
                <div className="space-y-4 text-white text-lg md:text-xl">
                  <p>
                    Alles in het universum is één bewustzijn. Elke ziel ontwikkelt zich
                    door verschillende niveaus en kiest daarbij een duidelijke richting
                    van groei.
                  </p>
                  <p>
                    Deze eenheid betekent dat er geen echte scheiding bestaat.
                    Alles wat je waarneemt, iedereen die je ontmoet, is een
                    reflectie van verschillende aspecten van hetzelfde bewustzijn.
                  </p>
                  <div className="bg-cyan-600 bg-opacity-20 rounded-2xl p-6 border border-cyan-400 border-opacity-30">
                    <p className="text-2xl font-black text-cyan-300 mb-2">
                      EEN BEWUSTZIJN
                    </p>
                    <p className="text-lg text-white">
                      Zielen ontwikkelen door niveaus heen met een gekozen richting
                    </p>
                  </div>
                </div>
              </div>

              {/* De Twee Paden */}
              <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl p-8 md:p-12">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                  DE TWEE EVOLUTIONAIRE PADEN
                </h2>
                <div className="space-y-4 text-white text-lg md:text-xl">
                  <p>
                    Er bestaan maar twee evolutionaire paden: Service to Others en Service to Self.
                    Deze keuze bepaalt hoe jouw bewustzijn zich ontwikkelt en
                    welke lessen je zult ervaren.
                  </p>
                  <p>
                    Dit is de meest fundamentele keuze die elke ziel maakt.
                    Het is geen morele keuze, maar een keuze van ervaring en
                    leerschool. Beide paden leiden uiteindelijk naar dezelfde bron.
                  </p>
                  <div className="text-center mt-8">
                    <div className="inline-block bg-blue-600 bg-opacity-30 rounded-2xl p-6 border border-blue-400 border-opacity-30">
                      <p className="text-2xl md:text-3xl font-black text-white">
                        JOUW KEUZE, JOUW PAD
                      </p>
                      <p className="text-lg md:text-xl text-blue-200 mt-2">
                        Bewuste richting bepaalt spirituele groei
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service to Others */}
              <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-3xl p-8 md:p-12">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                  SERVICE TO OTHERS (STO)
                </h2>
                <div className="space-y-4 text-white text-lg md:text-xl">
                  <p>
                    Het STO-pad is gericht op liefde, samenwerking en het verhogen
                    van het welzijn van anderen. Een ziel volgt dit pad wanneer
                    zij meer dan 51% van haar intentie wijdt aan het dienen van anderen.
                  </p>
                  <p>
                    Dit pad draait om empathie, compassie en het begrijpen dat
                    het welzijn van anderen direct verbonden is met jouw eigen welzijn.
                    Wanneer je anderen helpt, help je jezelf op een dieper niveau.
                  </p>
                  <ul className="space-y-2 text-teal-300 font-bold">
                    <li>• Liefde en compassie als drijfveer</li>
                    <li>• Samenwerking en harmonie</li>
                    <li>• Welzijn van verhogen</li>
                    <li>• Intentie gericht op dienstbaarheid (meer dan 51%)</li>
                  </ul>
                  <div className="bg-teal-600 bg-opacity-20 rounded-2xl p-6 border border-teal-400 border-opacity-30 mt-6">
                    <p className="text-2xl font-black text-teal-300">
                      MEER DAN DE HELFT
                    </p>
                    <p className="text-white">
                      51% of meer intentie gericht op anderen
                    </p>
                  </div>
                </div>
              </div>

              {/* Service to Self */}
              <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl p-8 md:p-12">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                  SERVICE TO SELF (STS)
                </h2>
                <div className="space-y-4 text-white text-lg md:text-xl">
                  <p>
                    Het STS-pad draait om macht, controle en zelfverheffing.
                    Een ziel kiest dit pad wanneer zij meer dan 95% van haar energie
                    richt op het dienen van zichzelf.
                  </p>
                  <p>
                    Dit pad draait om zelfontdekking, persoonlijke kracht en het
                    begrijpen van eigen grenzen en mogelijkheden. Het is een pad
                    van intense individuele ervaring en zelfverwerkelijking.
                  </p>
                  <ul className="space-y-2 text-cyan-300 font-bold">
                    <li>• Macht en controle als focus</li>
                    <li>• Zelfverheffing en autonomie</li>
                    <li>• Persoonlijke krachtontwikkeling</li>
                    <li>• Energie gericht op zelf (meer dan 95%)</li>
                  </ul>
                  <div className="bg-cyan-600 bg-opacity-20 rounded-2xl p-6 border border-cyan-400 border-opacity-30 mt-6">
                    <p className="text-2xl font-black text-cyan-300">
                      BIJNA ALLES VOOR JEZELF
                    </p>
                    <p className="text-white">
                      95% of meer energie gericht op eigen dienst
                    </p>
                  </div>
                </div>
              </div>

              {/* Geen Goed of Fout */}
              <div className="bg-black bg-opacity-40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-blue-400 border-opacity-30">
                <h2 className="text-4xl md:text-5xl font-black text-blue-400 mb-6">
                  GEEN GOED OF FOUT
                </h2>
                <div className="space-y-4 text-white text-lg md:text-xl">
                  <p>
                    Beide paden zijn volwaardige en legitieme routes van
                    spirituele vooruitgang. Elk pad biedt unieke lessen en
                    leidt uiteindelijk naar dezelfde bron.
                  </p>
                  <p>
                    Er is geen morele oordeel hier. Het gaat om ervaring en
                    bewustzijnsontwikkeling. Beide routes zijn nodig in het
                    universum om balans te creëren en verschillende aspecten
                    van het ene bewustzijn te verkennen.
                  </p>
                  <p>
                    Of je nu kiest voor liefdevolle dienst aan anderen of intense
                    zelfontdekking - beide leiden naar groei en uiteindelijk
                    terug naar de eenheid.
                  </p>
                  <div className="text-center mt-8">
                    <div className="inline-block bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl p-6 border border-blue-400 border-opacity-30">
                      <p className="text-2xl md:text-3xl font-black text-white">
                        BEIDE LEIDEN NAAR HUIS
                      </p>
                      <p className="text-lg md:text-xl text-blue-200 mt-2">
                        Unieke lessen, dezelfde bestemming
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* De Keuze */}
              <div className="bg-white bg-opacity-5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-teal-400 border-opacity-30">
                <h2 className="text-4xl md:text-5xl font-black text-teal-400 mb-6">
                  DE KEUZE DETERMINEERT ALLES
                </h2>
                <div className="space-y-4 text-white text-lg md:text-xl">
                  <p>
                    Elke gedachte, keuze en intentie versterkt jouw pad.
                    Polarisatie is essentieel: hoe duidelijker jouw keuze,
                    hoe sneller je spiritueel groeit.
                  </p>
                  <p>
                    Dit betekent dat consistentie in je keuzen cruciaal is.
                    Elke keer dat je kiest in lijn met je pad, versterk je
                    je bewustzijnsrichting en accelereer je spirituele ontwikkeling.
                  </p>
                  <div className="grid md:grid-cols-2 gap-8 mt-6">
                    <div>
                      <h3 className="text-2xl font-black text-cyan-300 mb-3">Polarisatie</h3>
                      <p>
                        Hoe duidelijker jouw keuze, hoe groter je spirituele
                        momentum. Vermijd wisselende intenties.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-teal-300 mb-3">Consistentie</h3>
                      <p>
                        Elke gedachte en daad versterkt jouw pad.
                        Wees bewust van je intenties in het dagelijks leven.
                      </p>
                    </div>
                  </div>
                  <div className="bg-teal-600 bg-opacity-20 rounded-2xl p-6 border border-teal-400 border-opacity-30 mt-6">
                    <p className="text-2xl font-black text-teal-300">
                      BEWUSTE KEUZE
                    </p>
                    <p className="text-white">
                      Elke intentie bouwt jouw spirituele kracht en momentum
                    </p>
                  </div>
                </div>
              </div>

              <PracticalTip pageType="leven" />

              {/* Final Message */}
              <div className="text-center py-12">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                  KIES JE PAD MET BEWUSTZIJN
                </h2>
                <p className="text-xl md:text-2xl text-cyan-400 font-bold mb-4">
                  Jouw intentie bepaalt je spirituele reis
                </p>
                <p className="text-lg md:text-xl text-white">
                  STO of STS - beide leiden naar eenheid.
                  Kies met je hart en leef met heldere intentie.
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
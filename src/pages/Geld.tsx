import { useSeoMeta } from '@unhead/react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CursorStyles from '@/components/CursorStyles';
import Navigation from '@/components/Navigation';
import PracticalTip from '@/components/PracticalTip';
import AudioPlayer from '@/components/AudioPlayer';

const Geld = () => {
  const [isGlitching, setIsGlitching] = useState(false);

  useSeoMeta({
    title: 'Geld - Bitcoin is de Oplossing',
    description: 'Ontdek waarom Bitcoin de scheiding van staat en geld mogelijk maakt. Koopkracht behouden, globale samenwerking, en financiële vrijheid.',
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
      <AudioPlayer pageType="geld" />
      <div className="min-h-screen bg-gradient-to-br from-orange-900 via-amber-800 to-yellow-700 overflow-hidden relative">
        {/* Animated background */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full mix-blend-screen opacity-15 animate-pulse"
              style={{
                width: `${Math.random() * 400 + 150}px`,
                height: `${Math.random() * 400 + 150}px`,
                background: `hsl(${Math.random() * 60 + 30}, 70%, 60%)`,
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
              <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 animate-pulse">
                BITCOIN
              </h1>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                IS DE OPLOSSING
              </h2>
            </div>
            <p className="text-xl md:text-2xl text-white font-bold opacity-90">
              De scheiding van staat en geld - eindelijk mogelijk!
            </p>
          </div>

          {/* Content Sections */}
          <div className="flex-1 px-4 pb-16">
            <div className="max-w-6xl mx-auto space-y-16">
              {/* Probleem: Staat en Geld */}
              <div className="bg-black bg-opacity-40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-orange-400 border-opacity-30 transform hover:scale-105 transition-all duration-500">
                <h2 className="text-4xl md:text-5xl font-black text-orange-400 mb-6">
                  HET PROBLEEM: STAAT EN GELD
                </h2>
                <div className="space-y-4 text-white text-lg md:text-xl">
                  <p>
                    Duizenden jaren lang konden heersers munten devalueren. De introductie van 
                    papiergeld maakte het nog erger - nu konden overheden simpelweg geld printen.
                  </p>
                  <p>
                    Resultaat? Je koopkracht wordt systematisch afgepakt. Inflatie is geen 
                    natuurlijk verschijnsel - het is <span className="text-orange-400 font-bold">institutionele diefstal</span>.
                  </p>
                  <p>
                    Centrale banken en overheden beslissen hoeveel jouw spaargeld waard is.
                    Dat is geen vrijheid - dat is financiële slavernij.
                  </p>
                </div>
              </div>

              {/* Bitcoin vs Crypto */}
              <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl p-8 md:p-12">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                  BITCOIN ≠ CRYPTO
                </h2>
                <div className="grid md:grid-cols-2 gap-8 text-white text-lg md:text-xl">
                  <div>
                    <h3 className="text-2xl font-black text-orange-300 mb-4">BITCOIN</h3>
                    <ul className="space-y-2">
                      <li>• Decentralized protocol</li>
                      <li>• Echte scheiding van staat en geld</li>
                      <li>• Proof-of-Work: energie verspild is veiligheid</li>
                      <li>• Fixed supply: 21 miljoen</li>
                      <li>• No CEO, no company, no marketing team</li>
                      <li>• 15+ jaar bewezen</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-yellow-300 mb-4">CRYPTO</h3>
                    <ul className="space-y-2">
                      <li>• Centralized companies</li>
                      <li>• Pre-mined, VC funded</li>
                      <li>• Tokens, not money</li>
                      <li>• CEOs die kunnen worden aangeklaagd</li>
                      <li>• Infinite supply possible</li>
                      <li>• Rebranding en scams</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Koopkracht Behouden */}
              <div className="bg-white bg-opacity-5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-yellow-400 border-opacity-30">
                <h2 className="text-4xl md:text-5xl font-black text-yellow-400 mb-6">
                  JE KOOPKRACHT BESCHERMEN
                </h2>
                <div className="space-y-4 text-white text-lg md:text-xl">
                  <p>
                    Bitcoin beschermt jouw koopkracht omdat niemand zomaar meer kan bijmaken.
                    De 21 miljoen supply is hardcoded in het protocol - geen overheid of centrale bank kan dit veranderen.
                  </p>
                  <p>
                    Dit is fundamenteel anders dan fiat valuta die continu worden gedevalueerd.
                    Terwijl de euro en dollar verliezen aan waarde, behoudt Bitcoin zijn schaarste.
                  </p>
                  <div className="bg-orange-600 bg-opacity-20 rounded-2xl p-6 border border-orange-400 border-opacity-30">
                    <p className="text-2xl font-black text-orange-300 mb-2">
                      INFLATIE = DIEFSTAL
                    </p>
                    <p className="text-lg text-white">
                      Bitcoin stopt de diefstal van je tijd en energie
                    </p>
                  </div>
                </div>
              </div>

              {/* Globale Samenwerking */}
              <div className="bg-gradient-to-r from-yellow-600 to-amber-600 rounded-3xl p-8 md:p-12">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                  GLOBALE SAMENWERKING
                </h2>
                <div className="space-y-4 text-white text-lg md:text-xl">
                  <p>
                    Bitcoin is het eerste echt globale decentrale geldnetwerk. 
                    Iedereen met een internetverbinding kan deelnemen - geen toestemming nodig.
                  </p>
                  <p>
                    Dit maakt globale samenwerking mogelijk zoals nooit tevoren:
                  </p>
                  <ul className="space-y-2 text-yellow-300 font-bold">
                    <li>• Iemand in Nigeria kan direct betalen aan iemand in Argentinië</li>
                    <li>• Geen tussenpersonen die transaction fees stelen</li>
                    <li>• Geen politieke grenzen die geldstromen blokkeren</li>
                    <li>• Financiële inclusie voor miljarden mensen</li>
                  </ul>
                  <p>
                    Bitcoin creëert een <span className="text-yellow-400 font-black">level playing field</span> 
                    waar de where je wordt geboren niet langer je financiële toekomst bepaalt.
                  </p>
                </div>
              </div>

              {/* Praktische Tip Section */}
              <PracticalTip pageType="geld" />

              {/* Stay Humble Stack Sats */}
              <div className="text-center py-12">
                <div className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 rounded-3xl p-8 md:p-12 transform hover:scale-105 hover:rotate-2 transition-all duration-500 cursor-pointer">
                  <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                    STAY HUMBLE
                  </h2>
                  <h3 className="text-3xl md:text-5xl font-black text-orange-300 mb-6">
                    AND STACK
                  </h3>
                  <p className="text-4xl md:text-6xl font-black text-yellow-400">
                    SATS
                  </p>
                  <div className="mt-8 space-y-4">
                    <p className="text-xl md:text-2xl text-white">
                      Vergeet de prijs, focus op de accumulation
                    </p>
                    <p className="text-lg md:text-xl text-white opacity-90">
                      Elke satoshi is een stukje financiële vrijheid
                    </p>
                    <div className="text-2xl md:text-3xl font-black text-white">
                      ₿1 = 100.000.000 sats
                    </div>
                  </div>
                </div>
              </div>

              {/* Final Message */}
              <div className="text-center py-12">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                  DE TOEKOMST IS ORANGE
                </h2>
                <p className="text-xl md:text-2xl text-orange-400 font-bold mb-4">
                  Bitcoin is niet alleen technologie - het is revolutie
                </p>
                <p className="text-lg md:text-xl text-white">
                  Neem de rode pil, stack sats, en word vrij
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

export default Geld;
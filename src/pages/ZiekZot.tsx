import { useSeoMeta } from '@unhead/react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CursorStyles from '@/components/CursorStyles';
import Navigation from '@/components/Navigation';

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
            De ongemakkelijke waarheid
          </p>
        </div>

        {/* Main Content */}
        <div className="flex-1 px-4 pb-16">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Main Statement */}
            <div className="text-center">
              <div className="inline-block transform hover:scale-110 transition-transform duration-500">
                <p className="text-4xl md:text-6xl font-black text-red-400 mb-4">
                  Ziek zijn is zot!
                </p>
              </div>
              <p className="text-2xl md:text-3xl text-white font-light">
                Beter om gewoon niet zot ziek te zijn!
              </p>
            </div>

            {/* What makes sickness crazy */}
            <div className="bg-black bg-opacity-30 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-red-400 border-opacity-30">
              <h2 className="text-4xl md:text-5xl font-black text-red-400 mb-6">
                Waarom is ziek zijn zo zot?
              </h2>
              <div className="space-y-4 text-white text-lg md:text-xl">
                <p>
                  Stel je voor: je lichaam, die perfecte machine die normaal zo soepel functioneert,
                  besluit opeens een eigen feestje te geven. En niet een leuk feestje,
                  maar een van die feesten waar alles uit de hand loopt.
                </p>
                <p>
                  Koorts? Je lichaam verhit zichzelf alsof het in een sauna zit die te warm is.
                  Hoest? Je longen denken dat het een goed idee is om constant te schreeuwen.
                  Neusverstopping? Alsof iemand je neus heeft volgepropt met watten.
                </p>
                <p>
                  En het gekste van alles? Je moet betalen om dit te laten gebeuren.
                  Je betaalt de dokter, je betaalt de medicijnen, je betaalt voor het privilege
                  om je ellendig te voelen. Dat is pas echt zot!
                </p>
              </div>
            </div>

            {/* The Alternative */}
            <div className="bg-gradient-to-r from-pink-600 to-red-600 rounded-3xl p-8 md:p-12 transform hover:rotate-1 transition-all duration-500">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Het alternatief: Niet ziek zijn
              </h2>
              <div className="space-y-4 text-white text-lg md:text-xl">
                <p>
                  Klinkt logisch, toch? Niet ziek zijn. Simpel. Effectief.
                  Waarom zou je kiezen voor hoesten, koorts en ellende als je ook
                  kunt kiezen voor... nou ja, voor niets van dat alles?
                </p>
                <p>
                  Niet ziek zijn betekent: energie. Vrolijkheid. Het vermogen om
                  te doen wat je wilt, wanneer je het wilt. Geen "nee, ik kan niet,
                  ik ben ziek" maar "ja, laten we gaan!"
                </p>
                <p>
                  Het is de ultieme vorm van vrijheid. Vrijheid van pijn,
                  vrijheid van beperkingen, vrijheid van het constant moeten
                  denken aan je gezondheid.
                </p>
              </div>
            </div>

            {/* Prevention is Better */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white bg-opacity-5 backdrop-blur-md rounded-3xl p-8 border border-pink-400 border-opacity-30">
                <h3 className="text-3xl font-black text-pink-400 mb-4">
                  Preventie is de sleutel
                </h3>
                <p className="text-white text-lg">
                  In plaats van wachten tot je ziek wordt en dan proberen het op te lossen,
                  waarom niet voorkomen dat het überhaupt gebeurt?
                  Gezond eten, bewegen, rusten, ontspannen.
                  Het klinkt saai, maar het is eigenlijk best geniaal.
                </p>
              </div>

              <div className="bg-white bg-opacity-5 backdrop-blur-md rounded-3xl p-8 border border-purple-400 border-opacity-30">
                <h3 className="text-3xl font-black text-purple-400 mb-4">
                  Luister naar je lichaam
                </h3>
                <p className="text-white text-lg">
                  Je lichaam is eigenlijk best slim. Het geeft signalen wanneer
                  iets niet goed is. Vermoeid? Rust uit. Honger? Eet.
                  Stress? Ontspan. Het is niet rocket science,
                  maar het werkt wel beter dan de meeste rocket science.
                </p>
              </div>
            </div>

            {/* Practical Tip */}
            <div className="bg-gradient-to-r from-red-600 to-rose-600 rounded-3xl p-8 md:p-12 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6 transform hover:scale-105 hover:rotate-2 transition-all duration-300 cursor-pointer active:scale-95">
                🎯 Praktische Tip
              </h2>
              <div className="space-y-4 text-white text-lg md:text-xl">
                <p className="hover:text-red-200 transition-colors duration-300 cursor-pointer">
                  <strong>De natuur kan je genezen.</strong> Je lichaam is een prachtige zelfgenezende machine
                  wanneer je het de juiste omstandigheden geeft. De natuur biedt alles wat je nodig hebt.
                </p>
                <p className="hover:text-rose-200 transition-colors duration-300 cursor-pointer">
                  <strong>Onze natuurlijke staat is geen voeding, water of slaap.</strong>
                  Wie ooit heeft gelezen dat dieren in het wild tellen hoeveel calorieën ze eten,
                  hoeveel glazen water ze drinken, of hoeveel uur ze slapen?
                </p>
                <p className="hover:text-red-200 transition-colors duration-300 cursor-pointer">
                  <strong>Vasten is onze natuurlijke staat van zijn.</strong> Vroeger aten we niet elke dag,
                  en ons lichaam is perfect ontworpen om periodes zonder voeding te overleven en zelfs te floreren.
                </p>
                <p className="hover:text-rose-200 transition-colors duration-300 cursor-pointer">
                  <strong>De voordelen van vasten zijn enorm:</strong> celvernieuwing (autophagy),
                  verbeterde insulinegevoeligheid, mentale helderheid, meer energie, en zelfs langere levensduur.
                  Start met 16:8 intermittent fasting en voel hoe je lichaam tot leven komt.
                </p>
                <p className="hover:text-rose-200 transition-colors duration-300 cursor-pointer">
                  Vertrouw op je lichaam en de natuur. Ze weten wat goed voor je is.
                  Luister naar je hongersignalen, eet wanneer je echt honger hebt, en
                  geef je spijsvertering rust om te herstellen.
                </p>
                <div className="mt-6 p-4 bg-rose-600 bg-opacity-20 rounded-2xl border border-rose-400 border-opacity-30">
                  <p className="text-sm text-rose-200 mb-2">🧘 Je geest beïnvloedt je gezondheid</p>
                  <Link to="/openjegeest" className="text-rose-300 hover:text-rose-100 underline font-bold transition-colors duration-300">
                    Ontdek hoe je denken je genezing beïnvloedt →
                  </Link>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center py-12">
              <div className="bg-black bg-opacity-40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white border-opacity-20 transform hover:scale-105 hover:rotate-2 transition-all duration-500 cursor-pointer active:scale-95">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 hover:scale-105 hover:rotate-2 transition-all duration-300">
                  Dus... wees niet zot!
                </h2>
                <p className="text-xl md:text-2xl text-white mb-6 hover:text-pink-200 transition-colors duration-300">
                  Zorg goed voor jezelf, want niemand anders doet het voor je
                </p>
                <div className="inline-block transform hover:scale-110 hover:rotate-6 transition-all duration-300 cursor-pointer active:scale-95">
                  <p className="text-3xl md:text-5xl font-black text-red-400 hover:text-red-300 transition-colors duration-300">
                    BLIJF GEZOND!
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
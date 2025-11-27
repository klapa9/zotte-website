import { useSeoMeta } from '@unhead/react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CursorStyles from '@/components/CursorStyles';
import Navigation from '@/components/Navigation';

const OpenJeGeest = () => {
  const [explosion, setExplosion] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useSeoMeta({
    title: 'Open Je Geest - Blaas je Oude Ideëen Op',
    description: 'Alles is veel zotter dan je denkt! Ontdek hoe een open geest je oude ideëen kan opblazen.',
  });

  useEffect(() => {
    const explosionInterval = setInterval(() => {
      setExplosion(true);
      setTimeout(() => setExplosion(false), 1000);
    }, 5000);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearInterval(explosionInterval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <CursorStyles />
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-pink-900 overflow-hidden relative">
      {/* Explosive background particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-white rounded-full ${explosion ? 'animate-explosion' : 'animate-float'}`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 5 + 3}s`,
              animationDelay: `${Math.random() * 2}s`,
              background: `hsl(${Math.random() * 60 + 280}, 80%, 70%)`,
            }}
          />
        ))}
      </div>

      {/* Mind-expanding circles */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border-2 border-white border-opacity-10"
            style={{
              width: `${100 + i * 80}%`,
              height: `${100 + i * 80}%`,
              top: `${-25 - i * 25}%`,
              left: `${-25 - i * 25}%`,
              animation: `expand ${6 + i}s infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <div className="py-16 px-4 text-center">
          <h1 className={`text-7xl md:text-9xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 ${explosion ? 'animate-pulse' : ''}`}>
            OPEN JE GEEST
          </h1>
          <p className="text-2xl md:text-3xl text-white font-bold">
            De wereld is anders dan je denkt
          </p>
        </div>

        {/* Main Content */}
        <div className="flex-1 px-4 pb-16">
          <div className="max-w-6xl mx-auto space-y-20">
            {/* Big Statement */}
            <div className="text-center">
              <div className="inline-block transform hover:scale-110 transition-transform duration-500">
                <p className="text-5xl md:text-7xl font-black text-white leading-tight">
                  alles is veel zotter dan je denkt!
                </p>
              </div>
            </div>

            {/* What does it mean? */}
            <div className="bg-white bg-opacity-5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-purple-400 border-opacity-30">
              <h2 className="text-4xl md:text-5xl font-black text-purple-400 mb-6">
                Wat betekent dit eigenlijk?
              </h2>
              <div className="space-y-4 text-white text-lg md:text-xl">
                <p>
                  Je denkt dat je de wereld begrijpt. Je hebt je theorieën, je overtuigingen,
                  je zekerheden. Maar wat als alles wat je denkt te weten,
                  slechts een klein stukje van de realiteit is?
                </p>
                <p>
                  De werkelijkheid is veel vreemder, complexer, en wonderlijker
                  dan ons beperkte brein kan bevatten. Quantumfysica, bewustzijn,
                  de aard van tijd en ruimte - het zijn allemaal concepten
                  die onze intuïtie tarten.
                </p>
                <p>
                  En dat is nog maar het begin. Wat als er nog veel meer is?
                  Dingen die we ons nog niet eens kunnen voorstellen?
                  Dat is waar het echt zot wordt.
                </p>
              </div>
            </div>

            {/* Open Geest Section */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 transform hover:scale-105 transition-all duration-500">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                HEB EEN OPEN GEEST
              </h2>
              <div className="space-y-4 text-white text-lg md:text-xl">
                <p>
                  Een open geest is niet hetzelfde als een leeg hoofd.
                  Het is een hoofd dat ruimte maakt voor nieuwe ideëen,
                  nieuwe perspectieven, nieuwe mogelijkheden.
                </p>
                <p>
                  Het betekent dat je bereid bent om je oude overtuigingen
                  ter discussie te stellen. Dat je durft te zeggen:
                  "Misschien heb ik het fout. Misschien is er meer."
                </p>
                <p>
                  Een open geest is de sleutel tot groei. Zonder openheid
                  blijf je vastzitten in dezelfde denkkaders,
                  dezelfde beperkingen, dezelfde realiteit.
                </p>
              </div>
            </div>

            {/* Oude Ideëen Opblazen */}
            <div className="bg-black bg-opacity-40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-pink-400 border-opacity-30">
              <h2 className="text-4xl md:text-5xl font-black text-pink-400 mb-6">
                ALLEEN ZO KAN JE JE OUDE IDEEËN OPBLAZEN!
              </h2>
              <div className="space-y-4 text-white text-lg md:text-xl">
                <p>
                  Je oude ideëen zijn als een kooi. Ze houden je gevangen,
                  beperken je mogelijkheden, bepalen je realiteit.
                  Om echt vrij te zijn, moet je die kooi opblazen.
                </p>
                <p>
                  En dat is precies wat een open geest doet. Het stelt vragen.
                  Het twijfelt. Het onderzoekt. Het durft te denken
                  wat nog nooit gedacht is.
                </p>
                <p>
                  Het resultaat? Een explosie van nieuwe mogelijkheden.
                  Een wereld die plotseling veel groter, kleurrijker,
                  en interessanter is dan je ooit had kunnen bedenken.
                </p>
              </div>
            </div>

            {/* Examples of Mind-Blowing Ideas */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Tijd is een illusie", desc: "Verleden, heden en toekomst bestaan allemaal tegelijk" },
                { title: "Je bent het universum", desc: "Je bewustzijn is een fragment van het grotere geheel" },
                { title: "Realiteit is een projectie", desc: "De wereld om je heen wordt gecreëerd door je perceptie" },
                { title: "Alles is verbonden", desc: "Elke deeltje beïnvloedt elk ander deeltje in het universum" },
                { title: "Oneindige mogelijkheden", desc: "Er zijn oneindig veel parallelle werelden" },
                { title: "Bewustzijn is fundamenteel", desc: "Bewustzijn komt niet uit de hersenen, maar andersom" }
              ].map((idea, index) => (
                <div
                  key={index}
                  className="bg-white bg-opacity-5 backdrop-blur-md rounded-2xl p-6 border border-white border-opacity-20 transform hover:scale-105 hover:rotate-3 transition-all duration-500"
                >
                  <h3 className="text-2xl font-black text-yellow-400 mb-3">
                    {idea.title}
                  </h3>
                  <p className="text-white text-base">
                    {idea.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Practical Tip */}
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-8 md:p-12 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6 transform hover:scale-105 hover:rotate-2 transition-all duration-300 cursor-pointer active:scale-95">
                🎯 Praktische Tip
              </h2>
              <div className="space-y-4 text-white text-lg md:text-xl">
                <p className="hover:text-purple-200 transition-colors duration-300 cursor-pointer">
                  <strong>Je leven is de spiegel van je onderbewustzijn.</strong>
                  Alles wat je ervaart - problemen, successen, relaties, gebeurtenissen -
                  is een reflectie van wat diep vanbinnen in je leeft.
                </p>
                <p className="hover:text-indigo-200 transition-colors duration-300 cursor-pointer">
                  Wanneer je herhaaldelijk dezelfde problemen tegenkomt, kijk dan niet
                  naar buiten, maar naar binnen. <strong>Elk probleem kan je inwendig oplossen.</strong>
                  De oplossing zit nooit in de buitenwereld, maar in jouw bewustzijn.
                </p>
                <p className="hover:text-purple-200 transition-colors duration-300 cursor-pointer">
                  Dit is de meest krachtige kennis die je kunt bezitten. Je hoeft niet
                  te wachten op externe veranderingen. Verander je innerlijke wereld,
                  en de buitenwereld volgt automatisch.
                </p>
                <p className="hover:text-indigo-200 transition-colors duration-300 cursor-pointer">
                  Werk met je onderbewustzijn: visualisatie, affirmaties, meditatie.
                  Herprogrammeer de diepe lagen die je realiteit creëren.
                  De resultaten zullen je verbazen - het is bijna magisch.
                </p>
                <div className="mt-6 p-4 bg-indigo-600 bg-opacity-20 rounded-2xl border border-indigo-400 border-opacity-30">
                  <p className="text-sm text-indigo-200 mb-2">💫 Alles is energie</p>
                  <Link to="/energie" className="text-indigo-300 hover:text-indigo-100 underline font-bold transition-colors duration-300">
                    Ontdek de verschillende vormen van energie →
                  </Link>
                </div>
              </div>
            </div>

            {/* Final Call to Action */}
            <div className="text-center py-12">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl p-8 md:p-12 transform hover:scale-105 hover:rotate-2 transition-all duration-500 cursor-pointer active:scale-95">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 hover:scale-110 hover:rotate-3 transition-all duration-300">
                  DURF TE DENKEN
                </h2>
                <p className="text-xl md:text-2xl text-white mb-6 hover:text-yellow-200 transition-colors duration-300">
                  De grenzen van de werkelijkheid zijn er om doorbroken te worden
                </p>
                <p className="text-lg md:text-xl text-white opacity-90 hover:opacity-100 transition-opacity duration-300">
                  Je geest is de krachtigste tool die je hebt.
                  Gebruik haar. Daag haar uit.
                  Blaas haar op tot ongekende hoogten.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Navigation />


      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }

        @keyframes explosion {
          0% { transform: scale(0) rotate(0deg); opacity: 1; }
          50% { transform: scale(3) rotate(180deg); opacity: 0.8; }
          100% { transform: scale(0) rotate(360deg); opacity: 0; }
        }

        @keyframes expand {
          0% { transform: scale(0.8); opacity: 0.3; }
          100% { transform: scale(1.2); opacity: 0; }
        }
      `}</style>
      </div>
    </>
  );
};

export default OpenJeGeest;
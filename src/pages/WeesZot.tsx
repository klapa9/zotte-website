import { useSeoMeta } from '@unhead/react';
import { useState, useEffect } from 'react';
import CursorStyles from '@/components/CursorStyles';

const WeesZot = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useSeoMeta({
    title: 'Wees Zot! - Durf Gek te Zijn',
    description: 'Ontdek de kracht van het volgen van je enthousiasme en intuïtie.',
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
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 overflow-hidden relative">
      {/* Animated background */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full mix-blend-screen opacity-15 animate-pulse"
            style={{
              width: `${Math.random() * 400 + 100}px`,
              height: `${Math.random() * 400 + 100}px`,
              background: `hsl(${Math.random() * 60 + 280}, 70%, 60%)`,
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
          <h1 className="text-6xl md:text-8xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 animate-pulse">
            WEES ZOT!
          </h1>
          <p className="text-2xl md:text-3xl text-white font-bold mb-4">
            Durf gek te zijn, want de wereld heeft gekke mensen nodig
          </p>
        </div>

        {/* Content Sections */}
        <div className="flex-1 px-4 pb-16">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Enthousiasme Section */}
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white border-opacity-20">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Volg je Enthousiasme
              </h2>
              <div className="space-y-4 text-white text-lg md:text-xl">
                <p>
                  Enthousiasme is de brandstof van de ziel. Wanneer je iets doet met passie,
                  verdwijnt de tijd en ontstaat er magie. Je enthousiasme is je innerlijke kompas
                  dat je naar je bestemming leidt.
                </p>
                <p>
                  Stel je voor: een wereld waarin iedereen doet waar ze echt van houden.
                  Een wereld waarin enthousiasme de norm is, niet de uitzondering.
                  Dat is de wereld die we kunnen creëren.
                </p>
                <div className="mt-6 p-4 bg-purple-600 bg-opacity-20 rounded-2xl border border-purple-400 border-opacity-30">
                  <p className="text-sm text-purple-200 mb-2">💡 Wil je weten waarom dit belangrijk is?</p>
                  <a href="https://zottewebsite.be/leven" className="text-purple-300 hover:text-purple-100 underline font-bold transition-colors duration-300">
                    Ontdek de fundamentele levensvragen →
                  </a>
                </div>
              </div>
            </div>

            {/* Intuïtie Section */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Vertrouw je Intuïtie
              </h2>
              <div className="space-y-4 text-white text-lg md:text-xl">
                <p>
                  Je intuïtie is slimmer dan je denkt. Het is de stem van je onderbewustzijn,
                  de som van al je ervaringen, je diepste wijsheid. Luister ernaar.
                </p>
                <p>
                  Soms weet je iets zonder te weten hoe je het weet. Dat is geen toeval.
                  Dat is je intuïtie die je een seintje geeft. De uitdaging is om te leren
                  onderscheid te maken tussen angst en ware intuïtie.
                </p>
                <div className="mt-6 p-4 bg-pink-600 bg-opacity-20 rounded-2xl border border-pink-400 border-opacity-30">
                  <p className="text-sm text-pink-200 mb-2">🔮 Je intuïtie heeft oneindig veel potentieel</p>
                  <a href="https://zottewebsite.be/openjegeest" className="text-pink-300 hover:text-pink-100 underline font-bold transition-colors duration-300">
                    Ontdek hoe je je geest kunt openblazen →
                  </a>
                </div>
              </div>
            </div>

            {/* Dieper Gaan Section */}
            <div className="bg-black bg-opacity-30 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white border-opacity-20 transform hover:-rotate-1 hover:scale-105 transition-all duration-500 cursor-pointer active:scale-95">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 hover:scale-105 hover:rotate-2 transition-all duration-300">
                Ga Dieper in op wat je Enthousiasmeert
              </h2>
              <div className="space-y-4 text-white text-lg md:text-xl">
                <p className="hover:text-indigo-200 transition-colors duration-300 cursor-pointer">
                  Oppervlakkigheid is de vijand van groei. Wanneer iets je raakt,
                  duik erin. Onderzoek het. Begrijp het. Word er een expert in.
                </p>
                <p className="hover:text-purple-200 transition-colors duration-300 cursor-pointer">
                  De wereld heeft genoeg mensen die een beetje van alles weten.
                  Wat we nodig hebben zijn mensen die diep durven te gaan.
                  Mensen die hun onderwerp van binnen en buiten kennen.
                </p>
                <p className="hover:text-pink-200 transition-colors duration-300 cursor-pointer">
                  Diepgaande kennis leidt tot diepgaande inzichten.
                  Diepgaande inzichten leiden tot doorbraken.
                  Doorbraken veranderen de wereld.
                </p>
              </div>
            </div>

            {/* Practical Tip */}
            <div className="bg-gradient-to-r from-orange-600 to-yellow-600 rounded-3xl p-8 md:p-12 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                🎯 Praktische Tip
              </h2>
              <div className="space-y-4 text-white text-lg md:text-xl">
                <p>
                  <strong>Bekijk elke tegenslag als een les.</strong> Het universum probeert je iets te leren.
                  Wanneer je vaak dezelfde tegenslag ervaart, betekent dit dat je de les nog niet hebt begrepen.
                </p>
                <p>
                  Stop met vechten tegen tegenslag. Vraag jezelf af: "Wat probeert het leven me hier te leren?"
                  Soms is de les simpel: meer geduld hebben, beter luisteren, of loslaten wat je niet kunt controleren.
                </p>
                <p>
                  Wanneer je de les eindelijk begrijpt, verdwijnt de tegenslag als vanzelf.
                  Het is geen straf, maar een uitnodiging om te groeien en wijzer te worden.
                </p>
                <div className="mt-6 p-4 bg-yellow-600 bg-opacity-20 rounded-2xl border border-yellow-400 border-opacity-30">
                  <p className="text-sm text-yellow-200 mb-2">⚡ Heb je behoefte aan meer kracht?</p>
                  <a href="https://zottewebsite.be/energie" className="text-yellow-300 hover:text-yellow-100 underline font-bold transition-colors duration-300">
                    Ontdek de verschillende energieën die je helpen →
                  </a>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center py-12">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                Dus... wees zot!
              </h2>
              <p className="text-xl md:text-2xl text-white font-light mb-8">
                De wereld wacht op jouw gekke ideëen
              </p>
              <div className="inline-block">
                <p className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                  DOE HET NU!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 border border-white border-opacity-20">
              <h3 className="text-2xl font-black text-white mb-4 text-center">🔗 Verder Ontdekken</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                <a href="https://zottewebsite.be" className="text-yellow-300 hover:text-yellow-200 font-bold transition-colors duration-300">
                  <div className="text-3xl mb-1">🏠</div>
                  Home
                </a>
                <div className="bg-yellow-600 bg-opacity-30 rounded-xl p-3 border-2 border-yellow-400 relative">
                  <div className="absolute -right-2 -top-2 w-4 h-4 bg-green-400 rounded-full flex items-center justify-center text-white text-xs font-bold">✓</div>
                  <div className="text-3xl mb-1">🌟</div>
                  <div className="text-yellow-100 font-bold">Wees Zot</div>
                </div>
                <a href="https://zottewebsite.be/leven" className="text-purple-300 hover:text-purple-200 font-bold transition-colors duration-300">
                  <div className="text-3xl mb-1">❓</div>
                  Leven
                </a>
                <a href="https://zottewebsite.be/energie" className="text-green-300 hover:text-green-200 font-bold transition-colors duration-300">
                  <div className="text-3xl mb-1">⚡</div>
                  Energie
                </a>
                <a href="https://zottewebsite.be/openjegeest" className="text-indigo-300 hover:text-indigo-200 font-bold transition-colors duration-300">
                  <div className="text-3xl mb-1">🧠</div>
                  Open Geest
                </a>
              </div>
            </div>
          </div>
        </div>


      </div>
      </div>
    </>
  );
};

export default WeesZot;
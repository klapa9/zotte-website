import { useSeoMeta } from '@unhead/react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CursorStyles from '@/components/CursorStyles';
import Navigation from '@/components/Navigation';
import PracticalTip from '@/components/PracticalTip';
import AudioPlayer from '@/components/AudioPlayer';

const Leven = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useSeoMeta({
    title: 'L E V E N ? - De Grote Vragen',
    description: 'Verken de fundamentele vragen van het leven: waarom leef je, wat is belangrijk, hoe kan je beter leven?',
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <CursorStyles />
      <AudioPlayer pageType="leven" />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-800 overflow-hidden relative">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              background: `linear-gradient(45deg, hsl(${Math.random() * 60 + 200}, 70%, 60%), hsl(${Math.random() * 60 + 180}, 70%, 60%))`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              clipPath: Math.random() > 0.5 ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
              animation: `float ${Math.random() * 10 + 10}s infinite linear`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <div className="py-16 px-4 text-center">
          <h1 className="text-7xl md:text-9xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">
            L E V E N ?
          </h1>
          <p className="text-2xl md:text-3xl text-white font-bold">
            De vragen die alles veranderen
          </p>
        </div>

        {/* Main Content */}
        <div className="flex-1 px-4 pb-16">
          <div className="max-w-6xl mx-auto space-y-20">
            {/* Waarom leef je? */}
            <div className="bg-white bg-opacity-5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-cyan-400 border-opacity-30 transform hover:scale-105 transition-all duration-500">
              <h2 className="text-4xl md:text-5xl font-black text-cyan-400 mb-6">
                Waarom leef je?
              </h2>
              <div className="space-y-4 text-white text-lg md:text-xl">
                <p>
                  Dit is misschien wel de meest fundamentele vraag die je jezelf kunt stellen.
                  Het antwoord bepaalt alles: je keuzes, je prioriteiten, je geluk.
                </p>
                <p>
                  Misschien leef je om lief te hebben. Om te leren. Om te creëren.
                  Om anderen te helpen. Om de wereld een beetje beter te maken.
                  Of misschien is het simpelweg: omdat het leuk is.
                </p>
                <p>
                  Het mooie is: er is geen juist antwoord. Jouw antwoord is het juiste antwoord.
                  Maar de vraag stellen? Dat is de eerste stap naar een bewust leven.
                </p>
                <div className="mt-6 p-4 bg-cyan-600 bg-opacity-20 rounded-2xl border border-cyan-400 border-opacity-30">
                  <p className="text-sm text-cyan-200 mb-2">🔥 Wat drijft jou?</p>
                  <Link to="/weeszot" className="text-cyan-300 hover:text-cyan-100 underline font-bold transition-colors duration-300">
                    Volg je enthousiasme en ontdek je passie →
                  </Link>
                </div>
              </div>
            </div>

            {/* Wat is belangrijk in je leven? */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 transform hover:rotate-1 transition-all duration-500">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Wat is belangrijk in je leven?
              </h2>
              <div className="space-y-4 text-white text-lg md:text-xl">
                <p>
                  Tijd, aandacht, energie. Dat zijn je meest waardevolle bezittingen.
                  Waar geef je ze aan? Dat zegt alles over wat echt belangrijk voor je is.
                </p>
                <p>
                  Is het geld? Status? Relaties? Persoonlijke groei? Vrijheid?
                  Of misschien iets heel anders? Iets wat niemand anders begrijpt,
                  maar voor jou alles betekent.
                </p>
                <p>
                  De kunst is om te leven in overeenstemming met wat belangrijk is.
                  Niet praten over wat belangrijk is, maar er ook echt naar handelen.
                  Dat is de uitdaging. En de beloning.
                </p>
                <div className="mt-6 p-4 bg-indigo-600 bg-opacity-20 rounded-2xl border border-indigo-400 border-opacity-30">
                  <p className="text-sm text-indigo-200 mb-2">💰 Energie heeft vele vormen</p>
                  <Link to="/energie" className="text-indigo-300 hover:text-indigo-100 underline font-bold transition-colors duration-300">
                    Ontdek de kracht van verschillende energieën →
                  </Link>
                </div>
              </div>
            </div>

            {/* Hoe kan je beter leven? */}
            <div className="bg-black bg-opacity-40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-blue-400 border-opacity-30 transform hover:-rotate-1 transition-all duration-500">
              <h2 className="text-4xl md:text-5xl font-black text-blue-400 mb-6">
                Hoe kan je beter leven?
              </h2>
              <div className="space-y-4 text-white text-lg md:text-xl">
                <p>
                  Beter leven begint met bewustwording. Weten wie je bent, wat je wilt,
                  en waarom je het wilt. Zonder bewustwording is elke verandering slechts
                  een oppervlakkige cosmetische ingreep.
                </p>
                <p>
                  Daarna komt actie. Kleine stappen, consequent uitgevoerd.
                  Niet wachten op motivatie, maar discipline ontwikkelen.
                  Niet perfectionisme nastreven, maar vooruitgang.
                </p>
                <p>
                  En misschien wel het belangrijkste: mildheid voor jezelf.
                  Accepteren dat je fouten maakt, dat je niet perfect bent,
                  maar dat je wel elke dag een beetje beter probeert te worden.
                </p>
              </div>
            </div>

            <PracticalTip pageType="leven" />

            {/* Integration Section */}
            <div className="text-center py-12">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl p-8 md:p-12 transform hover:scale-105 hover:rotate-3 transition-all duration-500 cursor-pointer active:scale-95">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 hover:scale-105 hover:rotate-2 transition-all duration-300">
                  Het leven is een reis
                </h2>
                <p className="text-xl md:text-2xl text-white mb-6 hover:scale-105 hover:rotate-1 transition-all duration-300">
                  Geen bestemming, maar een constante ontdekkingstocht
                </p>
                <p className="text-lg md:text-xl text-white opacity-90 hover:opacity-100 transition-opacity duration-300">
                  Elke vraag leidt naar nieuwe inzichten.
                  Elk inzicht leidt naar nieuwe vragen.
                  En zo groei je, stap voor stap, dag na dag.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Navigation />


      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-50px) rotate(180deg); }
          100% { transform: translateY(0px) rotate(360deg); }
        }
      `}</style>
      </div>
    </>
  );
};

export default Leven;
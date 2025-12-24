import { useSeoMeta } from '@unhead/react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CursorStyles from '@/components/CursorStyles';
import Navigation from '@/components/Navigation';
import PracticalTip from '@/components/PracticalTip';
import AudioPlayer from '@/components/AudioPlayer';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ideas } from "../data/ideas";

const OpenJeGeest = () => {
  const [explosion, setExplosion] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeWord, setActiveWord] = useState(0);
  const [selectedIdea, setSelectedIdea] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    setSelectedIdea(index); // automatisch opent de dialog via conditional rendering
  };
  
  useSeoMeta({
    title: 'Open Je Geest - Blaas je Oude Ideëen Op',
    description: 'Alles is veel zotter dan je denkt!',
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
      <AudioPlayer pageType="openjegeest" />
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
                  Alles is veel zotter dan je denkt!
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

            {/* What does it mean? */}
            <div className="bg-white bg-opacity-5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-purple-400 border-opacity-30">
              <h2 className="text-4xl md:text-5xl font-black text-purple-400 mb-6">
                Je bent de schepper van je eigen werkelijkheid
              </h2>
              <div className="space-y-4 text-white text-lg md:text-xl">
                <p>
                  Jij bepaalt waar je je op focust.
                  Je gedachten creëren je ervaring.
                  Wat jij gelooft, wordt jouw waarheid.
                </p>
                <p>
                  Dus als je je geest opent voor nieuwe ideëen,
                  als je bereid bent om anders te denken,
                  dan verander je niet alleen jezelf,
                  maar ook de wereld om je heen.
                </p>
                <p>
                  Vergeet dus de beperkingen die je jezelf hebt opgelegd.
                  Jij bent geen slachtoffer van de realiteit.
                  Jij bent de schepper van je eigen werkelijkheid.
                </p>
              </div>
            </div>

            {/* Geloof Section */}
              <div className="bg-gradient-to-r from-green-400 to-blue-400 rounded-3xl p-8 md:p-12 mb-12 transform hover:scale-105 hover:rotate-2 transition-all duration-500 active:scale-95">
              <h2 className="text-4xl md:text-5xl font-black text-purple-600 mb-6">
                Je geloof bepaalt je limieten.
              </h2>
              <div className="space-y-4 text-white text-lg md:text-xl">
                <p>
                  Alles waar jij in gelooft, zorgt voor jouw werkelijkheid. Als jij gelooft dat iets onmogelijk is,
                  dan zal je manieren vinden om dat te bevestigen.
                </p>
                <p>
                  Als je gelooft dat je iets kan, dan zal je manieren vinden om dat te ervaren.
                  Jouw overtuigingen bepalen jouw ervaring.
                </p>
                <p>
                  Dat is gemakkelijker gezegd dan gedaan, want je moet het <strong>echt geloven! </strong>
                  Daarom heb je een open geest nodig. Om je oude overtuigingen los te laten
                  en nieuwe mogelijkheden te omarmen.
                </p>
              </div>
            </div>

            {/* Examples of Mind-Blowing Ideas */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ideas.map((idea, index) => (
                <div
                  key={index}
                  className="relative bg-white bg-opacity-5 backdrop-blur-md rounded-2xl p-6 border border-white border-opacity-20 transform hover:scale-105 hover:rotate-3 transition-all duration-500 cursor-pointer"
                  onClick={() => handleSelect(index)}
                >
                  {/* Info icon (gebruikt dezelfde klik als de kaart) */}
                  <div
                    className="absolute top-4 right-4 text-white/70 hover:text-yellow-400 transition pointer-events-none"
                    aria-hidden="true"
                  >
                    👀
                  </div>

                  <h3 className="text-2xl font-black text-yellow-400 mb-3">
                    {idea.title}
                  </h3>
                  <p className="text-white text-base">
                    {idea.desc}
                  </p>
                </div>
              ))}
            </div>


            <PracticalTip pageType="openjegeest" />

            {/* Final Call to Action */}
            <div className="text-center py-12">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl p-8 md:p-12 transform hover:scale-105 hover:rotate-2 transition-all duration-500 active:scale-95">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 hover:scale-110 hover:rotate-3 transition-all duration-300">
                  Focus 
                </h2>
                <p className="text-xl md:text-2xl text-white mb-6 hover:text-yellow-200 transition-colors duration-300">
                  Laat je niet afleiden.
                </p>
                <p className="text-lg md:text-xl text-white opacity-90 hover:opacity-100 transition-opacity duration-300">
                  Je geest is de krachtigste tool die je hebt.
                  Waar jij je op focust, groeit.                 
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
       <Dialog open={selectedIdea !== null} onOpenChange={() => setSelectedIdea(null)}>
        {selectedIdea !== null && (
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-slate-900 to-slate-800 text-white border-2 border-yellow-400">
            
            {/* Header */}
            <DialogHeader>
              <DialogTitle className="text-3xl md:text-4xl font-black text-yellow-300 mb-4">
                {ideas[selectedIdea].title}
              </DialogTitle>

              {/* Beschrijving (visueel verborgen, toegankelijk) */}
              <DialogDescription className="sr-only">
                {ideas[selectedIdea].desc ?? ""}
              </DialogDescription>
            </DialogHeader>

            {/* Content */}
            <div className="space-y-6 text-lg">
              {/* Lange tekst secties */}
              {ideas[selectedIdea].longText?.map((paragraph, i) => (
                <div
                  key={i}
                  className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400 border-opacity-30"
                >
                  <p>{paragraph}</p>
                </div>
              ))}

              {/* Afbeelding */}
              {ideas[selectedIdea].image && (
                <div className="mt-6 flex justify-center">
                  <img
                    src={ideas[selectedIdea].image}
                    alt={ideas[selectedIdea].title}
                    className="rounded-xl shadow-xl"
                  />
                </div>
              )}

              {/* Bullet points */}
              {ideas[selectedIdea].bullets && (
                <ul className="list-disc list-inside space-y-2 text-white/90">
                  {ideas[selectedIdea].bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}

              {/* Sluitknop */}
              <div className="text-center pt-4">
                <Button
                  onClick={() => setSelectedIdea(null)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Sluiten
                </Button>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>



    </>
  );
};

export default OpenJeGeest;
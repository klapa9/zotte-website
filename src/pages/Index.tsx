import { useSeoMeta } from '@unhead/react';
import { useState, useEffect, useMemo } from 'react';

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isGlitching, setIsGlitching] = useState(false);

  useSeoMeta({
    title: 'Wees Zot! - Mindblowing Ideas',
    description: 'Een gekke website voor het inspireren en uitdagen van mensen om mindblowing ideëen te leren.',
  });

  // Pre-calculate background elements to prevent flickering
  const backgroundElements = useMemo(() => {
    return [...Array(15)].map((_, i) => ({
      id: i,
      width: Math.random() * 400 + 100,
      height: Math.random() * 400 + 100,
      color: `hsl(${Math.random() * 360}, 70%, 60%)`,
      top: Math.random() * 100,
      left: Math.random() * 100,
    }));
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 3000);

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(glitchInterval);
    };
  }, []);

  const calculateRotation = (x: number, y: number, intensity: number = 10) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const rotateX = ((y - centerY) / centerY) * intensity;
    const rotateY = ((x - centerX) / centerX) * -intensity;
    return { rotateX, rotateY };
  };

  const { rotateX, rotateY } = calculateRotation(mousePosition.x, mousePosition.y);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-orange-600 overflow-hidden relative">
      {/* Static background elements - no more flickering! */}
      <div className="absolute inset-0">
        {backgroundElements.map((element) => (
          <div
            key={element.id}
            className="absolute rounded-full mix-blend-screen opacity-20"
            style={{
              width: `${element.width}px`,
              height: `${element.height}px`,
              background: element.color,
              top: `${element.top}%`,
              left: `${element.left}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Hero Section - Wees Zot! */}
        <a
          href="https://zottewebsite.be/weeszot"
          className="flex-1 flex items-center justify-center px-4 py-20 group"
          style={{
            transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <div className={`text-center max-w-4xl ${isGlitching ? 'animate-glitch' : ''}`}>
            <h1 className="text-6xl md:text-8xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 animate-pulse group-hover:scale-110 transition-transform duration-300">
              WEES ZOT!
            </h1>
            <div className="space-y-6 text-white">
              <p className="text-2xl md:text-3xl font-bold transform hover:scale-110 hover:rotate-6 transition-all duration-300 inline-block cursor-pointer active:scale-95">
                Volg je enthousiasme
              </p>
              <p className="text-xl md:text-2xl font-light italic opacity-90 transform hover:scale-105 hover:rotate-3 transition-all duration-300 inline-block cursor-pointer active:scale-95">
                Volg je intuïtie en ga dieper in op wat je enthousiasmeert!
              </p>
            </div>
          </div>
        </a>

        {/* L E V E N Section */}
        <a href="https://zottewebsite.be/leven" className="py-20 px-4 bg-black bg-opacity-30 backdrop-blur-sm block group">
          <div
            className="max-w-6xl mx-auto"
            style={{
              transform: `perspective(1000px) rotateX(${calculateRotation(mousePosition.x, mousePosition.y, 3).rotateX}deg) rotateY(${calculateRotation(mousePosition.x, mousePosition.y, 3).rotateY}deg)`,
              transition: 'transform 0.2s ease-out',
            }}
          >
            <h2 className="text-5xl md:text-7xl font-black text-center mb-12 text-white tracking-wider group-hover:scale-110 transition-transform duration-300">
              L E V E N ?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <a href="https://zottewebsite.be/leven" className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 transform hover:rotate-3 hover:scale-105 transition-all duration-500 border border-white border-opacity-20 group">
                <p className="text-xl md:text-2xl text-white font-medium">Waarom leef je?</p>
              </a>
              <a href="https://zottewebsite.be/leven" className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 transform hover:rotate-3 hover:scale-105 transition-all duration-500 border border-white border-opacity-20 group">
                <p className="text-xl md:text-2xl text-white font-medium">Wat is belangrijk in je leven?</p>
              </a>
              <a href="https://zottewebsite.be/weeszot" className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 transform hover:rotate-3 hover:scale-105 transition-all duration-500 border border-white border-opacity-20 group">
                <p className="text-xl md:text-2xl text-white font-medium">Hoe kan je beter leven?</p>
              </a>
            </div>
          </div>
        </a>

        {/* ENERGIE Section */}
        <a href="https://zottewebsite.be/energie" className="py-20 px-4 block group">
          <div
            className="max-w-6xl mx-auto"
            style={{
              transform: `perspective(1000px) rotateX(${calculateRotation(mousePosition.x, mousePosition.y, 4).rotateX}deg) rotateY(${calculateRotation(mousePosition.x, mousePosition.y, 4).rotateY}deg)`,
              transition: 'transform 0.2s ease-out',
            }}
          >
            <h2 className="text-6xl md:text-8xl font-black text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600 group-hover:scale-110 transition-transform duration-300">
              ENERGIE
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {[
                "ECHT", "NIENORMAAL", "Helemaal", "Rekbaar",
                "Groeibaar", "Immens", "EPIC"
              ].map((word, index) => (
                <div
                  key={index}
                  className="text-center p-4 transition-all duration-500"
                  style={{
                    animation: `bounce 2s infinite ${index * 0.1}s`,
                    transform: `perspective(1000px) rotateX(${calculateRotation(mousePosition.x, mousePosition.y, 8).rotateX}deg) rotateY(${calculateRotation(mousePosition.x, mousePosition.y, 8).rotateY}deg)`,
                    transition: 'transform 0.2s ease-out',
                  }}
                >
                  <span className="text-2xl md:text-3xl font-bold text-white inline-block hover:scale-125 hover:rotate-12 hover:skew-y-12 transition-transform duration-300">
                    {word}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </a>

        {/* Ziek Zot Section */}
        <a href="https://zottewebsite.be/Ziekzot" className="py-20 px-4 bg-gradient-to-r from-red-600 to-pink-600 block group">
          <div
            className="max-w-4xl mx-auto text-center"
            style={{
              transform: `perspective(1000px) rotateX(${calculateRotation(mousePosition.x, mousePosition.y, 5).rotateX}deg) rotateY(${calculateRotation(mousePosition.x, mousePosition.y, 5).rotateY}deg)`,
              transition: 'transform 0.2s ease-out',
            }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-8 text-white group-hover:scale-110 transition-transform duration-300">
              Ziek Zot!
            </h2>
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl text-white font-bold">
                Ziek zijn is zot!
              </p>
              <p className="text-xl md:text-2xl text-white font-light">
                Beter om gewoon niet zot ziek te zijn!
              </p>
            </div>
          </div>
        </a>

        {/* Wat? Section */}
        <a href="https://zottewebsite.be/openjegeest" className="py-20 px-4 bg-black bg-opacity-50 block group">
          <div
            className="max-w-4xl mx-auto text-center"
            style={{
              transform: `perspective(1000px) rotateX(${calculateRotation(mousePosition.x, mousePosition.y, 6).rotateX}deg) rotateY(${calculateRotation(mousePosition.x, mousePosition.y, 6).rotateY}deg)`,
              transition: 'transform 0.2s ease-out',
            }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8 text-white group-hover:scale-110 transition-transform duration-300">
              Wat?
            </h2>
            <div className="transform hover:scale-110 transition-transform duration-500">
              <p className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 animate-pulse">
                Mind blowers!
              </p>
            </div>
          </div>
        </a>

        {/* Big Statement */}
        <div className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <a href="https://zottewebsite.be/openjegeest" className="text-4xl md:text-6xl font-black text-white leading-tight transform hover:scale-105 transition-transform duration-300 inline-block">
              Alles is veel zotter dan je denkt!
            </a>
          </div>
        </div>

        {/* Open Geest Section */}
        <a href="https://zottewebsite.be/openjegeest" className="py-20 px-4 bg-gradient-to-r from-purple-600 to-indigo-800 block group">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl md:text-4xl font-bold text-white leading-relaxed transform hover:rotate-1 hover:scale-105 transition-all duration-500 group-hover:scale-110">
              HEB EEN OPEN GEEST, ALLEEN ZO KAN JE JE OUDE IDEEËN OPBLAZEN!
            </p>
          </div>
        </a>

        {/* FAQ Section */}
        <div className="py-20 px-4 bg-black bg-opacity-30 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-12 text-white transform hover:scale-110 hover:rotate-3 transition-all duration-300 cursor-pointer active:scale-95">FAQ</h2>
            <p className="text-xl md:text-2xl text-white mb-4 transform hover:scale-105 hover:rotate-2 transition-all duration-300 cursor-pointer active:scale-95">Veelgestelde vragen</p>
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-20 transform hover:scale-105 hover:rotate-2 transition-all duration-300 cursor-pointer active:scale-95">
              <p className="text-lg text-white mb-4 hover:text-yellow-300 transition-colors duration-300 cursor-pointer active:scale-95">Stel hier je vragen</p>
              <p className="text-lg text-pink-400 font-bold hover:text-pink-300 transition-colors duration-300 cursor-pointer active:scale-95">Werkt nog niet</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="py-12 px-4 bg-black bg-opacity-50 text-center">
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-white text-lg transform hover:scale-105 hover:rotate-2 transition-all duration-300 cursor-pointer active:scale-95">
              Contacteer mij: <span className="text-pink-400 font-bold hover:text-pink-300 transition-colors duration-300 cursor-pointer active:scale-95">puurleven@protonmail.com</span>
            </p>
            <p className="text-gray-300 transform hover:scale-105 hover:rotate-1 transition-all duration-300 cursor-pointer active:scale-95">© 2025 Alles mag gekopieerd worden! Laat je gaan!</p>
            <p className="text-red-400 font-bold text-lg transform hover:scale-110 hover:rotate-3 hover:text-red-300 transition-all duration-300 cursor-pointer active:scale-95">Geen cookies! Cookies</p>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-20px); }
          60% { transform: translateY(-10px); }
        }

        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-5px, 5px); }
          40% { transform: translate(-5px, -5px); }
          60% { transform: translate(5px, 5px); }
          80% { transform: translate(5px, -5px); }
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-glitch {
          animation: glitch 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Index;

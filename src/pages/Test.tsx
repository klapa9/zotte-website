import { useSeoMeta } from '@unhead/react';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import CursorStyles from '@/components/CursorStyles';
import Navigation from '@/components/Navigation';
import AudioPlayer from '@/components/AudioPlayer';

const Test = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useSeoMeta({
    title: 'Mindblowing Ideas - Alles is veel zotter dan je denkt',
    description: 'Ontdek een wereld waar alles anders is dan je denkt. Durf zot te zijn, open je geest, en laat je leven exploderen met energie!',
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Determine which section is in view
      const sections = document.querySelectorAll('.section-trigger');
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveSection(index);
        }
      });
    };

    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 300);
    }, 4000);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      clearInterval(glitchInterval);
    };
  }, []);

  const calculateTransform = (x: number, y: number, intensity: number = 15) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const rotateX = ((y - centerY) / centerY) * intensity;
    const rotateY = ((x - centerX) / centerX) * -intensity;
    const translateX = ((x - centerX) / centerX) * intensity * 0.5;
    const translateY = ((y - centerY) / centerY) * intensity * 0.5;
    return { rotateX, rotateY, translateX, translateY };
  };

  const { rotateX, rotateY, translateX, translateY } = calculateTransform(mousePosition.x, mousePosition.y);

  // Content sections for the site
  const siteSections = [
    {
      title: "WEES ZOT",
      subtitle: "Durf gek te zijn",
      description: "Volg je enthousiasme, vertrouw je intuïtie en durf anders te zijn. De wereld heeft jouw zotte ideeën nodig!",
      route: "/weeszot",
      gradient: "from-yellow-400 via-pink-500 to-purple-600",
      icon: "🎭",
      questions: ["Wat als je alles durft?", "Waar wacht je nog op?", "Zot genoeg?"]
    },
    {
      title: "LEVEN?",
      subtitle: "De fundamentele vragen",
      description: "Waarom leef je? Wat is echt belangrijk? Hoe kan je beter leven? Duik diep in de betekenis van bestaan.",
      route: "/leven",
      gradient: "from-blue-400 via-purple-500 to-pink-600",
      icon: "🌱",
      questions: ["Waarom ben je hier?", "Wat geeft richting?", "Hoe leef je voluit?"]
    },
    {
      title: "ENERGIE",
      subtitle: "Onbegrensde kracht",
      description: "Ontdek de bron van vitale kracht. Van normaal naar EPIC - jouw energiereserve is oneindig!",
      route: "/energie",
      gradient: "from-green-400 to-blue-600",
      icon: "⚡",
      questions: ["Wat drijft je?", "Hoe explodeer je energie?", "Wanneer voel je je EPIC?"]
    },
    {
      title: "ZIEK ZOT",
      subtitle: "Spel met de grenzen",
      description: "Ziek zijn is zot! Beter om gewoon niet zot ziek te zijn. Een speelse kijk op gezondheid en welzijn.",
      route: "/ziekzot",
      gradient: "from-red-600 to-pink-600",
      icon: "🎪",
      questions: ["Gezond of zot?", "Waar ligt de grens?", "Wie bepaalt het?"]
    },
    {
      title: "OPEN JE GEEST",
      subtitle: "Blaas je ideeën op",
      description: "Alles is veel zotter dan je denkt! Quantumfysica, bewustzijn, parallelle werelden - de realiteit is verrassender dan je kunt voorstellen.",
      route: "/openjegeest",
      gradient: "from-purple-600 to-indigo-800",
      icon: "🌌",
      questions: ["Wat is echt?", "Hoe groot is de werkelijkheid?", "Durf jij te denken?"]
    }
  ];

  return (
    <>
      <CursorStyles />
      <AudioPlayer pageType="test" />
      <div className="min-h-screen bg-black overflow-hidden relative">
        {/* Animated background */}
        <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full mix-blend-screen opacity-20"
              style={{
                width: `${Math.random() * 600 + 100}px`,
                height: `${Math.random() * 600 + 100}px`,
                background: `hsl(${Math.random() * 360}, 70%, 60%)`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `translate(${translateX * 0.3}px, ${translateY * 0.3}px) translateY(${-scrollY * 0.5}px)`,
                transition: 'transform 0.1s ease-out',
                animation: `float ${Math.random() * 20 + 10}s infinite ease-in-out`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Hero Section */}
          <section className="min-h-screen flex items-center justify-center px-4 relative section-trigger">
            <div 
              className="text-center max-w-6xl"
              style={{
                transform: `perspective(1000px) rotateX(${rotateX * 0.5}deg) rotateY(${rotateY * 0.5}deg) translateX(${translateX * 0.3}px) translateY(${translateY * 0.3}px)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              {/* Main title with glitch effect */}
              <div className={`mb-8 ${isGlitching ? 'animate-glitch' : ''}`}>
                <h1 className="text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 leading-tight transform hover:scale-110 transition-transform duration-500">
                  ALLES IS
                </h1>
                <h1 className="text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-orange-500 leading-tight transform hover:scale-110 transition-transform duration-500">
                  VEEL ZOTTER
                </h1>
                <h1 className="text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-orange-500 to-yellow-400 leading-tight transform hover:scale-110 transition-transform duration-500">
                  DAN JE DENKT!
                </h1>
              </div>

              {/* Subtitle */}
              <p className="text-xl md:text-3xl text-white font-bold mb-8 opacity-90 transform hover:scale-105 transition-all duration-300">
                Welkom bij een wereld waar de realiteit zelf een mindblowing experience is
              </p>

              {/* Scroll indicator */}
              <div className="animate-bounce mt-16">
                <div className="text-white text-2xl">↓</div>
                <p className="text-white text-sm opacity-70">Scroll om te ontdekken</p>
              </div>
            </div>
          </section>

          {/* Introduction Section */}
          <section className="py-20 px-4 relative section-trigger">
            <div className="max-w-4xl mx-auto text-center">
              <div 
                className="bg-white bg-opacity-5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white border-opacity-20"
                style={{
                  transform: `translateY(${-scrollY * 0.2}px)`,
                }}
              >
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                  Kies jouw realiteit
                </h2>
                <p className="text-xl md:text-2xl text-white leading-relaxed mb-8">
                  Elke wereld die je kunt bedenken is maar één klik verwijderd.
                  Welk pad roept jou het hardst?
                </p>
                <div className="inline-block">
                  <p className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 animate-pulse">
                    DURF TE KIEZEN!
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Main Sections Grid */}
          <section className="py-20 px-4 relative section-trigger">
            <div className="max-w-7xl mx-auto">
              <div className="space-y-12 md:space-y-16">
                {siteSections.map((section, index) => (
                  <Link
                    key={section.title}
                    to={section.route}
                    className={`block group transform transition-all duration-700 ${
                      activeSection === index + 2 ? 'scale-105' : ''
                    }`}
                    style={{
                      transform: `translateY(${-scrollY * 0.1}px) translateX(${Math.sin(scrollY * 0.01 + index) * 20}px)`,
                    }}
                  >
                    <div 
                      className={`
                        bg-gradient-to-br ${section.gradient} 
                        rounded-3xl p-8 md:p-12 
                        border-2 border-white border-opacity-20
                        hover:scale-105 hover:rotate-1 
                        transition-all duration-500 cursor-pointer
                        relative overflow-hidden
                      `}
                    >
                      {/* Background pattern */}
                      <div className="absolute inset-0 opacity-10">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute rounded-full bg-white"
                            style={{
                              width: `${100 + i * 50}px`,
                              height: `${100 + i * 50}px`,
                              top: `${Math.random() * 100}%`,
                              left: `${Math.random() * 100}%`,
                              animation: `float ${5 + i * 2}s infinite ease-in-out`,
                            }}
                          />
                        ))}
                      </div>

                      <div className="relative z-10">
                        {/* Icon and title */}
                        <div className="flex items-center gap-4 mb-6">
                          <span className="text-5xl md:text-6xl">{section.icon}</span>
                          <div>
                            <h3 className="text-4xl md:text-6xl font-black text-white">
                              {section.title}
                            </h3>
                            <p className="text-xl md:text-2xl text-white opacity-90 font-bold">
                              {section.subtitle}
                            </p>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-lg md:text-xl text-white mb-8 leading-relaxed max-w-3xl">
                          {section.description}
                        </p>

                        {/* Questions */}
                        <div className="grid md:grid-cols-3 gap-4 mb-8">
                          {section.questions.map((question, qIndex) => (
                            <div
                              key={qIndex}
                              className="bg-black bg-opacity-20 backdrop-blur-sm rounded-2xl p-4 border border-white border-opacity-20 transform hover:scale-105 hover:rotate-2 transition-all duration-300"
                            >
                              <p className="text-white font-bold text-center text-sm md:text-base">
                                {question}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* Call to action */}
                        <div className="text-right">
                          <div className="inline-flex items-center gap-2 bg-black bg-opacity-30 rounded-full px-6 py-3 backdrop-blur-sm transform group-hover:scale-110 transition-all duration-300">
                            <span className="text-white font-bold text-lg">ONTDEK</span>
                            <span className="text-2xl">→</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Final Call to Action */}
          <section className="py-20 px-4 relative section-trigger">
            <div className="max-w-4xl mx-auto text-center">
              <div 
                className="bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500 rounded-3xl p-8 md:p-12 transform hover:scale-105 transition-all duration-500"
                style={{
                  transform: `rotate(${Math.sin(scrollY * 0.02) * 2}deg)`,
                }}
              >
                <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                  JE REALITEIT WACHT
                </h2>
                <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
                  De keuze is aan jou. Zet de stap. Open je geest. Wees zot.
                </p>
                <div className="space-y-4">
                  <div className="text-5xl md:text-7xl font-black text-white animate-pulse">
                    DOE HET NU!
                  </div>
                  <p className="text-lg text-white opacity-80">
                    Elke klik is een nieuwe wereld
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-12 px-4 bg-black bg-opacity-50 text-center">
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-white text-lg">
                Contacteer mij: <span className="text-pink-400 font-bold">puurleven@protonmail.com</span>
              </p>
              <p className="text-gray-300">© 2025 Alles mag gekopieerd worden! Laat je gaan!</p>
              <p className="text-red-400 font-bold text-lg">Geen cookies! Cookies</p>
            </div>
          </footer>
        </div>

        <Navigation />

        {/* Custom animations */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            25% { transform: translateY(-20px) translateX(10px); }
            50% { transform: translateY(-10px) translateX(-15px); }
            75% { transform: translateY(-30px) translateX(5px); }
          }

          @keyframes glitch {
            0%, 100% { 
              filter: hue-rotate(0deg);
              transform: translate(0);
            }
            20% { 
              filter: hue-rotate(90deg);
              transform: translate(-5px, 5px);
            }
            40% { 
              filter: hue-rotate(180deg);
              transform: translate(-5px, -5px);
            }
            60% { 
              filter: hue-rotate(270deg);
              transform: translate(5px, 5px);
            }
            80% { 
              filter: hue-rotate(360deg);
              transform: translate(5px, -5px);
            }
          }

          .animate-glitch {
            animation: glitch 0.3s ease-in-out;
          }
        `}</style>
      </div>
    </>
  );
};

export default Test;
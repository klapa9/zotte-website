import { useSeoMeta } from '@unhead/react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CursorStyles from '@/components/CursorStyles';
import Navigation from '@/components/Navigation';
import PracticalTip from '@/components/PracticalTip';
import AudioPlayer from '@/components/AudioPlayer';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const WeesZot = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showDialog, setShowDialog] = useState(false);
  const [showDialog2, setShowDialog2] = useState(false);

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
      <AudioPlayer pageType="weeszot" />
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
              Durf jezelf te zijn!
            </p>
          </div>

          {/* Content Sections */}
          <div className="flex-1 px-4 pb-16">
            <div className="max-w-6xl mx-auto space-y-16">
              {/* Enthousiasme Section */}
              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white border-opacity-20">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                  Volg je enthousiasme
                </h2>
                <div className="space-y-4 text-white text-lg md:text-xl">
                  <p>
                    Je enthousiasme is je innerlijke kompas dat je naar je bestemming leidt.
                    Het is een signaal dat je moet volgen, zelfs als het eng of onlogisch lijkt.
                  </p>
                  <p>
                    Als je je enthousiasme volgt, open je de deur naar nieuwe mogelijkheden,
                    onverwachte kansen, en magische ervaringen. Het is de sleutel tot een
                    vervuld en betekenisvol leven.
                  </p>
                  
                  <Button
                    onClick={() => setShowDialog(true)}
                    className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    💡 Van waar komt je enthousiasme?
                  </Button>
                </div>
              </div>

              {/* Dieper Gaan Section */}
              <div className="bg-black bg-opacity-30 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white border-opacity-20 transform hover:-rotate-1 hover:scale-105 transition-all duration-500 active:scale-95">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 hover:scale-105 hover:rotate-2 transition-all duration-300">
                  Creëer je eigen realiteit
                </h2>
                <div className="space-y-4 text-white text-lg md:text-xl">
                  <p className="hover:text-indigo-200 transition-colors duration-300">
                    Om je eigen realiteit te creëren, begin je met het afstemmen van je innerlijke staat op wat je wilt ervaren.
                    Denk na welke persoon je wilt zijn en belichaam die persoon nu al.
                    Fake it until you make it. 
                    Je gedachten, gevoelens en overtuigingen vormen een energetisch veld dat een bijpassende realiteit aantrekt.
                  </p>
                  <p className="hover:text-purple-200 transition-colors duration-300">
                    Er zijn veel zaken die je verhinderen om je realiteit te creëren, zoals angst en afleiding.
                    Veel obstakels komen als korte termijn plezier of comfort, maar op lange termijn niet in lijn zijn met je groei.
                    Wees op je hoede hiervoor en aanvaard korte termijn ongemak ten voordele van je passie en groei.
                    Als je deze obstakels overwint, zal je beloont worden.
                  </p>
                  <p className="hover:text-pink-200 transition-colors duration-300">
                    Soms moet je ook zaken loslaten die je niet meer dienen, zelfs als ze ooit belangrijk waren.
                    Dit kan een deel van je identiteit zijn, een relatie, een baan, of een overtuiging.
                    Door los te laten wat niet meer in lijn is met je groei, maak je ruimte voor iets beters dat al op je wacht.
                  </p>
                  <Button
                    onClick={() => setShowDialog2(true)}
                    className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    💡 Focus!
                  </Button>
                </div>
              </div>           

              <PracticalTip pageType="weeszot" />

              {/* Call to Action */}
              <div className="text-center py-12">
                <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                  Dus... wees zot!
                </h2>
                <p className="text-xl md:text-2xl text-white font-light mb-8">
                  Wees niet bang om anders te zijn.
                </p>
                <div className="inline-block">
                  <p className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                    Volg je passie!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Navigation />
        </div>
      </div>

      {/* Dialog */}
      <Dialog open={showDialog2} onOpenChange={setShowDialog2}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-cyan-900 to-blue-900 text-white border-2 border-cyan-400">
          <DialogHeader>
            <DialogTitle className="text-3xl md:text-4xl font-black text-cyan-400 mb-4">
              Focus!
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 text-lg">
            {/* Introductie */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400 border-opacity-30">
              <h3 className="text-2xl font-black text-cyan-300 mb-3">
                Denk goed na wat je wilt bereiken.
              </h3>
              <p>
                Zorg ervoor dat dit in lijn is met je diepste verlangens en waarden.
                Als je een duidelijk beeld hebt van wat je wilt, is het makkelijker om gefocust te blijven.

              </p>
            </div>

            {/*innerlijke staat */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400 border-opacity-30">
              <h3 className="text-2xl font-black text-cyan-300 mb-3">
                Kies een goed doel!
              </h3>
              <p>
                Je keuzes moeten gebaseerd zijn op liefde en niet op angst.
                Denk vooral na over wat je aan anderen kan geven, in plaats van wat je zelf kan krijgen.
                Connectie met anderen is vaak super belangrijk. Denk na met wie je dit doel wil bereiken.
              </p>
            </div>
            {/* Actie */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400 border-opacity-30">
              <h3 className="text-2xl font-black text-cyan-300 mb-3">
                Wees authentiek en trouw aan jezelf.
              </h3>
              <p>
                Je hoeft niet te voldoen aan de verwachtingen van anderen.
                Je hoeft niet te wachten op toestemming of goedkeuring.
                Zolang je niemand slecht behandelt en gelooft in jezelf, kan je niet fout gaan.
              </p>
            </div>

            {/* Loslaten */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-blue-400 border-opacity-30">
              <h3 className="text-2xl font-black text-blue-300 mb-3">
                Laat de vorm los
              </h3>
              <p>
                Je mag een duidelijk doel hebben,
                maar geen gehechtheid aan hoe of wanneer iets verschijnt.
                Vertrouw dat het leven je altijd precies brengt wat het meest in lijn is met je groei.
              </p>
            </div>

            {/* Sluit knop */}
            <div className="text-center pt-4">
              <Button
                onClick={() => setShowDialog2(false)}
                className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Sluiten
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>


      {/* Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-cyan-900 to-blue-900 text-white border-2 border-cyan-400">
          <DialogHeader>
            <DialogTitle className="text-3xl md:text-4xl font-black text-cyan-400 mb-4">
              Van waar komt je enthousiasme?
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 text-lg">
            {/* Introductie */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400 border-opacity-30">
              <h3 className="text-2xl font-black text-cyan-300 mb-3">Je bent een oneindige ziel.</h3>
              <p>
                Je bent een oneindige ziel die jouw bewustzijn ervaart via je menselijk lichaam.
                Jouw ziel kiest specifieke levensomstandigheden om bepaalde lessen te leren
                en spiritueel te groeien.
              </p>
            </div>

            {/* De communicatie */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-blue-400 border-opacity-30">
              <h3 className="text-2xl font-black text-blue-300 mb-3">Communicatie</h3>
              <p className="mb-4">
                Je ziel communiceert met jou via gevoelens.

                Enthousiasme is een signaal dat je op het juiste pad zit.
                
              </p>

              {/* Zeker? */}
              <div className="mb-4 pl-4 border-l-4 border-teal-400">
                <h4 className="text-xl font-bold text-teal-300 mb-2">Hoe kan je zeker zijn?</h4>
                <p className="mb-2">
                  Als je enthousiasme gebaseerd is op angst, onzekerheid of
                  sociale druk, is het waarschijnlijk niet de stem van je ziel.
                  Echte enthousiasme voelt licht, vreugdevol en opwindend,
                  zelfs als het eng is.
                </p>
                <p className="mb-2">
                  Het is ook een kwestie van vertrouwen hebben.
                  Door te oefenen in het volgen van je enthousiasme,
                  ontwikkel je een dieper vertrouwen in je intuïtie.
                  Na verloop van tijd wordt het duidelijker welke keuzes
                  in lijn zijn met je ziel.
                </p>
              </div>
            </div>

            {/* Geen Goed of Fout */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400 border-opacity-30">
              <h3 className="text-2xl font-black text-cyan-300 mb-3">Kiest je ziel altijd het beste?</h3>
              <p>
                Je ziel streeft ernaar om te groeien en te evolueren,
                maar dat betekent niet altijd dat het pad gemakkelijk is.
                Soms kiest je ziel uitdagingen die pijnlijk lijken,
                maar die uiteindelijk leiden tot diepere inzichten en groei.
              </p>
            </div>

            {/* Sluit knop */}
            <div className="text-center pt-4">
              <Button
                onClick={() => setShowDialog(false)}
                className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Sluiten
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default WeesZot;
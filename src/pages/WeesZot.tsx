import { useSeoMeta } from '@unhead/react';
import { useState } from 'react';
import CursorStyles from '@/components/CursorStyles';
import Navigation from '@/components/Navigation';
import PracticalTip from '@/components/PracticalTip';
import AudioPlayer from '@/components/AudioPlayer';
import Comments from '@/components/Comments';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import InfiniteSpiral from '@/components/InfiniteSpiral';

const WeesZot = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [showDialog2, setShowDialog2] = useState(false);

  useSeoMeta({
    title: 'Wees Zot! - Volg je passie',
    description: 'Ontdek de kracht van het volgen van je enthousiasme en intuïtie.',
  });

  return (
    <>
      <InfiniteSpiral />
      <CursorStyles />
      <AudioPlayer pageType="weeszot" />

      <div className="min-h-screen overflow-hidden relative">
        <div className="relative z-10 min-h-screen flex flex-col">
          <div className="py-16 px-4 text-center">
            <h1 className="text-6xl md:text-8xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 animate-pulse">
              WEES ZOT!
            </h1>
            <p className="text-2xl md:text-3xl text-white font-bold mb-4">
              Durf jezelf te zijn!
            </p>
          </div>

          <div className="flex-1 px-4 pb-16">
            <div className="max-w-5xl mx-auto space-y-16">
              <section id="blok1" className="scroll-mt-24">
                {/* Enthousiasme Section */}
                <div className="relative rounded-3xl p-8 md:p-12 border border-cyan-300/20 bg-gradient-to-br from-cyan-500/20 via-sky-500/10 to-blue-900/30 backdrop-blur-md shadow-[0_0_40px_rgba(34,211,238,0.12)]">
                  <div className="absolute top-5 right-5 z-20">
                    <Comments postId="weeszot" sectionId='blok1' sectionTitle="Volg je enthousiasme"/>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-black text-white mb-6 pr-14">
                    Volg je enthousiasme
                  </h2>

                  <div className="max-w-3xl">
                    <div className="space-y-4 text-white text-lg md:text-xl">
                      <p>
                        Je enthousiasme is je innerlijke kompas dat je naar je bestemming leidt.
                        Het is een signaal dat je moet volgen, zelfs als het eng of onlogisch lijkt.
                      </p>
                      <p>
                        Als je je enthousiasme volgt, open je de deur naar nieuwe mogelijkheden,
                        onverwachte kansen en diepere vervulling. Je doet dingen die je leuk vindt, en dit brengt je in contact met gelijkgestemde mensen en situaties.
                      </p>
                      <p>
                        Je leert je zelf kennen en autheniciteit te omarmen. Je zult merken dat je meer in lijn leeft met wie je werkelijk bent,
                        en dat je een diepere connectie ervaart met anderen en met het leven zelf.
                      </p>

                      <Button
                        onClick={() => setShowDialog(true)}
                        className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                      >
                        💡 Van waar komt je enthousiasme?
                      </Button>
                    </div>
                  </div>
                </div>
              </section>
              <section id="blok2" className="scroll-mt-24">
                {/* Realiteit Section */}
                <div className="relative rounded-3xl p-8 md:p-12 border border-white/20 bg-black/30 backdrop-blur-md transform hover:scale-[1.02] transition-all duration-500">
                  <div className="absolute top-5 right-5 z-20">
                    <Comments postId="weeszot" sectionId="blok2" sectionTitle="Creëer je eigen realiteit"/>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-black text-white mb-6 pr-14">
                    Creëer je eigen realiteit
                  </h2>

                  <div className="max-w-3xl">
                    <div className="space-y-4 text-white text-lg md:text-xl">
                      <p className="hover:text-indigo-200 transition-colors duration-300">
                        Om je eigen realiteit te creëren, begin je met het afstemmen van je innerlijke staat op wat je wilt ervaren.
                        Beslis wat je wilt ervaren op een goed moment in je leven, zonder stress, angst of woede.
                        Schrijf dit op en onthoud dit als je een moeilijker moment hebt in je leven.
                      </p>
                      <p className="hover:text-purple-200 transition-colors duration-300">
                        Om je ervaring te bereiken begin je met deze persoon nu al te belichamen.
                        Heb vertrouwen dat je alles kan bereiken wat je wilt bereiken, als je dit echt wilt.
                        Dus als je een gelukkig leven wilt, leef dan nu al alsof je een gelukkig leven hebt.
                        Als je een succesvol bedrijf wilt, gedraag je dan nu al als een succesvolle ondernemer.
                      </p>
                      <p className="hover:text-pink-200 transition-colors duration-300">
                        Er zijn veel zaken die je verhinderen om je realiteit te creëren, zoals angst en afleiding.
                        Vaak moet je de zaken loslaten die je niet meer dienen, zelfs als ze ooit belangrijk waren.
                        Dit kan een deel van je identiteit zijn, een gewoonte, een baan, of een overtuiging.
                      </p>

                      <Button
                        onClick={() => setShowDialog2(true)}
                        className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                      >
                        💡 Focus!
                      </Button>
                    </div>
                  </div>
                </div>
              </section>

              <PracticalTip pageType="weeszot" />

              {/* CTA */}
              <div className="relative text-center py-12">
                <div className="max-w-4xl mx-auto rounded-3xl p-8 md:p-12 border border-yellow-300/20 bg-gradient-to-r from-yellow-500/20 via-orange-500/15 to-pink-500/10 backdrop-blur-md shadow-[0_0_50px_rgba(251,191,36,0.12)]">
                  <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                    Dus... wees zot!
                  </h2>
                  <p className="text-xl md:text-2xl text-white font-light mb-8">
                    Wees niet bang om anders te zijn.
                  </p>
                  <div className="inline-block">
                    <p className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
                      Volg je passie!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Navigation />
        </div>
      </div>

      {/* Focus dialog */}
      <Dialog open={showDialog2} onOpenChange={setShowDialog2}>
        <DialogContent className="z-[70] max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-cyan-900 to-blue-900 text-white border-2 border-cyan-400">
          <DialogHeader>
            <DialogTitle className="text-3xl md:text-4xl font-black text-cyan-400 mb-2">
              Focus!
            </DialogTitle>
          </DialogHeader>

          

          <div className="space-y-6 text-lg">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/30">
              <h3 className="text-2xl font-black text-cyan-300 mb-3">
                Focus!
              </h3>
              <p>
                Wil je een nieuw leven creëren? Focus op wat je wilt en ga er volledig voor!
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/30">
              <h3 className="text-2xl font-black text-cyan-300 mb-3">
                Kies een goed doel.
              </h3>
              <p>
                Kies je doel op een goed moment in je leven en schrijf dit op.
                Je keuzes moeten gebaseerd zijn op liefde en niet op angst.
                Denk vooral na over wat je aan anderen kan geven, in plaats van wat je zelf kan krijgen.
                Connectie met anderen is vaak super belangrijk. Denk na met wie je dit doel wil bereiken.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/30">
              <h3 className="text-2xl font-black text-cyan-300 mb-3">
                Wees authentiek en trouw aan jezelf.
              </h3>
              <p>
                Je hoeft niet te voldoen aan de verwachtingen van anderen.
                Je hoeft niet te wachten op toestemming of goedkeuring.
                Zolang je niemand slecht behandelt en gelooft in jezelf, kan je niet fout gaan.
              </p>
              <p>
                Als je merkt dat je doel niet meer in lijn is met wie je bent, wees dan niet bang om je doel aan te passen.
                Je hoeft niet vast te houden aan een doel dat je niet meer dient, zelfs als je hier al veel tijd en energie in hebt gestoken.
                Volg je enthousiasme en pas je doel aan als dat nodig is.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/30">
              <h3 className="text-2xl font-black text-blue-300 mb-3">
                Laat de vorm los
              </h3>
              <p>
                Je mag een duidelijk doel hebben,
                maar geen gehechtheid aan hoe of wanneer iets verschijnt.
                Vertrouw dat het leven je altijd precies brengt wat het meest in lijn is met je groei.
                Je krijgt misschien niet precies wat je wilt, maar je krijgt altijd wat je nodig hebt.
              </p>
            </div>

            <div className="relative text-center pt-4">
              <Button
                onClick={() => setShowDialog2(false)}
                className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Sluiten
              </Button>
              <div className="flex justify-end mb-4">
                <Comments postId="weeszot" sectionId="dialoog1" sectionTitle="Focus"/>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Enthousiasme dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="z-[70] max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-cyan-900 to-blue-900 text-white border-2 border-cyan-400">
          <DialogHeader>
            <DialogTitle className="text-3xl md:text-4xl font-black text-cyan-400 mb-2">
              Van waar komt je enthousiasme?
              
            </DialogTitle>
          </DialogHeader>

          

          <div className="space-y-6 text-lg">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/30">
              <h3 className="text-2xl font-black text-cyan-300 mb-3">
                Je ware ziel communiceert met jou via enthousiasme
              </h3>
              <p>
                Deze communicatie is subtiel en kan gemakkelijk worden overschaduwd door angst, twijfel of sociale conditionering.
                Maar je leert om deze signalen te herkennen door te oefenen in het volgen van je enthousiasme.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/30">
              <h3 className="text-2xl font-black text-blue-300 mb-3">
                Is enthousiasme altijd goed voor jou?
              </h3>
              <p className="mb-4">
                Je ziel streeft ernaar om te groeien en te evolueren,
                maar dat betekent niet altijd dat het pad gemakkelijk is.
                Soms kiest je ziel uitdagingen die pijnlijk lijken,
                maar die uiteindelijk leiden tot diepere inzichten en groei.
              </p>
              <p className="mb-4">
                Het is ook een kwestie van vertrouwen hebben.
                Door te oefenen in het volgen van je enthousiasme,
                ontwikkel je een dieper vertrouwen in je intuïtie.
                Na verloop van tijd wordt het duidelijker welke keuzes
                in lijn zijn met je ziel.
              </p>

              <div className="mb-4 pl-4 border-l-4 border-teal-400">
                <h4 className="text-xl font-bold text-teal-300 mb-2">
                  Hoe kan je zeker zijn dat je niet goed bezig bent?
                </h4>
                <p className="mb-2">
                  Als je enthousiasme gebaseerd is op angst, onzekerheid of
                  sociale druk, is het waarschijnlijk niet de stem van je ziel.
                  Echt enthousiasme voelt licht, vreugdevol en opwindend.
                </p>
                <p className="mb-2">
                  Ook als je anderen kwetst of jezelf kwetst, is het waarschijnlijk niet de stem van je ziel.
                  Je ziel streeft ernaar om te groeien en te evolueren, maar niet ten koste van anderen of jezelf.
                </p>
              </div>
            </div>

            <div className="relative text-center pt-4">
              <Button
                onClick={() => setShowDialog(false)}
                className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Sluiten
                
                
              </Button>
              <div className="flex justify-end mb-4">
                  <Comments postId="weeszot" sectionId="dialoog2" sectionTitle="Van waar komt je enthousiasme?" />
                </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default WeesZot;
import { useSeoMeta } from '@unhead/react';
import { useState } from 'react';
import CursorStyles from '@/components/CursorStyles';
import Navigation from '@/components/Navigation';
import PracticalTip from '@/components/PracticalTip';
import AudioPlayer from '@/components/AudioPlayer';
import Comments from '@/components/Comments';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import LovingBackground from '@/components/LovingBackground';

const Liefde = () => {
  const [showDialog1, setShowDialog1] = useState(false);
  const [showDialog2, setShowDialog2] = useState(false);
  const [showDialog3, setShowDialog3] = useState(false);

  useSeoMeta({
    title: 'Liefde - De Kracht van het Leven',
    description: 'Heb anderen lief zoals jezelf',
  });

  return (
    <>
      <CursorStyles />
      <AudioPlayer pageType="liefde" />

      <div className="min-h-screen overflow-hidden relative">
        <LovingBackground />

        <div className="relative z-10 min-h-screen flex flex-col">
          {/* Header */}
          <div className="py-16 px-4 text-center">
            <h1 className="text-8xl md:text-9xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-500 to-blue-600 drop-shadow-[0_0_25px_rgba(45,212,191,0.25)]">
              Liefde
            </h1>
            <p className="text-2xl md:text-3xl text-white font-bold">
              De kracht die alles beweegt
            </p>
          </div>

          <div className="flex-1 px-4 pb-16">
            <div className="max-w-5xl mx-auto space-y-16">
              {/* BLOK 1 */}
              <div className="relative rounded-3xl p-8 md:p-12 border border-teal-300/20 bg-gradient-to-r from-green-400/80 to-blue-400/80 backdrop-blur-md shadow-[0_0_40px_rgba(45,212,191,0.14)] transform hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500 group">
                <div className="absolute inset-0 rounded-3xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute top-5 right-5 z-20">
                  <Comments postId="liefde_boodschap_jezus" sectionTitle="De boodschap van Jezus" />
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-purple-700 mb-6 pr-14">
                  De boodschap van Jezus
                </h2>

                <div className="max-w-3xl space-y-4 text-white text-lg md:text-xl">
                  <p className="hover:text-teal-100 transition-colors duration-300">
                    Jezus bracht het terug tot één duidelijke regel: 
                    <strong> Hou van anderen zoals jezelf.</strong>
                  </p>
                  <p className="hover:text-teal-100 transition-colors duration-300">
                    Dat klinkt eenvoudig, maar het raakt alles. 
                    Het begint bij jezelf: als je niet van jezelf houdt, hoe kan je dan van anderen houden?
                    En het strekt zich uit tot iedereen: vrienden, familie, vreemden, zelfs je vijanden.
                  </p>
                  <Button
                    onClick={() => setShowDialog1(true)}
                    className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(34,211,238,0.45)]"
                  >
                    ✨ Dankbaarheid en vergeving
                  </Button>
                </div>
              </div>

              {/* BLOK 2 */}
              <div className="relative rounded-3xl p-8 md:p-12 border border-cyan-300/20 bg-gradient-to-r from-cyan-500/80 to-blue-500/80 backdrop-blur-md shadow-[0_0_40px_rgba(34,211,238,0.14)] transform hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500 group">
                <div className="absolute inset-0 rounded-3xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute top-5 right-5 z-20">
                  <Comments postId="liefde_in_jezelf" sectionTitle="Liefde begint in jezelf" />
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 pr-14">
                  Liefde begint bij jezelf
                </h2>

                <div className="max-w-3xl space-y-4 text-white text-lg md:text-xl">
                  <p className="hover:text-cyan-100 transition-colors duration-300">
                    Alles begint met hoe je naar jezelf kijkt.
                    Je gedachten en overtuigingen bepalen hoe je je voelt,
                    en dat bepaalt weer hoe je reageert naar anderen.
                  </p>
                  <p className="hover:text-cyan-100 transition-colors duration-300">
                    Als je jezelf constant bekritiseert of onder druk zet,
                    ga je sneller gespannen of negatief reageren.
                    Door meer bewust te worden van wat er in je hoofd en hart gebeurt,
                    zal je meer liefde kunnen voelen en uitstralen.
                  </p>

                  <Button
                    onClick={() => setShowDialog2(true)}
                    className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(34,211,238,0.45)]"
                  >
                    ✨ Emoties als signalen
                  </Button>
                </div>
              </div>

              {/* BLOK 3 */}
              <div className="relative rounded-3xl p-8 md:p-12 border border-blue-300/20 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 backdrop-blur-md shadow-[0_0_40px_rgba(59,130,246,0.12)] transform hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500 group">
                <div className="absolute inset-0 rounded-3xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute top-5 right-5 z-20">
                  <Comments postId="liefde_anderen" sectionTitle="Heb anderen lief" />
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 pr-14">
                  Heb anderen lief
                </h2>

                <div className="max-w-3xl space-y-4 text-white text-lg md:text-xl">
                  <p className="hover:text-blue-100 transition-colors duration-300">
                    Iedereen wil respect, begrip en vriendelijkheid.
                    Door dat te geven, maak je een groot verschil.
                  </p>
                  <p className="hover:text-blue-100 transition-colors duration-300">
                    Liefde zit vaak in kleine dingen:
                    luisteren, geduld hebben, iemand helpen,
                    of gewoon vriendelijk blijven wanneer het moeilijk is.
                  </p>
                  <p className="hover:text-blue-100 transition-colors duration-300">
                    Tegelijk betekent liefde ook dat je de ander niet probeert te controleren.
                    Je kan iemand niet dwingen om jou lief te hebben.
                    Soms hoort loslaten daar ook bij.
                  </p>

                  <Button
                    onClick={() => setShowDialog3(true)}
                    className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(34,211,238,0.45)]"
                  >
                    ✨ Dienstbaarheid
                  </Button>
                </div>
              </div>

              <PracticalTip pageType="liefde" />

              {/* CTA */}
              <div className="relative text-center py-12">
                <div className="max-w-4xl mx-auto rounded-3xl p-8 md:p-12 border border-teal-300/20 bg-gradient-to-r from-emerald-500/20 via-teal-500/15 to-blue-500/10 backdrop-blur-md shadow-[0_0_50px_rgba(20,184,166,0.12)] transform hover:scale-[1.01] transition-all duration-500">
                  <div className="absolute inset-0 rounded-3xl bg-white/5 animate-[pulseGlow_5s_ease-in-out_infinite] pointer-events-none" />
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-6 relative z-10">
                    Liefde is alles
                  </h2>
                  <p className="text-white text-lg md:text-xl mb-8 relative z-10">
                    Niet één keer, maar elke dag opnieuw.
                  </p>
                  <p className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-cyan-300 relative z-10">
                    Hou van anderen zoals jezelf.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Navigation />
        </div>
      </div>

      {/* Dialog 1 */}
      <Dialog open={showDialog1} onOpenChange={setShowDialog1}>
        <DialogContent className="z-[70] max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-cyan-900 to-blue-900 text-white border-2 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.25)]">
          <DialogHeader>
            <DialogTitle className="text-3xl md:text-4xl font-black text-cyan-400 mb-2">
              Dankbaarheid en vergeving
            </DialogTitle>
          </DialogHeader>

          <p className="text-cyan-100/80 mb-6 text-base md:text-lg">
            Deze 2 uitdrukkingen van liefde zijn de gemakkelijkste weg naar innerlijke rust.
          </p>

          <div className="space-y-6 text-lg">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/30">
              <h2 className="text-2xl font-black text-blue-300 mb-3">Dankbaarheid</h2>
              <p>
                Dankbaarheid helpt je om te zien wat er goed gaat in je leven.
                Het richt je aandacht op wat je hebt in plaats van wat je mist.
                Door regelmatig dankbaar te zijn, voel je meer liefde en tevredenheid.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/30">
              <h2 className="text-2xl font-black text-blue-300 mb-3">Vergeving</h2>
              <p>
                Vergeving helpt je om los te laten wat blijft wegen.
                Het betekent niet dat je het gedrag van de ander goedkeurt,
                maar dat je ervoor kiest om het niet langer met je mee te dragen.
                Door te vergeven, bevrijd je jezelf van wrok en pijn,
                en maak je ruimte voor meer liefde in je hart.
              </p>
            </div>

            <div className="relative text-center pt-4">
              <Button
                onClick={() => setShowDialog1(false)}
                className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(34,211,238,0.45)]"
              >
                Sluiten
              </Button>
              <div className="flex justify-end mb-4 mt-4">
                <Comments postId="liefde_dankbaarheid_vergeving_dialog" sectionTitle="Dankbaarheid en vergeving" />
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Dialog 2 */}
      <Dialog open={showDialog2} onOpenChange={setShowDialog2}>
        <DialogContent className="z-[70] max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-cyan-900 to-blue-900 text-white border-2 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.25)]">
          <DialogHeader>
            <DialogTitle className="text-3xl md:text-4xl font-black text-cyan-400 mb-4">
              Emoties en gedachten
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 text-lg">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/30">
              <p>
                Emoties zijn signalen.
                Ze tonen hoe het echt met je gaat.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/30">
              <p>
                Luister naar je emoties, ook de moeilijke. Ze geven je waardevolle informatie over wat er in je leeft.
                Door ze te herkennen, leer je jezelf beter kennen.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/30">
              <p>
                Vaak worden emoties veroorzaakt door gedachten die je hebt over jezelf of anderen.
                Door bewust te worden van deze gedachten, kan je ze uitdagen en veranderen, waardoor je emoties ook kunnen veranderen.
              </p>
            </div>

            <div className="relative text-center pt-4">
              <Button
                onClick={() => setShowDialog2(false)}
                className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(34,211,238,0.45)]"
              >
                Sluiten
              </Button>
              <div className="flex justify-end mb-4 mt-4">
                <Comments postId="liefde_emoties_gedachten_dialog" sectionTitle="Emoties en gedachten" />
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Dialog 3 */}
      <Dialog open={showDialog3} onOpenChange={setShowDialog3}>
        <DialogContent className="z-[70] max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-cyan-900 to-blue-900 text-white border-2 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.25)]">
          <DialogHeader>
            <DialogTitle className="text-3xl md:text-4xl font-black text-cyan-400 mb-4">
              Dienstbaarheid
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 text-lg">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/30">
              <p>
                Wat je geeft aan anderen, komt altijd terug. Je weet nooit precies hoe of wanneer.
                Door te helpen en vriendelijk te zijn,
                maak je niet alleen de wereld beter,
                maar ook je eigen leven.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/30">
              <p>
                Door mensen kwaad te doen, beschadig je niet alleen hen, maar ook jezelf.
                Vaak zelfs meer dan je denkt.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/30">
              <p>
                Respecteer ook de vrijheid van anderen.
                Liefde kan je niet afdwingen.
                Soms is loslaten de meest eerlijke vorm van liefde.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/30">
              <p>
                Dienstbaarheid is een van de mooiste manieren om liefde te uiten.
                Het betekent dat je bereid bent om iets te geven zonder iets terug te verwachten.
                Het is een manier om liefde te laten stromen, zonder voorwaarden.
              </p>
            </div>

            <div className="relative text-center pt-4">
              <Button
                onClick={() => setShowDialog3(false)}
                className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(34,211,238,0.45)]"
              >
                Sluiten
              </Button>
              <div className="flex justify-end mb-4 mt-4">
                <Comments postId="liefde_dienstbaarheid_dialog" sectionTitle="Dienstbaarheid" />
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Liefde;
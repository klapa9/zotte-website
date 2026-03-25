import { useSeoMeta } from '@unhead/react';
import { useState } from 'react';
import CursorStyles from '@/components/CursorStyles';
import Navigation from '@/components/Navigation';
import PracticalTip from '@/components/PracticalTip';
import AudioPlayer from '@/components/AudioPlayer';
import Comments from '@/components/Comments';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const Liefde = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [showDialog2, setShowDialog2] = useState(false);

  useSeoMeta({
    title: 'Liefde - De Kracht van het Leven',
    description: 'Hou van anderen als jezelf',
  });

  return (
    <>
      <CursorStyles />
      <AudioPlayer pageType="liefde" />

      <div className="min-h-screen bg-gradient-to-br from-green-900 via-teal-800 to-blue-900 overflow-hidden relative">
        {/* Energy particles */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `pulse ${Math.random() * 3 + 2}s infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Energy waves */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full border-2 border-white border-opacity-10"
              style={{
                width: `${200 + i * 100}%`,
                height: `${200 + i * 100}%`,
                top: `${-50 - i * 25}%`,
                left: `${-50 - i * 25}%`,
                animation: `expand ${8 + i * 2}s infinite`,
                animationDelay: `${i * 1.5}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 min-h-screen flex flex-col">
          {/* Header */}
          <div className="py-16 px-4 text-center">
            <h1 className="text-8xl md:text-9xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-500 to-blue-600">
              Liefde
            </h1>
            <p className="text-2xl md:text-3xl text-white font-bold">
              De kracht die alles beweegt
            </p>
          </div>

          {/* Main Content */}
          <div className="flex-1 px-4 pb-16">
            <div className="max-w-5xl mx-auto space-y-16">
              {/* Train jezelf */}
              <div className="relative rounded-3xl p-8 md:p-12 border border-teal-300/20 bg-gradient-to-r from-green-400/80 to-blue-400/80 backdrop-blur-md shadow-[0_0_40px_rgba(45,212,191,0.14)] transform hover:scale-[1.02] transition-all duration-500">
                <div className="absolute top-5 right-5 z-20">
                  <Comments postId="liefde_train_jezelf" />
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-purple-700 mb-6 pr-14">
                  Train jezelf
                </h2>

                <div className="max-w-3xl">
                  <div className="space-y-4 text-white text-lg md:text-xl">
                    <p className="hover:text-teal-200 transition-colors duration-300">
                      Je kunt jezelf trainen om meer liefde te cultiveren
                      door dagelijks bewust aandacht te besteden aan je eigen gedachten.
                    </p>
                    <p className="hover:text-teal-200 transition-colors duration-300">
                      De eerste stap is bewustwording. Luister naar je emoties,
                      de negatieve emoties zeggen je dat je gedachtes hebt die niet in lijn zijn met liefde.
                      Vraag jezelf af welke gedachten deze emoties veroorzaken.
                    </p>
                    <p className="hover:text-teal-200 transition-colors duration-300">
                      Let dan op jezelf gedurende de dag en merk op wanneer je deze "negatieve" gedachten hebt.
                      Vervang deze gedachten bewust door liefdevolle en vergevende gedachten.
                    </p>

                    <Button
                      onClick={() => setShowDialog(true)}
                      className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      ✨ Positieve gedachten!
                    </Button>
                  </div>
                </div>
              </div>

              {/* Heb anderen lief */}
              <div className="relative rounded-3xl p-8 md:p-12 border border-blue-300/20 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 backdrop-blur-md shadow-[0_0_40px_rgba(59,130,246,0.12)] transform hover:scale-[1.02] transition-all duration-500">
                <div className="absolute top-5 right-5 z-20">
                  <Comments postId="liefde_heb_anderen_lief" />
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 pr-14">
                  Heb anderen lief zoals jezelf.
                </h2>

                <div className="max-w-3xl">
                  <div className="space-y-4 text-white text-lg md:text-xl">
                    <p>
                      Als aan Jezus Christus werd gevraagd wat de hoogste wet was, antwoordde hij met het gebod:
                      "Heb anderen lief zoals jezelf".
                    </p>
                    <p>
                      Deze eenvoudige maar diepgaande uitspraak vat de essentie van liefde samen.
                      Het betekent ten eerste dat we van onszelf moeten houden en ons eigen welzijn moeten koesteren.
                      We kunnen anderen niet echt liefhebben als we niet eerst van onszelf houden.
                    </p>
                    <p>
                      Het betekent ook dat we alle anderen behandelen met dezelfde zorg, respect en compassie als we voor onszelf wensen.
                      Het betekent het erkennen van de goddelijkheid in ieder leven,
                      omdat we allemaal deel uitmaken van hetzelfde universele bewustzijn.
                    </p>

                    <Button
                      onClick={() => setShowDialog2(true)}
                      className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      ✨ Dienstbaarheid
                    </Button>
                  </div>
                </div>
              </div>

              <PracticalTip pageType="liefde" />

              {/* CTA */}
              <div className="relative text-center py-12">
                <div className="max-w-4xl mx-auto rounded-3xl p-8 md:p-12 border border-teal-300/20 bg-gradient-to-r from-emerald-500/20 via-teal-500/15 to-blue-500/10 backdrop-blur-md shadow-[0_0_50px_rgba(20,184,166,0.12)]">
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                    Liefde is een keuze
                  </h2>
                  <p className="text-white text-lg md:text-xl mb-8">
                    Voor jezelf, voor anderen, voor het leven.
                  </p>
                  <p className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-cyan-300">
                    Oefen haar elke dag.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Navigation />
        </div>

        <style jsx>{`
          @keyframes pulse {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.5); }
          }

          @keyframes expand {
            0% { transform: scale(0.8); opacity: 0.3; }
            100% { transform: scale(1.2); opacity: 0; }
          }
        `}</style>
      </div>

      {/* Zelfliefde dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="z-[70] max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-cyan-900 to-blue-900 text-white border-2 border-cyan-400">
          <DialogHeader>
            <DialogTitle className="text-3xl md:text-4xl font-black text-cyan-400 mb-4">
              Zelfliefde
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 text-lg">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/30">
              <h3 className="text-2xl font-black text-blue-300 mb-3">
                Emoties zijn de waarheid van onze gedachten
              </h3>
              <p className="mb-4">
                Emoties zijn krachtige signalen die ons vertellen wat we denken en geloven.
                Wanneer we een liefdevol beeld hebben over de wereld, ervaren we positieve emoties zoals vreugde, vrede en dankbaarheid.
                Aan de andere kant, wanneer we op een foute manier denken, ervaren we emoties zoals angst, woede en verdriet.
              </p>
              <p className="mb-4">
                Daarom is het belangrijk om bewust te zijn van onze gedachten en deze te sturen in de richting van liefde en positiviteit.
                Door onze gedachten te veranderen, denk je meer in lijn met de werkelijkheid van liefde en ervaar je meer positieve emoties.
                De 2 belangrijkste gedachten die je kan cultiveren zijn dankbaarheid en vergiffenis.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/30">
              <h3 className="text-2xl font-black text-blue-300 mb-3">
                Dankbaarheid
              </h3>
              <p className="mb-4">
                Dankbaarheid is de emotie die ons verbindt met de overvloed van het universum.
                Dankbaarheid opent ons hart en trekt meer positieve ervaringen aan.
              </p>
              <p>
                Door dankbaarheid te cultiveren, erkennen we de zegeningen in ons leven,
                hoe klein ook, en versterken we onze verbinding met liefde en vreugde.
              </p>
              <p>
                Dankbaarheid helpt ook om onze zelfwaarde te verhogen,
                omdat we ons bewust worden van de waarde die we in ons leven hebben.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/30">
              <h3 className="text-2xl font-black text-blue-300 mb-3">
                Vergiffenis
              </h3>
              <p className="mb-4">
                Vergiffenis bevrijdt ons van de last van wrok en negatieve emoties die ons innerlijke vrede ontnemen.
                Het stelt ons in staat om verder te gaan en ruimte te maken voor liefde en positiviteit in ons leven.
              </p>
              <p>
                Vergiffenis betekent niet dat we de fouten van anderen goedkeuren.
                Het is proberen te begrijpen dat iedereen fouten maakt en dat we allemaal leren en groeien.
                Dat jij ook fouten hebt gemaakt en dat je jezelf moet vergeven om verder te kunnen gaan.
              </p>
              <p>
                Door vergiffenis te cultiveren kies je ervoor om los te laten wat je pijn doet,
                zodat je jezelf geneest en verder kan gaan met je leven.
              </p>
            </div>

            <div className="relative text-center pt-4">
              <Button
                onClick={() => setShowDialog(false)}
                className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Sluiten
              </Button>
              <div className="flex justify-end mb-4 mt-4">
                <Comments postId="liefde_zelfliefde_dialog" />
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Dienstbaarheid dialog */}
      <Dialog open={showDialog2} onOpenChange={setShowDialog2}>
        <DialogContent className="z-[70] max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-cyan-900 to-blue-900 text-white border-2 border-cyan-400">
          <DialogHeader>
            <DialogTitle className="text-3xl md:text-4xl font-black text-cyan-400 mb-4">
              Dienstbaarheid
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 text-lg">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/30">
              <h3 className="text-2xl font-black text-blue-300 mb-3">
                Karma
              </h3>
              <p className="mb-4">
                Karma is de universele wet van oorzaak en gevolg.
                Elke actie die je onderneemt, elke gedachte die je denkt,
                zendt energie uit die uiteindelijk naar je terugkeert.
              </p>
              <p>
                Daarom is belangrijk om bewust te zijn van onze intenties en acties.
                Wat we in de wereld zetten, zal uiteindelijk onze eigen realiteit vormen.
              </p>
              <p>
                Door liefdevolle daden te verrichten, zoals vriendelijkheid, mededogen en hulp aan anderen,
                creëren we een positieve karmische cyclus die ons helpt om meer liefde en geluk in ons leven aan te trekken.
              </p>
              <p>
                Dit is niet altijd onmiddellijk zichtbaar, maar op de lange termijn
                zal de energie die je hebt gecreëerd, zich manifesteren in je leven.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/30">
              <h3 className="text-2xl font-black text-blue-300 mb-3">
                Dienstbaarheid
              </h3>
              <p className="mb-4">
                De manier om een positieve karmische cyclus te creëren is door dienstbaarheid aan anderen.
                Door anderen te helpen en bij te dragen aan hun welzijn,
                openen we ons hart en versterken we onze verbinding met liefde.
              </p>
              <p>
                Als je intentie is om anderen te dienen zonder iets terug te verwachten,
                zul je merken dat liefde en dankbaarheid vanzelf naar je toe komen.
              </p>
              <p>
                Groei hierin en probeer je tijd en energie te besteden aan het dienen van anderen.
                Op die manier ervaar je de ware kracht van liefde in actie.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/30">
              <h3 className="text-2xl font-black text-blue-300 mb-3">
                Vrije wil
              </h3>
              <p className="mb-4">
                Liefde kan niet worden afgedwongen of opgelegd.
                Het moet vrijelijk worden gegeven en ontvangen.
                Wanneer we liefde proberen te forceren, creëren we weerstand en blokkades.
              </p>
              <p>
                Echte liefde komt voort uit een plaats van vrijheid en keuze.
                Het is belangrijk om de vrije wil van anderen te respecteren
                en liefde te geven zonder verwachtingen of voorwaarden.
              </p>
              <p>
                Hoe pijnlijk het ook kan zijn, soms is de beste manier om liefde te tonen
                door los te laten en de ander de ruimte te geven om hun eigen pad te volgen.
              </p>
            </div>

            <div className="relative text-center pt-4">
              <Button
                onClick={() => setShowDialog2(false)}
                className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Sluiten
              </Button>
              <div className="flex justify-end mb-4 mt-4">
                <Comments postId="liefde_dienstbaarheid_dialog" />
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Liefde;
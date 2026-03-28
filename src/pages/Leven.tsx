import { useSeoMeta } from '@unhead/react';
import { useState } from 'react';
import CursorStyles from '@/components/CursorStyles';
import Navigation from '@/components/Navigation';
import PracticalTip from '@/components/PracticalTip';
import AudioPlayer from '@/components/AudioPlayer';
import Comments from '@/components/Comments';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import LevenBackground from '@/components/LevenBackground';

const Leven = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [showDialog2, setShowDialog2] = useState(false);

  useSeoMeta({
    title: 'L E V E N - De Grote Vragen',
    description:
      'Verken de fundamentele vragen van het leven: waarom leef je, wat is belangrijk, hoe kan je beter leven?',
  });

  return (
    <>
      <CursorStyles />
      <AudioPlayer pageType="leven" />

      <div className="min-h-screen overflow-hidden relative">
        <LevenBackground />

        <div className="relative z-10 min-h-screen flex flex-col">
          {/* Header */}
          <div className="py-16 px-4 text-center">
            <h1 className="text-7xl md:text-9xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">
              L E V E N
            </h1>
            <p className="text-2xl md:text-3xl text-white font-bold">
              Het leven is prachtig!
            </p>
          </div>

          {/* Main Content */}
          <div className="flex-1 px-4 pb-16">
            <div className="max-w-5xl mx-auto space-y-20">

              {/* ABSOLUTE */}
              <div className="relative rounded-3xl p-8 md:p-12 border border-cyan-400/30 bg-white/5 backdrop-blur-md shadow-[0_0_40px_rgba(34,211,238,0.08)]">
                <div className="absolute top-5 right-5 z-20">
                  <Comments 
                    postId="leven"  
                    sectionId="blok1"
                    sectionTitle="Het Geheel - G O D" 
                  />
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-cyan-400 mb-6 pr-14">
                  G O D
                </h2>

                <div className="max-w-3xl">
                  <div className="space-y-4 text-white text-lg md:text-xl">
                    <p>
                      Er is één werkelijkheid die alles omvat. Je kan het God noemen, het Universum,
                      de Bron, het Geheel,... Het zijn woorden die allemaal proberen te wijzen naar hetzelfde.
                    </p>
                    <p>
                      Het is niet iets buiten ons, maar datgene waaruit alles ontstaat én waarin alles bestaat.
                      Alles wat je ziet, voelt en ervaart is een expressie van dat ene geheel.
                    </p>
                    <p>
                      Jij bent een unieke vorm waarin God zich uitdrukt.
                      Alles is 1 geheel.
                      Vanuit dit perspectief is alles compleet. Er ontbreekt niets en alles is perfect.
                    </p>
                  </div>
                </div>
              </div>

              {/* RELATIEVE ERVARING */}
              <div className="relative rounded-3xl p-8 md:p-12 border border-blue-400/30 bg-black/40 backdrop-blur-md transform hover:scale-[1.02] transition-all duration-500">
                <div className="absolute top-5 right-5 z-20">
                  <Comments 
                    postId="leven" 
                    sectionId="blok2"
                    sectionTitle="De menselijke ervaring"
                  />
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-blue-400 mb-6 pr-14">
                  De Menselijke Ervaring
                </h2>

                <div className="max-w-3xl">
                  <div className="space-y-4 text-white text-lg md:text-xl">
                    <p>
                      Toch ervaren we het leven anders. We leven in een wereld van tegenstellingen:
                      licht en donker, liefde en angst, succes en verlies.
                    </p>
                    <p>
                      Hier ontstaat het gevoel van “ik” en “de ander”.
                      We lijken afgescheiden, kwetsbaar en beperkt.
                      Deze dualiteit maakt ervaring, groei en keuze mogelijk.
                    </p>
                    <p>
                      Door te vergeten dat we allemaal één zijn, kunnen we het leven volledig beleven — met alles wat daarbij hoort.
                      Onze unieke menselijke ervaring is daarom een prachtig geschenk.
                    </p>
                  </div>
                </div>
              </div>

              {/* BALANS */}
              <div className="relative rounded-3xl p-8 md:p-12 border border-cyan-300/20 bg-gradient-to-r from-green-600/80 to-blue-600/80 backdrop-blur-md transform hover:scale-[1.02] transition-all duration-500">
                <div className="absolute top-5 right-5 z-20">
                  <Comments 
                    postId="leven" 
                    sectionId="blok3"
                    sectionTitle="Balans in het Leven" 
                  />
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 pr-14">
                  Balans in het Leven
                </h2>

                <div className="max-w-3xl">
                  <div className="space-y-4 text-white text-lg md:text-xl">
                    <p>
                      Ons leven speelt zich af tussen twee perspectieven:
                      de absolute waarheid van eenheid, en de relatieve menselijke ervaring.
                    </p>
                    <p>
                      Aan de ene kant is er een diep weten dat alles verbonden is, 
                      aan de andere kant is er het menselijke:
                      emoties, keuzes, verantwoordelijkheid en soms ook strijd.
                    </p>
                    <p>
                      De kunst van het leven ligt niet in het kiezen van één van beide,
                      maar in het leren bewegen tussen die twee.
                      Voel wat er te voelen valt, maar verlies jezelf er niet in.
                      Handel bewust, zonder volledig gestuurd te worden door angst of controle.
                    </p>
                    <p>
                      Balans is geen eindpunt dat je bereikt,
                      maar een voortdurende beweging waarin je telkens opnieuw afstemt.
                    </p>
                  </div>
                </div>
              </div>

              {/* JOUW PAD */}
              <div className="relative rounded-3xl p-8 md:p-12 border border-purple-400/30 bg-white/5 backdrop-blur-md transform hover:scale-[1.02] transition-all duration-500">
                <div className="absolute top-5 right-5 z-20">
                  <Comments 
                    postId="leven" 
                    sectionId="blok4"
                    sectionTitle="Jouw Pad" 
                  />
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-purple-400 mb-6 pr-14">
                  Jouw Pad
                </h2>

                <div className="max-w-3xl">
                  <div className="space-y-4 text-white text-lg md:text-xl">
                    <p>
                      Je bent hier niet zonder reden. Niet om perfect te zijn,
                      maar om te ervaren, te groeien en te ontdekken wie je bent.
                    </p>
                    <p>
                      Wat jou raakt, wat jou energie geeft en wat jou blijft roepen,
                      wijst je richting. Dat is jouw pad.
                    </p>
                    <p>
                      Het leven is prachtig:
                      leef bewust, blijf in beweging en herinner af en toe dat we allemaal 1 zijn.
                    </p>
                  </div>
                </div>
              </div>

              <PracticalTip pageType="leven" />

              {/* CTA */}
              <div className="relative text-center py-12">
                <div className="max-w-4xl mx-auto rounded-3xl p-8 md:p-12 border border-cyan-300/20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-md shadow-[0_0_50px_rgba(34,211,238,0.12)]">
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                    We zijn een deel van God
                  </h2>
                  <p className="text-white text-lg md:text-xl mb-8">
                    Allemaal verbonden.
                  </p>
                  <h2 className="text-4xl md:text-5xl font-black text-white">
                    We zijn hier met een reden!
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <Navigation />
        </div>
      </div>

      {/* Spirituele evolutie */}
      <Dialog open={showDialog2} onOpenChange={setShowDialog2}>
        <DialogContent className="z-[70] max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-cyan-900 to-blue-900 text-white border-2 border-cyan-400">
          <DialogHeader>
            <DialogTitle className="text-3xl md:text-4xl font-black text-cyan-400 mb-4">
              Frequenties van Bewustzijn
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 text-lg">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/30">
              <h3 className="text-2xl font-black text-cyan-300 mb-3">
                Het bewustzijn kan ervaren worden als verschillende frequentiebanden of densiteiten.
              </h3>
              <p>
                De realiteit bestaat uit opeenvolgende densiteiten van bewustzijn.
                Elke densiteit vertegenwoordigt een specifieke trilling, ervaringsvorm en mate van zelfbewustzijn.
                Hogere densiteiten zijn minder fysiek en meer bewustzijnsgericht, lagere densiteiten zijn compacter en meer materieel.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/30">
              <h3 className="text-2xl font-black text-blue-300 mb-3">
                De Opeenvolging van Densiteiten
              </h3>
              <p className="mb-4">
                Bewustzijn ontwikkelt zich stap voor stap.
                Elke densiteit bouwt voort op de vorige en bereidt voor op de volgende.
              </p>

              <div className="mb-4 pl-4 border-l-4 border-teal-400">
                <h4 className="text-xl font-bold text-teal-300 mb-2">
                  Overzicht
                </h4>
                <p className="mb-2">
                  <strong>1e densiteit:</strong> elementair bewustzijn: aarde, water, vuur, lucht.
                  Bestaan zonder zelfbesef.
                </p>
                <p className="mb-2">
                  <strong>2e densiteit:</strong> groeiend leven: planten en dieren.
                  Bewustzijn ontwikkelt beweging en instinct.
                </p>
                <p className="mb-2">
                  <strong>3e densiteit:</strong> zelfbewustzijn: de mens.
                  Keuze, identiteit en morele richting ontstaan.
                </p>
                <p className="mb-2">
                  <strong>4e densiteit:</strong> hartbewustzijn.
                  Collectieve verbinding, empathie en transparantie.
                </p>
                <p className="mb-2">
                  <strong>5e densiteit:</strong> wijsheid en inzicht.
                  Individualiteit zonder afscheiding.
                </p>
                <p>
                  <strong>6e densiteit:</strong> eenheid van liefde en wijsheid.
                  Integratie van alle tegenstellingen.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/30">
              <h3 className="text-2xl font-black text-cyan-300 mb-3">
                Onze Densiteit
              </h3>
              <p>
                We bevinden ons in de 3e densiteit, gekenmerkt door zelfbewustzijn en keuzevrijheid.
                Hier ervaren we dualiteit: goed en kwaad, licht en donker, ik en jij.
              </p>
              <p>
                Deze polariteit is essentieel voor groei.
                Het daagt ons uit om bewust te kiezen wie we willen zijn en hoe we met anderen omgaan.
              </p>
              <p>
                We zijn momenteel bezig met de overgang naar de 4e densiteit, waar verbinding en liefde centraal staan.
                Dit proces vereist het loslaten van oude patronen en het omarmen van eenheid.
              </p>
            </div>

            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-6 border border-cyan-400/30">
              <h3 className="text-2xl font-black text-white mb-3">
                Evolutie richting Eenheid
              </h3>
              <p className="mb-3">
                Naarmate bewustzijn evolueert, vervaagt polariteit geleidelijk.
                Hogere densiteiten integreren dualiteit in eenheid.
              </p>
              <p className="mb-3">
                Uiteindelijk keert bewustzijn terug naar volledige eenheid,
                verrijkt door alle ervaringen die in afzondering zijn opgedaan.
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
                <Comments 
                  postId="leven"  
                  sectionId="dialoog5"
                  sectionTitle="Frequenties van Bewustzijn" 
                />
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* De wet van éénheid */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="z-[70] max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-cyan-900 to-blue-900 text-white border-2 border-cyan-400">
          <DialogHeader>
            <DialogTitle className="text-3xl md:text-4xl font-black text-cyan-400 mb-4">
              De wet van éénheid
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 text-lg">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/30">
              <h3 className="text-2xl font-black text-cyan-300 mb-3">
                De wet van éénheid
              </h3>
              <p>
                Alles in het universum is één bewustzijn.
              </p>
              <p className="mt-3">
                Deze Eenheid is de onderliggende structuur van alle ervaring. Alles wat wij als gescheiden zien,
                zijn verschillende uitdrukkingen van dezelfde Oneindige Bron.
              </p>
            </div>

            <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-blue-900 rounded-2xl p-6 border-2 border-white shadow-xl text-center">
              <p className="text-xl md:text-2xl font-black italic">
                Jij bent geen persoon die het universum beleeft!
                <br />
                Jij bent het universum dat een persoon beleeft!
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/30">
              <h3 className="text-2xl font-black text-cyan-300 mb-3">
                Wat betekent dit voor jou?
              </h3>
              <p className="mb-3">
                Als alles één is, dan is alles wat je anderen aandoet ook iets dat je
                uiteindelijk aan jezelf doet. Elke keuze, elke gedachte, elke interactie is
                een vorm van zelfontdekking.
              </p>
              <p className="mb-3">
                Dit betekent dat door anderen te helpen, je ook jezelf helpt.
                Door liefde en compassie te tonen, vergroot je ook jouw eigen ervaring van liefde.
                Door bewust te kiezen voor positiviteit, verhoog je ook jouw eigen vibratie.
              </p>
              <p>
                Jouw acties hebben een ripple-effect dat verder reikt dan je kunt zien.
                Wat je aan de wereld geeft, komt uiteindelijk bij jou terug.
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
                <Comments postId="leven" sectionId="dialoog6" sectionTitle="De wet van éénheid" />
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Leven;
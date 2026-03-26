import { useSeoMeta } from '@unhead/react';
import { useState } from 'react';
import CursorStyles from '@/components/CursorStyles';
import Navigation from '@/components/Navigation';
import PracticalTip from '@/components/PracticalTip';
import AudioPlayer from '@/components/AudioPlayer';
import Comments from '@/components/Comments';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const ZiekZot = () => {
  const [glitchMode, setGlitchMode] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [showDialog2, setShowDialog2] = useState(false);

  useSeoMeta({
    title: 'Ziek Zot! - De Waarheid over Ziekte en Gekte',
    description:
      'Ziek zijn is echt zot! Ontdek waarom het beter is om gewoon niet zot ziek te zijn.',
  });

  return (
    <>
      <CursorStyles />
      <AudioPlayer pageType="ziekzot" />

      <div className="min-h-screen bg-gradient-to-br from-red-900 via-pink-800 to-purple-900 overflow-hidden relative">
        {/* Distorted background elements */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full mix-blend-screen opacity-20 ${
                glitchMode ? 'animate-pulse' : ''
              }`}
              style={{
                width: `${Math.random() * 300 + 50}px`,
                height: `${Math.random() * 300 + 50}px`,
                background: `hsl(${Math.random() * 60 + 300}, 80%, 60%)`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 3 + 1}s`,
                animationDelay: `${Math.random() * 2}s`,
                transform: `rotate(${Math.random() * 360}deg)`,
                clipPath:
                  Math.random() > 0.7
                    ? 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)'
                    : 'circle()',
              }}
            />
          ))}
        </div>

        {/* Glitch lines */}
        {glitchMode && (
          <div className="absolute inset-0">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-red-500 opacity-30"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: 0,
                  right: 0,
                  height: '2px',
                  animation: 'glitchMove 0.1s infinite',
                }}
              />
            ))}
          </div>
        )}

        <div className="relative z-10 min-h-screen flex flex-col">
          {/* Header */}
          <div className="py-16 px-4 text-center">
            <h1
              className={`text-8xl md:text-9xl font-black mb-6 text-white ${
                glitchMode ? 'animate-glitch' : ''
              }`}
            >
              ZIEK ZOT!
            </h1>
          </div>

          {/* Main Content */}
          <div className="flex-1 px-4 pb-16">
            <div className="max-w-5xl mx-auto space-y-16">
              {/* Main Statement */}
              <div className="text-center">
                <div className="inline-block transform hover:scale-110 transition-transform duration-500">
                  <p className="text-4xl md:text-6xl font-black text-red-400 mb-4">
                    Elke ziekte is geneesbaar
                  </p>
                </div>
              </div>

              {/* Genees jezelf */}
              <div className="relative rounded-3xl p-8 md:p-12 border border-red-400/30 bg-black/30 backdrop-blur-md shadow-[0_0_40px_rgba(248,113,113,0.10)]">
                <div className="absolute top-5 right-5 z-20">
                  <Comments postId="ziekzot_genees_jezelf" sectionTitle="Genees jezelf!" />
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-red-400 mb-6 pr-14">
                  Genees jezelf!
                </h2>

                <div className="max-w-3xl">
                  <div className="space-y-4 text-white text-lg md:text-xl">
                    <p>
                      Vasten is de meest krachtige manier om je lichaam te laten genezen.
                    </p>
                    <p>
                      Wanneer je stopt met eten schakelt je lichaam over
                      van spijsvertering naar zelfreiniging en celvernieuwing. Dit heet autofagie.
                      Oude, zieke cellen worden opgeruimd en vervangen door nieuwe, gezonde cellen.
                    </p>
                    <p>
                      Na 2-3 dagen vasten begint je lichaam opgeslagen vetten te verbranden.
                      Maar het gaat dieper: het begint ook emotionele en mentale blokkades op te ruimen.
                    </p>
                    <p>
                      Dit is lastig, omdat je lichaam bezig is met de grote kuis.
                      Maar, zodra de reiniging voorbij is, voel je je lichter, helderder en energieker dan ooit tevoren.
                    </p>
                    <p>
                      Je hoeft niet meteen all in te gaan. Begin met af en toe te vasten.
                      Geef je lichaam rust. Laat het reinigen.
                    </p>

                    <Button
                      onClick={() => setShowDialog2(true)}
                      className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      ✨ Succesvol vasten!
                    </Button>
                  </div>
                </div>
              </div>

              {/* Autonomie */}
              <div className="relative rounded-3xl p-8 md:p-12 border border-pink-300/20 bg-gradient-to-r from-pink-600/80 to-red-600/80 backdrop-blur-md shadow-[0_0_40px_rgba(244,114,182,0.10)] transform hover:scale-[1.02] transition-all duration-500">
                <div className="absolute top-5 right-5 z-20">
                  <Comments postId="ziekzot_autonomie" sectionTitle="Autonomie" />
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 pr-14">
                  Autonomie
                </h2>

                <div className="max-w-3xl">
                  <div className="space-y-4 text-white text-lg md:text-xl">
                    <p>
                      Als je dit wilt kan je je lichaam trainen om energie direct uit de omgeving te halen.
                      Zonlicht, lucht, en de energie van de aarde voeden je cellen.
                      Je wordt een autonoom wezen dat niet langer afhankelijk is van zaken die je normaal nodig hebt.
                    </p>
                    <p>
                      Er zijn mensen die al jaren leven zonder voedsel, water en slaap.
                      Ze zijn gezond, energiek, en stralen vitaliteit uit.
                      Dit is mogelijk door het lichaam te herprogrammeren.
                    </p>
                    <p>
                      Ons lichaam kan leven van kosmische energie,
                      van zonlicht en de levenskracht in de lucht die we inademen.
                      We hebben geen extra energie nodig als we ons lichaam in lijn brengen met ons ware zelf.
                    </p>
                    <p>
                      Dit vergt een aanpassing, allereerst mentaal en emotioneel.
                      Je moet geloven dat je lichaam dit kan. Dat je lichaam weet hoe het zichzelf kan genezen en voeden.
                      Vasten is de sleutel om deze vermogens te activeren.
                    </p>

                    <Button
                      onClick={() => setShowDialog(true)}
                      className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      ✨ Ons Mentaal spiritueel lichaam.
                    </Button>
                  </div>
                </div>
              </div>

              {/* Nature's Healing */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-pink-400/30">
                  <div className="absolute top-5 right-5 z-20">
                    <Comments postId="ziekzot_natuur_geneest" sectionTitle="De Natuur Geneest" />
                  </div>

                  <h3 className="text-3xl font-black text-pink-400 mb-4 pr-14">
                    De Natuur Geneest
                  </h3>
                  <p className="text-white text-lg">
                    De natuur heeft alles wat je nodig hebt om gezond te blijven.
                    Zonlicht en schone lucht geven je energie.
                    Water hydrateert en reinigt je systeem. De aarde aanraken met blote voeten geeft je balans met de natuur.
                    Wanneer je met de natuur leeft in plaats van tegen haar, verdwijnt ziekte.
                  </p>
                </div>

                <div className="relative bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-purple-400/30">
                  <div className="absolute top-5 right-5 z-20">
                    <Comments postId="ziekzot_liefde_noodzakelijk" sectionTitle="Liefde is noodzakelijk" />
                  </div>

                  <h3 className="text-3xl font-black text-purple-400 mb-4 pr-14">
                    Liefde is noodzakelijk
                  </h3>
                  <p className="text-white text-lg">
                    Als je lichaam geblokeert is door negatieve emoties zoals angst, woede, of verdriet,
                    kan het niet goed functioneren. Liefde en vreugde zijn essentieel als je langdurig wilt vasten.
                    Omarm het leven, wees dankbaar, en cultiveer liefde in je hart.
                    Dit opent de deur naar een gezond lichaam.
                  </p>
                </div>
              </div>

              <PracticalTip pageType="ziekzot" />

              {/* Call to Action */}
              <div className="relative text-center py-12">
                <div className="max-w-4xl mx-auto bg-black/40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-[0_0_50px_rgba(255,255,255,0.06)] transform hover:scale-[1.02] transition-all duration-500">
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                    Probeer eens 1 of meerdere maaltijden over te slaan.
                  </h2>
                  <p className="text-xl md:text-2xl text-white mb-6 hover:text-pink-200 transition-colors duration-300">
                    Experimenteer met je lichaam.
                  </p>
                  <div className="inline-block transform hover:scale-110 transition-all duration-300">
                    <p className="text-3xl md:text-5xl font-black text-red-400 hover:text-red-300 transition-colors duration-300">
                      Je zal verbaast zijn wat je aankan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Navigation />
        </div>

        <style jsx>{`
          @keyframes glitchMove {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }

          @keyframes glitch {
            0%, 100% { transform: translate(0); }
            20% { transform: translate(-5px, 5px); }
            40% { transform: translate(-5px, -5px); }
            60% { transform: translate(5px, 5px); }
            80% { transform: translate(5px, -5px); }
          }

          .animate-glitch {
            animation: glitch 0.3s ease-in-out;
          }
        `}</style>
      </div>

      {/* Mind / Body / Spirit */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="z-[70] max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-cyan-900 to-blue-900 text-white border-2 border-cyan-400">
          <DialogHeader>
            <DialogTitle className="text-3xl md:text-4xl font-black text-cyan-400 mb-4">
              Mind / Body / Spirit
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 text-lg">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/30">
              <h3 className="text-2xl font-black text-cyan-300 mb-3">
                Bewustzijn / Lichaam / Ziel
              </h3>
              <p>
                De mens is één geïntegreerd geheel van bewustzijn, lichaam en ziel.
                Deze drie lagen vormen samen de manier waarop het leven wordt ervaren.
                Wat zich aandient in het lichaam heeft zijn oorsprong in bewustzijn en ziel,
                en wat innerlijk beweegt vindt uiteindelijk zijn weg naar het fysieke bestaan.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/30">
              <h3 className="text-2xl font-black text-blue-300 mb-3">
                Het Lichaam
              </h3>
              <p className="mb-4">
                Het lichaam is het instrument waarmee bewustzijn zichzelf ervaart
                binnen deze realiteit. Het maakt voelen, handelen, grenzen, verlangens en keuzes zichtbaar.
              </p>

              <div className="mb-4 pl-4 border-l-4 border-teal-400">
                <h4 className="text-xl font-bold text-teal-300 mb-2">
                  Energie en innerlijke balans
                </h4>
                <p className="mb-2">
                  Het lichaam functioneert als een energiesysteem.
                  Wanneer overtuigingen, emoties en intenties in harmonie zijn, stroomt energie vrij en wordt gezondheid ervaren.
                  Spanningen, vermoeidheid of pijn wijzen op plaatsen waar innerlijke delen niet in lijn zijn.
                </p>
                <p className="mb-3">
                  Het lichaam is niet de ware identiteit, maar een tijdelijk gekozen vorm.
                  Toch is het heilig, omdat het het bewustzijn de mogelijkheid geeft zichzelf te ervaren.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/30">
              <h3 className="text-2xl font-black text-cyan-300 mb-3">
                Katalysatoren in het dagelijks leven
              </h3>
              <p className="mb-3">
                Alles wat sterke emotionele of fysieke reacties oproept in je leven, functioneert als katalysator.
                Dit kunnen gebeurtenissen zijn, relaties, lichamelijke klachten of terugkerende patronen.
              </p>
              <p className="mb-3">
                Een katalysator legt iets bloot: een overtuiging, een angst, een verlangen of een innerlijk conflict.
                Het lichaam speelt hierin een sleutelrol, omdat het spanning of ongemak direct voelbaar maakt.
              </p>
              <p>
                Elke emotionele of fysieke trigger kan worden benaderd met de vraag:
                <em> “Wat wil dit mij laten zien?”</em>
                {' '}Op die manier zorgt een katalysator voor zelfinzicht waarmee innerlijke heling kan plaatsvinden.
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
                <Comments postId="ziekzot_mind_body_spirit_dialog"  sectionTitle="Mind, Body & Spirit"/>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Succesvol vasten */}
      <Dialog open={showDialog2} onOpenChange={setShowDialog2}>
        <DialogContent className="z-[70] max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-cyan-900 to-blue-900 text-white border-2 border-cyan-400">
          <DialogHeader>
            <DialogTitle className="text-3xl md:text-4xl font-black text-cyan-400 mb-4">
              Succesvol vasten
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 text-lg">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/30">
              <h3 className="text-2xl font-black text-cyan-300 mb-3">
                Vasten is:
              </h3>
              <p>
                Niet eten en drinken voor een bepaalde periode om het lichaam te laten reinigen en helen.
                Geen medicatie gebruiken die het natuurlijke reinigingsproces verstoort.
                Niets innemen in het lichaam dat het vasten onderbreekt.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/30">
              <h3 className="text-2xl font-black text-blue-300 mb-3">
                Detoxificatie
              </h3>
              <p className="mb-4">
                In de eerste dagen van het vasten begint het lichaam met het opruimen van gifstoffen.
                Oude cellen worden afgebroken en schadelijke stoffen worden via urine, zweet en ontlasting uitgescheiden.
                Dit kan gepaard gaan met hoofdpijn, vermoeidheid, misselijkheid of stemmingswisselingen.
                Dit is normaal en een teken dat het lichaam aan het reinigen is.
              </p>
              <p>
                Zout water helpt het lichaam bij dit proces.
                Het lichaam gebruikt dit water om afvalstoffen uit de cellen weg te voeren.
                En uit te stoten via de natuurlijke uitscheidingswegen.
              </p>
              <p>
                Het beste zout is keltisch zeezout, omdat deze de natuurlijke mineralen bevat die het lichaam nodig heeft.
                De verhouding is 9 gram zout op 1 liter water.
                Elke keer je een negatief gevoel ervaart, drink je minstens een glas van dit zoutwater.
                Er is geen limiet aan hoeveel je mag drinken.
                Hou rekening dat je niet veel later gaat diaree hebben of moet urineren. (Dit is een goed teken!)
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/30">
              <h3 className="text-2xl font-black text-blue-300 mb-3">
                Positiviteit!
              </h3>
              <p>
                Positiviteit is essentieel tijdens het vasten. Je lichaam is bezig met een grote reiniging, en dit kan emotioneel en fysiek uitdagend zijn.
                Door een positieve mindset te cultiveren, ondersteun je het genezingsproces en maak je het gemakkelijker om door moeilijke momenten heen te komen.
                Focus op de voordelen van het vasten, deze komen er na de reiniging aan.
              </p>
              <p>
                Omgekeerd kan negativiteit het vasten bemoeilijken. Angst, frustratie, of twijfel kunnen spanning creëren in het lichaam, wat het reinigingsproces verstoort.
                Wees niet bang en drink voldoende zout water als je je slecht voelt. (3 liter per dag is zeker geen overdaad).
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
                <Comments postId="ziekzot_succesvol_vasten_dialog"  sectionTitle="Succesvol Vasten" />
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ZiekZot;
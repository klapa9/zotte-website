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
  const [showDialog, setShowDialog] = useState(false);
  const [showDialog2, setShowDialog2] = useState(false);

  useSeoMeta({
    title: 'De kracht van herstel - Lichaam, geest, vasten en natuur',
    description:
      'Ontdek hoe rust, mentale balans, vasten en de natuur het natuurlijke herstelvermogen van het lichaam kunnen ondersteunen.',
  });

  return (
    <>
      <CursorStyles />
      <AudioPlayer pageType="ziekzot" />

      <div className="min-h-screen bg-gradient-to-br from-red-900 via-pink-800 to-purple-900 overflow-hidden relative">
        {/* Background elements */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full mix-blend-screen opacity-20 animate-pulse"
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

        <div className="relative z-10 min-h-screen flex flex-col">
          {/* Header */}
          <div className="py-16 px-4 text-center">
            <h1 className="text-7xl md:text-9xl font-black mb-6 text-white">
              ZIEK ZOT
            </h1>
            <p className="text-xl md:text-2xl text-pink-100 max-w-3xl mx-auto">
              Je lichaam kan zichzelf genezen!
            </p>
          </div>

          {/* Main Content */}
          <div className="flex-1 px-4 pb-16">
            <div className="max-w-5xl mx-auto space-y-16">
              {/* Main Statement */}
              <div className="text-center">
                <div className="inline-block transform hover:scale-105 transition-transform duration-500">
                  <p className="text-4xl md:text-6xl font-black text-red-300 mb-4">
                    Je lichaam kan meer dan je denkt.
                  </p>
                </div>
              </div>

              {/* Zelfherstel */}
              <div className="relative rounded-3xl p-8 md:p-12 border border-red-400/30 bg-black/30 backdrop-blur-md shadow-[0_0_40px_rgba(248,113,113,0.10)]">
                <div className="absolute top-5 right-5 z-20">
                  <Comments postId="ziekzot" sectionId="blok1" sectionTitle="Het lichaam wil herstellen" />
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-red-400 mb-6 pr-14">
                  Het lichaam wil herstellen
                </h2>

                <div className="max-w-3xl">
                  <div className="space-y-4 text-white text-lg md:text-xl">
                    <p>
                      Ons lichaam beschikt over een ingebouwd vermogen om zichzelf te herstellen.
                      Snijwonden sluiten vanzelf, infecties worden bestreden en cellen vernieuwen zich continu.
                      Dit gebeurt zonder dat we er bewust iets voor moeten doen.
                    </p>
                    <p>
                      In veel gevallen grijpen we naar medicatie of externe oplossingen.
                      Soms is dat nodig en waardevol, maar meestal onderdrukken we hiermee het natuurlijke genezingsproces van het lichaam.
                      Door niet meteen in te grijpen, geef je je lichaam de kans om zichzelf te herstellen en sterker terug te komen.
                    </p>
                    <p>
                      Ziekte is niet altijd slecht, het is eerder een signaal dat er iets uit balans is en dat het lichaam probeert zichzelf te corrigeren.
                      Jij kan je lichaam helpen met dit genezingsproces.
                    </p>

                    <Button
                      onClick={() => setShowDialog(true)}
                      className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      ✨ Lichaam en geest
                    </Button>
                  </div>
                </div>
              </div>

              {/* Fasting */}
              <div className="relative rounded-3xl p-8 md:p-12 border border-pink-300/20 bg-gradient-to-r from-pink-600/80 to-red-600/80 backdrop-blur-md shadow-[0_0_40px_rgba(244,114,182,0.10)] transform hover:scale-[1.02] transition-all duration-500">
                <div className="absolute top-5 right-5 z-20">
                  <Comments postId="ziekzot" sectionId="blok2" sectionTitle="Vasten en zout water" />
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 pr-14">
                  De kracht van vasten
                </h2>

                <div className="max-w-3xl">
                  <div className="space-y-4 text-white text-lg md:text-xl">
                    <p>
                      Vasten kan een krachtige manier zijn om je lichaam zichzelf te laten genezen. 
                      Wanneer je tijdelijk niet eet, worden je cellen opgeruimd, verminderen je ontstekingen, verlies je gewicht en krijgt je spijsvertering rust. 
                      Dit kan een gevoel van reset geven, zowel fysiek als mentaal.
                    </p>
                    <p>
                      Dit opruimen en resetten kan echter ook een uitdaging zijn. 
                      Je lichaam ruimt niet alleen afvalstoffen op, maar ook opgeslagen emoties, spanning en stress. 
                      Je kan je tijdelijk slechter voelen voordat je je beter voelt.
                      Je kan last krijgen van vermoeidheid, misselijkheid of stemmingswisselingen. 
                      Maar als je hier doorheen geraakt zal je je een pak beter voelen dan daarvoor.
                    </p>
                    <p>
                      Tegelijk is vasten niet voor iedereen geschikt, en het vraagt het best voorbereiding, zelfobservatie en respect voor je grenzen.
                      Doe dit voorzichtig en luister goed naar je lichaam.
                    </p>

                    <Button
                      onClick={() => setShowDialog2(true)}
                      className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      ✨ Bewust en veilig vasten
                    </Button>
                  </div>
                </div>
              </div>

              {/* Nature cards */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-pink-400/30">
                  <div className="absolute top-5 right-5 z-20">
                    <Comments postId="ziekzot" sectionId="blok3" sectionTitle="De natuur ondersteunt herstel" />
                  </div>

                  <h3 className="text-3xl font-black text-pink-400 mb-4 pr-14">
                    De natuur ondersteunt herstel
                  </h3>
                  <p className="text-white text-lg">
                    Buiten zijn, zonlicht op je huid, frisse lucht, wandelen, de aarde voelen onder je voeten en een natuurlijk ritme volgen:
                    het zijn eenvoudige dingen die een diep effect kunnen hebben op stress, slaap, ademhaling en algemeen welzijn.
                    Hoe meer je leeft in verbinding met natuurlijke ritmes, hoe meer je lichaam tot rust kan komen.
                  </p>
                </div>

                <div className="relative bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-purple-400/30">
                  <div className="absolute top-5 right-5 z-20">
                    <Comments postId="ziekzot" sectionId="blok4" sectionTitle="Natuurlijke producten" />
                  </div>

                  <h3 className="text-3xl font-black text-purple-400 mb-4 pr-14">
                    Natuurlijke producten
                  </h3>
                  <p className="text-white text-lg">
                    Volwaardige onbewerkte producten en pure ingrediënten kunnen je lichaam helpen ondersteunen.
                    Niet omdat natuur automatisch alles oplost, maar omdat een lichaam vaak beter functioneert wanneer het minder belast wordt
                    door overbewerkte voeding en meer gevoed wordt door eenvoudige, echte producten.
                  </p>
                </div>
              </div>

              <PracticalTip pageType="ziekzot" />

              {/* Call to Action */}
              <div className="relative text-center py-12">
                <div className="max-w-4xl mx-auto bg-black/40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-[0_0_50px_rgba(255,255,255,0.06)] transform hover:scale-[1.02] transition-all duration-500">
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                    Geef je lichaam ruimte om te herstellen.
                  </h2>
                  <p className="text-xl md:text-2xl text-white mb-6 hover:text-pink-200 transition-colors duration-300">
                    Het kan meer dan je denkt.
                  </p>
                  <div className="inline-block transform hover:scale-110 transition-all duration-300">
                    <p className="text-3xl md:text-5xl font-black text-red-400 hover:text-red-300 transition-colors duration-300">
                      Genees jezelf!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Navigation />
        </div>
      </div>

      {/* Lichaam en geest */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="z-[70] max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-cyan-900 to-blue-900 text-white border-2 border-cyan-400">
          <DialogHeader>
            <DialogTitle className="text-3xl md:text-4xl font-black text-cyan-400 mb-4">
              Lichaam en geest
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 text-lg">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/30">
              <h3 className="text-2xl font-black text-cyan-300 mb-3">
                Ziekte is een signaal van disbalans
              </h3>
              <p>
                Je symptomen komen niet zomaar uit de lucht vallen. 
                Ze zijn een uiting van wat er in je lichaam en geest gebeurt.
                Je lichaam is constant bezig om zichzelf in balans te houden.
                Als je ziek bent is dit vaak het gevolg van een langdurige disbalans, overbelasting of een reactie op een stressor.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/30">
              <h3 className="text-2xl font-black text-cyan-300 mb-3">
                Herstel vraagt een totaalbeeld
              </h3>
              <p className="mb-3">
                Wie wil genezen, kijkt best niet alleen naar symptomen, maar ook naar belasting, ritme, slaap, voeding,
                relaties, stress, emoties en de omgeving waarin iemand leeft.
              </p>
              <p>
                Het lichaam en de geest zijn geen twee aparte werelden. Ze vormen samen één geheel dat voortdurend op elkaar reageert.
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
                <Comments postId="ziekzot" sectionId="dialoog1" sectionTitle="Lichaam en geest" />
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Bewust en veilig vasten */}
      <Dialog open={showDialog2} onOpenChange={setShowDialog2}>
        <DialogContent className="z-[70] max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-cyan-900 to-blue-900 text-white border-2 border-cyan-400">
          <DialogHeader>
            <DialogTitle className="text-3xl md:text-4xl font-black text-cyan-400 mb-4">
              Bewust en veilig vasten
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 text-lg">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/30">
              <h3 className="text-2xl font-black text-cyan-300 mb-3">
                Vasten
              </h3>
              <p>
                Tijdens het vasten ondersteun je het natuurlijke genezingsproces van je lichaam.
                Je kan zelf experimenteren met verschillende vormen van vasten, zoals intermittent fasting, 24-uur vasten of langere periodes van vasten.
              </p>
              <p>
                Als je goed wilt vasten, mag je geen andere dingen binnenkrijgen dan water. 
                Dus naast vasten ook geen koffie, thee, sap, bouillon of andere dranken. 
                Ook Nicotine, medicatie of supplementen onderbreken het vasten.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/30">
              <h3 className="text-2xl font-black text-cyan-300 mb-3">
                Je mentale staat tijdens het vasten
              </h3>
              <p>
                Vasten is niet alleen een fysieke uitdaging, maar ook een mentale.
                Je kan je tijdelijk slechter voelen voordat je je beter voelt. 
                Je lichaam ruimt niet alleen afvalstoffen op, maar ook opgeslagen emoties, spanning en stress.                
              </p>
              <p>
                Belangrijk is om hier bewust mee om te gaan.
                Hou steeds een positieve mindset, wees lief voor jezelf en weet dat dit een tijdelijk proces is dat uiteindelijk leidt tot meer energie, helderheid en welzijn.
                Wees zeker ook niet bang om te sporten tijdens het vasten, integendeel, beweging kan je helpen om beter te voelen en sneller te herstellen.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/30">
              <h3 className="text-2xl font-black text-blue-300 mb-3">
                Hydratatie en mineralen
              </h3>
              <p className="mb-4">
                Tijdens vasten blijft water drinken belangrijk. 
                Persoonlijk raad ik aan om dagelijks 2 liter zout water te drinken met 9gram/liter keltisch zout.
                Elke keer je je niet goed voelt, kan je een glas van dit water drinken. 
                Het helpt om je elektrolyten in balans te houden en de ontgiftingsprocessen te ondersteunen.
              </p>
              <p>
                Merk je duizeligheid, hartkloppingen of voel je je duidelijk veel slechter, dan is dat een signaal om te stoppen
                en zo nodig medische hulp te zoeken.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/30">
              <h3 className="text-2xl font-black text-blue-300 mb-3">
                Beïndigen van een vastenperiode
              </h3>
              <p className="mb-4">
                Na een periode van langdurig vasten (3 dagen of meer) is het belangrijk om langzaam weer te beginnen met eten. 
                Je spijsvertering heeft tijd nodig om zich aan te passen.
              </p>
              <p>
                Er zijn reeds mensen gestorven omdat ze na een lange vastenperiode meteen weer grote hoeveelheden voedsel aten. 
                Begin met kleine porties, lichte voeding en luister goed naar je lichaam.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/30">
              <h3 className="text-2xl font-black text-blue-300 mb-3">
                Vasten is niet voor iedereen
              </h3>
              <p>
                Bij zwangerschap, diabetes, eetstoornissen, ondergewicht, ziekte of medicatie is begeleiding extra belangrijk.
                Vasten moet nooit een dwang worden. Het hoort een bewuste keuze te zijn, met respect voor je gezondheid en je grenzen.
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
                <Comments postId="ziekzot" sectionId="dialoog2" sectionTitle="Bewust en veilig vasten" />
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ZiekZot;

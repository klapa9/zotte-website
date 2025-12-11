import { useSeoMeta } from '@unhead/react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CursorStyles from '@/components/CursorStyles';
import Navigation from '@/components/Navigation';
import PracticalTip from '@/components/PracticalTip';
import AudioPlayer from '@/components/AudioPlayer';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const Geld = () => {
  const [isGlitching, setIsGlitching] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  useSeoMeta({
    title: 'Geld - Bitcoin is de Oplossing',
    description: 'Ontdek waarom Bitcoin de scheiding van staat en geld mogelijk maakt. Koopkracht behouden, globale samenwerking, en financiële vrijheid.',
  });

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 300);
    }, 5000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <>
      <CursorStyles />
      <AudioPlayer pageType="geld" />
      <div className="min-h-screen bg-gradient-to-br from-orange-900 via-amber-800 to-yellow-700 overflow-hidden relative">
        {/* Animated background */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full mix-blend-screen opacity-15 animate-pulse"
              style={{
                width: `${Math.random() * 400 + 150}px`,
                height: `${Math.random() * 400 + 150}px`,
                background: `hsl(${Math.random() * 60 + 30}, 70%, 60%)`,
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
            <div className={`mb-8 ${isGlitching ? 'animate-glitch' : ''}`}>
              <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 animate-pulse">
                BITCOIN
              </h1>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                Magisch internetgeld
              </h2>
            </div>
            <p className="text-xl md:text-2xl text-white font-bold opacity-90">
              Een eerlijk systeem.
            </p>
          </div>

          {/* Content Sections */}
          <div className="flex-1 px-4 pb-16">
            <div className="max-w-6xl mx-auto space-y-16">
              {/* Probleem: Staat en Geld */}
              <div className="bg-black bg-opacity-40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-orange-400 border-opacity-30 transform hover:scale-105 transition-all duration-500">
                <h2 className="text-4xl md:text-5xl font-black text-orange-400 mb-6">
                  Een nieuw internetprotocol voor geld
                </h2>
                <div className="space-y-4 text-white text-lg md:text-xl">
                  <p>
                    Bitcoin is een gedecentraliseerd netwerk dat geld mogelijk maakt zonder tussenpersonen.
                    Het zorgt voor een eerlijke manier om waarde over te dragen via het internet.
                  </p>
                  <p>
                    Iedereen is gelijk voor het protocol - er is geen centrale autoriteit die de regels bepaalt.
                    Iedereen kan deelnemen zonder toestemming.
                    De regels zijn transparant en onveranderlijk.                    
                  </p>
                  <p>
                    1 van de belangrijkste eigenschappen van Bitcoin is de limiet van 21 miljoen munten.
                    Dit zorgt ervoor dat Bitcoin niet kan worden gedevalueerd door inflatie zoals traditionele valuta.
                  </p>
                  <p>
                    Wel kan een Bitcoin worden opgesplitst in 100 miljoen eenheden, genaamd sats.
                    Dit maakt het mogelijk om via kleine bedragen deel te nemen aan het netwerk.
                  </p>
                </div>
              </div>

              {/* Bitcoin vs Crypto */}
              <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl p-8 md:p-12">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                  BITCOIN ≠ CRYPTO
                </h2>
                <div className="grid md:grid-cols-2 gap-8 text-white text-lg md:text-xl">
                  <div>
                    <h3 className="text-2xl font-black text-orange-300 mb-4">BITCOIN</h3>
                    <ul className="space-y-2">
                      <li>• Decentralized protocol</li>
                      <li>• Echte scheiding van staat en geld</li>
                      <li>• Proof-of-Work: gebruikte energie is veiligheid</li>
                      <li>• Fixed supply: 21 miljoen</li>
                      <li>• Geen CEO, bedrijf of marketing team.</li>
                      <li>• 15+ jaar bewezen</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-yellow-300 mb-4">CRYPTO</h3>
                    <ul className="space-y-2">
                      <li>• Bedrijven</li>
                      <li>• Pre-mined, VC funded</li>
                      <li>• Tokens, geen geld</li>
                      <li>• CEOs die het kunnen stoppen</li>
                      <li>• oneindige voorraad mogelijk</li>
                      <li>• scams</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Globale Samenwerking */}
              <div className="bg-gradient-to-r from-yellow-600 to-amber-600 rounded-3xl p-8 md:p-12">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                  GLOBALE SAMENWERKING
                </h2>
                <div className="space-y-4 text-white text-lg md:text-xl">
                  <p>
                    Bitcoin is het eerste echt globale decentrale geldnetwerk. 
                    Iedereen met een internetverbinding kan deelnemen - er is geen toestemming nodig.
                  </p>
                  <p>
                    Dit maakt globale samenwerking mogelijk zoals nooit tevoren:
                  </p>
                  <ul className="space-y-2 text-yellow-300 font-bold">
                    <li>• Iemand in Nigeria kan direct betalen aan iemand in Argentinië</li>
                    <li>• Geen tussenpersonen die transaction fees stelen</li>
                    <li>• Geen politieke grenzen die geldstromen blokkeren</li>
                    <li>• Financiële inclusie voor miljarden mensen</li>
                  </ul>
                  <p>
                    Bitcoin creëert een eerlijk speelveld, 
                    waar de locatie waar je wordt geboren niet langer je financiële toekomst bepaalt.
                  </p>
                </div>
              </div>

              {/* Koopkracht Behouden */}
              <div className="bg-white bg-opacity-5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-yellow-400 border-opacity-30">
                <h2 className="text-4xl md:text-5xl font-black text-yellow-400 mb-6">
                  Je nieuwe spaarboekje
                </h2>
                <div className="space-y-4 text-white text-lg md:text-xl">
                  <p>
                    Bitcoin stijgt in waarde omdat niemand zomaar meer kan bijmaken.
                    De 21 miljoen voorraad is hardcoded in het protocol - niemand kan dit veranderen.
                    En gezien er steeds meer goederen en diensten op de markt komen,
                    maar de hoeveelheid geld gelijk blijft, zal de koopkracht van je spaargeld toenemen.
                  </p>
                  <p>
                    Dit is fundamenteel anders dan fiat valuta die continu worden gedevalueerd.
                    Terwijl de euro en dollar verliezen aan waarde, stijgt de waarde van Bitcoin.
                  </p>
                  <div className="mt-6">
                    <Button
                      onClick={() => setShowDialog(true)}
                      className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      ✨ Hyperbitcoinisatie?
                    </Button>
                  </div>
                </div>
              </div>

              {/* Praktische Tip Section */}
              <PracticalTip pageType="geld" />

              {/* Stay Humble Stack Sats */}
              <div className="text-center py-12">
                <div className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 rounded-3xl p-8 md:p-12 transform hover:scale-105 hover:rotate-2 transition-all duration-500 cursor-pointer">
                  <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                    STAY HUMBLE
                  </h2>
                  <h3 className="text-3xl md:text-5xl font-black text-orange-300 mb-6">
                    AND STACK
                  </h3>
                  <p className="text-4xl md:text-6xl font-black text-yellow-400">
                    SATS
                  </p>
                  <div className="mt-8 space-y-4">
                    <p className="text-xl md:text-2xl text-white">
                      Vergeet de prijs, focus op de lange termijn.
                    </p>
                    <p className="text-lg md:text-xl text-white opacity-90">
                      Spaar voor je financiële vrijheid.
                    </p>
                    <div className="text-2xl md:text-3xl font-black text-white">
                      1 bitcoin = 100.000.000 sats
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Navigation />
        </div>

        {/* Custom animations */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
          }

          @keyframes glitch {
            0%, 100% { transform: translate(0); filter: hue-rotate(0deg); }
            20% { transform: translate(-5px, 5px); filter: hue-rotate(90deg); }
            40% { transform: translate(-5px, -5px); filter: hue-rotate(180deg); }
            60% { transform: translate(5px, 5px); filter: hue-rotate(270deg); }
            80% { transform: translate(5px, -5px); filter: hue-rotate(360deg); }
          }

          .animate-float {
            animation: float linear infinite;
          }

          .animate-glitch {
            animation: glitch 0.3s ease-in-out;
          }
        `}</style>
      </div>
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-cyan-900 to-blue-900 text-white border-2 border-cyan-400">
          <DialogHeader>
            <DialogTitle className="text-3xl md:text-4xl font-black text-cyan-400 mb-4">
              Hyperbitcoinisatie
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 text-lg">
            {/* Introductie */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400 border-opacity-30">
              <h3 className="text-2xl font-black text-cyan-300 mb-3">Wat als iedereen enkel Bitcoin gebruikt?</h3>
              <p>
                Als Bitcoin het pad van het internet volgt, zal het de dominante vorm van geld worden.
                Dit proces wordt hyperbitcoinisatie genoemd. Het betekent dat traditionele valuta's
                hun waarde verliezen ten opzichte van Bitcoin, omdat steeds meer mensen en bedrijven
                Bitcoin als hun primaire geldsysteem adopteren.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-blue-400 border-opacity-30">
              <h3 className="text-2xl font-black text-blue-300 mb-3">Het beste spaarboekje</h3>
              <p className="mb-4">
                Gezien er maar een beperkt aantal Bitcoin zal zijn, zal je spaargeld in Bitcoin stijgen in waarde over tijd.
                Als er meer goederen op de markt komen, maar de hoeveelheid geld gelijk blijft,
                zal de koopkracht van je spaargeld toenemen.
              </p>

              {/* Spaargeld */}
              <div className="mb-4 pl-4 border-l-4 border-teal-400">
                <h4 className="text-xl font-bold text-teal-300 mb-2">Sparen of lenen?</h4>
                <p className="mb-2">
                  Een toename in koopkracht moedigt je aan om te sparen in plaats van te lenen.
                  Leningen worden niet noodzakelijk als je voldoende spaargeld hebt.
                  Hierdoor krijg je meer vermogen en minder schulden. 
                </p>
                <p>
                  Door de stijging van je vermogen, kun je eerder financiële onafhankelijkheid bereiken.
                  Hierdoor krijg je minder druk om te werken voor je levensonderhoud.
                  Je stress vermindert en je kunt meer tijd besteden aan de dingen die er echt toe doen.
                </p>

              </div>

            </div>

            {/* scheiding staat en geld */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-blue-400 border-opacity-30">
              <h3 className="text-2xl font-black text-blue-300 mb-3">Scheiding van staat en geld.</h3>
              <p className="mb-4">
                Net als de scheiding van kerk en staat, zal de scheiding van staat en geld leiden tot een vrijere samenleving.
                Overheden zullen niet langer controle hebben over geldstromen, wat hun macht aanzienlijk zal verminderen.
                Dit zal leiden tot meer individuele vrijheid, minder corruptie en een eerlijker economisch systeem.
              </p>

              {/* Scheiding van staat en geld */}
              <div className="mb-4 pl-4 border-l-4 border-teal-400">
                <h4 className="text-xl font-bold text-teal-300 mb-2">Gevolgen?</h4>
                <p className="mb-2">
                  Oorlog zal veel moeilijker zijn in een wereld waar iedereen Bitcoin gebruikt.
                  Zonder controle over geld kunnen overheden hun militaire macht niet langer financieren.
                  Dit zal de drang naar conflicten aanzienlijk verminderen.
                </p>
                <p>
                  Bovendien zal het de weg vrijmaken voor meer internationale samenwerking en vrede.
                  Landen zullen meer geneigd zijn om samen te werken in plaats van tegen elkaar te strijden,
                  omdat hun economische belangen dan meer op één lijn liggen.
                </p>

              </div>

            </div>

            {/* De Keuze */}
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-6 border border-cyan-400 border-opacity-30">
              <h3 className="text-2xl font-black text-white mb-3">De keuze is aan jou!</h3>
              <p className="mb-3">
                Bitcoin biedt een alternatief voor het huidige financiële systeem.
                Door te kiezen voor Bitcoin, kies je voor financiële vrijheid en onafhankelijkheid van politieke beslissingen.
                Het is een kans om deel uit te maken van een eerlijker en transparanter economisch systeem.
              </p>
              <p>
                De keuze is aan jou: blijf je vasthouden aan traditionele valuta's die worden gedevalueerd,
                of omarm je de toekomst met Bitcoin als jouw geldsysteem?
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

export default Geld;
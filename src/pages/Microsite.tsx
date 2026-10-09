import { useSeoMeta } from '@unhead/react';
import { Link, useLocation } from 'react-router-dom';
import { micrositeTopics, type MicrositeTopic } from '@/data/microsite';
import { additionalArticles } from '@/data/micrositeArticles';
import '@/styles/microsite.css';

function MicrositeShell({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <div className="microsite min-h-screen text-white">
      <div className="microsite-orb microsite-orb-one" aria-hidden="true" />
      <div className="microsite-orb microsite-orb-two" aria-hidden="true" />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-8 pt-6 sm:px-6 lg:px-8">
        <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <Link to="/" className="microsite-brand rounded-lg px-2 py-1 text-lg font-black tracking-wide focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300">NOG ZOTTERE <span>✦</span></Link>
          <span className="text-sm text-slate-300">Een reis voorbij het gewone</span>
        </header>
        <nav aria-label="Zes onderwerpen" className="microsite-panel mb-8 p-3 sm:p-4">
          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
            {micrositeTopics.map((topic, index) => (
              <li key={topic.slug}>
                <Link
                  to={`/${topic.slug}`}
                  aria-current={location.pathname === `/${topic.slug}` ? 'page' : undefined}
                  className="microsite-nav-link flex h-full min-h-14 items-center rounded-xl px-3 py-2 text-sm font-semibold leading-snug focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                >
                  <span className="mr-2 text-cyan-300/80">0{index + 1}</span>{topic.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <main id="inhoud" className="flex-1">{children}</main>
        <footer className="mt-16 border-t border-white/15 pt-6 text-center text-sm text-slate-400">
          <a href="https://soapbox.pub/mkstack" className="rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300 hover:text-white">Vibed with MKStack</a>
        </footer>
      </div>
    </div>
  );
}

export function MicrositeHome() {
  useSeoMeta({
    title: 'Nog Zottere | Ontdek zes nieuwe perspectieven',
    description: 'Een reis langs bewustzijn, energie en de verbondenheid van alles. Ontdek zes spirituele onderwerpen op Nog Zottere.',
  });

  return <MicrositeShell>
    <section className="mx-auto max-w-4xl pb-8 pt-7 text-center sm:pt-14">
      <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">Durf verder te kijken</p>
      <h1 className="microsite-title text-5xl font-black leading-tight sm:text-7xl">Alles is nog zotter dan je denkt</h1>
      <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-slate-200 sm:text-xl">Wat als je meer bent dan je lichaam? Wat als alles met elkaar verbonden is? Volg je nieuwsgierigheid langs zes ideeën die je blik op het leven openen.</p>
    </section>
    <section aria-label="Ontdek de onderwerpen" className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {micrositeTopics.map((topic, index) => <Link key={topic.slug} to={`/${topic.slug}`} className="microsite-panel microsite-card group rounded-3xl p-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300">
        <span className="mb-8 block text-sm font-bold tracking-widest text-cyan-300">0{index + 1} / 06</span>
        <h2 className="mb-3 text-2xl font-black text-white">{topic.title}</h2>
        <p className="text-slate-300">{topic.subtitle}</p>
        <span className="mt-6 inline-block font-bold text-cyan-300 group-hover:text-white">Ontdek onderwerp →</span>
      </Link>)}
    </section>
  </MicrositeShell>;
}

export function MicrositeArticle() {
  useSeoMeta({
    title: 'Verlaat je lichaam | Nog Zottere',
    description: 'Ontdek buitenlichamelijke ervaringen, bewustzijn voorbij het lichaam en manieren om je eigen ervaring te verkennen.',
  });

  return <MicrositeShell>
    <article className="mx-auto max-w-3xl">
      <header className="pb-9 pt-6 sm:pt-12">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">01 / Bewustzijn</p>
        <h1 className="microsite-title text-5xl font-black leading-tight sm:text-7xl">Verlaat je lichaam</h1>
        <p className="mt-6 text-xl leading-relaxed text-slate-200 sm:text-2xl">Je bent meer dan je fysieke lichaam. Een buitenlichamelijke ervaring laat je voelen hoe bewustzijn verder reikt dan wat je met je ogen ziet.</p>
      </header>
      <div className="space-y-6">
        <section className="microsite-panel rounded-3xl p-6 sm:p-9">
          <h2 className="mb-4 text-2xl font-black text-cyan-200 sm:text-3xl">Meer dan je lichaam</h2>
          <p>Je lichaam draagt je door het leven. Toch is de ervaring van wie je bent groter dan alleen je huid, je zintuigen en je gedachten. Bij een buitenlichamelijke ervaring lijkt je bewustzijn zich los te maken van je fysieke lichaam. Je neemt jezelf en je omgeving waar vanuit een ander perspectief.</p>
          <p>Dat perspectief kan helder en levendig zijn. Je kijkt bijvoorbeeld naar de kamer terwijl je lichaam rust, of je beweegt door een ruimte zonder de grenzen die je overdag gewend bent. Zo ontdek je dat bewustzijn niet ophoudt bij het lichaam.</p>
        </section>
        <section className="microsite-panel rounded-3xl p-6 sm:p-9">
          <h2 className="mb-4 text-2xl font-black text-cyan-200 sm:text-3xl">Wat bijna-doodervaringen laten zien</h2>
          <p>Mensen met een bijna-doodervaring vertellen vaak dat ze uit hun lichaam treden. Ze zien hun lichaam en de omgeving vanuit een ander ‘lichaam’. Soms ervaren ze een keuze: vasthouden aan het fysieke bestaan of loslaten en doorgaan naar een andere vorm van bewustzijn.</p>
          <p>Die verhalen tonen dat de dood niet het einde van bewustzijn is. Het bewustzijn blijft bestaan wanneer het fysieke lichaam sterft. Je kunt zulke ervaringen zelf verkennen door getuigenissen te beluisteren en op te merken wat ze bij jou wakker maken.</p>
        </section>
        <section className="microsite-panel rounded-3xl p-6 sm:p-9">
          <h2 className="mb-4 text-2xl font-black text-cyan-200 sm:text-3xl">De overgang tussen waken en slapen</h2>
          <p>De drempel tussen wakker zijn en slapen biedt ruimte om je bewustzijn anders te ervaren. Je lichaam ontspant terwijl je aandacht helder blijft. In die stilte kun je trillingen, een gevoel van zweven of een verandering van perspectief opmerken.</p>
          <p>Laat de ervaring zich ontvouwen. Je hoeft niets te forceren. Nieuwsgierigheid en vertrouwen helpen je om aandachtig te blijven wanneer het vertrouwde gevoel van je lichaam verandert.</p>
        </section>
        <section className="microsite-panel microsite-tip rounded-3xl p-6 sm:p-9">
          <h2 className="mb-4 text-2xl font-black text-cyan-200 sm:text-3xl">Probeer het zelf</h2>
          <ul className="list-disc space-y-3 pl-6">
            <li>Ga rustig liggen en ontspan je lichaam van je voeten tot je hoofd.</li>
            <li>Houd je aandacht zacht wakker terwijl je lichaam in slaap valt. Volg je ademhaling of stel je voor dat je licht omhoog zweeft.</li>
            <li>Merk beelden, trillingen en veranderingen in je gevoel op zonder ze vast te grijpen.</li>
            <li>Schrijf na het wakker worden je dromen en ervaringen op. Zo herken je steeds beter je eigen patronen.</li>
            <li>Luister naar verhalen over bijna-doodervaringen en voel wat ze voor jouw kijk op bewustzijn betekenen.</li>
          </ul>
        </section>
        <section className="microsite-panel rounded-3xl p-6 sm:p-9">
          <h2 className="mb-4 text-2xl font-black text-cyan-200 sm:text-3xl">Neem het mee in je leven</h2>
          <p>Een buitenlichamelijke ervaring opent een groter beeld van wie je bent. Je bent bewustzijn dat via een lichaam het leven ervaart. Als je dat voelt, wordt de wereld ruimer en krijgt de vraag naar wat er na de dood gebeurt een nieuw licht.</p>
        </section>
      </div>
      <div className="mt-10 flex justify-end border-t border-white/20 pt-6">
        <Link to="/kundalini" className="rounded-xl px-4 py-3 font-bold text-cyan-200 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300">Volgende: Kundalini →</Link>
      </div>
    </article>
  </MicrositeShell>;
}

export function MicrositeAdditionalArticle({ topic }: { topic: MicrositeTopic }) {
  const article = additionalArticles[topic.slug];
  const index = micrositeTopics.findIndex((item) => item.slug === topic.slug);
  const previous = micrositeTopics[index - 1];
  const next = micrositeTopics[index + 1];

  useSeoMeta({ title: `${topic.title} | Nog Zottere`, description: article.description });

  return <MicrositeShell>
    <article className="mx-auto max-w-3xl">
      <header className="pb-9 pt-6 sm:pt-12">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">0{index + 1} / Bewustzijn</p>
        <h1 className="microsite-title text-5xl font-black leading-tight sm:text-7xl">{topic.title}</h1>
        <p className="mt-6 text-xl leading-relaxed text-slate-200 sm:text-2xl">{article.introduction}</p>
      </header>
      <div className="space-y-6">
        {article.sections.map((section) => <section key={section.heading} className={`microsite-panel rounded-3xl p-6 sm:p-9${section.tip ? ' microsite-tip' : ''}`}>
          <h2 className="mb-4 text-2xl font-black text-cyan-200 sm:text-3xl">{section.heading}</h2>
          {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {section.bullets && <ul className="list-disc space-y-3 pl-6 text-slate-200">{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
        </section>)}
      </div>
      <nav aria-label="Vorige en volgende artikelen" className="mt-10 flex flex-wrap justify-between gap-3 border-t border-white/20 pt-6">
        {previous && <Link to={`/${previous.slug}`} className="rounded-xl px-4 py-3 font-bold text-cyan-200 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300">← Vorige: {previous.title}</Link>}
        {next && <Link to={`/${next.slug}`} className="ml-auto rounded-xl px-4 py-3 font-bold text-cyan-200 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300">Volgende: {next.title} →</Link>}
      </nav>
    </article>
  </MicrositeShell>;
}

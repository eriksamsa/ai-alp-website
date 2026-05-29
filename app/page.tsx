import Link from 'next/link';
import WaitlistForm from './WaitlistForm';

const features = [
  {
    title: 'Načrtovanje ture',
    text: 'Pregledna priprava cilja, časovnice, zahtevnosti in ključnih informacij pred odhodom.',
  },
  {
    title: 'Vreme in razmere',
    text: 'Prostor za prihodnje vremenske podatke, opozorila in informacije o razmerah v gorah.',
  },
  {
    title: 'Varnostni napotki',
    text: 'Jasni opomniki za opremo, čas odhoda, tveganja in odgovorno odločanje na terenu.',
  },
  {
    title: 'Slovenske gore in poti',
    text: 'Zasnova za informacije o vrhovih, poteh in uporabnih podatkih za slovenski gorski prostor.',
  },
  {
    title: 'Za domače planince in tuje obiskovalce',
    text: 'Enostavna izkušnja za redne obiskovalce gora in ljudi, ki slovenske poti šele spoznavajo.',
  },
  {
    title: 'AI pomočnik za pripravo na turo',
    text: 'Načrtovan pomočnik za urejanje priprav, vprašanj pred turo in boljše razumevanje informacij.',
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Mobilna aplikacija za gore</p>
          <h1>AlpAI</h1>
          <p className="slogan">Tvoja pot do novih razgledov.</p>
          <p className="hero-text">
            AlpAI pomaga pri načrtovanju gorskih tur, preverjanju razmer in varnejšem odločanju
            pred odhodom v gore.
          </p>
          <div className="hero-chips" aria-label="Ključne prednosti">
            <span>AI priprava</span>
            <span>Vreme</span>
            <span>Varnost</span>
          </div>
          <div className="hero-actions">
            <a className="button primary" href="#availability">
              Kmalu na voljo
            </a>
            <Link className="button secondary" href="/contact">
              Kontakt
            </Link>
          </div>
        </div>

        <div className="hero-visual" aria-label="Logotip aplikacije AlpAI">
          <div className="logo-showcase">
            <img src="/alpai-logo.png" alt="AlpAI logo aplikacije" />
            <div className="logo-caption">
              <span>AlpAI</span>
              <strong>Tvoja pot do novih razgledov.</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="availability" id="availability">
        <div>
          <span className="status-dot" />
          <strong>Kmalu na voljo</strong>
        </div>
        <div className="availability-right">
          <p>Bodite med prvimi. Pustite email in vas obvestimo ob izidu.</p>
          <WaitlistForm />
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Funkcije</p>
          <h2>Pametnejša priprava na gore, brez nepotrebne kompleksnosti.</h2>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="split-section">
        <div>
          <p className="eyebrow">Zaupanje in varnost</p>
          <h2>Tehnologija kot podpora, ne nadomestilo presoje.</h2>
        </div>
        <p>
          AlpAI je zasnovan kot zanesljiv informativni pripomoček za boljšo pripravo na turo.
          Končne odločitve v gorah vedno ostanejo odgovornost uporabnika.
        </p>
      </section>
    </>
  );
}

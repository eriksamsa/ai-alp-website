import Link from 'next/link';

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
          <h1>AI-ALP</h1>
          <p className="slogan">Tvoja pot do novih razgledov.</p>
          <p className="hero-text">
            AI-ALP pomaga pri načrtovanju gorskih tur, preverjanju razmer in varnejšem odločanju
            pred odhodom v gore.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#availability">
              Kmalu na voljo
            </a>
            <Link className="button secondary" href="/contact">
              Kontakt
            </Link>
          </div>
        </div>

        <div className="hero-visual" aria-label="Prostor za kasnejši logo ali hero sliko">
          <div className="device-card">
            <div className="device-bar" />
            <div className="app-logo-preview" aria-label="AI-ALP začasni logotip aplikacije">
              <div className="app-logo-icon" aria-hidden="true">
                <span className="logo-sky" />
                <span className="logo-peak logo-peak-back" />
                <span className="logo-peak logo-peak-front" />
                <span className="logo-route" />
              </div>
              <div>
                <span>AI-ALP</span>
                <strong>Mountain assistant</strong>
              </div>
            </div>
            <div className="mountain-panel" aria-hidden="true">
              <span className="sun" />
              <span className="peak peak-back" />
              <span className="peak peak-front" />
              <span className="path-line" />
              <span className="path-dot path-start" />
              <span className="path-dot path-end" />
            </div>
            <div className="route-summary">
              <span>Priprava ture</span>
              <strong>Vreme, pot, varnost</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="availability" id="availability">
        <div>
          <span className="status-dot" />
          <strong>Kmalu na voljo</strong>
        </div>
        <p>
          AI-ALP je trenutno v razvoju. Stran je pripravljena za javno predstavitev, pravne vsebine
          pa se lahko posodobijo pred izidom aplikacije.
        </p>
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
          AI-ALP je zasnovan kot zanesljiv informativni pripomoček za boljšo pripravo na turo.
          Končne odločitve v gorah vedno ostanejo odgovornost uporabnika.
        </p>
      </section>
    </>
  );
}

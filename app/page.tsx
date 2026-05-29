import Link from 'next/link';
import WaitlistForm from './WaitlistForm';
import ScrollAnimate from './ScrollAnimate';

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

const faqs = [
  {
    q: 'Kdaj bo aplikacija na voljo?',
    a: 'AlpAI je trenutno v aktivnem razvoju. Prijavite se na čakalni seznam in obvestili vas bomo takoj ob izidu.',
  },
  {
    q: 'Bo na voljo za iOS in Android?',
    a: 'Da — AlpAI se razvija hkrati za obe platformi, iOS in Android.',
  },
  {
    q: 'Koliko bo stala aplikacija AlpAI?',
    a: 'Cena še ni dokončno določena. Člani čakalnega seznama bodo med prvimi izvedeli za ponudbe ob lansiranju.',
  },
  {
    q: 'Je namenjena samo slovenskim goram?',
    a: 'Začetni fokus so slovenske gore in poti, s ciljem razširiti pokritost na celotni alpski prostor.',
  },
  {
    q: 'Ali deluje brez interneta?',
    a: 'Delovanje brez interneta je načrtovano za ključne funkcije. Podrobnosti bodo znane bližje lansiranju.',
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

        <div className="hero-visual" aria-label="Predogled aplikacije AlpAI">
          <div className="phone-mockup" aria-hidden="true">
            <div className="phone-frame">
              <div className="phone-notch" />
              <div className="phone-screen">
                <div className="phone-app-bar">
                  <span className="phone-app-name">AlpAI</span>
                  <span className="phone-app-dot" />
                </div>
                <div className="phone-mountain-card">
                  <div className="phone-mountain-bg">
                    <div className="phone-sun" />
                    <div className="phone-peak phone-peak-back" />
                    <div className="phone-peak phone-peak-front" />
                    <div className="phone-route-line" />
                  </div>
                  <div className="phone-route-label">
                    <span>Triglav — 2864 m</span>
                    <span className="phone-route-tag">Načrtovano</span>
                  </div>
                </div>
                <div className="phone-stats-row">
                  <div className="phone-stat"><strong>8,2 km</strong><span>Razdalja</span></div>
                  <div className="phone-stat"><strong>1420 m</strong><span>Vzpon</span></div>
                  <div className="phone-stat"><strong>5–6 h</strong><span>Čas</span></div>
                </div>
                <div className="phone-weather-card">
                  <span className="phone-weather-icon">⛅</span>
                  <div>
                    <strong>Delno oblačno</strong>
                    <span>Jutri 8°C · Veter 15 km/h</span>
                  </div>
                </div>
                <div className="phone-ai-card">
                  <span className="phone-ai-label">AI</span>
                  <p>Razmere so primerne. Priporoča se topla obleka in vodoodporna jakna.</p>
                </div>
              </div>
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
        <ScrollAnimate>
          <div className="section-heading">
            <p className="eyebrow">Funkcije</p>
            <h2>Pametnejša priprava na gore, brez nepotrebne kompleksnosti.</h2>
          </div>
        </ScrollAnimate>

        <div className="feature-grid">
          {features.map((feature, i) => (
            <ScrollAnimate key={feature.title} delay={i * 60}>
              <article className="feature-card feature-card--full">
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            </ScrollAnimate>
          ))}
        </div>
      </section>

      <section className="split-section">
        <ScrollAnimate>
          <div>
            <p className="eyebrow">Zaupanje in varnost</p>
            <h2>Tehnologija kot podpora, ne nadomestilo presoje.</h2>
          </div>
        </ScrollAnimate>
        <ScrollAnimate delay={100}>
          <p>
            AlpAI je zasnovan kot zanesljiv informativni pripomoček za boljšo pripravo na turo.
            Končne odločitve v gorah vedno ostanejo odgovornost uporabnika.
          </p>
        </ScrollAnimate>
      </section>

      <section className="section faq-section">
        <ScrollAnimate>
          <div className="section-heading">
            <p className="eyebrow">Pogosta vprašanja</p>
            <h2>Vse kar želite vedeti o AlpAI.</h2>
          </div>
        </ScrollAnimate>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <ScrollAnimate key={faq.q} delay={i * 60}>
              <details className="faq-item">
                <summary className="faq-question">{faq.q}</summary>
                <p className="faq-answer">{faq.a}</p>
              </details>
            </ScrollAnimate>
          ))}
        </div>
      </section>
    </>
  );
}

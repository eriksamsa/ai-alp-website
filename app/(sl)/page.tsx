import Link from 'next/link';
import WaitlistForm from '../WaitlistForm';
import ScrollAnimate from '../ScrollAnimate';

const features = [
  {
    icon: '⛰️',
    title: 'O aplikaciji',
    text: 'alpAI združuje zanesljive podatke o vremenu, razmerah, varnosti in zemljevidih z močjo umetne inteligence, da lahko svoje gorske ture načrtuješ pametneje in z več zaupanja.',
  },
  {
    icon: '👥',
    title: 'Komu je namenjena',
    text: 'Za pohodnike, alpiniste, gorske vodnike in vse ljubitelje narave, ki želijo bolje načrtovane, varnejše in bolj uživaške gorske izkušnje.',
  },
  {
    icon: '✉️',
    title: 'Kontakt',
    text: 'Za vprašanja, predloge ali sodelovanje smo tu za vas.',
    email: 'info@alpai.si',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg" />

        <div className="hero-phones">
          <div className="hero-phone hero-phone--back">
            <div className="hero-phone-notch" />
            <img src="/app-screenshot-2.png" alt="AlpAI vreme" className="hero-phone-img" />
          </div>
          <div className="hero-phone hero-phone--front">
            <div className="hero-phone-notch" />
            <img src="/app-screenshot.png" alt="AlpAI domača stran" className="hero-phone-img" />
          </div>
        </div>

        <div className="hero-copy">
          <div className="hero-badge">
            <span className="hero-badge-icon">⛰</span>
            Premišljene odločitve. Nepozabni razgledi.
          </div>
          <img src="/logo-alpai.png" alt="alpAI" className="hero-logo" />
          <h2 className="hero-sub">Pametnejše načrtovanje gorskih tur</h2>
          <p className="hero-text">
            Načrtuj pametneje, pojdi varneje, razišni več.
            Zanesljivo načrtovanje tur, natančno vreme in razmere,
            varna priporočila ter AI pomočnik – vse v eni aplikaciji.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#waitlist">
              Preizkusi aplikacijo →
            </a>
            <a className="button hero-secondary" href="#features">
              ▶ Oglej si predstavitev
            </a>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="features-section" id="features">
        <div className="features-grid">
          {features.map((f, i) => (
            <ScrollAnimate key={f.title} delay={i * 80}>
              <article className="feature-dark-card">
                <span className="feature-dark-icon">{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
                {f.email && (
                  <a href={`mailto:${f.email}`} className="feature-email">{f.email}</a>
                )}
              </article>
            </ScrollAnimate>
          ))}
        </div>
      </section>

      {/* ── WAITLIST ── */}
      <section className="waitlist-section" id="waitlist">
        <div className="waitlist-inner">
          <div className="waitlist-left">
            <span className="waitlist-bell">🔔</span>
            <div>
              <strong>Kmalu na voljo za iOS in Android</strong>
              <p>Pridruži se čakalni listi in bodi med prvimi obveščen.</p>
            </div>
          </div>
          <div className="waitlist-right">
            <WaitlistForm />
          </div>
        </div>
      </section>
    </>
  );
}

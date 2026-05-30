import Link from 'next/link';
import WaitlistForm from '../WaitlistForm';
import ScrollAnimate from '../ScrollAnimate';
import MountainBackground from '../MountainBackground';

const features = [
  {
    title: 'Tour Planning',
    text: 'Clear preparation of your goal, timeline, difficulty, and key information before departure.',
  },
  {
    title: 'Weather & Conditions',
    text: 'Space for upcoming weather data, alerts, and mountain condition information.',
  },
  {
    title: 'Safety Tips',
    text: 'Clear reminders for equipment, departure time, risks, and responsible decision-making in the field.',
  },
  {
    title: 'Slovenian Mountains & Trails',
    text: 'Designed for information about peaks, trails, and useful data for the Slovenian mountain area.',
  },
  {
    title: 'For locals and foreign visitors',
    text: 'A simple experience for regular hikers and people discovering Slovenian trails for the first time.',
  },
  {
    title: 'AI Assistant for Tour Prep',
    text: 'A planned assistant for organizing preparations, pre-hike questions, and better understanding of information.',
  },
];

const faqs = [
  {
    q: 'When will the app be available?',
    a: 'AlpAI is currently in active development. Sign up for the waitlist and we will notify you as soon as it launches.',
  },
  {
    q: 'Will it be available on iOS and Android?',
    a: 'Yes — AlpAI is being developed for both iOS and Android platforms simultaneously.',
  },
  {
    q: 'How much will AlpAI cost?',
    a: 'Pricing has not been finalized yet. Waitlist members will be among the first to hear about launch offers.',
  },
  {
    q: 'Is it only for Slovenian mountains?',
    a: 'The initial focus is on Slovenian mountains and trails, with plans to expand the Alpine region coverage over time.',
  },
  {
    q: 'Does the app work offline?',
    a: 'Offline functionality is planned for key features. Details will be available closer to launch.',
  },
];

export default function EnHomePage() {
  return (
    <>
      <section className="hero">
        <img src="/logo-alpai.png" alt="" className="hero-watermark" aria-hidden="true" />
        <MountainBackground />
        <div className="hero-copy">
          <p className="eyebrow">Mobile app for the mountains</p>
          <h1>AlpAI</h1>
          <p className="slogan">Your path to new horizons.</p>
          <p className="hero-text">
            AlpAI helps you plan mountain hikes, check conditions, and make safer decisions before
            heading into the mountains.
          </p>
          <div className="hero-chips" aria-label="Key benefits">
            <span>AI Prep</span>
            <span>Weather</span>
            <span>Safety</span>
          </div>
          <div className="hero-actions">
            <a className="button primary" href="#availability">
              Coming soon
            </a>
            <Link className="button secondary" href="/contact">
              Contact
            </Link>
          </div>
        </div>

        <div className="hero-visual" aria-label="AlpAI app preview">
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
                    <span className="phone-route-tag">Planned</span>
                  </div>
                </div>
                <div className="phone-stats-row">
                  <div className="phone-stat"><strong>8.2 km</strong><span>Distance</span></div>
                  <div className="phone-stat"><strong>1420 m</strong><span>Elevation</span></div>
                  <div className="phone-stat"><strong>5–6 h</strong><span>Duration</span></div>
                </div>
                <div className="phone-weather-card">
                  <span className="phone-weather-icon">⛅</span>
                  <div>
                    <strong>Partly cloudy</strong>
                    <span>Tomorrow 8°C · Wind 15 km/h</span>
                  </div>
                </div>
                <div className="phone-ai-card">
                  <span className="phone-ai-label">AI</span>
                  <p>Conditions are suitable. Bring warm layers and waterproofs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="availability" id="availability">
        <div className="availability-badge">
          <span className="status-dot" />
          <strong>Coming soon</strong>
        </div>
        <div className="availability-right">
          <p>Be among the first. Leave your email and we will notify you at launch.</p>
          <WaitlistForm lang="en" />
        </div>
      </section>

      <section className="section">
        <ScrollAnimate>
          <div className="section-heading">
            <p className="eyebrow">Features</p>
            <h2>Smarter mountain preparation, without unnecessary complexity.</h2>
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
            <p className="eyebrow">Trust & Safety</p>
            <h2>Technology as support, not a replacement for judgment.</h2>
          </div>
        </ScrollAnimate>
        <ScrollAnimate delay={100}>
          <p>
            AlpAI is designed as a reliable informational tool for better tour preparation. Final
            decisions in the mountains always remain the responsibility of the user.
          </p>
        </ScrollAnimate>
      </section>

      <section className="section faq-section">
        <ScrollAnimate>
          <div className="section-heading">
            <p className="eyebrow">FAQ</p>
            <h2>Frequently asked questions.</h2>
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

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Press',
  description: 'Press kit for AlpAI — logos, app description, and media contact.',
};

export default function EnPressPage() {
  return (
    <section className="content-page legal-page">
      <p className="eyebrow">AlpAI</p>
      <h1>Press</h1>
      <p>
        Here you will find essential materials for reporting on AlpAI. For additional information,
        interviews, or assets, contact us at{' '}
        <a href="mailto:info@ai-alp.com">info@ai-alp.com</a>.
      </p>

      <div className="legal-copy">
        <h2>About the app</h2>
        <p>
          AlpAI is a Slovenian mobile app for smarter mountain tour planning. It helps users plan
          routes, check weather conditions, follow safety guidelines, and prepare for visits to the
          mountains. The app is designed for both experienced hikers and foreign visitors exploring
          Slovenian trails.
        </p>

        <h2>Key facts</h2>
        <ul className="press-facts">
          <li><strong>Name:</strong> AlpAI</li>
          <li><strong>Platform:</strong> iOS and Android (in development)</li>
          <li><strong>Market:</strong> Slovenia, Alpine region</li>
          <li><strong>Languages:</strong> Slovenian, English</li>
          <li><strong>Website:</strong> ai-alp.com</li>
          <li><strong>Contact:</strong> info@ai-alp.com</li>
        </ul>

        <h2>Logo</h2>
        <p>
          The app logo is available for official media use. Please credit AlpAI when publishing
          and respect the brand's visual identity.
        </p>
        <div className="press-logo-preview">
          <img src="/alpai-logo.png" alt="AlpAI logo" className="press-logo-img" />
        </div>

        <h2>Media contact</h2>
        <p>
          For questions, interviews, or additional materials, write to{' '}
          <a href="mailto:info@ai-alp.com">info@ai-alp.com</a>.
        </p>
      </div>
    </section>
  );
}

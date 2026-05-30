import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Za medije',
  description: 'Press kit za aplikacijo AlpAI — logotipi, opis, kontakt za medije.',
};

export default function PressPage() {
  return (
    <section className="content-page legal-page">
      <p className="eyebrow">AlpAI</p>
      <h1>Za medije</h1>
      <p>
        Tukaj najdete osnovno gradivo za poročanje o aplikaciji AlpAI. Za dodatne informacije,
        intervjuje ali materiale nas kontaktirajte na{' '}
        <a href="mailto:info@ai-alp.com">info@ai-alp.com</a>.
      </p>

      <div className="legal-copy">
        <h2>O aplikaciji</h2>
        <p>
          AlpAI je slovenska mobilna aplikacija za pametnejšo pripravo na gorske ture. Pomaga pri
          načrtovanju poti, preverjanju vremenskih razmer, varnostnih napotkih in splošni pripravi
          na obisk gora. Aplikacija je namenjena tako izkušenim planincem kot tujim obiskovalcem
          slovenskih gora.
        </p>

        <h2>Ključna dejstva</h2>
        <ul className="press-facts">
          <li><strong>Ime:</strong> AlpAI</li>
          <li><strong>Platforma:</strong> iOS in Android (v razvoju)</li>
          <li><strong>Trg:</strong> Slovenija, alpski prostor</li>
          <li><strong>Jezik:</strong> Slovenščina, angleščina</li>
          <li><strong>Spletna stran:</strong> ai-alp.com</li>
          <li><strong>Kontakt:</strong> info@ai-alp.com</li>
        </ul>

        <h2>Logotip</h2>
        <p>
          Logotip aplikacije je na voljo za uradno medijsko rabo. Pri objavi prosimo za navedbo
          vira in spoštovanje vizualne identitete blagovne znamke.
        </p>
        <div className="press-logo-preview">
          <img src="/alpai-logo.png" alt="AlpAI logotip" className="press-logo-img" />
        </div>

        <h2>Kontakt za medije</h2>
        <p>
          Za vprašanja, intervjuje ali dodatno gradivo pišite na{' '}
          <a href="mailto:info@ai-alp.com">info@ai-alp.com</a>.
        </p>
      </div>
    </section>
  );
}

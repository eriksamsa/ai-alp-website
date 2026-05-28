import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pogoji uporabe',
  description: 'Osnovni pogoji uporabe in varnostno opozorilo za aplikacijo AI-ALP.',
};

export default function TermsPage() {
  return (
    <section className="content-page legal-page">
      <p className="eyebrow">AI-ALP</p>
      <h1>Pogoji uporabe</h1>
      <p className="updated">Zadnja posodobitev: maj 2026</p>

      <div className="legal-copy">
        <p>
          Ti pogoji uporabe so osnovna informativna različica za aplikacijo AI-ALP, ki je trenutno v
          razvoju. Pred javnim izidom se lahko pogoji posodobijo glede na dejanske funkcije
          aplikacije.
        </p>

        <h2>Namen aplikacije</h2>
        <p>
          AI-ALP je namenjen podpori pri načrtovanju gorskih tur, preverjanju razmer, razumevanju
          varnostnih informacij in pripravi na obisk gora.
        </p>

        <h2>Varnostno opozorilo</h2>
        <p className="warning-box">
          AI-ALP je informativni pripomoček in ne nadomešča lastne presoje, uradnih vremenskih
          opozoril, planinskih vodnikov, označb na terenu ali odločitev uporabnika v gorah.
        </p>

        <h2>Odgovornost uporabnika</h2>
        <p>
          Uporabnik sam odgovarja za svoje odločitve na turi, izbiro poti, opremo, spremljanje
          uradnih informacij, oceno vremena in razmer ter pravočasno prilagajanje načrta.
        </p>

        <h2>Dostopnost in spremembe</h2>
        <p>
          Aplikacija in njene funkcije se lahko spreminjajo. AI-ALP si pridržuje pravico do
          posodobitev vsebine, funkcij in pogojev uporabe pred javnim izidom.
        </p>

        <h2>Kontakt</h2>
        <p>
          Za vprašanja o pogojih uporabe pišite na{' '}
          <a href="mailto:info@ai-alp.com">info@ai-alp.com</a>.
        </p>
      </div>
    </section>
  );
}

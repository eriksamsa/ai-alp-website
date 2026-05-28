import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politika zasebnosti',
  description: 'Osnovna politika zasebnosti za aplikacijo AI-ALP na domeni ai-alp.com.',
};

export default function PrivacyPolicyPage() {
  return (
    <section className="content-page legal-page">
      <p className="eyebrow">AI-ALP</p>
      <h1>Politika zasebnosti</h1>
      <p className="updated">Zadnja posodobitev: maj 2026</p>

      <div className="legal-copy">
        <p>
          Ta politika zasebnosti opisuje osnovni pristop k zasebnosti za aplikacijo AI-ALP in
          spletno domeno <strong>ai-alp.com</strong>. Aplikacija je trenutno v razvoju.
        </p>

        <h2>Podatki</h2>
        <p>
          Ta dokument ne trdi, da aplikacija že zbira osebne podatke. Če bodo v prihodnosti uvedene
          funkcije, ki zahtevajo obdelavo podatkov, bo politika pred javnim izidom aplikacije
          posodobljena z jasnimi informacijami o vrstah podatkov, namenih obdelave in možnostih
          uporabnika.
        </p>

        <h2>Lokacija</h2>
        <p>
          Aplikacija lahko v prihodnje vključuje lokacijske funkcije za načrtovanje tur, prikaz
          položaja ali prilagoditev informacij uporabnikovi lokaciji. Takšne funkcije bodo opisane
          pred uvedbo in bodo odvisne od nastavitev ter dovoljenj uporabnika.
        </p>

        <h2>Analitika</h2>
        <p>
          V prihodnje se lahko uporabi omejena analitika za izboljšanje stabilnosti, uporabniške
          izkušnje in razumevanje uporabe aplikacije. Če bo analitika uvedena, bo politika
          posodobljena pred javnim izidom ali pred začetkom uporabe takšne funkcije.
        </p>

        <h2>Kontakt</h2>
        <p>
          Za vprašanja glede zasebnosti lahko pišete na{' '}
          <a href="mailto:info@ai-alp.com">info@ai-alp.com</a>.
        </p>

        <h2>Spremembe politike</h2>
        <p>
          Politika zasebnosti se lahko posodobi pred javnim izidom aplikacije ali ob uvedbi novih
          funkcij. Posodobljena različica bo objavljena na domeni ai-alp.com.
        </p>
      </div>
    </section>
  );
}

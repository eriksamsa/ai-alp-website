import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'O aplikaciji',
  description: 'AlpAI je osebni gorski asistent za varnejše, bolj premišljeno in odgovorno gibanje v gorah.',
};

export default function OAplikacijiPage() {
  return (
    <section className="content-page legal-page">
      <p className="eyebrow">AlpAI</p>
      <h1>O aplikaciji</h1>

      <div className="legal-copy">
        <p>
          AlpAI je osebni gorski asistent za varnejše, bolj premišljeno in odgovorno gibanje v gorah.
        </p>

        <p>
          Aplikacija ti pomaga pri pripravi na turo z jasnimi informacijami, praktičnimi nasveti in
          priporočili glede opreme, razmer, zahtevnosti poti, pravil in obnašanja v gorah. Namesto
          da ti pokaže samo, kam iti, ti pomaga razumeti, ali je izbrana tura primerna zate in kako
          se nanjo dobro pripraviti.
        </p>

        <p>
          Z AlpAI lahko preveriš, kaj vzeti s seboj, na kaj moraš biti pozoren, katera pravila
          veljajo v gorskem svetu in kako ravnati v različnih situacijah, kot so slabo vreme, megla,
          zahtevnejši teren, utrujenost ali nepredvidene razmere.
        </p>

        <p>
          Aplikacija je namenjena pohodnikom, planincem in vsem, ki želijo gore obiskovati z več
          znanja, spoštovanja in varnosti.
        </p>

        <p className="about-highlight">
          AlpAI ni samo aplikacija za poti. Je pameten spremljevalec, ki ti pomaga sprejemati
          boljše odločitve pred odhodom v gore.
        </p>
      </div>
    </section>
  );
}

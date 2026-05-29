import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pogoji uporabe',
  description: 'Pogoji uporabe aplikacije AlpAI — definicija storitve, odgovornost, licenca, Apple App Store in Google Play pogoji.',
};

export default function TermsPage() {
  return (
    <section className="content-page legal-page">
      <p className="eyebrow">AlpAI</p>
      <h1>Pogoji uporabe</h1>
      <p className="updated">Zadnja posodobitev: maj 2026</p>

      <div className="legal-copy">
        <p>
          Ti pogoji uporabe urejajo dostop do aplikacije AlpAI in spletne strani ai-alp.com
          (skupaj: <strong>»Storitev«</strong>). Z namestitvijo ali uporabo aplikacije sprejemate
          te pogoje v celoti. Če se z njimi ne strinjate, aplikacije ne namestite in je ne
          uporabljajte.
        </p>
        <p>
          Ponudnik storitve je: <strong>AlpAI</strong>, kontakt:{' '}
          <a href="mailto:info@ai-alp.com">info@ai-alp.com</a>.
        </p>

        <h2>1. Opis storitve</h2>
        <p>
          AlpAI je mobilna aplikacija, ki uporabniku pomaga pri načrtovanju gorskih tur,
          pregledovanju vremenskih informacij, varnostnih napotkih in splošni pripravi na obisk
          gora. Aplikacija je informativne narave in deluje kot podporno orodje — ne kot
          nadomestilo za strokovno presojo, vodenje ali uradne informacije.
        </p>

        <h2>2. Varnostno opozorilo</h2>
        <p className="warning-box">
          AlpAI je izključno informativni pripomoček. Ne nadomešča lastne presoje, uradnih
          vremenskih in lavinarskih opozoril (ARSO, LPS), planinskih vodnikov, oznak na terenu,
          reševalnih služb ali kakršnekoli strokovne pomoči. Vse odločitve v gorskem svetu
          ostanejo v izključni odgovornosti uporabnika.
        </p>

        <h2>3. Pogoji uporabe za posameznike</h2>
        <p>
          Storitev je namenjena osebni, nekomercialni uporabi. Uporabnik se zavezuje, da:
        </p>
        <ul className="press-facts">
          <li>ne bo zlorabil, reproduciral ali distribuiral vsebin brez soglasja,</li>
          <li>ne bo poskušal z obratnim inženiringom, vlomom ali onemogočanjem storitve,</li>
          <li>ne bo uporabljal storitve v protipravne namene,</li>
          <li>je star vsaj 13 let oziroma ima dovoljenje zakonitega skrbnika.</li>
        </ul>

        <h2>4. Intelektualna lastnina</h2>
        <p>
          Vsa vsebina, oblikovanje, logotipi in programska koda so last AlpAI ali njenih
          licencedajalcev. S pogoji uporabe se vam podeli omejena, neprenosljiva, neizključna
          licenca za osebno uporabo aplikacije. Nobena pravica se ne prenaša na vas drugače kot
          izrecno navedeno v teh pogojih.
        </p>

        <h2>5. Omejitev odgovornosti</h2>
        <p>
          AlpAI zagotavlja storitev takšno, »kot je« (<em>as is</em>), brez kakršnih koli izrecnih
          ali implicitnih jamstev glede točnosti, zanesljivosti ali primernosti za določen namen.
          AlpAI ne prevzema odgovornosti za:
        </p>
        <ul className="press-facts">
          <li>netočne, zastarele ali nepopolne informacije v aplikaciji,</li>
          <li>odločitve, ki jih je uporabnik sprejel na podlagi vsebine aplikacije,</li>
          <li>poškodbe, nesreče ali materialno škodo nastalo med ali po gorski turi,</li>
          <li>prekinitve delovanja ali tehnične napake storitve.</li>
        </ul>
        <p>
          V obsegu, ki ga dopušča veljavno pravo, skupna odgovornost AlpAI ne presega zneska, ki
          ga je uporabnik plačal za storitev v zadnjih 12 mesecih.
        </p>

        <h2>6. Zasebnost</h2>
        <p>
          Obdelava osebnih podatkov je opisana v naši{' '}
          <a href="/privacy-policy">Politiki zasebnosti</a>. Z uporabo storitve potrjujete, da
          ste politiko prebrali in jo sprejemate.
        </p>

        <h2>7. Nakupi in naročnine</h2>
        <p>
          Če aplikacija v prihodnje ponuja plačljive funkcije ali naročnine, veljajo dodatni
          pogoji nakupa, ki bodo jasno prikazani pred vsako transakcijo. Vračila se obravnavajo
          v skladu s pravili platforme (Apple App Store oz. Google Play) in veljavno zakonodajo.
        </p>

        <h2>8. Pogoji tretjih platform (Apple in Google)</h2>
        <p>
          Aplikacija je distribuirana prek Apple App Store in Google Play. Za nakupe in prenose
          veljajo tudi pogoji teh platform:
        </p>
        <ul className="press-facts">
          <li>
            <a href="https://www.apple.com/legal/internet-services/itunes/us/terms.html" target="_blank" rel="noopener noreferrer">
              Apple Media Services Terms and Conditions
            </a>
          </li>
          <li>
            <a href="https://play.google.com/intl/en_us/about/play-terms/" target="_blank" rel="noopener noreferrer">
              Google Play Terms of Service
            </a>
          </li>
        </ul>
        <p>
          Apple in Google nista stranki teh pogojev in ne nosita odgovornosti za aplikacijo ali
          njeno vsebino. V primeru spora v zvezi z aplikacijo je Apple/Google tretja stranka
          brez obveznosti.
        </p>

        <h2>9. Spremembe pogojev</h2>
        <p>
          AlpAI si pridržuje pravico do spremembe teh pogojev kadarkoli. O bistvenih spremembah
          vas bomo obvestili prek aplikacije ali emaila. Nadaljnja uporaba storitve po objavi
          sprememb pomeni sprejetje novih pogojev.
        </p>

        <h2>10. Veljavno pravo in reševanje sporov</h2>
        <p>
          Ti pogoji se urejajo po pravu Republike Slovenije. Za reševanje morebitnih sporov je
          pristojno sodišče v Republiki Sloveniji. Kot potrošnik v EU imate pravico do
          alternativnega reševanja sporov prek platforme{' '}
          <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
            EU ODR
          </a>
          .
        </p>

        <h2>11. Kontakt</h2>
        <p>
          Za vprašanja o pogojih uporabe pišite na{' '}
          <a href="mailto:info@ai-alp.com">info@ai-alp.com</a>.
        </p>
      </div>
    </section>
  );
}

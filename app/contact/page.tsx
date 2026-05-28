import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Kontakt za aplikacijo AI-ALP, ki je trenutno v razvoju.',
};

export default function ContactPage() {
  return (
    <section className="content-page contact-page">
      <p className="eyebrow">Kontakt</p>
      <h1>AI-ALP je trenutno v razvoju.</h1>
      <p>
        Za vprašanja, sodelovanje ali dodatne informacije lahko uporabite začasni kontaktni email.
      </p>
      <a className="contact-link" href="mailto:info@ai-alp.com">
        info@ai-alp.com
      </a>
    </section>
  );
}

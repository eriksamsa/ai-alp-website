import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stran ni najdena',
};

export default function NotFound() {
  return (
    <section className="not-found">
      <p className="eyebrow">404</p>
      <h1>Stran ni najdena.</h1>
      <p>Ta stran ne obstaja ali je bila premaknjena.</p>
      <Link href="/" className="button primary not-found-btn">
        Nazaj na začetek
      </Link>
    </section>
  );
}

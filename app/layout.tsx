import type { Metadata, Viewport } from 'next';
import Link from 'next/link';
import './globals.css';

const siteUrl = 'https://ai-alp.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'AlpAI | Pametnejše načrtovanje gorskih tur',
    template: '%s | AlpAI',
  },
  description:
    'AlpAI je mobilna aplikacija za načrtovanje gorskih tur, vreme, varnostne napotke in informacije za obiskovalce gora.',
  applicationName: 'AlpAI',
  alternates: {
    canonical: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AlpAI | Pametnejše načrtovanje gorskih tur',
    description:
      'AlpAI je mobilna aplikacija za načrtovanje gorskih tur, vreme, varnostne napotke in informacije za obiskovalce gora.',
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }, { url: '/alpai-logo.png' }],
    apple: '/alpai-logo.png',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'AlpAI',
    title: 'AlpAI | Pametnejše načrtovanje gorskih tur',
    description:
      'AlpAI je mobilna aplikacija za načrtovanje gorskih tur, vreme, varnostne napotke in informacije za obiskovalce gora.',
    images: [{ url: `${siteUrl}/opengraph-image`, width: 1200, height: 630 }],
  },
};

export const viewport: Viewport = {
  themeColor: '#0b1f36',
  width: 'device-width',
  initialScale: 1,
};

const navItems = [
  { href: '/', label: 'Domov' },
  { href: '/privacy-policy', label: 'Zasebnost' },
  { href: '/terms', label: 'Pogoji' },
  { href: '/contact', label: 'Kontakt' },
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sl">
      <body>
        <header className="site-header">
          <Link className="brand" href="/">
            <img className="brand-icon" src="/alpai-logo.png" alt="" aria-hidden="true" />
            <span>AlpAI</span>
          </Link>

          <nav className="site-nav" aria-label="Glavna navigacija">
            {navItems.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          <div>
            <strong>AlpAI</strong>
            <p>Tvoja pot do novih razgledov.</p>
          </div>
          <nav aria-label="Povezave v nogi">
            {navItems.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </footer>
      </body>
    </html>
  );
}

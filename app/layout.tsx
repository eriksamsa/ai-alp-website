import type { Metadata, Viewport } from 'next';
import Link from 'next/link';
import './globals.css';

const siteUrl = 'https://ai-alp.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'AI-ALP | Pametnejše načrtovanje gorskih tur',
    template: '%s | AI-ALP',
  },
  description:
    'AI-ALP je mobilna aplikacija za načrtovanje gorskih tur, vreme, varnostne napotke in informacije za obiskovalce gora.',
  applicationName: 'AI-ALP',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'AI-ALP',
    title: 'AI-ALP | Pametnejše načrtovanje gorskih tur',
    description:
      'AI-ALP je mobilna aplikacija za načrtovanje gorskih tur, vreme, varnostne napotke in informacije za obiskovalce gora.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-ALP | Pametnejše načrtovanje gorskih tur',
    description:
      'AI-ALP je mobilna aplikacija za načrtovanje gorskih tur, vreme, varnostne napotke in informacije za obiskovalce gora.',
  },
  icons: {
    icon: '/favicon.svg',
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
            <span className="brand-mark" aria-hidden="true">
              AI
            </span>
            <span>AI-ALP</span>
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
            <strong>AI-ALP</strong>
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

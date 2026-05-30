import type { Metadata, Viewport } from 'next';
import Link from 'next/link';
import LanguageSwitcher from '../LanguageSwitcher';
import '../globals.css';

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
  alternates: { canonical: '/' },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }, { url: '/logo-alpai.png' }],
    apple: '/logo-alpai.png',
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
  twitter: {
    card: 'summary_large_image',
    title: 'AlpAI | Pametnejše načrtovanje gorskih tur',
    description:
      'AlpAI je mobilna aplikacija za načrtovanje gorskih tur, vreme, varnostne napotke in informacije za obiskovalce gora.',
  },
};

export const viewport: Viewport = {
  themeColor: '#0b1f36',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

const navItems = [
  { href: '/', label: 'Domov' },
  { href: '/#features', label: 'O aplikaciji' },
  { href: '/privacy-policy', label: 'Zasebnost' },
  { href: '/terms', label: 'Pogoji' },
  { href: '/contact', label: 'Kontakt' },
];

const socialLinks = [
  { href: 'https://instagram.com/alpai.app', label: 'Instagram', icon: 'IG' },
  { href: 'https://tiktok.com/@alpai.app', label: 'TikTok', icon: 'TT' },
];

export default function SlLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sl">
      <body>
        <header className="site-header">
          <Link className="brand" href="/">
            <img src="/logo-alpai.png" alt="alpAI" className="header-logo" />
          </Link>
          <nav className="site-nav" aria-label="Glavna navigacija">
            {navItems.map((item) => (
              <Link href={item.href} key={item.href}>{item.label}</Link>
            ))}
            <LanguageSwitcher />
            <a href="#waitlist" className="nav-cta">Preizkusi aplikacijo →</a>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          <div className="footer-brand">
            <strong>AlpAI</strong>
            <p>Tvoja pot do novih razgledov.</p>
            <div className="footer-social">
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  aria-label={s.label} className="social-btn">{s.icon}</a>
              ))}
            </div>
          </div>
          <nav aria-label="Povezave v nogi" className="footer-nav">
            {navItems.map((item) => (
              <Link href={item.href} key={item.href}>{item.label}</Link>
            ))}
            <Link href="/press">Za medije</Link>
          </nav>
        </footer>
      </body>
    </html>
  );
}

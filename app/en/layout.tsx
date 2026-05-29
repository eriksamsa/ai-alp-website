import type { Metadata, Viewport } from 'next';
import Link from 'next/link';
import LanguageSwitcher from '../LanguageSwitcher';
import '../globals.css';

const siteUrl = 'https://ai-alp.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'AlpAI | Smarter Mountain Tour Planning',
    template: '%s | AlpAI',
  },
  description:
    'AlpAI is a mobile app for planning mountain hikes, checking conditions, and making safer decisions before heading into the mountains.',
  applicationName: 'AlpAI',
  alternates: { canonical: '/en' },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }, { url: '/alpai-logo.png' }],
    apple: '/alpai-logo.png',
  },
  openGraph: {
    type: 'website',
    url: `${siteUrl}/en`,
    siteName: 'AlpAI',
    title: 'AlpAI | Smarter Mountain Tour Planning',
    description:
      'AlpAI is a mobile app for planning mountain hikes, checking conditions, and making safer decisions before heading into the mountains.',
    images: [{ url: `${siteUrl}/opengraph-image`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AlpAI | Smarter Mountain Tour Planning',
    description:
      'AlpAI is a mobile app for planning mountain hikes, checking conditions, and making safer decisions before heading into the mountains.',
  },
};

export const viewport: Viewport = {
  themeColor: '#0b1f36',
  width: 'device-width',
  initialScale: 1,
};

const navItems = [
  { href: '/en', label: 'Home' },
  { href: '/privacy-policy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
  { href: '/contact', label: 'Contact' },
];

const socialLinks = [
  { href: 'https://instagram.com/alpai.app', label: 'Instagram', icon: 'IG' },
  { href: 'https://tiktok.com/@alpai.app', label: 'TikTok', icon: 'TT' },
];

export default function EnLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <Link className="brand" href="/en">
            <img className="brand-icon" src="/alpai-logo.png" alt="" aria-hidden="true" />
            <span>AlpAI</span>
          </Link>
          <nav className="site-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
            <LanguageSwitcher />
          </nav>
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          <div className="footer-brand">
            <strong>AlpAI</strong>
            <p>Your path to new horizons.</p>
            <div className="footer-social">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="social-btn"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
          <nav aria-label="Footer links" className="footer-nav">
            {navItems.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href="/press">Press</Link>
          </nav>
        </footer>
      </body>
    </html>
  );
}

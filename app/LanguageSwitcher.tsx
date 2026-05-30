'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
  const path = usePathname();
  const isEn = path.startsWith('/en');

  return (
    <div className="lang-switcher" aria-label="Izbira jezika / Language">
      {isEn ? (
        <Link href="/" className="lang-btn">SL</Link>
      ) : (
        <Link href="/en" className="lang-btn">EN</Link>
      )}
    </div>
  );
}

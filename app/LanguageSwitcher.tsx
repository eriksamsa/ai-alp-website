'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
  const path = usePathname();
  const isEn = path.startsWith('/en');

  const slHref = isEn ? path.replace(/^\/en/, '') || '/' : path;
  const enHref = isEn ? path : `/en${path === '/' ? '' : path}`;

  return (
    <div className="lang-switcher" aria-label="Izbira jezika">
      {isEn ? (
        <Link href={slHref} className="lang-btn">SL</Link>
      ) : (
        <Link href={enHref} className="lang-btn">EN</Link>
      )}
    </div>
  );
}

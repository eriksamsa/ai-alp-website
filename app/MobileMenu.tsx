'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';

interface NavItem {
  href: string;
  label: string;
}

interface Props {
  navItems: NavItem[];
  ctaLabel?: string;
  ctaHref?: string;
  openLabel?: string;
  closeLabel?: string;
}

export default function MobileMenu({
  navItems,
  ctaLabel,
  ctaHref = '#waitlist',
  openLabel = 'Odpri meni',
  closeLabel = 'Zapri meni',
}: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <button
        className={`hamburger${open ? ' hamburger--open' : ''}`}
        aria-label={open ? closeLabel : openLabel}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`mobile-nav${open ? ' mobile-nav--open' : ''}`} aria-hidden={!open}>
        {navItems.map((item) => (
          <Link href={item.href} key={item.href} onClick={close}>
            {item.label}
          </Link>
        ))}
        <LanguageSwitcher />
        {ctaLabel && (
          <a href={ctaHref} className="mobile-nav-cta" onClick={close}>
            {ctaLabel}
          </a>
        )}
      </div>
    </>
  );
}

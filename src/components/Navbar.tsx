'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/team', label: 'Team' },
  ];

  return (
    <>
      <nav
        id="mainNav"
        style={{
          background: scrolled ? 'rgba(245,244,238,.97)' : 'rgba(245,244,238,.85)',
        }}
      >
        <Link href="/" className="nav-logo">
          <div className="nav-logo-mark">E</div>
          <div>
            <div className="nav-logo-text">EmtooFi</div>
            <div className="nav-logo-sub">Technologies Ltd</div>
          </div>
        </Link>
        <div className="nav-links">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              data-page={link.label.toLowerCase()}
              className={pathname === link.href ? 'active' : ''}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className={`nav-cta${pathname === '/contact' ? ' active' : ''}`}>
            Contact us
          </Link>
        </div>
        <button
          className={`mobile-menu-btn${mobileOpen ? ' open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
      <div className={`mobile-nav-overlay${mobileOpen ? ' open' : ''}`}>
        {links.map(link => (
          <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
            {link.label}
          </Link>
        ))}
        <Link href="/contact" className="btn-green" onClick={() => setMobileOpen(false)}>
          Contact us
        </Link>
      </div>
    </>
  );
}

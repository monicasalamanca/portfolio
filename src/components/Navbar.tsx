'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './theme-toggle';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-bg border-border sticky top-0 z-50 w-full border-b">
      <div className="mx-auto w-full px-6">
        <nav className="flex h-14 items-center justify-between">
          {/* Left: Site Name */}
          <Link
            href="/"
            className="text-fg hover:text-primary text-lg font-semibold transition-colors"
          >
            Monica Salamanca
          </Link>

          {/* Right: Desktop Navigation + Theme Toggle */}
          <div className="flex items-center gap-6">
            {/* Desktop Navigation Links - Show on screens >= 768px */}
            <ul className="hidden items-center gap-6 md:flex">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`hover:text-primary text-sm transition-colors ${
                      pathname === link.href ? 'text-primary font-medium' : 'text-muted'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Theme Toggle (Always Visible) */}
            <ThemeToggle />

            {/* Mobile: Burger Menu Button - Show on screens < 768px */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-fg hover:bg-surface-2 block rounded-md p-2 transition-colors md:hidden"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <div className="relative h-5 w-5">
                <span
                  className={`bg-fg absolute left-0 h-0.5 w-5 transition-all duration-300 ${
                    isMenuOpen ? 'top-2 rotate-45' : 'top-0'
                  }`}
                />
                <span
                  className={`bg-fg absolute top-2 left-0 h-0.5 w-5 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`bg-fg absolute left-0 h-0.5 w-5 transition-all duration-300 ${
                    isMenuOpen ? 'top-2 -rotate-45' : 'top-4'
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="bg-bg/80 fixed inset-0 top-14 z-40 backdrop-blur-sm md:hidden"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-in Menu */}
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            className="bg-bg border-border fixed top-14 right-0 z-50 h-[calc(100vh-3.5rem)] w-64 border-l shadow-lg md:hidden"
          >
            <ul className="flex flex-col gap-2 p-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`hover:bg-surface-2 block rounded-md px-4 py-3 text-sm transition-colors ${
                      pathname === link.href ? 'bg-surface text-primary font-medium' : 'text-fg'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </header>
  );
}

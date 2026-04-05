'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ExternalLink } from 'lucide-react';
import OpenStatusBadge from '@/components/ui/OpenStatusBadge';

const TOAST_URL = 'https://order.toasttab.com/online/thirdproofpizzeria';

const navLinks = [
  { href: '/menu', label: 'Menu' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? 'rgba(250, 247, 242, 0.97)' : 'rgba(250, 247, 242, 0.85)',
          backdropFilter: 'blur(12px)',
          borderBottom: scrolled ? '1px solid var(--color-brand-border)' : '1px solid transparent',
          boxShadow: scrolled ? '0 2px 12px rgba(26,18,9,0.08)' : 'none',
        }}
      >
        <div
          className="container-max"
          style={{ padding: '0 1.25rem' }}
        >
          <nav
            className="flex items-center justify-between"
            style={{ height: '72px' }}
            aria-label="Main navigation"
          >
            {/* Logo / Wordmark */}
            <Link href="/" className="flex items-center gap-3 group" aria-label="Third Proof Pizzeria home">
              {/* Logo image — replace with actual logo when provided */}
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-brand-blue)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'transform 200ms ease',
                }}
                className="group-hover:scale-105"
              >
                {/* 📸 LOGO: Replace this div with <Image src="/images/logo/logo.png" alt="Third Proof Pizzeria" width={40} height={40} className="rounded-full" /> */}
                <span style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', fontFamily: 'var(--font-playfair)' }}>TP</span>
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontWeight: 700,
                  fontSize: '1.125rem',
                  color: 'var(--color-brand-text)',
                  lineHeight: 1.2,
                  letterSpacing: '-0.01em',
                  transition: 'color 150ms ease',
                }}
                className="group-hover:text-[color:var(--color-brand-blue)]"
              >
                Third Proof<br />
                <span style={{ fontWeight: 400, fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-brand-muted)' }}>
                  Pizzeria
                </span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="nav-link">
                  {link.label}
                </Link>
              ))}
              <OpenStatusBadge />
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <a
                href={TOAST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ padding: '0.5625rem 1.25rem', fontSize: '0.875rem' }}
              >
                Order Online
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden"
              aria-label="Open menu"
              style={{
                padding: '0.5rem',
                borderRadius: '0.375rem',
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                color: 'var(--color-brand-text)',
              }}
            >
              <Menu size={24} />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 60,
                backgroundColor: 'rgba(26,18,9,0.5)',
              }}
            />
            <motion.div
              key="panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 380, damping: 40 }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                width: 'min(320px, 85vw)',
                zIndex: 70,
                backgroundColor: 'var(--color-brand-cream)',
                display: 'flex',
                flexDirection: 'column',
                padding: '1.5rem',
                boxShadow: '-8px 0 32px rgba(26,18,9,0.15)',
              }}
            >
              {/* Close */}
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  style={{
                    padding: '0.5rem',
                    borderRadius: '0.375rem',
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                    color: 'var(--color-brand-text)',
                  }}
                >
                  <X size={24} />
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        color: 'var(--color-brand-text)',
                        textDecoration: 'none',
                        padding: '0.5rem 0',
                        borderBottom: '1px solid var(--color-brand-border)',
                        transition: 'color 150ms ease',
                      }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-6">
                <OpenStatusBadge />
              </div>

              {/* CTA */}
              <div className="mt-auto pt-8">
                <a
                  href={TOAST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                  onClick={() => setMobileOpen(false)}
                >
                  Order Online
                  <ExternalLink size={14} />
                </a>
                <p
                  style={{
                    marginTop: '1rem',
                    fontSize: '0.8125rem',
                    color: 'var(--color-brand-muted)',
                    textAlign: 'center',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  263 Changebridge Rd., Pine Brook, NJ<br />
                  <a href="tel:+19732877220" style={{ color: 'var(--color-brand-blue)', textDecoration: 'none' }}>
                    (973) 287-7220
                  </a>
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

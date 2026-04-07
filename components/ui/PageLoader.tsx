'use client';

import { useEffect, useState } from 'react';

type Phase = 'visible' | 'fading' | 'gone';

export default function PageLoader() {
  const [phase, setPhase] = useState<Phase>('visible');

  useEffect(() => {
    const fadeTimer = setTimeout(() => setPhase('fading'), 700);
    const goneTimer = setTimeout(() => setPhase('gone'), 1200);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(goneTimer);
    };
  }, []);

  if (phase === 'gone') return null;

  return (
    <div
      aria-hidden
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: 'var(--color-brand-cream)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.5rem',
        pointerEvents: 'none',
        opacity: phase === 'fading' ? 0 : 1,
        transform: phase === 'fading' ? 'translateY(-10px)' : 'translateY(0)',
        transition: 'opacity 500ms ease, transform 500ms ease',
      }}
    >
      <p
        style={{
          fontFamily: 'var(--font-accent)',
          fontSize: 'clamp(1.5rem, 5vw, 2.25rem)',
          color: 'var(--color-brand-blue)',
          margin: 0,
          lineHeight: 1.2,
          textAlign: 'center',
        }}
      >
        Third Proof Pizzeria
      </p>
      <div
        style={{
          width: '48px',
          height: '3px',
          borderRadius: '2px',
          backgroundColor: 'var(--color-brand-blue)',
          transformOrigin: 'center',
          animation: 'loader-grow 1s ease-in-out infinite',
        }}
      />
    </div>
  );
}

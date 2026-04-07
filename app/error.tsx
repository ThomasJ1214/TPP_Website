'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      style={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1.25rem',
        textAlign: 'center',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-accent)',
          fontSize: '1.125rem',
          color: 'var(--color-brand-blue)',
          display: 'block',
          marginBottom: '0.75rem',
        }}
      >
        Something went wrong
      </span>
      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.5rem, 4vw, 2rem)',
          fontWeight: 700,
          color: 'var(--color-brand-text)',
          marginBottom: '0.75rem',
          lineHeight: 1.2,
        }}
      >
        Oops, we hit a snag.
      </h1>
      <p
        style={{
          fontSize: '1rem',
          color: 'var(--color-brand-muted)',
          maxWidth: '380px',
          lineHeight: 1.6,
          marginBottom: '2rem',
        }}
      >
        Something unexpected happened on our end. Try refreshing the page or head back home.
      </p>
      <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <button onClick={reset} className="btn-primary">
          Try again
        </button>
        <Link href="/" className="btn-outline">
          Go home
        </Link>
      </div>
    </div>
  );
}

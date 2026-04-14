import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found',
};

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: 'calc(100vh - 72px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--color-brand-cream)',
        padding: '2rem 1.25rem',
        textAlign: 'center',
      }}
    >
      {/* TP mark */}
      <div
        style={{
          width: '72px',
          height: '72px',
          borderRadius: '50%',
          backgroundColor: 'var(--color-brand-blue)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.75rem',
        }}
      >
        <span
          style={{
            color: '#fff',
            fontWeight: 700,
            fontSize: '1.375rem',
            fontFamily: 'var(--font-display)',
          }}
        >
          TP
        </span>
      </div>

      <span className="section-label" style={{ marginBottom: '0.75rem' }}>
        404
      </span>

      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 'clamp(1.75rem, 5vw, 2.75rem)',
          color: 'var(--color-brand-text)',
          lineHeight: 1.15,
          marginBottom: '0.875rem',
        }}
      >
        This page got burned.
      </h1>

      <p
        style={{
          fontSize: '1rem',
          color: 'var(--color-brand-muted)',
          maxWidth: '360px',
          lineHeight: 1.65,
          marginBottom: '2.25rem',
        }}
      >
        Looks like that page doesn&apos;t exist. The pizza&apos;s still fresh though — head back home and find what you&apos;re looking for.
      </p>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link href="/" className="btn-primary">
          Back to Home
        </Link>
        <Link href="/menu" className="btn-outline">
          View Menu
        </Link>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { Loader2, ExternalLink } from 'lucide-react';

interface Props {
  url: string;
}

export default function ToastEmbed({ url }: Props) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div style={{ position: 'relative', width: '100%', height: 'calc(100vh - 160px)', minHeight: '600px' }}>
      {/* Loading spinner */}
      {!loaded && !failed && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            backgroundColor: 'var(--color-brand-cream)',
            zIndex: 1,
          }}
        >
          <Loader2 size={32} className="animate-spin" style={{ color: 'var(--color-brand-blue)' }} />
          <p style={{ fontSize: '0.9375rem', color: 'var(--color-brand-muted)' }}>Loading menu…</p>
        </div>
      )}

      {/* Fallback if iframe blocked */}
      {failed && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            backgroundColor: 'var(--color-brand-cream)',
            padding: '2rem',
            textAlign: 'center',
          }}
        >
          <p style={{ fontSize: '1rem', color: 'var(--color-brand-text)' }}>
            The menu is available on our online ordering page.
          </p>
          <a href={url} target="_blank" rel="noopener noreferrer" className="btn-primary">
            View Menu &amp; Order on Toast
            <ExternalLink size={15} />
          </a>
        </div>
      )}

      <iframe
        src={url}
        title="Third Proof Pizzeria Menu and Online Ordering"
        width="100%"
        height="100%"
        style={{
          border: 'none',
          display: failed ? 'none' : 'block',
        }}
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
        allow="payment"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation"
      />
    </div>
  );
}

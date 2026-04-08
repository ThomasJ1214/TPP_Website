'use client';

import { useState } from 'react';
import { Loader2, ExternalLink } from 'lucide-react';

interface Props {
  url: string;
}

export default function ToastEmbed({ url }: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div>
      <div style={{ position: 'relative', width: '100%', height: 'calc(100vh - 160px)', minHeight: '600px' }}>
        {/* Loading spinner — shown until iframe fires onLoad */}
        {!loaded && (
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

        <iframe
          src={url}
          title="Third Proof Pizzeria Menu and Online Ordering"
          width="100%"
          height="100%"
          style={{ border: 'none', display: 'block' }}
          onLoad={() => setLoaded(true)}
          allow="payment"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation"
        />
      </div>

      {/* Always-visible fallback for blocked embeds */}
      <div
        style={{
          padding: '0.875rem 1.25rem',
          textAlign: 'center',
          borderTop: '1px solid var(--color-brand-border)',
          backgroundColor: 'var(--color-brand-cream)',
        }}
      >
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: '0.875rem',
            color: 'var(--color-brand-muted)',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.375rem',
          }}
        >
          Not loading? Click here to open in a new tab
          <ExternalLink size={13} />
        </a>
      </div>
    </div>
  );
}

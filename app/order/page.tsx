import type { Metadata } from 'next';
import { ExternalLink, Phone } from 'lucide-react';
import ToastEmbed from '@/components/ui/ToastEmbed';

export const metadata: Metadata = {
  title: 'Order Online',
  description:
    'Order Third Proof Pizzeria online for pickup via Toast. New Haven-style sourdough pizza in Pine Brook, NJ. Open Wed–Sat, 11 AM–8 PM.',
  alternates: { canonical: '/order' },
};

const TOAST_URL = 'https://order.toasttab.com/online/thirdproofpizzeria';

export default function OrderPage() {
  return (
    <div>
      {/* Hero strip */}
      <div
        style={{
          backgroundColor: 'var(--color-brand-blue)',
          color: '#ffffff',
          padding: '2.5rem 1.25rem 2rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div aria-hidden style={{ position: 'absolute', top: '-60px', right: '-60px', width: '240px', height: '240px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.05)' }} />
        <div aria-hidden style={{ position: 'absolute', bottom: '-80px', left: '5%', width: '200px', height: '200px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.04)' }} />
        <span
          style={{
            fontFamily: 'var(--font-accent)',
            fontSize: '1.0625rem',
            color: 'var(--color-brand-blue-light)',
            display: 'block',
            marginBottom: '0.375rem',
          }}
        >
          Skip the wait
        </span>
        <h1
          className="section-title-white"
          style={{ marginBottom: '0.75rem' }}
        >
          Order Online
        </h1>
        <p
          style={{
            fontSize: '1rem',
            color: 'rgba(255,255,255,0.78)',
            maxWidth: '440px',
            margin: '0 auto 1.5rem',
            lineHeight: 1.6,
          }}
        >
          Secure your pie before you arrive — especially on busy Friday evenings.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', alignItems: 'center' }}>
          <a
            href={TOAST_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.75rem',
              backgroundColor: '#ffffff',
              color: 'var(--color-brand-blue)',
              fontWeight: 700,
              fontSize: '0.9375rem',
              fontFamily: 'var(--font-body)',
              borderRadius: '0.5rem',
              textDecoration: 'none',
            }}
          >
            Open in new tab
            <ExternalLink size={14} />
          </a>
          <a href="tel:+19732877220" className="btn-outline-white" style={{ padding: '0.75rem 1.5rem', fontSize: '0.9375rem' }}>
            <Phone size={14} />
            (973) 287-7220
          </a>
        </div>
      </div>

      {/* Toast iframe embed */}
      <ToastEmbed url={TOAST_URL} />
    </div>
  );
}

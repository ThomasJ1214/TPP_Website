import type { Metadata } from 'next';
import { ExternalLink, Phone, Clock, MapPin } from 'lucide-react';
import Link from 'next/link';
import { SITE } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Order Online',
  description:
    'Order Third Proof Pizzeria online for pickup via Toast. New Haven-style sourdough pizza in Pine Brook, NJ. Open Wed–Sat, 11 AM–8 PM.',
  alternates: { canonical: '/order' },
};

export default function OrderPage() {
  return (
    <div style={{ backgroundColor: 'var(--color-brand-cream)', minHeight: '80vh' }}>

      {/* Hero */}
      <div
        style={{
          backgroundColor: 'var(--color-brand-blue)',
          color: '#ffffff',
          padding: '4rem 1.25rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div aria-hidden style={{ position: 'absolute', top: '-60px', right: '-60px', width: '280px', height: '280px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.05)' }} />
        <div aria-hidden style={{ position: 'absolute', bottom: '-80px', left: '5%', width: '220px', height: '220px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.04)' }} />

        <span
          style={{
            fontFamily: 'var(--font-accent)',
            fontSize: '1.125rem',
            color: 'var(--color-brand-blue-light)',
            display: 'block',
            marginBottom: '0.5rem',
          }}
        >
          Skip the wait
        </span>
        <h1 className="section-title-white" style={{ marginBottom: '1rem' }}>
          Order Online
        </h1>
        <p
          style={{
            fontSize: '1.0625rem',
            color: 'rgba(255,255,255,0.8)',
            maxWidth: '460px',
            margin: '0 auto 2rem',
            lineHeight: 1.65,
          }}
        >
          Order ahead through Toast. Friday evenings can get busy, so placing your order online means your pie is ready when you walk in.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href={SITE.ordering.toastUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '1rem 2.25rem',
              backgroundColor: '#ffffff',
              color: 'var(--color-brand-blue)',
              fontWeight: 700,
              fontSize: '1rem',
              fontFamily: 'var(--font-body)',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
            }}
          >
            Start Your Order
            <ExternalLink size={16} />
          </a>
          <a href={SITE.phone.href} className="btn-outline-white">
            <Phone size={15} />
            {SITE.phone.display}
          </a>
        </div>
      </div>

      {/* Info cards */}
      <div
        style={{
          maxWidth: '56rem',
          margin: '0 auto',
          padding: '3.5rem 1.25rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.25rem',
        }}
      >
        {[
          {
            Icon: ExternalLink,
            title: 'Powered by Toast',
            body: 'Our ordering runs on Toast. Browse the menu, pick your pies, and set a pickup time in just a few taps.',
          },
          {
            Icon: Clock,
            title: `Open ${SITE.hours.days.split(' – ')[0]}–${SITE.hours.days.split(' – ')[1]}`,
            body: `We're open ${SITE.hours.days}, ${SITE.hours.time} ET. Place your order any time we're open.`,
          },
          {
            Icon: MapPin,
            title: 'Pickup only',
            body: `We're at ${SITE.address.oneLine}. Plenty of parking. Come in, grab your order, and enjoy.`,
          },
        ].map(({ Icon, title, body }) => (
          <div key={title} className="card" style={{ padding: '1.5rem' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                backgroundColor: 'var(--color-brand-blue-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
              }}
            >
              <Icon size={18} style={{ color: 'var(--color-brand-blue)' }} />
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1rem',
                color: 'var(--color-brand-text)',
                marginBottom: '0.4rem',
              }}
            >
              {title}
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-brand-muted)', lineHeight: 1.6, margin: 0 }}>
              {body}
            </p>
          </div>
        ))}
      </div>

      {/* Browse menu nudge */}
      <div style={{ textAlign: 'center', paddingBottom: '3.5rem' }}>
        <p style={{ fontSize: '0.9375rem', color: 'var(--color-brand-muted)', marginBottom: '0.875rem' }}>
          Not sure what to get?
        </p>
        <Link href="/menu" className="btn-outline">
          Browse the Menu
        </Link>
      </div>

    </div>
  );
}

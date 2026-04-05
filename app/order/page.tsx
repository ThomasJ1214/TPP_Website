import type { Metadata } from 'next';
import { ExternalLink, Clock, Phone } from 'lucide-react';

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
          padding: '3rem 1.25rem',
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
            marginBottom: '0.5rem',
          }}
        >
          Skip the wait
        </span>
        <h1
          className="section-title-white"
          style={{ marginBottom: '0.875rem' }}
        >
          Order Online
        </h1>
        <p
          style={{
            fontSize: '1.0625rem',
            color: 'rgba(255,255,255,0.78)',
            maxWidth: '440px',
            margin: '0 auto 1.75rem',
            lineHeight: 1.6,
          }}
        >
          Secure your pie before you arrive — especially on busy Friday evenings when wait times can hit an hour.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
          <a
            href={TOAST_URL}
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
            }}
          >
            Start Your Order
            <ExternalLink size={16} />
          </a>
          <a
            href="tel:+19732877220"
            className="btn-outline-white"
          >
            <Phone size={15} />
            Call (973) 287-7220
          </a>
        </div>
      </div>

      {/* Info cards */}
      <div
        style={{
          maxWidth: '72rem',
          margin: '0 auto',
          padding: '3rem 1.25rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.25rem',
        }}
      >
        {[
          {
            icon: ExternalLink,
            title: 'Order via Toast',
            body: 'Our online ordering is powered by Toast. Browse the full menu, choose your pies and toppings, and select a pickup time.',
          },
          {
            icon: Clock,
            title: 'Open Wed–Sat',
            body: 'We\'re open Wednesday through Saturday, 11 AM–8 PM Eastern time. Orders can be placed during open hours.',
          },
          {
            icon: Phone,
            title: 'Prefer to call?',
            body: 'Happy to take your order over the phone. Give us a call at (973) 287-7220 during business hours.',
          },
        ].map((card) => {
          const Icon = card.icon;
          return (
            <div key={card.title} className="card" style={{ padding: '1.5rem' }}>
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
                  fontSize: '1.0625rem',
                  color: 'var(--color-brand-text)',
                  marginBottom: '0.5rem',
                }}
              >
                {card.title}
              </h2>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-brand-muted)', lineHeight: 1.6, margin: 0 }}>
                {card.body}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

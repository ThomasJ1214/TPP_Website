import type { Metadata } from 'next';
import { ExternalLink } from 'lucide-react';
import ToastEmbed from './ToastEmbed';

export const metadata: Metadata = {
  title: 'Menu & Order Online',
  description:
    'Browse the full Third Proof Pizzeria menu and order online. New Haven-style sourdough pies, including the signature New Haven pie, Mushroom & Onion, Vodka, and more.',
  alternates: { canonical: '/menu' },
};

const TOAST_URL = 'https://order.toasttab.com/online/thirdproofpizzeria';

export default function MenuPage() {
  return (
    <div>
      {/* Page header */}
      <div
        style={{
          backgroundColor: 'var(--color-brand-cream)',
          borderBottom: '1px solid var(--color-brand-border)',
          padding: '2.5rem 1.25rem 2rem',
          textAlign: 'center',
        }}
      >
        <span className="section-label">What we&apos;re making</span>
        <h1 className="section-title" style={{ marginBottom: '0.75rem' }}>
          Our Menu
        </h1>
        <p
          style={{
            fontSize: '1rem',
            color: 'var(--color-brand-muted)',
            maxWidth: '420px',
            margin: '0 auto 1.25rem',
            lineHeight: 1.6,
          }}
        >
          New Haven-style sourdough pies, made fresh every service. Order online for pickup.
        </p>
        <a
          href={TOAST_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ display: 'inline-flex' }}
        >
          Open full menu in new tab
          <ExternalLink size={15} />
        </a>
      </div>

      {/* Toast iframe embed */}
      <ToastEmbed url={TOAST_URL} />
    </div>
  );
}

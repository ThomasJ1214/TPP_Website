import type { Metadata } from 'next';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import InstagramIcon from '@/components/ui/InstagramIcon';
import { HOURS_DISPLAY } from '@/lib/hours';
import OpenStatusBadge from '@/components/ui/OpenStatusBadge';

export const metadata: Metadata = {
  title: 'Contact & Location',
  description:
    'Find Third Proof Pizzeria at 263 Changebridge Rd., Pine Brook, NJ 07058. Call (973) 287-7220. Open Wednesday–Saturday, 11 AM–8 PM.',
  alternates: { canonical: '/contact' },
};

const MAPS_EMBED_SRC =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ??
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.0!2d-74.358!3d40.868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s263+Changebridge+Rd+Pine+Brook+NJ+07058!5e0!3m2!1sen!2sus!4v1699000000000!5m2!1sen!2sus';

export default function ContactPage() {
  return (
    <div>
      {/* Header */}
      <div
        style={{
          backgroundColor: 'var(--color-brand-cream)',
          borderBottom: '1px solid var(--color-brand-border)',
          padding: '2.5rem 1.25rem 2rem',
          textAlign: 'center',
        }}
      >
        <span className="section-label">Come find us</span>
        <h1 className="section-title" style={{ marginBottom: '0.5rem' }}>
          Contact &amp; Location
        </h1>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
          <OpenStatusBadge />
        </div>
      </div>

      <div
        style={{
          maxWidth: '72rem',
          margin: '0 auto',
          padding: '3rem 1.25rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2.5rem',
          alignItems: 'start',
        }}
      >
        {/* Contact details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

          {/* Address card */}
          <div className="card" style={{ padding: '1.75rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--color-brand-blue-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <MapPin size={20} style={{ color: 'var(--color-brand-blue)' }} />
              </div>
              <div>
                <h2
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '1.0625rem',
                    color: 'var(--color-brand-text)',
                    marginBottom: '0.375rem',
                  }}
                >
                  Address
                </h2>
                <a
                  href="https://maps.google.com/?q=263+Changebridge+Rd+Pine+Brook+NJ+07058"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '0.9375rem',
                    color: 'var(--color-brand-blue)',
                    textDecoration: 'none',
                    lineHeight: 1.6,
                    display: 'inline-flex',
                    alignItems: 'flex-start',
                    gap: '0.3rem',
                  }}
                >
                  <span>263 Changebridge Rd., Pine Brook, NJ 07058</span>
                  <ExternalLink size={12} style={{ marginTop: '3px', flexShrink: 0 }} />
                </a>
                <p style={{ marginTop: '0.375rem', fontSize: '0.8125rem', color: 'var(--color-brand-muted)' }}>
                  Plenty of free parking available
                </p>
              </div>
            </div>
          </div>

          {/* Phone card */}
          <div className="card" style={{ padding: '1.75rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--color-brand-blue-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Phone size={20} style={{ color: 'var(--color-brand-blue)' }} />
              </div>
              <div>
                <h2
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '1.0625rem',
                    color: 'var(--color-brand-text)',
                    marginBottom: '0.25rem',
                  }}
                >
                  Phone
                </h2>
                <a
                  href="tel:+19732877220"
                  style={{
                    fontSize: '1.125rem',
                    color: 'var(--color-brand-blue)',
                    textDecoration: 'none',
                    fontWeight: 700,
                  }}
                >
                  (973) 287-7220
                </a>
              </div>
            </div>
          </div>

          {/* Hours card */}
          <div className="card" style={{ padding: '1.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.125rem' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--color-brand-blue-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Clock size={20} style={{ color: 'var(--color-brand-blue)' }} />
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '1.0625rem',
                  color: 'var(--color-brand-text)',
                }}
              >
                Hours
              </h2>
            </div>
            <div>
              {HOURS_DISPLAY.map((row, i) => {
                const isOpen = row.hours !== 'Closed';
                return (
                  <div
                    key={row.day}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '0.5rem 0',
                      borderBottom: i < HOURS_DISPLAY.length - 1 ? '1px solid var(--color-brand-border)' : 'none',
                    }}
                  >
                    <span style={{ fontSize: '0.875rem', color: 'var(--color-brand-text)', fontWeight: 500 }}>
                      {row.day}
                    </span>
                    <span
                      style={{
                        fontSize: '0.875rem',
                        color: isOpen ? 'var(--color-brand-text)' : 'var(--color-brand-muted)',
                        fontWeight: isOpen ? 500 : 400,
                      }}
                    >
                      {row.hours}
                    </span>
                  </div>
                );
              })}
            </div>
            <div
              style={{
                marginTop: '1rem',
                padding: '0.75rem',
                backgroundColor: '#FEF3C7',
                borderRadius: '0.5rem',
                fontSize: '0.8125rem',
                color: '#92400E',
              }}
            >
              Tip: Friday evenings get busy. Order ahead online!
            </div>
          </div>

          {/* Instagram */}
          <div className="card" style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--color-brand-blue-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <InstagramIcon size={20} style={{ color: 'var(--color-brand-blue)' }} />
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--color-brand-text)' }}>
                  Instagram
                </div>
                <a
                  href="https://www.instagram.com/thirdproof"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '0.9375rem', color: 'var(--color-brand-blue)', textDecoration: 'none' }}
                >
                  @thirdproof
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div>
          <div
            style={{
              borderRadius: '1rem',
              overflow: 'hidden',
              border: '1px solid var(--color-brand-border)',
              boxShadow: '0 4px 16px rgba(26,18,9,0.08)',
              aspectRatio: '4/3',
              position: 'relative',
            }}
          >
            <iframe
              src={MAPS_EMBED_SRC}
              width="100%"
              height="100%"
              style={{ border: 'none', position: 'absolute', inset: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Third Proof Pizzeria location — 263 Changebridge Rd., Pine Brook, NJ"
            />
          </div>
          <div style={{ marginTop: '0.875rem', textAlign: 'center' }}>
            <a
              href="https://maps.google.com/?q=263+Changebridge+Rd+Pine+Brook+NJ+07058"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.375rem',
                fontSize: '0.875rem',
                color: 'var(--color-brand-blue)',
                textDecoration: 'none',
              }}
            >
              Open in Google Maps
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

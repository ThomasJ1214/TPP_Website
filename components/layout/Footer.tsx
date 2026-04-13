import Link from 'next/link';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import OpenStatusBadge from '@/components/ui/OpenStatusBadge';
import InstagramIcon from '@/components/ui/InstagramIcon';
import { SITE } from '@/lib/config';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--color-brand-text)',
        color: '#ffffff',
        paddingTop: '3.5rem',
        paddingBottom: '2rem',
        paddingLeft: '1.25rem',
        paddingRight: '1.25rem',
      }}
    >
      <div className="container-max">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2.5rem',
            marginBottom: '2.5rem',
          }}
        >
          {/* Brand column */}
          <div>
            <div style={{ marginBottom: '0.75rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '1.25rem',
                  color: '#ffffff',
                  letterSpacing: '-0.01em',
                  lineHeight: 1.2,
                  display: 'block',
                }}
              >
                Third Proof Pizzeria
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-accent)',
                  fontSize: '0.9375rem',
                  color: 'var(--color-brand-blue-light)',
                  display: 'block',
                  marginTop: '0.25rem',
                }}
              >
                New Haven style pizza
              </span>
            </div>
            <p
              style={{
                fontSize: '0.875rem',
                color: 'rgba(255,255,255,0.65)',
                lineHeight: 1.6,
                maxWidth: '220px',
              }}
            >
              Sourdough crust, fresh ingredients, and a family behind every pie. Come hungry.
            </p>
            <div style={{ marginTop: '1.25rem' }}>
              <OpenStatusBadge dark />
            </div>
          </div>

          {/* Visit column */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '0.8125rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.5)',
                marginBottom: '1rem',
              }}
            >
              Visit Us
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem' }}>
                <MapPin size={15} style={{ color: 'var(--color-brand-blue-light)', marginTop: '0.15rem', flexShrink: 0 }} />
                <a
                  href={SITE.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', lineHeight: 1.5 }}
                >
                  {SITE.address.street}<br />{SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                <Phone size={15} style={{ color: 'var(--color-brand-blue-light)', flexShrink: 0 }} />
                <a
                  href={SITE.phone.href}
                  style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}
                >
                  {SITE.phone.display}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours column */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '0.8125rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.5)',
                marginBottom: '1rem',
              }}
            >
              Hours
            </h3>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem' }}>
              <Clock size={15} style={{ color: 'var(--color-brand-blue-light)', marginTop: '0.15rem', flexShrink: 0 }} />
              <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
                <div>{SITE.hours.days}</div>
                <div>{SITE.hours.time}</div>
                <div style={{ color: 'rgba(255,255,255,0.45)', marginTop: '0.25rem' }}>
                  Closed Sun · Mon · Tue
                </div>
                <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8125rem', marginTop: '0.4rem' }}>
                  Fri eve: order ahead, it fills up fast
                </div>
              </div>
            </div>
          </div>

          {/* Links column */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '0.8125rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.5)',
                marginBottom: '1rem',
              }}
            >
              Quick Links
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { href: '/menu', label: 'Menu' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/contact', label: 'Contact & Map' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      fontSize: '0.875rem',
                      color: 'rgba(255,255,255,0.75)',
                      textDecoration: 'none',
                      transition: 'color 150ms ease',
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={SITE.ordering.toastUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '0.875rem',
                    color: 'rgba(255,255,255,0.75)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                  }}
                >
                  Order Online <ExternalLink size={12} />
                </a>
              </li>
            </ul>

            {/* Instagram */}
            <div style={{ marginTop: '1.5rem' }}>
              <a
                href={SITE.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.875rem',
                  color: 'rgba(255,255,255,0.8)',
                  textDecoration: 'none',
                  padding: '0.5rem 0.875rem',
                  borderRadius: '2rem',
                  border: '1px solid rgba(255,255,255,0.2)',
                  transition: 'border-color 150ms ease, color 150ms ease',
                }}
              >
                <InstagramIcon size={15} />
                {SITE.instagram.handle}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '1.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.75rem',
          }}
        >
          <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.4)', margin: 0 }}>
            &copy; {new Date().getFullYear()} Third Proof Pizzeria · Pine Brook, NJ
          </p>
          <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.3)', margin: 0 }}>
            New Haven style sourdough pizza
          </p>
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MENU } from '@/lib/menu';
import { SITE } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Menu',
  description:
    'Full menu for Third Proof Pizzeria — New Haven-style sourdough pies, chicken cutlets, sides, desserts, and beverages. Order online for pickup.',
  alternates: { canonical: '/menu' },
};

export default function MenuPage() {
  return (
    <div style={{ backgroundColor: 'var(--color-brand-cream)', minHeight: '100vh' }}>

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
        <h1 className="section-title" style={{ marginBottom: '0.5rem' }}>
          Our Menu
        </h1>
        <p style={{ fontSize: '0.9375rem', color: 'var(--color-brand-muted)', margin: 0 }}>
          New Haven-style sourdough pies, made fresh every service. Pickup only.
        </p>
      </div>

      {/* Sticky section nav */}
      <nav
        aria-label="Menu sections"
        className="menu-section-nav"
        style={{
          position: 'sticky',
          top: '72px',
          zIndex: 40,
          backgroundColor: 'rgba(250,247,242,0.97)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid var(--color-brand-border)',
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: 0,
            maxWidth: '72rem',
            margin: '0 auto',
            padding: '0 1.25rem',
          }}
        >
          {MENU.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="menu-nav-link"
            >
              {section.title}
            </a>
          ))}
        </div>
      </nav>

      {/* Menu sections */}
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '3rem 1.25rem' }}>
        {MENU.map((section, si) => (
          <section
            key={section.id}
            id={section.id}
            style={{
              marginBottom: si < MENU.length - 1 ? '4rem' : 0,
              scrollMarginTop: '140px',
            }}
            aria-labelledby={`heading-${section.id}`}
          >
            {/* Section title */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1.75rem',
              }}
            >
              <h2
                id={`heading-${section.id}`}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.25rem, 3vw, 1.625rem)',
                  fontWeight: 700,
                  color: 'var(--color-brand-text)',
                  whiteSpace: 'nowrap',
                  margin: 0,
                }}
              >
                {section.title}
              </h2>
              <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--color-brand-border)' }} />
            </div>

            {/* Beverages — simple price list */}
            {section.id === 'beverages' ? (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                  gap: '0.625rem',
                }}
              >
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '0.875rem 1.125rem',
                      backgroundColor: '#ffffff',
                      border: '1px solid var(--color-brand-border)',
                      borderRadius: '0.625rem',
                    }}
                  >
                    <span style={{ fontSize: '0.9375rem', color: 'var(--color-brand-text)', fontWeight: 500 }}>
                      {item.name}
                    </span>
                    <span
                      style={{
                        fontSize: '0.9375rem',
                        fontWeight: 700,
                        color: 'var(--color-brand-blue)',
                        marginLeft: '1rem',
                        flexShrink: 0,
                      }}
                    >
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              /* Standard card grid */
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                  gap: '1.25rem',
                }}
              >
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="card"
                    style={{ display: 'flex', flexDirection: 'column' }}
                  >
                    {/* Optional photo */}
                    {item.image && (
                      <div style={{ position: 'relative', aspectRatio: '3/2', overflow: 'hidden' }}>
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    )}

                    {/* Card body */}
                    <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.75rem' }}>
                        <h3
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontWeight: 700,
                            fontSize: '1rem',
                            color: 'var(--color-brand-text)',
                            lineHeight: 1.3,
                            margin: 0,
                          }}
                        >
                          {item.name}
                        </h3>
                        <span
                          style={{
                            fontSize: '1rem',
                            fontWeight: 700,
                            color: 'var(--color-brand-blue)',
                            flexShrink: 0,
                          }}
                        >
                          {item.price}
                        </span>
                      </div>
                      {item.description && (
                        <p
                          style={{
                            fontSize: '0.875rem',
                            color: 'var(--color-brand-muted)',
                            lineHeight: 1.6,
                            margin: 0,
                          }}
                        >
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}

        {/* Bottom order CTA */}
        <div
          style={{
            marginTop: '4rem',
            padding: '2.5rem',
            backgroundColor: 'var(--color-brand-blue)',
            borderRadius: '1rem',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-accent)',
              fontSize: '1.125rem',
              color: 'var(--color-brand-blue-light)',
              marginBottom: '0.5rem',
            }}
          >
            Ready to eat?
          </p>
          <h2
            className="section-title-white"
            style={{ marginBottom: '1.25rem', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
          >
            Order online for pickup
          </h2>
          <div style={{ display: 'flex', gap: '0.875rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/order"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.875rem 2rem',
                backgroundColor: '#ffffff',
                color: 'var(--color-brand-blue)',
                fontWeight: 700,
                fontSize: '0.9375rem',
                fontFamily: 'var(--font-body)',
                borderRadius: '0.5rem',
                textDecoration: 'none',
              }}
            >
              Start Your Order
            </Link>
            <a
              href={SITE.phone.href}
              className="btn-outline-white"
            >
              Call {SITE.phone.display}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

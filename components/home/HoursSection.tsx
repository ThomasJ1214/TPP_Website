'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone } from 'lucide-react';
import { HOURS_DISPLAY } from '@/lib/hours';
import OpenStatusBadge from '@/components/ui/OpenStatusBadge';
import { SITE } from '@/lib/config';

gsap.registerPlugin(ScrollTrigger);

export default function HoursSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hours-col', {
        y: 44,
        opacity: 0,
        duration: 0.8,
        ease: 'power4.out',
        stagger: 0.15,
        scrollTrigger: { trigger: '.hours-col', start: 'top 82%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding"
      style={{ backgroundColor: 'var(--color-brand-cream)' }}
      aria-labelledby="hours-heading"
    >
      <div className="container-max">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3rem',
            alignItems: 'start',
          }}
        >
          {/* Hours table */}
          <div className="hours-col">
            <span className="section-label">When to visit</span>
            <h2 className="section-title" id="hours-heading" style={{ marginBottom: '1.5rem' }}>
              Hours &amp; Location
            </h2>

            <div style={{ marginBottom: '1.25rem' }}>
              <OpenStatusBadge />
            </div>

            <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
              {HOURS_DISPLAY.map((row, i) => {
                const isOpen = row.hours !== 'Closed';
                const isToday = new Date().toLocaleDateString('en-US', { weekday: 'long', timeZone: 'America/New_York' }) === row.day;
                return (
                  <div
                    key={row.day}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '0.875rem 1.25rem',
                      borderBottom: i < HOURS_DISPLAY.length - 1 ? '1px solid var(--color-brand-border)' : 'none',
                      backgroundColor: isToday ? 'var(--color-brand-blue-light)' : 'transparent',
                    }}
                  >
                    <span
                      style={{
                        fontWeight: isToday ? 700 : 500,
                        fontSize: '0.9375rem',
                        color: isToday ? 'var(--color-brand-blue-dark)' : 'var(--color-brand-text)',
                      }}
                    >
                      {row.day}
                      {isToday && (
                        <span
                          style={{
                            marginLeft: '0.5rem',
                            fontSize: '0.6875rem',
                            fontWeight: 600,
                            color: 'var(--color-brand-blue)',
                            letterSpacing: '0.06em',
                            textTransform: 'uppercase',
                          }}
                        >
                          Today
                        </span>
                      )}
                    </span>
                    <span
                      style={{
                        fontSize: '0.875rem',
                        color: isOpen
                          ? isToday ? 'var(--color-brand-blue-dark)' : 'var(--color-brand-text)'
                          : 'var(--color-brand-muted)',
                        fontWeight: isOpen ? 500 : 400,
                      }}
                    >
                      {row.hours}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Address & contact */}
          <div className="hours-col" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div
              className="card"
              style={{ padding: '1.5rem' }}
            >
              <div style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    backgroundColor: 'var(--color-brand-blue-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={18} style={{ color: 'var(--color-brand-blue)' }} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'var(--color-brand-text)', marginBottom: '0.25rem' }}>
                    Find us here
                  </div>
                  <a
                    href={SITE.address.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.9375rem', color: 'var(--color-brand-blue)', textDecoration: 'none', lineHeight: 1.5 }}
                  >
                    {SITE.address.street}<br />
                    {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                  </a>
                  <div style={{ marginTop: '0.5rem', fontSize: '0.8125rem', color: 'var(--color-brand-muted)' }}>
                    Plenty of parking available
                  </div>
                </div>
              </div>
            </div>

            <div className="card" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '0.875rem', alignItems: 'center' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    backgroundColor: 'var(--color-brand-blue-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Phone size={18} style={{ color: 'var(--color-brand-blue)' }} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'var(--color-brand-text)', marginBottom: '0.25rem' }}>
                    Give us a call
                  </div>
                  <a
                    href={SITE.phone.href}
                    style={{ fontSize: '1.0625rem', color: 'var(--color-brand-blue)', textDecoration: 'none', fontWeight: 600 }}
                  >
                    {SITE.phone.display}
                  </a>
                </div>
              </div>
            </div>

            <div
              style={{
                padding: '1.125rem 1.25rem',
                backgroundColor: 'var(--color-brand-blue-light)',
                border: '1px solid rgba(30,64,175,0.18)',
                borderRadius: '0.75rem',
                fontSize: '0.875rem',
                color: 'var(--color-brand-blue-dark)',
                lineHeight: 1.6,
              }}
            >
              <strong>Friday tip:</strong> Evenings get busy and waits can stretch an hour. Order ahead online to skip the line.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

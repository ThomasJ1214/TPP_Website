'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, ExternalLink } from 'lucide-react';
import type { Testimonial } from '@/types';
import { SITE } from '@/lib/config';

gsap.registerPlugin(ScrollTrigger);

const testimonials: Testimonial[] = [
  {
    name: 'Chris',
    rating: 5,
    text: 'Two of the most delicious pies I\'ve ever eaten. First time having New Haven style pizza. If the real deal from Connecticut is anything like this I\'m sold.',
  },
  {
    name: 'Andrew',
    rating: 5,
    text: 'The crust is crisp, light and flavorful. The sauce is slightly sweet without too much tang. They shaved fresh parm onto each slice with a fresh basil leaf. This is lovely.',
  },
  {
    name: 'Srujana',
    rating: 5,
    text: 'The pizza sauce was very flavorful and the pizza was the perfect level of crispy! The sourdough taste came through at the end. The owners were also very kind.',
  },
  {
    name: 'Mark',
    rating: 5,
    text: 'From the moment you walk in, you are greeted with a warm, family run atmosphere. The New Haven style pizza is outstanding, with a perfectly chewy, well charred crust and a sauce that is perfection.',
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', gap: '3px' }} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          style={{ color: '#F59E0B', fill: i < rating ? '#F59E0B' : 'none' }}
          aria-hidden
        />
      ))}
    </div>
  );
}

export default function RatingSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.rating-header', {
        y: 44,
        opacity: 0,
        duration: 0.85,
        ease: 'power4.out',
        scrollTrigger: { trigger: '.rating-header', start: 'top 82%' },
      });

      gsap.from('.rating-card', {
        y: 48,
        opacity: 0,
        duration: 0.7,
        ease: 'power4.out',
        stagger: 0.1,
        scrollTrigger: { trigger: '.rating-card', start: 'top 80%' },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding"
      style={{
        backgroundColor: 'var(--color-brand-warm)',
        position: 'relative',
        overflow: 'hidden',
      }}
      aria-labelledby="reviews-heading"
    >
      {/* Decorative large quote */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '3rem',
          right: '3rem',
          fontFamily: 'Georgia, serif',
          fontSize: 'clamp(8rem, 15vw, 14rem)',
          lineHeight: 1,
          color: 'rgba(26,18,9,0.04)',
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        &ldquo;
      </div>

      <div className="container-max" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div className="rating-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-label">What People Are Saying</span>
          <h2 className="section-title" id="reviews-heading" style={{ marginBottom: '1.5rem' }}>
            People love it here.
          </h2>

          {/* Aggregate rating pill */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.875rem',
              padding: '0.875rem 1.75rem',
              backgroundColor: '#ffffff',
              border: '1px solid rgba(229,221,211,0.9)',
              borderRadius: '9999px',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <div style={{ display: 'flex', gap: '2px' }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} style={{ color: '#F59E0B', fill: '#F59E0B' }} aria-hidden />
              ))}
            </div>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1.125rem',
                color: 'var(--color-brand-text)',
                letterSpacing: '-0.02em',
              }}
            >
              4.5
            </span>
            <span style={{ width: '1px', height: '16px', backgroundColor: 'var(--color-brand-border)' }} />
            <a
              href={SITE.address.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                fontSize: '0.875rem',
                color: 'var(--color-brand-blue)',
                textDecoration: 'none',
                fontWeight: 500,
              }}
            >
              Google Reviews
              <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* Testimonial grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(268px, 1fr))',
            gap: '1.375rem',
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rating-card card"
              style={{ padding: '1.875rem', position: 'relative' }}
            >
              <Stars rating={t.rating} />

              {/* Quote */}
              <div style={{ position: 'relative', marginTop: '1.25rem', marginBottom: '1.375rem' }}>
                <span
                  aria-hidden
                  style={{
                    position: 'absolute',
                    top: '-0.5rem',
                    left: '-0.375rem',
                    fontFamily: 'Georgia, serif',
                    fontSize: '3.5rem',
                    lineHeight: 1,
                    color: 'var(--color-brand-blue-light)',
                    userSelect: 'none',
                    pointerEvents: 'none',
                  }}
                >
                  &ldquo;
                </span>
                <p
                  style={{
                    margin: 0,
                    paddingTop: '1.5rem',
                    fontSize: '0.9375rem',
                    color: 'var(--color-brand-text)',
                    lineHeight: 1.7,
                    fontStyle: 'italic',
                  }}
                >
                  {t.text}
                </p>
              </div>

              {/* Author */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--color-brand-border)',
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--color-brand-blue-light), rgba(219,234,254,0.4))',
                    border: '1px solid rgba(30,64,175,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    color: 'var(--color-brand-blue)',
                    flexShrink: 0,
                  }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--color-brand-text)', lineHeight: 1.2 }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-brand-muted)', letterSpacing: '0.02em', marginTop: '0.125rem' }}>
                    Google Review
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

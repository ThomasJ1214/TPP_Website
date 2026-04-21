'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flame, Leaf, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    icon: Flame,
    title: 'The New Haven Difference',
    body: 'Our sourdough crust is fermented, hand-stretched, and fired until it blisters with that signature char. Lighter than regular dough, and honestly more satisfying.',
    accent: '#1E40AF',
    accentLight: 'rgba(30,64,175,0.08)',
  },
  {
    icon: Leaf,
    title: 'Fresh Every Day',
    body: 'Fresh-shaved Parmigiano on every pie. Sauce from hand-crushed tomatoes. Every ingredient chosen with care. No shortcuts, no compromises.',
    accent: '#059669',
    accentLight: 'rgba(5,150,105,0.08)',
  },
  {
    icon: Heart,
    title: 'Family Run, Community Loved',
    body: 'Third Proof is owner-operated and genuinely warm. Regulars feel like family. Newcomers feel it too. Good pizza, good people.',
    accent: '#DC2626',
    accentLight: 'rgba(220,38,38,0.08)',
  },
];

export default function HighlightsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.highlight-heading', {
        y: 40,
        opacity: 0,
        duration: 0.85,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.highlight-heading',
          start: 'top 82%',
        },
      });

      gsap.from('.highlight-card', {
        y: 50,
        opacity: 0,
        duration: 0.75,
        ease: 'power4.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: '.highlight-card',
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding"
      style={{ backgroundColor: 'var(--color-brand-cream)' }}
      aria-labelledby="highlights-heading"
    >
      <div className="container-max">
        <div className="highlight-heading" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-label">Why Third Proof</span>
          <h2 className="section-title" id="highlights-heading">
            One thing, done right.
          </h2>
          <p
            style={{
              marginTop: '1.125rem',
              fontSize: '1.0625rem',
              color: 'var(--color-brand-muted)',
              maxWidth: '460px',
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: 1.7,
            }}
          >
            New Haven style pizza that keeps people coming back. Made fresh, every service.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(268px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {highlights.map((h) => {
            const Icon = h.icon;
            return (
              <div
                key={h.title}
                className="highlight-card card"
                style={{
                  padding: '2.25rem',
                  borderLeft: `3px solid ${h.accent}`,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Subtle background glow */}
                <div
                  aria-hidden
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '140px',
                    height: '140px',
                    borderRadius: '50%',
                    background: `radial-gradient(circle at top right, ${h.accent}0F 0%, transparent 70%)`,
                    pointerEvents: 'none',
                  }}
                />

                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    backgroundColor: h.accentLight,
                    border: `1px solid ${h.accent}22`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.375rem',
                  }}
                >
                  <Icon size={22} style={{ color: h.accent }} />
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '1.1875rem',
                    color: 'var(--color-brand-text)',
                    marginBottom: '0.75rem',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.2,
                  }}
                >
                  {h.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.9375rem',
                    color: 'var(--color-brand-muted)',
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {h.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

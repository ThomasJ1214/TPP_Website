'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Phone, Clock } from 'lucide-react';
import { SITE } from '@/lib/config';

gsap.registerPlugin(ScrollTrigger);

export default function OrderCTASection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      });
      tl.from('.cta-eyebrow', { y: 24, opacity: 0, duration: 0.6, ease: 'power4.out' })
        .from('.cta-title',   { y: 32, opacity: 0, duration: 0.7, ease: 'power4.out' }, '-=0.4')
        .from('.cta-hint',    { y: 20, opacity: 0, duration: 0.6, ease: 'power4.out' }, '-=0.4')
        .from('.cta-buttons', { y: 20, opacity: 0, duration: 0.6, ease: 'power4.out' }, '-=0.35');
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(150deg, var(--color-brand-blue-dark) 0%, var(--color-brand-blue) 60%, #2563EB 100%)',
      }}
      aria-labelledby="order-cta-heading"
    >
      <div aria-hidden style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 85% 20%, rgba(255,255,255,0.06) 0%, transparent 40%), radial-gradient(circle at 5% 80%, rgba(255,255,255,0.04) 0%, transparent 35%)' }} />
      <div aria-hidden style={{ position: 'absolute', top: '-120px', right: '-120px', width: '420px', height: '420px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.06)' }} />
      <div aria-hidden style={{ position: 'absolute', top: '-60px', right: '-60px', width: '240px', height: '240px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.08)' }} />
      <div aria-hidden style={{ position: 'absolute', bottom: '-80px', left: '-40px', width: '280px', height: '280px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.05)' }} />

      <div className="section-padding container-max" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '3rem' }}>

          <div style={{ flex: '1 1 340px', minWidth: 0 }}>
            <span className="cta-eyebrow" style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '0.75rem' }}>
              Ready when you are
            </span>
            <h2 id="order-cta-heading" className="cta-title section-title-white" style={{ marginBottom: '1.125rem' }}>
              Order ahead.<br />Skip the wait.
            </h2>
            <div className="cta-hint" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.9375rem', lineHeight: 1.65, maxWidth: '370px' }}>
              <Clock size={15} style={{ marginTop: '3px', flexShrink: 0, color: 'rgba(255,255,255,0.4)' }} />
              <span>Friday evenings fill up fast. Get ahead of the wait — your pie will be ready when you walk in.</span>
            </div>
          </div>

          <div className="cta-buttons" style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', flexShrink: 0 }}>
            <a
              href={SITE.ordering.toastUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '1rem 2.5rem', backgroundColor: '#ffffff', color: 'var(--color-brand-blue)', fontWeight: 700, fontSize: '1rem', fontFamily: 'var(--font-body)', borderRadius: 'var(--radius-md)', border: 'none', textDecoration: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.18)', transition: 'transform 250ms var(--ease-expo), box-shadow 250ms ease', letterSpacing: '0.02em' }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-2px)'; el.style.boxShadow = '0 8px 28px rgba(0,0,0,0.24)'; }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = ''; el.style.boxShadow = '0 4px 20px rgba(0,0,0,0.18)'; }}
            >
              Order on Toast <ExternalLink size={15} />
            </a>
            <a
              href={SITE.phone.href}
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '1rem 2.5rem', backgroundColor: 'rgba(255,255,255,0.1)', color: '#ffffff', fontWeight: 600, fontSize: '1rem', fontFamily: 'var(--font-body)', borderRadius: 'var(--radius-md)', border: '1.5px solid rgba(255,255,255,0.28)', textDecoration: 'none', transition: 'background-color 200ms ease, border-color 200ms ease, transform 250ms var(--ease-expo)', letterSpacing: '0.02em' }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = 'rgba(255,255,255,0.18)'; el.style.borderColor = 'rgba(255,255,255,0.7)'; el.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = 'rgba(255,255,255,0.1)'; el.style.borderColor = 'rgba(255,255,255,0.28)'; el.style.transform = ''; }}
            >
              <Phone size={15} /> Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Clock, Phone } from 'lucide-react';
import { SITE } from '@/lib/config';

export default function OrderCTASection() {
  return (
    <section
      style={{
        backgroundColor: 'var(--color-brand-blue)',
        overflow: 'hidden',
        position: 'relative',
      }}
      aria-labelledby="order-cta-heading"
    >
      {/* Decorative circles */}
      <div aria-hidden style={{ position: 'absolute', top: '-60px', right: '-60px', width: '300px', height: '300px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.04)' }} />
      <div aria-hidden style={{ position: 'absolute', bottom: '-80px', left: '-40px', width: '240px', height: '240px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.04)' }} />

      <div className="section-padding container-max" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
          }}
        >
          <div>
            <span
              style={{
                fontFamily: 'var(--font-accent)',
                fontSize: '1.0625rem',
                color: 'var(--color-brand-blue-light)',
                display: 'block',
                marginBottom: '0.5rem',
              }}
            >
              Ready when you are
            </span>
            <h2
              id="order-cta-heading"
              className="section-title-white"
              style={{ marginBottom: '0.75rem' }}
            >
              Order ahead. Skip the wait.
            </h2>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'rgba(255,255,255,0.7)',
                fontSize: '0.9375rem',
              }}
            >
              <Clock size={15} />
              <span>Friday evenings get busy. Order ahead and your pie will be ready when you get here.</span>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
            <a
              href={SITE.ordering.toastUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.9375rem 2.25rem',
                backgroundColor: '#ffffff',
                color: 'var(--color-brand-blue)',
                fontWeight: 700,
                fontSize: '1rem',
                fontFamily: 'var(--font-body)',
                borderRadius: '0.5rem',
                border: '2px solid transparent',
                textDecoration: 'none',
                transition: 'background-color 150ms ease, transform 100ms ease',
                letterSpacing: '0.01em',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#F0F4FF'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#ffffff'; (e.currentTarget as HTMLAnchorElement).style.transform = 'none'; }}
            >
              Order on Toast
              <ExternalLink size={16} />
            </a>
            <a
              href={SITE.phone.href}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.9375rem 1.75rem',
                backgroundColor: 'transparent',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '1rem',
                fontFamily: 'var(--font-body)',
                borderRadius: '0.5rem',
                border: '2px solid rgba(255,255,255,0.5)',
                textDecoration: 'none',
                transition: 'border-color 150ms ease',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.9)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.5)'; }}
            >
              <Phone size={15} />
              Call Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

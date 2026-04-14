'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { SITE } from '@/lib/config';

export default function StickyOrderBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', stiffness: 400, damping: 40 }}
          className="md:hidden"
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 40,
            backgroundColor: 'var(--color-brand-blue)',
            padding: '0.875rem 1.25rem',
            display: 'flex',
            gap: '0.75rem',
            alignItems: 'center',
            boxShadow: '0 -4px 20px rgba(26,18,9,0.15)',
          }}
        >
          <a
            href={SITE.ordering.toastUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1rem',
              backgroundColor: '#ffffff',
              color: 'var(--color-brand-blue)',
              fontWeight: 700,
              fontSize: '0.9375rem',
              fontFamily: 'var(--font-body)',
              borderRadius: '0.5rem',
              textDecoration: 'none',
            }}
          >
            Order Online
            <ExternalLink size={15} />
          </a>
          <a
            href={SITE.phone.href}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.75rem 1rem',
              backgroundColor: 'rgba(255,255,255,0.12)',
              color: '#ffffff',
              fontWeight: 600,
              fontSize: '0.9375rem',
              fontFamily: 'var(--font-body)',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.25)',
              whiteSpace: 'nowrap',
            }}
          >
            Call Us
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

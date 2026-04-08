'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';

const TOAST_URL = 'https://order.toasttab.com/online/thirdproofpizzeria';

export default function HeroSection() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 600], ['0%', '18%']);

  return (
    <section
      style={{
        position: 'relative',
        minHeight: 'calc(100vh - 72px)',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: '#1A1209',
      }}
      aria-label="Hero"
    >
      {/* Background image with parallax */}
      <motion.div
        style={{
          position: 'absolute',
          inset: '-15% 0',
          y: imageY,
        }}
      >
        <Image
          src="/images/hero/hero-main.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          quality={90}
          style={{ objectPosition: 'center' }}
        />
      </motion.div>

      {/* Gradient overlay for text legibility (when real photo is added) */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(26,18,9,0.85) 0%, rgba(26,18,9,0.5) 60%, rgba(26,18,9,0.2) 100%)',
        }}
      />

      {/* Content */}
      <div
        className="section-padding container-max"
        style={{ position: 'relative', zIndex: 1, width: '100%' }}
      >
        <div style={{ maxWidth: '640px' }}>
          <motion.span
            className="section-label"
            style={{ color: 'var(--color-brand-blue-light)', marginBottom: '1rem' }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Pine Brook, New Jersey
          </motion.span>

          <motion.h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.08,
              letterSpacing: '-0.025em',
              marginBottom: '1.5rem',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            New Haven Pizza,<br />
            <span style={{ color: 'var(--color-brand-blue-light)' }}>Jersey Fresh.</span>
          </motion.h1>

          <motion.p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.1875rem)',
              color: 'rgba(255,255,255,0.8)',
              lineHeight: 1.65,
              marginBottom: '2.25rem',
              maxWidth: '500px',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            Crisp, charred sourdough crust. Sauce that&apos;s slightly sweet and perfectly balanced.
            Fresh-shaved Parm on every slice. A family-run spot where every pie is made with love.
          </motion.p>

          <motion.div
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem', alignItems: 'center' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
          >
            <a
              href={TOAST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: '1rem', padding: '0.875rem 2rem' }}
            >
              Order Online
              <ExternalLink size={16} />
            </a>
            <Link href="/menu" className="btn-outline-white" style={{ fontSize: '1rem', padding: '0.875rem 2rem' }}>
              View Menu
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.5rem',
              marginTop: '3rem',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(255,255,255,0.1)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {[
              { value: '4.5★', label: 'Google Rating' },
              { value: 'Wed–Sat', label: '11 AM – 8 PM' },
              { value: 'NJ\'s', label: 'Best New Haven Pie' },
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.25rem', color: '#ffffff' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.125rem' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.375rem',
          color: 'rgba(255,255,255,0.3)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        aria-hidden
      >
        <span style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Scroll</span>
        <motion.div
          style={{ width: '1px', height: '40px', backgroundColor: 'rgba(255,255,255,0.2)' }}
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}

'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SITE } from '@/lib/config';

gsap.registerPlugin(ScrollTrigger);

const EXPO_OUT = [0.16, 1, 0.3, 1] as const;

const stats = [
  { value: '4.5★', label: 'Google Rating' },
  { value: 'Wed – Sat', label: '11 AM – 8 PM' },
  { value: 'Pickup', label: 'Pine Brook, NJ' },
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 700], ['0%', '20%']);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Subtle parallax on decorative orbs via ScrollTrigger
      gsap.to('.hero-orb-1', {
        y: -60,
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: true },
      });
      gsap.to('.hero-orb-2', {
        y: -30,
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: true },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const wordVariants = {
    hidden: { y: '108%', opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 0.78, delay: 0.1 + i * 0.075, ease: EXPO_OUT },
    }),
  };

  const line2Variants = {
    hidden: { y: '108%', opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 0.78, delay: 0.42 + i * 0.085, ease: EXPO_OUT },
    }),
  };

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: '#0D0A06',
      }}
      aria-label="Hero"
    >
      {/* Parallax background image */}
      <motion.div style={{ position: 'absolute', inset: '-18% 0', y: imageY }}>
        <Image
          src="/images/hero/hero-main.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          quality={92}
          style={{ objectPosition: 'center' }}
        />
      </motion.div>

      {/* Cinematic multi-layer overlay */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background: [
            'linear-gradient(to right, rgba(8,5,2,0.92) 0%, rgba(8,5,2,0.62) 52%, rgba(8,5,2,0.22) 100%)',
            'linear-gradient(to top, rgba(8,5,2,0.65) 0%, transparent 50%)',
            'linear-gradient(to bottom, rgba(8,5,2,0.25) 0%, transparent 30%)',
          ].join(', '),
        }}
      />

      {/* Decorative orbs */}
      <div
        className="hero-orb-1"
        aria-hidden
        style={{
          position: 'absolute',
          top: '8%',
          right: '6%',
          width: '340px',
          height: '340px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(30,64,175,0.18) 0%, transparent 70%)',
          filter: 'blur(1px)',
        }}
      />
      <div
        className="hero-orb-2"
        aria-hidden
        style={{
          position: 'absolute',
          bottom: '12%',
          right: '20%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(30,64,175,0.12) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div
        ref={containerRef}
        className="section-padding container-max"
        style={{ position: 'relative', zIndex: 1, width: '100%', paddingTop: '5rem', paddingBottom: '5rem' }}
      >
        <div style={{ maxWidth: '660px' }}>

          {/* Eyebrow label */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: EXPO_OUT }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}
          >
            <span
              style={{
                display: 'inline-block',
                width: '32px',
                height: '1.5px',
                backgroundColor: 'var(--color-brand-blue-light)',
                opacity: 0.7,
              }}
            />
            <span className="section-label" style={{ color: 'var(--color-brand-blue-light)', marginBottom: 0, letterSpacing: '0.2em' }}>
              Pine Brook · New Jersey
            </span>
          </motion.div>

          {/* Word-by-word title reveal */}
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.75rem, 7.5vw, 5.5rem)',
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.0,
              letterSpacing: '-0.03em',
              marginBottom: '1.625rem',
            }}
          >
            {/* Line 1 */}
            <span style={{ display: 'block', overflow: 'hidden', paddingBottom: '0.06em' }}>
              {['New', 'Haven', 'Pizza,'].map((word, i) => (
                <motion.span
                  key={word}
                  custom={i}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  style={{ display: 'inline-block', marginRight: '0.28em' }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
            {/* Line 2 */}
            <span style={{ display: 'block', overflow: 'hidden', paddingBottom: '0.06em' }}>
              {['Jersey', 'Fresh.'].map((word, i) => (
                <motion.span
                  key={word}
                  custom={i}
                  variants={line2Variants}
                  initial="hidden"
                  animate="visible"
                  style={{
                    display: 'inline-block',
                    marginRight: '0.28em',
                    color: 'var(--color-brand-blue-light)',
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.72, ease: EXPO_OUT }}
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.1875rem)',
              color: 'rgba(255,255,255,0.72)',
              lineHeight: 1.7,
              marginBottom: '2.5rem',
              maxWidth: '490px',
            }}
          >
            Crisp, charred sourdough crust. A sauce that hits just right. Fresh Parm shaved on every slice. Family-run and proud of it.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="hero-cta-group"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.86, ease: EXPO_OUT }}
          >
            <a
              href={SITE.ordering.toastUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: '1rem', padding: '0.9375rem 2.125rem' }}
            >
              Order Online
              <ExternalLink size={15} />
            </a>
            <Link
              href="/menu"
              className="btn-outline-white"
              style={{ fontSize: '1rem', padding: '0.9375rem 2.125rem' }}
            >
              View Menu
              <ArrowRight size={15} />
            </Link>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 0,
              marginTop: '3.5rem',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + i * 0.1, ease: EXPO_OUT }}
                style={{
                  paddingRight: '2rem',
                  paddingLeft: i > 0 ? '2rem' : 0,
                  borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.12)' : 'none',
                  marginBottom: '0.75rem',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '1.375rem',
                    color: '#ffffff',
                    letterSpacing: '-0.02em',
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: '0.6875rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.42)',
                    marginTop: '0.3rem',
                  }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Animated scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        style={{
          position: 'absolute',
          bottom: '2.25rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
        }}
        aria-hidden
      >
        <span
          style={{
            fontSize: '0.625rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.28)',
            fontWeight: 600,
          }}
        >
          Scroll
        </span>
        <div style={{ position: 'relative', width: '1px', height: '48px' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(255,255,255,0.12)' }} />
          <motion.div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              backgroundColor: 'rgba(255,255,255,0.5)',
            }}
            animate={{ height: ['0%', '100%', '0%'], top: ['0%', '0%', '100%'] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.4 }}
          />
        </div>
      </motion.div>
    </section>
  );
}

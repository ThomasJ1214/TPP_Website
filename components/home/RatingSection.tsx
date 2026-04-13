'use client';

import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';
import type { Testimonial } from '@/types';
import { SITE } from '@/lib/config';

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

function StarRating({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <div style={{ display: 'flex', gap: '2px' }} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          style={{
            color: i < rating ? '#F59E0B' : '#E5DDD3',
            fill: i < rating ? '#F59E0B' : 'none',
          }}
          aria-hidden
        />
      ))}
    </div>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function RatingSection() {
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: 'var(--color-brand-warm)' }}
      aria-labelledby="reviews-heading"
    >
      <div className="container-max">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-label">What People Are Saying</span>
          <h2 className="section-title" id="reviews-heading">
            People love it here.
          </h2>

          {/* Aggregate rating */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginTop: '1.25rem',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#ffffff',
              border: '1px solid var(--color-brand-border)',
              borderRadius: '2rem',
              boxShadow: '0 2px 8px rgba(26,18,9,0.06)',
            }}
          >
            <StarRating rating={5} size={18} />
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1.125rem',
                color: 'var(--color-brand-text)',
              }}
            >
              4.5
            </span>
            <span style={{ color: 'var(--color-brand-border)', fontSize: '1rem' }}>·</span>
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
              See all Google reviews
              <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* Testimonial cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={cardVariants}
              className="card"
              style={{ padding: '1.5rem' }}
            >
              <StarRating rating={t.rating} />
              <div style={{ position: 'relative', paddingTop: '1.5rem', marginBottom: '1.125rem' }}>
                <span
                  aria-hidden
                  style={{
                    position: 'absolute',
                    top: '-0.125rem',
                    left: '-0.25rem',
                    fontFamily: 'Georgia, serif',
                    fontSize: '3rem',
                    lineHeight: 1,
                    color: 'var(--color-brand-border)',
                    userSelect: 'none',
                    pointerEvents: 'none',
                  }}
                >
                  &ldquo;
                </span>
                <p
                  style={{
                    margin: 0,
                    fontSize: '0.9375rem',
                    color: 'var(--color-brand-text)',
                    lineHeight: 1.65,
                    fontStyle: 'italic',
                  }}
                >
                  {t.text}
                </p>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                  paddingTop: '0.875rem',
                  borderTop: '1px solid var(--color-brand-border)',
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-brand-blue-light)',
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
                  <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--color-brand-text)' }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-brand-muted)' }}>
                    Google Review
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

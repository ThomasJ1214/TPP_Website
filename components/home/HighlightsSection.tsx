'use client';

import { motion } from 'framer-motion';
import { Flame, Leaf, Heart } from 'lucide-react';

const highlights = [
  {
    icon: Flame,
    title: 'The New Haven Difference',
    body: 'Our sourdough crust is fermented, hand-stretched, and fired until it blisters with that signature char. Lighter than regular dough, and honestly more satisfying.',
    accent: '#1E40AF',
  },
  {
    icon: Leaf,
    title: 'Fresh Every Day',
    body: 'Fresh-shaved Parmigiano on every pie. Sauce from hand-crushed tomatoes. Every ingredient chosen with care. No shortcuts, no compromises.',
    accent: '#059669',
  },
  {
    icon: Heart,
    title: 'Family Run, Community Loved',
    body: 'Third Proof is owner-operated and genuinely warm. Regulars feel like family. Newcomers feel it too. Good pizza, good people.',
    accent: '#DC2626',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function HighlightsSection() {
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: 'var(--color-brand-cream)' }}
      aria-labelledby="highlights-heading"
    >
      <div className="container-max">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-label">Why Third Proof</span>
          <h2 className="section-title" id="highlights-heading">
            One thing, done right.
          </h2>
          <p
            style={{
              marginTop: '1rem',
              fontSize: '1.0625rem',
              color: 'var(--color-brand-muted)',
              maxWidth: '480px',
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: 1.65,
            }}
          >
            New Haven style pizza that keeps people coming back. Made fresh, every service.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {highlights.map((h) => {
            const Icon = h.icon;
            return (
              <motion.div
                key={h.title}
                variants={cardVariants}
                className="card"
                style={{
                  padding: '2rem',
                  borderLeft: `3px solid ${h.accent}`,
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: `${h.accent}18`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
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
                    marginBottom: '0.625rem',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {h.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.9375rem',
                    color: 'var(--color-brand-muted)',
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {h.body}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

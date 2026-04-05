'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import InstagramIcon from '@/components/ui/InstagramIcon';

// Placeholder grid — client will supply real food photos
// 📸 IMAGES: /public/images/gallery/ig-*.jpg (600×600px each, food close-ups)
const GRID_COUNT = 6;

export default function InstagramSection() {
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: 'var(--color-brand-warm)' }}
      aria-labelledby="instagram-heading"
    >
      <div className="container-max">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            marginBottom: '2rem',
          }}
        >
          <div>
            <span className="section-label">Follow Along</span>
            <h2 className="section-title" id="instagram-heading">
              Fresh from the kitchen.
            </h2>
          </div>
          <a
            href="https://www.instagram.com/thirdproof"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ flexShrink: 0 }}
          >
            <InstagramIcon size={16} />
            @thirdproof
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Photo grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '0.625rem',
            borderRadius: '1rem',
            overflow: 'hidden',
          }}
        >
          {Array.from({ length: GRID_COUNT }).map((_, i) => (
            <a
              key={i}
              href="https://www.instagram.com/thirdproof"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View photo ${i + 1} on Instagram`}
              style={{
                display: 'block',
                aspectRatio: '1',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: i % 3 === 0 ? '#2D1F10' : i % 3 === 1 ? '#1E3A8A' : '#3D2E1E',
              }}
            >
              {/*
                📸 IMAGE: /public/images/gallery/ig-{i+1}.jpg
                Dimensions: 600×600px
                Description: Close-up food/pizza shot for Instagram grid
                Replace the placeholder div below with:
                <Image src={`/images/gallery/ig-${i+1}.jpg`} alt={`Third Proof Pizzeria photo ${i+1}`} fill className="object-cover transition-transform duration-300 hover:scale-105" />
              */}
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0.4,
                }}
              >
                <InstagramIcon size={28} style={{ color: '#ffffff' }} />
              </div>
              {/* Hover overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(29,78,216,0)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background-color 200ms ease',
                }}
                className="hover:!bg-[rgba(29,78,216,0.4)] group"
              >
                <InstagramIcon size={24} style={{ color: 'rgba(255,255,255,0)', transition: 'color 200ms ease' }} className="group-hover:!text-white" />
              </div>
            </a>
          ))}
        </motion.div>

        <div style={{ textAlign: 'center', marginTop: '1.75rem' }}>
          <a
            href="https://www.instagram.com/thirdproof"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '0.9375rem',
              color: 'var(--color-brand-blue)',
              textDecoration: 'none',
              fontWeight: 500,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.375rem',
            }}
          >
            See more on Instagram
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

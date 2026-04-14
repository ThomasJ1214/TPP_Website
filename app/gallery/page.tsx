import type { Metadata } from 'next';
import InstagramIcon from '@/components/ui/InstagramIcon';
import { SITE } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Photos from Third Proof Pizzeria — New Haven-style sourdough pies, the dining room, and life in the kitchen.',
  alternates: { canonical: '/gallery' },
};

// 📸 IMAGES: /public/images/gallery/gallery-*.jpg
// Provide 9–12 photos: mix of whole pies, slices, kitchen action, dining room
// Dimensions: 1200×800px for landscape, 800×1000px for portrait
// When photos are ready, replace this page's content with an image grid:
// const photos = [
//   { src: '/images/gallery/gallery-1.jpg', alt: 'New Haven pie fresh from the oven', width: 1200, height: 800 },
//   ...
// ]

export default function GalleryPage() {
  return (
    <div>
      {/* Header */}
      <div
        style={{
          backgroundColor: 'var(--color-brand-cream)',
          borderBottom: '1px solid var(--color-brand-border)',
          padding: '2.5rem 1.25rem 2rem',
          textAlign: 'center',
        }}
      >
        <span className="section-label">Behind the counter</span>
        <h1 className="section-title" style={{ marginBottom: '0.75rem' }}>
          Gallery
        </h1>
        <p
          style={{
            fontSize: '1rem',
            color: 'var(--color-brand-muted)',
            maxWidth: '380px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}
        >
          Pies, people, and the craft behind every slice.
        </p>
      </div>

      {/* Coming soon + Instagram prompt */}
      <div
        style={{
          maxWidth: '640px',
          margin: '0 auto',
          padding: '5rem 1.25rem',
          textAlign: 'center',
        }}
      >
        {/* Instagram icon */}
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '16px',
            backgroundColor: 'var(--color-brand-blue-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem',
          }}
        >
          <InstagramIcon size={28} style={{ color: 'var(--color-brand-blue)' }} />
        </div>

        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            color: 'var(--color-brand-text)',
            lineHeight: 1.2,
            marginBottom: '0.875rem',
          }}
        >
          Photos coming soon.
        </h2>

        <p
          style={{
            fontSize: '1rem',
            color: 'var(--color-brand-muted)',
            lineHeight: 1.65,
            maxWidth: '440px',
            margin: '0 auto 2rem',
          }}
        >
          We&apos;re putting the finishing touches on the gallery. In the meantime, follow us on Instagram for fresh pies, daily specials, and behind-the-scenes moments.
        </p>

        <a
          href={SITE.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          <InstagramIcon size={16} />
          Follow {SITE.instagram.handle}
        </a>
      </div>
    </div>
  );
}

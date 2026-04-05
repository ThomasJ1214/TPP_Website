import type { Metadata } from 'next';
import InstagramIcon from '@/components/ui/InstagramIcon';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Photos from Third Proof Pizzeria — New Haven-style sourdough pies, the dining room, and life in the kitchen.',
  alternates: { canonical: '/gallery' },
};

// 📸 IMAGES: /public/images/gallery/gallery-*.jpg
// Provide 9–12 photos: mix of whole pies, slices, kitchen action, dining room
// Dimensions: 1200×800px for landscape, 800×1000px for portrait
// Replace the placeholder items array with real image data when photos are available:
// const photos = [
//   { src: '/images/gallery/gallery-1.jpg', alt: 'New Haven pie fresh from the oven', width: 1200, height: 800 },
//   ...
// ]

const placeholders = Array.from({ length: 9 }, (_, i) => ({ id: i + 1 }));

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

      {/* Photo grid */}
      <div
        style={{
          padding: '2.5rem 1.25rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1rem',
          }}
        >
          {placeholders.map((p) => (
            <div
              key={p.id}
              style={{
                aspectRatio: p.id % 5 === 0 ? '4/3' : '1',
                backgroundColor: p.id % 3 === 0 ? '#2D1F10' : p.id % 3 === 1 ? '#1A2D4E' : '#3D2E1E',
                borderRadius: '0.75rem',
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/*
                📸 Replace each placeholder with:
                <Image
                  src={`/images/gallery/gallery-${p.id}.jpg`}
                  alt="Third Proof Pizzeria"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              */}
              <p
                style={{
                  fontSize: '0.75rem',
                  color: 'rgba(255,255,255,0.3)',
                  fontFamily: 'var(--font-body)',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                  padding: '1rem',
                }}
              >
                Photo {p.id}<br />
                <span style={{ fontSize: '0.6875rem' }}>coming soon</span>
              </p>
            </div>
          ))}
        </div>

        {/* Instagram prompt */}
        <div
          style={{
            marginTop: '3rem',
            textAlign: 'center',
            padding: '2.5rem',
            backgroundColor: 'var(--color-brand-warm)',
            borderRadius: '1rem',
            border: '1px solid var(--color-brand-border)',
          }}
        >
          <InstagramIcon size={28} style={{ color: 'var(--color-brand-blue)', margin: '0 auto 0.75rem' }} />
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '1.25rem',
              color: 'var(--color-brand-text)',
              marginBottom: '0.5rem',
            }}
          >
            See it fresh on Instagram
          </h2>
          <p style={{ fontSize: '0.9375rem', color: 'var(--color-brand-muted)', marginBottom: '1.25rem' }}>
            We post daily specials, fresh pies, and behind-the-scenes moments.
          </p>
          <a
            href="https://www.instagram.com/thirdproof"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <InstagramIcon size={15} />
            Follow @thirdproof
          </a>
        </div>
      </div>
    </div>
  );
}

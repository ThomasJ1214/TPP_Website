import { Mail } from 'lucide-react';
import NewsletterForm from '@/components/ui/NewsletterForm';

export default function NewsletterSection() {
  return (
    <section
      aria-labelledby="newsletter-heading"
      style={{
        background: 'linear-gradient(135deg, var(--color-brand-blue-dark) 0%, var(--color-brand-blue) 100%)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Decorative blobs */}
      <div aria-hidden style={{ position: 'absolute', top: '-80px', right: '-80px', width: '320px', height: '320px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.04)' }} />
      <div aria-hidden style={{ position: 'absolute', bottom: '-60px', left: '10%', width: '200px', height: '200px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.03)' }} />

      <div
        className="section-padding container-max"
        style={{ position: 'relative', zIndex: 1 }}
      >
        <div style={{ maxWidth: '560px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
          <div
            style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem',
            }}
          >
            <Mail size={22} style={{ color: 'var(--color-brand-blue-light)' }} />
          </div>

          <h2
            id="newsletter-heading"
            className="section-title-white"
            style={{ marginBottom: '0.75rem' }}
          >
            Stay in the loop.
          </h2>
          <p
            style={{
              fontSize: '1.0625rem',
              color: 'rgba(255,255,255,0.72)',
              lineHeight: 1.6,
              marginBottom: '2rem',
            }}
          >
            New pies, seasonal specials, and the occasional exciting news from the kitchen. Be the first to know.
          </p>

          <NewsletterForm />

          <p
            style={{
              marginTop: '1rem',
              fontSize: '0.8125rem',
              color: 'rgba(255,255,255,0.4)',
            }}
          >
            No spam, ever. Unsubscribe any time.
          </p>
        </div>
      </div>
    </section>
  );
}

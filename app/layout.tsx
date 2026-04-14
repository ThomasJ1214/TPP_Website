import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageLoader from '@/components/ui/PageLoader';
import SmoothScroll from '@/components/ui/SmoothScroll';
import NewsletterPopup from '@/components/ui/NewsletterPopup';
import StickyOrderBar from '@/components/ui/StickyOrderBar';
import { SITE } from '@/lib/config';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://thirdproofpizzeria.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Third Proof Pizzeria — New Haven Pizza in Pine Brook, NJ',
    template: '%s | Third Proof Pizzeria',
  },
  description:
    'Award-worthy New Haven-style sourdough pizza in Pine Brook, NJ. Crisp charred crust, fresh ingredients, family-run atmosphere. Order online or visit Wed–Sat.',
  keywords: [
    'pizza',
    'New Haven pizza',
    'Pine Brook NJ',
    'sourdough pizza',
    'pizzeria',
    'Morris County pizza',
    'Third Proof',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Third Proof Pizzeria',
    title: 'Third Proof Pizzeria — New Haven Pizza in Pine Brook, NJ',
    description:
      'New Haven-style sourdough pizza, made with fresh ingredients and a perfectly charred crust. Wed–Sat, 11 AM–8 PM.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Third Proof Pizzeria — New Haven-style Pizza in Pine Brook, NJ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Third Proof Pizzeria — New Haven Pizza in Pine Brook, NJ',
    description: 'New Haven-style sourdough pizza in Pine Brook, NJ. Wed–Sat, 11 AM–8 PM.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: SITE_URL,
  },
  other: {
    'theme-color': '#FAF7F2',
  },
};

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: SITE.name,
  description:
    'New Haven-style sourdough pizza restaurant in Pine Brook, NJ. Crisp charred crust, fresh ingredients, family-run atmosphere.',
  url: SITE_URL,
  telephone: SITE.phone.e164,
  servesCuisine: 'New Haven-style Pizza',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.state,
    postalCode: SITE.address.zip,
    addressCountry: 'US',
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Wednesday', opens: '11:00', closes: '20:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Thursday', opens: '11:00', closes: '20:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '11:00', closes: '20:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '11:00', closes: '20:00' },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.5',
    bestRating: '5',
    ratingCount: '50',
  },
  sameAs: [SITE.instagram.url],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <head>
        {/* Google Fonts — preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;600;700;800&family=Satisfy&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <SmoothScroll />
        <PageLoader />
        <NewsletterPopup />
        <Navbar />
        <main className="flex-1 pt-[72px]">{children}</main>
        <Footer />
        <StickyOrderBar />
        <Analytics />
      </body>
    </html>
  );
}

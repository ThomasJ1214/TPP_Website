import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import HighlightsSection from '@/components/home/HighlightsSection';
import OrderCTASection from '@/components/home/OrderCTASection';
import RatingSection from '@/components/home/RatingSection';
import HoursSection from '@/components/home/HoursSection';
import InstagramSection from '@/components/home/InstagramSection';
import NewsletterSection from '@/components/home/NewsletterSection';

export const metadata: Metadata = {
  title: 'Third Proof Pizzeria — New Haven Pizza in Pine Brook, NJ',
  description:
    'Award-worthy New Haven-style sourdough pizza in Pine Brook, NJ. Crisp charred crust, fresh ingredients, family-run atmosphere. Open Wed–Sat, 11 AM–8 PM.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HighlightsSection />
      <OrderCTASection />
      <RatingSection />
      <HoursSection />
      <InstagramSection />
      <NewsletterSection />
    </>
  );
}

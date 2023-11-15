import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import Hero from 'components/home/hero';
import Footer from 'components/layout/footer';
import LoadingDots from 'components/loading-dots';

import { Suspense } from 'react';

export const runtime = 'edge';

export const metadata = {
  description:
    'Explore Modern Moon Love, a high-performance ecommerce store offering modern boho attire for children. Crafted with love and built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={<LoadingDots className="someClassName" />}>
        <ThreeItemGrid />
      </Suspense>
      <Suspense fallback={<LoadingDots className="someClassName" />}>
        <Carousel />
      </Suspense>
      <Suspense fallback={<LoadingDots className="someClassName" />}>
        <Footer className="someClassName" />
      </Suspense>
    </>
  );
}

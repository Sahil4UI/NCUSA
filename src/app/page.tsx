import HeroCarousel from '@/components/home/hero-section';
import HighlightsSection from '@/components/home/highlights-section';
import CoursesOverview from '@/components/home/courses-overview';
import WhyChooseUs from '@/components/home/why-choose-us';
import HomeTestimonials from '@/components/home/home-testimonials';
import CtaSection from '@/components/home/cta-section';

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <main className='relative z-10 bg-background'>
        <HighlightsSection />
        <CoursesOverview />
        <WhyChooseUs />
        <HomeTestimonials />
        <CtaSection />
      </main>
    </>
  );
}

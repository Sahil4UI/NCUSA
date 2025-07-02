import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HighlightsSection from '@/components/home/highlights-section';
import CoursesOverview from '@/components/home/courses-overview';
import WhyChooseUs from '@/components/home/why-choose-us';
import HomeTestimonials from '@/components/home/home-testimonials';
import CtaSection from '@/components/home/cta-section';

export default function Home() {
  return (
    <>
      <section className="relative py-32 lg:py-40 text-center">
          <div className="container">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  Upskill Your Future, Transform Your Life.
              </h1>
              <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl">
                  Join New Computer UpSkill Academy (NCUSA) — Transforming students into global healthcare & tech professionals with 100% placement assistance.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button asChild size="lg" className="rounded-full">
                      <Link href="/courses">
                          Explore Courses <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="rounded-full bg-background/80">
                      <Link href="/contact">Contact Us</Link>
                  </Button>
              </div>
          </div>
      </section>
      <HighlightsSection />
      <CoursesOverview />
      <WhyChooseUs />
      <HomeTestimonials />
      <CtaSection />
    </>
  );
}

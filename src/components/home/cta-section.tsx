import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="container">
        <div className="glass-card p-8 md:p-12 lg:p-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Transform Your Life?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Your journey towards a successful career in healthcare and technology starts here. Take the first step today.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-full">
                <Link href="/contact">
                    Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full bg-background/50">
                <Link href="#courses">Download Brochure</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

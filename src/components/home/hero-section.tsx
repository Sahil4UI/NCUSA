import ParticleBackground from '@/components/layout/particle-background';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  const keyPoints = [
    '100% Placement Assistance',
    'ISO Certified, Recognized Courses',
    'Experienced Faculty & Mentors',
    'Future-Ready Modern Labs',
    'Scholarships & Hostel Facilities',
  ];

  return (
    <section className="relative py-20 sm:py-28 md:py-32 lg:py-40 bg-gradient-to-b from-background to-blue-50 dark:from-background dark:to-blue-950/20 overflow-hidden">
      <ParticleBackground />
      <div className="container relative z-10 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Upskill Your Future with <span className="text-primary">NCUSA</span>
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl">
          Join New Computer UpSkill Academy — Transforming students into global
          healthcare & tech professionals.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {keyPoints.map((point, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">{point}</span>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="w-full sm:w-auto rounded-full">
            <Link href="/contact">Enroll Now</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto rounded-full bg-background/80">
            <Link href="#courses">Download Brochure</Link>
          </Button>
           <Button asChild size="lg" variant="ghost" className="w-full sm:w-auto rounded-full">
            <Link href="/contact">Book Free Counseling</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

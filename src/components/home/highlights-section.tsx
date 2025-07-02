import AnimatedCounter from '@/components/shared/animated-counter';
import { Award, Building, Briefcase, Star, Users } from 'lucide-react';

const highlights = [
  { icon: Users, value: 1000, label: 'Successful Alumni', suffix: '+' },
  { icon: Building, value: 6, label: 'Modern Campuses', suffix: '+' },
  { icon: Briefcase, value: 15, label: 'Industry Tie-ups', suffix: '+' },
  { icon: Star, value: 10, label: 'Years of Excellence', suffix: '+' },
  { icon: Award, value: 50, label: 'Trusted by Hospitals', suffix: '+' },
];

export default function HighlightsSection() {
  return (
    <section id="highlights" className="py-16 sm:py-24 bg-background">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="glass-card text-center p-6 flex flex-col items-center justify-center transition-transform transform hover:-translate-y-2">
              <highlight.icon className="h-10 w-10 text-primary mb-4" />
              <div className="text-4xl font-bold tracking-tighter">
                <AnimatedCounter target={highlight.value} />{highlight.suffix}
              </div>
              <p className="text-sm text-muted-foreground mt-2">{highlight.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

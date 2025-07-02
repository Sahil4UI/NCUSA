import { WHY_CHOOSE_US_POINTS } from '@/lib/constants';
import Image from 'next/image';
import { GlassCard } from '../shared/glass-card';
import { GraduationCap, Sparkles, Award, Dna, Bot, BookOpen } from 'lucide-react';

const WhyChooseUsIconMap: { [key: string]: React.ElementType } = {
    BookOpen,
    Dna,
    GraduationCap,
    Award,
    Sparkles,
    Bot
};


export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-24 bg-transparent">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <GlassCard>
            <div className="space-y-8">
              <div className="text-left">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose NCUSA?</h2>
                <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                  We provide a holistic learning environment with a focus on practical skills and future-ready education.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {WHY_CHOOSE_US_POINTS.map((point) => {
                  const IconComponent = WhyChooseUsIconMap[point.iconName];
                  return (
                    <div key={point.title} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          {IconComponent && <IconComponent className="w-6 h-6 text-primary" />}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold">{point.title}</h3>
                        <p className="text-sm text-muted-foreground">{point.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </GlassCard>
          <div className="relative h-96 lg:h-full min-h-[400px]">
            <GlassCard className="p-2 w-full h-full overflow-hidden">
                <Image
                    src="https://placehold.co/600x800/E6E6FA/000000"
                    alt="NCUSA Campus"
                    data-ai-hint="modern campus building"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover rounded-xl"
                />
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}

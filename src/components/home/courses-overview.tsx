import { COURSES_DATA } from '@/lib/constants';
import { GlassCard } from '../shared/glass-card';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ArrowRight, GraduationCap, Dna, Sparkles } from 'lucide-react';

const featuredCourses = [
    COURSES_DATA.nursing[2], // B.Sc Nursing
    COURSES_DATA.paramedical[0], // DMLT
    COURSES_DATA.skillDevelopment[1], // Digital Marketing
];

const IconMap: { [key: string]: React.ElementType } = {
    GraduationCap,
    Dna,
    Sparkles,
};


export default function CoursesOverview() {
  return (
    <section id="courses" className="py-16 sm:py-24 bg-transparent">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Premier Courses</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Explore our range of courses designed to launch your career in healthcare and technology.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => {
                const IconComponent = IconMap[course.iconName];
                return (
                    <GlassCard key={index} className="flex flex-col">
                        <div className="flex-grow">
                            <div className="mb-4">
                                {IconComponent && <IconComponent className="h-10 w-10 text-primary" />}
                            </div>
                            <h3 className="text-xl font-bold font-headline">{course.title}</h3>
                            <p className="text-primary font-semibold text-sm my-2">{course.duration}</p>
                            <p className="text-muted-foreground text-sm">{course.description}</p>
                        </div>
                         <Button variant="outline" asChild className="mt-6 w-full bg-white/50 dark:bg-black/20">
                            <Link href="/courses">View Detailed Curriculum</Link>
                        </Button>
                    </GlassCard>
                )
            })}
        </div>
        <div className="text-center mt-12">
            <Button asChild size="lg" className='rounded-full'>
                <Link href="/courses">
                    Explore All Courses <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}

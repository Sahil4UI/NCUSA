'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import { COURSES_DATA } from '@/lib/constants';
import { Button } from '../ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const featuredCourses = [
  { ...COURSES_DATA.nursing[2], image: 'https://placehold.co/1200x800/E6E6FA/FFFFFF', "data-ai-hint": "nurses in training" }, // B.Sc Nursing
  { ...COURSES_DATA.paramedical[0], image: 'https://placehold.co/1200x800/87CEEB/FFFFFF', "data-ai-hint": "medical lab scientist" }, // DMLT
  { ...COURSES_DATA.skillDevelopment[1], image: 'https://placehold.co/1200x800/E6E6FA/FFFFFF', "data-ai-hint": "digital marketing strategy" }, // Digital Marketing
  { ...COURSES_DATA.paramedical[1], image: 'https://placehold.co/1200x800/87CEEB/FFFFFF', "data-ai-hint": "radiology technologist" }, // DRIT
];

export default function HeroCarousel() {
  return (
    <section className="relative w-full overflow-hidden">
        <Carousel
            plugins={[
                Autoplay({
                  delay: 5000,
                  stopOnInteraction: true,
                }),
            ]}
            opts={{
                align: 'start',
                loop: true,
            }}
            className="w-full h-[calc(100vh-4rem)] min-h-[600px] md:min-h-[700px]"
        >
            <CarouselContent className="h-full">
                {featuredCourses.map((course, index) => (
                    <CarouselItem key={index} className="h-full">
                        <div className="relative w-full h-full">
                            <Image
                                src={course.image}
                                alt={course.title}
                                data-ai-hint={course['data-ai-hint']}
                                fill
                                className="object-cover"
                                priority={index === 0}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                            <div className="absolute inset-0 flex items-center justify-center text-white">
                                <div className="container text-center max-w-4xl">
                                    <div className="bg-black/30 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                                      <course.icon className="h-16 w-16 text-primary mx-auto mb-4" />
                                      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                                        {course.title}
                                      </h1>
                                      <p className="mt-4 text-primary font-semibold">{course.duration}</p>
                                      <p className="mt-2 max-w-2xl mx-auto text-lg text-neutral-200">
                                        {course.description}
                                      </p>
                                      <div className="mt-10">
                                          <Button asChild size="lg" className="rounded-full">
                                              <Link href="/courses">
                                                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                              </Link>
                                          </Button>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden sm:flex" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden sm:flex" />
        </Carousel>
    </section>
  );
}

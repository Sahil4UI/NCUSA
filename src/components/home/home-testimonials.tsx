import { TESTIMONIALS } from "@/lib/constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Star } from "lucide-react";

export default function HomeTestimonials() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-background to-blue-50 dark:from-background dark:to-blue-950/20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Success Stories from Our Alumni</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Hear what our students, parents, and recruiters have to say about their experience with NCUSA.
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {TESTIMONIALS.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col justify-between glass-card overflow-hidden">
                    <CardContent className="p-6 flex flex-col items-center text-center flex-grow">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        data-ai-hint={testimonial['data-ai-hint']}
                        width={80}
                        height={80}
                        className="rounded-full mb-4 border-4 border-white/50"
                      />
                       <div className="flex gap-1 text-yellow-400 mb-4">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 flex-grow">&quot;{testimonial.quote}&quot;</p>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-xs text-primary">{testimonial.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}

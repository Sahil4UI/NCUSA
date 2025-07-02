import PageHeader from "@/components/shared/page-header";
import { TESTIMONIALS } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Star } from "lucide-react";

export default function TestimonialsPage() {
    return (
        <>
            <PageHeader
                title="Success Stories"
                subtitle="Hear what our students, parents, and industry partners have to say about their experience with NCUSA."
            />
            <section className="py-16 sm:py-24">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {TESTIMONIALS.map((testimonial) => (
                            <Card key={testimonial.name} className="h-full flex flex-col justify-between glass-card overflow-hidden">
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
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

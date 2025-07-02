'use client';
import PageHeader from "@/components/shared/page-header";
import { GALLERY_IMAGES } from "@/lib/constants";
import Image from "next/image";
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const galleryCategories = ['All', ...Array.from(new Set(GALLERY_IMAGES.map(img => img.category)))];

export default function GalleryPage() {
    const [filter, setFilter] = useState('All');

    const filteredImages = filter === 'All'
        ? GALLERY_IMAGES
        : GALLERY_IMAGES.filter(image => image.category === filter);

    return (
        <>
            <PageHeader
                title="Gallery"
                subtitle="A glimpse into the vibrant life at NCUSA. Explore our campus, labs, events, and more."
            />
            <section className="py-16 sm:py-24">
                <div className="container">
                    <div className="flex justify-center flex-wrap gap-2 mb-12">
                        {galleryCategories.map(category => (
                            <Button
                                key={category}
                                variant={filter === category ? "default" : "outline"}
                                onClick={() => setFilter(category)}
                                className="rounded-full"
                            >
                                {category}
                            </Button>
                        ))}
                    </div>

                    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
                        {filteredImages.map((image, index) => (
                            <div key={index} className="break-inside-avoid">
                                <Card className="overflow-hidden glass-card p-2 group">
                                     <Image
                                        src={image.src}
                                        alt={image.alt}
                                        data-ai-hint={image['data-ai-hint']}
                                        width={600}
                                        height={400}
                                        className="rounded-lg object-cover w-full h-auto transition-transform duration-300 group-hover:scale-105"
                                    />
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

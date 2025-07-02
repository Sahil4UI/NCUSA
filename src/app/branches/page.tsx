import PageHeader from "@/components/shared/page-header";
import { BRANCHES } from "@/lib/constants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Building, Sparkles } from "lucide-react";
import Image from 'next/image';

export default function BranchesPage() {
    return (
        <>
            <PageHeader
                title="Our Campuses"
                subtitle="We have a growing network of campuses across the region, each equipped with modern facilities."
            />
            <section className="py-16 sm:py-24">
                <div className="container">
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                             <Card className="glass-card p-2">
                                <Image 
                                    src="https://placehold.co/1200x800.png" 
                                    alt="Map of NCUSA Branches"
                                    data-ai-hint="India map Haryana"
                                    width={1200}
                                    height={800}
                                    className="rounded-lg object-cover w-full h-auto"
                                />
                             </Card>
                        </div>
                        <div className="space-y-4">
                             <h3 className="text-2xl font-bold">List of Campuses</h3>
                            {BRANCHES.map(branch => (
                                <Card key={branch.name} className="glass-card">
                                    <CardContent className="p-4 flex items-center gap-4">
                                        <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold">{branch.name}</p>
                                            <p className="text-sm text-muted-foreground">{branch.highlight}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

'use client';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { BookOpen, Award, Dna, GraduationCap, HeartPulse, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const courseCategories = ['All', 'Nursing', 'Paramedical', 'Skill Development', 'Certificate'];

const IconMap: { [key: string]: React.ElementType } = {
    HeartPulse,
    GraduationCap,
    Dna,
    Sparkles,
    Award
};

interface Course {
    title: string;
    duration: string;
    description: string;
    iconName: string;
    category: string;
}

interface CourseListProps {
    allCourses: Course[];
}

export default function CourseList({ allCourses }: CourseListProps) {
    const [filter, setFilter] = useState('All');

    const filteredCourses = filter === 'All'
        ? allCourses
        : allCourses.filter(course => course.category === filter);

    return (
        <section className="py-16 sm:py-24">
            <div className="container">
                <div className="flex justify-center flex-wrap gap-2 mb-12">
                    {courseCategories.map(category => (
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCourses.map((course, index) => {
                        const IconComponent = IconMap[course.iconName];
                        return (
                            <Card key={index} className="flex flex-col glass-card">
                                <CardHeader>
                                    <div className="mb-4">
                                        {IconComponent && <IconComponent className="h-10 w-10 text-primary" />}
                                    </div>
                                    <CardTitle>{course.title}</CardTitle>
                                    <CardDescription className="text-primary font-semibold">{course.duration}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-muted-foreground text-sm">{course.description}</p>
                                </CardContent>
                                <CardFooter>
                                    <Button asChild variant="outline" className="w-full bg-white/50 dark:bg-black/20">
                                        <Link href="/contact">
                                            Download Curriculum <BookOpen className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        );
                    })}
                </div>

                {filteredCourses.length === 0 && (
                    <div className="text-center py-16 text-muted-foreground">
                        <p>No courses found for this category.</p>
                    </div>
                )}
            </div>
        </section>
    );
}

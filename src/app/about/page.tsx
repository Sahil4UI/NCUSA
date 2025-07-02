import PageHeader from "@/components/shared/page-header";
import { GlassCard } from "@/components/shared/glass-card";
import { Award, Check, Flag, Target, Users, Gem } from "lucide-react";
import Image from "next/image";

const timelineEvents = [
  { year: "2014", event: "NCUSA Founded", description: "Established with a vision to redefine healthcare and tech education." },
  { year: "2016", event: "First Paramedical Batch", description: "Launched our popular DMLT and DRIT courses." },
  { year: "2018", event: "ISO 9001:2015 Certification", description: "Recognized for our commitment to quality education." },
  { year: "2020", event: "Expanded to 3 Campuses", description: "Opened new branches in Karnal and Kaithal." },
  { year: "2022", event: "Launched B.Sc Nursing", description: "Introduced our flagship degree program in nursing." },
  { year: "2024", event: "1000+ Alumni Milestone", description: "Celebrating a decade of excellence and student success." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About NCUSA"
        subtitle="Redefining healthcare & technical education in India with a blend of advanced training and future-oriented upskilling."
      />

      <section className="py-16 sm:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Who We Are</h2>
              <p className="mt-4 text-muted-foreground">
                New Computer UpSkill Academy (NCUSA) is a leading ISO-certified institution redefining healthcare & technical education in India. We combine advanced medical training with future-oriented tech upskilling to empower students for global careers. Our curriculum is designed in collaboration with industry experts to ensure our students are job-ready from day one.
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Target className="h-8 w-8 text-primary"/>
                    <h3 className="text-xl font-bold">Our Mission</h3>
                  </div>
                  <p className="text-muted-foreground">To create globally competent professionals by combining practical knowledge, technology, and strong human values.</p>
                </div>
                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Flag className="h-8 w-8 text-primary"/>
                      <h3 className="text-xl font-bold">Our Vision</h3>
                    </div>
                  <p className="text-muted-foreground">To be the most innovative and trusted institute for healthcare and technical upskilling in the region.</p>
                </div>
              </div>
            </div>
            <GlassCard>
                <Image src="https://placehold.co/600x400.png" data-ai-hint="team collaboration" alt="NCUSA Team" width={600} height={400} className="rounded-xl" />
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-muted/50">
        <div className="container">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <GlassCard className="text-center"><Gem className="mx-auto h-8 w-8 text-primary mb-2" /> Excellence</GlassCard>
                <GlassCard className="text-center"><Check className="mx-auto h-8 w-8 text-primary mb-2" /> Integrity</GlassCard>
                <GlassCard className="text-center"><Award className="mx-auto h-8 w-8 text-primary mb-2" /> Innovation</GlassCard>
                <GlassCard className="text-center"><Users className="mx-auto h-8 w-8 text-primary mb-2" /> Inclusivity</GlassCard>
            </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container">
           <h2 className="text-3xl font-bold tracking-tight text-center mb-16">Our Journey</h2>
            <div className="relative">
                <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-border rounded-full"></div>
                {timelineEvents.map((item) => (
                    <div key={item.year} className="flex items-center w-full mb-8">
                        <div className={`w-1/2 ${parseInt(item.year, 10) % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                            <GlassCard>
                                <p className="text-primary font-bold">{item.year}</p>
                                <h3 className="font-semibold">{item.event}</h3>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </GlassCard>
                        </div>
                        <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                        <div className="w-1/2"></div>
                    </div>
                ))}
            </div>
        </div>
      </section>
      
    </>
  );
}

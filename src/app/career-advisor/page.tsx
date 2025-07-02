'use client';
import { useState, useTransition } from 'react';
import PageHeader from '@/components/shared/page-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Bot, Loader2, Sparkles } from 'lucide-react';
import { type CareerPathRecommendationOutput } from '@/ai/flows/career-path-recommendation';
import { getCareerPathRecommendation } from './actions';

const formSchema = z.object({
  interests: z.string().min(20, 'Please describe your interests in at least 20 characters.'),
});

export default function CareerAdvisorPage() {
  const [isPending, startTransition] = useTransition();
  const [recommendation, setRecommendation] = useState<CareerPathRecommendationOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      interests: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setError(null);
    setRecommendation(null);
    startTransition(async () => {
      const result = await getCareerPathRecommendation(values);
      if (result.error) {
        setError(result.error);
      } else {
        setRecommendation(result.data);
      }
    });
  };

  return (
    <>
      <PageHeader
        title="AI Career Advisor"
        subtitle="Not sure which path to take? Describe your interests, and our AI-powered tool will suggest the best courses for you at NCUSA."
      />
      <section className="py-16 sm:py-24">
        <div className="container max-w-4xl">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot /> Find Your Path
              </CardTitle>
              <CardDescription>
                Tell us about your passions, skills, and what you enjoy doing. For example: "I'm good at science, enjoy helping people, and want a stable job in healthcare."
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="interests"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Interests and Aspirations</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="I'm interested in..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isPending} className="w-full">
                    {isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        Get Recommendation <Sparkles className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {error && (
            <Card className="mt-8 border-destructive">
              <CardHeader>
                <CardTitle className="text-destructive">An Error Occurred</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{error}</p>
              </CardContent>
            </Card>
          )}

          {recommendation && (
            <Card className="mt-8 glass-card">
              <CardHeader>
                <CardTitle className="text-primary">Your Personalized Recommendation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg mb-2">Recommended Courses:</h3>
                  <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground whitespace-pre-wrap">{recommendation.courseRecommendations}</div>
                </div>
                 <div>
                  <h3 className="font-bold text-lg mb-2">Reasoning:</h3>
                   <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground whitespace-pre-wrap">{recommendation.reasoning}</div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </>
  );
}

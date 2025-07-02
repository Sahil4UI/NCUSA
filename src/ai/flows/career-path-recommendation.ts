'use server';
/**
 * @fileOverview An AI-powered career path recommendation tool.
 *
 * - careerPathRecommendation - A function that provides personalized course recommendations based on user interests.
 * - CareerPathRecommendationInput - The input type for the careerPathRecommendation function.
 * - CareerPathRecommendationOutput - The return type for the careerPathRecommendation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CareerPathRecommendationInputSchema = z.object({
  interests: z
    .string()
    .describe(
      'A description of the prospective student\'s interests, skills, and career aspirations.'
    ),
});
export type CareerPathRecommendationInput = z.infer<
  typeof CareerPathRecommendationInputSchema
>;

const CareerPathRecommendationOutputSchema = z.object({
  courseRecommendations: z
    .string()
    .describe(
      'A list of recommended courses based on the provided interests.'
    ),
  reasoning: z
    .string()
    .describe(
      'Explanation of why the courses are recommended based on the provided interests.'
    ),
});
export type CareerPathRecommendationOutput = z.infer<
  typeof CareerPathRecommendationOutputSchema
>;

export async function careerPathRecommendation(
  input: CareerPathRecommendationInput
): Promise<CareerPathRecommendationOutput> {
  return careerPathRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'careerPathRecommendationPrompt',
  input: {schema: CareerPathRecommendationInputSchema},
  output: {schema: CareerPathRecommendationOutputSchema},
  prompt: `You are an expert career counselor at New Computer UpSkill Academy (NCUSA).

You will provide personalized course recommendations based on the prospective student's interests, skills, and career aspirations.
Explain why you are recommending each course and how it aligns with their interests.

Consider the following courses offered by NCUSA:
- Nursing: ANM (2 Years), GNM (3 Years), B.Sc Nursing (4 Years)
- Paramedical: DMLT, DRIT, DOT, DPT, DOTT
- Skill Development & Computer Courses: Advanced Diploma in Computer Applications, Digital Marketing, Office Automation & Accounting, Graphic & Web Design, Spoken English & Soft Skills
- Certificate Courses: ECG Technician, First Aid & Emergency Care, Blood Bank Technician

Interests: {{{interests}}}
`,
});

const careerPathRecommendationFlow = ai.defineFlow(
  {
    name: 'careerPathRecommendationFlow',
    inputSchema: CareerPathRecommendationInputSchema,
    outputSchema: CareerPathRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

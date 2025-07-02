'use server';

import {
  careerPathRecommendation,
  type CareerPathRecommendationInput,
  type CareerPathRecommendationOutput,
} from '@/ai/flows/career-path-recommendation';

export async function getCareerPathRecommendation(
  input: CareerPathRecommendationInput
): Promise<{ data: CareerPathRecommendationOutput | null; error: string | null }> {
  try {
    const result = await careerPathRecommendation(input);
    return { data: result, error: null };
  } catch (error) {
    console.error('Error in career path recommendation:', error);
    return { data: null, error: 'Failed to generate recommendation. Please try again.' };
  }
}

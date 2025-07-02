
'use server';

import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  phone: z.string().min(10, "Phone number must be at least 10 digits."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type ContactFormData = z.infer<typeof formSchema>;

export async function submitContactForm(
  data: ContactFormData
): Promise<{ success: boolean; message: string }> {
  const validation = formSchema.safeParse(data);

  if (!validation.success) {
    return { success: false, message: 'Invalid form data.' };
  }

  // --- Backend Logic Placeholder ---
  // In a real application, you would:
  // 1. Store the data in a database (e.g., Firebase Firestore, Supabase, etc.).
  // 2. Send an email notification using a service (e.g., Resend, SendGrid).
  // The Gemini API key you provided is for AI features, not for sending emails.
  
  console.log('--- New Contact Inquiry ---');
  console.log('Name:', data.name);
  console.log('Email:', data.email);
  console.log('Phone:', data.phone);
  console.log('Message:', data.message);
  console.log('-------------------------');

  // Simulate a network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return { success: true, message: 'Thank you for your message! We will get back to you soon.' };
}

import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Inter, Space_Grotesk } from 'next/font/google';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster"
import ParticleBackground from '@/components/layout/particle-background';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'NCUSA Academy Hub - Upskill Your Future, Transform Your Life',
  description:
    'Join New Computer UpSkill Academy (NCUSA) — Transforming students into global healthcare & tech professionals with 100% placement assistance.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable,
          spaceGrotesk.variable
        )}
      >
        <ParticleBackground />
        <div className="relative flex min-h-dvh flex-col bg-background/90 backdrop-blur-sm">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}

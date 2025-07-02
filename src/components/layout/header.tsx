'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { GraduationCap, Menu, ArrowRight } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setSheetOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b dark bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2 text-foreground">
          <GraduationCap className="h-6 w-6" />
          <span className="font-bold sm:inline-block font-headline">NCUSA</span>
        </Link>
        <nav className="hidden gap-6 text-sm md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'transition-colors hover:text-foreground',
                pathname === link.href
                  ? 'text-foreground font-semibold'
                  : 'text-foreground/70'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2">
          <Button asChild className="hidden rounded-full md:inline-flex">
            <Link href="/contact">
              <span className="font-bold">Enroll Now</span>
              <ArrowRight />
            </Link>
          </Button>
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="dark flex flex-col bg-background/95 p-6 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-none"
            >
              <div className="flex-1">
                <Link href="/" className="flex items-center space-x-2 mb-10" onClick={() => setSheetOpen(false)}>
                  <GraduationCap className="h-7 w-7 text-primary" />
                  <span className="text-xl font-bold font-headline text-foreground">NCUSA</span>
                </Link>
                <div className="flex flex-col gap-5">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setSheetOpen(false)}
                      className={cn(
                        'text-lg transition-colors hover:text-primary',
                        pathname === link.href
                          ? 'text-primary font-semibold'
                          : 'text-foreground/80'
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
              <Button asChild size="lg" className="w-full">
                <Link href="/contact" onClick={() => setSheetOpen(false)}>
                  <span className="font-bold">Enroll Now</span>
                  <ArrowRight />
                </Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

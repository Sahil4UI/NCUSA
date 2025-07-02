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
          <Button asChild className="hidden md:inline-flex rounded-full">
            <Link href="/contact">
              <span className="font-bold">Enroll Now</span>
              <ArrowRight />
            </Link>
          </Button>
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="dark">
              <Link href="/" className="mr-6 flex items-center space-x-2 mb-6 text-foreground">
                <GraduationCap className="h-6 w-6" />
                <span className="font-bold font-headline">NCUSA</span>
              </Link>
              <div className="flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setSheetOpen(false)}
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
                <Button asChild className="mt-4">
                    <Link href="/contact" onClick={() => setSheetOpen(false)}>
                        <span className="font-bold">Enroll Now</span>
                        <ArrowRight />
                    </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

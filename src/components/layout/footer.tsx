import { GraduationCap, Facebook, Instagram, Youtube, Bot } from 'lucide-react';
import Link from 'next/link';
import { NAV_LINKS, COURSES_DATA, CONTACT_INFO, SOCIAL_LINKS } from '@/lib/constants';

export default function Footer() {
  const courseCategories = Object.keys(COURSES_DATA);

  return (
    <footer className="dark bg-background border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold font-headline">NCUSA</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Upskill Your Future, Transform Your Life. Join us to become a global healthcare and tech professional.
            </p>
            <div className="flex space-x-4">
              <Link href={SOCIAL_LINKS.facebook} target="_blank" className="text-muted-foreground hover:text-primary transition-colors"><Facebook size={20} /></Link>
              <Link href={SOCIAL_LINKS.instagram} target="_blank" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={20} /></Link>
              <Link href={SOCIAL_LINKS.youtube} target="_blank" className="text-muted-foreground hover:text-primary transition-colors"><Youtube size={20} /></Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.slice(0, 5).map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Courses</h3>
            <ul className="space-y-2">
              {courseCategories.map(category => (
                <li key={category}>
                  <Link href="/courses" className="text-muted-foreground hover:text-primary transition-colors text-sm capitalize">{category}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Get In Touch</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{CONTACT_INFO.address}</li>
              <li>{CONTACT_INFO.email}</li>
              <li>{CONTACT_INFO.phone1}</li>
            </ul>
             <Link href="/career-advisor" className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-primary hover:underline">
              <Bot size={16}/> AI Career Advisor
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-black/20 py-4 border-t">
        <div className="container text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} New Computer UpSkill Academy. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

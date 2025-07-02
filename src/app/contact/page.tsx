import PageHeader from "@/components/shared/page-header";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/lib/constants";
import { Mail, MapPin, Phone, Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";
import ContactForm from "./contact-form";
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function ContactPage() {
    return (
        <>
            <PageHeader
                title="Contact Us"
                subtitle="We're here to help! Reach out to us for admissions, counseling, or any other inquiries."
            />
            <section className="py-16 sm:py-24">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <Phone className="h-6 w-6 text-primary mt-1" />
                                        <div>
                                            <h3 className="font-semibold">Phone</h3>
                                            <a href={`tel:${CONTACT_INFO.phone1}`} className="text-muted-foreground hover:text-primary">{CONTACT_INFO.phone1}</a><br/>
                                            <a href={`tel:${CONTACT_INFO.phone2}`} className="text-muted-foreground hover:text-primary">{CONTACT_INFO.phone2}</a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Mail className="h-6 w-6 text-primary mt-1" />
                                        <div>
                                            <h3 className="font-semibold">Email</h3>
                                            <a href={`mailto:${CONTACT_INFO.email}`} className="text-muted-foreground hover:text-primary">{CONTACT_INFO.email}</a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <MapPin className="h-6 w-6 text-primary mt-1" />
                                        <div>
                                            <h3 className="font-semibold">Address</h3>
                                            <p className="text-muted-foreground">{CONTACT_INFO.address}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="h-80 w-full rounded-2xl overflow-hidden glass-card p-2">
                                <iframe
                                    className="w-full h-full rounded-lg border-0"
                                    loading="lazy"
                                    allowFullScreen
                                    referrerPolicy="no-referrer-when-downgrade"
                                    src="https://maps.google.com/maps?q=NCUSA%20Kurukshetra&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                ></iframe>
                            </div>

                            <div className="space-y-4">
                                <h3 className="font-semibold">Connect on Social Media</h3>
                                <div className="flex space-x-4">
                                    <Button asChild variant="outline" size="icon">
                                        <Link href={SOCIAL_LINKS.facebook} target="_blank"><Facebook /></Link>
                                    </Button>
                                    <Button asChild variant="outline" size="icon">
                                        <Link href={SOCIAL_LINKS.instagram} target="_blank"><Instagram /></Link>
                                    </Button>
                                    <Button asChild variant="outline" size="icon">
                                        <Link href={SOCIAL_LINKS.youtube} target="_blank"><Youtube /></Link>
                                    </Button>
                                    <Button asChild variant="outline" size="icon">
                                        <Link href={SOCIAL_LINKS.whatsapp} target="_blank"><MessageCircle /></Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div>
                           <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

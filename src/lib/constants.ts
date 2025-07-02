import { GraduationCap, HeartPulse, Sparkles, Award, Dna, Bot, BookOpen, MapPin, Phone, Mail } from 'lucide-react';

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/courses', label: 'Courses' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/branches', label: 'Branches' },
  { href: '/contact', label: 'Contact' },
  { href: '/career-advisor', label: 'AI Advisor' },
];

export const COURSES_DATA = {
  nursing: [
    { title: 'ANM (Auxiliary Nursing Midwifery)', duration: '2 Years', description: 'A foundational course for a career in community health and nursing.', iconName: 'HeartPulse' },
    { title: 'GNM (General Nursing and Midwifery)', duration: '3 Years', description: 'Comprehensive training in nursing, midwifery, and general healthcare.', iconName: 'HeartPulse' },
    { title: 'B.Sc Nursing', duration: '4 Years', description: 'A degree program for advanced nursing practice and leadership roles in healthcare.', iconName: 'GraduationCap' },
  ],
  paramedical: [
    { title: 'DMLT (Diploma in Medical Lab Technology)', duration: '2 Years', description: 'Train to become a skilled lab technician performing various diagnostic tests.', iconName: 'Dna' },
    { title: 'DRIT (Diploma in Radiography & Imaging Technology)', duration: '2 Years', description: 'Learn to operate X-ray, CT scan, and MRI equipment.', iconName: 'Dna' },
    { title: 'DOT (Diploma in Operation Theatre Technology)', duration: '2 Years', description: 'Prepare for a crucial role in operation theatre management and surgical assistance.', iconName: 'Dna' },
    { title: 'DPT (Diploma in Physiotherapy)', duration: '2 Years', description: 'Gain skills in therapeutic exercises and physical rehabilitation techniques.', iconName: 'Dna' },
    { title: 'DOTT (Diploma in Ophthalmic Technology)', duration: '2 Years', description: 'Specialize in eye care, diagnostics, and assisting ophthalmologists.', iconName: 'Dna' },
  ],
  skillDevelopment: [
    { title: 'Advanced Diploma in Computer Applications', duration: '1 Year', description: 'Master advanced computer skills for the modern IT industry.', iconName: 'Sparkles' },
    { title: 'Digital Marketing', duration: '6 Months', description: 'Explore SEO, SEM, social media marketing, and content strategy.', iconName: 'Sparkles' },
    { title: 'Office Automation & Accounting', duration: '1 Year', description: 'Become proficient in office management software and accounting principles.', iconName: 'Sparkles' },
    { title: 'Graphic & Web Design', duration: '1 Year', description: 'Unleash your creativity by learning design principles and web development.', iconName: 'Sparkles' },
    { title: 'Spoken English & Soft Skills', duration: '3 Months', description: 'Enhance your communication, confidence, and professional etiquette.', iconName: 'Sparkles' },
  ],
  certificate: [
    { title: 'ECG Technician', duration: '6 Months', description: 'Specialized training in performing and interpreting electrocardiograms.', iconName: 'Award' },
    { title: 'First Aid & Emergency Care', duration: '3 Months', description: 'Learn life-saving techniques and emergency response protocols.', iconName: 'Award' },
    { title: 'Blood Bank Technician', duration: '6 Months', description: 'Gain expertise in blood collection, storage, and transfusion processes.', iconName: 'Award' },
  ],
};

export const ALL_COURSES = [
  ...COURSES_DATA.nursing.map(c => ({ ...c, category: 'Nursing' })),
  ...COURSES_DATA.paramedical.map(c => ({ ...c, category: 'Paramedical' })),
  ...COURSES_DATA.skillDevelopment.map(c => ({ ...c, category: 'Skill Development' })),
  ...COURSES_DATA.certificate.map(c => ({ ...c, category: 'Certificate' })),
];

export const TESTIMONIALS = [
    {
        quote: "NCUSA transformed my life and gave me the confidence to work internationally. The faculty is amazing and the placement support is unparalleled.",
        name: "Anjali Sharma",
        role: "B.Sc Nursing Graduate",
        image: "https://placehold.co/100x100/E6E6FA/000000",
        "data-ai-hint": "smiling student",
    },
    {
        quote: "Amazing faculty, modern labs, and full support for placements. I got a job in a top hospital right after my DMLT course.",
        name: "Rohan Verma",
        role: "DMLT Graduate",
        image: "https://placehold.co/100x100/87CEEB/000000",
        "data-ai-hint": "male professional",
    },
    {
        quote: "The best decision of my career. The practical training at NCUSA is top-notch. Thank you for making my dream a reality!",
        name: "Simran Kaur",
        role: "ANM Graduate",
        image: "https://placehold.co/100x100/E6E6FA/000000",
        "data-ai-hint": "happy graduate",
    },
    {
        quote: "As a parent, I was impressed by the safe and friendly campus environment and the focus on overall student development.",
        name: "Mr. Gupta",
        role: "Parent",
        image: "https://placehold.co/100x100/87CEEB/000000",
        "data-ai-hint": "professional man",
    },
    {
        quote: "NCUSA graduates are well-prepared and technically sound. We are always happy to hire from them.",
        name: "HR Manager",
        role: "Fortis Hospital",
        image: "https://placehold.co/100x100/E6E6FA/000000",
        "data-ai-hint": "corporate headshot",
    }
];

export const WHY_CHOOSE_US_POINTS = [
    { title: "Modern Smart Classrooms", description: "Engaging learning with digital boards.", iconName: 'BookOpen' },
    { title: "Advanced Labs", description: "Fully equipped for practical training.", iconName: 'Dna' },
    { title: "Hostel Facilities", description: "Comfortable and secure AC & non-AC rooms.", iconName: 'GraduationCap' },
    { title: "Merit-Based Scholarships", description: "Financial aid for deserving students.", iconName: 'Award' },
    { title: "Industrial Visits & Workshops", description: "Regular exposure to the professional world.", iconName: 'Sparkles' },
    { title: "AI-Powered Career Guidance", description: "Personalized course recommendations.", iconName: 'Bot' },
];

export const GALLERY_IMAGES = [
    { src: 'https://placehold.co/600x400/87CEEB/FFFFFF', alt: 'Campus life at NCUSA', category: 'Campus Life', "data-ai-hint": "university campus" },
    { src: 'https://placehold.co/400x600/E6E6FA/FFFFFF', alt: 'Students in practical training lab', category: 'Practical Training', "data-ai-hint": "science lab" },
    { src: 'https://placehold.co/600x400/87CEEB/FFFFFF', alt: 'Events and workshops', category: 'Events & Workshops', "data-ai-hint": "conference room" },
    { src: 'https://placehold.co/600x400/E6E6FA/FFFFFF', alt: 'Alumni meetups', category: 'Alumni Meetups', "data-ai-hint": "group photo" },
    { src: 'https://placehold.co/400x600/87CEEB/FFFFFF', alt: 'Hostel and facilities', category: 'Hostel & Facilities', "data-ai-hint": "dorm room" },
    { src: 'https://placehold.co/600x400/E6E6FA/FFFFFF', alt: 'Students in a modern classroom', category: 'Campus Life', "data-ai-hint": "modern classroom" },
    { src: 'https://placehold.co/400x600/87CEEB/FFFFFF', alt: 'Medical lab with equipment', category: 'Practical Training', "data-ai-hint": "medical laboratory" },
    { src: 'https://placehold.co/600x400/E6E6FA/FFFFFF', alt: 'Annual sports day event', category: 'Events & Workshops', "data-ai-hint": "sports event" },
];

export const BRANCHES = [
    { name: 'Kurukshetra (Main Campus)', highlight: 'Advanced labs & hostel', position: { lat: 29.9695, lng: 76.8783 } },
    { name: 'Karnal', highlight: 'Smart classrooms, industrial tie-ups', position: { lat: 29.6857, lng: 76.9905 } },
    { name: 'Kaithal', highlight: 'New digital library', position: { lat: 29.8021, lng: 76.3968 } },
    { name: 'Ambala', highlight: 'Central location, large practical training area', position: { lat: 30.3782, lng: 76.7767 } },
    { name: 'Yamunanagar', highlight: 'Focused on paramedical excellence', position: { lat: 30.1290, lng: 77.2674 } },
    { name: 'Panipat', highlight: 'Integrated skill development center', position: { lat: 29.3909, lng: 76.9635 } },
];

export const CONTACT_INFO = {
    phone1: '+91-9050305000',
    phone2: '+91-9050405000',
    email: 'ncusaindia@gmail.com',
    address: 'Near New Bus Stand, Kurukshetra, Haryana, India',
    mapLocation: 'https://maps.google.com/?q=NCUSA,Kurukshetra'
};

export const SOCIAL_LINKS = {
    facebook: '#',
    instagram: '#',
    youtube: '#',
    whatsapp: `https://wa.me/919050305000`,
};

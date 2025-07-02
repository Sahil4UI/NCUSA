interface PageHeaderProps {
    title: string;
    subtitle: string;
}
  
export default function PageHeader({ title, subtitle }: PageHeaderProps) {
    return (
        <section className="py-16 sm:py-20 bg-gradient-to-b from-background to-blue-50 dark:from-background dark:to-blue-950/20">
            <div className="container text-center">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                    {title}
                </h1>
                <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl">
                    {subtitle}
                </p>
            </div>
        </section>
    );
}

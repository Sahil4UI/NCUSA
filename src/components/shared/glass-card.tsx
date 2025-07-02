import { cn } from "@/lib/utils"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const GlassCard = ({ className, children, ...props }: GlassCardProps) => {
  return (
    <div className={cn("glass-card p-6 transition-all duration-300 hover:shadow-2xl hover:border-white/40", className)} {...props}>
      {children}
    </div>
  )
}

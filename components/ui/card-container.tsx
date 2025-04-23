import { cn } from '@/lib/utils';

interface CardContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function CardContainer({ children, className }: CardContainerProps) {
  return (
    <div className={cn(
      "bg-card/90 backdrop-blur-sm border border-border/40 rounded-lg shadow-sm p-6 md:p-8",
      className
    )}>
      {children}
    </div>
  );
}
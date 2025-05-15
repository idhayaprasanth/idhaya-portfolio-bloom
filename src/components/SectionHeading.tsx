
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  alignment = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10",
        {
          "text-left": alignment === "left",
          "text-center": alignment === "center",
          "text-right": alignment === "right",
        },
        className
      )}
    >
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">
        {title}
      </h2>
      {subtitle && <p className="text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>}
      <div 
        className={cn(
          "w-20 h-1 bg-primary mt-4",
          {
            "mr-auto": alignment === "left",
            "mx-auto": alignment === "center",
            "ml-auto": alignment === "right",
          }
        )}
      />
    </div>
  );
}

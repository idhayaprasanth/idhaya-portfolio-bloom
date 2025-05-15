
import { cn } from "@/lib/utils";

interface SkillIconProps {
  name: string;
  icon: string;
  className?: string;
}

export function SkillIcon({ name, icon, className }: SkillIconProps) {
  return (
    <div className={cn("flex flex-col items-center group", className)}>
      <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-lg bg-muted p-3 transition-all duration-300 group-hover:bg-primary/10 group-hover:scale-105">
        <img 
          src={icon} 
          alt={name} 
          className="w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-110" 
        />
      </div>
      <span className="mt-2 text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors duration-200">
        {name}
      </span>
    </div>
  );
}

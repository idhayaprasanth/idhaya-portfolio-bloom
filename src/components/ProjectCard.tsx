
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github } from "lucide-react";

interface Technology {
  name: string;
  color: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: Technology[];
  githubLink: string;
  features: string[];
  learnings: string;
}

export function ProjectCard({
  title,
  description,
  technologies,
  githubLink,
  features,
  learnings,
}: ProjectCardProps) {
  return (
    <Card className="card-hover overflow-hidden border border-border bg-card">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{title}</span>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech.name}
              className="px-2 py-1 rounded-full text-xs font-medium"
              style={{ backgroundColor: `${tech.color}20`, color: tech.color }}
            >
              {tech.name}
            </span>
          ))}
        </div>
        <ul className="space-y-2 list-disc pl-5">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-muted-foreground">{feature}</li>
          ))}
        </ul>
        <div className="pt-2">
          <p className="text-sm font-medium">What I learned:</p>
          <p className="text-sm text-muted-foreground">{learnings}</p>
        </div>
      </CardContent>
      <CardFooter>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Button className="w-full bg-primary hover:bg-primary/80">
            View Project
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}

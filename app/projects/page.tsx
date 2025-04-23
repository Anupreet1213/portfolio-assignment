import { CardContainer } from "@/components/ui/card-container";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl?: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    title: "Runic Vault",
    description:
      "RunicVault is a gaming marketplace where users can explore, purchase, and manage their favorite games. Built with a powerful backend and dynamic frontend, RunicVault serves as an e-commerce platform for games.",
    tags: ["React.js", "NodeJS", "Express", "MongoDB", "Stripe"],
    image: "/assets/project1.png",
    githubUrl: "https://github.com/Anupreet1213/RunicVault",
  },
  {
    title: "Stroke.io",
    description:
      "All-in-one markdown editor, collaborative canvas, and diagram-as-code builder!",
    tags: ["Next.js", "ConvexDB", "Kinde"],
    image:
      "/assets/project2.png",
    demoUrl: "https://stroke-io.vercel.app/",
    githubUrl: "https://github.com/Anupreet1213/stroke.io",
  },
];

export default function ProjectsPage() {
  return (
    <div className="container py-12 md:py-24 px-4 md:px-6 max-w-5xl mx-auto">
      <div className="grid gap-8 md:gap-12">
        <section className="space-y-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 animate-fade-in">
            My Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            A selection of my recent work and side projects
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-6 animate-fade-in-up delay-300">
          {projects.map((project, index) => (
            <CardContainer key={index} className="overflow-hidden group">
              <div className="aspect-video w-full overflow-hidden rounded-t-lg relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  {project?.demoUrl && (
                    <Link
                      href={project.demoUrl}
                      target="_blank"
                      className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      <ExternalLinkIcon className="w-4 h-4" />
                      Live Demo
                    </Link>
                  )}
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    Source Code
                  </Link>
                </div>
              </div>
            </CardContainer>
          ))}
        </div>
      </div>
    </div>
  );
}

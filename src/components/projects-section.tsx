
'use client';

import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { projects } from '@/lib/data';
import { Button } from './ui/button';
import { Eye, Github } from 'lucide-react';
import Image from 'next/image';

export function ProjectsSection() {
  const isExternalUrl = (url: string) => url.startsWith('http');

  return (
    <section id="projects" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">My Projects</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">A selection of my work, showcasing my skills and passion for development.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg">
              <CardHeader>
                <div className="aspect-video relative overflow-hidden rounded-t-lg bg-muted">
                  <Image
                    src={project.imageUrl}
                    alt={`Showcase of ${project.title}`}
                    fill
                    className="object-cover"
                    data-ai-hint={project.aiHint}
                  />
                  {isExternalUrl(project.videoUrl) && (
                    <Link href={project.videoUrl} target="_blank" passHref>
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                        <Eye className="w-12 h-12 text-white" />
                      </div>
                    </Link>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardTitle className="font-headline text-2xl mb-2">{project.title}</CardTitle>
                <p className="text-muted-foreground text-base text-justify">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end items-center gap-4">
                <Link href={project.videoUrl} target="_blank" passHref>
                    <Button variant="outline">
                        <Eye className="mr-2 h-4 w-4" /> View Demo
                    </Button>
                </Link>
                <Link href={project.githubUrl} target="_blank" passHref>
                  <Button>
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

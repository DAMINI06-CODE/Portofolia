import Link from 'next/link';
import { Button } from './ui/button';
import { Download, ArrowRight } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center text-center overflow-hidden p-4">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-teal-50/10 to-green-100/10 dark:from-background dark:via-teal-950/5 dark:to-green-950/5"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.02]"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-headline font-bold">
            <span className="block bg-gradient-to-r from-primary via-teal-600 to-accent text-transparent bg-clip-text">
              Hi, I’m {personalInfo.name},
            </span>
            <span className="block mt-2 text-foreground">a {personalInfo.title} 🚀</span>
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-headline font-bold absolute inset-0 -z-10 opacity-20 [mask-image:linear-gradient(to_bottom,transparent,black)]" aria-hidden="true" style={{ transform: 'scaleY(-1)', transformOrigin: 'bottom' }}>
            <span className="block bg-gradient-to-r from-primary via-teal-600 to-accent text-transparent bg-clip-text">
              Hi, I’m {personalInfo.name},
            </span>
            <span className="block mt-2 text-foreground">a {personalInfo.title} 🚀</span>
          </h1>
        </div>

        <p className="mt-8 text-lg md:text-xl max-w-3xl mx-auto text-foreground/80 animate-fade-in-up [animation-delay:0.5s]">
          Building beautiful and functional web applications.
        </p>
        
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up [animation-delay:1s]">
          <Link href="#projects">
            <Button size="lg" className="w-full sm:w-auto">
              View Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <a href={personalInfo.resumeUrl} download="Damini-S-Resume.pdf">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Download Resume <Download className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

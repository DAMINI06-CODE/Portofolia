import { education } from '@/lib/data';
import { GraduationCap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function EducationSection() {
  return (
    <section id="education" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">Education</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">My academic journey and qualifications.</p>
        </div>
        
        <div className="relative border-l-2 border-primary/20 pl-6 space-y-10">
            <span className="absolute -left-[1.35rem] top-0 flex items-center justify-center w-10 h-10 bg-primary rounded-full ring-8 ring-background">
                <GraduationCap className="text-primary-foreground"/>
            </span>
            {education.map((edu, index) => (
                <div key={index} className="relative">
                    <div className="absolute -left-[1.35rem] top-3 w-4 h-4 bg-primary rounded-full ring-4 ring-background"></div>
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl">{edu.institution}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-lg font-semibold text-foreground/90">{edu.degree}</p>
                            <p className="text-muted-foreground">{edu.period}</p>
                            <p className="mt-2 text-primary font-bold">{edu.result}</p>
                        </CardContent>
                    </Card>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}

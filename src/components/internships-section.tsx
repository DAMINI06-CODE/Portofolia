import { internships } from '@/lib/data';
import { Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';

export function InternshipsSection() {
  return (
    <section id="internships" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">Internships</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">My professional experience and internships.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {internships.map((internship, index) => (
                <Card key={index}>
                    <CardHeader className="flex flex-row items-start gap-4">
                        <div className="flex-shrink-0">
                           <Briefcase className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                            <CardTitle className="font-headline text-2xl">{internship.company}</CardTitle>
                            <p className="text-lg font-semibold text-foreground/90">{internship.role}</p>
                            <p className="text-muted-foreground">{internship.period}</p>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-foreground/80">{internship.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}

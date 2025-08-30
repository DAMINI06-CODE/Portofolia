import { certifications } from '@/lib/data';
import { Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">Certifications</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">My professional certifications and qualifications.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
                <Card key={index} className="text-center">
                    <CardHeader>
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                            <Award className="w-8 h-8 text-primary" />
                        </div>
                        <CardTitle className="font-headline text-2xl">{cert.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{cert.date}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}

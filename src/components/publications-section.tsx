import { publications } from '@/lib/data';
import { BookOpenText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function PublicationsSection() {
  return (
    <section id="publications" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">Research & Publications</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">My contributions to the field of technology and research.</p>
        </div>
        
        <div className="space-y-8">
            {publications.map((pub, index) => (
                <Card key={index}>
                    <CardHeader className='flex flex-row items-start gap-4'>
                        <BookOpenText className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <CardTitle className="font-headline text-2xl mb-2">{pub.title}</CardTitle>
                            <p className="text-muted-foreground">{pub.venue}</p>
                        </div>
                    </CardHeader>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';
import { personalInfo } from '@/lib/data';

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <div className="relative aspect-square rounded-full overflow-hidden shadow-2xl rotate-3">
              <Image
                src={personalInfo.photoUrl}
                alt={`A portrait of ${personalInfo.name}`}
                layout="fill"
                objectFit="cover"
                className="scale-125"
                data-ai-hint="woman portrait"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/GgAJ0gL8Qd8z3wAAAABJRU5ErkJggg=="
              />
            </div>
          </div>
          <div className="md:col-span-3">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-6">About Me</h2>
            <div className="space-y-4 text-lg text-foreground/80 text-justify">
              {personalInfo.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

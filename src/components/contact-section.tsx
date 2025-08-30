'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import { personalInfo } from '@/lib/data';
import { sendContactEmail } from '@/app/actions';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export function ContactSection() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await sendContactEmail(values);
    if (result.success) {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
    } else {
      toast({
        title: "Error",
        description: result.error,
        variant: "destructive",
      });
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">Get In Touch</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">Have a question or want to work together? Let's connect.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-card p-8 rounded-lg shadow-xl">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} className="py-6"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="your.email@example.com" {...field} className="py-6"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Tell me how I can help you" {...field} rows={5} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg" className="w-full" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Form>
          <div className="mt-12 flex justify-center gap-6">
            <Link href={personalInfo.socials.github} target="_blank" aria-label="GitHub">
              <Button variant="outline" size="icon" className="h-14 w-14 rounded-full">
                <Github className="h-7 w-7" />
              </Button>
            </Link>
            <Link href={personalInfo.socials.linkedin} target="_blank" aria-label="LinkedIn">
              <Button variant="outline" size="icon" className="h-14 w-14 rounded-full">
                <Linkedin className="h-7 w-7" />
              </Button>
            </Link>
            <Link href={personalInfo.socials.twitter} target="_blank" aria-label="Twitter">
              <Button variant="outline" size="icon" className="h-14 w-14 rounded-full">
                <Twitter className="h-7 w-7" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
